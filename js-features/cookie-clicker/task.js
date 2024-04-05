const clickerCounter = document.getElementById("clicker__counter")
const cookie = document.getElementById("cookie")
const SpeedAvg = document.getElementById("SpeedClick")
let Time = Date.now();

cookie.onclick = () => {
    let TimeDifference = Date.now() - Time;
    clickerCounter.textContent++;
    cookie.width = 200;
    if(clickerCounter.textContent % 2 !== 0) {
        cookie.width = 150;
    }

    SpeedAvg.textContent = ((clickerCounter.textContent / TimeDifference) * 1000).toFixed(2);
    console.log(TimeDifference);
}
