let flock;
let fishColor1
let fishColor2;
let bodyColor;
let beachDark = false;

function fishSetup() {
    fishColor1 = color(159, 211, 224);
    fishColor2 = color(92, 255, 150);

    flock = new Flock();

    for (let i = 0; i < 120; i++) {
        let b = new Boid(random(width), random(250, 750));   // off screen, left
        b.velocity = createVector(random(1.5, 3), random(-0.4, 0.4));
        flock.addBoid(b);
    }
}

function fishDraw() {
    flock.run();
}

class Flock {
    constructor() {
        this.boids = [];
        this.maxBoids = 250;
    }

    run() {
        let babies = [];
        for (let boid of this.boids) {
            boid.run(this.boids);

            if (this.boids.length + babies.length < this.maxBoids) {
                let baby = boid.tryReproduce(this.boids);
                if (baby) babies.push(baby);
            }
        }

        for (let b of babies) this.addBoid(b);

        for (let i = this.boids.length - 1; i >= 0; i--) {
            let b = this.boids[i];
            let life;

            if (b.diesYoung && !b.isAdult()) {
                life = b.babyLifespan;
            }
            else if (b.bodyColor) {
                life = b.lifespan;     // color1 fish
            } else {
                life = b.lifespan2;    // color2 fish
            }

            if (b.age >= life) {
                this.boids.splice(i, 1);
            }
        }
    }

    addBoid(b) {
        this.boids.push(b);
    }
}

class DNA {
    constructor(genes) {
        if (genes) {
            this.genes = genes;
        } else {
            this.genes = [];
            for (let i = 0; i < 5; i++) {
                this.genes[i] = random(0, 1);
            }
        }
    }

    // crossover
    crossover(partner) {
        let newGenes = [];
        let midpoint = floor(random(this.genes.length));

        for (let i = 0; i < this.genes.length; i++) {
            if (i > midpoint) {
                newGenes[i] = this.genes[i];
            } else {
                newGenes[i] = partner.genes[i];
            }
        }
        return new DNA(newGenes);
    }

    // mutation
    mutate(rate) {
        for (let i = 0; i < this.genes.length; i++) {
            if (random(1) < rate) {
                this.genes[i] = constrain(this.genes[i] + random(-0.15, 0.15), 0, 1);
            }
        }
    }
}

function fishGlowDraw() {
    for (let boid of flock.boids) {
        if (!boid.bodyColor) {
            boid.show();
        }
    }
}

// ---------------------------------------------------------------

class Boid {
    constructor(x, y, dna) {
        if (dna) {
            this.dna = dna;
        } else {
            this.dna = new DNA(); // starting fish get random DNA
        }
        let g = this.dna.genes;
        let lifeBonus = map(g[4], 0, 1, 0.7, 1.3) * map(g[1], 0, 1, 1.2, 0.8);

        this.position = createVector(x, y);
        this.velocity = createVector(random(-3, 3), random(-3, 3));
        this.acceleration = createVector(0, 0);
        this.depth = random(0.55, 1);

        // traits from genes (0: size), (1: speed), (2: opacity), (3: color), (4: lifespan)
        this.r = map(g[0], 0, 1, 7, 20);
        this.maxspeed = map(g[1], 0, 1, 2.2, 3.8) * this.depth;
        this.opacity = map(g[2], 0, 1, 70, 230);
        this.bodyColor = g[3] < 0.98;
        this.opacity2 = random(200, 255);
        this.maxforce = 0.05;
        this.phase = random(360);
        this.minY = 250;
        this.maxY = 750;
        this.adultR = this.r;
        this.maturityAge = random(600, 900);
        this.lifespan = random(3600, 5400) * lifeBonus;
        this.lifespan2 = random(4500, 6300) * lifeBonus;
        this.babyLifespan = random(450, this.maturityAge);
        this.age = random(this.maturityAge, this.maturityAge + 600); // age of fish at the start
        this.cooldown = 0;
        this.diesYoung = false;
    }

    run(boids) {
        this.flock(boids);
        this.keepInBand();
        this.update();
        this.borders();
        this.grow();
        this.show();
    }

    applyForce(force) {
        this.acceleration.add(force);
    }

    flock(boids) {
        let sep = this.separate(boids);
        let ali = this.align(boids);
        let coh = this.cohesion(boids);

        sep.mult(1.8);
        ali.mult(1.5);
        coh.mult(0.5);

        this.applyForce(sep);
        this.applyForce(ali);
        this.applyForce(coh);
    }

    update() {
        this.velocity.add(this.acceleration);
        this.velocity.limit(this.maxspeed);
        this.position.add(this.velocity);
        this.acceleration.mult(0);
        this.phase += 12 + this.velocity.mag() * 6;
    }

    seek(target) {
        let desired = p5.Vector.sub(target, this.position);
        desired.setMag(this.maxspeed);
        let steer = p5.Vector.sub(desired, this.velocity);
        steer.limit(this.maxforce);
        return steer;
    }

    separate(boids) {
        let desiredSeparation = 25;
        let steer = createVector(0, 0);
        let count = 0;

        for (let other of boids) {
            let d = p5.Vector.dist(this.position, other.position);
            if (d > 0 && d < desiredSeparation) {
                let diff = p5.Vector.sub(this.position, other.position);
                diff.normalize();
                diff.div(d);
                steer.add(diff);
                count++;
            }
        }

        if (count > 0) {
            steer.div(count);
        }

        if (steer.mag() > 0) {
            steer.setMag(this.maxspeed);
            steer.sub(this.velocity);
            steer.limit(this.maxforce);
        }
        return steer;
    }

