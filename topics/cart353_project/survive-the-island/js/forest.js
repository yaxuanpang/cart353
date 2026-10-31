function forestSetup() {
    forestBackgroundSetup();
}

function forestDraw() {
    forestBackgroundDraw();
    drawMenu();
}

function forestMousePressed() {
    let forestCX = width / 2 + (120);
    let forestCY = height / 2 - 30 + (100);

    if (dist(mouseX, mouseY, forestCX, forestCY) < 10) {
        showIsland = false;
        showForest = true;
    }
}