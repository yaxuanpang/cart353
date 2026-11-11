function drawAxe(x, y, s) {
    push();
    translate(x, y);
    scale(s);
    rotate(-45);

    // wooden handle
    stroke(117, 66, 2);
    strokeWeight(2);
    fill(160, 100, 25);
    rect(27, 10, 10, 95, 4);

    // wood grain
    stroke(117, 66, 2, 120);
    strokeWeight(1);
    line(31, 40, 31, 85);
    line(34, 44, 34, 80);

    // blade
    fill(110, 120, 132);
    noStroke();
    rect(-6, 12.5, 45, 25, 5);
    triangle(-6, 15, -2, 6, 40, 16);
    triangle(-2, 45, -5, 31, 40, 33);


    // eye (where the head wraps the handle) and the back of the head
    stroke(70, 80, 90);
    strokeWeight(2);
    rect(24, 12, 16, 26, 3);

    // shine along the cutting edge
    noFill();
    stroke(235, 242, 250);
    strokeWeight(2);
    bezier(-2, 6, -7, 18, -7, 34, -2, 46);

    pop();
}