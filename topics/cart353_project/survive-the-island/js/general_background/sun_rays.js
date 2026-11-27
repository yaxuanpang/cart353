let ray00;
let ray0;
let ray1;
let ray2;
let ray3;

let ray4;
let ray5;
let ray6;

let ray7;
let ray8;
let ray9;
let ray10;
let ray11;

function sunRaySetup() {
    //daytime colors
    ray00 = color(255, 205, 125, 7);
    ray0 = color(255, 205, 125, 20);
    ray1 = color(255, 205, 125, 30);
    ray2 = color(255, 205, 125, 50);
    ray3 = color(255, 205, 125, 100);

    //nightime colors
    ray004 = color(103, 171, 230, 3);
    ray04 = color(103, 171, 230, 5);
    ray0004 = color(177, 217, 252, 8);
    ray4 = color(103, 171, 230, 40);
    ray5 = color(103, 171, 230, 60);
    ray6 = color(103, 171, 230, 110);

    //sunset colors
    ray7 = color(250, 133, 45, 7);
    ray8 = color(250, 133, 45, 20);
    ray9 = color(250, 133, 45, 30);
    ray10 = color(250, 133, 45, 50);
    ray11 = color(250, 133, 45, 100);

    //sunrise colors
    ray12 = color(247, 88, 25, 7);
    ray13 = color(247, 88, 25, 20);
    ray14 = color(247, 88, 25, 30);
    ray15 = color(247, 88, 25, 50);
    ray16 = color(247, 88, 25, 100);
}
//camp
function drawSunlight1() {
    push();
    noStroke();
    if (nightTime) {
        fill(ray04);
        rect(0, 0, width, height);
    }
    if (showNoon || showAfternoon) {
        fill(ray0);
        rect(0, 0, width, height);
    }
    if (showSunset || showSunrise) {
        fill(ray7);
        rect(0, 0, width, height);
    }

    if (showNoon || showAfternoon || nightTime || showMorning) {
        rotate(15);
    }

    if (showSunset || showSunrise) {
        rotate(45);
    }
    if (showDusk || showDawn) {
        rotate(65);
    }

    if (nightTime) {
        fill(ray04);
        rect(30, -2000, 90, height + 1800);
        rect(340, -2000, 70, height + 1800);
        rect(540, -2000, 10, height + 1800);
        rect(680, -2000, 50, height + 1800);
        rect(780, -2000, 30, height + 1800);
        rect(825, -2000, 10, height + 1800);
        rect(820, -2000, 30, height + 1800);
        rect(1030, -2000, 20, height + 1800);
        rect(960, -2000, 80, height + 1800);
        rect(1120, -2000, 70, height + 1800);
        rect(1150, -2000, 10, height + 1800);
        rect(1150, -2000, 10, height + 1800);
        rect(1320, -2000, width, height + 1800);
    }
    if (showNoon || showAfternoon) {
        fill(ray0);
        rect(30, -2000, 90, height + 1800);
        rect(340, -2000, 70, height + 1800);
        rect(540, -2000, 10, height + 1800);
        rect(680, -2000, 50, height + 1800);
        rect(780, -2000, 30, height + 1800);
        rect(825, -2000, 10, height + 1800);
        rect(820, -2000, 30, height + 1800);
        rect(1030, -2000, 20, height + 1800);
        rect(960, -2000, 80, height + 1800);
        rect(1120, -2000, 70, height + 1800);
        rect(1150, -2000, 10, height + 1800);
        rect(1150, -2000, 10, height + 1800);
        rect(1320, -2000, width, height + 1800);
    }
    if (showSunset || showSunrise) {
        fill(ray7);
        rect(30, -2000, 90, height + 1800);
        rect(340, -2000, 70, height + 1800);
        rect(540, -2000, 10, height + 1800);
        rect(680, -2000, 50, height + 1800);
        rect(780, -2000, 30, height + 1800);
        rect(825, -2000, 10, height + 1800);
        rect(820, -2000, 30, height + 1800);
        rect(1030, -2000, 20, height + 1800);
        rect(960, -2000, 80, height + 1800);
        rect(1120, -2000, 70, height + 1800);
        rect(1150, -2000, 10, height + 1800);
        rect(1150, -2000, 10, height + 1800);
        rect(1320, -2000, width, height + 1800);
    }
    if (showMorning) {
        fill(ray0004);
        rect(30, -2000, 90, height + 1800);
        rect(340, -2000, 70, height + 1800);
        rect(540, -2000, 10, height + 1800);
        rect(680, -2000, 50, height + 1800);
        rect(780, -2000, 30, height + 1800);
        rect(825, -2000, 10, height + 1800);
        rect(820, -2000, 30, height + 1800);
        rect(1030, -2000, 20, height + 1800);
        rect(960, -2000, 80, height + 1800);
        rect(1120, -2000, 70, height + 1800);
        rect(1150, -2000, 10, height + 1800);
        rect(1150, -2000, 10, height + 1800);
        rect(1320, -2000, width, height + 1800);
    }
    pop();
}

