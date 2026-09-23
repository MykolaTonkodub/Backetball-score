let homeTotalScore = 0
let guestTotalScore = 0
let Homescore = document.getElementById("score-1")
let Guestscore = document.getElementById("score-2")


//Home
function homeBonus1() {

    homeTotalScore += 1
    Homescore.textContent = homeTotalScore
console.log(homeTotalScore)
}

function homeBonus2() {

    homeTotalScore += 2
    Homescore.textContent = homeTotalScore
console.log(homeTotalScore)
}

function homeBonus3() {

    homeTotalScore += 3
    Homescore.textContent = homeTotalScore
console.log(homeTotalScore)
}


//Guest
function GuestBonus1() {

    guestTotalScore += 1
    Guestscore.textContent = guestTotalScore
console.log(guestTotalScore)
}

function GuestBonus2() {

    guestTotalScore += 2
    Guestscore.textContent = guestTotalScore
console.log(guestTotalScore)
}

function GuestBonus3() {

    guestTotalScore += 3
    Guestscore.textContent = guestTotalScore
console.log(guestTotalScore)
}

function clearHome() {

    homeTotalScore = 0

    Homescore.textContent = homeTotalScore
}

function clearGuest() {

    guestTotalScore = 0
    Guestscore.textContent = guestTotalScore
}


