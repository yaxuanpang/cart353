let state = 'NOON'
let dayCount = 0;

let noonTimer = 0;
let afternoonTimer = 0;
let sunsetTimer = 0;
let duskTimer = 0;
let nightTimer = 0;
let midnightTimer = 0;
let postNightTimer = 0;
let sunriseTimer = 0;
let dawnTimer = 0;
let morningTimer = 0;

let playerFish = 0;
let playerWood = 0;
let playerWater = 0;

function drawDayCycle() {
    console.log("DAY: " + dayCount);
    if (state === 'NOON') {
        showNoon = true;
        showAfternoon = false;
        showSunset = false;
        showDusk = false;
        showNight = false;
        nightTime = false;
        showPostNight = false;
        showDawn = false;
        showSunrise = false;
        showMorning = false;
        if (millis() - noonTimer > 15000) {
            state = 'AFTERNOON'
            afternoonTimer = millis();
        }
    }
    else if (state === 'AFTERNOON') {
        showNoon = false;
        showAfternoon = true;
        showSunset = false;
        showDusk = false;
        showNight = false;
        nightTime = false;
        showPostNight = false;
        showDawn = false;
        showSunrise = false;
        showMorning = false;
        if (millis() - afternoonTimer > 15000) {
            state = 'SUNSET'
            sunsetTimer = millis();
        }

    }
    else if (state === 'SUNSET') {
        showNoon = false;
        showAfternoon = false;
        showSunset = true;
        showDusk = false;
        showNight = false;
        nightTime = false;
        showPostNight = false;
        showDawn = false;
        showSunrise = false;
        showMorning = false;
        if (millis() - sunsetTimer > 15000) {
            state = 'DUSK'
            duskTimer = millis();
        }
    }
    else if (state === 'DUSK') {
        showNoon = false;
        showAfternoon = false;
        showSunset = false;
        showDusk = true;
        showNight = false;
        nightTime = false;
        showPostNight = false;
        showDawn = false;
        showSunrise = false;
        showMorning = false;
        if (millis() - duskTimer > 15000) {
            state = 'NIGHT'
            nightTimer = millis();
        }
    }
    else if (state === 'NIGHT') {
        showNoon = false;
        showAfternoon = false;
        showSunset = false;
        showDusk = false;
        showNight = true;
        nightTime = false;
        showPostNight = false;
        showDawn = false;
        showSunrise = false;
        showMorning = false;
        if (millis() - nightTimer > 15000) {
            state = 'MIDNIGHT'
            midnightTimer = millis();
        }
    }
    else if (state === 'MIDNIGHT') {
        showNoon = false;
        showAfternoon = false;
        showSunset = false;
        showDusk = false;
        showNight = false;
        nightTime = true;
        showPostNight = false;
        showDawn = false;
        showSunrise = false;
        showMorning = false;
        if (millis() - midnightTimer > 15000) {
            state = 'POSTNIGHT'
            postNightTimer = millis();
        }
    }
    else if (state === 'POSTNIGHT') {
        showNoon = false;
        showAfternoon = false;
        showSunset = false;
        showDusk = false;
        showNight = false;
        nightTime = false;
        showPostNight = true;
        showDawn = false;
        showSunrise = false;
        showMorning = false;
        if (millis() - postNightTimer > 15000) {
            state = 'DAWN'
            dawnTimer = millis();
            playerFish = 0;
            playerWood = 0;
            playerWater = 0;
            dayCount++;
        }
    }
    else if (state === 'DAWN') {
        showNoon = false;
        showAfternoon = false;
        showSunset = false;
        showDusk = false;
        showNight = false;
        nightTime = false;
        showPostNight = false;
        showDawn = true;
        showSunrise = false;
        showMorning = false;
        if (millis() - dawnTimer > 15000) {
            state = 'SUNRISE'
            sunriseTimer = millis();
        }
    }
    else if (state === 'SUNRISE') {
        showNoon = false;
        showAfternoon = false;
        showSunset = false;
        showDusk = false;
        showNight = false;
        nightTime = false;
        showPostNight = false;
        showDawn = false;
        showSunrise = true;
        showMorning = false;
        if (millis() - sunriseTimer > 15000) {
            state = 'MORNING'
            morningTimer = millis();
        }
    }
    else if (state === 'MORNING') {
        showNoon = false;
        showAfternoon = false;
        showSunset = false;
        showDusk = false;
        showNight = false;
        nightTime = false;
        showPostNight = false;
        showDawn = false;
        showSunrise = false;
        showMorning = true;
        if (millis() - morningTimer > 15000) {
            state = 'NOON'
            noonTimer = millis();
        }
    }
}