function drawSunlight2() {
    push();
    noStroke();
    if (showNoon || showAfternoon || nightTime || showMorning) {
        rotate(15);
    }

    if (showSunset || showSunrise) {
        rotate(45);
    }
    if (nightTime) {
        fill(ray04);
        rect(80, -2000, 90, height + 1800);
        rect(300, -2000, 20, height + 1800);
        rect(400, -2000, 10, height + 1800);
        rect(500, -2000, 80, height + 1800);
        rect(795, -2000, 40, height + 1800);
        rect(825, -2000, 10, height + 1800);
        rect(1030, -2000, 20, height + 1800);
        rect(1000, -2000, 80, height + 1800);
        rect(1030, -2000, 80, height + 1800);
        rect(1120, -2000, 10, height + 1800);
        rect(1280, -2000, 70, height + 1800);
    }
    if (showNoon || showAfternoon) {
        fill(ray0);
        rect(80, -2000, 90, height + 1800);
        rect(300, -2000, 20, height + 1800);
        rect(400, -2000, 10, height + 1800);
        rect(500, -2000, 80, height + 1800);
        rect(795, -2000, 40, height + 1800);
        rect(825, -2000, 10, height + 1800);
        rect(1030, -2000, 20, height + 1800);
        rect(1000, -2000, 80, height + 1800);
        rect(1030, -2000, 80, height + 1800);
        rect(1120, -2000, 10, height + 1800);
        rect(1280, -2000, 70, height + 1800);
    }
    if (showSunset || showSunrise) {
        fill(ray8);
        rect(80, -2000, 90, height + 1800);
        rect(300, -2000, 20, height + 1800);
        rect(400, -2000, 10, height + 1800);
        rect(500, -2000, 80, height + 1800);
        rect(795, -2000, 40, height + 1800);
        rect(825, -2000, 10, height + 1800);
        rect(1030, -2000, 20, height + 1800);
        rect(1000, -2000, 80, height + 1800);
        rect(1030, -2000, 80, height + 1800);
        rect(1120, -2000, 10, height + 1800);
        rect(1280, -2000, 70, height + 1800);
    }
    if (showMorning) {
        fill(ray0004);
        rect(80, -2000, 90, height + 1800);
        rect(300, -2000, 20, height + 1800);
        rect(400, -2000, 10, height + 1800);
        rect(500, -2000, 80, height + 1800);
        rect(795, -2000, 40, height + 1800);
        rect(825, -2000, 10, height + 1800);
        rect(1030, -2000, 20, height + 1800);
        rect(1000, -2000, 80, height + 1800);
        rect(1030, -2000, 80, height + 1800);
        rect(1120, -2000, 10, height + 1800);
        rect(1280, -2000, 70, height + 1800);
    }
    pop();
}

