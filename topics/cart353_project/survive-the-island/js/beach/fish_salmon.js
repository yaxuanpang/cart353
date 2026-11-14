let salmonSchool;
let salmonColor1
let salmonColor2;

function salmonSetup() {

    salmonColor1 = color(250, 185, 191);
    salmonColor2 = color(204, 39, 185);

    salmonSchool = new SalmonSchool();

    for (let i = 0; i < 30; i++) {
        let s = new Salmon(random(width), random(250, 750));
        s.velocity = createVector(random(1.5, 3), random(-0.4, 0.4));
        salmonSchool.addSalmon(s);
    }
}

function salmonDraw() {
    salmonSchool.run();
}

class SalmonSchool {
    constructor() {
        this.salmon = [];
        this.maxSalmon = 60;   // population cap
    }

    run() {
        let babies = [];
        for (let s of this.salmon) {
            s.run(this.salmon);

            if (this.salmon.length + babies.length < this.maxSalmon) {
                let baby = s.tryReproduce(this.salmon);
                if (baby) babies.push(baby);
            }
        }

        for (let b of babies) this.addSalmon(b);

        for (let i = this.salmon.length - 1; i >= 0; i--) {
            let s = this.salmon[i];
            let life;

            if (s.diesYoung && !s.isAdult()) {
                life = s.babyLifespan;
            }
            else {
                life = s.lifespan;
            }

            if (s.age >= life) {
                this.salmon.splice(i, 1);
            }
        }
    }

    addSalmon(s) {
        this.salmon.push(s);
    }
}

// ---------------------------------------------------------------

class Salmon {
    constructor(x, y, dna) {
        if (dna) {
            this.dna = dna;
        } else {
            this.dna = new DNA();     // starting salmon get random DNA
        }
        let g = this.dna.genes;

        this.position = createVector(x, y);
        this.velocity = createVector(random(-1, 1), random(-1, 1));
        this.acceleration = createVector(0, 0);
        this.depth = random(0.55, 1);

        // traits that come from genes (0: size), (1: speed), (2: opacity), (3: color), (4: lifespan)
        this.r = map(g[0], 0, 1, 15, 20);
        this.maxspeed = map(g[1], 0, 1, 2.2, 3.8) * this.depth;
        this.opacity = map(g[2], 0, 1, 70, 230);
        this.bodyColor2 = g[3] < 0.98;
        this.maxforce = 0.05;
        this.phase = random(360);
        this.minY = 250;
        this.maxY = 750;
        this.adultR = this.r;
        this.maturityAge = random(1800, 2700);
        this.lifespan = random(7200, 10800);
        this.babyLifespan = random(450, this.maturityAge);
        this.age = random(this.maturityAge, this.maturityAge + 1800); // age of fish at the start
        this.cooldown = 0;
        this.diesYoung = false;
    }

    run(school) {
        this.swimWith(school);
        this.keepInBand();
        this.update();
        this.borders();
        this.grow();
        this.show();
    }

    applyForce(force) {
        this.acceleration.add(force);
    }

    swimWith(school) {
        let sep = this.separate(school);
        let ali = this.align(school);
        let coh = this.cohesion(school);

        sep.mult(2.0);
        ali.mult(1.0);
        coh.mult(0.3);

        this.applyForce(sep);
        this.applyForce(ali);
        this.applyForce(coh);
    }

    update() {
        this.velocity.add(this.acceleration);
        this.velocity.limit(this.maxspeed);
        this.position.add(this.velocity);
        this.acceleration.mult(0);
        this.phase += 12 + this.velocity.mag() * 6; // tail wags faster if salmon is swimming faster
    }

    seek(target) {
        let desired = p5.Vector.sub(target, this.position);
        desired.setMag(this.maxspeed);
        let steer = p5.Vector.sub(desired, this.velocity);
        steer.limit(this.maxforce);
        return steer;
    }

    separate(school) {
        let desiredSeparation = 25;
        let steer = createVector(0, 0);
        let count = 0;

        for (let other of school) {
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

    align(school) {
        let neighborDist = 50;
        let sum = createVector(0, 0);
        let count = 0;

        for (let other of school) {
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

    cohesion(school) {
        let neighborDist = 50;
        let sum = createVector(0, 0);
        let count = 0;

        for (let other of school) {
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

        // hard limit, so a salmon can never leave the band
        this.position.y = constrain(this.position.y, this.minY, this.maxY);
    }

    show() {
        let L = this.r * 3.5;
        let wig = sin(this.phase) * 0.18 * L;
        let c;

        push();
        translate(this.position.x, this.position.y);
        rotate(this.velocity.heading());
        noStroke();
        if (this.bodyColor2) {
            c = salmonColor1;
        } else {
            c = salmonColor2;
        }

        if (this.bodyColor2) {
            fill(red(c), green(c), blue(c), this.opacity);
        }
        else {
            fill(red(c), green(c), blue(c), this.opacity);
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

    // ---------------- life cycle ----------------

    isAdult() {
        return this.age >= this.maturityAge;
    }

    grow() {
        this.age++;
        if (this.cooldown > 0) this.cooldown--;
        if (!this.isAdult()) {
            // baby grows from half to 100% of its adult size
            this.r = this.adultR * map(this.age, 0, this.maturityAge, 0.5, 1);
        }
    }

    tryReproduce(school) {
        if (!this.isAdult() || this.cooldown > 0) return null;

        let population = school.length;
        let range;
        let chance;

        if (this.bodyColor2) {
            range = 30;
        } else {
            range = 50;
        }

        // the fewer fish = faster reproduction
        if (population < 5) {
            if (this.bodyColor2) {
                chance = 0.05;      // 50% per frame
            } else {
                chance = 0.07;       // 70% per frame
            }
        } else if (population <= 50) {
            if (this.bodyColor2) {
                chance = 0.001;    // 0.1% per frame
            } else {
                chance = 0.1;     // 1% per frame
            }
        } else {
            if (this.bodyColor2) {
                chance = 0.000001;   // 0.0001% per frame
            } else {
                chance = 0.0001;    // 0.001% per frame
            }
        }

        for (let other of school) {
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
        childDNA.mutate(0.08);   // 8% chance to mutate

        let baby = new Salmon(mid.x, mid.y, childDNA);

        baby.age = 0;
        baby.r = baby.adultR * 0.5;
        baby.cooldown = 900;
        baby.velocity = this.velocity.copy();

        if (random() < 0.1) {
            baby.diesYoung = true;
        }

        if (this.bodyColor2 && other.bodyColor2) {
            baby.bodyColor2 = random() < 0.80;   // both color1 = 80% color1
        } else if (!this.bodyColor2 && !other.bodyColor2) {
            baby.bodyColor2 = random() < 0.10;   // both color2 = 10% color1
        } else {
            baby.bodyColor2 = random() < 0.25;   // mixed = 25% color1
        }

        //  grandchildren can inherit color
        if (baby.bodyColor2) {
            baby.dna.genes[3] = random(0, 0.98);
        } else {
            baby.dna.genes[3] = random(0.98, 1);
        }

        return baby;
    }
}