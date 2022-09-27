var startBtn = document.querySelector("#start");
var viewHighScoresLink = document.querySelector("#viewHighScoresLink");
var timeRemaining = document.querySelector("#timeRemaining");
var timerEl = document.getElementById("countdown");
var quiz = document.querySelector("#quiz");
var option = document.querySelector(".option");
var question = document.querySelector("#question");
var choices = document.querySelector("#choices");
var optionA = document.querySelector("#A");
var optionB = document.querySelector("#B");
var optionC = document.querySelector("#C");
var optionD = document.querySelector("#D");
var allDone = document.querySelector("#allDone");
var goBackBtn = document.querySelector("#goBack");
var highScoresBtn = document.querySelector("#highScores");
var opener = document.querySelector("#opener");
var quizContainer = document.querySelector("#quizContainer");
var scores = document.querySelector("#scores");
scores.style.display = "none";
quizContainer.style.display = "none";
startBtn.addEventListener("click", startQuiz);

function startQuiz() {
  quizContainer.style.display = "block";
  opener.style.display = "none";
  beginQuestion();
}

let multipleChoice = [
  {
    question:
      "A very useful tool used during development and debugging for printing content to the debugger is:",
    choiceA: "JavaScript",
    choiceB: "terminal/bash",
    choiceC: "for loops",
    choiceD: "console.log",
    correctAnswer: "console.log",
  },

  {
    question: "Arrays in JavaScript can be used to store _______.",
    choiceA: "numbers and strings",
    choiceB: "other arrays",
    choiceC: "booleans",
    choiceD: "all of the above",
    correctAnswer: "all of the above",
  },

  {
    question:
      "String values must be enclosed within ______ when being assigned to variables.:",
    choiceA: "commas",
    choiceB: "curly brackets",
    choiceC: "quotes",
    choiceD: "parenthesis",
    correctAnswer: "quotes",
  },

  {
    question: "Commonly used data types do not include:",
    choiceA: "strings",
    choiceB: "booleans",
    choiceC: "alerts",
    choiceD: "numbers",
    correctAnswer: "alerts",
  },

  {
    question: "The condition in an if/else statement is enclosed with ______:",
    choiceA: "quotes",
    choiceB: "curly brackets",
    choiceC: "parenthesis",
    choiceD: "square brackets",
    correctAnswer: "curly brackets",
  },
];

let lastQuestion = multipleChoice.length - 1;
let currentQuestion = 0;

function beginQuestion() {
  question.innerHTML = "<p>" + multipleChoice[currentQuestion].question + "</p";
  optionA.innerHTML = multipleChoice[currentQuestion].choiceA;
  optionB.innerHTML = multipleChoice[currentQuestion].choiceB;
  optionC.innerHTML = multipleChoice[currentQuestion].choiceC;
  optionD.innerHTML = multipleChoice[currentQuestion].choiceD;
  optionA.addEventListener("click", checkAnswer);
  optionB.addEventListener("click", checkAnswer);
  optionC.addEventListener("click", checkAnswer);
  optionD.addEventListener("click", checkAnswer);
}
//check answer/next question

function checkAnswer(event) {
  var choosen = event.target.textContent;
  if (choosen == multipleChoice[currentQuestion].correctAnswer) {
    // console.log("correct");
    if (choosen == multipleChoice[currentQuestion].correctAnswer) {
      alert("Good Job!");
      currentQuestion++;

    } else if (choosen !== multipleChoice[currentQuestion].correctAnswer) {
      //console.log("wrong");
      alert("Wrong Answer!");
      currentQuestion++;
    }
  }
}
for(var i=0; i < multipleChoice.length; i++) {


  if (currentQuestion < lastQuestion) {
    currentQuestion++;
    beginQuestion();

  } else if ((currentQuestion = lastQuestion)) {
    scores.textContent = "Score" + timeRemaining;
  }
}

//Timer that counts down from 75
function countdown() {
  var timeRemaining = 75;

  var timeInterval = setInterval(function () {
    if (timeRemaining > 1) {
      timerEl.textContent = timeRemaining + "seconds left";
      timeRemaining--;
    } else if (timeRemaining === 1) {
      timerEl.textContent = timeRemaining + "second left";
      timeRemaining--;
    } else if (timeRemaining === 0) {
      clearInterval(timeInterval);
      timerEl.textContent = "";
      //start score function
    }
  }, 1000);
}

countdown();
