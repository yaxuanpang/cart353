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
            fishTaken += round(potCollectedFish * 0.2);
            woodTaken += round(potCollectedWood * 0.2);
            waterTaken += round(potCollectedWater * 0.2);

            potCollectedFish -= round(potCollectedFish * 0.2);
            potCollectedWood -= round(potCollectedWood * 0.2);
            potCollectedWater -= round(potCollectedWater * 0.2);
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
            fishTaken += round(potCollectedFish * 0.8);
            woodTaken += round(potCollectedWood * 0.8);
            waterTaken += round(potCollectedWater * 0.8);

            potCollectedFish -= round(potCollectedFish * 0.8);
            potCollectedWood -= round(potCollectedWood * 0.8);
            potCollectedWater -= round(potCollectedWater * 0.8);
        }
    }
}