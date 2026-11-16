const thirst = {
    body: {
        x: 392,
        y: 660.5,
        w: 45,
        h: 15
    },
    color: {
        first: "#55e5feff",
        second: "#55cefeff",
        third: "#55a7feff",
        fourth: "#5588feff",
        fifth: "#556cfeff",
        sixth: "#6355feff"
    },
    off: "#8c530d"
}

function thirstDraw() {
    drawThirstBar();
    strokeWeight(3);
    stroke(130, 75, 9);
    fill(130, 75, 9, 100);
    rect(510, 595, 60, 60, 5);
    drawWaterIcon(540, 630, 0.7);

}

function drawThirstBar() {
    push();
    noStroke();
    fill(140, 83, 13);
    rect(390, 660.5, 273, 15, 5);

    drawThirstLevel();

    strokeWeight(3);
    stroke(117, 66, 2);
    fill(140, 83, 13, 50);
    rect(390, 660.5, 273, 15, 5);
    pop();
}

function drawThirst1() {
    push();
    noStroke();
    fill(thirst.color.first);
    rect(thirst.body.x, thirst.body.y, thirst.body.w, thirst.body.h);
    pop();
}

function drawThirst2() {
    push();
    noStroke();
    fill(thirst.color.second);
    rect(thirst.body.x + 45, thirst.body.y, thirst.body.w, thirst.body.h);
    pop();
}

function drawThirst3() {
    push();
    noStroke();
    fill(thirst.color.third);
    rect(thirst.body.x + 90, thirst.body.y, thirst.body.w, thirst.body.h);
    pop();
}

function drawThirst4() {
    push();
    noStroke();
    fill(thirst.color.fourth);
    rect(thirst.body.x + 135, thirst.body.y, thirst.body.w, thirst.body.h);
    pop();
}


function drawThirst5() {
    push();
    noStroke();
    fill(thirst.color.fifth);
    rect(thirst.body.x + 180, thirst.body.y, thirst.body.w, thirst.body.h);
    pop();
}


function drawThirst6() {
    push();
    noStroke();
    fill(thirst.color.sixth);
    rect(thirst.body.x + 225, thirst.body.y, thirst.body.w, thirst.body.h);
    pop();
}