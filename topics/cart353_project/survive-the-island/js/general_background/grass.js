function drawFrontGrass() {
    push();
    noStroke();
    fill(102, 191, 61);
    beginShape();
    for (let x = 0; x <= width; x += 10) {
        let y = 645 + sin(x * 1) * 5;
        vertex(x, y);
    }
    vertex(width, 680);
    vertex(0, 680);
    endShape(CLOSE);

    beginShape();
    for (let x = 0; x <= width; x += 10) {
        let y = 695 + sin(x * 2.5) * 10;
        vertex(x, y);
    }
    vertex(width, 680);
    vertex(0, 680);
    endShape(CLOSE);

    ellipse(610, 700, 300, 40); //giant
    ellipse(750, 720, 100, 40); // below giant
    ellipse(840, 700, 70, 30); //other (sorry no name)
    ellipse(1200, 740, 300, 50);//lowest to right
    ellipse(1050, 715, 60, 10); //mini flat
    ellipse(500, 722, 100, 20); //flatest
    ellipse(300, 705, 250, 50);
    ellipse(430, 737, 50, 15);
    ellipse(170, 725, 150, 35);
    ellipse(880, 720, 35, 25);
    ellipse(1400, 700, 255, 35);
    ellipse(1300, 720, 65, 35);
    noStroke();
    fill(84, 212, 255, 30);
    rect(0, 0, width, 785);

    fill(84, 212, 255, 30);
    beginShape();
    for (let x = 0; x <= width; x += 10) {
        let y = 645 + sin(x * 1) * 5;
        vertex(x, y);
    }
    vertex(width, height);
    vertex(0, height);
    endShape(CLOSE);
    pop();
}

function drawGrass() {
    push();
    noStroke();
    fill(102, 191, 61);
    beginShape();
    for (let x = 0; x <= width; x += 10) {
        let y = 435 + sin(x * 1) * 5;
        vertex(x, y);
    }
    vertex(width, 500);
    vertex(0, 500);
    for (let x = 0; x <= width; x += 10) {
        let y = 515 + sin(x * 2.5) * 5;
        vertex(x, y);
    }
    vertex(width, 500);
    vertex(0, 500);
    endShape(CLOSE);
    ellipse(640, 530, 100, 30);
    ellipse(725, 525, 40, 10);
    ellipse(840, 540, 60, 30); //other (sorry no name)
    ellipse(70, 545, 150, 135);
    ellipse(1400, 520, 255, 35);
    pop();
}

function drawMidGrass() {
    push();
    noStroke();
    fill(102, 191, 61);
    beginShape();
    for (let x = 0; x <= width; x += 10) {
        let y = 390 + sin(x * 1) * 5;
        vertex(x, y);
    }
    vertex(width, 410);
    vertex(0, 410);
    endShape(CLOSE);
    for (let x = 0; x <= width; x += 10) {
        let y = 430 + sin(x * 1) * 5;
        vertex(x, y);
    }
    vertex(width, 410);
    vertex(0, 410);
    endShape(CLOSE);

    noStroke();
    fill(84, 212, 255, 30);
    rect(0, 0, width, 435);

    pop();
}

function drawMidGrass2() {
    push();
    noStroke();
    fill(102, 191, 61);
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

function drawMidGrass3() {
    push();

    noStroke();
    fill(102, 191, 61);
    beginShape();
    for (let x = 0; x <= width; x += 10) {
        let y = 530 + sin(x * 1) * 5;
        vertex(x, y);
    }
    vertex(width, 580);
    vertex(0, 580);
    for (let x = 0; x <= width; x += 10) {
        let y = 600 + sin(x * 2.5) * 5;
        vertex(x, y);
    }
    vertex(width, 580);
    vertex(0, 580);
    endShape(CLOSE);

    ellipse(610, 610, 300, 40); //giant
    ellipse(700, 630, 100, 20); // below giant
    ellipse(840, 605, 70, 30); //other (sorry no name)
    ellipse(1200, 650, 300, 50);//lowest to right
    ellipse(1050, 625, 90, 20); //mini flat
    ellipse(500, 632, 100, 50); //flatest

    ellipse(800, 625, 90, 30);
    ellipse(100, 615, 250, 50);
    ellipse(270, 655, 150, 45);
    ellipse(1400, 610, 255, 35);
    ellipse(1300, 630, 65, 35);
    ellipse(940, 615, 65, 15);
    ellipse(890, 645, 15, 15);


    noStroke();
    fill(84, 212, 255, 30);
    rect(0, 0, width, 655);

    pop();
}

function drawBackGrass() {
    push();
    noStroke();
    fill(102, 191, 61);
    beginShape();
    for (let x = 0; x <= width; x += 10) {
        let y = 365 + sin(x * 1) * 5;
        vertex(x, y);
    }
    vertex(width, height);
    vertex(0, height);
    endShape(CLOSE);
    pop();
}