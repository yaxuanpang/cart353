let potCollectedFish = 0;
let potCollectedWood = 0;
let potCollectedWater = 0;

let potCollected = false;
let potTaken = false;

let takeOutLow = false;
let takeOutMed = false;
let takeOutHigh = false;


function convertCollectedToPot() {
    if (potCollected) {
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
            fishTaken += potCollectedFish * 0.2;
            woodTaken += potCollectedWood * 0.2;
            waterTaken += potCollectedWater * 0.2;

            potCollectedFish -= potCollectedFish * 0.2;
            potCollectedWood -= potCollectedWood * 0.2;
            potCollectedWater -= potCollectedWater * 0.2;
        }
        if (takeOutMed) {
            fishTaken += potCollectedFish * 0.5;
            woodTaken += potCollectedWood * 0.5;
            waterTaken += potCollectedWater * 0.5;

            potCollectedFish -= potCollectedFish * 0.5;
            potCollectedWood -= potCollectedWood * 0.5;
            potCollectedWater -= potCollectedWater * 0.5;
        }
        if (takeOutHigh) {
            fishTaken += potCollectedFish * 0.8;
            woodTaken += potCollectedWood * 0.8;
            waterTaken += potCollectedWater * 0.8;

            potCollectedFish -= potCollectedFish * 0.8;
            potCollectedWood -= potCollectedWood * 0.8;
            potCollectedWater -= potCollectedWater * 0.8;
        }
    }
}