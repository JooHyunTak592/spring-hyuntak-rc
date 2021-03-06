// 현재 크롬 브라우저 지원
// 다른 브라우저는 구글 TTS 구입하면 지원됨

let counter = 0;
let timerTime = [3000, 1500];

function runSpeechRecognition() {
	
	if(musicIsOn == true){
		musicIsOn = false;
		audioObj.pause();
	}
	
    // get output div reference
    var output = document.getElementById("voice-result");

    // get action element reference
    var voiceArea = document.getElementById("voice-area");
 	var menuArea = document.getElementById("menu-area");

    // new speech recognition object
    var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
    var recognition = new SpeechRecognition();

    // This runs when the speech recognition service starts
    recognition.onstart = function() {
		voiceArea.className = "active";
		menuArea.className="inactive";
        output.innerHTML = "<small>대사를 말씀해주세요...</small>";
    };
    
    recognition.onspeechend = function() {
        output.innerHTML = "<small>대사 인식이 끝났습니다</small>";
        recognition.stop();
		setTimeout(function(){ 	
		voiceArea.className ="inactive";
		menuArea.className="active";
			}, timerTime[0]);

    }
  
    // This runs when the speech recognition service returns result
    recognition.onresult = function(event) {
        var transcript = event.results[0][0].transcript;
        var confidence = event.results[0][0].confidence;
			
		rcCarOrderFn(transcript);
			
        output.innerHTML = transcript;


    };
  
     // start recognition
     recognition.start();

}


//let ctx = "http://192.168.219.194/";

function rcCarOrderFn(str){
	console.log("받은 값 " + str);
	const myTime = 1500;
	
	
	if(str.includes("쭉") || str.includes("개속") || str.includes("계속") || str.includes("게속")){
		if(str.includes("앞") || str.includes("전진")){
			rcCmdFn("GO");
			console.log("앞으로 갑니다");
		}
		else if(str.includes("왼쪽") || str.includes("좌")){
			rcCmdFn("LEFT");
			console.log("왼쪽으로 갑니다");
		}
		else if(str.includes("오른쪽") || str.includes("우")){
			rcCmdFn("RIGHT");
			console.log("우측로 갑니다");
		}
		else if(str.includes("후진") || str.includes("빽") || str.includes("뒤") || str.include("백") ){
			rcCmdFn("BACK");
			console.log("뒤로가");
		}
	}
	//////////////////
	
	
	
	else if(str.includes("앞") || str.includes("전진")){
		rcCmdFn("GO");
		console.log("앞으로 갑니다");
		setTimeout(function(){ rcCmdFn("STOP"); }, myTime);
	}
	else if(str.includes("왼쪽") || str.includes("좌")){
		rcCmdFn("LEFT");
		console.log("왼쪽으로 갑니다");
		setTimeout(function(){ rcCmdFn("STOP"); }, myTime);
	}
	else if(str.includes("오른쪽") || str.includes("우")){
		rcCmdFn("RIGHT");
		console.log("우측로 갑니다");
		setTimeout(function(){ rcCmdFn("STOP"); }, myTime);
	}
	else if(str.includes("정지")|| str.includes("멈춰") || str.includes("스톱")){
		rcCmdFn("STOP");
		console.log("멈춰");
	}
	else if(str.includes("후진") || str.includes("빽") || str.includes("뒤") || str.includes("백") ){
		rcCmdFn("BACK");
		console.log("뒤로가");
		setTimeout(function(){ rcCmdFn("STOP"); }, myTime);
	}
	else{
		console.log("인식불가");
		console.log(str);
	}
	
	
	
}


//
// AJAX 통신
//

function getContextPath() {
   return window.location.pathname.substring(0, window.location.pathname.indexOf("/",2));
}


function rcCmdFn(str){
	var request = new XMLHttpRequest();
	request.open("Get", getContextPath()+"/api/rc" +"?cmd="+str);
	request.onreadystatechange = afterConnectionFn(request);
	request.send(null);
}



	
function afterConnectionFn(request){
	
	if(request.readyState==4 && request.status==200){

	// 성공시

	}
}