function drawSunlight3() {
    push();
    noStroke();
    if (showNoon || showAfternoon || nightTime || showMorning) {
        rotate(15);
    }

    if (showSunset || showSunrise) {
        rotate(45);
    }
    if (nightTime) {
        fill(ray04);
        rect(200, -2000, 20, height + 1800);
        rect(400, -2000, 80, height + 1800);
        rect(650, -2000, 50, height + 1800);
        rect(865, -2000, 15, height + 1800);
        rect(865, -2000, 15, height + 1800);
        rect(865, -2000, 20, height + 1800);
        rect(900, -2000, 35, height + 1800);
        rect(1080, -2000, 50, height + 1800);
        rect(1200, -2000, 250, height + 1800);
    }
    if (showNoon || showAfternoon) {
        fill(ray0);
        rect(200, -2000, 20, height + 1800);
        rect(400, -2000, 80, height + 1800);
        rect(650, -2000, 50, height + 1800);
        rect(865, -2000, 15, height + 1800);
        rect(865, -2000, 15, height + 1800);
        rect(865, -2000, 20, height + 1800);
        rect(900, -2000, 35, height + 1800);
        rect(1080, -2000, 50, height + 1800);
        rect(1200, -2000, 250, height + 1800);
    }
    if (showSunset || showSunrise) {
        fill(ray8);
        rect(200, -2000, 20, height + 1800);
        rect(400, -2000, 80, height + 1800);
        rect(650, -2000, 50, height + 1800);
        rect(865, -2000, 15, height + 1800);
        rect(865, -2000, 15, height + 1800);
        rect(865, -2000, 20, height + 1800);
        rect(900, -2000, 35, height + 1800);
        rect(1080, -2000, 50, height + 1800);
        rect(1200, -2000, 250, height + 1800);
    }
    if (showMorning) {
        fill(ray0004);
        rect(200, -2000, 20, height + 1800);
        rect(400, -2000, 80, height + 1800);
        rect(650, -2000, 50, height + 1800);
        rect(865, -2000, 15, height + 1800);
        rect(865, -2000, 15, height + 1800);
        rect(865, -2000, 20, height + 1800);
        rect(900, -2000, 35, height + 1800);
        rect(1080, -2000, 50, height + 1800);
        rect(1200, -2000, 250, height + 1800);
    }
    pop();
}

function drawSunlight4() {
    push();
    noStroke();
    if (showNoon || showAfternoon || nightTime || showMorning) {
        rotate(15);
    }
    if (showSunset || showSunrise) {
        rotate(45);
    }
    if (nightTime) {
        fill(ray4);
        rect(600, -2000, 35, height + 1800);
        rect(720, -2000, 65, height + 1800);
        rect(935, -2000, 40, height + 1800);
        rect(1080, -2000, 50, height + 1800);
        rect(1300, -2000, 250, height + 1800);
    }
    if (showNoon || showAfternoon) {
        fill(ray0);
        rect(600, -2000, 35, height + 1800);
        rect(720, -2000, 65, height + 1800);
        rect(935, -2000, 40, height + 1800);
        rect(1080, -2000, 50, height + 1800);
        rect(1300, -2000, 250, height + 1800);
    }
    if (showSunset || showSunrise) {
        fill(ray8);
        rect(600, -2000, 35, height + 1800);
        rect(720, -2000, 65, height + 1800);
        rect(935, -2000, 40, height + 1800);
        rect(1080, -2000, 50, height + 1800);
        rect(1300, -2000, 250, height + 1800);
    }
    if (showMorning) {
        fill(ray4);
        rect(600, -2000, 35, height + 1800);
        rect(720, -2000, 65, height + 1800);
        rect(935, -2000, 40, height + 1800);
        rect(1080, -2000, 50, height + 1800);
        rect(1300, -2000, 250, height + 1800);
    }
    pop();
}

