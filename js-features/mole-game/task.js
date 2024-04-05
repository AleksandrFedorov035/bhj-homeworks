const dead = document.getElementById("dead")
const lost = document.getElementById("lost")

function getHole(index) {
    return document.getElementById(`hole${index}`)
}

for (let i = 1; i < 10; i++) {
    let hole = getHole(i)
    hole.addEventListener("click", () => {
        if(hole.className.includes("hole_has-mole")) {
            dead.textContent++;
        } else {
            lost.textContent++;
        }
        if (dead.textContent == 10) {
            alert("Вы победили :)")
            dead.textContent = 0;
            lost.textContent = 0;
        } else if(lost.textContent == 5) {
            alert("Вы проиграли :(")
            dead.textContent = 0;
            lost.textContent = 0;
        }
    })
}