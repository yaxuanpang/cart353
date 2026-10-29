let showBeachArrowSign = false;

function beachArrowDraw() {
    beachArrow();
    hoveringBeach();
    if (showBeachArrowSign) {
        beachArrowSign();
    }
}

//beach arrow
function beachArrow() {
    push();
    noStroke();
    translate(width / 2, height / 2 - 30);

    fill(255, 112, 10);
    circle(-183, -35, 30);
    triangle(-183, -5, -173, -45, -193, -45);

    fill(11, 198, 227);
    circle(-183, -35, 20);
    pop();
}

function hoveringBeach() {
    let bArrowCX = width / 2 + (-183);
    let bArrowCY = height / 2 - 30 + (-35);
    showBeachArrowSign = dist(mouseX, mouseY, bArrowCX, bArrowCY) < 10;
}

function beachArrowSign() {
    push();
    translate(width / 2, height / 2 - 30);

    noStroke();
    fill(255, 112, 10);
    rect(-233, -85, 100, 30, 10);

    textAlign(CENTER, CENTER);
    textSize(16);
    fill(255);
    text("Beach (b)", -183, -70);
    pop();
}