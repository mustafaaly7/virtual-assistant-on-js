let btn = document.querySelector("#btn")
let content = document.querySelector("#content")


const speak =(text)=>{
let text_speech = new SpeechSynthesisUtterance(text)
text_speech.volume = 1
text_speech.rate = 1
text_speech.pitch = 1
text_speech.lang ="hi-GB"
window.speechSynthesis.speak(text_speech)

}

const wish = ()=>{
let day = new Date()
let hours = day.getHours()
// console.log(hours);
if(hours > 5 && hours< 12){
    speak("goodMorning")
}
if(hours > 12 && hours< 16){
    speak("Good afternoon")
}
if(hours > 16 && hours< 19){
    speak("Good evening")
}

if(hours > 19 && hours< 24){
    speak("Good night")
}

}


wish()
window.addEventListener("load" , ()=>{
    wish()
})