//forest
function sunRay0() {
    push();
    noStroke();
    if (showNoon || showAfternoon || nightTime || showMorning) {
        rotate(-25);
    }

    if (showSunset || showSunrise) {
        rotate(-55);
    }
    if (nightTime) {
        fill(ray4);
        rect(width / 2 - 100, 0, 40, height + 800);
        rect(width / 2 - 400, 0, 20, height + 800);
        rect(width / 2 - 360, 0, 35, height + 800);
        rect(width / 2 - 700, 0, 70, height + 800);
        rect(width - 340, 0, 80, height + 800);
        rect(width / 2 + 40, 0, 80, height + 800);
        rect(-230, 0, 80, height + 800);
    }
    if (showNoon || showAfternoon) {
        fill(ray1);
        rect(width / 2 - 100, 0, 40, height + 800);
        rect(width / 2 - 400, 0, 20, height + 800);
        rect(width / 2 - 360, 0, 35, height + 800);
        rect(width / 2 - 700, 0, 70, height + 800);
        rect(width - 340, 0, 80, height + 800);
        rect(width / 2 + 40, 0, 80, height + 800);
        rect(-230, 0, 80, height + 800);
    }
    if (showSunset || showSunrise) {
        fill(ray8);
        rect(width / 2 - 100, 0, 40, height + 800);
        rect(width / 2 - 400, 0, 20, height + 800);
        rect(width / 2 - 360, 0, 35, height + 800);
        rect(width / 2 - 700, 0, 70, height + 800);
        rect(width - 340, 0, 80, height + 800);
        rect(width / 2 + 40, 0, 80, height + 800);
        rect(-230, 0, 80, height + 800);
    }
    if (showMorning) {
        fill(ray0004);
        rect(width / 2 - 100, 0, 40, height + 800);
        rect(width / 2 - 400, 0, 20, height + 800);
        rect(width / 2 - 360, 0, 35, height + 800);
        rect(width / 2 - 700, 0, 70, height + 800);
        rect(width - 340, 0, 80, height + 800);
        rect(width / 2 + 40, 0, 80, height + 800);
        rect(-230, 0, 80, height + 800);
    }
    pop();
}

function sunRay1() {
    push();
    noStroke();
    if (showNoon || showAfternoon || nightTime || showMorning) {
        rotate(-25);
    }

    if (showSunset || showSunrise) {
        rotate(-55);
    }
    if (nightTime) {
        fill(ray4);
        rect(width / 2 + 10, 0, 60, height + 800);
        rect(width / 2 + 200, 0, 50, height + 800);
        rect(width / 2 - 490, 0, 45, height + 800);
        rect(width / 2 - 20, 0, 20, height + 800);
        rect(width / 2 - 770, 0, 30, height + 800);
    }
    if (showNoon || showAfternoon) {
        fill(ray1);
        rect(width / 2 + 10, 0, 60, height + 800);
        rect(width / 2 + 200, 0, 50, height + 800);
        rect(width / 2 - 490, 0, 45, height + 800);
        rect(width / 2 - 20, 0, 20, height + 800);
        rect(width / 2 - 770, 0, 30, height + 800);
    }
    if (showSunset || showSunrise) {
        fill(ray8);
        rect(width / 2 + 10, 0, 60, height + 800);
        rect(width / 2 + 200, 0, 50, height + 800);
        rect(width / 2 - 490, 0, 45, height + 800);
        rect(width / 2 - 20, 0, 20, height + 800);
        rect(width / 2 - 770, 0, 30, height + 800);
    }
    if (showMorning) {
        fill(ray0004);
        rect(width / 2 + 10, 0, 60, height + 800);
        rect(width / 2 + 200, 0, 50, height + 800);
        rect(width / 2 - 490, 0, 45, height + 800);
        rect(width / 2 - 20, 0, 20, height + 800);
        rect(width / 2 - 770, 0, 30, height + 800);
    }
    pop();
}

