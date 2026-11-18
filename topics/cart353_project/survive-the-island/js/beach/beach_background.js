function beachBackgroundSetup() {
    oceanSetup();
    createBeachPalmTrees();
}

function beachBackgroundDraw() {
    background(255);

    drawBeachSky();
    drawBeachPalmTrees();
    drawBeach();
    drawBeachFront();
    oceanDraw();
    drawShine(0.7);
    drawSun(0.7);
}

function drawBeach() {
    push();
    noStroke();
    fill(252, 211, 162);
    beginShape();
    for (let x = 0; x <= width; x += 10) {
        let y = 90 + sin(x * 1) * 5;
        vertex(x, y);
    }
    vertex(width, height);
    vertex(0, height);
    endShape(CLOSE);
    pop();
}

function drawBeachFront() {
    push();
    noStroke();
    fill(242, 185, 136);
    beginShape();
    for (let x = 0; x <= width; x += 10) {
        let y = 150 + sin(x * 2) * 5;
        vertex(x, y);
    }
    vertex(width, height);
    vertex(0, height);
    endShape(CLOSE);
    pop();
}

const BEACH_TREE_SPACING = 30;
const BEACH_SIDE_WIDTH = 200;

function createBeachPalmTrees() {
    beachPalmTrees = [];
    for (let x = 20; x < width; x += BEACH_TREE_SPACING) {
        if (x > BEACH_SIDE_WIDTH && x < width - BEACH_SIDE_WIDTH) {
            continue;
        }
        beachPalmTrees.push({
            x: x + random(-12, 12),
            h: random(100, 250),
            lean: random(-35, 35),
            w: random(8, 15),
            fronds: floor(random(6, 9)),
            len: random(135, 200),
            phase: random(360)
        });
    }
}

function drawBeachPalmTrees() {
    for (let tree of beachPalmTrees) {
        drawFurthestPalmTree(tree);
    }
    push();
    noStroke();
    fill(84, 212, 255, 50);
    rect(0, 0, width, 100);
    pop();
}