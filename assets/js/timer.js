var secondsLeft = 5; // set to 30 for final commit

var titlebarEl = document.querySelector("#titlebar");
var countdownEl = document.querySelector("#timer");

var rulesEl = document.querySelector("#rules");
var playEl = document.querySelector("#play");
var startEl = document.querySelector("#start");

var welcomegifEl = document.querySelector("#welcome");  

var playerformEl = document.querySelector("#playerform"); 

var questionsEl = document.querySelector("#questions");
var gifsEl = document.querySelector("#gifs");

//create
var titleEl = document.createElement("p");
var timeEl = document.createElement("p");
var rulesBtn = document.createElement("button");
var playBtn = document.createElement("button");
var startBtn = document.createElement("button");
var questionTitle = document.createElement("p");
var questionOption1 = document.createElement("button");
var questionOption2 = document.createElement("button");
var questionOption3 = document.createElement("button");
var questionOption4 = document.createElement("button");
var loserGif = document.createElement("img");

//add classes for example:
//timeEl.className = "prettypink";
questionOption1.className = "button";
questionOption2.className = "button";
questionOption3.className = "button";
questionOption4.className = "button";

//add texts
rulesBtn.textContent = "Rules";
playBtn.textContent = "Play";
startBtn.textContent = "Start";
loserGif.src = "https://i.gifer.com/49f1.gif";
loserGif.width = "350";

//hardoced temporarily for testing
questionTitle.textContent = "Trivia Question?"
questionOption1.textContent = "1 wrong answer";
questionOption2.textContent = "2 wrong answer";
questionOption3.textContent = "3 wrong answer";
questionOption4.textContent = "4 correct answer";

//append items
titlebarEl.appendChild(titleEl);
countdownEl.appendChild(timeEl);
rulesEl.appendChild(rulesBtn);
playEl.appendChild(playBtn);
startEl.appendChild(startBtn);

questionsEl.appendChild(questionTitle);
questionsEl.appendChild(questionOption1);
questionsEl.appendChild(questionOption2);
questionsEl.appendChild(questionOption3);
questionsEl.appendChild(questionOption4);

// Function to start timer
function startTimer() {
  interval = setInterval(function () {
    secondsLeft--;
    timeLeft();
    if (secondsLeft <= 0) {
      clearInterval(interval);
      endGame();
    }
  }, 1000);
}



// Update seconds
function timeLeft() {
  timeEl.textContent = "TIME: " + secondsLeft;
}

function endGame() {
  questionsEl.hidden = true;
  gifsEl.appendChild(loserGif);
}

//When play button is clicked... 
playBtn.addEventListener("click", function () {
  rulesBtn.hidden = true;
  playBtn.hidden = true;
  startBtn.hidden = false;
  welcomegifEl.hidden = true;
  playerformEl.hidden = false;
  titleEl.textContent = "OUR NEXT PLAYER IS...";
})

//When start button is clicked... 
startBtn.addEventListener("click", function () {
  startTimer();
  startBtn.hidden = true;
  playerformEl.hidden = true;
  questionsEl.hidden = false;
  titleEl.textContent = "QUESTION #1";
})

// Update titlebar
function welcome() {
  titleEl.textContent = "LET'S PLAY A GAME!";
  startBtn.hidden = true;
  playerformEl.hidden = true;
  questionsEl.hidden = true;
}


welcome();

