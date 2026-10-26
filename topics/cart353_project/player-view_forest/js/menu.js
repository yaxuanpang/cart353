let showCollectedResourcesMenu = true;
let showGoldCoinsMenu = true;
let showMainResourceMenu = true;

const collectedResourcesMenu = {
    x: 3,
    y: 210,
    w: 210,
    h: 300,
    cornerRadius: 3,
    closeButton: {
        x: 213,
        y: 335,
        w: 30,
        h: 50,
        cornerRadius: 3
    },
    openButton: {
        x: 2,
        y: 335,
        w: 30,
        h: 50,
        cornerRadius: 3
    }
};

const goldCoinsMenu = {
    x: 1067,
    y: 463,
    w: 230,
    h: 60,
    cornerRadius: 3,
    closeButton: {
        x: 1067,
        y: 463,
        w: 50,
        h: 60,
        cornerRadius: 3
    }
};

const MainResourceMenu = {
    x: 3,
    y: 530,
    w: 1295,
    h: 207,
    cornerRadius: 3
};

function drawMenu() {
    drawResourceCollectedMenu(collectedResourcesMenu);
    drawGoldCoinsMenu(goldCoinsMenu);
    drawMainResourceMenu(MainResourceMenu);
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
    }
    else if (showGoldCoinsMenu === false) {
        stroke(181, 110, 24);
        fill(181, 110, 24, 200);
        strokeWeight(3);
        rect(1248, 463, 50, 60, goldCoinsMenu.closeButton.cornerRadius);
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
        islandButton();
    }
    else if (!showMainResourceMenu) {
        stroke(181, 110, 24);
        fill(181, 110, 24, 200);
        strokeWeight(3);
        rect(MainResourceMenu.x + MainResourceMenu.w / 2, 717, 40, 30, 3);
        noStroke();
        textSize(18);
        //fill(84, 37, 4);
        fill(255);
        text("^", MainResourceMenu.x + MainResourceMenu.w / 2 + 15, 743);
    }
    pop();

}

function islandButton() {
    push();
    stroke(117, 66, 2);
    strokeWeight(8);
    fill(140, 83, 13);
    ellipse(647.5, 695, 100);

    noStroke();
    fill(15, 111, 189);
    ellipse(647.5, 695, 85);

    fill(71, 184, 214, 140);
    ellipse(647.5, 695, 80, 60);

    fill(29, 162, 216, 120);
    ellipse(647.5, 695, 85, 70);

    //island
    noStroke();
    fill(225, 205, 145);
    ellipse(647.5, 695, 70, 50);

    fill(75, 140, 70);
    ellipse(655, 695, 50, 35);
    pop();
}

function menuMousePressed() {
    if (showCollectedResourcesMenu) {
        let btn = collectedResourcesMenu.closeButton;
        if (mouseX >= btn.x && mouseX <= btn.x + btn.w &&
            mouseY >= btn.y && mouseY <= btn.y + btn.h) {
            showCollectedResourcesMenu = false;
        }
    }
    else if (!showCollectedResourcesMenu) {
        if (mouseX >= 2 && mouseX <= 2 + 30 &&
            mouseY >= 335 && mouseY <= 335 + 50) {
            showCollectedResourcesMenu = true;
        }
    }

    if (showGoldCoinsMenu) {
        let btn = goldCoinsMenu.closeButton;
        if (mouseX >= btn.x && mouseX <= btn.x + btn.w &&
            mouseY >= btn.y && mouseY <= btn.y + btn.h) {
            showGoldCoinsMenu = false;
        }
    }
    else if (!showGoldCoinsMenu) {
        if (mouseX >= 1248 && mouseX <= 1248 + 50 &&
            mouseY >= 463 && mouseY <= 463 + 60) {
            showGoldCoinsMenu = true;
        }
    }

    if (showMainResourceMenu) {
        if (mouseX >= MainResourceMenu.x && mouseX <= MainResourceMenu.x + MainResourceMenu.w &&
            mouseY >= MainResourceMenu.y && mouseY <= MainResourceMenu.y + MainResourceMenu.h) {
            showMainResourceMenu = false;
        }
    }
    else if (!showMainResourceMenu) {
        if (mouseX >= MainResourceMenu.x + MainResourceMenu.w / 2 && mouseX <= MainResourceMenu.x + MainResourceMenu.w / 2 + 40 && mouseY >= 717 && mouseY <= 717 + 30) {
            showMainResourceMenu = true;
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
}