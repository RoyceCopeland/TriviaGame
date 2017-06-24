//* You'll create a trivia form with multiple choice or true/false options (your choice).
//
//* The player will have a limited amount of time to finish the quiz.
//
//* Don't forget to include a countdown timer.

"use strict";

$(document).ready(function() {
    //  var correctAnswerArray;

    var correctAnswer = 0;
    var incorrectAnswer = 0;
    var allCorrectAnswers = ["Aaron", "bidet", "jiu jitsu", "Cuba", "Mexico", "Subway", "Lonely", "Memphis", "Eric Clapton", "9", "Mr. Spock", "DeLorean", "4"];
    var playerAnswer;
    var timeInSecs;
    var ticker;

    var correctAnswer;
    var incorrectAnswer;
    var allCorrectAnswers = ["Aaron", "bidet", "jiu jitsu"];
    var playerAnswer;



    //           //  * The game ends when the time runs out. The page will reveal the
    //           //  number of questions that players answer correctly and incorrectly.
    var totalCorrectAnswers;
    var totalIncorrectAnswers;



 //   function disableButtons() {
 //       $(".btn-default").disabled = true;
 //   }






    function startTimer(duration, display) {
        $("#timerButton").on("click", function() {

            function startTimer(secs) {
                timeInSecs = parseInt(secs) - 1;
                ticker = setInterval("tick()", 1000); // every second
            }

            function tick() {
                var secs = timeInSecs;
                if (secs > 0) {
                    timeInSecs--;
                } else {
                    clearInterval(ticker); // stop counting at zero
                    // startTimer(30);  // remove forward slashes in front of startTimer to repeat if required
                }
                $("#countdownTimer").html(secs);
            }
            startTimer(30); //30 seconds
            console.log(secs, timeInSecs, ticker);
        })

    }


    function rightOrWrong() {       
           $(".btn").on("click", function() {
           	$(".btn").toggleClass('disabled');
            var playerAnswer = $(this).html();
            for (var i = 0; i < allCorrectAnswers.length; i++) {
                if (playerAnswer === allCorrectAnswers[i]) {
                    console.log(playerAnswer);
                    correctAnswer = correctAnswer + 1;
                }
            }
            $("#totalCorrect").html(correctAnswer);
            $("#totalIncorrect").html(12 - correctAnswer);
       });
       }
       rightOrWrong();

        });

            







//
//    function rightOrWrong() {
//        $(".btn").on("click", function() {
//            $(".questionContainer1").hide();
//            var playerAnswer = $(this).html();
//            for (var i = 0; i < allCorrectAnswers.length; i++) {
//                if (playerAnswer === allCorrectAnswers[i]) {
//                    console.log(playerAnswer);
//                    correctAnswer = correctAnswer + 1;
//                }
//            }
//            $("#totalCorrect").html(correctAnswer);
//            $("#totalIncorrect").html(12 - correctAnswer);
//        });
//    }
//    rightOrWrong();
//});










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

//  incorrectAnswer = incorrectAnswer = 1;

//	incorrectAnswer = incorrectAnswer = 1;


//* Don't let the player pick more than one answer per question.
//then lock all buttons for that question
