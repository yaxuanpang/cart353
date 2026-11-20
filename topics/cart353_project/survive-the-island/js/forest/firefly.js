let swarm;
let fireflyColor1
let fireflyColor2;
let fireflyColor3;
let bodyColor3;
let forestDark = false;

function fireflySetup() {
    fireflyColor1 = color(252, 214, 88);
    fireflyColor2 = color(97, 247, 89);
    fireflyColor3 = color(110, 204, 255);

    swarm = new Swarm();

    for (let i = 0; i < 50; i++) {
        let f = new Firefly(random(width), random(height));
        f.velocity = createVector(random(1.5, 3), random(-0.4, 0.4));
        swarm.addFirefly(f);
    }

    for (let i = 0; i < 20; i++) {
        // first 20 fireflies are carriers of the color2 allele but do not show it
        swarm.fireflies[i].alleles = [true, false];
        swarm.fireflies[i].updateColor();
    }

    for (let i = 20; i < 25; i++) {
        swarm.fireflies[i].dna.genes[3] = 0.95;
        swarm.fireflies[i].updateColor();
    }
}

function fireflyDraw() {
    swarm.run();
}

class Swarm {
    constructor() {
        this.fireflies = [];
        this.maxFireflies = 100;
    }

    run() {
        let babies = [];
        for (let f of this.fireflies) {
            f.run(this.fireflies);

            if (this.fireflies.length + babies.length < this.maxFireflies) {
                let baby = f.tryReproduce(this.fireflies);
                if (baby) babies.push(baby);
            }
        }

        for (let b of babies) this.addFirefly(b);

        for (let i = this.fireflies.length - 1; i >= 0; i--) {
            let f = this.fireflies[i];
            let life;

            if (f.diesYoung && !f.isAdult()) {
                life = f.babyLifespan;
            }
            else {
                life = f.lifespan;
            }

            if (f.age >= life) {
                this.fireflies.splice(i, 1);
            }
        }
    }

    addFirefly(f) {
        this.fireflies.push(f);
    }
}

