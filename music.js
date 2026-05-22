let audio =
document.getElementById(
"globalMusic"
);

if(!audio){

audio =
document.createElement(
"audio"
);

audio.id =
"globalMusic";

audio.src =
"cornfield.mp3";

audio.loop =
true;

document.body.appendChild(
audio
);

}

const savedTime =
localStorage.getItem(
"musicTime"
);

if(savedTime){

audio.currentTime =
parseFloat(
savedTime
);

}

const wasPlaying =
localStorage.getItem(
"musicPlaying"
);

if(wasPlaying==="true"){

audio.play()
.catch(()=>{});

}

setInterval(()=>{

localStorage.setItem(

"musicTime",

audio.currentTime

);

},500);
