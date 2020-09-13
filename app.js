/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

    var score, activePlayer ,roundScore,gamePlaying , lastDice;

    init();

        document.querySelector('.btn-roll').addEventListener('click', function ()
        {
            if(gamePlaying)
            {
                // Random Number
                var dice1 = Math.floor(Math.random() * 6 )+ 1;
                var dice2 = Math.floor(Math.random() * 6 )+ 1;
                // Display Result 
                document.getElementById('dice-1').style.display = 'block';
                document.getElementById('dice-2').style.display = 'block';
           
                document.getElementById('dice-1').src = 'dice-'+ dice1 + '.png';
                document.getElementById('dice-2').src = 'dice-'+ dice2 + '.png';
               
                
                //update the round score if the round score is not 1 and if 6 dual in a row
                // if (lastDice === 6 && lastDice === 6)
                // {  
                //     score[activePlayer] = 0;
                //     document.querySelector('#score-'+activePlayer).textContent = '0';
                //     nextPlayer();
                // }
                // else  
                
                if( dice1 !== 1 && dice2 !==1)
                {
                    roundScore += dice1 + dice2;
                    document.querySelector('#current-' + activePlayer).textContent = roundScore;
                }
                else
                {
                   nextPlayer();
                }

                // lastDice = dice;
            }
        


        });


        document.querySelector('.btn-hold').addEventListener('click' , function()
        {
            if(gamePlaying)
            {
                    //add current score to the global score
                scores[activePlayer] += roundScore;
                
                //display in UI
                document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
                var inScore;
                var input = document.querySelector('.Winning-score').value;
                if(input)
                {
                    inScore = input;
                }
                else
                {
                    inScore = 100;
                }
                //Check if player won the game 
                if(scores[activePlayer] >= inScore)
                {
                    document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
                    document.querySelector('#dice-1').style.display = 'none';
                    document.querySelector('#dice-2').style.display = 'none';
                    document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
                    document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
                    gamePlaying = false;
                }
                else
                {
                //nextplayer
                     nextPlayer();
                }
            }
        
        });

        function nextPlayer()
        {
            //scores[activePlayer] += roundScore;
            //document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];    //to add the score to global without hold button

            activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
            roundScore = 0;

            document.getElementById('current-0').textContent = 0;
            document.getElementById('current-1').textContent = 0;

            document.querySelector('.player-0-panel').classList.toggle('active');
            document.querySelector('.player-1-panel').classList.toggle('active');

            diceDOM.style.display = 'none';
        }

            document.querySelector('.btn-new').addEventListener('click' , init);

        function init()
        {
            scores = [0,0];
            roundScore = 0;
            activePlayer = 0;
            gamePlaying = true;

            document.querySelector('#dice-1').style.display = 'none';
            document.querySelector('#dice-2').style.display = 'none';

            document.getElementById('score-0').textContent = 0;
            document.getElementById('score-1').textContent = 0;
            document.getElementById('current-0').textContent = 0;
            document.getElementById('current-1').textContent = 0;
            document.querySelector('#name-0').textContent = 'Player-1';
            document.querySelector('#name-1').textContent = 'Player-2';
            document.querySelector('.player-0-panel').classList.remove('active');
            document.querySelector('.player-1-panel').classList.remove('active');
            document.querySelector('.player-0-panel').classList.remove('winner');
            document.querySelector('.player-1-panel').classList.remove('winner');
            document.querySelector('.player-0-panel').classList.add('active');
        }


//var x = document.querySelector('#current-0').textContent;
//console.log(x);
