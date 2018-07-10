var correctAnswers = 0;
var incorrectAnswers = 0;
var unAnswered = 0;
var number = 120;
var intervalId;
var audio = new Audio("HP.mp3");


function startGame() {
  $("#background").show();
  $("#questions").hide();
  $("nav").hide();
  $("#message").hide();
}

function startQuiz() {
  $("#background").hide();
  $("#questions").show();
  $("nav").show();
  $("#message").hide();
}


function unanswered() {
  unAnswered++;
  $('#unanswered').html('<h3> Unanswered:' + unAnswered + '</h3>');
}

function incorrect() {
  incorrectAnswers++
  $('#incorrect').html('<h3> Incorrect:' + incorrectAnswers + '</h3>');
}

function correct() {
  correctAnswers++;
  $('#correct').html('<h3> Correct:' + correctAnswers + '</h3>');
}

function endQuiz() {
  $("#background").hide();
  $("#questions").hide();
  $("nav").hide();
  $("#message").show();
}

function run() {
  clearInterval(intervalId);
  intervalId = setInterval(decrement, 1000);
}

function decrement() {
  number--;

  $("#show-number").html("Time Remaining: " + number + "");

  if (number === 0) {
    timer();
    stop();
    endQuiz();
  }
};

function timer() {
  $questions = $(".quest");
  $questions.each(function () {
    var answer = $(this).find("input:checked"),
      key = answer.attr("name"),
      val = answer.attr("value");

    if (answer.length === 0) {
      unanswered();
    } else if (answers[key] !== val) {
      incorrect();
    } else {
      correct();
    }
  });
};

function stop() {
  clearInterval(intervalId);
}

$(document).ready(function () {

  startGame();

  $("#enter").on("click", startQuiz);

  $("#enter").on("click", run);

  $("form").on("submit", function (event) {
    event.preventDefault();

    $questions = $(".quest");
    $questions.each(function () {
      var answer = $(this).find("input:checked"),
        key = answer.attr("name"),
        val = answer.attr("value");

      if (answer.length === 0) {
        unanswered();
      } else if (answers[key] !== val) {
        incorrect();
      } else {
        correct();
      }
    });
  });
  $("#end").on("click", endQuiz);
  $("#end").on("click", stop);
});


var answers = {
  "one": "c",
  "two": "a",
  "three": "b",
  "four": "d",
  "five": "a",
  "six": "b",
  "seven": "c",
  "eight": "d",
  "nine": "b",
  "ten": "c"
}