function sunRay2() {
    push();
    noStroke();
    if (showNoon || showAfternoon || nightTime || showMorning) {
        rotate(-25);
    }

    if (showSunset || showSunrise) {
        rotate(-55);
    }
    if (nightTime) {
        fill(ray4);
        rect(width / 2 + 20, 0, 50, height + 800);
        rect(width / 2 - 210, 0, 60, height + 800);
        rect(width / 2 - 550, 0, 30, height + 800);
        rect(width / 2 - 350, 0, 35, height + 800);
        rect(width / 2 - 350, 0, 35, height + 800);
        rect(width / 2 + 290, 0, 50, height + 800);
        rect(-60, 0, 15, height + 800);
    }
    if (showNoon || showAfternoon) {
        fill(ray1);
        rect(width / 2 + 20, 0, 50, height + 800);
        rect(width / 2 - 210, 0, 60, height + 800);
        rect(width / 2 - 550, 0, 30, height + 800);
        rect(width / 2 - 350, 0, 35, height + 800);
        rect(width / 2 - 350, 0, 35, height + 800);
        rect(width / 2 + 290, 0, 50, height + 800);
        rect(-60, 0, 15, height + 800);
    }
    if (showSunset || showSunrise) {
        fill(ray8);
        rect(width / 2 + 20, 0, 50, height + 800);
        rect(width / 2 - 210, 0, 60, height + 800);
        rect(width / 2 - 550, 0, 30, height + 800);
        rect(width / 2 - 350, 0, 35, height + 800);
        rect(width / 2 - 350, 0, 35, height + 800);
        rect(width / 2 + 290, 0, 50, height + 800);
        rect(-60, 0, 15, height + 800);
    }
    if (showMorning) {
        fill(ray0004);
        rect(width / 2 + 20, 0, 50, height + 800);
        rect(width / 2 - 210, 0, 60, height + 800);
        rect(width / 2 - 550, 0, 30, height + 800);
        rect(width / 2 - 350, 0, 35, height + 800);
        rect(width / 2 - 350, 0, 35, height + 800);
        rect(width / 2 + 290, 0, 50, height + 800);
        rect(-60, 0, 15, height + 800);
    }
    pop();
}

function sunRay3() {
    push();
    noStroke();
    if (showNoon || showAfternoon || nightTime || showMorning) {
        rotate(-25);
    }

    if (showSunset || showSunrise) {
        rotate(-55);
    }
    if (nightTime) {
        fill(ray5);
        rect(width / 2 - 600, 0, 50, height + 800);
        rect(width / 2 + 360, 0, 20, height + 800);
        rect(width / 2 - 250, 0, 20, height + 800);
        rect(width / 2 + 130, 0, 30, height + 800);
        rect(width / 2 - 340, 0, 60, height + 800);
        rect(-150, 0, 60, height + 800);
    }
    if (showNoon || showAfternoon) {
        fill(ray1);
        rect(width / 2 - 600, 0, 50, height + 800);
        rect(width / 2 + 360, 0, 20, height + 800);
        rect(width / 2 - 250, 0, 20, height + 800);
        rect(width / 2 + 130, 0, 30, height + 800);
        rect(width / 2 - 340, 0, 60, height + 800);
        rect(-150, 0, 60, height + 800);
    }
    if (showSunset || showSunrise) {
        fill(ray8);
        rect(width / 2 - 600, 0, 50, height + 800);
        rect(width / 2 + 360, 0, 20, height + 800);
        rect(width / 2 - 250, 0, 20, height + 800);
        rect(width / 2 + 130, 0, 30, height + 800);
        rect(width / 2 - 340, 0, 60, height + 800);
        rect(-150, 0, 60, height + 800);
    }
    if (showMorning) {
        fill(ray4);
        rect(width / 2 - 600, 0, 50, height + 800);
        rect(width / 2 + 360, 0, 20, height + 800);
        rect(width / 2 - 250, 0, 20, height + 800);
        rect(width / 2 + 130, 0, 30, height + 800);
        rect(width / 2 - 340, 0, 60, height + 800);
        rect(-150, 0, 60, height + 800);
    }
    pop();
}

