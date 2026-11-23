let kevinGiven = false;

let kevinTakenFish = false;
let kevinTakenWood = false;
let kevinTakenWater = false;

let kevinDelay = 5000 + Math.random() * 5000;

let kevinTimer = 0;

function kevinGive() {
    if (!nightTime && !kevinGiven) {
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
    if (nightTime) {
        kevinGiven = false;
    }
}

function kevinPotTaken() {
    if (nightTime) {
        kevinTakenFish = false;
        kevinTakenWood = false;
        kevinTimer = millis();
        kevinDelay = random(5000, 10000);
    }
    kevinTakeFish();
    kevinTakeWood();
    kevinTakeWater();
}

function kevinTakeFish() {
    if (!nightTime && !kevinTakenFish) {
        if (millis() - kevinTimer > kevinDelay) {
            if (potCollectedFish > 0) {
                let roll = random(100);
                let kevinTakeFish = 0;
                if (roll < 25) { // slightly higher chance for kevin to take more fish
                    kevinTakeFish += potCollectedFish;
                    potCollectedFish = 0;
                    console.log("greedy kevin:" + kevinTakeFish);
                }
                else if (roll < 60) {
                    kevinTakeFish += round(potCollectedFish * 0.5);
                    potCollectedFish -= round(potCollectedFish * 0.5);
                    console.log("kevin good:" + kevinTakeFish);
                }
                else {
                    kevinTakeFish += round(potCollectedFish * 0.3);
                    potCollectedFish -= round(potCollectedFish * 0.3);
                    console.log("kevin nice:" + kevinTakeFish);
                }
                kevinTakenFish = true;

            }
        }
    }
}

function kevinTakeWood() {
    if (!nightTime && !kevinTakenWood) {
        if (millis() - kevinTimer > kevinDelay) {
            if (potCollectedWood > 0) {
                let roll = random(100);
                let kevinTakeWood = 0;
                if (roll < 15) {
                    kevinTakeWood += potCollectedWood;
                    potCollectedWood = 0;
                    console.log("greedy kevin:" + kevinTakeWood);
                }
                else if (roll < 50) {
                    kevinTakeWood += round(potCollectedWood * 0.5);
                    potCollectedWood -= round(potCollectedWood * 0.5);
                    console.log("kevin good:" + kevinTakeWood);
                }
                else {
                    kevinTakeWood += round(potCollectedWood * 0.3);
                    potCollectedWood -= round(potCollectedWood * 0.3);
                    console.log("kevin nice:" + kevinTakeWood);
                }
                kevinTakenWood = true;

            }
        }
    }
}

function kevinTakeWater() { //higher chance of kevin taking more water
    if (!nightTime && !kevinTakenWater) {
        if (millis() - kevinTimer > kevinDelay) {
            if (potCollectedWater > 0) {
                let roll = random(100);
                let kevinTakeWater = 0;
                if (roll < 25) {
                    kevinTakeWater += potCollectedWater;
                    potCollectedWater = 0;
                    console.log("greedy kevin:" + kevinTakeWater);
                }
                else if (roll < 65) {
                    kevinTakeWater += round(potCollectedWater * 0.5);
                    potCollectedWater -= round(potCollectedWater * 0.5);
                    console.log("kevin good:" + kevinTakeWater);
                }
                else {
                    kevinTakeWater += round(potCollectedWater * 0.3);
                    potCollectedWater -= round(potCollectedWater * 0.3);
                    console.log("kevin nice:" + kevinTakeWater);
                }
                kevinTakenWater = true;

            }
        }
    }
}