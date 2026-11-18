let showMorning = false;

const campSky = {
    topR: 5, topG: 170, topB: 247,
    botR: 120, botG: 230, botB: 255,
    height: 435
};

const beachSky = {
    topR: 5, topG: 170, topB: 247,
    botR: 179, botG: 244, botB: 255,
    height: 100
};

function drawCampSky() {
    push();
    noFill();
    let c1 = color(campSky.topR, campSky.topG, campSky.topB);
    let c2 = color(campSky.botR, campSky.botG, campSky.botB);
    for (let y = 0; y < campSky.height; y++) {
        let t = y / campSky.height;
        stroke(lerpColor(c1, c2, t));
        line(0, y, width, y);
        showMorning = true;
    }
    pop();
}

function drawBeachSky() {
    push();
    noFill();
    let c3 = color(beachSky.topR, beachSky.topG, beachSky.topB);
    let c4 = color(beachSky.botR, beachSky.botG, beachSky.botB);
    for (let y = 0; y < beachSky.height; y++) {
        let t = y / beachSky.height;
        stroke(lerpColor(c3, c4, t));
        line(0, y, width, y);
        showMorning = true;
    }
    pop();
}

function drawSun(s) {
    push();
    scale(s);
    if (showMorning) {
        noStroke();
        blendMode(ADD);
        fill(255, 242, 212);
        circle(width / 2 + 385, height / 6 - 80, 55);
        fill(255, 242, 212);
        circle(width / 2 + 385, height / 6 - 80, 55);
    }
    pop();
}

function drawShine(s) {
    push();
    scale(s);
    noStroke();
    fill(255, 242, 212, 150);
    circle(width / 2 + 385, height / 6 - 80, 90);
    circle(width / 2 + 385, height / 6 - 80, 145);
    circle(width / 2 + 385, height / 6 - 80, 200); // only for morning
    circle(width / 2 + 385, height / 6 - 80, 235);
    // circle(width / 2 + 385, height / 6 - 80, 325);
    // circle(width / 2 + 385, height / 6 - 80, 400);
    // circle(width / 2 + 385, height / 6 - 80, 485);
    // circle(width / 2 + 385, height / 6 - 80, 565);
    pop();
}