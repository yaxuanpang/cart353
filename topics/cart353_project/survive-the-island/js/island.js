let seed = 42;

//island elements
function islandDraw() {
    background(6, 66, 115);
    islandDetails();
    forestArrowDraw();
    campArrowDraw();
    beachArrowDraw();
}

//drawing the island shape
function drawIsland(baseRadius, variance, col, noiseFreq, waveOffset = 0) {
    push();
    fill(col);
    noStroke();

    beginShape();

    for (let a = 0; a < 360; a += 1) {
        let nx = map(cos(a), -1, 1, 0, noiseFreq);
        let ny = map(sin(a), -1, 0.8, 0, noiseFreq);

        let asymmetry = sin(a * 2) * 30;
        let r = baseRadius + waveOffset + asymmetry + map(noise(nx, ny), 0, 1, -variance, variance);

        let x = r * cos(a);
        let y = r * sin(a);
        vertex(x, y);
    }
    endShape(CLOSE);
    pop();
}

//drawing details of the island
function islandDetails() {
    push();
    randomSeed(seed);
    noiseSeed(seed);

    translate(width / 2, height / 2 - 30);


    let t = frameCount * 1.5;

    // 1. Ocean
    let nowhereOcean = sin(t) * 12;
    drawIsland(630, 155, color(15, 111, 189, 100), 0.7, nowhereOcean);

    let waveDeepOcean = sin(t) * 12;
    drawIsland(580, 155, color(15, 111, 189, 100), 0.7, waveDeepOcean);

    let waveOcean = sin(t) * 12;
    drawIsland(530, 155, color(15, 111, 189, 100), 0.7, waveOcean);

    let waveMostOuter = sin(t) * 12;
    drawIsland(480, 155, color(11, 136, 219, 100), 0.7, waveMostOuter);

    let waveOuter = sin(t) * 12;
    drawIsland(430, 155, color(29, 162, 216, 100), 0.7, waveOuter);

    let waveMid = sin(t) * 12;
    drawIsland(380, 155, color(29, 162, 216, 100), 0.7, waveMid);

    let waveInner = sin(t + 60) * 9;
    drawIsland(330, 155, color(71, 184, 214, 120), 0.7, waveInner);

    let waveMostInner = sin(t + 120) * 12;
    drawIsland(275, 115, color(71, 184, 214, 140), 0.7, waveMostInner);

    // 2. Sandy beach border
    drawIsland(225, 90, color(225, 205, 145), 0.7);
    drawIsland(225, 105, color(150, 100, 29, 40), 0.7);
    drawIsland(205, 100, color(196, 159, 106, 100), 0.6);
    drawIsland(220, 150, color(196, 159, 106), 0.5);

    // 3. Main grass landmass
    drawIsland(200, 180, color(75, 140, 70), 0.7);

    noStroke();
    fill(45, 128, 38);
    ellipse(85, 140, 220, 130);
    ellipse(130, 80, 170, 130);
    ellipse(80, 20, 150, 70);

    ellipse(-60, -30, 100, 40);
    ellipse(-30, -10, 80, 30);

    pop();
}

function islandMousePressed() {

}