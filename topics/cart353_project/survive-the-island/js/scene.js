let showIsland = false;
let showCamp = false;
let showBeach = true;
let showForest = false;

let nightTime = false;

let startTime = 0;


function setup() {
    createCanvas(1500, 750);
    angleMode(DEGREES);
    frameRate(60);
    campSetup();
    beachSetup();
    forestSetup();
}

function draw() {
    console.log(frameRate());
    if (showIsland) {
        islandDraw();
    }
    if (showCamp) {
        campDraw();
        if (nightTime) {
            noStroke();
            fill(0, 0, 0, 200);
            rect(0, 0, width, height);
            floorGlow(width / 2 + 20, height - 190);
            drawFire(width / 2 + 20, height - 200);
            drawCampfire(width / 2 + 20, height - 195);
            fireGlow(width / 2 + 20, height / 2 + 100);
            drawMenu();
        }
    }
    if (showBeach) {
        beachDark = nightTime;
        beachDraw();
        if (nightTime) {
            noStroke();
            fill(0, 0, 0, 200);
            rect(0, 0, width, height);

            fishGlowDraw();
            drawMenu();
        }
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
        if (dist(mouseX, mouseY, width / 2 + 20, 695) < 50) {
            showIsland = true;
            showCamp = false;
            showBeach = false;
            showForest = false;
        }
    }

    if (showCamp) {
        fireMousePressed();
        potMousePressed();
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

    if (keyCode === 67) {
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