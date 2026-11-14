let energy1;
let energy2;
let energy3;
let energy4;
let energy5;
let energy6;
let energy7;
let energy8;
let energy9;
let energy10;
let energy11;
let energy12;
let energy13;

const energy = {
    body: {
        x: 80,
        y: 680.5,
        w: 45,
        h: 15
    },
    color: {
        first: "#d400ffff",
        second: "#e607f2ff", //#e607f2ff
        third: "#ff00aeff", //#ff00aeff
        fourth: "#ff0202ff", //#ff0202ff
        fifth: "#ff3d07ff", //#ff3d07ff
        sixth: "#FF6900", //#FF6900
        seventh: "#FFA500",
        eighth: "#FFD200",
        ninth: "#FFFF00",
        tenth: "#AAD500",
        eleventh: "#55AA00",
        twelfth: "#008000",//#008000
        thirteenth: "#006837ff"
    },
    off: "#8c530d"

};

function energyDraw() {

    drawEnergyBar();
    drawLightningBolt(30, 665, 45);
}

function drawEnergyBar() {
    push();
    noStroke();
    fill(140, 83, 13);
    rect(78, 680.5, 587.5, 15, 5);

    drawEnergyLevel();

    strokeWeight(3);
    stroke(117, 66, 2);
    fill(140, 83, 13, 50);
    rect(78, 680.5, 587.5, 15, 5);
    pop();
}

function drawEnergy1() {
    push();
    noStroke();
    fill(energy.color.first);
    rect(energy.body.x, energy.body.y, energy.body.w, energy.body.h);
    pop();
}

function drawEnergy2() {
    push();
    noStroke();
    fill(energy.color.second);
    rect(energy.body.x + 45, energy.body.y, energy.body.w, energy.body.h);
    pop();
}

function drawEnergy3() {
    push();
    noStroke();
    fill(energy.color.third);
    rect(energy.body.x + 90, energy.body.y, energy.body.w, energy.body.h);
    pop();
}

function drawEnergy4() {
    push();
    noStroke();
    fill(energy.color.fourth);
    rect(energy.body.x + 135, energy.body.y, energy.body.w, energy.body.h);
    pop();
}


function drawEnergy5() {
    push();
    noStroke();
    fill(energy.color.fifth);
    rect(energy.body.x + 180, energy.body.y, energy.body.w, energy.body.h);
    pop();
}


function drawEnergy6() {
    push();
    noStroke();
    fill(energy.color.sixth);
    rect(energy.body.x + 225, energy.body.y, energy.body.w, energy.body.h);
    pop();
}


function drawEnergy7() {
    push();
    noStroke();
    fill(energy.color.seventh);
    rect(energy.body.x + 270, energy.body.y, energy.body.w, energy.body.h);
    pop();
}


function drawEnergy8() {
    push();
    noStroke();
    fill(energy.color.eighth);
    rect(energy.body.x + 315, energy.body.y, energy.body.w, energy.body.h);
    pop();
}


function drawEnergy9() {
    push();
    noStroke();
    fill(energy.color.ninth);
    rect(energy.body.x + 360, energy.body.y, energy.body.w, energy.body.h);
    pop();
}


function drawEnergy10() {
    push();
    noStroke();
    fill(energy.color.tenth);
    rect(energy.body.x + 405, energy.body.y, energy.body.w, energy.body.h);
    pop();
}

function drawEnergy11() {
    push();
    noStroke();
    fill(energy.color.eleventh);
    rect(energy.body.x + 450, energy.body.y, energy.body.w, energy.body.h);
    pop();
}

function drawEnergy12() {
    push();
    noStroke();
    fill(energy.color.twelfth);
    rect(energy.body.x + 495, energy.body.y, energy.body.w, energy.body.h);
    pop();
}

function drawEnergy13() {
    push();
    noStroke();
    fill(energy.color.thirteenth);
    rect(energy.body.x + 540, energy.body.y, energy.body.w, energy.body.h);
    pop();
}

function checkEnergyLevel() {
    const timeSpent = millis() - startTime;
    if (timeSpent > 3000) {
        energy13.color = energy.color.off;

        if (!energy13 && timeSpent > 6000) {
            energy12.color = energy.color.off;
        }
        if (!energy12 && timeSpent > 9000) {
            energy11.color = energy.color.off;
        }
    }
}