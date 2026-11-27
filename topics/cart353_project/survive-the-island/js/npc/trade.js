let jessicaTrade = false;
let jessicaOption1 = false;
let jessicaOption2 = false;

let tradedFish = 0;
let tradedWood = 0;
let tradedWater = 0;

let tradedJessicaFish = 0;
let tradedJessicaWood = 0;
let tradedJessicaWater = 0;

let kevinTrade = false;
let kevinOption1 = false;
let kevinOption2 = false;

let tradedFromKevinFish = 0;
let tradedFromKevinWood = 0;
let tradedFromKevinWater = 0;

let tradedKevinFish = 0;
let tradedKevinWood = 0;
let tradedKevinWater = 0;

let showJessicaNotEnough = false;
let showKevinNotEnough = false;

function trade() {
    if (jessicaTrade) {
        askingTradeJessicaSign();
        if (!jessicaCanTrade()) jessicaNotEnoughSign();
    }
    if (kevinTrade) {
        askingTradeKevinSign();
        if (!kevinCanTrade()) kevinNotEnoughSign();
    }
}

function jessicaCanTrade() {
    let hasResources = round(jessicaTookFish * 0.1) + round(jessicaTookWood * 0.1) + round(jessicaTookWater * 0.1) > 0;
    let hasCoins = jessicaCoins >= 10;
    return hasResources && hasCoins;
}

function kevinCanTrade() {
    let hasResources = round(kevinTookFish * 0.1) + round(kevinTookWood * 0.1) + round(kevinTookWater * 0.1) > 0;
    let hasCoins = kevinCoins >= 10;
    return hasResources && hasCoins;
}

function tradeWithKevin2() {
    push();
    let f = round(fishTaken * 0.1);
    let w = round(woodTaken * 0.1);
    let wa = round(waterTaken * 0.1);

    if (kevinCoins >= 10 && f + w + wa > 0) {
        goldCoins += 10;
        kevinCoins -= 10;

        tradedKevinFish += f;
        tradedKevinWood += w;
        tradedKevinWater += wa;

        fishTaken -= f;
        woodTaken -= w;
        waterTaken -= wa;

        kevinTookFish += f;
        kevinTookWood += w;
        kevinTookWater += wa;
    }
    console.log(kevinTookFish);
    console.log(kevinTookWood);
    console.log(kevinTookWater);
    kevinOption2 = true;
    pop();
}


function tradeWithKevin1() {
    push();
    let f = round(kevinTookFish * 0.1);
    let w = round(kevinTookWood * 0.1);
    let wa = round(kevinTookWater * 0.1);

    if (goldCoins >= 10 && f + w + wa > 0) {
        goldCoins -= 10;
        kevinCoins += 10;

        tradedFromKevinFish += f;
        tradedFromKevinWood += w;
        tradedFromKevinWater += wa;

        kevinTookFish -= f;
        kevinTookWood -= w;
        kevinTookWater -= wa;

        fishTaken += f;
        woodTaken += w;
        waterTaken += wa;
    }
    console.log(kevinTookFish);
    console.log(kevinTookWood);
    console.log(kevinTookWater);
    pop();
    kevinOption1 = true;
}


function tradeWithJessica2() {
    push();
    let f = round(fishTaken * 0.1);
    let w = round(woodTaken * 0.1);
    let wa = round(waterTaken * 0.1);

    if (jessicaCoins >= 10 && f + w + wa > 0) {
        goldCoins += 10;
        jessicaCoins -= 10;

        tradedJessicaFish += f;
        tradedJessicaWood += w;
        tradedJessicaWater += wa;

        fishTaken -= f;
        woodTaken -= w;
        waterTaken -= wa;

        jessicaTookFish += f;
        jessicaTookWood += w;
        jessicaTookWater += wa;
    }
    console.log(jessicaTookFish);
    console.log(jessicaTookWood);
    console.log(jessicaTookWater);
    jessicaOption2 = true;
    pop();
}

function tradeWithJessica1() {
    push();
    let f = round(jessicaTookFish * 0.1);
    let w = round(jessicaTookWood * 0.1);
    let wa = round(jessicaTookWater * 0.1);

    if (goldCoins >= 10 && f + w + wa > 0) {
        goldCoins -= 10;
        jessicaCoins += 10;

        tradedFish += f;
        tradedWood += w;
        tradedWater += wa;

        jessicaTookFish -= f;
        jessicaTookWood -= w;
        jessicaTookWater -= wa;

        fishTaken += f;
        woodTaken += w;
        waterTaken += wa;
    }
    console.log(jessicaTookFish);
    console.log(jessicaTookWood);
    console.log(jessicaTookWater);
    pop();
    jessicaOption1 = true;
}

