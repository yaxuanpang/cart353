let jessicaGiven = false;
let jessicaTakenFish = false;
let jessicaTakenWood = false;
let jessicaTakenWater = false;

let jessicaDelay = 5000 + Math.random() * 5000;

let jessicaPanicking = false;

let jessicaTimer = 0;

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
            let jessicaCollectedWater = floor(random(12, 30));
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
        jessicaTimer = millis();
        jessicaDelay = random(5000, 10000);
    }
    jessciaTakeFish();
    jessciaTakeWood();
    jessciaTakeWater();
}

function jessciaTakeFish() {
    if (!nightTime && !jessicaTakenFish) {
        if (millis() - jessicaTimer > jessicaDelay) {
            if (potCollectedFish > 0) {
                let roll = random(100);
                let jessicaTakeFish = 0;
                if (roll < 15) {
                    jessicaTakeFish += potCollectedFish;
                    potCollectedFish = 0;
                    console.log("greedy jessica:" + jessicaTakeFish);
                }
                else if (roll < 50) {
                    jessicaTakeFish += round(potCollectedFish * 0.5);
                    potCollectedFish -= round(potCollectedFish * 0.5);
                    console.log("jessica good:" + jessicaTakeFish);
                }
                else {
                    jessicaTakeFish += round(potCollectedFish * 0.3);
                    potCollectedFish -= round(potCollectedFish * 0.3);
                    console.log("jessica nice:" + jessicaTakeFish);
                }
                jessicaTakenFish = true;

            }
        }
    }
}

function jessciaTakeWood() {
    if (!nightTime && !jessicaTakenWood) {
        if (millis() - jessicaTimer > jessicaDelay) {
            if (potCollectedWood > 0) {
                let roll = random(100);
                let jessicaTakeWood = 0;
                if (roll < 15) {
                    jessicaTakeWood += potCollectedWood;
                    potCollectedWood = 0;
                    console.log("greedy jessica:" + jessicaTakeWood);
                }
                else if (roll < 50) {
                    jessicaTakeWood += round(potCollectedWood * 0.5);
                    potCollectedWood -= round(potCollectedWood * 0.5);
                    console.log("jessica good:" + jessicaTakeWood);
                }
                else {
                    jessicaTakeWood += round(potCollectedWood * 0.3);
                    potCollectedWood -= round(potCollectedWood * 0.3);
                    console.log("jessica nice:" + jessicaTakeWood);
                }
                jessicaTakenWood = true;

            }
        }
    }
}

function jessciaTakeWater() {
    if (!nightTime && !jessicaTakenWater) {
        if (millis() - jessicaTimer > jessicaDelay) {
            if (potCollectedWater > 0) {
                let roll = random(100);
                let jessicaTakeWater = 0;
                if (roll < 15) {
                    jessicaTakeWater += potCollectedWater;
                    potCollectedWater = 0;
                    console.log("greedy jessica:" + jessicaTakeWater);
                }
                else if (roll < 50) {
                    jessicaTakeWater += round(potCollectedWater * 0.5);
                    potCollectedWater -= round(potCollectedWater * 0.5);
                    console.log("jessica good:" + jessicaTakeWater);
                }
                else {
                    jessicaTakeWater += round(potCollectedWater * 0.3);
                    potCollectedWater -= round(potCollectedWater * 0.3);
                    console.log("jessica nice:" + jessicaTakeWater);
                }
                jessicaTakenWater = true;

            }
        }
    }
}

function jessicaIsPanic() {
}