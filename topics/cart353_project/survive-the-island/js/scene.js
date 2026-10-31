let showIsland = true;
let showCamp = false;
let showBeach = false;
let showForest = false;


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
    if (showForest) {
        forestDraw();
    }
}

function mousePressed() {
    menuMousePressed();
    if (showIsland) {
        campMousePressed();
        beachMousePressed();
        forestMousePressed();
    }
    else if (!showIsland && showIslandButton) {
        if (dist(mouseX, mouseY, 670.5, 695) < 50) {
            showIsland = true;
            showCamp = false;
            showBeach = false;
            showForest = false;
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
    if (keyCode === 70 && showIsland) {
        showForest = true;
        showIsland = false;
    }
    else if (keyCode === 70 && showForest) {
        showForest = false;
        showIsland = true;
    }
}