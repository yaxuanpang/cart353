let showIsland = false;

function setup() {
    createCanvas(1300, 750);
    angleMode(DEGREES);
    campSetup();
    islandSetup();
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
}

function keyPressed() {
    menuKeyPressed();
    if (keyCode === 32) {
        showIsland = !showIsland;
    }
}