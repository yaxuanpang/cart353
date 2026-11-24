let jessicaGiven = false;
let jessicaTakenFish = false;
let jessicaTakenWood = false;
let jessicaTakenWater = false;
let showJessicaTakenSign = false;
let jessicaSignShown = false;

let jessicaDelay = 5000 + Math.random() * 5000;

let jessicaPanicking = false;

let jessicaTookFish = 0;
let jessicaTookWood = 0;
let jessicaTookWater = 0;

let jessicaTimer = 0;

function jessicaPanic() {
    if (jessicaTookFish <= 15 || jessicaTookWood <= 9 || jessicaTookWater <= 12) {
        jessicaPanicking = true;
    }
}

function jessicaGive() {
    if (!nightTime && !jessicaGiven) {
        //low player contribution = high jessica contribution
        //less than 40 fish from player = low
        if (fishCollected >= 40) {
            let jessicaCollectedFish = floor(random(0, 20));
            potCollectedFish += jessicaCollectedFish;
        }
        else {
            let jessicaCollectedFish = floor(random(10, 45));
            potCollectedFish += jessicaCollectedFish;
        }
        //less than 20 wood from player = low
        if (woodCollected >= 20) {
            let jessicaCollectedWood = floor(random(0, 7));
            totalWoodCount += jessicaCollectedWood;
            potCollectedWood += jessicaCollectedWood;
            console.log((totalWoodCount + "jesscia: " + jessicaCollectedWood));
        }
        else {
            let jessicaCollectedWood = floor(random(5, 15));
            totalWoodCount += jessicaCollectedWood;
            potCollectedWood += jessicaCollectedWood;
            console.log((totalWoodCount + "jesscia: " + jessicaCollectedWood));
        }
        //less than 30 water from player = low
        if (waterCollected >= 30) {
            let jessicaCollectedWater = floor(random(0, 15));
            potCollectedWater += jessicaCollectedWater;
        }
        else {
            let jessicaCollectedWater = floor(random(12, 36));
            potCollectedWater += jessicaCollectedWater;
        }
        jessicaGiven = true;
    }
    if (nightTime) {
        jessicaGiven = false;
    }
}

function jessicaPotTaken() {
    if (nightTime) {
        jessicaTakenFish = false;
        jessicaTakenWood = false;
        jessicaTakenWater = false;
        showJessicaTakenSign = false;
        jessicaSignShown = false;
        jessicaTimer = millis();
        jessicaDelay = random(5000, 10000);
    }
    jessicaTakeFish();
    jessicaTakeWood();
    jessicaTakeWater();

    if (!nightTime && !jessicaSignShown) {
        if (jessicaTakenFish || jessicaTakenWood || jessicaTakenWater) {
            showJessicaTakenSign = true;
            jessicaSignShown = true;
        }
    }
}

function jessicaTakeFish() {
    if (!nightTime && !jessicaTakenFish) {
        if (millis() - jessicaTimer > jessicaDelay) {
            if (potCollectedFish > 0) {
                let roll = random(100);
                if (jessicaPanicking) {
                    if (roll < 40) {
                        jessicaTookFish += potCollectedFish;
                        potCollectedFish = 0;
                        console.log("greedy jessica:" + jessicaTookFish);
                    }
                    else if (roll < 80) {
                        jessicaTookFish += round(potCollectedFish * 0.5);
                        potCollectedFish -= round(potCollectedFish * 0.5);
                        console.log("jessica good:" + jessicaTookFish);
                    }
                    else {
                        jessicaTookFish += round(potCollectedFish * 0.3);
                        potCollectedFish -= round(potCollectedFish * 0.3);
                        console.log("jessica nice:" + jessicaTookFish);
                    }
                    jessicaTakenFish = true;
                }
                else {
                    if (roll < 10) {
                        jessicaTookFish += potCollectedFish;
                        potCollectedFish = 0;
                        console.log("greedy jessica:" + jessicaTookFish);
                    }
                    else if (roll < 50) {
                        jessicaTookFish += round(potCollectedFish * 0.5);
                        potCollectedFish -= round(potCollectedFish * 0.5);
                        console.log("jessica good:" + jessicaTookFish);
                    }
                    else {
                        jessicaTookFish += round(potCollectedFish * 0.3);
                        potCollectedFish -= round(potCollectedFish * 0.3);
                        console.log("jessica nice:" + jessicaTookFish);
                    }
                    jessicaTakenFish = true;
                }

            }
        }
    }
}

