let showForestArrowSign = false;

function forestArrowDraw() {
    forestArrow();
    hoveringForest();
    if (showForestArrowSign) {
        forestArrowSign();
    }
}

//forest arrow
function forestArrow() {
    push();
    translate(width / 2, height / 2 - 30);

    noStroke();
    fill(255, 112, 10);
    circle(120, 100, 30);
    triangle(120, 130, 130, 90, 110, 90);

    fill(30, 201, 16);
    circle(120, 100, 20);
    pop();
}

function hoveringForest() {
    let fArrowCX = width / 2 + (120);
    let fArrowCY = height / 2 - 30 + (100);
    showForestArrowSign = dist(mouseX, mouseY, fArrowCX, fArrowCY) < 10;
}

function forestArrowSign() {
    push();
    translate(width / 2, height / 2 - 30);

    noStroke();
    fill(255, 112, 10);
    rect(70, 50, 100, 30, 10);

    textAlign(CENTER, CENTER);
    textSize(16);
    fill(255);
    text("Forest (f)", 120, 65);
    pop();
}