    align(boids) {
        let neighborDist = 50;
        let sum = createVector(0, 0);
        let count = 0;

        for (let other of boids) {
            let d = p5.Vector.dist(this.position, other.position);
            if (d > 0 && d < neighborDist) {
                sum.add(other.velocity);
                count++;
            }
        }

        if (count > 0) {
            sum.setMag(this.maxspeed);
            let steer = p5.Vector.sub(sum, this.velocity);
            steer.limit(this.maxforce);
            return steer;
        }
        return createVector(0, 0);
    }

    cohesion(boids) {
        let neighborDist = 50;
        let sum = createVector(0, 0);
        let count = 0;

        for (let other of boids) {
            let d = p5.Vector.dist(this.position, other.position);
            if (d > 0 && d < neighborDist) {
                sum.add(other.position);
                count++;
            }
        }

        if (count > 0) {
            sum.div(count);
            return this.seek(sum);
        }
        return createVector(0, 0);
    }

    keepInBand() {
        let margin = 60;

        if (this.position.y < this.minY + margin) {
            let strength = map(this.position.y, this.minY + margin, this.minY, 0, 1, true);
            this.applyForce(createVector(0, this.maxforce * 3 * strength));
        }

        if (this.position.y > this.maxY - margin) {
            let strength = map(this.position.y, this.maxY - margin, this.maxY, 0, 1, true);
            this.applyForce(createVector(0, -this.maxforce * 3 * strength));
        }
    }

    borders() {
        let m = 150;
        if (this.position.x < -m) this.position.x = width + m;
        if (this.position.x > width + m) this.position.x = -m;

        // hard limit, so a fish can never leave the band
        this.position.y = constrain(this.position.y, this.minY, this.maxY);
    }

    show() {
        let L = this.r * 2.2;
        let wig = sin(this.phase) * 0.18 * L;
        let c;

        push();
        translate(this.position.x, this.position.y);
        rotate(this.velocity.heading());
        noStroke();
        if (this.bodyColor) {
            c = fishColor1;
        } else {
            c = fishColor2;
        }

        if (this.bodyColor) {
            fill(red(c), green(c), blue(c), this.opacity);
        } else {
            fill(red(c), green(c), blue(c), this.opacity2);
        }

        beginShape();
        // top edge of the body, nose to tail
        vertex(L * 0.5, 0);
        vertex(L * 0.3, -L * 0.17);
        vertex(L * 0.05, -L * 0.2);
        vertex(-L * 0.2, -L * 0.1);
        vertex(-L * 0.3, wig * 0.4);
        // tail fork
        vertex(-L * 0.55, wig - L * 0.17);
        vertex(-L * 0.43, wig);
        vertex(-L * 0.55, wig + L * 0.17);
        vertex(-L * 0.3, wig * 0.4);
        // bottom edge of the body, tail back to nose
        vertex(-L * 0.2, L * 0.1);
        vertex(L * 0.05, L * 0.2);
        vertex(L * 0.3, L * 0.17);
        endShape(CLOSE);
        pop();
    }



    isAdult() {
        return this.age >= this.maturityAge;
    }

    grow() {
        this.age++;
        if (this.cooldown > 0) this.cooldown--;
        if (!this.isAdult()) {
            // baby grows from 30% to 100% of its adult size
            this.r = this.adultR * map(this.age, 0, this.maturityAge, 0.3, 1);
        }
    }

    tryReproduce(boids) {
        if (!this.isAdult() || this.cooldown > 0) return null;

        let population = boids.length;
        let range;
        let chance;

        if (this.bodyColor) {
            range = 50;
        } else {
            range = 80;
        }

        // the fewer fish = faster reproduction
        if (population < 30) {
            if (this.bodyColor) {
                chance = 0.2;      // 20% per frame
            } else {
                chance = 0.5;       // 50% per frame
            }
        } else if (population <= 100) {
            if (this.bodyColor) {
                chance = 0.005;    // 0.5% per frame
            } else {
                chance = 0.05;     // 5% per frame
            }
        } else {
            if (this.bodyColor) {
                chance = 0.00001;   // 0.001% per frame
            } else {
                chance = 0.001;    // 0.1% per frame
            }
        }

        for (let other of boids) {
            if (other === this || !other.isAdult() || other.cooldown > 0) continue;

            let d = p5.Vector.dist(this.position, other.position);
            if (d < range && random() < chance) {
                this.cooldown = 900;
                other.cooldown = 900;
                return this.makeChild(other);
            }
        }
        return null;
    }

    makeChild(other) {
        let mid = p5.Vector.add(this.position, other.position).div(2);

        let childDNA = this.dna.crossover(other.dna);
        childDNA.mutate(0.01);  // 1% chance to mutate

        let baby = new Boid(mid.x, mid.y, childDNA);
        baby.age = 0;
        baby.r = baby.adultR * 0.3;
        baby.cooldown = 900;
        baby.velocity = this.velocity.copy();

        if (random() < 0.3) {
            baby.diesYoung = true;
        }
        return baby;
    }
}