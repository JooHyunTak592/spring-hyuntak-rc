// 현재 크롬 브라우저 지원
// 다른 브라우저는 구글 TTS 구입하면 지원됨

let counter = 0;
let timerTime = [3000, 1500];

function runSpeechRecognition() {
	
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


function rcCarOrderFn(str){
	console.log(str);
}









