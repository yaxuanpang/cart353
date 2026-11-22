let jessicaGiven = false;

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
            let jessicaCollectedWood = floor(random(0, 10));
            potCollectedWood += jessicaCollectedWood;
        }
        else {
            let jessicaCollectedWood = floor(random(5, 25));
            potCollectedWood += jessicaCollectedWood;
        }
        //less than 30 water from player = low
        if (waterCollected >= 30) {
            let jessicaCollectedWater = floor(random(0, 15));
            potCollectedWater += jessicaCollectedWater;
        }
        else {
            let jessicaCollectedWater = floor(random(9, 18));
            potCollectedWater += jessicaCollectedWater;
        }
        jessicaGiven = true;
    }
    if (nightTime) {
        jessicaGiven = false;
    }
}