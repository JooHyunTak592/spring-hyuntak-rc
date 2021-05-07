
const url = "music.mp3";

audioObj = new Audio(url);
let musicIsOn = false;

function healingMusic(){
	if(musicIsOn == true){
		musicIsOn = false;
		audioObj.pause();
	}
	else{
		musicIsOn = true;
		audioObj.play();
	}
}

function logout(){
	const myCtx = window.location.pathname.substring(0, window.location.pathname.indexOf("/",2));
	const myPageLocation = location.href.substring(0, location.href.indexOf(myCtx))
	window.location = myPageLocation + myCtx + "/"
}


