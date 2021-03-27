//global variables
var secondsLeft = 10; // how much time per question?
var score = 0;
var topics = ["Sports","Movies","Music","Video Games","Cars"];
var levels = ["Easy","Medium","Hard"];
var qindex = 0;
var qnum = 1;

// questions and answers (TEMPORARILY HARDCODED HERE, SHOULD BE READ FROM JSON?)
var questions = [
  { q: "This is Question number 1", a: ["A", "B", "C", "D"], ca: "3" },
  { q: "This is Question number 2", a: ["A", "B", "C", "D"], ca: "2" },
  { q: "This is Question number 3", a: ["A", "B", "C", "D"], ca: "1" },
  { q: "This is Question number 4", a: ["A", "B", "C", "D"], ca: "0" },
//  { q: "This is Question number 5", a: ["A", "B", "C", "D"], ca: "3" },
//  { q: "This is Question number 6", a: ["A", "B", "C", "D"], ca: "2" },
//  { q: "This is Question number 7", a: ["A", "B", "C", "D"], ca: "1" },
//  { q: "This is Question number 8", a: ["A", "B", "C", "D"], ca: "0" },
//  { q: "This is Question number 9", a: ["A", "B", "C", "D"], ca: "3" },
//  { q: "This is Question number 10", a: ["A", "B", "C", "D"], ca: "2" },
];

// identify the divs in the HTML where we will inserting elements
var titlebarEl = document.querySelector("#titlebar");
var countdownEl = document.querySelector("#timer");
var welcomegifEl = document.querySelector("#welcome");  
var playerformEl = document.querySelector("#playerform"); 
var questionsEl = document.querySelector("#questions");
var gifsEl = document.querySelector("#gifs");
var messagesEl = document.querySelector("#messages");
var actionsEl = document.querySelector("#actions");
var resultsEl = document.querySelector("#results");

// create elements
var titleEl = document.createElement("p");
var timeEl = document.createElement("p");
var rulesBtn = document.createElement("button");
var playBtn = document.createElement("button");
//var nameEl = document.createElement("input"); // name gathering placed on hold for v1.0
var topicsEl = document.createElement("select")
var levelsEl = document.createElement("select")
var startBtn = document.createElement("button");
var continueBtn = document.createElement("button");
var finishBtn = document.createElement("button");
var questionTitle = document.createElement("p");
var questionOption1 = document.createElement("button");
var questionOption2 = document.createElement("button");
var questionOption3 = document.createElement("button");
var questionOption4 = document.createElement("button");
var message = document.createElement("p");
var result = document.createElement("p");
var welcomeGif = document.createElement("img");
var winnerGif = document.createElement("img");
var timesupGif = document.createElement("img");
var loserGif = document.createElement("img");
var resultGif = document.createElement("img");

// TEMP classes
rulesBtn.className = "action";
playBtn.className = "action";
startBtn.className = "action";
finishBtn.className = "action";
// nameEl.className = "playerform"; // name gathering placed on hold for v1.0
topicsEl.className = "playerform";
levelsEl.className = "playerform";
continueBtn.className = "action";
questionOption1.className = "answer";
questionOption2.className = "answer";
questionOption3.className = "answer";
questionOption4.className = "answer";

// add texts and values
rulesBtn.textContent = "Rules";
playBtn.textContent = "Play";
startBtn.textContent = "Start";
continueBtn.textContent = "Next";
finishBtn.textContent = "Finish";
// nameEl.placeholder = "Tell us your name and style"; // name gathering placed on hold for v1.0
questionOption1.value = "0";
questionOption2.value = "1";
questionOption3.value = "2";
questionOption4.value = "3";

// TEMP GIFs
welcomeGif.src = "https://thumbs.gfycat.com/PeskyFirmDragon-size_restricted.gif"
welcomeGif.width = "350";
loserGif.src = "https://i.gifer.com/49f1.gif";
loserGif.width = "350";
winnerGif.src = "https://i.gifer.com/2Nli.gif";
winnerGif.width = "350";
timesupGif.src ="https://i.gifer.com/2lwS.gif"
timesupGif.width = "350";
resultGif.src ="https://i.gifer.com/FPB.gif"
resultGif.width = "350";
//confused gif https://i.gifer.com/HyPJ.gif

// Append items to the divs
titlebarEl.appendChild(titleEl);
countdownEl.appendChild(timeEl);
actionsEl.appendChild(rulesBtn);
actionsEl.appendChild(playBtn);
// playerformEl.appendChild(nameEl); // name gathering placed on hold for v1.0
playerformEl.appendChild(topicsEl);
playerformEl.appendChild(levelsEl);
actionsEl.appendChild(startBtn);
actionsEl.appendChild(continueBtn);
questionsEl.appendChild(questionTitle);
questionsEl.appendChild(questionOption1);
questionsEl.appendChild(questionOption2);
questionsEl.appendChild(questionOption3);
questionsEl.appendChild(questionOption4);
messagesEl.appendChild(message);
welcomegifEl.appendChild(welcomeGif);

