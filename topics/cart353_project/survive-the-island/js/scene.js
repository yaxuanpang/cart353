let showIsland = true;

function setup() {
    createCanvas(1300, 750);
    angleMode(DEGREES);
    campSetup();
}

function draw() {
    campDraw();
    drawMenu();
    if (showIsland) {
        islandDraw();
    }
}

function mousePressed() {
    menuMousePressed();
    if (showIsland) {
        islandMousePressed();

        let campCX = width / 2 + (-110);
        let campCY = height / 2 - 30 + (-130);

        if (dist(mouseX, mouseY, campCX, campCY) < 10) {
            showIsland = false;
        }
    }
    else if (!showIsland) {
        if (dist(mouseX, mouseY, 670.5, 695) < 50) {
            showIsland = true;
        }
    }
}

function keyPressed() {
    menuKeyPressed();
    if (keyCode === 73) {
        showIsland = !showIsland;
    }
}