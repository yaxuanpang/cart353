let showCollectedResourcesMenu = true;
let showGoldCoinsMenu = true;
let showMainResourceMenu = true;

let showNetMenu = true;

let showIslandButton = true;

let goldCoins = 1000;
let fishCollected = 0;
let woodCollected = 0;
let waterCollected = 0;


let fishTaken = 0;
let woodTaken = 0;
let waterTaken = 0;

const collectedResourcesMenu = {
    x: 3,
    y: 270,
    w: 210,
    h: 300,
    cornerRadius: 3,
    closeButton: {
        x: 213,
        y: 395,
        w: 30,
        h: 50,
        cornerRadius: 3
    },
    openButton: {
        x: 2,
        y: 395,
        w: 30,
        h: 50,
        cornerRadius: 3
    }
};

const goldCoinsMenu = {
    x: 1297,
    y: 523,
    w: 200,
    h: 60,
    cornerRadius: 3,
    closeButton: {
        x: 1297,
        y: 523,
        w: 50,
        h: 60,
        cornerRadius: 3
    }
};

const mainResourceMenu = {
    x: 3,
    y: 590,
    w: 1494,
    h: 147,
    cornerRadius: 3
};

const netMenu = {
    x: 1367,
    y: 130,
    w: 130,
    h: 200,
    cornerRadius: 3,
    closeButton: {
        x: 1337,
        y: 205,
        w: 30,
        h: 50,
        cornerRadius: 3
    },
    openButton: {
        x: 1467,
        y: 205,
        w: 30,
        h: 50,
        cornerRadius: 3
    }
};


function drawMenu() {

    drawResourceCollectedMenu(collectedResourcesMenu);
    drawGoldCoinsMenu(goldCoinsMenu);
    drawMainResourceMenu(mainResourceMenu);
    if (showIslandButton) {
        islandButton(width / 2 + 15, 0);
        energyDraw();
    }
    drawNetMenu(netMenu);
    drawPlacedNet();
}

function drawGoldCoinsMenu(menu) {
    push();
    if (showGoldCoinsMenu) {
        strokeWeight(3);
        stroke(181, 110, 24);
        fill(181, 110, 24, 200);
        rect(menu.x, menu.y, menu.w, menu.h, menu.cornerRadius);
        noFill();
        noStroke();
        rect(menu.closeButton.x, menu.closeButton.y, menu.closeButton.w, menu.closeButton.h, menu.closeButton.cornerRadius);
        drawCoin(1324, 552);

        textAlign(RIGHT, CENTER);
        textSize(25);
        fill(255);
        text(goldCoins, 1480, 555);

    }
    else if (showGoldCoinsMenu === false) {
        stroke(181, 110, 24);
        fill(181, 110, 24, 200);
        strokeWeight(3);
        rect(1448, 523, 50, 60, goldCoinsMenu.closeButton.cornerRadius);

        drawCoin(1474, 552);
    }
    pop();

}

function drawResourceCollectedMenu(menu) {
    push();
    if (showCollectedResourcesMenu) {
        strokeWeight(3);
        stroke(181, 110, 24);
        fill(181, 110, 24, 200);
        rect(menu.x, menu.y, menu.w, menu.h, menu.cornerRadius);

        strokeWeight(3);
        rect(menu.closeButton.x, menu.closeButton.y, menu.closeButton.w, menu.closeButton.h, menu.closeButton.cornerRadius);

        noStroke();
        textSize(16);
        //fill(84, 37, 4);
        fill(255);
        text("Resources Collected", menu.x + 35, menu.y + 30);
        textSize(18);
        text("<", menu.closeButton.x + 10, menu.closeButton.y + 30);

        drawFishIcon(menu.x + 40, menu.y + 80, 0.9, 0);
        drawLog(menu.x + 50, menu.y + 165, 60, 20, 0);
        drawLog(menu.x + 45, menu.y + 155, 60, 20, 0);
        drawLog(menu.x + 40, menu.y + 165, 60, 20, 0);
        drawWaterIcon(menu.x + 40, menu.y + 250, 0.8);


        textSize(25);
        fill(255);
        text(": " + fishCollected, menu.x + 110, menu.y + 86);
        text(": " + woodCollected, menu.x + 110, menu.y + 168);
        text(": " + waterCollected, menu.x + 110, menu.y + 250);

    }

    else if (showCollectedResourcesMenu === false) {
        stroke(181, 110, 24);
        fill(181, 110, 24, 200);
        strokeWeight(3);
        rect(collectedResourcesMenu.openButton.x, collectedResourcesMenu.openButton.y, collectedResourcesMenu.openButton.w, collectedResourcesMenu.openButton.h, collectedResourcesMenu.openButton.cornerRadius);
        noStroke();
        textSize(18);
        //fill(84, 37, 4);
        fill(255);
        text(">", collectedResourcesMenu.openButton.x + 10, collectedResourcesMenu.openButton.y + 30);
    }
    pop();
}

