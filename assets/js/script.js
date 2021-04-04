function checkApi() {

  /* -------------------------------
  Create the GIFs using GIPHY's API 
  ---------------------------------- */

  // Welcome Gif
  var welcomeGifA = Math.round(Math.random() * 9)
  if (welcomeGifA === 0) { welcomeGifRandom = "knowledge" }
  if (welcomeGifA === 1) { welcomeGifRandom = "on-your-mark" }
  if (welcomeGifA === 2) { welcomeGifRandom = "lets-go" }
  if (welcomeGifA === 3) { welcomeGifRandom = "you-got-this" }
  if (welcomeGifA === 4) { welcomeGifRandom = "think-about-it" }
  if (welcomeGifA === 5) { welcomeGifRandom = "calculating" }
  if (welcomeGifA === 6) { welcomeGifRandom = "bring-it-on" }
  if (welcomeGifA === 7) { welcomeGifRandom = "lets-do-it" }
  if (welcomeGifA === 8) { welcomeGifRandom = "get-ready" }
  if (welcomeGifA === 9) { welcomeGifRandom = "press-start" }

  fetch('https://api.giphy.com/v1/gifs/search?q=' + welcomeGifRandom + '&rating=g&api_key=yhspGREo8A4hP2vDCFvpE5d93COdKp5R')

    .then(function (response) {
      return response.json()
        .then(function (playGif) {
          let i = Math.floor(Math.random() * 50)
          var playGifOne = (playGif.data[i].images.original.url)
          welcomeGif.setAttribute('src', playGifOne);
          welcomeGif.setAttribute('class', 'tall380');
        })
    })

  // Correct Answer Gif
  function makeHappy() {
    var happyGif = Math.floor(Math.random() * 9)
    if (happyGif === 0) { happyGifRandom = "winner-winner-chicken-dinner" }
    if (happyGif === 1) { happyGifRandom = "we-are-the-champions" }
    if (happyGif === 2) { happyGifRandom = "go-girl" }
    if (happyGif === 3) { happyGifRandom = "who-da-man" }
    if (happyGif === 4) { happyGifRandom = "celebration" }
    if (happyGif === 5) { happyGifRandom = "boo-ya" }
    if (happyGif === 6) { happyGifRandom = "fo-sho" }
    if (happyGif === 7) { happyGifRandom = "you-da-bomb" }
    if (happyGif === 8) { happyGifRandom = "well-done" }
    if (happyGif === 9) { happyGifRandom = "good-job" }

    fetch('https://api.giphy.com/v1/gifs/search?q=' + happyGifRandom + '&rating=g&api_key=yhspGREo8A4hP2vDCFvpE5d93COdKp5R')

      .then(function (response) {
        return response.json()
          .then(function (happyGif) {
            let i = Math.floor(Math.random() * 50)
            var happyGifOne = (happyGif.data[i].images.original.url)
            winnerGif.setAttribute('src', happyGifOne)
            winnerGif.setAttribute('class', 'tall380');
          })
      })
  }

  // Incorrect Answer Gif
  function makeSad() {
    var sadGif = Math.round(Math.random() * 9)
    if (sadGif === 0) { sadGifRandom = "epic-fail" }
    if (sadGif === 1) { sadGifRandom = "loser" }
    if (sadGif === 2) { sadGifRandom = "slimed" }
    if (sadGif === 3) { sadGifRandom = "thumbs-down" }
    if (sadGif === 4) { sadGifRandom = "not-really" }
    if (sadGif === 5) { sadGifRandom = "OMG-no" }
    if (sadGif === 6) { sadGifRandom = "oh-no" }
    if (sadGif === 7) { sadGifRandom = "you-wish" }
    if (sadGif === 8) { sadGifRandom = "you-stupid" }
    if (sadGif === 9) { sadGifRandom = "no" }

    fetch('https://api.giphy.com/v1/gifs/search?q=' + sadGifRandom + '&rating=g&api_key=yhspGREo8A4hP2vDCFvpE5d93COdKp5R')

      .then(function (response) {
        return response.json()
          .then(function (sadGif) {
            let i = Math.floor(Math.random() * 50)
            var sadGifOne = (sadGif.data[i].images.original.url)
            i++;
            loserGif.setAttribute('src', sadGifOne);
            loserGif.setAttribute('class', 'tall380');
          })
      })
  }

  // Final Gif
  fetch('https://api.giphy.com/v1/gifs/search?q=chuck-norris&rating=g&api_key=yhspGREo8A4hP2vDCFvpE5d93COdKp5R')

    .then(function (response) {
      return response.json()
        .then(function (chuckGif) {
          let i = Math.floor(Math.random() * 50)
          var chuckGifOne = (chuckGif.data[i].images.original.url)
          resultGif.setAttribute('src', chuckGifOne);
          resultGif.setAttribute('class', 'tall380');
        })
    })

  /* -------------------------------
  Identifying and creating core HTML elements 
  ---------------------------------- */

  // global variables
  var secondsLeft = 10; // how much time per question?
  var score = 0;
  var topics = ["Sports", "Movies", "Music", "Video Games", "Cars"];
  var levels = ["Easy", "Medium", "Hard"];
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

  // Classes
  rulesBtn.className = "action";
  playBtn.className = "action";
  startBtn.className = "action";
  finishBtn.className = "action";
  continueBtn.className = "action";
  questionOption1.className = "answer";
  questionOption2.className = "answer";
  questionOption3.className = "answer";
  questionOption4.className = "answer";

  // add texts and values
  rulesBtn.textContent = "RULES!";
  playBtn.textContent = "START!";
  startBtn.textContent = "LET'S GO!";
  continueBtn.textContent = "NEXT";
  finishBtn.textContent = "FINISH";
  questionOption1.value = "0";
  questionOption2.value = "1";
  questionOption3.value = "2";
  questionOption4.value = "3";
  rulesBtn.addEventListener("click", function () {
    window.location = 'rules.html';
  });

  // Append items to the divs
  titlebarEl.appendChild(titleEl);
  countdownEl.appendChild(timeEl);
  actionsEl.appendChild(rulesBtn);
  actionsEl.appendChild(playBtn);
  actionsEl.appendChild(startBtn);
  actionsEl.appendChild(continueBtn);
  messagesEl.appendChild(message);
  welcomegifEl.appendChild(welcomeGif);

  /* -------------------------------
  Game Logic
  ---------------------------------- */

  // Start Game
  function welcome() {
    titleEl.textContent = "LET'S PLAY A GAME!";
    playerformEl.hidden = true;
    questionsEl.innerHTML = "";
    questionsEl.hidden = true;
    startBtn.className = "hidden";
    continueBtn.className = "hidden";
    var refreshLinkEl = document.createElement("a");
    refreshLinkEl.setAttribute("href", "game.html");
    refreshLinkEl.setAttribute("id", "notsure");
    resultsEl.appendChild(refreshLinkEl);
    resultsEl.hidden = false;

    // Show Previous Score or Question 
    var previousScore = localStorage.getItem("previousScore");
    if (!previousScore) {
      refreshLinkEl.textContent = "NOT SURE?";
    }
    else {
      refreshLinkEl.textContent = "Your previous score was " + previousScore;
    }
    
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
    resultsEl.innerHTML = "";
    resultsEl.hidden = true;
    var topicsEl = document.createElement("select")
    var levelsEl = document.createElement("select")
    topicsEl.className = "playerform";
    levelsEl.className = "playerform";
    playerformEl.appendChild(topicsEl);
    playerformEl.appendChild(levelsEl);
    topicsEl.setAttribute('id', 'topicField')
    levelsEl.setAttribute('id', 'levelField')

    // Create and append the topics 
    for (var i = 0; i < topics.length; i++) {
      var topic = document.createElement("option");
      topic.setAttribute("value", topics[i]);
      topic.text = topics[i];
      topicsEl.appendChild(topic);
    }

    // Create and append the difficulty levels 
    for (var i = 0; i < levels.length; i++) {
      var level = document.createElement("option");
      level.setAttribute("value", levels[i]);
      level.text = levels[i];
      levelsEl.appendChild(level);
    }

    // When start button is clicked... 
    startBtn.addEventListener("click", function () {

      startBtn.className = "hidden";
      playerformEl.hidden = true;
      questionsEl.hidden = false;

      // created an array of only the selected option
      var topicChoice = [];
      for (var option of document.getElementById('topicField').options) {
        if (option.selected) {
          topicChoice.push(option.value)
        }
      }

      // pulled the value of the selected option array
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

      // created an array of only the selected option
      var levelChoice = [];
      for (var option of document.getElementById('levelField').options) {
        if (option.selected) {
          levelChoice.push(option.value)
        }
      }

      // pulled the value of the selected option array
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

      /* -------------------------------
      Get questions and answers from TRIVIA's APi's response,
      strip out unicode, build an array and present it in the HTML
      Note: we are not striping out unicode of incorrect answers
      ---------------------------------- */

      fetch('https://opentdb.com/api.php?amount=10' + cat + diff + '&type=multiple')

        .then(function (response) {
          return response.json()
            .then(function (triviaData) {
              //console.log(triviaData)

              // Questions 
              var questionOne = triviaData.results[0].question
              var questionOne = questionOne.replace(/&quot;/g, "\"").replace(/&#039;/g, "\'").replace(/&amp;/g, "&").replace(/&ldquo;/g, "\"").replace(/&rdquo;/g, "\"");

              var questionTwo = triviaData.results[1].question
              var questionTwo = questionTwo.replace(/&quot;/g, "\"").replace(/&#039;/g, "\'").replace(/&amp;/g, "&").replace(/&ldquo;/g, "\"").replace(/&rdquo;/g, "\"");

              var questionThree = triviaData.results[2].question
              var questionThree = questionThree.replace(/&quot;/g, "\"").replace(/&#039;/g, "\'").replace(/&amp;/g, "&").replace(/&ldquo;/g, "\"").replace(/&rdquo;/g, "\"");

              var questionFour = triviaData.results[3].question
              var questionFour = questionFour.replace(/&quot;/g, "\"").replace(/&#039;/g, "\'").replace(/&amp;/g, "&").replace(/&ldquo;/g, "\"").replace(/&rdquo;/g, "\"");

              var questionFive = triviaData.results[4].question
              var questionFive = questionFive.replace(/&quot;/g, "\"").replace(/&#039;/g, "\'").replace(/&amp;/g, "&").replace(/&ldquo;/g, "\"").replace(/&rdquo;/g, "\"");

              var questionSix = triviaData.results[5].question
              var questionSix = questionSix.replace(/&quot;/g, "\"").replace(/&#039;/g, "\'").replace(/&amp;/g, "&").replace(/&ldquo;/g, "\"").replace(/&rdquo;/g, "\"");

              var questionSeven = triviaData.results[6].question
              var questionSeven = questionSeven.replace(/&quot;/g, "\"").replace(/&#039;/g, "\'").replace(/&amp;/g, "&").replace(/&ldquo;/g, "\"").replace(/&rdquo;/g, "\"");

              var questionEight = triviaData.results[7].question
              var questionEight = questionEight.replace(/&quot;/g, "\"").replace(/&#039;/g, "\'").replace(/&amp;/g, "&").replace(/&ldquo;/g, "\"").replace(/&rdquo;/g, "\"");

              var questionNine = triviaData.results[8].question
              var questionNine = questionNine.replace(/&quot;/g, "\"").replace(/&#039;/g, "\'").replace(/&amp;/g, "&").replace(/&ldquo;/g, "\"").replace(/&rdquo;/g, "\"");

              var questionTen = triviaData.results[9].question
              var questionTen = questionTen.replace(/&quot;/g, "\"").replace(/&#039;/g, "\'").replace(/&amp;/g, "&").replace(/&ldquo;/g, "\"").replace(/&rdquo;/g, "\"");

              // Correct answers 
              var answerOne = triviaData.results[0].correct_answer
              var answerOne = answerOne.replace(/&quot;/g, "\"").replace(/&#039;/g, "\'").replace(/&amp;/g, "&").replace(/&ldquo;/g, "\"").replace(/&rdquo;/g, "\"");

              var answerTwo = triviaData.results[1].correct_answer
              var answerTwo = answerTwo.replace(/&quot;/g, "\"").replace(/&#039;/g, "\'").replace(/&amp;/g, "&").replace(/&ldquo;/g, "\"").replace(/&rdquo;/g, "\"");

              var answerThree = triviaData.results[2].correct_answer
              var answerThree = answerThree.replace(/&quot;/g, "\"").replace(/&#039;/g, "\'").replace(/&amp;/g, "&").replace(/&ldquo;/g, "\"").replace(/&rdquo;/g, "\"");

              var answerFour = triviaData.results[3].correct_answer
              var answerFour = answerFour.replace(/&quot;/g, "\"").replace(/&#039;/g, "\'").replace(/&amp;/g, "&").replace(/&ldquo;/g, "\"").replace(/&rdquo;/g, "\"");

              var answerFive = triviaData.results[4].correct_answer
              var answerFive = answerFive.replace(/&quot;/g, "\"").replace(/&#039;/g, "\'").replace(/&amp;/g, "&").replace(/&ldquo;/g, "\"").replace(/&rdquo;/g, "\"");

              var answerSix = triviaData.results[5].correct_answer
              var answerSix = answerSix.replace(/&quot;/g, "\"").replace(/&#039;/g, "\'").replace(/&amp;/g, "&").replace(/&ldquo;/g, "\"").replace(/&rdquo;/g, "\"");

              var answerSeven = triviaData.results[6].correct_answer
              var answerSeven = answerSeven.replace(/&quot;/g, "\"").replace(/&#039;/g, "\'").replace(/&amp;/g, "&").replace(/&ldquo;/g, "\"").replace(/&rdquo;/g, "\"");

              var answerEight = triviaData.results[7].correct_answer
              var answerEight = answerEight.replace(/&quot;/g, "\"").replace(/&#039;/g, "\'").replace(/&amp;/g, "&").replace(/&ldquo;/g, "\"").replace(/&rdquo;/g, "\"");

              var answerNine = triviaData.results[8].correct_answer
              var answerNine = answerNine.replace(/&quot;/g, "\"").replace(/&#039;/g, "\'").replace(/&amp;/g, "&").replace(/&ldquo;/g, "\"").replace(/&rdquo;/g, "\"");

              var answerTen = triviaData.results[9].correct_answer
              var answerTen = answerTen.replace(/&quot;/g, "\"").replace(/&#039;/g, "\'").replace(/&amp;/g, "&").replace(/&ldquo;/g, "\"").replace(/&rdquo;/g, "\"");

              // Incorrect answers
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

              // pushes the correct answer in the incorrect answers array and sorts it A-Z, which makes it random
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

              // write questions and answers in in the HTML
              questionsEl.appendChild(questionTitle);
              questionsEl.appendChild(questionOption1);
              questionsEl.appendChild(questionOption2);
              questionsEl.appendChild(questionOption3);
              questionsEl.appendChild(questionOption4);

              /* -------------------------------
              These come handy to log in the console and troubleshoot
              
              var difficultyOne = (triviaData.results[0].difficulty)
              console.log(difficultyOne)
              var categoryOne = (triviaData.results[0].category)
              console.log(categoryOne)
              var typeOne = (triviaData.results[0].type)
              console.log(typeOne)

              console.log(answerOne)
              console.log(answerTwo)
              console.log(answerThree)
              console.log(answerFour)
              console.log(answerFive)
              console.log(answerSix)
              console.log(answerSeven)
              console.log(answerEight)
              console.log(answerNine)
              console.log(answerTen)

              ---------------------------------- */

              // create array with the questions and answers 
              var questions = [
                { q: questionOne, a: incAnsOne },
                { q: questionTwo, a: incAnsTwo },
                { q: questionThree, a: incAnsThree },
                { q: questionFour, a: incAnsFour },
                { q: questionFive, a: incAnsFive },
                { q: questionSix, a: incAnsSix },
                { q: questionSeven, a: incAnsSeven },
                { q: questionEight, a: incAnsEight },
                { q: questionNine, a: incAnsNine },
                { q: questionTen, a: incAnsTen },

              ];

              // Ask a question from the array 
              function askQuestion(qindex) {
                if (questions.length < qnum) {
                  resultsEl.hidden = false;
                  gameOver();
                }
                else {
                  questionTitle.textContent = questions[qindex].q;
                  questionOption1.textContent = questions[qindex].a[0];
                  questionOption2.textContent = questions[qindex].a[1];
                  questionOption3.textContent = questions[qindex].a[2];
                  questionOption4.textContent = questions[qindex].a[3];
                  titleEl.textContent = "Question " + qnum;
                  qnum++;
                  startTimer();
                  gifsEl.innerHTML = "";
                }
              }

              //ask the first question
              askQuestion(qindex);

              /* -------------------------------
              Define Continue Button and check 
              if answers are correct or not
              ---------------------------------- */

              continueBtn.addEventListener("click", function () {
                winnerGif.setAttribute('src', 'assets/img/loading.gif');
                loserGif.setAttribute('src', 'assets/img/loading.gif');
                timesupGif.setAttribute('src', 'assets/img/loading.gif');
                resultsEl.hidden = true;
                gifsEl.hidden = true;
                gifsEl.innerHTML = "";
                questionsEl.hidden = false;
                continueBtn.hidden = true;
                qindex++;
                askQuestion(qindex);
              })

              // Make integer values into a string so that we can compare them vs the button clicked 
              questionsEl.addEventListener("click", function (event) {
                if (event.target.matches(".answer")) {
                  var buttonClicked = event.target.value;
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

                  // check answers
                  if (buttonClicked === rightAnsOne && qnum === 2 ||
                    buttonClicked === rightAnsTwo && qnum === 3 ||
                    buttonClicked === rightAnsThree && qnum === 4 ||
                    buttonClicked === rightAnsFour && qnum === 5 ||
                    buttonClicked === rightAnsFive && qnum === 6 ||
                    buttonClicked === rightAnsSix && qnum === 7 ||
                    buttonClicked === rightAnsSeven && qnum === 8 ||
                    buttonClicked === rightAnsEight && qnum === 9 ||
                    buttonClicked === rightAnsNine && qnum === 10 ||
                    buttonClicked === rightAnsTen && qnum === 11) {

                    clearInterval(interval);
                    resultsEl.appendChild(result);
                    result.textContent = "YUP";
                    resultsEl.hidden = false;
                    gifsEl.innerHTML = "";
                    message.hidden = true;
                    secondsLeft = 10;
                    questionsEl.hidden = true;
                    makeHappy();
                    gifsEl.appendChild(winnerGif);
                    gifsEl.hidden = false;
                    continueBtn.hidden = false;
                    continueBtn.className = "action";
                    score++;
                  }

                  else {
                    clearInterval(interval);
                    resultsEl.appendChild(result);
                    result.textContent = "NOUP";
                    resultsEl.hidden = false;
                    gifsEl.innerHTML = "";
                    message.hidden = true;
                    secondsLeft = 10;
                    questionsEl.hidden = true;
                    makeSad();
                    gifsEl.appendChild(loserGif);
                    gifsEl.hidden = false;
                    continueBtn.hidden = false;
                    continueBtn.className = "action";
                  }

                }
              })
            }
            )
        }
        )
    })
  })

  /* -------------------------------
  Utilities and functions 
  ---------------------------------- */

  // timer and timed control events
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
    var timeIsUpGif = Math.round(Math.random() * 5)
    if (timeIsUpGif === 0) { timeIsUpGifRandom = "hurry-the-f-up" }
    if (timeIsUpGif === 1) { timeIsUpGifRandom = "im-waiting" }
    if (timeIsUpGif === 2) { timeIsUpGifRandom = "any-day-now" }
    if (timeIsUpGif === 3) { timeIsUpGifRandom = "try-again" }
    if (timeIsUpGif === 4) { timeIsUpGifRandom = "too-late" }
    if (timeIsUpGif === 5) { timeIsUpGifRandom = "to-the-left" }
    fetch('https://api.giphy.com/v1/gifs/search?q=' + timeIsUpGifRandom + '&rating=g&api_key=yhspGREo8A4hP2vDCFvpE5d93COdKp5R')
      .then(function (response) {
        return response.json()
          .then(function (timeGif) {
            let i = Math.floor(Math.random() * 50)
            var timeGifOne = (timeGif.data[i].images.original.url)
            timesupGif.setAttribute('src', timeGifOne);
            timesupGif.setAttribute('class', 'tall380');
          })
      });
    gifsEl.appendChild(timesupGif);
    continueBtn.hidden = false;
    continueBtn.className = "action";
  }

  function gameOver() {
    resultsEl.appendChild(result);
    result.textContent = "Your score was " + score
    localStorage.setItem("previousScore", score);
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