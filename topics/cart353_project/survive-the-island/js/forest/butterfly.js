let colony;
let butterflyColor1
let butterflyColor2;
let butterflyColor3;
let butterflyColor4;
let bodyColor4;

function butterflySetup() {
    butterflyColor1 = color(255, 196, 79);
    butterflyColor2 = color(255, 161, 242);
    butterflyColor3 = color(41, 180, 255);
    butterflyColor4 = color(168, 255, 173);

    colony = new Colony();

    for (let i = 0; i < 30; i++) {
        let f = new Butterfly(random(width), random(height));
        f.velocity = createVector(random(-4, 5), random(-0.4, 0.4));
        colony.addButterfly(f);
    }

    for (let i = 0; i < 15; i++) {
        colony.butterflies[i].alleles = [true, false];
        colony.butterflies[i].updateColor();
    }

    for (let i = 25; i < 30; i++) {
        colony.butterflies[i].dna.genes[3] = 0.95;
        colony.butterflies[i].updateColor();
    }

    for (let i = 13; i < 23; i++) {
        colony.butterflies[i].colorType = 4;
        colony.butterflies[i].updateColor();
    }
}

function butterflyDraw() {
    colony.run();
}

class Colony {
    constructor() {
        this.butterflies = [];
        this.maxButterflies = 60;
        this.reducedWave1 = false;
    }

    run() {
        let babies = [];
        for (let f of this.butterflies) {
            f.run(this.butterflies);

            if (this.butterflies.length + babies.length < this.maxButterflies) {
                let baby = f.tryReproduce(this.butterflies);
                if (baby) babies.push(baby);
            }
        }

        for (let b of babies) this.addButterfly(b);

        for (let i = this.butterflies.length - 1; i >= 0; i--) {
            let f = this.butterflies[i];
            let life;

            if (f.diesYoung && !f.isAdult()) {
                life = f.babyLifespan;
            }
            else {
                life = f.lifespan;
            }

            if (f.age >= life) {
                this.butterflies.splice(i, 1);
            }
        }

        if (totalWoodCount >= 24) { // half the trees in the front row in wood = 6 trees

            for (let i = this.butterflies.length - 1; i >= 0; i--) {

                if (random() < 0.5 && !this.reducedWave1) {

                    this.butterflies.splice(i, 1);
                }
            }
            this.reducedWave1 = true;
        }
    }

    addButterfly(f) {
        this.butterflies.push(f);
    }
}

class ButterflyDNA {
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
        return new ButterflyDNA(newGenes);
    }

    // mutation
    mutate(rate) {
        for (let i = 0; i < this.genes.length; i++) {
            if (random(1) < rate) {
                this.genes[i] = constrain(this.genes[i] + random(-0.15, 0.15), 0, 1); // mutation nudges genes up and down
            }
        }
    }
}

// ---------------------------------------------------------------

class Butterfly {
    constructor(x, y, dna) {
        if (dna) {
            this.dna = dna;
        } else {
            this.dna = new ButterflyDNA(); // starting butterflies get random DNA
            this.dna.genes[3] = random(0, 0.88); // no butterflies starts at color3
        }
        let g = this.dna.genes;

        this.position = createVector(x, y);
        this.velocity = createVector(random(-7, 7), random(-7, 7));
        this.acceleration = createVector(0, 0);
        this.depth = random(0.55, 1);

        // traits from genes (0: size), (1: speed), (2: opacity), (3: color), (4: lifespan)
        this.r = map(g[0], 0, 1, 7, 20);
        this.maxspeed = map(g[1], 0, 1, 3.5, 5) * this.depth;
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
        if (this.colorType === 4) return;
        if (this.dna.genes[3] >= 0.9) {
            this.colorType = 3;
        }
        else if (!this.alleles[0] && !this.alleles[1]) { // color2 only when both alleles are the color2 allele
            this.colorType = 2;
        }
        else {
            this.colorType = 1;
        }

        this.bodyColor4 = (this.colorType === 1);
    }

    run(butterflies) {
        this.flock(butterflies);
        this.update();
        this.borders();
        this.keepInBand();
        this.grow();
        this.show();
    }

    applyForce(force) {
        this.acceleration.add(force);
    }

    flock(butterflies) {
        let sep = this.separate(butterflies);
        let ali = this.align(butterflies);
        let coh = this.cohesion(butterflies);

        sep.mult(2);
        ali.mult(1);
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

    separate(butterflies) {
        let desiredSeparation = 25;
        let steer = createVector(0, 0);
        let count = 0;

        for (let other of butterflies) {
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

    align(butterflies) {
        let neighborDist = 50;
        let sum = createVector(0, 0);
        let count = 0;

        for (let other of butterflies) {
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

    cohesion(butterflies) {
        let neighborDist = 50;
        let sum = createVector(0, 0);
        let count = 0;

        for (let other of butterflies) {
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
    }

    getColor() {
        if (this.colorType === 4) {
            return butterflyColor4;
        }
        else if (this.colorType === 1) {
            return butterflyColor1;
        }
        else if (this.colorType === 2) {
            return butterflyColor2;
        }
        else {
            return butterflyColor3;
        }
    }

    show() {
        let c = this.getColor();

        let flap = map(sin(this.phase), -1, 1, 0.15, 1);
        let w = this.r * 0.6;  // wing size

        push();
        translate(this.position.x, this.position.y);
        rotate(this.velocity.heading());
        noStroke();

        fill(red(c), green(c), blue(c));
        for (let side of [1, -1]) { //mirrors the wings
            scale(1, side * flap); //flap wings
            ellipse(w * 0.15, w * 0.5, w * 0.9, w); // front wing
            ellipse(-w * 0.3 - 1.5, w * 0.4, w * 0.6, w * 0.7); // back wing
        }


        fill(0);
        ellipse(-1, 0, this.r * 0.3 + 7, this.r * 0.1); //body
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

    tryReproduce(butterflies) {
        if (!this.isAdult() || this.cooldown > 0) return null;

        let population = butterflies.length;
        let range;
        let chance;

        range = 80;

        // the fewer butterflies = faster reproduction
        if (population < 5) {
            chance = 0.5;
        } else if (population <= 65) {
            chance = 0.05;    // 5% per frame
        } else {
            chance = 0.000001; // 0.0001% per frame
        }

        for (let other of butterflies) {
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
        if (random() < 0.3) { // 30% to mutate towards color3
            childDNA.genes[3] = constrain(childDNA.genes[3] + random(0, 0.2), 0, 1); // nudges up gene 3 by 0.2 (betweem 0 and 1)
        }

        let baby = new Butterfly(mid.x, mid.y, childDNA);

        baby.alleles = [random(this.alleles), random(other.alleles)]; // child gets an allele from each parent

        for (let i = 0; i < 2; i++) {
            if (random() < 0.1) { // 10% chance of each allele being the color2 allele
                baby.alleles[i] = false;
            }
        }

        if (this.colorType === 4 && other.colorType === 4) {
            baby.colorType = 4;
        }
        else if (this.colorType === 4 || other.colorType === 4) {
            if (random() < 0.5) {
                baby.colorType = 4;
            }
        }

        baby.updateColor();

        baby.age = 0;
        baby.r = baby.adultR * 0.5;
        baby.velocity = this.velocity.copy();

        if (!baby.bodyColor4 && baby.colorType === 4 && random() < 0.1) {   // 10% of other babies die before adulthood
            baby.diesYoung = true;
        }
        return baby;
    }
}
