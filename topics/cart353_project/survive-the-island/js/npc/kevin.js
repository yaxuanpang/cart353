let kevinGiven = false;
let kevinTakenFish = false;
let kevinTakenWood = false;
let kevinTakenWater = false;
let showKevinTakenSign = false;
let kevinSignShown = false;

let kevinDelay = 5000 + Math.random() * 5000;

let kevinPanicking = false;

let kevinTookFish = 0;
let kevinTookWood = 0;
let kevinTookWater = 0;


let kevinTimer = 0;

function kevinPanic() {
    if (kevinTookFish <= 10 || kevinTookWood <= 3 || kevinTookWater <= 15) {
        kevinPanicking = true;
    }
}

function kevinGive() {
    if (!kevinGiven) {
        //low player contribution = high kevin contribution
        //less than 40 fish from player = low
        if (fishCollected >= 40) {
            let kevinCollectedFish = floor(random(5, 10));
            potCollectedFish += kevinCollectedFish;
        }
        else {
            let kevinCollectedFish = floor(random(0, 7));
            potCollectedFish += kevinCollectedFish;
        }
        //less than 20 wood from player = low
        if (woodCollected >= 20) {
            let kevinCollectedWood = floor(random(10, 15));
            totalWoodCount += kevinCollectedWood;
            potCollectedWood += kevinCollectedWood;
            console.log((totalWoodCount + "kevin: " + kevinCollectedWood));
        }
        else {
            let kevinCollectedWood = floor(random(13, 24));
            totalWoodCount += kevinCollectedWood;
            potCollectedWood += kevinCollectedWood;
            console.log((totalWoodCount + "kevin: " + kevinCollectedWood));
        }
        //less than 30 water from player = low
        if (waterCollected >= 30) {
            let kevinCollectedWater = floor(random(3, 12));
            potCollectedWater += kevinCollectedWater;
        }
        else {
            let kevinCollectedWater = floor(random(0, 6));
            potCollectedWater += kevinCollectedWater;
        }
        kevinGiven = true;
    }
    if (showDawn) {
        kevinGiven = false;
    }
}

function kevinPotTaken() {
    if (showDawn) {
        kevinTakenFish = false;
        kevinTakenWood = false;
        kevinTakenWater = false;
        showKevinTakenSign = false;
        kevinSignShown = false;
        kevinTimer = millis();
        kevinDelay = random(5000, 10000);
    }
    kevinTakeFish();
    kevinTakeWood();
    kevinTakeWater();

    if (showSunset && !kevinSignShown) {
        if (kevinTakenFish || kevinTakenWood || kevinTakenWater) {
            showKevinTakenSign = true;
            kevinSignShown = true;
        }
    }
}

function kevinTakeFish() {
    if (!kevinTakenFish) {
        if (millis() - kevinTimer > kevinDelay) {
            if (potCollectedFish > 0) {
                let roll = random(100);
                if (kevinPanicking) {
                    if (roll < 20) {
                        kevinTookFish += potCollectedFish;
                        potCollectedFish = 0;
                        console.log("greedy kevin:" + kevinTookFish);
                    }
                    else if (roll < 70) {
                        kevinTookFish += round(potCollectedFish * 0.5);
                        potCollectedFish -= round(potCollectedFish * 0.5);
                        console.log("kevin good:" + kevinTookFish);
                    }
                    else {
                        kevinTookFish += round(potCollectedFish * 0.3);
                        potCollectedFish -= round(potCollectedFish * 0.3);
                        console.log("kevin nice:" + kevinTookFish);
                    }
                    kevinTakenFish = true;
                }
                else {
                    if (roll < 15) { // slightly higher chance for kevin to take more fish
                        kevinTookFish += potCollectedFish;
                        potCollectedFish = 0;
                        console.log("greedy kevin:" + kevinTookFish);
                    }
                    else if (roll < 60) {
                        kevinTookFish += round(potCollectedFish * 0.5);
                        potCollectedFish -= round(potCollectedFish * 0.5);
                        console.log("kevin good:" + kevinTookFish);
                    }
                    else {
                        kevinTookFish += round(potCollectedFish * 0.3);
                        potCollectedFish -= round(potCollectedFish * 0.3);
                        console.log("kevin nice:" + kevinTookFish);
                    }
                    kevinTakenFish = true;
                }

            }
        }
    }
}

