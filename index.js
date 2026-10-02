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



function addPoints(points, team){
if (team === "home") {
homeTotalScore += points
homeScore.textContent = homeTotalScore
} else {
guestTotalScore += points
guestScore.textContent = guestTotalScore
}
}
homeBonus1.addEventListener("click", () => addPoints(1, "home"))
homeBonus2.addEventListener("click", () => addPoints(2, "home"))
homeBonus3.addEventListener("click", () => addPoints(3, "home"))

guestBonus1.addEventListener("click", () => addPoints(1, "guest"))
guestBonus2.addEventListener("click", () => addPoints(2, "guest"))
guestBonus3.addEventListener("click", () => addPoints(3, "guest"))

function clear(team) {
    if (team === "home") {
        homeTotalScore = 0
        homeScore.textContent = homeTotalScore
    } else {
        guestTotalScore = 0
        guestScore.textContent = guestTotalScore
    }
}

homeScore.addEventListener("dblclick", () => clear("home"))
guestScore.addEventListener("dblclick", () => clear("guest"))
