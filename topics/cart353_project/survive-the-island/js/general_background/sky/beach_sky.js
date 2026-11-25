const beachNoonSky = {
    topR: 5, topG: 170, topB: 247,
    botR: 179, botG: 244, botB: 255,
    height: 100
};

const beachAfternoonSky = {
    topR: 153, topG: 204, topB: 255,
    botR: 252, botG: 228, botB: 172,
    height: 100
};

const beachSunsetSky = {
    topR: 176, topG: 204, topB: 255,
    botR: 255, botG: 150, botB: 51,
    height: 120
};

const beachDuskSky = {
    topR: 72, topG: 34, topB: 161,
    botR: 242, botG: 142, botB: 34,
    height: 150
};

const beachNightSky = {
    topR: 3, topG: 15, topB: 43,
    botR: 19, botG: 75, botB: 148,
    height: 150
};

const beachMidnightSky = {
    topR: 3, topG: 15, topB: 43,
    botR: 22, botG: 62, botB: 166,
    height: 600
};

const beachPostNightSky = {
    topR: 19, topG: 75, topB: 148,
    botR: 7, botG: 141, botB: 224,
    height: 150
};

const beachDawnSky = {
    topR: 180, topG: 20, topB: 201,
    botR: 255, botG: 215, botB: 38,
    height: 200
};

const beachSunriseTopSky = {
    topR: 85, topG: 173, topB: 250,
    botR: 176, botG: 226, botB: 255,
    height: 50
};
const beachSunriseBottomSky = {
    topR: 176, topG: 226, topB: 255,
    botR: 255, botG: 213, botB: 130,
    height: 60
};
const beachMorningSky = {
    topR: 85, topG: 173, topB: 250,
    botR: 179, botG: 244, botB: 255,
    height: 100
};

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
    if (showAfternoon) {
        let c3 = color(beachAfternoonSky.topR, beachAfternoonSky.topG, beachAfternoonSky.topB);
        let c4 = color(beachAfternoonSky.botR, beachAfternoonSky.botG, beachAfternoonSky.botB);
        for (let y = 0; y < beachAfternoonSky.height; y++) {
            let t = y / beachAfternoonSky.height;
            stroke(lerpColor(c3, c4, t));
            line(0, y, width, y);
        }
    }
    if (showSunset) {
        let c3 = color(beachSunsetSky.topR, beachSunsetSky.topG, beachSunsetSky.topB);
        let c4 = color(beachSunsetSky.botR, beachSunsetSky.botG, beachSunsetSky.botB);
        for (let y = 0; y < beachSunsetSky.height; y++) {
            let t = y / beachSunsetSky.height;
            stroke(lerpColor(c3, c4, t));
            line(0, y, width, y);
        }
    }
    if (showDusk) {
        let c3 = color(beachDuskSky.topR, beachDuskSky.topG, beachSunsetSky.topB);
        let c4 = color(beachDuskSky.botR, beachDuskSky.botG, beachSunsetSky.botB);
        for (let y = 0; y < beachDuskSky.height; y++) {
            let t = y / beachDuskSky.height;
            stroke(lerpColor(c3, c4, t));
            line(0, y, width, y);
        }
    }
    if (showNight) {
        let c3 = color(beachNightSky.topR, beachNightSky.topG, beachNightSky.topB);
        let c4 = color(beachNightSky.botR, beachNightSky.botG, beachNightSky.botB);
        for (let y = 0; y < beachNightSky.height; y++) {
            let t = y / beachNightSky.height;
            stroke(lerpColor(c3, c4, t));
            line(0, y, width, y);
        }
    }
    if (nightTime) {
        let c3 = color(beachMidnightSky.topR, beachMidnightSky.topG, beachMidnightSky.topB);
        let c4 = color(beachMidnightSky.botR, beachMidnightSky.botG, beachMidnightSky.botB);
        for (let y = 0; y < beachMidnightSky.height; y++) {
            let t = y / beachMidnightSky.height;
            stroke(lerpColor(c3, c4, t));
            line(0, y, width, y);
        }
    }
    if (showDawn) {
        let c3 = color(beachDawnSky.topR, beachDawnSky.topG, beachDawnSky.topB);
        let c4 = color(beachDawnSky.botR, beachDawnSky.botG, beachDawnSky.botB);
        for (let y = 0; y < beachDawnSky.height; y++) {
            let t = y / beachDawnSky.height;
            stroke(lerpColor(c3, c4, t));
            line(0, y, width, y);
        }
    }
    if (showSunrise) {
        let c5 = color(beachSunriseBottomSky.topR, beachSunriseBottomSky.topG, beachSunriseBottomSky.topB);
        let c6 = color(beachSunriseBottomSky.botR, beachSunriseBottomSky.botG, beachSunriseBottomSky.botB);
        for (let y = 0; y < beachSunriseBottomSky.height; y++) {
            let t = y / beachSunriseBottomSky.height;
            stroke(lerpColor(c5, c6, t));
            line(0, y + 50, width, y + 50);
        }
        let c3 = color(beachSunriseTopSky.topR, beachSunriseTopSky.topG, beachSunriseTopSky.topB);
        let c4 = color(beachSunriseTopSky.botR, beachSunriseTopSky.botG, beachSunriseTopSky.botB);
        for (let y = 0; y < beachSunriseTopSky.height; y++) {
            let t = y / beachSunriseTopSky.height;
            stroke(lerpColor(c3, c4, t));
            line(0, y, width, y);
        }
    }
    if (showMorning) {
        let c3 = color(beachMorningSky.topR, beachMorningSky.topG, beachMorningSky.topB);
        let c4 = color(beachMorningSky.botR, beachMorningSky.botG, beachMorningSky.botB);
        for (let y = 0; y < beachMorningSky.height; y++) {
            let t = y / beachMorningSky.height;
            stroke(lerpColor(c3, c4, t));
            line(0, y, width, y);
        }
    }
    if (showPostNight) {
        let c3 = color(beachPostNightSky.topR, beachPostNightSky.topG, beachPostNightSky.topB);
        let c4 = color(beachPostNightSky.botR, beachPostNightSky.botG, beachPostNightSky.botB);
        for (let y = 0; y < beachPostNightSky.height; y++) {
            let t = y / beachPostNightSky.height;
            stroke(lerpColor(c3, c4, t));
            line(0, y, width, y);
        }
    }
    pop();
}