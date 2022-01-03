var score=0;
var diceOne;
var isButtonClicked=0;
function round(){
  document.getElementById("score").innerHTML=score;
  document.getElementById("variable").innerHTML="None";
  document.getElementById("resulttag").innerHTML="";
  
  document.getElementById("play_btn").style.display = "none";
  
  var elDiceOne       = document.getElementById('dice1');
  diceOne   = Math.floor((Math.random() * 6) + 1);
  isButtonClicked=0;
  function rollDice() {

    console.log(diceOne);

    for (var i = 1; i <= 6; i++) {
    elDiceOne.classList.remove('show-' + i);
    if (diceOne === i) {
      elDiceOne.classList.add('show-' + i);
      }
    }
  }
  
  setTimeout(rollDice, 6000);

  var timeleft = 5;
  var downloadTimer = setInterval(function(){
    if(timeleft <= 0){
      clearInterval(downloadTimer);
      document.getElementById("notice-statement").innerText = "";
    }else{
    document.getElementById("notice-statement").innerText = "You have "+timeleft+" seconds left to predict";
    timeleft -= 1;}
  }, 1000);

  // document.getElementById('1').onclick=reply_click(1);
  // document.getElementById('2').onclick=reply_click(2);
  // document.getElementById('3').onclick=reply_click(3);
  // document.getElementById('4').onclick=reply_click(4);
  // document.getElementById('5').onclick=reply_click(5);
  // document.getElementById('6').onclick=reply_click(6);

  // var clicked_button;
  // var reply_click=function (clicked_id){ 
  //   isButtonClicked=1;
  //   clicked_button=clicked_id.id;
  //   document.getElementById("variable").innerHTML=clicked_id;
  // }
  
  function unhidebtn(){
    document.getElementById("play_btn").style.display = "inline";
  }
  setTimeout(checking,7500);
  setTimeout(unhidebtn,7500);
  document.getElementById("play_btn").innerText="Replay";

}

var clicked_button;
var reply_click=function (clicked_id){ 
    isButtonClicked=1;
    clicked_button=clicked_id.id;
    document.getElementById("variable").innerHTML=clicked_button;
}

function checking(){ 
  if(clicked_button==diceOne&&isButtonClicked==1){
    document.getElementById("resulttag").innerHTML="<span style='color: green;'>Hurray! It was correct</span>";
    score=score+10;
    document.getElementById("score").innerHTML=score;
  }
  else if(isButtonClicked==0){
    document.getElementById("resulttag").innerHTML="<span style='color: white;'>You have to select a number to predict</span>";
  }
  else if(clicked_button!=diceOne&&isButtonClicked==1){
    document.getElementById("resulttag").innerHTML="<span style='color: red;'>Oops! It was wrong. Try again</span>";
  
  }
  isButtonClicked=0;
}