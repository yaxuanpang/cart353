function drawNetBag(x, y, s) {
    push();
    translate(x, y);
    scale(s);

    // bag shape (filled backing)
    noStroke();
    fill(90, 55, 10, 140);
    beginShape();
    vertex(5, 12);
    bezierVertex(-8, 40, -2, 85, 30, 90);
    bezierVertex(62, 85, 68, 40, 55, 12);
    endShape(CLOSE);

    // diagonal mesh that follows the bag's edges
    const rows = 10;
    const cols = 6;
    const rowPts = [];

    for (let r = 0; r <= rows; r++) {
        const t = r / rows;
        const y = bezierPoint(12, 40, 85, 90, t);   // y along the left edge
        const lx = bezierPoint(5, -8, -2, 30, t);    // left edge x
        const rx = 60 - lx;                          // right edge x (mirror around x = 30)

        const row = [];
        for (let c = 0; c <= cols; c++) {
            row.push({ x: lerp(lx, rx, c / cols), y: y });
        }
        rowPts.push(row);
    }

    stroke(225, 205, 145);
    strokeWeight(1.5);
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            line(rowPts[r][c].x, rowPts[r][c].y, rowPts[r + 1][c + 1].x, rowPts[r + 1][c + 1].y);
            line(rowPts[r][c + 1].x, rowPts[r][c + 1].y, rowPts[r + 1][c].x, rowPts[r + 1][c].y);
        }
    }

    // bag outline
    noFill();
    stroke(117, 66, 2);
    strokeWeight(2.5);
    beginShape();
    vertex(5, 12);
    bezierVertex(-8, 40, -2, 85, 30, 90);
    bezierVertex(62, 85, 68, 40, 55, 12);
    endShape();

    // rim and drawstring
    stroke(140, 83, 13);
    strokeWeight(4);
    ellipse(30, 12, 50, 10);
    pop();
}