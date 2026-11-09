function drawResourcePot(x, y) {
    push();
    translate(x, y);
    noStroke();

    // shadow
    fill(43, 12, 0, 50);
    ellipse(0, 120, 360, 25);

    // clay body
    fill(184, 98, 56);
    rect(-150, 20, 300, 110, 55);

    // rim
    fill(158, 80, 42);
    ellipse(0.5, 28, 240, 26);
    fill(61, 27, 13);
    ellipse(0, 30, 210, 15);

    fill(61, 27, 13, 100);
    ellipse(0, 30, 230, 20);
    pop();
}