function sunRay4() {
    push();
    noStroke();
    if (showNoon || showAfternoon || nightTime || showMorning) {
        rotate(-25);
    }

    if (showSunset || showSunrise) {
        rotate(-55);
    }
    if (nightTime) {
        fill(ray6);
        rect(width / 2 - 300, 0, 50, height + 800);
        rect(width / 2 - 160, 0, 50, height + 800);
        rect(width / 2 - 50, 0, 10, height + 800);
    }
    if (showNoon || showAfternoon) {
        fill(ray3);
        rect(width / 2 - 300, 0, 50, height + 800);
        rect(width / 2 - 160, 0, 50, height + 800);
        rect(width / 2 - 50, 0, 10, height + 800);
    }
    if (showSunset || showSunrise) {
        fill(ray8);
        rect(width / 2 - 300, 0, 50, height + 800);
        rect(width / 2 - 160, 0, 50, height + 800);
        rect(width / 2 - 50, 0, 10, height + 800);
    }
    if (showMorning) {
        fill(ray4);
        rect(width / 2 - 300, 0, 50, height + 800);
        rect(width / 2 - 160, 0, 50, height + 800);
        rect(width / 2 - 50, 0, 10, height + 800);
    }
    pop();
}

//beach
function sunBeam1() {
    push();
    noStroke();
    if (nightTime) {
        fill(ray004);
        rect(0, 0, width, height);
    }
    if (showNoon || showAfternoon) {
        fill(ray0);
        rect(0, 0, width, height);
    }
    if (showNoon || showAfternoon || nightTime) {
        rotate(-25);
    }
    if (nightTime) {
        fill(ray04);
        rect(1120, -700, 100, height + 2000);
        rect(1250, -700, 30, height + 2000);
    }
    if (showMorning) {
        fill(ray0004);
        rect(1120, -700, 100, height + 2000);
        rect(1250, -700, 30, height + 2000);
    }
    pop();

    sunBeam01();
    sunBeam001();
    sunBeam0001();
    sunBeam00001();
    sunBeam000001();
    sunBeam0000001();
}

function sunBeam01() {
    push();
    noStroke();
    if (showNoon || showAfternoon || nightTime || showMorning) {
        rotate(-20);
    }
    if (nightTime) {
        fill(ray004);
        rect(870, -700, 60, height + 2000);
        rect(1020, -700, 30, height + 2000);
        rect(1020, -700, 30, height + 2000);
        rect(1020, -700, 30, height + 2000);
        rect(1120, -700, 50, height + 2000);
    }
    if (showNoon || showAfternoon) {
        fill(ray00);
        rect(870, -700, 60, height + 2000);
        rect(1020, -700, 30, height + 2000);
        rect(1020, -700, 30, height + 2000);
        rect(1020, -700, 30, height + 2000);
        rect(1120, -700, 50, height + 2000);
    }
    if (showMorning) {
        fill(ray0004);
        rect(870, -700, 60, height + 2000);
        rect(1020, -700, 30, height + 2000);
        rect(1020, -700, 30, height + 2000);
        rect(1020, -700, 30, height + 2000);
        rect(1120, -700, 50, height + 2000);
    }
    pop();
}

function sunBeam001() {
    push();
    noStroke();
    if (showNoon || showAfternoon || nightTime || showMorning) {
        rotate(-10);
    }
    if (nightTime) {
        fill(ray004);
        rect(910, -700, 20, height + 2000);
        rect(800, -700, 40, height + 2000);

    }
    if (showNoon || showAfternoon) {
        fill(ray00);
        rect(910, -700, 20, height + 2000);
        rect(800, -700, 40, height + 2000);
    }
    if (showMorning) {
        fill(ray0004);
        rect(910, -700, 20, height + 2000);
        rect(800, -700, 40, height + 2000);

    }
    pop();
}

