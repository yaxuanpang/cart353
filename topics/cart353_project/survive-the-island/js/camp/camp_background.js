let palmTrees = [];
let frontPalmTrees = [];
let midPalmTrees = [];
let backPalmTrees = [];

function campBackgroundSetup() {
    createBackPalmTrees();
    createMidPalmTrees();
    createFrontPalmTrees();
    createPalmTrees();
}

function campBackgroundDraw() {
    background(255);
    drawCampSky();
    drawBackPalmTrees();
    drawMidPalmTrees();
    drawBackSand();
    drawFrontPalmTrees();
    drawMidSand();
    drawPalmTrees();
    drawSand();
}

// ======== PALM TREES =======
// ======== back row trees (no gaps) ======
const BACK_TREE_SPACING = 20;   // smaller number = denser back row

function createBackPalmTrees() {
    backPalmTrees = [];
    for (let x = 0; x < width + 40; x += BACK_TREE_SPACING) {
        backPalmTrees.push({
            x: x + random(-12, 12),
            h: random(250, 300),      // taller than the front trees (160-350)
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
    fill(84, 212, 255, 30);
    rect(0, 0, width, 435);
    pop();
}

// ======== middle row trees (no gaps) ======
const MID_TREE_SPACING = 55;   // smaller number = denser back row

function createMidPalmTrees() {
    midPalmTrees = [];
    for (let x = 0; x < width + 40; x += MID_TREE_SPACING) {
        midPalmTrees.push({
            x: x + random(-12, 12),
            h: random(200, 380),      // taller than the front trees (160-350)
            lean: random(-45, 45),
            w: random(8, 14),
            fronds: floor(random(6, 9)),
            len: random(135, 200),
            phase: random(360)
        });
    }
}

function drawMidPalmTrees() {
    for (let tree of midPalmTrees) {
        drawPalmTree(tree);
    }
    push();
    noStroke();
    fill(84, 212, 255, 30);
    rect(0, 0, width, 435);
    pop();
}

//====== front trees (smaller gap) =====
const FRONT_TREE_SPACING = 40;   // smaller number = trees closer together
const FRONT_SIDE_WIDTH = 520;    // how far in from each edge the trees go (bigger = wider tree areas)

function createFrontPalmTrees() {
    push();
    frontPalmTrees = [];
    for (let x = 20; x < width; x += FRONT_TREE_SPACING) {
        // skip the middle so only the left and right sides get trees
        if (x > FRONT_SIDE_WIDTH && x < width - FRONT_SIDE_WIDTH) {
            continue;
        }
        frontPalmTrees.push({
            x: x + random(-8, 8),
            h: random(200, 350),      // trunk height
            lean: random(-45, 45),    // how far the top leans left/right
            w: random(8, 15),        // trunk thickness
            fronds: floor(random(6, 9)),
            len: random(135, 205),    // frond length
            phase: random(360)        // so the trees don't all sway in sync
        });
    }
    pop();
}

function drawFrontPalmTrees() {
    for (let tree of frontPalmTrees) {
        drawPalmTree(tree);
    }
    push();
    noStroke();
    fill(84, 212, 255, 30);
    rect(0, 0, width, 485);
    pop();
}

// ======== front row trees (gap) ======
const TREE_SPACING = 70;   // smaller number = trees closer together
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

//===== SAND ========
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

function drawMidSand() {
    push();
    noStroke();
    fill(255, 213, 122);
    beginShape();
    for (let x = 0; x <= width; x += 10) {
        let y = 390 + sin(x * 1) * 5;
        vertex(x, y);
    }
    vertex(width, height);
    vertex(0, height);
    endShape(CLOSE);

    noStroke();
    fill(84, 212, 255, 30);
    rect(0, 0, width, 435);

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

