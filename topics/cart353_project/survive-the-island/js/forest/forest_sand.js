function drawMidSand2() {
    push();
    noStroke();
    fill(255, 213, 122);
    beginShape();
    for (let x = 0; x <= width; x += 10) {
        let y = 375 + sin(x * 1) * 5;
        vertex(x, y);
    }
    vertex(width, height);
    vertex(0, height);
    endShape(CLOSE);

    pop();
}

function drawMidSand3() {
    push();

    noStroke();
    fill(255, 213, 122);
    beginShape();
    for (let x = 0; x <= width; x += 10) {
        let y = 530 + sin(x * 1) * 5;
        vertex(x, y);
    }
    vertex(width, height);
    vertex(0, height);
    endShape(CLOSE);

    noStroke();
    fill(84, 212, 255, 40);
    rect(0, 0, width, 655);

    pop();
}

function drawFrontSand() {
    push();
    noStroke();
    fill(250, 217, 145);
    beginShape();
    for (let x = 0; x <= width; x += 10) {
        let y = 645 + sin(x * 1) * 5;
        vertex(x, y);
    }
    vertex(width, height);
    vertex(0, height);
    endShape(CLOSE);
    noStroke();
    fill(84, 212, 255, 40);
    rect(0, 0, width, 785);
    pop();
}