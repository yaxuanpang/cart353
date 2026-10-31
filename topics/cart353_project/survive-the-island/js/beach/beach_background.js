function beachBackgroundSetup() {
}

function beachBackgroundDraw() {
    background(255);

    drawBeachSky();
    drawBeach();
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