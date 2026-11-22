let kevinGiven = false;

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
        }
        else {
            let kevinCollectedWood = floor(random(13, 24));
            totalWoodCount += kevinCollectedWood;
            potCollectedWood += kevinCollectedWood;
        }
        console.log((totalWoodCount));
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