//* You'll create a trivia form with multiple choice or true/false options (your choice).
//
//* The player will have a limited amount of time to finish the quiz.
//
//* Don't forget to include a countdown timer.

"use strict";

$(document).ready(function() {
    //  var correctAnswerArray;
    var correctAnswer;
    var incorrectAnswer;
    var allCorrectAnswers = ["Aaron", "bidet", "jiu jitsu"];
    var playerAnswer;


    //           //  * The game ends when the time runs out. The page will reveal the
    //           //  number of questions that players answer correctly and incorrectly.
    var totalCorrectAnswers;
    var totalIncorrectAnswers;


    // for question 1:
    //

   

function rightOrWrong () {
	$(".btn").on("click");
	for (var i = 0; i < allCorrectAnswers.length; i++) {
		allCorrectAnswers[i];
		if (playerAnswer === allCorrectAnswers) {
			console.log(correct);
		}
	}
}

rightOrWrong();




//   var hasMatch = false;

//   for (var i = 0; i < allCorrectAnswers.length; i++) {

//       if (playerAnswer === allCorrectAnswers) {

//           hasMatch = true;
//           console.log(correct);
//       } else console.log(incorrect);
//   }
});

//$("#AaronButton").on("click") {
//     	console.log(correct);
//    }

//score it as a correctAnswer
//correctAnswer = correctAnswer + 1;

//} else //score it an incorrectAnswer
//	incorrectAnswer = incorrectAnswer = 1;

//* Don't let the player pick more than one answer per question.
//then lock all buttons for that question
