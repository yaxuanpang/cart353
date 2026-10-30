let palmTrees = [];
let backPalmTrees = [];

function campSetup() {
    createBackPalmTrees();
    createPalmTrees();
}

function campDraw() {
    background(84, 212, 255);
    drawSky();
    drawBackPalmTrees();
    drawBackSand();
    drawPalmTrees();
    drawSand();
}


const TREE_SPACING = 30;   // smaller number = trees closer together
const SIDE_WIDTH = 420;    // how far in from each edge the trees go (bigger = wider tree areas)

function createPalmTrees() {
    push();
    palmTrees = [];
    for (let x = 20; x < width; x += TREE_SPACING) {
        // skip the middle so only the left and right sides get trees
        if (x > SIDE_WIDTH && x < width - SIDE_WIDTH) {
            continue;
        }
        palmTrees.push({
            x: x + random(-8, 8),
            h: random(160, 350),      // trunk height
            lean: random(-45, 45),    // how far the top leans left/right
            w: random(8, 15),        // trunk thickness
            fronds: floor(random(6, 9)),
            len: random(135, 205),    // frond length
            phase: random(360)        // so the trees don't all sway in sync
        });
    }
    pop();
}

function drawPalmTrees() {
    for (let tree of palmTrees) {
        drawPalmTree(tree);
    }
}

const BACK_TREE_SPACING = 25;   // smaller number = denser back row

function createBackPalmTrees() {
    backPalmTrees = [];
    for (let x = 0; x < width + 40; x += BACK_TREE_SPACING) {
        backPalmTrees.push({
            x: x + random(-12, 12),
            h: random(280, 400),      // taller than the front trees (160-350)
            lean: random(-45, 45),
            w: random(8, 14),
            fronds: floor(random(6, 9)),
            len: random(135, 200),
            phase: random(360)
        });
    }
}

function drawBackPalmTrees() {
    for (let tree of backPalmTrees) {
        drawPalmTree(tree);   // same function as the front trees
    }
    push();
    noStroke();
    fill(84, 212, 255, 40);
    rect(0, 0, width, 435);
    pop();
}


function drawPalmTree(t) {
    push();
    translate(t.x, 450);   // origin = base of the trunk (the sand covers it)

    // curved trunk
    noFill();
    stroke(120, 72, 30);
    strokeWeight(t.w);
    bezier(0, 0, 0, -t.h * 0.5, t.lean * 0.6, -t.h * 0.8, t.lean, -t.h);

    // trunk rings
    stroke(90, 52, 20);
    strokeWeight(2);
    for (let s = 0.1; s < 1; s += 0.12) {
        let px = bezierPoint(0, 0, t.lean * 0.6, t.lean, s);
        let py = bezierPoint(0, -t.h * 0.5, -t.h * 0.8, -t.h, s);
        line(px - t.w / 2, py, px + t.w / 2, py);
    }

    // move the origin to the top of the trunk for the fronds
    translate(t.lean, -t.h);
    noStroke();
    for (let i = 0; i < t.fronds; i++) {
        let angle = map(i, 0, t.fronds - 1, -175, -5);
        angle += sin(frameCount * 2 + t.phase + i * 20) * 3;   // gentle sway
        drawFrond(angle, t.len);
    }

    pop();
}

// One frond, drawn from (0, 0): a curved stem with thin leaflets angled off both sides,
// like a real palm leaf. The tip droops downward and the middle arches up.
function drawFrond(angle, len) {
    push();
    const ex = cos(angle) * len;
    const ey = sin(angle) * len + len * 0.45;
    const cx = cos(angle) * len * 0.8;
    const cy = sin(angle) * len * 0.8 - len * 0.2;

    const leafletCount = 30;   // leaflets on each side of the stem

    // leaflets
    stroke(34, 139, 34);
    strokeWeight(3);
    for (let i = 1; i <= leafletCount; i++) {
        let s = i / leafletCount;
        let px = quadPoint(0, cx, ex, s);
        let py = quadPoint(0, cy, ey, s);

        // which way the stem is pointing at this spot
        let stemAngle = atan2(quadSlope(0, cy, ey, s), quadSlope(0, cx, ex, s));

        // leaflets get shorter toward the tip of the frond
        let leafletLen = len * 0.3 * (1 - s * 0.7);

        // one leaflet on each side, swept toward the tip and drooping a little
        for (let side = -1; side <= 1; side += 2) {
            let a = stemAngle + side * 55;
            line(px, py, px + cos(a) * leafletLen, py + sin(a) * leafletLen + leafletLen * 0.3);
        }
    }

    // stem
    stroke(20, 100, 20);
    strokeWeight(3);
    noFill();
    beginShape();
    for (let i = 0; i <= 10; i++) {
        let s = i / 10;
        vertex(quadPoint(0, cx, ex, s), quadPoint(0, cy, ey, s));
    }
    endShape();
    noStroke();
    pop();
}

// point on a curve that starts at a, bends toward b, and ends at c (s goes from 0 to 1)
function quadPoint(a, b, c, s) {
    return (1 - s) * (1 - s) * a + 2 * (1 - s) * s * b + s * s * c;
}

// how fast that same curve is moving at s (tells us which way it points)
function quadSlope(a, b, c, s) {
    return 2 * (1 - s) * (b - a) + 2 * s * (c - b);
}

function drawSky() {
    push();
    noStroke();
    fill(84, 212, 255);
    rect(0, 0, width, 435);
    pop();
}

function drawSand() {
    push();
    noStroke();
    fill(255, 213, 122);
    beginShape();
    for (let x = 0; x <= width; x += 10) {
        let y = 435 + sin(x * 1) * 5;
        vertex(x, y);
    }
    vertex(width, height);
    vertex(0, height);
    endShape(CLOSE);
    pop();
}

function drawBackSand() {
    push();
    noStroke();
    fill(255, 195, 122);
    beginShape();
    for (let x = 0; x <= width; x += 10) {
        let y = 365 + sin(x * 1) * 5;
        vertex(x, y);
    }
    vertex(width, height);
    vertex(0, height);
    endShape(CLOSE);
    pop();
}

function campMousePressed() {
    let campCX = width / 2 + (-110);
    let campCY = height / 2 - 30 + (-130);

    if (dist(mouseX, mouseY, campCX, campCY) < 10) {
        showIsland = false;
        showCamp = true;
    }
}