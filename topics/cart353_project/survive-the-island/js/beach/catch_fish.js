let greenFishCaught = false;
let orangeFishCaught = false;

function insideNet(x, y) { //position of the net is on the mouse
    return x >= mouseX - 46 && x <= mouseX + 42 &&
        y >= mouseY - 50 && y <= mouseY + 66;
}

function catchFish() {
    let caught = 0; // not fish is caught at the beginning

    // fish
    for (let i = flock.boids.length - 1; i >= 0; i--) {
        let b = flock.boids[i];
        if (insideNet(b.position.x, b.position.y)) {
            flock.boids.splice(i, 1); //if a fish is inside the net, it disappears
            if (b.colorFish === 3) {
                orangeFishCaught = true; //caught an orange fish
                console.log("orange fish caught");
            }
            else if (b.colorFish === 2) {
                greenFishCaught = true;
                console.log("green fish caught"); //caught a green fish
            }
            else {
                orangeFishCaught = false;
                greenFishCaught = false;
            }

            if (b.isAdult()) {
                caught++; // if the fish is an adult it counts for one fish
            }
        }
    }

    // salmon
    for (let i = salmonSchool.salmon.length - 1; i >= 0; i--) {
        let s = salmonSchool.salmon[i];
        if (insideNet(s.position.x, s.position.y)) {

            salmonSchool.salmon.splice(i, 1); //if a salmon is inside the net, it disappears
            if (s.isAdult()) {
                caught += 2; // if the salmon is an adult, it counts for 2 fishes
            } else {
                caught++; // if the salmon is not an adult, it counts for 1
            }
        }
    }

    //fishCollected (player's catch before they put it into the pot) and playerFish (player's daily catch)
    //goes up accordingly
    fishCollected += caught;
    playerFish += caught;
    console.log("player daily fish: " + playerFish);
}
