const energy = {
    body: {
        x: 85.5,
        y: 657.5,
        w: 40,
        h: 35
    },
    color: {
        first: "#008000",
        second: "#55AA00",
        third: "#AAD500",
        fourth: "#FFFF00",
        fifth: "#FFD200",
        sixth: "#FFA500",
        seventh: "#FF6900",
        eighth: "#ff3d07ff",
        ninth: "#ff0202ff",
        tenth: "#ff00aeff",
        eleventh: "#ff00fbff",
        twelfth: "#ee00ffff"
    }
};

function energySetup() {

}

function energyDraw() {

    drawEnergyBar();
}

function drawEnergyBar() {
    push();
    noStroke();
    fill(140, 83, 13);
    rect(83.5, 657.5, 485, 35, 5);

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

    strokeWeight(5);
    stroke(117, 66, 2);
    fill(140, 83, 13, 70);
    rect(83.5, 657.5, 485, 35, 5);
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