function drawMainResourceMenu(menu) {
    push();
    if (showMainResourceMenu) {
        strokeWeight(3);
        stroke(181, 110, 24);
        fill(181, 110, 24, 200);
        rect(menu.x, menu.y, menu.w, menu.h, menu.cornerRadius);
        rect(mainResourceMenu.x + mainResourceMenu.w / 2, 560, 40, 30, 3);

        strokeWeight(5);
        stroke(130, 75, 9);
        fill(130, 75, 9, 100);
        rect(mainResourceMenu.w / 2 + 145, mainResourceMenu.y + 5, 130, mainResourceMenu.h - 10, 10);
        rect(mainResourceMenu.w / 2 + 345, mainResourceMenu.y + 5, 130, mainResourceMenu.h - 10, 10);
        rect(mainResourceMenu.w / 2 + 545, mainResourceMenu.y + 5, 130, mainResourceMenu.h - 10, 10);

        textSize(18);
        noStroke();
        fill(255);
        text("^", mainResourceMenu.x + mainResourceMenu.w / 2 + 15, 586);

        drawFishIcon(menu.x + 950, menu.y + 50, 0.9, 0);
        drawLog(menu.x + 1160, menu.y + 55, 60, 20, 0); //furthest back
        drawLog(menu.x + 1155, menu.y + 45, 60, 20, 0); // top
        drawLog(menu.x + 1150, menu.y + 55, 60, 20, 0); // front
        drawWaterIcon(menu.x + 1355, menu.y + 55, 0.8);

        textSize(25);
        fill(255);
        textAlign(CENTER, CENTER);
        text(fishTaken, menu.x + 955, menu.y + 116);
        text(woodTaken, menu.x + 1155, menu.y + 116);
        text(waterTaken, menu.x + 1355, menu.y + 116);


        showIslandButton = true;
    }
    else if (!showMainResourceMenu) {
        stroke(181, 110, 24);
        fill(181, 110, 24, 200);
        strokeWeight(3);
        rect(mainResourceMenu.x + mainResourceMenu.w / 2, 717, 40, 30, 3);
        noStroke();
        textSize(18);
        fill(255);
        text("^", mainResourceMenu.x + mainResourceMenu.w / 2 + 15, 743);
        showIslandButton = false;
    }
    pop();

}

function drawNetMenu(netMenu) {
    if (showBeach) {
        if (showNetMenu) {
            strokeWeight(3);
            stroke(181, 110, 24);
            fill(181, 110, 24, 200);
            rect(netMenu.x, netMenu.y, netMenu.w, netMenu.h, netMenu.cornerRadius);
            rect(netMenu.closeButton.x, netMenu.closeButton.y, netMenu.closeButton.w, netMenu.closeButton.h, netMenu.closeButton.cornerRadius);

            textSize(18);
            noStroke();
            fill(255);
            text(">", netMenu.closeButton.x + 10, netMenu.closeButton.y + 30);

            textSize(13);
            text("fishing net", netMenu.x + 40, netMenu.y + 190);
            netDraw();

            drawNetBag(netMenu.x + 25, netMenu.y + 45, 1.4);
        }
        else if (!showNetMenu) {
            strokeWeight(3);
            stroke(181, 110, 24);
            fill(181, 110, 24, 200);
            rect(netMenu.openButton.x, netMenu.openButton.y, netMenu.openButton.w, netMenu.openButton.h, netMenu.openButton.cornerRadius);

            textSize(18);
            noStroke();
            fill(255);
            text("<", netMenu.openButton.x + 10, netMenu.openButton.y + 30);
        }
    }
}

