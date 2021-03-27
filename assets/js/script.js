function checkApi() {

   
 
      function makeHappy() {
       fetch ('https://api.giphy.com/v1/gifs/search?q=happy&rating=g&api_key=yhspGREo8A4hP2vDCFvpE5d93COdKp5R')
 
       .then(function(response) {
           return response.json()
           .then(function(happyGif) {
               //var to make a happy gif, should iterate to the next 'happy' gif in the array afterwards can test by repeating the variable, it does work
               let i = Math.floor( Math.random() * 50)
               var happyGifOne = (happyGif.data[i].images.original.url)
               winnerGif.setAttribute('src', happyGifOne)
               winnerGif.width = "350";      
           })
       })
      }

      function makeSad() {
       fetch ('https://api.giphy.com/v1/gifs/search?q=sad&rating=g&api_key=yhspGREo8A4hP2vDCFvpE5d93COdKp5R')
 
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
       
       fetch ('https://api.giphy.com/v1/gifs/search?q=knowledge&rating=g&api_key=yhspGREo8A4hP2vDCFvpE5d93COdKp5R')
 
       .then(function(response) {
           return response.json()
           .then(function(playGif) {
               let i = Math.floor( Math.random() * 50)
               var playGifOne = (playGif.data[i].images.original.url)
               welcomeGif.setAttribute('src', playGifOne);               
               welcomeGif.width = "350";
           })
       })
 
       fetch ('https://api.giphy.com/v1/gifs/search?q=out-of-time&rating=g&api_key=yhspGREo8A4hP2vDCFvpE5d93COdKp5R')
 
       .then(function(response) {
           return response.json()
           .then(function(timeGif) {
               let i = Math.floor( Math.random() * 50)
               var timeGifOne = (timeGif.data[i].images.original.url)
               timesupGif.setAttribute('src', timeGifOne);               
               timesupGif.width = "350";
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
 
 // questions and answers (TEMPORARILY HARDCODED HERE, SHOULD BE READ FROM JSON?)
 var questions = [
   { q: "This is Question number 1", a: ["A", "B", "C", "D"], ca: "3" },
   { q: "This is Question number 2", a: ["A", "B", "C", "D"], ca: "2" },
   { q: "This is Question number 3", a: ["A", "B", "C", "D"], ca: "1" },
 //  { q: "This is Question number 4", a: ["A", "B", "C", "D"], ca: "0" },
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
 questionsEl.appendChild(questionTitle);
 questionsEl.appendChild(questionOption1);
 questionsEl.appendChild(questionOption2);
 questionsEl.appendChild(questionOption3);
 questionsEl.appendChild(questionOption4);
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
    askQuestion(qindex);
     
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
          
          var questionOne = (triviaData.results[0].question)
          console.log(questionOne)
  
          //var for answer
  
          var answerOne = (triviaData.results[0].correct_answer)
          console.log(answerOne)
  
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
          console.log(incAnsOne)
  
          
  
          /*
          or it could be done as 
  
          var incAnsOneA = (triviaData.results[0].incorrect_answers[0])
          console.log(incAnsOne)
  
          var incAnsOneB = (triviaData.results[0].incorrect_answers[1])
          console.log(incAnsOne)
  
          var incAnsOneC = (triviaData.results[0].incorrect_answers[2])
          console.log(incAnsOne)
  
          */
      }  
  )}
  )
 
   
 //  }
 })

 
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
       gifsEl.hidden = false;
       makeSad();
       gifsEl.appendChild(loserGif);
       continueBtn.hidden = false;
       continueBtn.className = "action";
     }
 
 //}
 }
 
 })
 }