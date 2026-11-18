let showIsland = false;
let showCamp = true;
let showBeach = false;
let showForest = false;

let nightTime = false;

let startTime = 0;

let beachCharged = false;
let forestCharged = false;


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
        if (nightTime) {
            noStroke();
            fill(0, 0, 0, 150);
            rect(0, 0, width, height);

            campArrowDraw();
            beachArrowDraw();
            forestArrowDraw();
        }
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
        if (!beachCharged && goldCoins >= 1) {
            //goldCoins -= 1;
            beachCharged = true;
        }
        if (nightTime) {
            noStroke();
            fill(0, 0, 0, 200);
            rect(0, 0, width, height);

            fishGlowDraw();
            drawMenu();
        }
        if (showBucket) {
            bucketDip();
        }
    }
    if (!showBeach) {
        beachCharged = false;
    }

    if (showForest) {
        forestDraw();
        if (!forestCharged && goldCoins >= 3) {
            //goldCoins -= 3;
            forestCharged = true;
        }
        forestDark = nightTime;
        if (nightTime) {
            noStroke();
            fill(0, 0, 0, 200);
            rect(0, 0, width, height);
            fireflyDraw();
            drawMenu();
        }
    }
    if (!showForest) {
        forestCharged = false;
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
    waterKeyPressed();
    if (keyCode === 32) { // island
        showIsland = true;
        showCamp = false;
        showBeach = false;
        showForest = false;
    }

    if (keyCode === 67) { // camp
        showIsland = false;
        showCamp = true;
        showBeach = false;
        showForest = false;
    }

    if (keyCode === 66) { //beach
        if (goldCoins > 0) {
            showBeach = true;
            showIsland = false;
            showCamp = false;
            showForest = false;
        }
        else if (goldCoins <= 0) {
            if (showCamp) {
                showBeach = false;
                showIsland = false;
                showCamp = true;
                showForest = false;
            }
            if (showIsland) {
                showBeach = false;
                showIsland = true;
                showCamp = false;
                showForest = false;
            }
        }

    }

    if (keyCode === 70) { //forest
        if (goldCoins > 2) {
            showForest = true;
            showIsland = false;
            showCamp = false;
            showBeach = false;
        }
        else if (goldCoins <= 2) {
            if (showCamp) {
                showBeach = false;
                showIsland = false;
                showCamp = true;
                showForest = false;
            }
            if (showBeach) {
                showBeach = true;
                showIsland = false;
                showCamp = false;
                showForest = false;
            }
            if (showIsland) {
                showBeach = false;
                showIsland = true;
                showCamp = false;
                showForest = false;
            }
        }
    }
}