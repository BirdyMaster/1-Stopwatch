const startBtn = document.querySelector('.startBtn')
const stopBtn = document.querySelector('.stopBtn')
const resetBtn = document.querySelector('.resetBtn')

const timeText = document.querySelector('.timeText')

let startingPoint = 0;
let stoppingPoint;
let time = 0
let timeInSecods = 0;

startBtn.addEventListener('click', () => {

    if (!time == 0) { // if the clock has been stopped, use this value as starting point
        startingPoint = new Date().getTime() - (- time)
        console.log("Started at " + timeInSecods);

    } else { //if not, the starting point is NOW
        console.log("Started at " + startingPoint)
        startingPoint = new Date().getTime()}
        stoppingPoint = undefined
        dispalyTime()
        
    }
)

stopBtn.addEventListener('click', () => {
    if (!stoppingPoint) {
        stoppingPoint = new Date().getTime()
        calculateDifference()
    }
    console.log("Stoped " + timeInSecods);
    dispalyTime()
})

resetBtn.addEventListener('click', () => {

    stoppingPoint = undefined
    startingPoint = 0
    time = 0
    timeInSecods = 0
    console.log('Reset');
    dispalyTime()
    
})


function calculateDifference() {
    time = startingPoint - stoppingPoint
    timeInSecods = Math.abs((Number((time / 1000).toFixed(2))))
}

function dispalyTime() {
    timeText.textContent = timeInSecods
}
