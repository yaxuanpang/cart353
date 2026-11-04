let showFireArrowSign = false;

function fireArrowDraw() {
    fireArrow();
    hoveringFire();
    if (showFireArrowSign) {
        fireArrowSign();
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
    text("x3    = fire", 140, 58);

    drawFireWood(35, -14, 0.5);
    pop();
}