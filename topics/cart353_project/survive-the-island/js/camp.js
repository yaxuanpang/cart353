function campSetup() {
    campBackgroundSetup();
}

function campDraw() {
    campBackgroundDraw();
    drawMenu();
}


function campMousePressed() {
    let campCX = width / 2 + (-110);
    let campCY = height / 2 - 30 + (-130);

    if (dist(mouseX, mouseY, campCX, campCY) < 10) {
        showIsland = false;
        showCamp = true;
    }
}