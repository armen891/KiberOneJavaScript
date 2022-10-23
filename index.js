let time = document.querySelector('.timeText')
let dateParagraph = document.querySelector('.date')
let greetingBlock = document.querySelector('.greeting')
let buttonLeft = document.querySelector('.left')
console.log(buttonLeft)
let buttonRight = document.querySelector('.right')
console.log(buttonRight)
let randomNumber = getInt(11)

buttonLeft.onclick = function () {
    randomNumber = randomNumber - 1
    setBg()
    if (randomNumber == 1) {
        randomNumber = 11
    }
}

buttonRight.onclick = function () {
    randomNumber = randomNumber + 1
    setBg()
    if (randomNumber == 10) {
        randomNumber = 1
    }
}

function showTime () {
    const date = new Date()
    let currentTime = date.toLocaleTimeString()
    time.textContent = currentTime

    const options = {month: 'long', day: 'numeric'};
    const currentDate = date.toLocaleDateString('In-in', options);
    console.log(currentDate);
    dateParagraph.textContent = currentDate
    greeting ()

    setTimeout(showTime, 1000)
}
function getHour () {
    const date = new Date()
    const hours = date.getHours();
    return hours
}
console.log(getHour())

function getTimeOfDay (){
    if (getHour() >= 0 && getHour() < 6) {
        return 'Good Night';
    }
    if (getHour() >= 6 && getHour() < 12) {
        return 'Good Morning';
    }
    if (getHour() >= 12 && getHour() < 18) {
        return 'Good Day';
    }
    if (getHour() >= 18 && getHour() <= 23) {
        return 'Good Evening';
    }
}
console.log(getTimeOfDay())

function greeting () {
    let textGreeting = getTimeOfDay();
    greetingBlock.textContent = textGreeting
}

showTime()
showTime()

function getInt (max) {
    let number = Math.floor(Math.random() * max)
    if (number == 0) {
        return 1
    }
    return number
}
console.log(getInt(11))

function setBg () {
    const img = new Image();
    img.src = `https://raw.githubusercontent.com/armen891/KiberOneJavaScript/main/bg${randomNumber}.jpg`;
    img.onload = () => {
        document.body.style.backgroundImage = `url(${img.src})`
    }
}
setBg()
