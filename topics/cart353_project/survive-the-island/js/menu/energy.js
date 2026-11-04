const energy = {
    body: {
        x: 70,
        y: 657.5,
        w: 40,
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
    drawLightningBolt(25, 643, 45);
}

function drawEnergyBar() {
    push();
    noStroke();
    fill(140, 83, 13);
    rect(68, 657.5, 523.5, 15, 5);

    drawEnergy1();
    drawEnergy2();
    drawEnergy3();
    drawEnergy4();
    drawEnergy5();
    drawEnergy6();
    drawEnergy7();
    drawEnergy8();
    drawEnergy9();
    drawEnergy10();
    drawEnergy11();
    drawEnergy12();
    drawEnergy13();

    strokeWeight(3);
    stroke(117, 66, 2);
    fill(140, 83, 13, 50);
    rect(68, 657.5, 523.5, 15, 5);
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
    rect(energy.body.x + 40, energy.body.y, energy.body.w, energy.body.h);
    pop();
}

function drawEnergy3() {
    push();
    noStroke();
    fill(energy.color.third);
    rect(energy.body.x + 80, energy.body.y, energy.body.w, energy.body.h);
    pop();
}

function drawEnergy4() {
    push();
    noStroke();
    fill(energy.color.fourth);
    rect(energy.body.x + 120, energy.body.y, energy.body.w, energy.body.h);
    pop();
}


function drawEnergy5() {
    push();
    noStroke();
    fill(energy.color.fifth);
    rect(energy.body.x + 160, energy.body.y, energy.body.w, energy.body.h);
    pop();
}


function drawEnergy6() {
    push();
    noStroke();
    fill(energy.color.sixth);
    rect(energy.body.x + 200, energy.body.y, energy.body.w, energy.body.h);
    pop();
}


function drawEnergy7() {
    push();
    noStroke();
    fill(energy.color.seventh);
    rect(energy.body.x + 240, energy.body.y, energy.body.w, energy.body.h);
    pop();
}


function drawEnergy8() {
    push();
    noStroke();
    fill(energy.color.eighth);
    rect(energy.body.x + 280, energy.body.y, energy.body.w, energy.body.h);
    pop();
}


function drawEnergy9() {
    push();
    noStroke();
    fill(energy.color.ninth);
    rect(energy.body.x + 320, energy.body.y, energy.body.w, energy.body.h);
    pop();
}


function drawEnergy10() {
    push();
    noStroke();
    fill(energy.color.tenth);
    rect(energy.body.x + 360, energy.body.y, energy.body.w, energy.body.h);
    pop();
}

function drawEnergy11() {
    push();
    noStroke();
    fill(energy.color.eleventh);
    rect(energy.body.x + 400, energy.body.y, energy.body.w, energy.body.h);
    pop();
}

function drawEnergy12() {
    push();
    noStroke();
    fill(energy.color.twelfth);
    rect(energy.body.x + 440, energy.body.y, energy.body.w, energy.body.h);
    pop();
}

function drawEnergy12() {
    push();
    noStroke();
    fill(energy.color.twelfth);
    rect(energy.body.x + 440, energy.body.y, energy.body.w, energy.body.h);
    pop();
}

function drawEnergy13() {
    push();
    noStroke();
    fill(energy.color.thirteenth);
    rect(energy.body.x + 480, energy.body.y, energy.body.w, energy.body.h);
    pop();
}
