function sendMessage(){

let input=document.getElementById("input");
let messages=document.getElementById("messages");

let text=input.value;

if(text=="") return;


messages.innerHTML += 
"<p>You: "+text+"</p>";


let reply="I am still learning, sir.";


if(text.toLowerCase().includes("hello")){
    reply="Good day. How may I assist you?";
}


messages.innerHTML += 
"<p>JARVIS: "+reply+"</p>";


input.value="";

}


function listen(){

alert("Voice system initializing...");
}
