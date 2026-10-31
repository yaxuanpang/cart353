const ocean = {
    topR: 35, topG: 208, topB: 247,
    botR: 4, botG: 20, botB: 138,
    gradientStart: 215
};

function oceanDraw() {
    drawFoam();
    drawWater();
}

function drawWater() {
    push();
    noStroke();

    let col1 = color(ocean.topR, ocean.topG, ocean.topB);
    let col2 = color(ocean.botR, ocean.botG, ocean.botB);

    // slow tide: the whole waterline rises and falls
    let tide = sin(frameCount * 0.8) * 20;

    // 1. the wave shape, one solid color
    fill(col1);
    beginShape();
    for (let x = 0; x <= width; x += 10) {
        let swell = sin(x * 0.5 + frameCount * 2) * 10;
        let ripple = sin(x * 1.5 + frameCount * 0.4) * 6;
        vertex(x, 170 + tide + swell + ripple);
    }
    vertex(width, height);
    vertex(0, height);
    endShape(CLOSE);

    // 2. flat gradient bands below the waves
    for (let y = ocean.gradientStart; y < height; y += 5) {
        let t = (y - ocean.gradientStart) / (height - ocean.gradientStart);
        fill(lerpColor(col1, col2, t));
        rect(0, y, width, 5);
    }

    pop();
}

function drawFoam() {
    push();
    noStroke();
    fill(222, 252, 255);

    // slow tide: the whole waterline rises and falls
    let tide = sin(frameCount * 0.8) * 25;

    beginShape();
    for (let x = 0; x <= width; x += 10) {
        // big slow swell + small fast ripple, both drifting sideways
        let swell = sin(x * 0.5 + frameCount * 2) * 15;
        let ripple = sin(x * 1.5 + frameCount * 0.4) * 10;
        let y = 160 + tide + swell + ripple;
        vertex(x, y);
    }
    vertex(width, height);
    vertex(0, height);
    endShape(CLOSE);
    pop();
}