class FireflyDNA {
    constructor(genes) {
        if (genes) {
            this.genes = genes;
        } else {
            this.genes = [];
            for (let i = 0; i < 5; i++) { // 5 genes -> 0 to 4
                this.genes[i] = random(0, 1); // genes varies from 0 to 1
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
        return new FireflyDNA(newGenes);
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

// ---------------------------------------------------------------

class Firefly {
    constructor(x, y, dna) {
        if (dna) {
            this.dna = dna;
        } else {
            this.dna = new FireflyDNA(); // starting fireflies get random DNA
            this.dna.genes[3] = random(0, 0.88); // no firefly starts at color3
        }
        let g = this.dna.genes;

        this.position = createVector(x, y);
        this.velocity = createVector(random(-3, 3), random(-3, 3));
        this.acceleration = createVector(0, 0);
        this.depth = random(0.55, 1);

        // traits from genes (0: size), (1: speed), (2: opacity), (3: color), (4: lifespan)
        this.r = map(g[0], 0, 1, 7, 20);
        this.maxspeed = map(g[1], 0, 1, 2.2, 3.8) * this.depth;
        this.opacity = map(g[2], 0, 1, 70, 240);

        this.alleles = [true, true];
        this.updateColor();

        this.maxforce = 0.05;
        this.minY = 0;
        this.maxY = 550;
        this.phase = random(360);
        this.adultR = this.r;
        this.maturityAge = random(120, 180);
        this.lifespan = random(600, 720) * map(g[4], 0, 1, 0.7, 1.3);
        this.babyLifespan = random(60, this.maturityAge);
        this.age = random(this.maturityAge, this.maturityAge + 60); // age at the start
        this.cooldown = 0;
        this.diesYoung = false;
    }

    updateColor() {
        if (this.dna.genes[3] >= 0.9) {
            this.colorType = 3;
        }
        else if (!this.alleles[0] && !this.alleles[1]) { // color2 only when both alleles are the color2 allele
            this.colorType = 2;
        }
        else {
            this.colorType = 1;
        }

        this.bodyColor3 = (this.colorType === 1);
    }

    run(fireflies) {
        this.flock(fireflies);
        this.update();
        this.borders();
        this.keepInBand();
        this.grow();
        this.show();
    }

    applyForce(force) {
        this.acceleration.add(force);
    }

    flock(fireflies) {
        let sep = this.separate(fireflies);
        let ali = this.align(fireflies);
        let coh = this.cohesion(fireflies);

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

    separate(fireflies) {
        let desiredSeparation = 25;
        let steer = createVector(0, 0);
        let count = 0;

        for (let other of fireflies) {
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

    align(fireflies) {
        let neighborDist = 50;
        let sum = createVector(0, 0);
        let count = 0;

        for (let other of fireflies) {
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

    cohesion(fireflies) {
        let neighborDist = 50;
        let sum = createVector(0, 0);
        let count = 0;

        for (let other of fireflies) {
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
        let m = 20;
        if (this.position.x < -m) this.position.x = width + m;
        if (this.position.x > width + m) this.position.x = -m;

        this.position.y = constrain(this.position.y, this.minY, this.maxY);
        // if (this.position.y < -m) this.position.y = height + m;
        // if (this.position.y > height + m) this.position.y = -m;
    }

    getColor() {
        if (this.colorType === 1) {
            return fireflyColor1;
        }
        else if (this.colorType === 2) {
            return fireflyColor2;
        }
        else {
            return fireflyColor3;
        }
    }

    show() {
        let c = this.getColor();

        push();
        translate(this.position.x, this.position.y);
        rotate(this.velocity.heading());
        noStroke();

        fill(red(c), green(c), blue(c), this.opacity);

        circle(0, 0, this.r * 0.5);

        fill(red(c), green(c), blue(c), this.opacity - 50);

        circle(0, 0, random(this.r * 0.5 * 2, this.r * 0.5 * 2 + 5));
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

    tryReproduce(fireflies) {
        if (!this.isAdult() || this.cooldown > 0) return null;

        let population = fireflies.length;
        let range;
        let chance;

        range = 80;

        // the fewer fireflies = faster reproduction
        if (population < 10) {
            chance = 0.5;
        } else if (population <= 95) {
            chance = 0.01;    // 1% per frame
        } else {
            chance = 0.000001; // 0.0001% per frame
        }

        for (let other of fireflies) {
            if (other === this || !other.isAdult() || other.cooldown > 0) continue;

            let d = p5.Vector.dist(this.position, other.position);
            if (d < range && random() < chance) {
                this.cooldown = 60;
                other.cooldown = 60;
                return this.makeChild(other);
            }
        }
        return null;
    }

    makeChild(other) {
        let mid = p5.Vector.add(this.position, other.position).div(2);

        let childDNA = this.dna.crossover(other.dna);
        childDNA.mutate(0.03);  // 3% chance for each gene to mutate
        if (random() < 0.3) { // 30% to mutate toward color3
            childDNA.genes[3] = constrain(childDNA.genes[3] + random(0, 0.15), 0, 1);
        }

        let baby = new Firefly(mid.x, mid.y, childDNA);

        baby.alleles = [random(this.alleles), random(other.alleles)]; // child gets an allele from each parent

        for (let i = 0; i < 2; i++) {
            if (random() < 0.1) { // 10% chance of each allele being the color2 allele
                baby.alleles[i] = false;
            }
        }

        baby.updateColor();

        baby.age = 0;
        baby.r = baby.adultR * 0.3;
        baby.velocity = this.velocity.copy();

        if (!baby.bodyColor3 && random() < 0.1) {   // 10% of other babies die before adulthood
            baby.diesYoung = true;
        }
        return baby;
    }
}
