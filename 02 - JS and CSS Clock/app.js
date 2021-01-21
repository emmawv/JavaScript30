const secondHand = document.querySelector('.second-hand')
const minuteHand = document.querySelector('.min-hand')
const hourHand = document.querySelector('.hour-hand')

function setDate() {
    const now = new Date();

    const seconds = now.getSeconds()
    const secondsDeg = ((seconds / 60) * 360) + 90
    secondHand.style.transform = `rotate(${secondsDeg}deg)`

    if (seconds === 0) secondHand.classList.add('fast')
    if (seconds === 1) secondHand.classList.remove('fast')
    
    const minutesDeg = ((now.getMinutes() / 60) * 360) + 90
    minuteHand.style.transform = `rotate(${minutesDeg}deg)`

    const hoursDeg = ((now.getHours() / 12) * 360) + 90
    hourHand.style.transform = `rotate(${hoursDeg}deg)`
}

setInterval(setDate, 1000)