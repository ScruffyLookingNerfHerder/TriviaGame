//variables
var number;
var intervalId;
var correctanswers;
var wronganswers;
var unanswered;


//functions
function game () { // runs the game
  $("#startbutton").on("click", run);


}

function stop (){ //stops the game. This function is run when the user clicks the done button and when the timer runs out
  clearInterval(intervalId);
  handleClick();
  $(".Questions").empty();
  $(".countdown").empty();
  $(".Questionscontainer").empty();
  document.getElementById('startbutton').style.display="inline";
  printresults();
}

function run (){ //meat of the game
  document.getElementById('startbutton').style.display="none"; //hides the start button when the game starts
  number = 30; //sets countdown number
  intervalId = setInterval(decrement, 1000); //starts countdown
  //there's gotta be a better, cleaner way to do this. Or mayber there isn't, idk it works right now so lets just go with it
  $(".Questionscontainer").append("<div class = Questions> </div>");
  $(".Questions").append("<form name=quiz method= post name= buttons id= quizid onsubmit=return false>");
  $(".Questions").append("<h1 class = questionheader> QUESTION 1 QUESTION 1 QUESTION 1 QUESTION 1 </h1>");

  $(".Questions").append("<input type= radio name=question1 value= wrong> Answer1");
  $(".Questions").append("<input type= radio name=question1 value= correct> Correct");
  $(".Questions").append("<input type= radio name=question1 value= wrong> Answer3");
  $(".Questions").append("<input type= radio name=question1value= wrong> Answer4");


  $(".Questions").append("<h1 class = questionheader> QUESTION2 QUESTION 2 QUESTION 2 QUESTION 2 </h1>");

  $(".Questions").append("<input type= radio name=question2 value= correct> Correct");
  $(".Questions").append("<input type= radio name=question2 value= wrong> Answer2");
  $(".Questions").append("<input type= radio name=question2 value= wrong> Answer3");
  $(".Questions").append("<input type= radio name=question2 value= wrong> Answer4");


  $(".Questions").append("<h1 class = questionheader> QUESTION 3 QUESTION 3 QUESTION 3 QUESTION 3 </h1>");

  $(".Questions").append("<input type= radio name=question3 value= wrong> Answer1");
  $(".Questions").append("<input type= radio name=question3 value= wrong> Answer2");
  $(".Questions").append("<input type= radio name=question3 value= wrong> Answer3");
  $(".Questions").append("<input type= radio name=question3 value= correct> Correct");

  $(".Questions").append("<h1 class = questionheader> QUESTION 4 QUESTION 4 QUESTION 4 QUESTION 4 </h1>");

  $(".Questions").append("<input type= radio name=question4 value= wrong> Answer1");
  $(".Questions").append("<input type= radio name=question4 value= wrong> Answer2");
  $(".Questions").append("<input type= radio name=question4 value= correct> Correct");
  $(".Questions").append("<input type= radio name=question4 value= wrong> Answer4");

  $(".Questions").append("<h1 class = questionheader> QUESTION 5 QUESTION 5 QUESTION 5 QUESTION 5 </h1>");

  $(".Questions").append("<input type= radio name=question5 value= wrong> Answer1");
  $(".Questions").append("<input type= radio name=question5 value= correct> Correct");
  $(".Questions").append("<input type= radio name=question5 value= wrong> Answer3");
  $(".Questions").append("<input type= radio name=question5 value= wrong> Answer4");

  $(".Questions").append("<h1 class = questionheader> QUESTION 6 QUESTION 6 QUESTION 6 QUESTION 6 </h1>");

  $(".Questions").append("<input type= radio name=question6 value= correct> Correct");
  $(".Questions").append("<input type= radio name=question6 value= wrong> Answer2");
  $(".Questions").append("<input type= radio name=question6 value= wrong> Answer3");
  $(".Questions").append("<input type= radio name=question6 value= wrong> Answer4");

  $(".Questions").append("<h1 class = questionheader> QUESTION 7 QUESTION 7 QUESTION 7 QUESTION 7 </h1>");

  $(".Questions").append("<input type= radio name=question7 value= correct> Correct");
  $(".Questions").append("<input type= radio name=question7 value= wrong> Answer2");
  $(".Questions").append("<input type= radio name=question7 value= wrong> Answer3");
  $(".Questions").append("<input type= radio name=question7 value= wrong> Answer4");

  $(".Questions").append("<h1 class = questionheader> QUESTION 8 QUESTION 8 QUESTION 8 QUESTION 8 </h1>");

  $(".Questions").append("<input type= radio name=question8 value= wrong> Answer1");
  $(".Questions").append("<input type= radio name=question8 value= wrong> Answer2");
  $(".Questions").append("<input type= radio name=question8 value= wrong> Answer3");
  $(".Questions").append("<input type= radio name=question8 value= correct> Correct <br>");
  $(".Questions").append("<pre id=log></pre>");


  $(".Questions").append("<button class = submitbutton onclick= return handleClick(); type= submit form=quizid id=donebutton> Done! </button>");
  $(".Questions").append("</form>");


  submit(); //runs the clickHandler that checks the answers when button is pushed


}

function decrement (){ //counts down and resets when it hits 0
  number --;
  $(".countdown").html("<h2>" + number + "</h2>")
  if (number == 0){
    handleClick();
    // printresults();
    stop();
    // $(".Questions").empty();
    // $(".Questionscontainer").empty();
    // document.getElementById('startbutton').style.display="inline";
    // printresults();
  }
}

function submit(){ //runs the handleClick when button is pressed

  $("#donebutton").on("click", stop);


}


function handleClick(){ //loops through all input answers, tallys incorrect, correct, and calculates unanaswered
  number = 0;
  correctanswers=0;
  wronganswers=0;
  unanswered=0;
  for (var i = 1; i<=8; i++){
    var radios = document.getElementsByName('question'+i)
    for (var j = 0; j < radios.length; j++){
      var radio = radios[j];
      if(radio.value == "correct" && radio.checked){
        correctanswers++;
      } else if (radio.value == "wrong" && radio.checked){
        wronganswers++;
      } else{
        unanswered++;
      }
    }
  }

  var x = (correctanswers + wronganswers) * 4; //this calculates unanswered. It is a cluster, but it works
  unanswered = (unanswered-x);
  unanswered = (unanswered/4);
  unanswered = Math.ceil(unanswered);
  if (unanswered < 5){
    unanswered++;
  } if (correctanswers + wronganswers === 7 && unanswered === 0){
    unanswered = 1;
  } if (unanswered === -1){
    unanswered = 0;
  }

  // alert("Correct Answers: " + correctanswers + ". Wrong Answers: " + wronganswers +". Unanswered: " + unanswered); // alerts the results because I can't print them to the DOM for some reason

}



function printresults (){ //why doesn't this work?
    console.log ("init");
    $(".Questionscontainer").append("Correct Answers: " + correctanswers);
    $(".Questionscontainer").append("Wrong Answers: " + wronganswers);
    $(".Questionscontainer").append("Unanswered Questions: " + unanswered);
}



// function stopgame () { //stops the game when button is pressed
//   $("#donebutton").on("click", stop);
// }


//calls
game();
// submit();
// stopgame();
