let bagPlaced = false;
let fishingClickCount = 0;
let netLeftCount = 3;
let industrialNet = true;

function netDraw() {
    push();
    textSize(23);
    textAlign(CENTER, CENTER);
    text("x" + netLeftCount, 1435, 160);
    pop();
}

function drawNetBag(x, y, s) {
    push();
    translate(x, y);
    scale(s);

    // bag shape (filled backing)
    noStroke();
    if (industrialNet) {
        fill(140, 236, 255, 140);
    }
    else {
        fill(90, 55, 10, 140);
    }
    if (netLeftCount === 0 && !bagPlaced) {
        fill(90, 55, 10, 140, 100);
    }
    beginShape();
    vertex(5, 12);
    bezierVertex(-8, 40, -2, 85, 30, 90);
    bezierVertex(62, 85, 68, 40, 55, 12);
    endShape(CLOSE);

    // diagonal mesh that follows the bag's edges
    const rows = 10;
    const cols = 6;
    const rowPts = [];

    for (let r = 0; r <= rows; r++) {
        const t = r / rows;
        const y = bezierPoint(12, 40, 85, 90, t);   // y along the left edge
        const lx = bezierPoint(5, -8, -2, 30, t);    // left edge x
        const rx = 60 - lx;                          // right edge x (mirror around x = 30)

        const row = [];
        for (let c = 0; c <= cols; c++) {
            row.push({ x: lerp(lx, rx, c / cols), y: y });
        }
        rowPts.push(row);
    }

    if (industrialNet) {
        stroke(255);
    }
    else {
        stroke(225, 205, 145);
    }
    if (netLeftCount === 0 && !bagPlaced) {
        stroke(225, 205, 145, 100);
    }
    strokeWeight(1.5);
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            line(rowPts[r][c].x, rowPts[r][c].y, rowPts[r + 1][c + 1].x, rowPts[r + 1][c + 1].y);
            line(rowPts[r][c + 1].x, rowPts[r][c + 1].y, rowPts[r + 1][c].x, rowPts[r + 1][c].y);
        }
    }

    // bag outline
    noFill();
    if (industrialNet) {
        stroke(255);
    }
    else {
        stroke(117, 66, 2);
    }
    if (netLeftCount === 0 && !bagPlaced) {
        stroke(117, 66, 2, 100);
    }
    strokeWeight(2.5);
    beginShape();
    vertex(5, 12);
    bezierVertex(-8, 40, -2, 85, 30, 90);
    bezierVertex(62, 85, 68, 40, 55, 12);
    endShape();

    // rim and drawstring
    if (industrialNet) {
        stroke(0, 163, 212);
    }
    else {
        stroke(140, 83, 13);
    }
    if (netLeftCount === 0 && !bagPlaced) {
        stroke(140, 83, 13, 100);
    }
    strokeWeight(4);
    ellipse(30, 12, 50, 10);
    pop();
}

function purchaseNet() {
    if (netLeftCount === 0 && !bagPlaced) {
        otherPurchaseButton(1385, 230, 0.6)
        drawFireWood(929, 102, 0.5)

        textAlign(CENTER, LEFT);
        textSize(12);
        text("1x    ", 1396, 233);
        text("= 3 nets", 1459, 233);

    }
}

function netMousePressed() {
    if (showNetMenu && bagPlaced && fishingClickCount === 1) {
        catchFish();
    }
    if (showNetMenu && mouseX <= 1497 && mouseX >= 1367 && mouseY <= 330 && mouseY >= 130) {

        if (!bagPlaced) {
            bagPlaced = true;
            netLeftCount--;
        }

        if (netLeftCount < 0) {
            bagPlaced = false;
            netLeftCount = 0;
        }
    }
    fishingClickCount++;
}

function drawPlacedNet() {
    if (bagPlaced && fishingClickCount === 1) {
        drawNetBag(mouseX - 44, mouseY - 59.5, 1.4);
    }
    else if (fishingClickCount > 1) {
        bagPlaced = false;
        fishingClickCount = 0;
    }
}