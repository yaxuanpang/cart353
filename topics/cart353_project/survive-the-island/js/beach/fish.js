let flock;

function fishSetup() {

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
    }

    run() {
        for (let boid of this.boids) {
            boid.run(this.boids);
        }
    }

    addBoid(b) {
        this.boids.push(b);
    }
}

// ---------------------------------------------------------------

class Boid {
    constructor(x, y) {
        this.position = createVector(x, y);
        this.velocity = createVector(random(-1, 1), random(-1, 1));
        this.acceleration = createVector(0, 0);
        this.depth = random(0.55, 1);
        this.r = random(7, 20);  // body size
        this.maxspeed = random(2.6, 3.4) * this.depth;
        this.maxforce = 0.05;
        this.phase = random(360);       // tail wiggle
        this.opacity = random(70, 230);   // low = far away, high = close
        this.minY = 300; // min Y position
        this.maxY = 750; // max Y position
    }

    run(boids) {
        this.flock(boids);
        this.keepInBand();
        this.update();
        this.borders();
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
        ali.mult(2.0);
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

        push();
        translate(this.position.x, this.position.y);
        rotate(this.velocity.heading());
        noStroke();
        fill(159, 211, 224, this.opacity);
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
}