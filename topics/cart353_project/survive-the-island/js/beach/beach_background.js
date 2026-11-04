function beachBackgroundSetup() {
    oceanSetup();
}

function beachBackgroundDraw() {
    background(255);

    drawBeachSky();
    drawBeach();
    drawBeachFront();
    oceanDraw();
}

function drawBeach() {
    push();
    noStroke();
    fill(252, 211, 162);
    beginShape();
    for (let x = 0; x <= width; x += 10) {
        let y = 90 + sin(x * 1) * 5;
        vertex(x, y);
    }
    vertex(width, height);
    vertex(0, height);
    endShape(CLOSE);
    pop();
}

function drawBeachFront() {
    push();
    noStroke();
    fill(242, 185, 136);
    beginShape();
    for (let x = 0; x <= width; x += 10) {
        let y = 150 + sin(x * 2) * 5;
        vertex(x, y);
    }
    vertex(width, height);
    vertex(0, height);
    endShape(CLOSE);
    pop();
}