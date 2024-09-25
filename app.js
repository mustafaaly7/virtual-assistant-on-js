let btn = document.querySelector("#btn")
let content = document.querySelector("#content")
let voice = document.getElementById("voice")

const speak = (text) => {
    let text_speech = new SpeechSynthesisUtterance(text)
    text_speech.volume = 1
    text_speech.rate = 1
    text_speech.pitch = 1
    // text_speech.lang ="hi-GB"
    window.speechSynthesis.speak(text_speech)

}

const wish = () => {
    let day = new Date()
    let hours = day.getHours()
    // console.log(hours);
    if (hours > 5 && hours < 12) {
        speak("goodMorning")
    }
    if (hours > 12 && hours < 16) {
        speak("Good afternoon")
    }
    if (hours > 16 && hours < 19) {
        speak("Good evening")
    }

    if (hours > 19 && hours < 24) {
        speak("Good night")
    }

}


wish()
window.addEventListener("load", () => {
    wish()
})


let speechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
let recognition = new speechRecognition()
recognition.onresult = ((event) => {
    let currentIndex = event.resultIndex
    let transcript = event.results[currentIndex][0].transcript
    console.log(transcript);
    content.innerText = transcript
    takeCommand(transcript.toLowerCase())
})


btn.addEventListener("click", () => {
    recognition.start()
    btn.style.display = "none"
    voice.style.display = "block"

})


const takeCommand = (message) => {
    btn.style.display = "flex"
    voice.style.display = "none"
    if (message.includes("hello") || message.includes("hey")) {
        speak("Hello, How can i Help You?")
    } else if (message.includes("who are you")) {
        // window.open("https://www.youtube.com/")
        speak("Im your virtual assistant ")
    } else if (message.includes("open youtube") || message.includes("youtube")) {
        speak("opening youtube")
        window.open("https://youtube.com")
    } else if (message.includes("open facebook") || message.includes("facebook")) {
        speak("opening facebook")
        window.open("https://facebook.com")
    } else if (message.includes("open instagram") || message.includes("instagram")) {
        speak("opening instagram")
        window.open("https://instagram.com")
    } else if (message.includes("open google") || message.includes("google")) {
        speak("opening google")
        window.open("https://google.com")
    } else if (message.includes("open calculator") || message.includes("calculator")) {
        speak("opening calculator")
        window.open("calculator://")
    }else {
        speak(`here's what i found related to ${message}`)
        window.open(`https://www.google.com/search?q=${message}` )
    }


}