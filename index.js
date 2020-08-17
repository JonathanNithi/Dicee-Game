

var random_dice = ["images/dice1.png","images/dice2.png","images/dice3.png","images/dice4.png","images/dice5.png","images/dice6.png"];
var dice1, dice2 = 0;


function chooseImage1(random_dice){
  var n = Math.floor(Math.random()*random_dice.length);
  dice1 = n;
  var img = random_dice[n];
  var imgStr = '<img src="' + img + '" alt = "">';
  document.write(imgStr); document.close();
}

function chooseImage2(random_dice){
  var n = Math.floor(Math.random()*random_dice.length);
  dice2 = n;
  var img = random_dice[n];
  var imgStr = '<img src="' + img + '" alt = "">';
  document.write(imgStr); document.close();
}

function compare(){

  if(dice1 < dice2){
    document.querySelector("h1").innerHTML = "Player 2 Wins"
  }
else if(dice1 > dice2) {
    document.querySelector("h1").innerHTML = "Player 1 Wins"
  }
  else{
    document.querySelector("h1").innerHTML = "Draw"
  }

}
