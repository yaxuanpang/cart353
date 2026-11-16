const hunger = {
    body: {
        x: 80,
        y: 660.5,
        w: 45,
        h: 15
    },
    color: {
        first: "#ff00aeff",
        second: "#f207d3ff",
        third: "#e607f2ff",
        fourth: "#d400ffff",
        fifth: "#c300ffff",
        sixth: "#a200ffff"
    },
    off: "#8c530d"
}

function hungerDraw() {
    drawHungerBar();
    strokeWeight(3);
    stroke(130, 75, 9);
    fill(130, 75, 9, 100);
    rect(170, 595, 60, 60, 5);
    drawStomachIcon(200, 625, 0.55);
}

function drawHungerBar() {
    push();
    noStroke();
    fill(140, 83, 13);
    rect(78, 660.5, 273, 15, 5);

    drawHungerLevel();

    strokeWeight(3);
    stroke(117, 66, 2);
    fill(140, 83, 13, 50);
    rect(78, 660.5, 273, 15, 5);
    pop();
}

function drawHunger1() {
    push();
    noStroke();
    fill(hunger.color.first);
    rect(hunger.body.x, hunger.body.y, hunger.body.w, hunger.body.h);
    pop();
}

function drawHunger2() {
    push();
    noStroke();
    fill(hunger.color.second);
    rect(hunger.body.x + 45, hunger.body.y, hunger.body.w, hunger.body.h);
    pop();
}

function drawHunger3() {
    push();
    noStroke();
    fill(hunger.color.third);
    rect(hunger.body.x + 90, hunger.body.y, hunger.body.w, hunger.body.h);
    pop();
}

function drawHunger4() {
    push();
    noStroke();
    fill(hunger.color.fourth);
    rect(hunger.body.x + 135, hunger.body.y, hunger.body.w, hunger.body.h);
    pop();
}


function drawHunger5() {
    push();
    noStroke();
    fill(hunger.color.fifth);
    rect(hunger.body.x + 180, hunger.body.y, hunger.body.w, hunger.body.h);
    pop();
}


function drawHunger6() {
    push();
    noStroke();
    fill(hunger.color.sixth);
    rect(hunger.body.x + 225, hunger.body.y, hunger.body.w, hunger.body.h);
    pop();
}