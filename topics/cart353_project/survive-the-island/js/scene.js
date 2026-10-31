let showIsland = false;
let showCamp = false;
let showBeach = false;


function setup() {
    createCanvas(1300, 750);
    angleMode(DEGREES);
    campSetup();
    beachSetup();
    forestSetup();
}

function draw() {
    if (showIsland) {
        islandDraw();
    }
    if (showCamp) {
        campDraw();
    }
    if (showBeach) {
        beachDraw();
    }
    forestDraw();
}

function mousePressed() {
    menuMousePressed();
    if (showIsland) {
        campMousePressed();
        beachMousePressed();
    }
    else if (!showIsland && showIslandButton) {
        if (dist(mouseX, mouseY, 670.5, 695) < 50) {
            showIsland = true;
            showCamp = false;
            showBeach = false;
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

    if (keyCode === 66 && showIsland) {
        showBeach = true;
        showIsland = false;
    }
    else if (keyCode === 66 && showBeach) {
        showBeach = false;
        showIsland = true;
    }
}