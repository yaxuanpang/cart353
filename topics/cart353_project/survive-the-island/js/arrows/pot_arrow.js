let showPotArrowSign = false;
let showPutInPotSign = false;
let showTakeOutPotSign = false;

function potArrowDraw() {
    potArrow();
    hoveringPot();
    if (showPotArrowSign) {
        potArrowSign();
    }
    if (showPutInPotSign) {
        putInPotSign();
    }
    if (showTakeOutPotSign) {
        takeOutPotSign();
    }
    if (potCollected && showPotArrowSign) {
        potArrowSign();
    }
}
//pot arrow
function potArrow() {
    push();
    translate(width / 2 - 100, height / 2 - 105);

    noStroke();
    fill(255, 112, 10);
    circle(120, 100, 30);
    triangle(120, 130, 130, 90, 110, 90);

    fill(255, 183, 0);
    circle(120, 100, 20);
    pop();
}

function hoveringPot() {
    let potArrowCX = width / 2 - 100 + (120);
    let potArrowCY = height / 2 - 105 + (100);
    showPotArrowSign = dist(mouseX, mouseY, potArrowCX, potArrowCY) < 10;
}

function potArrowSign() {
    push();
    translate(width / 2 - 100, height / 2 - 105);
    if (!potCollected) {
        noStroke();
        fill(255, 112, 10);
        rect(15, 20, 200, 60, 30);

        textAlign(CENTER, CENTER);
        textSize(16);
        fill(255);
        textSize(12);
        text("(click the arrow)", 120, 68);
        text("+", 85, 45);
        text("+", 155, 45);
        drawFireWood(20, -25, 0.5);
        drawFishIcon(118, 44, 0.5, 0);
        drawWaterIcon(180, 46, 0.4)
    }

    if (potCollected) {
        noStroke();
        fill(255, 112, 10);
        rect(40, - 80, 150, 160, 30);
        drawFireWood(25, -65, 0.7);
        drawFishIcon(73, -54, 0.6, 0);
        drawFishIcon(73, -42, 0.6, 180);
        drawWaterIcon(75, 55, 0.55)
        fill(255);
        textSize(15);
        text(":     " + potCollectedFish, 110, -43);
        text(":     " + potCollectedWood, 110, 5);
        text(":     " + potCollectedWater, 110, 55);
    }
    pop();
}

function putInPotSign() {
    push();
    translate(width / 2 - 105, height / 2 - 120);
    purchaseButton(width / 2 - 100, height / 2);

    noStroke();
    textAlign(CENTER, CENTER);
    textSize(13);
    fill(255);
    text("--->", 120, 56);

    drawFireWood(25, -22, 0.5);
    drawWaterIcon(90, 58, 0.4);
    drawFishIcon(58, 64, 0.5, 0);
    drawResourcePot(width / 2 - 583, height / 2 - 335, 0.2);
    pop();
}

function takeOutPotSign() {
    push();
    translate(width / 2 - 105, height / 2 - 180);
    purchaseButton(width / 2 - 100, height / 2);

    noStroke();
    textAlign(CENTER, CENTER);
    textSize(13);
    fill(255);
    text("--->", 120, 56);

    drawFireWood(105, -22, 0.5);
    drawWaterIcon(150, 58, 0.4);
    drawFishIcon(178, 64, 0.5, 0);
    drawResourcePot(width / 2 - 675, height / 2 - 335, 0.2);
    pop();
}

function potMousePressed() {
    if (showCamp) {
        let potArrowCX = width / 2 - 100 + (120);
        let potArrowCY = height / 2 - 105 + (100);

        let clickedPot = dist(mouseX, mouseY, potArrowCX, potArrowCY) < 10;

        let clickedPutInPotButton =
            mouseX >= width / 2 - 75 &&
            mouseX <= width / 2 + 115 &&
            mouseY >= height / 2 - 90 &&
            mouseY <= height / 2 - 40;

        let clickedTakeOutPot =
            mouseX >= width / 2 - 75 &&
            mouseX <= width / 2 + 115 &&
            mouseY >= height / 2 - 150 &&
            mouseY <= height / 2 - 100;


        if (showPutInPotSign && clickedPutInPotButton) {
            if (fishCollected >= 1 || woodCollected >= 1 || waterCollected >= 1) {
                showPutInPotSign = false;
                showTakeOutPotSign = false;
                potCollected = true;
                convertCollectedToPot();
            }
        } else if (showTakeOutPotSign && clickedTakeOutPot) {
            if (potCollectedFish >= 1 || potCollectedWood >= 1 || potCollectedWater >= 1) {
                showPutInPotSign = false;
                showTakeOutPotSign = false;
                potCollected = true;
                potTaken = true;
                convertPotToTaken();
            }
        }

        if (clickedPot) {
            showPutInPotSign = true;
            showTakeOutPotSign = true;
        } else {
            showPutInPotSign = false;
            showTakeOutPotSign = false;
        }
    }

    if (clickedPot && showPayFireSign) {
        showPutInPotSign = false;
        showTakeOutPotSign = false;
    }
}