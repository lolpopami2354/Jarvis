const messages = document.getElementById("messages");
const input = document.getElementById("input");


// Send text command
function sendMessage(){

    let text = input.value;

    if(text.trim() === "") return;

    addMessage("You: " + text);

    respond(text);

    input.value="";
}


// Add chat message
function addMessage(text){

    messages.innerHTML += "<p>" + text + "</p>";
    messages.scrollTop = messages.scrollHeight;

}


// JARVIS brain (basic version)
function respond(command){

    command = command.toLowerCase();

    let reply="I am still upgrading my systems, sir.";

    if(command.includes("hello")){
        reply="Hello. All systems are online.";
    }

    else if(command.includes("time")){
        reply="The current time is " + new Date().toLocaleTimeString();
    }

    else if(command.includes("date")){
        reply="Today's date is " + new Date().toLocaleDateString();
    }

    else if(command.includes("who are you")){
        reply="I am JARVIS, your personal artificial intelligence assistant.";
    }


    addMessage("JARVIS: " + reply);

    speak(reply);

}


// Text to speech
function speak(text){

    let speech = new SpeechSynthesisUtterance(text);

    speech.rate = 1;
    speech.pitch = 0.8;

    window.speechSynthesis.speak(speech);

}



// Voice recognition

function listen(){

    const SpeechRecognition =
    window.SpeechRecognition ||
    window.webkitSpeechRecognition;


    if(!SpeechRecognition){
        alert("Voice recognition is not supported in this browser.");
        return;
    }


    let recognition = new SpeechRecognition();

    recognition.start();


    recognition.onstart=function(){
        addMessage("JARVIS: Listening...");
    };


    recognition.onresult=function(event){

        let voiceText =
        event.results[0][0].transcript;


        input.value = voiceText;

        sendMessage();

    };

}
