const ctx = window.location.pathname.substring(0, window.location.pathname.indexOf("/",2));
const pageLocation = location.href.substring(0, location.href.indexOf(ctx))
const url = "music.mp3";

audioObj = new Audio(url);

function healingMusic(){
	console.log("h");
	audioObj.play();
}

function logout(){
	window.location = pageLocation + ctx + "/"
}


