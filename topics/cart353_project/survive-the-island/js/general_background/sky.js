let showNoon = true;
let showSunrise = false;
let showSunset = false;
let showDawn = false;
let show

const campNoonSky = {
    topR: 5, topG: 170, topB: 247,
    botR: 120, botG: 230, botB: 255,
    height: 435
};

const beachNoonSky = {
    topR: 5, topG: 170, topB: 247,
    botR: 179, botG: 244, botB: 255,
    height: 100
};

function drawCampSky() {
    push();
    noFill();
    if (showNoon) {
        let c1 = color(campNoonSky.topR, campNoonSky.topG, campNoonSky.topB);
        let c2 = color(campNoonSky.botR, campNoonSky.botG, campNoonSky.botB);
        for (let y = 0; y < campNoonSky.height; y++) {
            let t = y / campNoonSky.height;
            stroke(lerpColor(c1, c2, t));
            line(0, y, width, y);
        }
    }
    pop();
}

function drawBeachSky() {
    push();
    noFill();
    if (showNoon) {
        let c3 = color(beachNoonSky.topR, beachNoonSky.topG, beachNoonSky.topB);
        let c4 = color(beachNoonSky.botR, beachNoonSky.botG, beachNoonSky.botB);
        for (let y = 0; y < beachNoonSky.height; y++) {
            let t = y / beachNoonSky.height;
            stroke(lerpColor(c3, c4, t));
            line(0, y, width, y);
        }
    }
    pop();
}

function drawSun() {
    push();
    if (showNoon) {
        noStroke();
        blendMode(ADD);
        fill(255, 242, 212);
        circle(width / 2 + 25, 50, 40);//afternoon
    }
    pop();
}

function drawShine() {
    push();
    translate(width / 2 + 25, 50);

    noStroke();
    fill(255, 242, 212, 230);
    circle(0, 0, 90);
    fill(255, 242, 212, 150);
    circle(0, 0, 95);
    circle(0, 0, 110);
    fill(255, 242, 212, 100);
    circle(0, 0, 130);
    circle(0, 0, 150);
    circle(0, 0, 190);
    fill(255, 242, 212, 90);
    circle(0, 0, 200);
    circle(0, 0, 230);
    pop();
}

function testingSun() {
    push();
    scale(1);
    push();
    //middles
    noStroke();
    blendMode(BLEND);
    fill(0, 0, 255);
    circle(width / 2 + 25, 110, 40); //sunset
    fill(0, 255, 0);
    circle(width / 2 + 25, -10, 40);//noon
    pop();
}