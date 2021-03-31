function checkApi() {   
 
  function makeHappy() {
    
    var happyGif = Math.floor(Math.random()*7)
    if (happyGif === 0) { happyGifRandom = "winner-winner-chicken-dinner" }
    if (happyGif === 1) { happyGifRandom = "we-are-the-champions" }
    if (happyGif === 2) { happyGifRandom = "go-girl" }
    if (happyGif === 3) { happyGifRandom = "who-da-man" }
    if (happyGif === 4) { happyGifRandom = "what-what" }
    if (happyGif === 5) { happyGifRandom = "boo-ya" }
    if (happyGif === 6) { happyGifRandom = "fo-sho" }
    if (happyGif === 7) { happyGifRandom = "you-da-bomb" }

   fetch ('https://api.giphy.com/v1/gifs/search?q=' + happyGifRandom + '&rating=g&api_key=yhspGREo8A4hP2vDCFvpE5d93COdKp5R')

   .then(function(response) {
       return response.json()
       .then(function(happyGif) {
         console.log(response)
           //var to make a happy gif, should iterate to the next 'happy' gif in the array afterwards can test by repeating the variable, it does work
           let i = Math.floor( Math.random() * 50)
           var happyGifOne = (happyGif.data[i].images.original.url)
           winnerGif.setAttribute('src', happyGifOne)
           winnerGif.width = "350";      
       })
   })
  }

  function makeSad() {

    var sadGif = Math.round(Math.random()*9)
    if (sadGif === 0) { sadGifRandom = "epic-fail" }
    if (sadGif === 1) { sadGifRandom = "loooser" }
    if (sadGif === 2) { sadGifRandom = "slimed" }
    if (sadGif === 3) { sadGifRandom = "better-luck-next-time" }
    if (sadGif === 4) { sadGifRandom = "KO" }
    if (sadGif === 5) { sadGifRandom = "OMG" }
    if (sadGif === 6) { sadGifRandom = "oh-no" }
    if (sadGif === 7) { sadGifRandom = "you-wish" }
    if (sadGif === 8) { sadGifRandom = "you-stupid" }
    if (sadGif === 9) { sadGifRandom = "but-why" }

   fetch ('https://api.giphy.com/v1/gifs/search?q=' + sadGifRandom + '&rating=g&api_key=yhspGREo8A4hP2vDCFvpE5d93COdKp5R')

   .then(function(response) {
       return response.json()
       .then(function(sadGif) {
           //var to make a sad gif, should iterate to the next 'sad' gif in the array afterwards can test by repeating the variable, it does work
           let i = Math.floor( Math.random() * 50)
           var sadGifOne = (sadGif.data[i].images.original.url)
           i++;
           loserGif.setAttribute('src', sadGifOne);
           loserGif.width = "350";
       })
   })
  }
//not currently using a celebrate gif, replaced with charles norris
/*      fetch ('https://api.giphy.com/v1/gifs/search?q=celebration&rating=g&api_key=yhspGREo8A4hP2vDCFvpE5d93COdKp5R')

   .then(function(response) {
       return response.json()
       .then(function(celebrateGif) {
           console.log(celebrateGif)

           //ended up randomizing all so the resulting gif isnt the same every time
           let i = Math.floor( Math.random() * 50)
           var celebrateGifOne = (celebrateGif.data[i].images.original.url)
           console.log(celebrateGifOne)
       })
   })
*/
      var welcomeGifA = Math.round(Math.random()*3)
        if (welcomeGifA === 0) { welcomeGifRandom = "knowledge" }
        if (welcomeGifA === 1) { welcomeGifRandom = "on-your-mark" }
        if (welcomeGifA === 2) { welcomeGifRandom = "lets-go" }
        if (welcomeGifA === 3) { welcomeGifRandom = "you-got-this" }
    console.log(welcomeGifA)


    fetch ('https://api.giphy.com/v1/gifs/search?q=' + welcomeGifRandom + '&rating=g&api_key=yhspGREo8A4hP2vDCFvpE5d93COdKp5R')

   .then(function(response) {
       return response.json()
       .then(function(playGif) {
           let i = Math.floor( Math.random() * 50)
           var playGifOne = (playGif.data[i].images.original.url)
           welcomeGif.setAttribute('src', playGifOne);               
           welcomeGif.width = "350";
       })
   })

   fetch ('https://api.giphy.com/v1/gifs/search?q=chuck-norris&rating=g&api_key=yhspGREo8A4hP2vDCFvpE5d93COdKp5R')

   .then(function(response) {
       return response.json()
       .then(function(chuckGif) {
           let i = Math.floor( Math.random() * 50)
           var chuckGifOne = (chuckGif.data[i].images.original.url)
           resultGif.setAttribute('src', chuckGifOne);               
           resultGif.width = "350";
       })
   })




//global variables
var secondsLeft = 10; // how much time per question?
var score = 0;
var topics = ["Sports","Movies","Music","Video Games","Cars"];
var levels = ["Easy","Medium","Hard"];


var qindex = 0;
var qnum = 1;



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

// Append items to the divs
titlebarEl.appendChild(titleEl);
countdownEl.appendChild(timeEl);
actionsEl.appendChild(rulesBtn);
actionsEl.appendChild(playBtn);
// playerformEl.appendChild(nameEl); // name gathering placed on hold for v1.0

actionsEl.appendChild(startBtn);
actionsEl.appendChild(continueBtn);

messagesEl.appendChild(message);
welcomegifEl.appendChild(welcomeGif);



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

var topicsEl = document.createElement("select")
var levelsEl = document.createElement("select")

playerformEl.appendChild(topicsEl);
playerformEl.appendChild(levelsEl);

topicsEl.className = "playerform";
levelsEl.className = "playerform";

//added IDs to differentiate the dropdowns
topicsEl.setAttribute('id', 'topicField')
levelsEl.setAttribute('id', 'levelField')

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

//When start button is clicked... 
startBtn.addEventListener("click", function () {

startBtn.className = "hidden";
playerformEl.hidden = true;
questionsEl.hidden = false;

 
//created an array of only the selected option
var topicChoice = [];
for (var option of document.getElementById('topicField').options) {
  if (option.selected) {
    topicChoice.push(option.value)
  }
}

//pulled the value of the selected option array
var topicPicked = topicChoice[0]

if (topicPicked === "Sports") {
  var cat = "&category=21"
}
if (topicPicked === "Movies") {
  var cat = "&category=11"
}
if (topicPicked === "Music") {
  var cat = "&category=12"
}
if (topicPicked === "Video Games") {
  var cat = "&category=15"
}
if (topicPicked === "Cars") {
  var cat = "&category=28"
}
console.log(cat)

//created an array of only the selected option
var levelChoice = [];
for (var option of document.getElementById('levelField').options) {
  if (option.selected) {
    levelChoice.push(option.value)
  }
}

//pulled the value of the selected option array
var levelPicked = levelChoice[0]

if (levelPicked === "Easy") {
  var diff = "&difficulty=easy"
}
if (levelPicked === "Medium") {
  var diff = "&difficulty=medium"
}
if (levelPicked === "Hard") {
  var diff = "&difficulty=hard"
}
console.log(diff)

//https://opentdb.com/api.php?amount=10&category=21&difficulty=easy&type=multiple  api for all choices
// cat 21 is sports
// cat 11 is movies
// cat 15 is vidya games
// cat 28 is cars
// cat 12 is music


fetch ('https://opentdb.com/api.php?amount=10' + cat + diff + '&type=multiple')

.then(function(response) {
  return response.json()
  .then(function(triviaData) {
      console.log(triviaData)

      //var for question

      var questionOne = JSON.stringify(triviaData.results[0].question)
      var parseOne = questionOne.replace(/&#039;/g, "\'");
      var questionOne = parseOne.replace(/&quot;/g,"\"" );

      var questionTwo = JSON.stringify(triviaData.results[1].question)
      var parseTwo = questionTwo.replace(/&#039;/g, "\'");
      var questionTwo = parseTwo.replace(/&quot;/g,"\"" );

      var questionThree = JSON.stringify(triviaData.results[2].question)
      var parseThree = questionThree.replace(/&#039;/g, "\'");
      var questionThree = parseThree.replace(/&quot;/g,"\"" );

      var questionFour = JSON.stringify(triviaData.results[3].question)
      var parseFour = questionFour.replace(/&#039;/g, "\'");
      var questionFour = parseFour.replace(/&quot;/g,"\"" );

      var questionFive = JSON.stringify(triviaData.results[4].question)
      var parseFive = questionFive.replace(/&#039;/g, "\'");
      var questionFive = parseFive.replace(/&quot;/g,"\"" );

      var questionSix = JSON.stringify(triviaData.results[5].question)
      var parseSix = questionSix.replace(/&#039;/g, "\'");
      var questionSix = parseSix.replace(/&quot;/g,"\"" );

      var questionSeven = JSON.stringify(triviaData.results[6].question)
      var parseSeven = questionSeven.replace(/&#039;/g, "\'");
      var questionSeven = parseSeven.replace(/&quot;/g,"\"" );

      var questionEight = JSON.stringify(triviaData.results[7].question)
      var parseEight = questionEight.replace(/&#039;/g, "\'");
      var questionEight = parseEight.replace(/&quot;/g,"\"" );

      var questionNine = JSON.stringify(triviaData.results[8].question)
      var parseNine = questionNine.replace(/&#039;/g, "\'");
      var questionNine = parseNine.replace(/&quot;/g,"\"" );

      var questionTen = JSON.stringify(triviaData.results[9].question)
      var parseTen = questionTen.replace(/&#039;/g, "\'");
      var questionTen = parseTen.replace(/&quot;/g,"\"" );

      //var for answer

      var answerOne = (triviaData.results[0].correct_answer)
      var answerTwo = (triviaData.results[1].correct_answer)
      var answerThree = (triviaData.results[2].correct_answer)
      var answerFour = (triviaData.results[3].correct_answer)
      var answerFive = (triviaData.results[4].correct_answer)
      var answerSix = (triviaData.results[5].correct_answer)
      var answerSeven = (triviaData.results[6].correct_answer)
      var answerEight = (triviaData.results[7].correct_answer)
      var answerNine = (triviaData.results[8].correct_answer)
      var answerTen = (triviaData.results[9].correct_answer)
      

      //var for difficulty

      var difficultyOne = (triviaData.results[0].difficulty)
      console.log(difficultyOne)

      //var for category

      var categoryOne = (triviaData.results[0].category)
      console.log(categoryOne)

      //var for type, i.e. multiple or boolean

      var typeOne = (triviaData.results[0].type)
      console.log(typeOne)

      //var for incorrect answers, one result for T/F, 3 results for multiple choice, displays array

      var incAnsOne = (triviaData.results[0].incorrect_answers)
      var incAnsTwo = (triviaData.results[1].incorrect_answers)
      var incAnsThree = (triviaData.results[2].incorrect_answers)
      var incAnsFour = (triviaData.results[3].incorrect_answers)
      var incAnsFive = (triviaData.results[4].incorrect_answers)
      var incAnsSix = (triviaData.results[5].incorrect_answers)
      var incAnsSeven = (triviaData.results[6].incorrect_answers)
      var incAnsEight = (triviaData.results[7].incorrect_answers)
      var incAnsNine = (triviaData.results[8].incorrect_answers)
      var incAnsTen = (triviaData.results[9].incorrect_answers)

      
     
      //pushes the correct answer into the incAnsOne array with the incorrect answers
      //sorts it, randomizing where the correct answer appears in the array
      incAnsOne.push(answerOne)
      incAnsOne.sort()
      incAnsTwo.push(answerTwo)
      incAnsTwo.sort()
      incAnsThree.push(answerThree)
      incAnsThree.sort()
      incAnsFour.push(answerFour)
      incAnsFour.sort()
      incAnsFive.push(answerFive)
      incAnsFive.sort()
      incAnsSix.push(answerSix)
      incAnsSix.sort()
      incAnsSeven.push(answerSeven)
      incAnsSeven.sort()
      incAnsEight.push(answerEight)
      incAnsEight.sort()
      incAnsNine.push(answerNine)
      incAnsNine.sort()
      incAnsTen.push(answerTen)
      incAnsTen.sort()
      console.log(incAnsOne)
      correctAnsArr = []
      correctAnsArr.push(answerOne)
      console.log(correctAnsArr)

      questionsEl.appendChild(questionTitle);
      questionsEl.appendChild(questionOption1);
      questionsEl.appendChild(questionOption2);
      questionsEl.appendChild(questionOption3);
      questionsEl.appendChild(questionOption4);

       // questions and answers (TEMPORARILY HARDCODED HERE, SHOULD BE READ FROM JSON?)
      //this pulls the questions and lists the answers into the game, correct answer does not work however
       var questions = [
      { q: questionOne, a: incAnsOne, ca: correctAnsArr },
      { q: questionTwo, a: incAnsTwo, ca: correctAnsArr },
      { q: questionThree, a: incAnsThree, ca: correctAnsArr },
      { q: questionFour, a: incAnsFour, ca: correctAnsArr },
      { q: questionFive, a: incAnsFive, ca: correctAnsArr },
      { q: questionSix, a: incAnsSix, ca: correctAnsArr },
      { q: questionSeven, a: incAnsSeven, ca: correctAnsArr },
      { q: questionEight, a: incAnsEight, ca: correctAnsArr },
      { q: questionNine, a: incAnsNine, ca: correctAnsArr },
      { q: questionTen, a: incAnsTen, ca: correctAnsArr },

    ];

    // Ask a question from the array 
    function askQuestion(qindex) {
      if (questions.length <= qnum){
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

    askQuestion(qindex);

    continueBtn.addEventListener("click", function () {
      questionsEl.hidden = false;
      continueBtn.hidden = true;
      gifsEl.innerHTML ="";
      qindex++;
      askQuestion(qindex);
      
  })
  

   // Check answers
  questionsEl.addEventListener("click", function (event) {
  if (event.target.matches(".answer")) {
  var buttonClicked = event.target.value;
  console.log(buttonClicked);
  //console.log(incAnsOne.length);
  //console.log(incAnsOne);
  //console.log(correctAnsArr);
  //console.log(incAnsOne.indexOf(correctAnsArr));
  var rightAnsOne = JSON.stringify(incAnsOne.indexOf(answerOne));
  var rightAnsTwo = JSON.stringify(incAnsTwo.indexOf(answerTwo));
  var rightAnsThree = JSON.stringify(incAnsThree.indexOf(answerThree));
  var rightAnsFour = JSON.stringify(incAnsFour.indexOf(answerFour));
  var rightAnsFive = JSON.stringify(incAnsFive.indexOf(answerFive));
  var rightAnsSix = JSON.stringify(incAnsSix.indexOf(answerSix));
  var rightAnsSeven = JSON.stringify(incAnsSeven.indexOf(answerSeven));
  var rightAnsEight = JSON.stringify(incAnsEight.indexOf(answerEight));
  var rightAnsNine = JSON.stringify(incAnsNine.indexOf(answerNine));
  var rightAnsTen = JSON.stringify(incAnsTen.indexOf(answerTen));
 

  //for (var i = 0; i < questions.length; i++) {
  if (buttonClicked === rightAnsOne && qnum === 2 || buttonClicked === rightAnsTwo && qnum === 3 ||buttonClicked === rightAnsThree && qnum === 4 || buttonClicked === rightAnsFour && qnum === 5 || buttonClicked === rightAnsFive && qnum === 6 || buttonClicked === rightAnsSix && qnum === 7 || buttonClicked === rightAnsSeven && qnum === 8 || buttonClicked === rightAnsEight && qnum === 9 || buttonClicked === rightAnsNine && qnum === 10 || buttonClicked === rightAnsTen && qnum === 11  ){
    clearInterval(interval);
    message.hidden = true;
    secondsLeft = 10;
    questionsEl.hidden = true;
    gifsEl.hidden = false;
    gifsEl.innerHTML = " ";
    makeHappy();
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
    makeSad();
    gifsEl.appendChild(loserGif);
    continueBtn.hidden = false;
    continueBtn.className = "action";
  }


}
})
}  
)}
)
})
})



// ask next question

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
var timeIsUpGif = Math.round(Math.random()*5)
if (timeIsUpGif === 0) { timeIsUpGifRandom = "hurry-the-f-up" }
if (timeIsUpGif === 1) { timeIsUpGifRandom = "im-waiting" }
if (timeIsUpGif === 2) { timeIsUpGifRandom = "any-day-now" }
if (timeIsUpGif === 3) { timeIsUpGifRandom = "try-again" }
if (timeIsUpGif === 4) { timeIsUpGifRandom = "please-continue" }
if (timeIsUpGif === 5) { timeIsUpGifRandom = "to-the-left" }
  fetch ('https://api.giphy.com/v1/gifs/search?q=' + timeIsUpGifRandom + '&rating=g&api_key=yhspGREo8A4hP2vDCFvpE5d93COdKp5R')
  .then(function(response) {
    return response.json()
    .then(function(timeGif) {
        let i = Math.floor( Math.random() * 50)
        var timeGifOne = (timeGif.data[i].images.original.url)
        timesupGif.setAttribute('src', timeGifOne);               
        timesupGif.width = "350";
    })
  });
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


}