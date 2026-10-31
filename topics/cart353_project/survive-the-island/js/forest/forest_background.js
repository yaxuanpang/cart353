let palmTrees1 = [];
let midPalmTrees1 = [];
let midPalmTrees2 = [];
let frontPalmTrees1 = [];
let frontPalmTrees2 = [];
let frontPalmTrees3 = [];
let frontPalmTrees4 = [];
let frontPalmTrees5 = [];
let frontPalmTrees6 = [];
let frontPalmTrees7 = [];

function forestBackgroundSetup() {
    createPalmTrees1();
    createMidPalmTrees1();
    createMidPalmTrees2();
    createFrontPalmTrees1();
    createFrontPalmTrees4();
    createFrontPalmTrees5();
    createFrontPalmTrees6();
    createFrontPalmTrees7();
}

function forestBackgroundDraw() {
    drawCampSky();
    drawPalmTrees1();
    drawBackSand();
    drawMidPalmTrees1();
    drawMidSand2();
    drawMidPalmTrees2();
    drawMidSand();
    drawFrontPalmTrees1();
    drawSand();
    drawFrontPalmTrees4();
    drawMidSand3();
    drawFrontPalmTrees5();
    drawFrontPalmTrees6();
    drawFrontSand();
    drawFrontPalmTrees7();

}

const TREE_SPACING1 = 5;   // smaller number = denser back row

