let greenFishCaught = false;
let orangeFishCaught = false;

function insideNet(x, y) {
    return x >= mouseX - 46 && x <= mouseX + 42 &&
        y >= mouseY - 50 && y <= mouseY + 66;
}

function catchFish() {
    if (bagPlaced) {
        if (catchFish) {
            boids.splice();
            salmon.splice();
        }
    }
}


function catchFish() {
    let caught = 0;

    // fish
    for (let i = flock.boids.length - 1; i >= 0; i--) {
        let b = flock.boids[i];
        if (insideNet(b.position.x, b.position.y)) {
            let escapeChance = map(b.dna.genes[1], 0, 1, 0.1, 0.6);
            if (random() > escapeChance) {
                flock.boids.splice(i, 1);
                if (b.colorFish === 3) {
                    orangeFishCaught = true;
                    console.log("orange fish caught");
                }
                else if (b.colorFish === 2) {
                    greenFishCaught = true;
                    console.log("green fish caught");
                }
                else {
                    orangeFishCaught = true;
                    greenFishCaught = true;
                }

                if (b.isAdult()) {
                    caught++;
                }

            }
        }
    }

    // salmon
    for (let i = salmonSchool.salmon.length - 1; i >= 0; i--) {
        let s = salmonSchool.salmon[i];
        if (insideNet(s.position.x, s.position.y)) {

            salmonSchool.salmon.splice(i, 1);
            if (s.isAdult()) {
                caught += 2;
            } else {
                caught++;
            }
        }
    }

    fishCollected += caught;
}
