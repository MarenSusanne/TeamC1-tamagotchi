var num = 0
let seconds = 5
var startButton = document.getElementById("start")
var blood = document.getElementById("giveBlood")
var broccoli = document.getElementById("giveBroccoli")
var bat = document.getElementById("giveBat")
var bone = document.getElementById("giveBone")
var mushroom = document.getElementById("giveMushroom")
var unicorn = document.getElementById("giveUnicorn")
var music =document.getElementById("music")

function load() {
    blood.disabled = true
    broccoli.disabled = true
    bat.disabled = true
    bone.disabled = true
    mushroom.disabled = true
    unicorn.disabled = true
}

function mainload(){
    load()
    title()
}

function starter() {
    startButton.disabled = true
    blood.disabled = false
    broccoli.disabled = false
    bat.disabled = false
    bone.disabled = false
    mushroom.disabled = false
    unicorn.disabled = false
}


function restart() {
    clearInterval(RT)
    clearInterval(RH)
    Defeat()
    Victory()
    seconds = 6
    askForItem()
    timer()
}

function startGame() {
    playmusic()
    askForItem()
    starter()
    timer()
}

function reload() {
    location.reload()
}

function moodChange() {
    if (document.getElementById('happinessBar').value >= 70 && document.getElementById('happinessBar').value < 100) {
        document.getElementById('devilMood').src = 'HappyDemon.png'
    }
    else if (document.getElementById('happinessBar').value < 70 && document.getElementById('happinessBar').value >= 30) {
        document.getElementById('devilMood').src = 'NeutralDemon.png'
    }
    else if (document.getElementById('happinessBar').value < 30 && document.getElementById('happinessBar').value > 0) {
        document.getElementById('devilMood').src = 'AngryDemon.png'
    }
    else if (document.getElementById('happinessBar').value ==0) {
        document.getElementById("answer").innerHTML = "GAME OVER"
        document.getElementById("answer").style.color = "red";
        Defeat()
        load()
    }
    else if (document.getElementById('happinessBar').value == 100) {
        document.getElementById("answer").innerHTML = "YOU'RE HIRED!"
        document.getElementById("answer").style.color = "green";
        Victory()
        load()
    }
}
function Defeat() {
        document.getElementById('devilMood').src = 'DeadDemon.png'
        
        clearInterval(RT)
        clearInterval(RH)
    
}
function Victory() {
        document.getElementById('devilMood').src = 'LoveDemon.png'
        clearInterval(RT)
        clearInterval(RH)
    }


function removeHealth() {
    document.getElementById('happinessBar').value -= 10
    wrongAnswer()
    restart()
}
function addHealth() {
    document.getElementById('happinessBar').value += 5
    restart()
}


function feed(div) {
    let asks = document.getElementById("request").innerHTML
    let give = div.innerHTML
    if (asks === give) {
        rightAnswer()
        addHealth()
    }
    else {
        wrongAnswer()
        removeHealth()
    }
}

function timer() {
    RT = setInterval(removeTime, 990)
    RH = setInterval(removeHealth, 5000)
    moodChange()
    return `${seconds}`;
    
}

function removeTime() {
    seconds--
    document.getElementById('timer').innerHTML = seconds;
    if (seconds == -1) {
        clearInterval(RT)
        clearInterval(RH)
        askForItem()
        seconds = 6
        timer()
        removeHealth()
    }

}

function askForItem() {
    num = Math.floor(Math.random() * 6)

    if (num == 0) {
        document.getElementById("request").innerHTML = "🩸"
    } else if (num == 1) {
        document.getElementById("request").innerHTML = "🥦"
    } else if (num == 2) {
        document.getElementById("request").innerHTML = "🦇"
    } else if (num == 3) {
        document.getElementById("request").innerHTML = "🦴"
    } else if (num == 4) {
        document.getElementById("request").innerHTML = "🍄"
    } else {
        document.getElementById("request").innerHTML = "🦄"
    }
}


function wrongAnswer() {
    num = Math.floor(Math.random() * 6)
    if (num == 0) {
        document.getElementById("answer").innerHTML = "Bad idea fucker"
    } else if (num == 1) {
        document.getElementById("answer").innerHTML = "You shithead"
    } else if (num == 2) {
        document.getElementById("answer").innerHTML = "You're going to hell"
    } else if (num == 3) {
        document.getElementById("answer").innerHTML = "DUMBFUCK"
    } else if (num == 4) {
        document.getElementById("answer").innerHTML = "Eat shit jackass"
    } else {
        document.getElementById("answer").innerHTML = "You are going into the pot soon"
    }
}

function rightAnswer() {
    num = Math.floor(Math.random() * 6)
    if (num == 0) {
        document.getElementById("answer").innerHTML = "Ohh I like this"
    } else if (num == 1) {
        document.getElementById("answer").innerHTML = "Good job"
    } else if (num == 2) {
        document.getElementById("answer").innerHTML = "You're good"
    } else if (num == 3) {
        document.getElementById("answer").innerHTML = "Thanks"
    } else if (num == 4) {
        document.getElementById("answer").innerHTML = "How's minimum wage sound?"
    } else {
        document.getElementById("answer").innerHTML = "You're better than my ex-wife!"
    }
}

function playmusic() {
    music.play();
    music.volume = 0.1;
}

function title(){
    num = Math.floor(Math.random() * 3)
    if (num == 0) {
        document.getElementById("title").innerHTML = "My little Devil"
        document.title = "My little Devil"
    } else if (num == 1){ 
        document.getElementById("title").innerHTML = "Devil chef" 
        document.title = "Devil chef" 
    } else {
        document.getElementById("title").innerHTML = "Fell's kitchen" 
        document.title = "Fell's kitchen" 
    }
}