function createPalmTrees1() {
    palmTrees1 = [];
    for (let x = 0; x < width + 40; x += TREE_SPACING1) {
        palmTrees1.push({
            x: x + random(-12, 12),
            h: random(200, 250),      // taller than the front trees (160-350)
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
}

const MID_TREE_SPACING1 = 20;   // smaller number = denser back row

function createMidPalmTrees1() {
    midPalmTrees1 = [];
    for (let x = 0; x < width + 40; x += MID_TREE_SPACING1) {
        midPalmTrees1.push({
            x: x + random(-12, 12),
            h: random(240, 340),      // taller than the front trees (160-350)
            lean: random(-45, 45),
            w: random(8, 14),
            fronds: floor(random(6, 9)),
            len: random(135, 200),
            phase: random(360)
        });
    }
}

function drawMidPalmTrees1() {
    for (let tree of midPalmTrees1) {
        drawPalmTree(tree);   // same function as the front trees
    }
    push();
    noStroke();
    fill(84, 212, 255, 50);
    rect(0, 0, width, 435);
    pop();
}

const MID_TREE_SPACING2 = 25;   // smaller number = denser back row

function createMidPalmTrees2() {
    midPalmTrees2 = [];
    for (let x = 0; x < width + 40; x += MID_TREE_SPACING2) {
        midPalmTrees2.push({
            x: x + random(-12, 12),
            h: random(280, 380),      // taller than the front trees (160-350)
            lean: random(-45, 45),
            w: random(8, 14),
            fronds: floor(random(6, 9)),
            len: random(135, 200),
            phase: random(360)
        });
    }
}

function drawMidPalmTrees2() {
    for (let tree of midPalmTrees2) {
        drawPalmTree(tree);   // same function as the front trees
    }
    push();
    noStroke();
    fill(84, 212, 255, 50);
    rect(0, 0, width, 435);
    pop();
}

const FRONT_TREE_SPACING1 = 30;   // smaller number = trees closer together
const SIDE_WIDTH1 = 580;    // how far in from each edge the trees go (bigger = wider tree areas)

function createFrontPalmTrees1() {
    push();
    frontPalmTrees1 = [];
    for (let x = 20; x < width; x += FRONT_TREE_SPACING1) {
        // skip the middle so only the left and right sides get trees
        if (x > SIDE_WIDTH1 && x < width - SIDE_WIDTH1) {
            continue;
        }
        frontPalmTrees1.push({
            x: x + random(-8, 8),
            h: random(300, 400),      // trunk height
            lean: random(-45, 45),    // how far the top leans left/right
            w: random(8, 15),        // trunk thickness
            fronds: floor(random(6, 9)),
            len: random(135, 205),    // frond length
            phase: random(360)        // so the trees don't all sway in sync
        });
    }
    pop();
}

function drawFrontPalmTrees1() {
    for (let tree of frontPalmTrees1) {
        drawPalmTree(tree);
    }
    push();
    noStroke();
    fill(84, 212, 255, 50);
    rect(0, 0, width, 445);
    pop();
}

const FRONT_TREE_SPACING4 = 40;   // smaller number = trees closer together
const SIDE_WIDTH4 = 530;    // how far in from each edge the trees go (bigger = wider tree areas)

function createFrontPalmTrees4() {
    push();
    frontPalmTrees4 = [];
    for (let x = 20; x < width; x += FRONT_TREE_SPACING4) {
        // skip the middle so only the left and right sides get trees
        if (x > SIDE_WIDTH4 && x < width - SIDE_WIDTH4) {
            continue;
        }
        frontPalmTrees4.push({
            x: x + random(-8, 8),
            h: random(500, 550),      // trunk height
            lean: random(-45, 45),    // how far the top leans left/right
            w: random(15, 20),        // trunk thickness
            fronds: floor(random(6, 9)),
            len: random(135, 205),    // frond length
            phase: random(360)        // so the trees don't all sway in sync
        });
    }
    pop();
}

function drawFrontPalmTrees4() {
    for (let tree of frontPalmTrees4) {
        drawCloserPalmTree(tree);
    }
    push();
    noStroke();
    fill(84, 212, 255, 50);
    rect(0, 0, width, 535);
    pop();
}

const FRONT_TREE_SPACING5 = 40;   // smaller number = trees closer together
const SIDE_WIDTH5 = 480;    // how far in from each edge the trees go (bigger = wider tree areas)

function createFrontPalmTrees5() {
    push();
    frontPalmTrees5 = [];
    for (let x = 20; x < width; x += FRONT_TREE_SPACING5) {
        // skip the middle so only the left and right sides get trees
        if (x > SIDE_WIDTH5 && x < width - SIDE_WIDTH5) {
            continue;
        }
        frontPalmTrees5.push({
            x: x + random(-8, 8),
            h: random(450, 500),      // trunk height
            lean: random(-45, 45),    // how far the top leans left/right
            w: random(15, 20),        // trunk thickness
            fronds: floor(random(6, 9)),
            len: random(135, 205),    // frond length
            phase: random(360)        // so the trees don't all sway in sync
        });
    }
    pop();
}

function drawFrontPalmTrees5() {
    for (let tree of frontPalmTrees5) {
        drawCloserPalmTree(tree);
    }
    push();
    noStroke();
    fill(84, 212, 255, 40);
    rect(0, 0, width, 685);
    pop();
}

const FRONT_TREE_SPACING6 = 40;   // smaller number = trees closer together
const SIDE_WIDTH6 = 400;    // how far in from each edge the trees go (bigger = wider tree areas)

function createFrontPalmTrees6() {
    push();
    frontPalmTrees6 = [];
    for (let x = 20; x < width; x += FRONT_TREE_SPACING6) {
        // skip the middle so only the left and right sides get trees
        if (x > SIDE_WIDTH6 && x < width - SIDE_WIDTH6) {
            continue;
        }
        frontPalmTrees6.push({
            x: x + random(-8, 8),
            h: random(430, 480),      // trunk height
            lean: random(-45, 45),    // how far the top leans left/right
            w: random(15, 20),        // trunk thickness
            fronds: floor(random(6, 9)),
            len: random(135, 205),    // frond length
            phase: random(360)        // so the trees don't all sway in sync
        });
    }
    pop();
}

function drawFrontPalmTrees6() {
    for (let tree of frontPalmTrees6) {
        drawCloserPalmTree(tree);
    }
}

const FRONT_TREE_SPACING7 = 70;   // smaller number = trees closer together
const SIDE_WIDTH7 = 300;    // how far in from each edge the trees go (bigger = wider tree areas)

function createFrontPalmTrees7() {
    push();
    frontPalmTrees7 = [];
    for (let x = 20; x < width; x += FRONT_TREE_SPACING7) {
        // skip the middle so only the left and right sides get trees
        if (x > SIDE_WIDTH7 && x < width - SIDE_WIDTH7) {
            continue;
        }
        frontPalmTrees7.push({
            x: x + random(-8, 8),
            h: random(600, 650),      // trunk height
            lean: random(-45, 45),    // how far the top leans left/right
            w: random(15, 20),        // trunk thickness
            fronds: floor(random(6, 9)),
            len: random(135, 205),    // frond length
            phase: random(360)        // so the trees don't all sway in sync
        });
    }
    pop();
}

function drawFrontPalmTrees7() {
    for (let tree of frontPalmTrees7) {
        drawClosestPalmTree(tree);
    }
}