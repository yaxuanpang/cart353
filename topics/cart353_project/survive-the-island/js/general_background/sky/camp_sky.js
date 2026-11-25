let showNoon = false;
let showAfternoon = false;
let showSunset = false;
let showDusk = false;
let showNight = false;
let showPostNight = false;
let nightTime = false;
let showDawn = false;
let showSunrise = false;
let showMorning = false;


const campNoonSky = {
    topR: 5, topG: 170, topB: 247,
    botR: 120, botG: 230, botB: 255,
    height: 400
};

const campAfternoonSky = {
    topR: 153, topG: 204, topB: 255,
    botR: 255, botG: 238, botB: 196,
    height: 400
};

const campSunsetSky = {
    topR: 176, topG: 204, topB: 255,
    botR: 255, botG: 150, botB: 51,
    height: 700
};

const campDuskSky = {
    topR: 72, topG: 34, topB: 161,
    botR: 242, botG: 142, botB: 34,
    height: 600
};

const campNightSky = {
    topR: 3, topG: 15, topB: 43,
    botR: 19, botG: 75, botB: 148,
    height: 400
};

const campMidnightSky = {
    topR: 3, topG: 15, topB: 43,
    botR: 22, botG: 62, botB: 166,
    height: 600
};

const campPostNightSky = {
    topR: 19, topG: 75, topB: 148,
    botR: 7, botG: 141, botB: 224,
    height: 400
};

const campDawnSky = {
    topR: 180, topG: 20, topB: 201,
    botR: 255, botG: 215, botB: 38,
    height: 900
};
const campSunriseTopSky = {
    topR: 85, topG: 173, topB: 250,
    botR: 176, botG: 226, botB: 255,
    height: 240
};
const campSunriseBottomSky = {
    topR: 176, topG: 226, topB: 255,
    botR: 255, botG: 213, botB: 130,
    height: 150
};

const campMorningSky = {
    topR: 85, topG: 173, topB: 250,
    botR: 120, botG: 230, botB: 255,
    height: 400
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
    if (showAfternoon) {
        let c1 = color(campAfternoonSky.topR, campAfternoonSky.topG, campAfternoonSky.topB);
        let c2 = color(campAfternoonSky.botR, campAfternoonSky.botG, campAfternoonSky.botB);
        for (let y = 0; y < campAfternoonSky.height; y++) {
            let t = y / campAfternoonSky.height;
            stroke(lerpColor(c1, c2, t));
            line(0, y, width, y);
        }
    }

    if (showSunset) {
        let c1 = color(campSunsetSky.topR, campSunsetSky.topG, campSunsetSky.topB);
        let c2 = color(campSunsetSky.botR, campSunsetSky.botG, campSunsetSky.botB);
        for (let y = 0; y < campSunsetSky.height; y++) {
            let t = y / campSunsetSky.height;
            stroke(lerpColor(c1, c2, t));
            line(0, y, width, y);
        }
    }

    if (showDusk) {
        let c1 = color(campDuskSky.topR, campDuskSky.topG, campDuskSky.topB);
        let c2 = color(campDuskSky.botR, campDuskSky.botG, campDuskSky.botB);
        for (let y = 0; y < campDuskSky.height; y++) {
            let t = y / campDuskSky.height;
            stroke(lerpColor(c1, c2, t));
            line(0, y, width, y);
        }
    }
    if (showNight) {
        let c1 = color(campNightSky.topR, campNightSky.topG, campNightSky.topB);
        let c2 = color(campNightSky.botR, campNightSky.botG, campNightSky.botB);
        for (let y = 0; y < campNightSky.height; y++) {
            let t = y / campNightSky.height;
            stroke(lerpColor(c1, c2, t));
            line(0, y, width, y);
        }
    }
    if (nightTime) {
        let c1 = color(campMidnightSky.topR, campMidnightSky.topG, campMidnightSky.topB);
        let c2 = color(campMidnightSky.botR, campMidnightSky.botG, campMidnightSky.botB);
        for (let y = 0; y < campMidnightSky.height; y++) {
            let t = y / campMidnightSky.height;
            stroke(lerpColor(c1, c2, t));
            line(0, y, width, y);
        }
    }
    if (showPostNight) {
        let c1 = color(campPostNightSky.topR, campPostNightSky.topG, campPostNightSky.topB);
        let c2 = color(campPostNightSky.botR, campPostNightSky.botG, campPostNightSky.botB);
        for (let y = 0; y < campPostNightSky.height; y++) {
            let t = y / campPostNightSky.height;
            stroke(lerpColor(c1, c2, t));
            line(0, y, width, y);
        }
    }

    if (showDawn) {
        let c1 = color(campDawnSky.topR, campDawnSky.topG, campDawnSky.topB);
        let c2 = color(campDawnSky.botR, campDawnSky.botG, campDawnSky.botB);
        for (let y = 0; y < campDawnSky.height; y++) {
            let t = y / campDawnSky.height;
            stroke(lerpColor(c1, c2, t));
            line(0, y, width, y);
        }
    }
    if (showSunrise) {
        let c7 = color(campSunriseBottomSky.topR, campSunriseBottomSky.topG, campSunriseBottomSky.topB);
        let c8 = color(campSunriseBottomSky.botR, campSunriseBottomSky.botG, campSunriseBottomSky.botB);
        for (let y = 0; y < campSunriseBottomSky.height; y++) {
            let t = y / campSunriseBottomSky.height;
            stroke(lerpColor(c7, c8, t));
            line(0, y + 240, width, y + 240);
        }
        let c1 = color(campSunriseTopSky.topR, campSunriseTopSky.topG, campSunriseTopSky.topB);
        let c2 = color(campSunriseTopSky.botR, campSunriseTopSky.botG, campSunriseTopSky.botB);
        for (let y = 0; y < campSunriseTopSky.height; y++) {
            let t = y / campSunriseTopSky.height;
            stroke(lerpColor(c1, c2, t));
            line(0, y, width, y);
        }
    }
    if (showMorning) {
        let c1 = color(campMorningSky.topR, campMorningSky.topG, campMorningSky.topB);
        let c2 = color(campMorningSky.botR, campMorningSky.botG, campMorningSky.botB);
        for (let y = 0; y < campMorningSky.height; y++) {
            let t = y / campMorningSky.height;
            stroke(lerpColor(c1, c2, t));
            line(0, y, width, y);
        }
    }
    pop();
}

function drawSun() {
    push();
    if (showSunset) {
        noStroke();
        fill(255, 242, 212);
        circle(width / 2 + 20, 50, 40);
        drawShine();
    }
    pop();
}

function drawShine() {
    push();
    translate(width / 2 + 20, 50);
    if (showSunset) {
        noStroke();
        fill(255, 115, 0, 50);
        circle(0, 0, 185);
        fill(255, 115, 0, 50);
        circle(0, 0, 130);
        fill(255, 115, 0, 50);
        circle(0, 0, 90);
        fill(255, 115, 0, 70);
        circle(0, 0, 65);
        fill(255, 115, 0, 70);
        circle(0, 0, 50);
    }
    pop();
}