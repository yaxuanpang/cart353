let seed = 42;

function setup() {
    createCanvas(1300, 750);
    angleMode(DEGREES);
}

function draw() {
    background(6, 66, 115); // Deep ocean

    islandElements();
    drawForest();
}

function drawIsland(baseRadius, variance, col, noiseFreq, waveOffset = 0) {
    fill(col);
    noStroke();

    beginShape();

    for (let a = 0; a < 360; a += 1) {
        let nx = map(cos(a), -1, 1, 0, noiseFreq);
        let ny = map(sin(a), -1, 0.8, 0, noiseFreq);

        let asymmetry = sin(a * 2) * 40;
        let r = baseRadius + waveOffset + asymmetry + map(noise(nx, ny), 0, 1, -variance, variance);

        let x = r * cos(a);
        let y = r * sin(a);
        vertex(x, y);
    }
    endShape(CLOSE);
}

function islandElements() {
    randomSeed(seed);
    noiseSeed(seed);

    translate(width / 2, height / 2 - 30);


    let t = frameCount * 1.5;

    // 1. Ocean
    let waveMostOuter = sin(t) * 12;
    drawIsland(530, 155, color(15, 111, 189, 100), 0.7, waveMostOuter);

    let waveOuter = sin(t) * 12;
    drawIsland(480, 155, color(11, 136, 219, 100), 0.7, waveOuter);


    let waveMid = sin(t + 60) * 9;
    drawIsland(430, 155, color(29, 162, 216, 120), 0.7, waveMid);

    let waveInner = sin(t + 120) * 12;
    drawIsland(375, 115, color(71, 184, 214, 140), 0.7, waveInner);

    // 2. Sandy beach border
    drawIsland(325, 90, color(225, 205, 145), 0.7);

    // 3. Main grass landmass
    drawIsland(280, 210, color(75, 140, 70), 0.7);
}

function drawForest() {
    noStroke();
    fill(19, 110, 12);
    ellipse(110, 205, 290, 180);
    ellipse(50, 120, 200, 100);

    ellipse(-93, -145, 145, 65);

}