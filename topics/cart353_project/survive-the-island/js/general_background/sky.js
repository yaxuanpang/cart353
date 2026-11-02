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
    }
    pop();
}