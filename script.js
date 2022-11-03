window.onload = function () {
  
    var seconds = 00; 
    var tens = 00; 
    var appendTens = document.getElementById("tens")
    var appendSeconds = document.getElementById("seconds")
    var buttonStart = document.getElementById('button-start');
    var buttonStop = document.getElementById('button-stop');
    var buttonReset = document.getElementById('button-reset');
    var buttonLap = document.getElementById('button-lap');
    var lapList = document.getElementById('laps');
    var lapCounter = 1;
    var Interval ;
    const audio = new Audio();
    audio.src = "audio/clocksound.mp3";
  
    buttonStart.onclick = function() {

      audio.play();
      clearInterval(Interval);
      Interval = setInterval(startTimer, 10);
    }
    
    buttonStop.onclick = function() {
        audio.play();
         clearInterval(Interval);
    }
    
  
    buttonReset.onclick = function() {
       audio.play();
       clearInterval(Interval);
       tens = "00";
       seconds = "00";
       appendTens.innerHTML = tens;
       appendSeconds.innerHTML = seconds;
       lapList.innerHTML = "";
       lapCounter = 1;
       storeLaps();
    }
    buttonLap.onclick = function () {
        audio.play();
        lapList.innerHTML += '<table><tr> <span class="lap-seconds"><th>Time ' 
        + appendSeconds.innerHTML + '</span>:<span class="lap-tens">' 
        + appendTens.innerHTML + '</span></th> <th>Lap Number  ' + lapCounter + '</th>'+'</tr></table>';

        
        lapCounter++;
        storeLaps();
    }
     
    
    function startTimer () {
      tens++; 
      
      if(tens <= 9){
        appendTens.innerHTML = "0" + tens;
      }
      
      if (tens > 9){
        appendTens.innerHTML = tens;
        
      } 
      
      if (tens > 99) {
        console.log("seconds");
        seconds++;
        appendSeconds.innerHTML = "0" + seconds;
        tens = 0;
        appendTens.innerHTML = "0" + 0;
      }
      
      if (seconds > 9){
        appendSeconds.innerHTML = seconds;
      }
    
    }
    
    function storeLaps() {
        window.localStorage.myLaps = lapList.innerHTML;
    }

    function getLaps() {
        lapList.innerHTML = window.localStorage.myLaps;
    }
    getLaps();

  }
//start of dark theme code 
const toggledark = document.getElementById('toggle-dark');
const body = document.body;

toggledark.addEventListener('input', e => {
    const isChecked = e.target.checked;

    if (isChecked) {
        body.classList.add('dark-theme');
    } else {
        body.classList.remove('dark-theme');
    }
}
//end of dark theme-code



);

  