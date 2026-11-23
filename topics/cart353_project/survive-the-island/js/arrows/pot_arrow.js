let showPotArrowSign = false;
let showPutInPotSign = false;
let showTakeOutPotSign = false;

let showTakeOutPercentSign = false;

let putInPot;
let takeOutPot;

function potArrowDraw() {
    potArrow();
    hoveringPot();
    potCollection();
    jessicaGive();
    kevinGive();
    jessicaPotTaken();
    kevinPotTaken();
    if (showPotArrowSign) {
        potArrowSign();
    }
    if (showPutInPotSign && !showTakeOutPercentSign) {
        putInPotSign();
    }
    if (showTakeOutPotSign && !showTakeOutPercentSign) {
        takeOutPotSign();
    }
    if (showTakeOutPercentSign) {
        drawCancelSign();
        drawTakeOutSign30();
        drawTakeOutSign50();
        drawTakeOutSign100();
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
        drawFireWood(30, -65, 0.7);
        drawFishIcon(78, -54, 0.6, 0);
        drawFishIcon(78, -42, 0.6, 180);
        drawWaterIcon(80, 55, 0.55)
        fill(255);
        textAlign(LEFT);
        textSize(15);
        text(":    " + potCollectedFish, 120, -43);
        text(":    " + potCollectedWood, 120, 5);
        text(":    " + potCollectedWater, 120, 55);
    }
    pop();
}

function putInPotSign() {
    push();
    if (potCollected) {
        translate(width / 2 - 105, height / 2 - 270);
    }
    else {
        translate(width / 2 - 105, height / 2 - 170);
    }
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
    if (potCollected) {
        translate(width / 2 - 105, height / 2 - 330);
    }
    else {
        translate(width / 2 - 105, height / 2 - 230);
    }
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

        clickedPot = dist(mouseX, mouseY, potArrowCX, potArrowCY) < 10;

        if (potCollected) {
            putInPot = height / 2 - 240;
            takeOutPot = height / 2 - 300;
        }
        else {
            putInPot = height / 2 - 140;
            takeOutPot = height / 2 - 200;
        }

        let clickedPutInPotButton =
            mouseX >= width / 2 - 80 &&
            mouseX <= width / 2 + 110 &&
            mouseY >= putInPot &&
            mouseY <= putInPot + 60;

        let clickedTakeOutPotButton =
            mouseX >= width / 2 - 80 &&
            mouseX <= width / 2 + 110 &&
            mouseY >= takeOutPot &&
            mouseY <= takeOutPot + 60;

        let clickedTakeOut20 =
            mouseX >= 574.5 &&
            mouseX <= 707.5 &&
            mouseY >= 148 &&
            mouseY <= 183;

        let clickedTakeOut50 =
            mouseX >= 709.5 &&
            mouseX <= 842.5 &&
            mouseY >= 148 &&
            mouseY <= 183;

        let clickedTakeOut100 =
            mouseX >= 844.5 &&
            mouseX <= 977.5 &&
            mouseY >= 148 &&
            mouseY <= 183;

        let clickedCancelButton =
            mouseX >= 735 &&
            mouseX <= 825 &&
            mouseY >= 105 &&
            mouseY <= 140;

        let clickedCancelButtonDown =
            mouseX >= 735 &&
            mouseX <= 825 &&
            mouseY >= 205 &&
            mouseY <= 240;


        if (showPutInPotSign && clickedPutInPotButton) {
            if (fishCollected >= 1 || woodCollected >= 1 || waterCollected >= 1) {
                showPutInPotSign = false;
                showTakeOutPotSign = false;
                potCollected = true;
                convertCollectedToPot();
            }
        }
        if (showTakeOutPotSign && clickedTakeOutPotButton) {
            showTakeOutPercentSign = true;
        }

        if (showTakeOutPercentSign) {
            let hasResources = potCollectedFish >= 1 || potCollectedWood >= 1 || potCollectedWater >= 1;

            //take out 30%
            if (hasResources && clickedTakeOut20) {
                takeOutLow = true;
                showPutInPotSign = false;
                showTakeOutPotSign = false;
                showTakeOutPercentSign = false;
                potCollected = true;
                potTaken = true;
                convertPotToTaken();
            }
            if (hasResources && !clickedTakeOut20) {
                takeOutLow = false;
            }

            //take out 50%
            if (hasResources && clickedTakeOut50) {
                takeOutMed = true;
                showPutInPotSign = false;
                showTakeOutPotSign = false;
                showTakeOutPercentSign = false;
                potCollected = true;
                potTaken = true;
                convertPotToTaken();
            }
            if (hasResources && !clickedTakeOut50) {
                takeOutMed = false;
            }

            //take out 100%
            if (hasResources && clickedTakeOut100) {
                takeOutHigh = true;
                showPutInPotSign = false;
                showTakeOutPotSign = false;
                showTakeOutPercentSign = false;
                potCollected = true;
                potTaken = true;
                convertPotToTaken();
            }
            if (hasResources && !clickedTakeOut100) {
                takeOutHigh = false;
            }
        }
        if (clickedCancelButton) {
            showTakeOutPercentSign = false;
        }
        if (clickedCancelButtonDown) {
            showTakeOutPercentSign = false;
        }

        if (clickedPot) {
            showTakeOutPrecentSign = false;
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

function drawTakeOutSign30() {
    push();
    if (potCollected) {
        translate(width / 2 - 168, height / 2 - 218);
    }
    else {
        translate(width / 2 - 168, height / 2 - 118);
    }
    otherPurchaseButton(0, 0, 0.7)

    noStroke();
    textAlign(LEFT, CENTER);
    textSize(15);
    fill(255);
    text("30%", 5, 10);
    drawResourcePot(width / 2 - 665, height / 2 - 380, 0.18);
    text("=", 43, 10);
    pop();
}

function drawTakeOutSign50() {
    push();
    if (potCollected) {
        translate(width / 2 - 33, height / 2 - 218);
    }
    else {
        translate(width / 2 - 33, height / 2 - 118);
    }
    otherPurchaseButton(0, 0, 0.7)

    noStroke();
    textAlign(LEFT, CENTER);
    textSize(15);
    fill(255);
    text("50%", 5, 10);
    drawResourcePot(width / 2 - 665, height / 2 - 380, 0.18);
    text("=", 43, 10);
    pop();
}

function drawTakeOutSign100() {
    push();
    if (potCollected) {
        translate(width / 2 + 102, height / 2 - 218);
    }
    else {
        translate(width / 2 + 102, height / 2 - 118);
    }
    otherPurchaseButton(0, 0, 0.7)

    noStroke();
    textAlign(LEFT, CENTER);
    textSize(15);
    fill(255);
    text("100%", 5, 10);
    drawResourcePot(width / 2 - 665, height / 2 - 380, 0.18);
    text("=", 47, 10);
    pop();
}

function drawCancelSign() {
    push();
    if (showTakeOutPercentSign && potCollected) {
        translate(735, 105);
    }
    else {
        translate(735, 205);
    }
    noStroke();
    fill(255, 71, 10);
    rect(0, 0, 90, 35, 8);
    textAlign(LEFT, CENTER);
    textSize(14);
    fill(255);
    text("Cancel", 23, 18);
    pop();
}