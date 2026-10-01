let homeTotalScore = 0
let guestTotalScore = 0
const homeScore = document.getElementById("home-score")
const guestScore = document.getElementById("guest-score")
const homeBonus1 = document.getElementById("home-bonus-point1")
const homeBonus2 = document.getElementById("home-bonus-point2")
const homeBonus3 = document.getElementById("home-bonus-point3")
const guestBonus1 = document.getElementById("guest-bonus-point1")
const guestBonus2 = document.getElementById("guest-bonus-point2")
const guestBonus3 = document.getElementById("guest-bonus-point3")


//Home
function addHomeScore(points){
homeTotalScore += points
homeScore.textContent = homeTotalScore
} 
homeBonus1.addEventListener("click", () => addHomeScore(1))
homeBonus2.addEventListener("click", () => addHomeScore(2))
homeBonus3.addEventListener("click", () => addHomeScore(3))


homeScore.addEventListener ("click", function clearHome() {

    homeTotalScore = 0

    homeScore.textContent = homeTotalScore
})



//Guest
function addGuestScore(points){
guestTotalScore += points
guestScore.textContent = guestTotalScore
} 
guestBonus1.addEventListener("click", () => addGuestScore(1))
guestBonus2.addEventListener("click", () => addGuestScore(2))
guestBonus3.addEventListener("click", () => addGuestScore(3))


guestScore.addEventListener ("click", function clearguest() {

    guestTotalScore = 0
    guestScore.textContent = guestTotalScore
})