function jessicaTakeWood() {
    if (!nightTime && !jessicaTakenWood) {
        if (millis() - jessicaTimer > jessicaDelay) {
            if (potCollectedWood > 0) {
                let roll = random(100);
                if (jessicaPanicking) {
                    if (roll < 30) {
                        jessicaTookWood += potCollectedWood;
                        potCollectedWood = 0;
                        console.log("greedy jessica:" + jessicaTookWood);
                    }
                    else if (roll < 90) {
                        jessicaTookWood += round(potCollectedWood * 0.5);
                        potCollectedWood -= round(potCollectedWood * 0.5);
                        console.log("jessica good:" + jessicaTookWood);
                    }
                    else {
                        jessicaTookWood += round(potCollectedWood * 0.3);
                        potCollectedWood -= round(potCollectedWood * 0.3);
                        console.log("jessica nice:" + jessicaTookWood);
                    }
                    jessicaTakenWood = true;
                }
                else {
                    if (roll < 10) {
                        jessicaTookWood += potCollectedWood;
                        potCollectedWood = 0;
                        console.log("greedy jessica:" + jessicaTookWood);
                    }
                    else if (roll < 60) { //higher chance taking more wood
                        jessicaTookWood += round(potCollectedWood * 0.5);
                        potCollectedWood -= round(potCollectedWood * 0.5);
                        console.log("jessica good:" + jessicaTookWood);
                    }
                    else {
                        jessicaTookWood += round(potCollectedWood * 0.3);
                        potCollectedWood -= round(potCollectedWood * 0.3);
                        console.log("jessica nice:" + jessicaTookWood);
                    }
                    jessicaTakenWood = true;
                }

            }
        }
    }
}

function jessicaTakeWater() {
    if (!nightTime && !jessicaTakenWater) {
        if (millis() - jessicaTimer > jessicaDelay) {
            if (potCollectedWater > 0) {
                let roll = random(100);
                if (jessicaPanicking) {
                    if (roll < 20) {
                        jessicaTookWood += potCollectedWood;
                        potCollectedWood = 0;
                        console.log("greedy jessica:" + jessicaTookWood);
                    }
                    else if (roll < 90) {
                        jessicaTookWood += round(potCollectedWood * 0.5);
                        potCollectedWood -= round(potCollectedWood * 0.5);
                        console.log("jessica good:" + jessicaTookWood);
                    }
                    else {
                        jessicaTookWood += round(potCollectedWood * 0.3);
                        potCollectedWood -= round(potCollectedWood * 0.3);
                        console.log("jessica nice:" + jessicaTookWood);
                    }
                    jessicaTakenWood = true;
                }
                else {
                    if (roll < 10) {
                        jessicaTookWater += potCollectedWater;
                        potCollectedWater = 0;
                        console.log("greedy jessica:" + jessicaTookWater);
                    }
                    else if (roll < 50) {
                        jessicaTookWater += round(potCollectedWater * 0.5);
                        potCollectedWater -= round(potCollectedWater * 0.5);
                        console.log("jessica good:" + jessicaTookWater);
                    }
                    else {
                        jessicaTookWater += round(potCollectedWater * 0.3);
                        potCollectedWater -= round(potCollectedWater * 0.3);
                        console.log("jessica nice:" + jessicaTookWater);
                    }
                    jessicaTakenWater = true;
                }

            }
        }
    }
}

function jessicaTakenSign() {
    push();
    if (showKevinTakenSign) {
        translate(640, height / 2 - 100);
    }
    else {
        translate(640, height / 2);
    }
    strokeWeight(3);
    stroke(117, 66, 2);
    fill(140, 83, 13);
    rect(0, 0, 250, 80, 10);
    textAlign(CENTER, CENTER);
    noStroke();
    fill(255);
    textSize(20);
    text("Jessica took resources", 130, 40);
    textSize(10);
    text("(press X)", 130, 63);
    fill(255, 204, 20);
    circle(130, 15, 20);
    pop();
}

function jessicaKeyPressed() {
    if (keyCode === 88) {
        showJessicaTakenSign = false;
    }
}