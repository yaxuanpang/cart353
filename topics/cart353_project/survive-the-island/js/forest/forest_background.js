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
let frontPalmTrees8 = [];

function forestBackgroundSetup() {
    createPalmTrees1();
    createMidPalmTrees1();
    createMidPalmTrees2();
    createFrontPalmTrees1();
    createFrontPalmTrees4();
    createFrontPalmTrees5();
    createFrontPalmTrees6();
    createFrontPalmTrees7();
    createFrontPalmTrees8();
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
    drawFrontPalmTrees8();

}

const TREE_SPACING1 = 5;   // smaller number = denser back row

function createPalmTrees1() {
    palmTrees1 = [];
    for (let x = 0; x < width + 40; x += TREE_SPACING1) {
        palmTrees1.push({
            x: x + random(-12, 12),
            h: random(300, 350),
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
        drawPalmTree(tree);
    }
}

const MID_TREE_SPACING1 = 20;

function createMidPalmTrees1() {
    midPalmTrees1 = [];
    for (let x = 0; x < width + 40; x += MID_TREE_SPACING1) {
        midPalmTrees1.push({
            x: x + random(-12, 12),
            h: random(300, 350),
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
        drawPalmTree(tree);
    }
    push();
    noStroke();
    fill(84, 212, 255, 30);
    rect(0, 0, width, 435);
    pop();
}

const MID_TREE_SPACING2 = 25;

function createMidPalmTrees2() {
    midPalmTrees2 = [];
    for (let x = 0; x < width + 40; x += MID_TREE_SPACING2) {
        midPalmTrees2.push({
            x: x + random(-12, 12),
            h: random(280, 380),
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
        drawPalmTree(tree);
    }
    push();
    noStroke();
    fill(84, 212, 255, 30);
    rect(0, 0, width, 435);
    pop();
}

const FRONT_TREE_SPACING1 = 30;
const SIDE_WIDTH1 = 720;

function createFrontPalmTrees1() {
    push();
    frontPalmTrees1 = [];
    for (let x = 20; x < width; x += FRONT_TREE_SPACING1) {
        if (x > SIDE_WIDTH1 && x < width - SIDE_WIDTH1) {
            continue;
        }
        frontPalmTrees1.push({
            x: x + random(-8, 8),
            h: random(300, 400),
            lean: random(-45, 45),
            w: random(8, 15),
            fronds: floor(random(6, 9)),
            len: random(135, 205),
            phase: random(360)
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
    fill(84, 212, 255, 30);
    rect(0, 0, width, 445);
    pop();
}

const FRONT_TREE_SPACING4 = 40;
const SIDE_WIDTH4 = 690;

function createFrontPalmTrees4() {
    push();
    frontPalmTrees4 = [];
    for (let x = 20; x < width; x += FRONT_TREE_SPACING4) {
        if (x > SIDE_WIDTH4 && x < width - SIDE_WIDTH4) {
            continue;
        }
        frontPalmTrees4.push({
            x: x + random(-8, 8),
            h: random(500, 550),
            lean: random(-45, 45),
            w: random(15, 20),
            fronds: floor(random(6, 9)),
            len: random(135, 205),
            phase: random(360)
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
    fill(84, 212, 255, 30);
    rect(0, 0, width, 535);
    pop();
}

const FRONT_TREE_SPACING5 = 40;
const SIDE_WIDTH5 = 650;

function createFrontPalmTrees5() {
    push();
    frontPalmTrees5 = [];
    for (let x = 20; x < width; x += FRONT_TREE_SPACING5) {
        if (x > SIDE_WIDTH5 && x < width - SIDE_WIDTH5) {
            continue;
        }
        frontPalmTrees5.push({
            x: x + random(-8, 8),
            h: random(450, 700),
            lean: random(-45, 45),
            w: random(15, 20),
            fronds: floor(random(6, 9)),
            len: random(135, 205),
            phase: random(360)
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
    fill(84, 212, 255, 30);
    rect(0, 0, width, 685);
    pop();
}

const FRONT_TREE_SPACING6 = 40;
const SIDE_WIDTH6 = 600;

function createFrontPalmTrees6() {
    push();
    frontPalmTrees6 = [];
    for (let x = 20; x < width; x += FRONT_TREE_SPACING6) {
        if (x > SIDE_WIDTH6 && x < width - SIDE_WIDTH6) {
            continue;
        }
        frontPalmTrees6.push({
            x: x + random(-8, 8),
            h: random(500, 680),
            lean: random(-45, 45),
            w: random(15, 20),
            fronds: floor(random(6, 9)),
            len: random(135, 205),
            phase: random(360)
        });
    }
    pop();
}

function drawFrontPalmTrees6() {
    for (let tree of frontPalmTrees6) {
        drawCloserPalmTree(tree);
    }
}

const FRONT_TREE_SPACING7 = 70;
const SIDE_WIDTH7 = 560;

function createFrontPalmTrees7() {
    push();
    frontPalmTrees7 = [];
    for (let x = 20; x < width; x += FRONT_TREE_SPACING7) {
        if (x > SIDE_WIDTH7 && x < width - SIDE_WIDTH7) {
            continue;
        }
        frontPalmTrees7.push({
            x: x + random(-8, 8),
            h: random(800, 880),
            lean: random(-45, 45),
            w: random(15, 20),
            fronds: floor(random(6, 9)),
            len: random(235, 305),
            phase: random(360)
        });
    }
    pop();
}

function drawFrontPalmTrees7() {
    for (let tree of frontPalmTrees7) {
        drawClosestPalmTree(tree);
    }
    push();
    noStroke();
    fill(84, 212, 255, 30);
    rect(0, 0, width, height);
    pop();
}

const FRONT_TREE_SPACING8 = 70;
const SIDE_WIDTH8 = 400;

function createFrontPalmTrees8() {
    push();
    frontPalmTrees8 = [];
    for (let x = 20; x < width; x += FRONT_TREE_SPACING8) {
        if (x > SIDE_WIDTH8 && x < width - SIDE_WIDTH8) {
            continue;
        }
        frontPalmTrees8.push({
            x: x + random(-8, 8),
            h: random(850, 900),
            lean: random(-45, 45),
            w: random(30, 40),
            fronds: floor(random(6, 9)),
            len: random(235, 305),
            phase: random(360)
        });
    }
    pop();
}

function drawFrontPalmTrees8() {
    for (let tree of frontPalmTrees8) {
        drawClosestPalmTree(tree);
    }
}