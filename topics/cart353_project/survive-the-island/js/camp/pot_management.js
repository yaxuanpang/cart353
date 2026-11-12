let potCollectedFish = 0;
let potCollectedWood = 0;
let potCollectedWater = 0;

let potCollected = false;
let potTaken = false;


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
        fishTaken += potCollectedFish;
        woodTaken += potCollectedWood;
        waterTaken += potCollectedWater;

        potCollectedFish = 0;
        potCollectedWood = 0;
        potCollectedWater = 0;
    }
}