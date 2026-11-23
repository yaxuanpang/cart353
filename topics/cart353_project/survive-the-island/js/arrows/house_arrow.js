let showHouseArrowSign = false;
let showPayHouseSign = false;

function houseArrowDraw() {
    houseArrow();
    hoveringHouse();
    if (showHouseArrowSign) {
        houseArrowSign();
    }
    if (showPayHouseSign) {
        payHouseSign();
    }
}

function houseArrow() {
    push();
    translate(width / 2 + 400, height / 2 - 60);

    noStroke();
    fill(255, 112, 10);
    circle(120, 100, 30);
    triangle(120, 130, 130, 90, 110, 90);

    fill(87, 41, 11);
    circle(120, 100, 20);
    pop();
}

function hoveringHouse() {
    let houseArrowCX = width / 2 + 400 + (120);
    let houseArrowCY = height / 2 - 60 + (100);
    showHouseArrowSign = dist(mouseX, mouseY, houseArrowCX, houseArrowCY) < 10;
}

function houseArrowSign() {
    push();
    translate(width / 2 + 400, height / 2 - 60);

    noStroke();
    fill(255, 112, 10);
    rect(45, -20, 150, 100, 30);

    textAlign(CENTER, CENTER);
    textSize(16);
    fill(255);
    text("build a shelter to", 123, 0);
    text("sleep in", 123, 18);
    text("=", 123, 38);
    text("50x   ", 113, 60);
    drawFireWood(83, -8, 0.45);
    textSize(12);
    pop();
}

function payHouseSign() {
    push();
    translate(width / 2 - 100, height / 2);
    purchaseButton(width / 2 - 100, height / 2);

    noStroke();
    textAlign(CENTER, CENTER);
    textSize(13);
    fill(255);
    text("--->", 120, 56);

    textAlign(RIGHT, CENTER);
    textSize(14);
    text(woodTaken + "x", 72, 56);
    drawFireWood(48, -11, 0.45);

    if (woodTaken - 3 < 0) {
        textSize(12);
        text("Not enough", 198, 50);
        text("wood", 182, 62);
    }

    if (woodTaken - 3 < 10 && woodTaken - 3 >= 0) {
        text(woodTaken - 3 + "x", 150, 56);
        drawFireWood(103, -11, 0.45);
    }

    if (woodTaken - 3 >= 10 && woodTaken - 3 < 100) {
        text(woodTaken - 3 + "x", 157, 56);
        drawFireWood(107, -11, 0.45);
    }

    if (woodTaken - 3 >= 100) {
        text(woodTaken - 3 + "x", 166, 56);
        drawFireWood(113, -11, 0.45);
    }
    pop();
}