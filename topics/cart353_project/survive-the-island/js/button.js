function purchaseButton(x, y) {
    noStroke();
    fill(255, 112, 10);
    rect(x + 25, y + 30, 190, 50, 12);

    fill(255, 190, 110, 200);          // top highlight
    beginShape();
    vertex(35, 30); vertex(205, 30); vertex(212, 33);
    vertex(205, 35); vertex(35, 35); vertex(28, 33);
    endShape(CLOSE);

    fill(255, 160, 80, 170);           // left highlight
    beginShape();
    vertex(28, 33); vertex(35, 35); vertex(35, 75);
    vertex(28, 77); vertex(25, 70); vertex(25, 40);
    endShape(CLOSE);

    fill(150, 35, 0, 170);             // bottom shadow
    beginShape();
    vertex(28, 77); vertex(35, 75); vertex(205, 75);
    vertex(212, 77); vertex(205, 80); vertex(35, 80);
    endShape(CLOSE);

    fill(190, 50, 0, 170);             // right shadow
    beginShape();
    vertex(212, 33); vertex(215, 40); vertex(215, 70);
    vertex(212, 77); vertex(205, 75); vertex(205, 35);
    endShape(CLOSE);

    strokeWeight(1.5);
    stroke(255);
    fill(255, 71, 10);
    rect(35, 35, 170, 40, 5);

    strokeWeight(1.5);
    stroke(255);
    line(30, 33, 36, 36);
    line(210, 33, 203, 36);
    line(30, 77, 36, 74);
    line(210, 77, 203, 74);
}