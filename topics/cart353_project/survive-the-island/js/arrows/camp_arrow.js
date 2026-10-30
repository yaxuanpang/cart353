let showCampArrowSign = false;

function campArrowDraw() {
    campArrow();

    hoveringCamp();
    if (showCampArrowSign) {
        campArrowSign();
    }
}

function hoveringCamp() {
    let cArrowCX = width / 2 + (-110);
    let cArrowCY = height / 2 - 30 + (-130);
    showCampArrowSign = dist(mouseX, mouseY, cArrowCX, cArrowCY) < 10;
}

function campArrow() {
    push();
    translate(width / 2, height / 2 - 30);

    noStroke();
    fill(255, 112, 10);
    circle(-110, -130, 30);
    triangle(-110, -100, -100, -140, -120, -140);

    fill(245, 184, 42);
    circle(-110, -130, 20);
    pop();
}

function campArrowSign() {
    push();
    translate(width / 2, height / 2 - 30);

    noStroke();
    fill(255, 112, 10);
    rect(-160, -180, 100, 30, 10);

    textAlign(CENTER, CENTER);
    textSize(16);
    fill(255);
    text("Camp (i)", -110, -165);
    pop();
}