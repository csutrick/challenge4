var questionBox = document.querySelector("#questionContainer");
var startButton = document.querySelector("#start-but");
var but1 = document.querySelector("#but1");
var but2 = document.querySelector("#but2");
var but3 = document.querySelector("#but3");
var but4 = document.querySelector("#but4");
var result = document.querySelector("#result")
var nameInput = document.querySelector("#scorename")

var time = document.querySelector("#timeEl")
var questionIndex = 0;

// Starting value for timer
var secondsLeft = 60;

// Stores questions
const question = [
    "What is 1 eqaul too",
    "What is 2 eqaul too",
    "What is 3 eqaul too",
    "What is 4 eqaul too",
    "What is 5 eqaul too",
    "What is 6 eqaul too",
    "What is 7 eqaul too",
    "What is 8 eqaul too",
];

// Stores answers to questions
const correctAnswers = [
    "1-----",
    "2-----",
    "3-----",
    "4-----",
    "5-----",
    "6-----",
    "7-----",
    "8-----"
];

const wrongAnswers = [
    "9",
    "99",
    "88",
    "77",
    "66",
    "55",
    "44",
    "33",
    "22",
];

// Top right timer
function timer() {
  var timerInterval = setInterval(function() {
    secondsLeft--;
    time.textContent = "Time: " + secondsLeft;
    if(secondsLeft === 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
      scoreScreen()
    }
  }, 1000);
}

function resultTimer() {
    var timerInterval = setInterval(function() {
        result.style.display = "none";
    }, 2000);
  }

function loadQuestion(x) {
    questionBox.textContent = question[x];
}

function shuffleArray (arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

function loadAnswers(x) {
    var temp = shuffleArray(wrongAnswers)

    but1.textContent = temp[0]
    but2.textContent = temp[1]
    but3.textContent = temp[2]
    but4.textContent = temp[3]

    const randomNumber = Math.floor(Math.random() * 4) + 1;

    if (randomNumber === 1) {
        but1.textContent = correctAnswers[x]  
    } else if (randomNumber === 2) {
        but2.textContent = correctAnswers[x]
    } else if (randomNumber === 3) {
        but3.textContent = correctAnswers[x]
    } else if (randomNumber === 4) {
        but4.textContent = correctAnswers[x]
    }
}

function answerCheck(answerText) {
    if (answerText === correctAnswers[questionIndex]) {
        console.log("correct")
        result.textContent = "Correct!"
        result.style.display = "block";
    } else {
        console.log("wrong")
        result.textContent = "Wrong!"
        result.style.display = "block";
        secondsLeft = secondsLeft - 10
    }
    resultTimer()
}

function nextQuestion() {
    questionIndex++
    if (questionIndex < question.length) {
        loadQuestion(questionIndex)
        loadAnswers(questionIndex) 
    } else {
        console.log("done")
        scoreScreen()
    }
}

function scoreScreen() {
    but1.style.display = "none";
    but2.style.display = "none";
    but3.style.display = "none";
    but4.style.display = "none";

    questionBox.textContent = "All done!"
}

startButton.addEventListener("click", function() {
    startButton.style.display = "none";
    but1.style.display = "block";
    but2.style.display = "block";
    but3.style.display = "block";
    but4.style.display = "block";

    document.querySelector(".item2").style.width = "300px";
    document.querySelector(".item1").style.width = "300px";

    loadQuestion(questionIndex);
    loadAnswers(questionIndex)

    timer();
});

but1.addEventListener("click", function() {
    console.log("but 1")

    answerCheck(but1.textContent)

    nextQuestion()
});

but2.addEventListener("click", function() {
    console.log("but 2")

    answerCheck(but2.textContent)

    nextQuestion()
});

but3.addEventListener("click", function() {
    console.log("but 3")

    answerCheck(but3.textContent)

    nextQuestion()
});

but4.addEventListener("click", function() {
    console.log("but 4")

    answerCheck(but4.textContent)

    nextQuestion()
});