//Create and append the topics 
for (var i = 0; i < topics.length; i++) {
  var topic = document.createElement("option");
  topic.setAttribute("value",topics[i]);
  topic.text = topics[i];
  topicsEl.appendChild(topic);
}

//Create and append the difficulty levels 
for (var i = 0; i < levels.length; i++) {
  var level = document.createElement("option");
  level.setAttribute("value",levels[i]);
  level.text = levels[i];
  levelsEl.appendChild(level);
}

// Start Game
function welcome() {
  titleEl.textContent = "LET'S PLAY A GAME!";
  playerformEl.hidden = true;
  questionsEl.hidden = true;
  startBtn.className = "hidden";
  continueBtn.className = "hidden";
}

welcome();

// when play button is clicked... 
playBtn.addEventListener("click", function () {
  titleEl.textContent = "PICK A TOPIC AND DIFFICULTY LEVEL...";
  rulesBtn.className = "hidden";
  playBtn.className = "hidden";
  startBtn.className = "action";
  welcomegifEl.hidden = true;
  playerformEl.hidden = false;
})

//When start button is clicked... 
startBtn.addEventListener("click", function () {
// name gathering placed on hold for v1.0
//  if (nameEl.value === "") {
//    alert("You must type in your name");
//    return;
//  }
//  else {
//  localStorage.setItem("player", nameEl.value);
  startBtn.className = "hidden";
  playerformEl.hidden = true;
  questionsEl.hidden = false;
  askQuestion(qindex);
//  }
})

// Ask a question from the array 
function askQuestion(qindex) {
  if (questions.length < qnum){
    gameOver();
  }
  else{
  questionTitle.textContent = questions[qindex].q;
  questionOption1.textContent = questions[qindex].a[0];
  questionOption2.textContent = questions[qindex].a[1];
  questionOption3.textContent = questions[qindex].a[2];
  questionOption4.textContent = questions[qindex].a[3];
  titleEl.textContent = "Question "+ qnum;
  qnum++;
  startTimer();
  }
}

// ask next question
continueBtn.addEventListener("click", function () {
    gifsEl.hidden = true;
    questionsEl.hidden = false;
    continueBtn.hidden = true;
    gifsEl.innerHTML ="";
    qindex++;
    askQuestion(qindex);
})

// Timer and timed control events
function startTimer() {
  interval = setInterval(function () {
    secondsLeft--;
    timeLeft();
    if (secondsLeft <= 0) {
      clearInterval(interval);
      timesUp();
      secondsLeft = 10;
    }
    else if (secondsLeft < 5) {
      hurryUp();
    }
  }, 1000);
}

// functions called by startTimer above
function timeLeft() {
  timeEl.textContent = "TIME: " + secondsLeft;
}

function hurryUp() {
  message.hidden = false;
  message.textContent = "HURRY! HURRY! HURRY!";
  message.className = "blink";
}

function timesUp() {
  questionsEl.hidden = true;
  message.hidden = true;
  gifsEl.hidden = false;
  gifsEl.appendChild(timesupGif);
  continueBtn.hidden = false;
  continueBtn.className = "action";
}

function gameOver() {
  resultsEl.appendChild(result);
  result.textContent = "Your score was " + score
  resultsEl.appendChild(resultGif);
  questionsEl.hidden = true;
  message.hidden = true;
  gifsEl.hidden = true;
  continueBtn.hidden = true;
  continueBtn.className = "hidden";
  actionsEl.appendChild(finishBtn);
}

finishBtn.addEventListener("click", function () {
  location.reload();
})

// Check answers
questionsEl.addEventListener("click", function (event) {
  if (event.target.matches(".answer")) {
  var buttonClicked = event.target.value;
  //for (var i = 0; i < questions.length; i++) {
    if (buttonClicked === questions[qindex].ca){
      clearInterval(interval);
      message.hidden = true;
      secondsLeft = 10;
      questionsEl.hidden = true;
      gifsEl.hidden = false;
      gifsEl.appendChild(winnerGif);
      continueBtn.hidden = false;
      continueBtn.className = "action";
      score++;
    }
    else {
      clearInterval(interval);
      message.hidden = true;
      secondsLeft = 10;
      questionsEl.hidden = true;
      gifsEl.hidden = false;
      gifsEl.appendChild(loserGif);
      continueBtn.hidden = false;
      continueBtn.className = "action";
    }

//}
}

})