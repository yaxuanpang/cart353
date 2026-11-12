let flames = [];

function drawFire(x, y) {
    // spawn new particles
    for (let i = 0; i < 4; i++) {
        flames.push(new FireParticle(x, y));
    }

    push();
    blendMode(ADD);   // overlapping particles add up to bright cores
    for (let i = flames.length - 1; i >= 0; i--) {
        flames[i].update();
        flames[i].show();
        if (flames[i].life <= 0) {
            flames.splice(i, 1);
        }
    }
    pop();
}

class FireParticle {
    constructor(x, y) {
        this.baseX = x;
        this.x = x + random(-25, 25);     // wider at the base
        this.y = y;
        this.vx = 0;
        this.vy = random(-3.2, -1.6);     // upward speed
        this.life = 1;                    // 1 = just born, 0 = gone
        this.decay = random(0.012, 0.024);
        this.size = random(10, 38);
        this.seed = random(1000);         // gives each particle its own sway
    }

    update() {
        // gentle sideways sway from noise
        let sway = noise(this.seed, frameCount * 0.02) - 0.5;
        this.vx += sway * 0.15;

        // pull back toward the centre so the flame narrows as it rises
        this.vx += (this.baseX - this.x) * 0.003;

        this.x += this.vx;
        this.y += this.vy;
        this.life -= this.decay;
    }

    show() {
        let l = max(this.life, 0);

        let r = 255;            // stays bright for a long time
        let g = 230 * l * l * l;        // drops quickly: yellow, then orange, then red
        let b = 40 * l * l * l; // only a hint of white in the youngest ones
        let a = 200 * l;

        let d = this.size * (0.35 + 0.65 * l * l);

        fill(r, g, b, a);
        circle(this.x, this.y, d);
    }
}

function drawCampfire(x, y) {
    // two crossed logs behind the flames
    drawLog(x, y + 12, 130, 18, 15);
    drawLog(width / 2 + 20, height - 180, 140, 20, 0);
    drawLog(x, y + 12, 130, 18, -15);
}

function drawBurntCampfire(x, y) {
    // two crossed logs behind the flames
    drawBurntLog(x, y + 12, 130, 18, 15);
    drawBurntLog(width / 2 + 20, height - 180, 140, 20, 0);
    drawBurntLog(x, y + 12, 130, 18, -15);
}

// angle is in degrees
function drawLog(x, y, len, thick, angle) {
    push();
    translate(x, y);
    rotate(angle);

    // body
    noStroke();
    fill(92, 56, 26);
    rect(-len / 2, -thick / 2, len, thick, thick * 0.2);

    // lighter strip along the top
    fill(125, 82, 42);
    rect(-len / 2 + 5, -thick / 2 + 2, len - 10, thick * 0.3, thick * 0.1);

    // bark lines
    stroke(55, 32, 14);
    strokeWeight(1.5);
    line(-len * 0.35, thick * 0.05, -len * 0.12, thick * 0.05);
    line(-len * 0.02, -thick * 0.1, len * 0.22, -thick * 0.1);
    line(-len * 0.25, thick * 0.28, len * 0.05, thick * 0.28);

    // cut end with growth rings
    noStroke();
    fill(196, 146, 84);
    ellipse(len / 2 - thick * 0.15, 0, thick * 0.3, thick * 0.9);
    noFill();
    stroke(140, 95, 50);
    strokeWeight(1);
    ellipse(len / 2 - thick * 0.15, 0, thick * 0.15, thick * 0.5);

    pop();
}

function drawBurntLog(x, y, len, thick, angle) {
    push();
    translate(x, y);
    rotate(angle);

    // body
    noStroke();
    fill(48, 25, 5);
    rect(-len / 2, -thick / 2, len, thick, thick * 0.2);

    // lighter strip along the top
    fill(28, 15, 2);
    rect(-len / 2 + 5, -thick / 2 + 2, len - 10, thick * 0.3, thick * 0.1);

    // bark lines
    stroke(55, 32, 14);
    strokeWeight(1.5);
    line(-len * 0.35, thick * 0.05, -len * 0.12, thick * 0.05);
    line(-len * 0.02, -thick * 0.1, len * 0.22, -thick * 0.1);
    line(-len * 0.25, thick * 0.28, len * 0.05, thick * 0.28);

    // cut end with growth rings
    noStroke();
    fill(36, 20, 0);
    ellipse(len / 2 - thick * 0.15, 0, thick * 0.3, thick * 0.9);
    noFill();
    stroke(0);
    strokeWeight(1);
    ellipse(len / 2 - thick * 0.15, 0, thick * 0.15, thick * 0.5);

    pop();
}

function floorGlow(x, y) {
    push();
    noStroke();
    fill(255, 120, 20, 25);
    ellipse(x, y + 22, random(420, 430), random(90, 95));
    fill(255, 120, 20, 30);
    ellipse(x, y + 22, random(330, 340), random(70, 75));
    fill(255, 120, 20, 35);
    ellipse(x, y + 22, random(240, 250), random(50, 55));
    fill(255, 120, 20, 40);
    ellipse(x, y + 22, random(150, 160), random(30, 35));
    pop();
}

function fireGlow(x, y) {
    noStroke();
    fill(255, 180, 66, 35);
    ellipse(x, y + 22, random(185, 195));
}