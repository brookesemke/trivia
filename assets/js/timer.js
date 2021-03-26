var secondsLeft = 10; // set to 30 for final commit
var titlebarEl = document.querySelector("#titlebar");
var countdownEl = document.querySelector("#timer");
var welcomegifEl = document.querySelector("#welcome");  
var playerformEl = document.querySelector("#playerform"); 
var questionsEl = document.querySelector("#questions");
var gifsEl = document.querySelector("#gifs");
var messagesEl = document.querySelector("#messages");
var actionsEl = document.querySelector("#actions");

//create
var titleEl = document.createElement("p");
var timeEl = document.createElement("p");
var rulesBtn = document.createElement("button");
var playBtn = document.createElement("button");
var startBtn = document.createElement("button");
var continueBtn = document.createElement("button");
var questionTitle = document.createElement("p");
var questionOption1 = document.createElement("button");
var questionOption2 = document.createElement("button");
var questionOption3 = document.createElement("button");
var questionOption4 = document.createElement("button");
var loserGif = document.createElement("img");
var message = document.createElement("p");

//add classes for example:
//timeEl.className = "prettypink";
rulesBtn.className = "action";
playBtn.className = "action";
startBtn.className = "action";
continueBtn.className = "action";
questionOption1.className = "answer";
questionOption2.className = "answer";
questionOption3.className = "answer";
questionOption4.className = "answer";

//add texts
rulesBtn.textContent = "Rules";
playBtn.textContent = "Play";
startBtn.textContent = "Start";
continueBtn.textContent = "Next";
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
actionsEl.appendChild(rulesBtn);
actionsEl.appendChild(playBtn);
actionsEl.appendChild(startBtn);
actionsEl.appendChild(continueBtn);

questionsEl.appendChild(questionTitle);
questionsEl.appendChild(questionOption1);
questionsEl.appendChild(questionOption2);
questionsEl.appendChild(questionOption3);
questionsEl.appendChild(questionOption4);
messagesEl.appendChild(message);

// Function to start timer
function startTimer() {
  interval = setInterval(function () {
    secondsLeft--;
    timeLeft();
    if (secondsLeft <= 0) {
      clearInterval(interval);
      message.hidden = true;
      continueBtn.className = "action";
      endGame();
    }
    else if (secondsLeft < 5) {
      message.textContent = "HURRY! HURRY! HURRY!";
    }

  }, 1000);
}

// Update seconds
function timeLeft() {
  timeEl.textContent = "TIME: " + secondsLeft;
}

function hurryUp() {
  questionsEl.hidden = true;
  gifsEl.appendChild(loserGif);
}

function endGame() {
  questionsEl.hidden = true;
  gifsEl.appendChild(loserGif);
}

//When play button is clicked... 
playBtn.addEventListener("click", function () {
  rulesBtn.className = "hidden";
  playBtn.className = "hidden";
  startBtn.className = "action";
  welcomegifEl.hidden = true;
  playerformEl.hidden = false;
  titleEl.textContent = "OUR NEXT PLAYER IS...";
})

//When start button is clicked... 
startBtn.addEventListener("click", function () {
  startTimer();
  startBtn.className = "hidden";
  playerformEl.hidden = true;
  questionsEl.hidden = false;
  titleEl.textContent = "QUESTION #1";
})

// Update titlebar
function welcome() {
  titleEl.textContent = "LET'S PLAY A GAME!";
  playerformEl.hidden = true;
  questionsEl.hidden = true;
  startBtn.className = "hidden";
  continueBtn.className = "hidden";
}

welcome();

