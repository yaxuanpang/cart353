let potCollectedFish = 0;
let potCollectedWood = 0;
let potCollectedWater = 0;

let potCollected = false;
let potTaken = false;

let takeOutLow = false;
let takeOutMed = false;
let takeOutHigh = false;

let totalWoodCount = 0;

function potCollection() {
    if (potCollectedFish >= 1 || potCollectedWood >= 1 || potCollectedWater >= 1) {
        potCollected = true;
    }
}

function convertCollectedToPot() {
    if (!showTakeOutPercentSign) {
        potCollectedFish += fishCollected;
        potCollectedWood += woodCollected;
        potCollectedWater += waterCollected;

        fishCollected = 0;
        woodCollected = 0;
        waterCollected = 0;
    }
}

function convertPotToTaken() {
    if (potTaken) {
        if (takeOutLow) {
            fishTaken += round(potCollectedFish * 0.3);
            woodTaken += round(potCollectedWood * 0.3);
            waterTaken += round(potCollectedWater * 0.3);

            potCollectedFish -= round(potCollectedFish * 0.3);
            potCollectedWood -= round(potCollectedWood * 0.3);
            potCollectedWater -= round(potCollectedWater * 0.3);
        }
        if (takeOutMed) {
            fishTaken += round(potCollectedFish * 0.5);
            woodTaken += round(potCollectedWood * 0.5);
            waterTaken += round(potCollectedWater * 0.5);

            potCollectedFish -= round(potCollectedFish * 0.5);
            potCollectedWood -= round(potCollectedWood * 0.5);
            potCollectedWater -= round(potCollectedWater * 0.5);
        }
        if (takeOutHigh) {
            fishTaken += potCollectedFish;
            woodTaken += potCollectedWood;
            waterTaken += potCollectedWater;

            potCollectedFish = 0;
            potCollectedWood = 0;
            potCollectedWater = 0;
        }
    }
}