function sunBeam0001() { //middle
    push();
    noStroke();
    if (nightTime) {
        fill(ray004);
        rect(width / 2, 0, 40, height);
        rect(width / 2 + 10, 0, 20, height);
        rect(width / 2 + 10, 0, 20, height);
        rect(width / 2 + 15, 0, 10, height);
    }
    if (showNoon || showAfternoon) {
        fill(ray00);
        rect(width / 2, 0, 40, height);
        rect(width / 2 + 10, 0, 20, height);
        rect(width / 2 + 10, 0, 20, height);
        rect(width / 2 + 15, 0, 10, height);
    }
    if (showSunrise) {
        fill(ray7);
        rect(width / 2, 0, 40, height);
        rect(width / 2 + 10, 0, 20, height);
        rect(width / 2 + 10, 0, 20, height);
        rect(width / 2 + 15, 0, 10, height);
    }
    if (showNight) {
        fill(255, 255, 255, 3);
        rect(width / 2, 0, 40, height);
        rect(width / 2 + 10, 0, 20, height);
        rect(width / 2 + 10, 0, 20, height);
        rect(width / 2 + 15, 0, 10, height);
    }
    if (showMorning) {
        fill(ray0004);
        rect(width / 2, 0, 40, height);
        rect(width / 2 + 10, 0, 20, height);
        rect(width / 2 + 10, 0, 20, height);
        rect(width / 2 + 15, 0, 10, height);
    }
    pop();
}

function sunBeam00001() {
    push();
    noStroke();
    if (showNoon || showAfternoon || nightTime || showMorning) {
        rotate(10);
    }
    if (nightTime) {
        fill(ray004);
        rect(680, -700, 30, height + 2000);
        rect(690, -700, 30, height + 2000);
        rect(600, -700, 40, height + 2000);
    }
    if (showNoon || showAfternoon) {
        fill(ray00);
        rect(680, -700, 30, height + 2000);
        rect(690, -700, 30, height + 2000);
        rect(600, -700, 40, height + 2000);
    }
    if (showMorning) {
        fill(ray0004);
        rect(680, -700, 30, height + 2000);
        rect(690, -700, 30, height + 2000);
        rect(600, -700, 40, height + 2000);
    }
    pop();
}

function sunBeam000001() {
    push();
    noStroke();
    if (showNoon || showAfternoon || nightTime || showMorning) {
        rotate(20);
    }
    if (nightTime) {
        fill(ray004);
        rect(550, -700, 60, height + 2000);
        rect(550, -700, 40, height + 2000);
        rect(550, -700, 40, height + 2000);
        rect(440, -700, 45, height + 2000);
    }
    if (showNoon || showAfternoon) {
        fill(ray00);
        rect(550, -700, 60, height + 2000);
        rect(550, -700, 40, height + 2000);
        rect(550, -700, 40, height + 2000);
        rect(440, -700, 45, height + 2000);
    }
    if (showMorning) {
        fill(ray0004);
        rect(550, -700, 60, height + 2000);
        rect(550, -700, 40, height + 2000);
        rect(550, -700, 40, height + 2000);
        rect(440, -700, 45, height + 2000);
    }
    pop();
}

function sunBeam0000001() {
    push();
    noStroke();
    if (showNoon || showAfternoon || nightTime || showMorning) {
        rotate(25);
    }
    if (nightTime) {
        fill(ray004);
        rect(400, -700, 60, height + 2000);
        rect(300, -700, 10, height + 2000);
        rect(300, -700, 10, height + 2000);
        rect(300, -700, 10, height + 2000);
        rect(140, -700, 95, height + 2000);
    }
    if (showNoon || showAfternoon) {
        fill(ray00);
        rect(400, -700, 60, height + 2000);
        rect(300, -700, 10, height + 2000);
        rect(300, -700, 10, height + 2000);
        rect(300, -700, 10, height + 2000);
        rect(140, -700, 95, height + 2000);
    }
    if (showMorning) {
        fill(ray0004);
        rect(400, -700, 60, height + 2000);
        rect(300, -700, 10, height + 2000);
        rect(300, -700, 10, height + 2000);
        rect(300, -700, 10, height + 2000);
        rect(140, -700, 95, height + 2000);
    }
    pop();
}

