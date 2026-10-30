let showIsland = true;
let showCamp = false;

function setup() {
    createCanvas(1300, 750);
    angleMode(DEGREES);
    campSetup();
}

function draw() {
    if (showIsland) {
        islandDraw();
    } else if (showCamp) {
        campDraw();
        drawMenu();
    }
}

function mousePressed() {
    menuMousePressed();
    if (showIsland) {
        islandMousePressed();
        campMousePressed();
    }
    else if (!showIsland && showIslandButton) {
        if (dist(mouseX, mouseY, 670.5, 695) < 50) {
            showIsland = true;
            showCamp = false;
        }
    }
}

function keyPressed() {
    menuKeyPressed();
    if (keyCode === 73 && showIsland) {
        showIsland = false;
        showCamp = true;
    }
    else if (keyCode === 73 && showCamp) {
        showIsland = true;
        showCamp = false;
    }
}