function islandButton(x, y) {
    push();
    translate(x, y);
    stroke(117, 66, 2);
    strokeWeight(8);
    fill(140, 83, 13);
    ellipse(0, 695, 100);

    noStroke();
    fill(15, 111, 189);
    ellipse(0, 695, 85);

    fill(71, 184, 214, 140);
    ellipse(0, 695, 80, 60);

    fill(29, 162, 216, 120);
    ellipse(0, 695, 85, 70);

    //island
    noStroke();
    fill(225, 205, 145);
    ellipse(0, 695, 70, 50);

    fill(75, 140, 70);
    ellipse(8, 695, 50, 35);
    pop();
}

function menuMousePressed() {
    netMousePressed();
    if (showCollectedResourcesMenu) {
        let btn = collectedResourcesMenu.closeButton;
        if (mouseX >= btn.x && mouseX <= btn.x + btn.w &&
            mouseY >= btn.y && mouseY <= btn.y + btn.h) {
            showCollectedResourcesMenu = false;
            showAxe = false;
        }
    }
    else if (!showCollectedResourcesMenu) {
        if (mouseX >= 2 && mouseX <= 2 + 30 &&
            mouseY >= 375 && mouseY <= 375 + 50) {
            showCollectedResourcesMenu = true;
            showAxe = false;
        }
    }

    if (showGoldCoinsMenu) {
        let btn = goldCoinsMenu.closeButton;
        if (mouseX >= btn.x && mouseX <= btn.x + btn.w &&
            mouseY >= btn.y && mouseY <= btn.y + btn.h) {
            showGoldCoinsMenu = false;
            showAxe = false;
        }
    }
    else if (!showGoldCoinsMenu) {
        if (mouseX >= 1448 && mouseX <= 1448 + 50 &&
            mouseY >= 503 && mouseY <= 503 + 60) {
            showGoldCoinsMenu = true;
            showAxe = false;
        }
    }

    if (showMainResourceMenu) {
        if (mouseX >= mainResourceMenu.x + mainResourceMenu.w / 2 - 40 && mouseX <= mainResourceMenu.x + mainResourceMenu.w / 2 + 40 &&
            mouseY >= 590 - 40 && mouseY <= 630 + 40) {
            showMainResourceMenu = false;
            showAxe = false;
        }
    }
    else if (!showMainResourceMenu) {
        if (mouseX >= mainResourceMenu.x + mainResourceMenu.w / 2 && mouseX <= mainResourceMenu.x + mainResourceMenu.w / 2 + 40 && mouseY >= 717 && mouseY <= 717 + 30) {
            showMainResourceMenu = true;
            showAxe = false;
        }
    }

    if (showNetMenu) {
        let btn = netMenu.closeButton;
        if (mouseX >= btn.x && mouseX <= btn.x + btn.w &&
            mouseY >= btn.y && mouseY <= btn.y + btn.h) {
            showNetMenu = false;
        }
    }
    else if (!showNetMenu) {
        if (mouseX >= netMenu.openButton.x && mouseX <= netMenu.openButton.x + 30 &&
            mouseY >= netMenu.openButton.y && mouseY <= netMenu.openButton.y + 50) {
            showNetMenu = true;
        }
    }
}

function menuKeyPressed() {
    if (key === '1') {
        showCollectedResourcesMenu = !showCollectedResourcesMenu;
    }
    if (key === '2') {
        showGoldCoinsMenu = !showGoldCoinsMenu;
    }
    if (key === '3') {
        showMainResourceMenu = !showMainResourceMenu;
    }
    if (key === '4') {
        showNetMenu = !showNetMenu;
    }
}