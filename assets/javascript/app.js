//variables
var number;
var intervalId;
var correctanswers;
var wronganswers;
var unanswered;






//functions
function game () {
  $("#startbutton").on("click", run);



}

function stop (){
  clearInterval(intervalId);
  $(".Questions").empty();
  $(".countdown").empty();
}

function run (){
  document.getElementById('startbutton').style.display="none";
  number = 30;
  intervalId = setInterval(decrement, 1000);
  //there's gotta be a better, cleaner way to do this. Or mayber there isn't, idk it works right now so lets just go with it
  $(".Questionscontainer").append("<div class = Questions> </div>");
  $(".Questions").append("<h1 class = questionheader> QUESTION 1 QUESTION 1 QUESTION 1 QUESTION 1 </h1>");
  $(".Questions").append("<form id=Q1>");
  $(".Questions").append("<input type= radio name=question1option value=answer> Answer1");
  $(".Questions").append("<input type= radio name=question1option value=answer> Answer2");
  $(".Questions").append("<input type= radio name=question1option value=answer> Answer3");
  $(".Questions").append("<input type= radio name=question1option value=answer> Answer4");
  $(".Questions").append("</form>");

  $(".Questions").append("<h1 class = questionheader> QUESTION2 QUESTION 2 QUESTION 2 QUESTION 2 </h1>");
  $(".Questions").append("<form id=Q2>");
  $(".Questions").append("<input type= radio name=question2option value=answer> Answer1");
  $(".Questions").append("<input type= radio name=question2option value=answer> Answer2");
  $(".Questions").append("<input type= radio name=question2option value=answer> Answer3");
  $(".Questions").append("<input type= radio name=question2option value=answer> Answer4");
  $(".Questions").append("</form>");

  $(".Questions").append("<h1 class = questionheader> QUESTION 3 QUESTION 3 QUESTION 3 QUESTION 3 </h1>");
  $(".Questions").append("<form id=Q3></form>");
  $(".Questions").append("<input type= radio name=question3option value=answer> Answer1");
  $(".Questions").append("<input type= radio name=question3option value=answer> Answer2");
  $(".Questions").append("<input type= radio name=question3option value=answer> Answer3");
  $(".Questions").append("<input type= radio name=question3option value=answer> Answer4");

  $(".Questions").append("<h1 class = questionheader> QUESTION 4 QUESTION 4 QUESTION 4 QUESTION 4 </h1>");
  $(".Questions").append("<form id=Q4></form>");
  $(".Questions").append("<input type= radio name=question4option value=answer> Answer1");
  $(".Questions").append("<input type= radio name=question4option value=answer> Answer2");
  $(".Questions").append("<input type= radio name=question4option value=answer> Answer3");
  $(".Questions").append("<input type= radio name=question4option value=answer> Answer4");

  $(".Questions").append("<h1 class = questionheader> QUESTION 5 QUESTION 5 QUESTION 5 QUESTION 5 </h1>");
  $(".Questions").append("<form id=Q5></form>");
  $(".Questions").append("<input type= radio name=question5option value=answer> Answer1");
  $(".Questions").append("<input type= radio name=question5option value=answer> Answer2");
  $(".Questions").append("<input type= radio name=question5option value=answer> Answer3");
  $(".Questions").append("<input type= radio name=question5option value=answer> Answer4");

  $(".Questions").append("<h1 class = questionheader> QUESTION 6 QUESTION 6 QUESTION 6 QUESTION 6 </h1>");
  $(".Questions").append("<form id=Q6></form>");
  $(".Questions").append("<input type= radio name=question6option value=answer> Answer1");
  $(".Questions").append("<input type= radio name=question6option value=answer> Answer2");
  $(".Questions").append("<input type= radio name=question6option value=answer> Answer3");
  $(".Questions").append("<input type= radio name=question6option value=answer> Answer4");

  $(".Questions").append("<h1 class = questionheader> QUESTION 7 QUESTION 7 QUESTION 7 QUESTION 7 </h1>");
  $(".Questions").append("<form id=Q7></form>");
  $(".Questions").append("<input type= radio name=question7option value=answer> Answer1");
  $(".Questions").append("<input type= radio name=question7option value=answer> Answer2");
  $(".Questions").append("<input type= radio name=question7option value=answer> Answer3");
  $(".Questions").append("<input type= radio name=question7option value=answer> Answer4");

  $(".Questions").append("<h1 class = questionheader> QUESTION 8 QUESTION 8 QUESTION 8 QUESTION 8 </h1>");
  $(".Questions").append("<form id=Q8></form>");
  $(".Questions").append("<input type= radio name=question8option1 value=answer> Answer1");
  $(".Questions").append("<input type= radio name=question8option2 value=answer> Answer2");
  $(".Questions").append("<input type= radio name=question8option3 value=answer> Answer3");
  $(".Questions").append("<input type= radio name=question8option4 value=answer> Answer4 <br>");
  $(".Questions").append("<pre id=log></pre>");

  $(".Questions").append("<input type=submit class=submitbutton form= Q1 Q2 Q3 Q4 Q5 Q6 Q7 Q8 id=donebutton value=Done! >")

}
function decrement (){
  number --;
  $(".countdown").html("<h2>" + number + "</h2>")
  if (number == 0){
    stop();
    $(".Questions").empty();
    $(".Questionscontainer").empty();
    document.getElementById('startbutton').style.display="block";

  }
}

function answerchecker () {
  

}

function stopgame () {
  $("#donebutton").on("click", stop);
  stop();
}





//calls
game();
stopgame();