function askingTradeJessicaSign() {
    push();
    translate(1229, height / 2 - 200);
    strokeWeight(3);
    stroke(117, 66, 2);
    fill(140, 83, 13);
    rect(0, 0, 270, 220, 10);
    textAlign(CENTER, CENTER);

    strokeWeight(2);
    stroke(69, 40, 3);
    fill(69, 40, 3, 70);
    rect(5, 55, 260, 50, 5);
    rect(5, 132, 260, 50, 5);

    noStroke();
    fill(255);
    textSize(20);
    text("Trade with Jessica", 145, 40);
    textSize(18);
    text("10x", 25, 83);
    drawCoin(70, 103, 0.8)
    fill(255, 204, 20);
    circle(145, 15, 20);
    drawFishIcon(175, 83, 0.55, 145);
    drawWaterIcon(203, 88, 0.5);
    drawFireWood(137, -3, 0.55);

    fill(255);
    text("or", 140, 120);
    text("10% of", 40, 157);
    drawFishIcon(85, 160, 0.55, 145);
    drawWaterIcon(113, 165, 0.5);
    drawFireWood(79, 46, 0.55);

    fill(255, 204, 20);
    text("for 10% of", 113, 83);
    text("for 10x", 198, 157);
    drawCoin(300, 193, 0.8)

    fill(255);
    textSize(13);
    text("option 1: (O)", 90, 205);
    text("option 2: (T)", 190, 205);
    pop();
}

function askingTradeKevinSign() {
    push();
    translate(1229, height / 2 - 200);
    strokeWeight(3);
    stroke(117, 66, 2);
    fill(140, 83, 13);
    rect(0, 0, 270, 220, 10);
    textAlign(CENTER, CENTER);

    strokeWeight(2);
    stroke(69, 40, 3);
    fill(69, 40, 3, 70);
    rect(5, 55, 260, 50, 5);
    rect(5, 132, 260, 50, 5);

    noStroke();
    fill(255);
    textSize(20);
    text("Trade with Kevin", 145, 40);
    textSize(18);
    text("10x", 25, 83);
    drawCoin(70, 103, 0.8)
    fill(188, 20, 255);
    circle(145, 15, 20);
    drawFishIcon(175, 83, 0.55, 145);
    drawWaterIcon(203, 88, 0.5);
    drawFireWood(137, -3, 0.55);

    fill(255);
    text("or", 140, 120);
    text("10% of", 40, 157);
    drawFishIcon(85, 160, 0.55, 145);
    drawWaterIcon(113, 165, 0.5);
    drawFireWood(79, 46, 0.55);

    fill(255, 204, 20);
    text("for 10% of", 113, 83);
    text("for 10x", 198, 157);
    drawCoin(300, 193, 0.8)

    fill(255);
    textSize(13);
    text("option 1: (O)", 90, 205);
    text("option 2: (T)", 190, 205);
    pop();
}

function jessicaNotEnoughSign() {
    push();
    noStroke();
    translate(1280, 405);
    fill(255, 71, 10);
    rect(0, 0, 200, 57, 8);
    textAlign(LEFT, CENTER);
    textSize(14);
    fill(255);
    text("Jessica does not have", 30, 18);
    text("enough resources or coins", 13, 38);
    pop();
}


function kevinNotEnoughSign() {
    push();
    noStroke();
    translate(1280, 405);
    fill(255, 71, 10);
    rect(0, 0, 200, 57, 8);
    textAlign(LEFT, CENTER);
    textSize(14);
    fill(255);
    text("Kevin does not have", 30, 18);
    text("enough resources or coins", 13, 38);
    pop();
}

function tradeKeyPressed() {
    if (keyCode === 74) {                       // J
        jessicaTrade = !jessicaTrade;
        kevinTrade = false;
        showJessicaNotEnough = false;
        showKevinNotEnough = false;
        if (jessicaTrade && !jessicaCanTrade()) {
            showJessicaNotEnough = true;
        }
    }
    else if (keyCode === 75) {                  // K
        kevinTrade = !kevinTrade;
        jessicaTrade = false;
        showJessicaNotEnough = false;
        showKevinNotEnough = false;
        if (kevinTrade && !kevinCanTrade()) {
            showKevinNotEnough = true;
        }
    }
    else if (jessicaTrade) {
        if (keyCode === 79) tradeWithJessica1();   // O
        if (keyCode === 84) tradeWithJessica2();   // T
    }
    else if (kevinTrade) {
        if (keyCode === 79) tradeWithKevin1();     // O
        if (keyCode === 84) tradeWithKevin2();     // T
    }
}