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
let jessicaCoins = 160;

let jessicaTimer = 0;

function jessicaPanic() {
    if (jessicaTookFish <= 5 || jessicaTookWood <= 9 || jessicaTookWater <= 12) {
        if (dayCount >= 3) {
            jessicaPanicking = true;
        }
    }
}

function jessicaGive() {
    if (showAfternoon && !jessicaGiven) {
        //low player contribution = high jessica contribution
        //less than 40 fish from player = low
        if (playerFish >= 40) {
            if (jessicaCoins > 9) {
                let jessicaCollectedFish = floor(random(0, 20));
                potCollectedFish += jessicaCollectedFish;
                jessicaCoins -= 10;
            }
        }
        else {
            if (jessicaCoins >= 10) {
                let jessicaCollectedFish = floor(random(10, 45));
                potCollectedFish += jessicaCollectedFish;
                jessicaCoins -= 10;
            }
        }
        //less than 20 wood from player = low
        if (playerWood >= 20) {
            if (jessicaCoins > 29) {
                let jessicaCollectedWood = floor(random(0, 7));
                totalWoodCount += jessicaCollectedWood;
                potCollectedWood += jessicaCollectedWood;
                jessicaCoins -= 30;
                console.log((totalWoodCount + "jesscia: " + jessicaCollectedWood + "coins: " + jessicaCoins));
            }
        }
        else {
            if (jessicaCoins > 29) {
                let jessicaCollectedWood = floor(random(5, 15));
                totalWoodCount += jessicaCollectedWood;
                potCollectedWood += jessicaCollectedWood;
                jessicaCoins -= 30;
                console.log((totalWoodCount + "jesscia: " + jessicaCollectedWood + "coins: " + jessicaCoins));
            }
        }
        //less than 30 water from player = low
        if (playerWater >= 30) {
            if (jessicaCoins > 9) {
                let jessicaCollectedWater = floor(random(0, 28));
                potCollectedWater += jessicaCollectedWater;
            }
        }
        else {
            if (jessicaCoins > 9) {
                let jessicaCollectedWater = floor(random(21, 39));
                potCollectedWater += jessicaCollectedWater;
            }
        }
        jessicaGiven = true;
    }
    if (showDawn) {
        jessicaGiven = false;
    }
}

function jessicaPotTaken() {
    if (showAfternoon) {
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

    if (!jessicaSignShown) {
        if (jessicaTakenFish || jessicaTakenWood || jessicaTakenWater) {
            showJessicaTakenSign = true;
            jessicaSignShown = true;
        }
    }
}

function jessicaTakeFish() {
    if (showSunset && !jessicaTakenFish) {
        if (millis() - jessicaTimer > jessicaDelay) {
            if (potCollectedFish > 0) {
                let roll = random(100);
                if (jessicaPanicking) {
                    if (roll < 20) {
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
                    if (roll < 5) {
                        jessicaTookFish += potCollectedFish;
                        potCollectedFish = 0;
                        console.log("greedy jessica:" + jessicaTookFish);
                    }
                    else if (roll < 30) {
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
    if (showSunset && !jessicaTakenWood) {
        if (millis() - jessicaTimer > jessicaDelay) {
            if (potCollectedWood > 0) {
                let roll = random(100);
                if (jessicaPanicking) {
                    if (roll < 20) {
                        jessicaTookWood += potCollectedWood;
                        potCollectedWood = 0;
                        console.log("greedy jessica:" + jessicaTookWood);
                    }
                    else if (roll < 70) {
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
                    if (roll < 5) {
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
    if (showSunset && !jessicaTakenWater) {
        if (millis() - jessicaTimer > jessicaDelay) {
            if (potCollectedWater > 0) {
                let roll = random(100);
                if (jessicaPanicking) {
                    if (roll < 10) {
                        jessicaTookWood += potCollectedWood;
                        potCollectedWood = 0;
                        console.log("greedy jessica:" + jessicaTookWood);
                    }
                    else if (roll < 80) {
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
                    if (roll < 5) {
                        jessicaTookWater += potCollectedWater;
                        potCollectedWater = 0;
                        console.log("greedy jessica:" + jessicaTookWater);
                    }
                    else if (roll < 40) {
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