function sunBeam2() {
    push();
    if (showNoon || showAfternoon || nightTime || showMorning) {
        rotate(-25);
    }
    noStroke();
    if (nightTime) {
        fill(ray04);
        rect(1110, -700, 50, height + 2000);
        rect(1250, -700, 30, height + 2000);
    }
    if (showNoon || showAfternoon) {
        fill(ray0);
        rect(1110, -700, 50, height + 2000);
        rect(1250, -700, 30, height + 2000);
    }
    if (showMorning) {
        fill(ray0004);
        rect(1110, -700, 50, height + 2000);
        rect(1250, -700, 30, height + 2000);
    }
    pop();

    sunBeam02();
    sunBeam002();
    sunBeam00002();
    sunBeam000002();
    sunBeam0000002();
}

function sunBeam02() {
    push();
    noStroke();
    if (showNoon || showAfternoon || nightTime || showMorning) {
        rotate(-20);
    }
    if (nightTime) {
        fill(ray04);
        rect(890, -700, 10, height + 2000);
        rect(1000, -700, 30, height + 2000);
        rect(940, -700, 50, height + 2000);
    }
    if (showNoon || showAfternoon) {
        fill(ray0);
        rect(890, -700, 10, height + 2000);
        rect(1000, -700, 30, height + 2000);
        rect(940, -700, 50, height + 2000);
    }
    if (showMorning) {
        fill(ray0004);
        rect(890, -700, 10, height + 2000);
        rect(1000, -700, 30, height + 2000);
        rect(940, -700, 50, height + 2000);
    }
    pop();
}

function sunBeam002() {
    push();
    noStroke();
    if (showNoon || showAfternoon || nightTime || showMorning) {
        rotate(-10);
    }
    if (nightTime) {
        fill(ray04);
        rect(870, -700, 20, height + 2000);
        rect(820, -700, 40, height + 2000);
    }
    if (showNoon || showAfternoon) {
        fill(ray0);
        rect(870, -700, 20, height + 2000);
        rect(820, -700, 40, height + 2000);
    }
    if (showMorning) {
        fill(ray0004);
        rect(870, -700, 20, height + 2000);
        rect(820, -700, 40, height + 2000);
    }
    pop();
}

function sunBeam00002() {
    push();
    noStroke();
    if (showNoon || showAfternoon || nightTime || showMorning) {
        rotate(10);
    }
    if (nightTime) {
        fill(ray04);
        rect(690, -700, 50, height + 2000);
    }
    if (showNoon || showAfternoon) {
        fill(ray0);
        rect(690, -700, 50, height + 2000);
    }
    if (showMorning) {
        fill(ray0004);
        rect(690, -700, 50, height + 2000);
    }
    pop();
}

function sunBeam000002() {
    push();
    noStroke();
    if (showNoon || showAfternoon || nightTime || showMorning) {
        rotate(20);
    }
    if (nightTime) {
        fill(ray04);
        rect(440, -700, 45, height + 2000);
        rect(590, -700, 20, height + 2000);
    }
    if (showNoon || showAfternoon) {
        fill(ray0);
        rect(440, -700, 45, height + 2000);
        rect(590, -700, 20, height + 2000);
    }
    if (showMorning) {
        fill(ray0004);
        rect(440, -700, 45, height + 2000);
        rect(590, -700, 20, height + 2000);
    }
    pop();
}

function sunBeam0000002() {
    push();
    noStroke();
    if (showNoon || showAfternoon || nightTime || showMorning) {
        rotate(25);
    }
    if (nightTime) {
        fill(ray04);
        rect(375, -700, 30, height + 2000);
        rect(300, -700, 10, height + 2000);
        rect(100, -700, 25, height + 2000);
    }
    if (showNoon || showAfternoon) {
        fill(ray0);
        rect(375, -700, 30, height + 2000);
        rect(300, -700, 10, height + 2000);
        rect(100, -700, 25, height + 2000);
    }
    if (showMorning) {
        fill(ray0004);
        rect(375, -700, 30, height + 2000);
        rect(300, -700, 10, height + 2000);
        rect(100, -700, 25, height + 2000);
    }
    pop();
}