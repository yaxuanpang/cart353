let palmTrees1 = [];
let palmTrees2 = [];
let palmTrees3 = [];

function forestSetup() {
    createPalmTrees1();
    createPalmTrees2();
    createPalmTrees3();
}

function forestDraw() {
    drawCampSky();
    drawPalmTrees1();
    drawPalmTrees2();
    drawPalmTrees3();
    drawBackSand();
    drawMidSand();
    drawSand();
}

const TREE_SPACING1 = 25;   // smaller number = denser back row

function createPalmTrees1() {
    palmTrees1 = [];
    for (let x = 0; x < width + 40; x += TREE_SPACING1) {
        palmTrees1.push({
            x: x + random(-12, 12),
            h: random(200, 360),      // taller than the front trees (160-350)
            lean: random(-45, 45),
            w: random(8, 14),
            fronds: floor(random(6, 9)),
            len: random(135, 200),
            phase: random(360)
        });
    }
}

function drawPalmTrees1() {
    for (let tree of palmTrees1) {
        drawPalmTree(tree);   // same function as the front trees
    }
    push();
    noStroke();
    fill(84, 212, 255, 100);
    rect(0, 0, width, 435);
    pop();
}

const TREE_SPACING2 = 20;   // smaller number = denser back row

function createPalmTrees2() {
    palmTrees2 = [];
    for (let x = 0; x < width + 40; x += TREE_SPACING2) {
        palmTrees2.push({
            x: x + random(-12, 12),
            h: random(250, 400),      // taller than the front trees (160-350)
            lean: random(-45, 45),
            w: random(8, 14),
            fronds: floor(random(6, 9)),
            len: random(135, 200),
            phase: random(360)
        });
    }
}

function drawPalmTrees2() {
    for (let tree of palmTrees2) {
        drawPalmTree(tree);   // same function as the front trees
    }
    push();
    noStroke();
    fill(84, 212, 255, 100);
    rect(0, 0, width, 435);
    pop();
}

const TREE_SPACING3 = 25;   // smaller number = denser back row

function createPalmTrees3() {
    palmTrees3 = [];
    for (let x = 0; x < width + 40; x += TREE_SPACING3) {
        palmTrees3.push({
            x: x + random(-12, 12),
            h: random(200, 360),      // taller than the front trees (160-350)
            lean: random(-45, 45),
            w: random(8, 14),
            fronds: floor(random(6, 9)),
            len: random(135, 200),
            phase: random(360)
        });
    }
}

function drawPalmTrees3() {
    for (let tree of palmTrees3) {
        drawPalmTree(tree);   // same function as the front trees
    }
    push();
    noStroke();
    fill(84, 212, 255, 100);
    rect(0, 0, width, 435);
    pop();
}