function kevinTakeWood() {
    if (!kevinTakenWood) {
        if (millis() - kevinTimer > kevinDelay) {
            if (potCollectedWood > 0) {
                let roll = random(100);
                if (kevinPanicking) {
                    if (roll < 20) {
                        kevinTookFish += potCollectedFish;
                        potCollectedFish = 0;
                        console.log("greedy kevin:" + kevinTookFish);
                    }
                    else if (roll < 70) {
                        kevinTookFish += round(potCollectedFish * 0.5);
                        potCollectedFish -= round(potCollectedFish * 0.5);
                        console.log("kevin good:" + kevinTookFish);
                    }
                    else {
                        kevinTookFish += round(potCollectedFish * 0.3);
                        potCollectedFish -= round(potCollectedFish * 0.3);
                        console.log("kevin nice:" + kevinTookFish);
                    }
                    kevinTakenFish = true;
                }
                else {
                    if (roll < 10) {
                        kevinTookWood += potCollectedWood;
                        potCollectedWood = 0;
                        console.log("greedy kevin:" + kevinTookWood);
                    }
                    else if (roll < 50) {
                        kevinTookWood += round(potCollectedWood * 0.5);
                        potCollectedWood -= round(potCollectedWood * 0.5);
                        console.log("kevin good:" + kevinTookWood);
                    }
                    else {
                        kevinTookWood += round(potCollectedWood * 0.3);
                        potCollectedWood -= round(potCollectedWood * 0.3);
                        console.log("kevin nice:" + kevinTookWood);
                    }
                    kevinTakenWood = true;
                }

            }
        }
    }
}

function kevinTakeWater() { //higher chance of kevin taking more water
    if (!kevinTakenWater) {
        if (millis() - kevinTimer > kevinDelay) {
            if (potCollectedWater > 0) {
                let roll = random(100);
                if (kevinPanicking) {
                    if (roll < 25) {
                        kevinTookFish += potCollectedFish;
                        potCollectedFish = 0;
                        console.log("greedy kevin:" + kevinTookFish);
                    }
                    else if (roll < 50) {
                        kevinTookFish += round(potCollectedFish * 0.5);
                        potCollectedFish -= round(potCollectedFish * 0.5);
                        console.log("kevin good:" + kevinTookFish);
                    }
                    else {
                        kevinTookFish += round(potCollectedFish * 0.3);
                        potCollectedFish -= round(potCollectedFish * 0.3);
                        console.log("kevin nice:" + kevinTookFish);
                    }
                    kevinTakenFish = true;
                }
                else {
                    if (roll < 20) {
                        kevinTookWater += potCollectedWater;
                        potCollectedWater = 0;
                        console.log("greedy kevin:" + kevinTookWater);
                    }
                    else if (roll < 65) {
                        kevinTookWater += round(potCollectedWater * 0.5);
                        potCollectedWater -= round(potCollectedWater * 0.5);
                        console.log("kevin good:" + kevinTookWater);
                    }
                    else {
                        kevinTookWater += round(potCollectedWater * 0.3);
                        potCollectedWater -= round(potCollectedWater * 0.3);
                        console.log("kevin nice:" + kevinTookWater);
                    }
                    kevinTakenWater = true;
                }

            }
        }
    }
}

function kevinTakenSign() {
    push();
    translate(640, height / 2);
    strokeWeight(3);
    stroke(117, 66, 2);
    fill(140, 83, 13);
    rect(0, 0, 250, 80, 10);
    textAlign(CENTER, CENTER);
    noStroke();
    fill(255);
    textSize(20);
    text("Kevin took resources", 130, 40);
    textSize(10);
    text("(press Z)", 130, 63);
    fill(188, 20, 255);
    circle(130, 15, 20);
    pop();
}

function kevinKeyPressed() {
    if (keyCode === 90) {
        showKevinTakenSign = false;
    }
}