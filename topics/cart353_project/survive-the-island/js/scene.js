let showIsland = false;
let showCamp = true;
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
    if (keyCode === 32) {
        showIsland = true;
        showCamp = false;
        showBeach = false;
        showForest = false;
    }

    if (keyCode === 73) {
        showIsland = false;
        showCamp = true;
        showBeach = false;
        showForest = false;
    }

    if (keyCode === 66) {
        showBeach = true;
        showIsland = false;
        showCamp = false;
        showForest = false;

    }

    if (keyCode === 70) {
        showForest = true;
        showIsland = false;
        showCamp = false;
        showBeach = false;
    }
}