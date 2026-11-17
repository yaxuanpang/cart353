let showBucket = false;
let bucketY = -120;
let bucketSpeed = 0;

function drawBucket(x, y, s) {
    push();
    noStroke();
    translate(x, y);
    scale(s);

    fill(148, 153, 161);
    rect(200, 200, 30, 50);
    triangle(200, 200, 200 - 15, 200, 200, 200 + 50);
    triangle(200 + 30, 200, 200 + 45, 200, 200 + 30, 200 + 50);

    strokeWeight(3);
    stroke(148, 153, 161);
    noFill();
    arc(215, 200, 50, 40, 180, 360);
    strokeWeight(3);
    stroke(255);
    line(197.5, 210, 203.5, 230);
    fill(255);
    circle(207, 240, 1);

    pop();
}

function bucketDip() {
    if (showBucket && bucketSpeed === 0) {
        bucketSpeed = 3;
    }
    bucketY += bucketSpeed;
    if (bucketY >= 30) {
        bucketSpeed = -3;
    }

    if (bucketY <= -120) {
        bucketY = -120
        bucketSpeed = 0;
        showBucket = false;
        waterCollected += 3;
    }

    drawBucket(width / 4 + 225, bucketY, 0.8);
}

function waterKeyPressed() {
    if (showBeach && keyCode === 87) {
        showBucket = true;
    }
}