const collectedResourcesMenu = {
    x: 3,
    y: 110,
    w: 210,
    h: 300,
    cornerRadius: 3,
    closeButton: {
        x: 213,
        y: 235,
        w: 30,
        h: 50,
        cornerRadius: 3
    }
};

const goldCoinsMenu = {
    x: 667,
    y: 363,
    w: 230,
    h: 60,
    cornerRadius: 3,
    closeButton: {
        x: 667,
        y: 363,
        w: 50,
        h: 60,
        cornerRadius: 3
    }
};

const MainResourceMenu = {
    x: 3,
    y: 430,
    w: 895,
    h: 167,
    cornerRadius: 3
};

function setup() {
    createCanvas(900, 600);
    angleMode(DEGREES);
}

function draw() {
    background(84, 212, 255);
    drawLand();
    drawResourceCollectedMenu(collectedResourcesMenu);
    drawGoldCoinsMenu(goldCoinsMenu);
    drawMainResourceMenu(MainResourceMenu);
}

function drawLand() {
    noStroke();
    push();
    fill(255, 213, 122);
    beginShape();
    for (let x = 0; x <= width; x += 10) {
        let y = 385 + sin(x * 1) * 5;
        vertex(x, y);
    }
    vertex(width, height);
    vertex(0, height);
    endShape(CLOSE);
    pop();
}

function drawGoldCoinsMenu(menu) {
    push();
    strokeWeight(5);
    stroke(181, 110, 24);
    fill(181, 110, 24, 200);
    // Main container
    rect(menu.x, menu.y, menu.w, menu.h, menu.cornerRadius);

    noFill();
    strokeWeight(2);
    rect(menu.closeButton.x, menu.closeButton.y, menu.closeButton.w, menu.closeButton.h, menu.closeButton.cornerRadius);
    pop();
}

function drawResourceCollectedMenu(menu) {
    push();
    strokeWeight(5);
    stroke(181, 110, 24);
    fill(181, 110, 24, 200);
    // Main container
    rect(menu.x, menu.y, menu.w, menu.h, menu.cornerRadius);
    rect(menu.closeButton.x, menu.closeButton.y, menu.closeButton.w, menu.closeButton.h, menu.closeButton.cornerRadius);
    pop();
}

function drawMainResourceMenu(menu) {
    push();
    strokeWeight(5);
    stroke(181, 110, 24);
    fill(181, 110, 24, 200);
    rect(menu.x, menu.y, menu.w, menu.h, menu.cornerRadius);
    pop();
}