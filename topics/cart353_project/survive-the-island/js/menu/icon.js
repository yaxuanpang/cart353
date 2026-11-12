function drawLightningBolt(x, y, s) {
    let pts = [
        [35, 0],     // top left
        [0, 55],     // left kink
        [27, 55],    // inner notch
        [15, 100],   // bottom tip
        [70, 40],    // right kink
        [43, 40],    // inner notch
        [65, 0]      // top right
    ];

    push();
    stroke(255, 120, 0);
    strokeWeight(2);
    strokeJoin(MITER);
    fill(255, 225, 40);
    beginShape();
    for (let p of pts) {
        vertex(x + p[0] * s / 100, y + p[1] * s / 100);
    }
    endShape(CLOSE);
    pop();
}

function drawFishIcon(x, y, s, r) {
    push();
    translate(x, y);
    scale(s);
    rotate(r);
    noStroke();
    fill(159, 211, 224);
    ellipse(10, 0, 50, 20);
    triangle(-15, 0, -35, -10, -25, 0);
    triangle(-15, 0, -35, 10, -25, 0);
    pop();
}

function drawWaterIcon(x, y, s) {
    push();
    translate(x, y);
    scale(s);
    noStroke();
    fill(102, 202, 242);
    ellipse(0, 0, 43, 43);
    triangle(0, -40, -21, -5, 21, -5);

    fill(255, 255, 255, 170);
    ellipse(-12, 5, 7, 15);
    ellipse(-10, -8, 5, 5);
    pop();
}

function drawCoin(x, y) {
    push();
    strokeWeight(1.5);
    stroke(217, 157, 17);
    fill(255, 179, 0);
    ellipse(x, y, 30, 36);

    noStroke();
    fill(217, 157, 17);
    ellipse(x, y, 24, 36);

    fill(255, 232, 56);
    ellipse(x + 2, y, 25, 35);

    fill(217, 157, 17);
    textSize(20);
    text("$", x - 3, y + 7);

    fill(255, 179, 0);
    textSize(18);
    text("$", x - 1.5, y + 6);

    pop();
}

function drawFireWood(x, y, s) {
    push();
    translate(x, y);
    scale(s);
    drawLog(x + 50, y + 165, 60, 20, s);
    drawLog(x + 45, y + 155, 60, 20, s);
    drawLog(x + 40, y + 165, 60, 20, s);
    pop();

}