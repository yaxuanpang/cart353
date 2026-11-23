let ray1;
let ray2;
let ray3;

let ray4;
let ray5;
let ray6;

function sunRaySetup() {
    //daytime colors
    ray0 = color(255, 205, 125, 20);
    ray1 = color(255, 205, 125, 30);
    ray2 = color(255, 205, 125, 50);
    ray3 = color(255, 205, 125, 100);

    //nightime colors
    ray04 = color(103, 171, 230, 5);
    ray4 = color(103, 171, 230, 40);
    ray5 = color(103, 171, 230, 60);
    ray6 = color(103, 171, 230, 110);
}
//camp
function drawSunlight1() {
    push();
    noStroke();
    if (nightTime) {
        fill(ray04);
    }
    else {
        fill(ray0);
    }
    rect(0, 0, width, height);

    if (nightTime) {
        fill(ray04);
    }
    else {
        fill(ray0);
    }

    rotate(15);
    rect(30, -700, 90, height + 800);
    rect(340, -700, 70, height + 800);
    rect(540, -700, 10, height + 800);
    rect(680, -700, 50, height + 800);
    rect(780, -700, 30, height + 800);
    rect(825, -700, 10, height + 800);
    rect(820, -700, 30, height + 800);
    rect(1030, -700, 20, height + 800);
    rect(960, -700, 80, height + 800);
    rect(1120, -700, 70, height + 800);
    rect(1320, -700, width, height + 800);
    pop();
}

function drawSunlight2() {
    push();
    noStroke();
    if (nightTime) {
        fill(ray5);
    }
    else {
        fill(ray0);
    }
    rotate(15);
    rect(80, -700, 90, height + 800);
    rect(300, -700, 20, height + 800);
    rect(400, -700, 10, height + 800);
    rect(500, -700, 80, height + 800);
    rect(795, -700, 40, height + 800);
    rect(825, -700, 10, height + 800);
    rect(1030, -700, 20, height + 800);
    rect(1000, -700, 80, height + 800);
    rect(1280, -700, 70, height + 800);
    pop();
}

function drawSunlight3() {
    push();
    noStroke();
    if (nightTime) {
        fill(ray5);
    }
    else {
        fill(ray0);
    }
    rotate(15);
    rect(200, -700, 20, height + 800);
    rect(400, -700, 80, height + 800);
    rect(650, -700, 50, height + 800);
    rect(900, -700, 35, height + 800);
    rect(1080, -700, 50, height + 800);
    rect(1200, -700, 250, height + 800);
    pop();
}

function drawSunlight4() {
    push();
    noStroke();
    if (nightTime) {
        fill(ray5);
    }
    else {
        fill(ray0);
    }
    rotate(15);
    rect(600, -700, 35, height + 800);
    rect(720, -700, 65, height + 800);
    rect(935, -700, 40, height + 800);
    rect(1080, -700, 50, height + 800);
    rect(1300, -700, 250, height + 800);
    pop();
}

//forest
function sunRay0() {
    push();
    rotate(-25);
    noStroke();
    if (!nightTime) {
        fill(ray1);
    }
    else {
        fill(ray4);
    }

    rect(width / 2 - 100, 0, 40, height + 800);
    rect(width / 2 - 400, 0, 20, height + 800);
    rect(width / 2 - 360, 0, 35, height + 800);
    rect(width / 2 - 700, 0, 70, height + 800);
    rect(width - 340, 0, 80, height + 800);
    rect(width / 2 + 40, 0, 80, height + 800);
    rect(-230, 0, 80, height + 800);
    pop();
}

function sunRay1() {
    push();
    rotate(-25);
    noStroke();
    if (!nightTime) {
        fill(ray1);
    }
    else {
        fill(ray4);
    }
    rect(width / 2 + 10, 0, 60, height + 800);
    rect(width / 2 + 200, 0, 50, height + 800);
    rect(width / 2 - 490, 0, 45, height + 800);
    rect(width / 2 - 20, 0, 20, height + 800);
    rect(width / 2 - 770, 0, 30, height + 800);
    pop();
}

function sunRay2() {
    push();
    rotate(-25);
    noStroke();
    if (!nightTime) {
        fill(ray1);
    }
    else {
        fill(ray4);
    }
    rect(width / 2 + 20, 0, 50, height + 800);
    rect(width / 2 - 210, 0, 60, height + 800);
    rect(width / 2 - 550, 0, 30, height + 800);
    rect(width / 2 - 350, 0, 35, height + 800);
    rect(width / 2 - 350, 0, 35, height + 800);
    rect(width / 2 + 290, 0, 50, height + 800);
    rect(-60, 0, 15, height + 800);
    pop();
}

function sunRay3() {
    push();
    rotate(-25);
    noStroke();
    if (!nightTime) {
        fill(ray2);
    }
    else {
        fill(ray5);
    }
    rect(width / 2 - 600, 0, 50, height + 800);
    rect(width / 2 + 360, 0, 20, height + 800);
    rect(width / 2 - 250, 0, 20, height + 800);
    rect(width / 2 + 130, 0, 30, height + 800);
    rect(width / 2 - 340, 0, 60, height + 800);
    rect(-150, 0, 60, height + 800);
    pop();
}

function sunRay4() {
    push();
    rotate(-25);
    noStroke();
    if (!nightTime) {
        fill(ray3);
    }
    else {
        fill(ray6);
    }
    rect(width / 2 - 300, 0, 50, height + 800);
    rect(width / 2 - 160, 0, 50, height + 800);
    rect(width / 2 - 50, 0, 10, height + 800);
    pop();
}