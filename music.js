const audio = new Audio('cornfield.mp3');

audio.loop = true;

const savedTime =
localStorage.getItem(
'cornfieldTime'
);

if(savedTime){

audio.currentTime =
parseFloat(savedTime);

}

const wasPlaying =
localStorage.getItem(
'cornfieldPlaying'
);

if(wasPlaying==="true"){

audio.play().catch(()=>{});

}

window.startMusic =
function(){

audio.play();

localStorage.setItem(

'cornfieldPlaying',

'true'

);

};

setInterval(()=>{

localStorage.setItem(

'cornfieldTime',

audio.currentTime

);

},500);
