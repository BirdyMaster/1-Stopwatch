const startBtn = document.querySelector('.startBtn')
const stopBtn = document.querySelector('.stopBtn')
const resetBtn = document.querySelector('.resetBtn')
const timeText = document.querySelector('.timeText')


let start = 0;
let stop;
let timePassed = 0
let timerDisplay;

startBtn.addEventListener('click', () => {

    if (!timePassed == 0) {start = new Date().getTime() - (- timePassed)}
    // if the clock has been stopped before, use this value as starting point

        else {start = new Date().getTime()} 
        //if not, the starting point is NOW
    
    stop = undefined
    //reset the stop-point, which is redefined on every stop
    // if this is defined, nothing funny happens on second click

    timerDisplay = setInterval(() => {
        let timeGap = new Date().getTime() - start
        timeText.textContent = (timeGap / 1000).toFixed(2)
    }, 50)
})


stopBtn.addEventListener('click', () => {
    if (!stop) {
        stop = new Date().getTime()
        timePassed = start - stop
    } 
    clearInterval(timerDisplay, 50)
})


resetBtn.addEventListener('click', () => {
    stop = undefined
    start = undefined
    timePassed = 0
    timeText.textContent = 0
    clearInterval(timerDisplay, 50)
})

