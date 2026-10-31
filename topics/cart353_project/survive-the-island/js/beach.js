function beachSetup() {
    beachBackgroundSetup();
}

function beachDraw() {
    beachBackgroundDraw();
    drawMenu();
}

function beachMousePressed() {
    let beachCX = width / 2 + (-183);
    let beachCY = height / 2 - 30 + (-35);

    if (dist(mouseX, mouseY, beachCX, beachCY) < 10) {
        showIsland = false;
        showBeach = true;
    }
}