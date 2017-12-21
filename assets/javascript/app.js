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
  $(".Results").remove(); //empties the container for restart

  number = 30; //sets countdown number
  intervalId = setInterval(decrement, 1000); //starts countdown
  //there's gotta be a better, cleaner way to do this. Or mayber there isn't, idk it works right now so lets just go with it
  $(".Questionscontainer").append("<div class = Questions> </div>");
  $(".Questions").append("<form name=quiz method= post name= buttons id= quizid onsubmit=return false>");
  $(".Questions").append("<h1 class = questionheader> What is the name of Santa's only female reindeer? </h1>");

  $(".Questions").append("<input type= radio name=question1 value= wrong> Dasher");
  $(".Questions").append("<input type= radio name=question1 value= correct> Vixen");
  $(".Questions").append("<input type= radio name=question1 value= wrong> Dancer");
  $(".Questions").append("<input type= radio name=question1value= wrong> Rudolph");


  $(".Questions").append("<h1 class = questionheader> Which state was the last to declare Christmas an official holiday? </h1>");

  $(".Questions").append("<input type= radio name=question2 value= correct> Oklahoma");
  $(".Questions").append("<input type= radio name=question2 value= wrong> Washington");
  $(".Questions").append("<input type= radio name=question2 value= wrong> Colorado");
  $(".Questions").append("<input type= radio name=question2 value= wrong> Pennsylvania");


  $(".Questions").append("<h1 class = questionheader> From which country is the original St. Nicholas? </h1>");

  $(".Questions").append("<input type= radio name=question3 value= wrong> England");
  $(".Questions").append("<input type= radio name=question3 value= wrong> Germany");
  $(".Questions").append("<input type= radio name=question3 value= wrong> Austria");
  $(".Questions").append("<input type= radio name=question3 value= correct> Turkey");

  $(".Questions").append("<h1 class = questionheader> Where did the tradition of Christmas trees originate? </h1>");

  $(".Questions").append("<input type= radio name=question4 value= wrong> Turkey");
  $(".Questions").append("<input type= radio name=question4 value= wrong> France");
  $(".Questions").append("<input type= radio name=question4 value= correct> Germany");
  $(".Questions").append("<input type= radio name=question4 value= wrong> The Vatican");

  $(".Questions").append("<h1 class = questionheader> What company is credited with designing Sanat's iconic red and white suit? </h1>");

  $(".Questions").append("<input type= radio name=question5 value= wrong> A company didn't design that!");
  $(".Questions").append("<input type= radio name=question5 value= correct> Coca Cola");
  $(".Questions").append("<input type= radio name=question5 value= wrong> Vodafone");
  $(".Questions").append("<input type= radio name=question5 value= wrong> Pepsi");

  $(".Questions").append("<h1 class = questionheader>What joint U.S.-Canadian government entity is charged with tracking Santa every Christmas?  </h1>");

  $(".Questions").append("<input type= radio name=question6 value= correct> NORAD");
  $(".Questions").append("<input type= radio name=question6 value= wrong> NOAH");
  $(".Questions").append("<input type= radio name=question6 value= wrong> XMAS UNIT");
  $(".Questions").append("<input type= radio name=question6 value= wrong> CAD");

  $(".Questions").append("<h1 class = questionheader> Every year a tree is decorated in Trafalgar Square in London. Which nation donates that tree? </h1>");

  $(".Questions").append("<input type= radio name=question7 value= correct> Norway");
  $(".Questions").append("<input type= radio name=question7 value= wrong> Canada");
  $(".Questions").append("<input type= radio name=question7 value= wrong> Denmark");
  $(".Questions").append("<input type= radio name=question7 value= wrong> Sweden");

  $(".Questions").append("<h1 class = questionheader> What evil Santa counterpart kidnaps naughty children in Germany? </h1>");

  $(".Questions").append("<input type= radio name=question8 value= wrong> Frampus");
  $(".Questions").append("<input type= radio name=question8 value= wrong> The Bleeken");
  $(".Questions").append("<input type= radio name=question8 value= wrong> Sweeney Todd");
  $(".Questions").append("<input type= radio name=question8 value= correct> Krampus<br>");
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
    stop();

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
}

function printresults (){ //pushes results to DOM
    $(".Questionscontainer").append("<div class = Results>");
    $(".Results").append("<p> Correct Answers: " + correctanswers);
    $(".Results").append("<p> Wrong Answers: " + wronganswers);
    $(".Results").append("<p> Unanswered Questions: " + unanswered);
    $(".Results").append("</div>");
}




//calls
game();
