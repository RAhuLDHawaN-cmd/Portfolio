
var scores,roundScore,activePlayer,gamePlaying,p1,p2;
                                                          function init()
{
  scores = [0,0];
  activePlayer = 0;
  roundScore = 0;
  gamePlaying = true;
//vanish the dice
document.querySelector('.dice').style.display = 'none';

// put total score to zero;
document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';

// put current  score to zero;
document.querySelector('#current-1').textContent='0';
document.querySelector('#current-0').textContent='0';

// ask for p1 and p2 names

document.getElementById('name-0').textContent = prompt("PLAYER 1 NAME");
document.getElementById('name-1').textContent = prompt("PLAYER 2 NAME");

// reset activeplyer
document.querySelector('.player-0-panel').classList.remove('active');
document.querySelector('.player-0-panel').classList.remove('active');
 document.querySelector('.player-0-panel').classList.remove('winner');
 document.querySelector('.player-1-panel').classList.remove('winner');

document.querySelector('.player-0-panel').classList.add('active');

}


                                                                            function nextPlayer()
{

//if else for change of player

  if(activePlayer == 0)
  {
  activePlayer = 1 ;

  }
  else
  {
  activePlayer = 0;

  }
  roundScore = 0;
  document.getElementById('current-0').textContent = '0';
  document.getElementById('current-1').textContent = '0';

  // reset active
  document.querySelector('.player-0-panel').classList.toggle('active');
  document.querySelector('.player-1-panel').classList.toggle('active');
  document.querySelector('.dice').style.display = 'none';
}


                                                                              function rollon()

{
  if(gamePlaying!=false)
{
  // for random no;
  var dice = Math.floor(Math.random() * 6) + 1;

  //2. Display the result

  var diceDOM = document.querySelector('.dice');

  diceDOM.style.display = 'block';

  diceDOM.src = 'dice-' + dice + '.png';

  if(dice!=1)
  {
  roundScore+=dice;
  document.querySelector('#current-'+activePlayer).textContent = roundScore;
  }

  else
{
  nextPlayer();
}
}
else
{
alert("Game Finished! Click New Game to continue!!");
}
}

                                                                              function hold()
{
if(gamePlaying!=false)
{
scores[activePlayer]+=roundScore;
document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
document.querySelector('#current-'+activePlayer).textContent='zero';

  {
    if(scores[activePlayer]>=20)
    {
    gamePlaying=false;

    //scores[activePlayer]="WINNER";
    document.querySelector('#score-' + activePlayer).textContent = "WINNER";
    }
}
  if(gamePlaying!=false)
  nextPlayer();
}

else
alert("Game Finished! Click New Game to continue!!");
{
}

}

init();

// generate the numbers for dice roll
document.querySelector('.btn-roll').addEventListener('click',rollon);
document.querySelector('.btn-new').addEventListener('click',init);
document.querySelector('.btn-hold').addEventListener('click',hold);
