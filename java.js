const startBtn = document.querySelector('.startBtn')
const stopBtn = document.querySelector('.stopBtn')
const resetBtn = document.querySelector('.resetBtn')
const timeText = document.querySelector('.timeText')
const warningText = document.querySelector('.warning')

let start = 0;
let stop;
let timePassed = 0
let timerDisplay;
let timeRunning = false

startBtn.addEventListener('click', () => {
    
    if (timeRunning === false) {

        if (timePassed == 0) {
            start = new Date().getTime()
            //if this is the first click on the start button, the starting point is NOW
            // if the clock has been stopped before, use this value as starting point
        } else if (!timePassed == 0) {
            start = new Date().getTime() - (- timePassed)} 
            //if not, create a new date and subtract it with the already runned time

        timeRunning = true
        stop = undefined
        //reset the stop-point, which is redefined on every stop
        // if this is defined, nothing funny happens on second click

        timerDisplay = setInterval(() => {
            let timeGap = new Date().getTime() - start
            timeText.textContent = (timeGap / 1000).toFixed(2)
        }, 50)

        timeText.classList.remove('yellowBack')
        timeText.classList.add('greenBack')
        warningText.style.opacity = '0%'

    } else if (!timeRunning === false) {

        warningText.style.opacity = '100%'
        warningText.textContent = "Time already running"
        setTimeout(() => {
            warningText.style.opacity = '0%'
        }, 1500);
    }
})


stopBtn.addEventListener('click', () => {
   
    if (!stop && timeRunning === true) {

        stop = new Date().getTime()
        timePassed = start - stop
        timeRunning = false
        clearInterval(timerDisplay, 50)

        timeText.classList.add('yellowBack')
        timeText.classList.remove('greenBack')
        warningText.style.opacity = '0%'

    } else if (!timeRunning === true) {

        warningText.style.opacity = '100%'
        warningText.textContent = "Time already stopped"
        setTimeout(() => {
            warningText.style.opacity = '0%'
        }, 1500);
    }
    
})


resetBtn.addEventListener('click', () => {

    if (timeRunning == false && (!stop) ) {
        console.log('work');
        warningText.style.opacity = '100%'
        warningText.textContent = "Time is already 0.00"
        setTimeout(() => {
            warningText.style.opacity = '0%'
        }, 1500);
    } else {
        stop = undefined
        start = undefined
        timePassed = 0
        timeText.textContent = "0.00"
        timeRunning = false
        clearInterval(timerDisplay, 50)

        timeText.classList.remove('yellowBack', 'greenBack')
        warningText.style.opacity = '0%'
    }
    

    

    
})

