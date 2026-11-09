let showFireArrowSign = false;
let showPayFireSign = false;

let firePurchased = false;

function fireArrowDraw() {
    fireArrow();
    hoveringFire();
    if (showFireArrowSign) {
        fireArrowSign();
    }
    if (showPayFireSign) {
        payFireSign();
    }
}
//fire arrow
function fireArrow() {
    push();
    translate(width / 2 - 100, height / 2 + 60);

    noStroke();
    fill(255, 112, 10);
    circle(120, 100, 30);
    triangle(120, 130, 130, 90, 110, 90);

    fill(219, 49, 15);
    circle(120, 100, 20);
    pop();
}

function hoveringFire() {
    let fireArrowCX = width / 2 - 100 + (120);
    let fireArrowCY = height / 2 + 60 + (100);
    showFireArrowSign = dist(mouseX, mouseY, fireArrowCX, fireArrowCY) < 10;
}

function fireArrowSign() {
    push();
    translate(width / 2 - 100, height / 2 + 60);

    noStroke();
    fill(255, 112, 10);
    rect(45, 30, 150, 50, 30);

    textAlign(CENTER, CENTER);
    textSize(16);
    fill(255);
    text("x3   =   fire", 135, 58);

    drawFireWood(35, -14, 0.5);
    pop();
}

function payFireSign() {
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

function fireMousePressed() {
    let fireArrowCX = width / 2 - 100 + (120);
    let fireArrowCY = height / 2 + 60 + (100);
    showPayFireSign = dist(mouseX, mouseY, fireArrowCX, fireArrowCY) < 10;

    if (mouseX >= width / 2 - 100 + (25) && mouseX <= width / 2 - 100 + (215) && mouseY >= height / 2 + 30 && mouseY <= height / 2 + 80 && woodTaken < 0) {
        woodTaken = 0;
        firePurchased = false;
    }
    else if (mouseX >= width / 2 - 100 + (25) && mouseX <= width / 2 - 100 + (215) && mouseY >= height / 2 + 30 && mouseY <= height / 2 + 80 && woodTaken >= 3) {
        woodTaken = woodTaken - 3;
        firePurchased = true;
        fireTimer = millis();
    }
}