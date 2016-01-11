/**
 * Melissa Eddings
 * Jan 9, 2016
 * Assignment: Analyze Duel 1
 */
//self-executing function
(function(){
    console.log("FIGHT!!!");

    //player name
    var playerOneName = "Spiderman";
    var playerTwoName = "Batman";

    //the max amount of damage that can be dealt per round
    var player1Damage = 20;
    var player2Damage = 20;

    //the max player health at the start of game
    var playerOneHealth = 100;
    var playerTwoHealth = 100;

    //initiate round
    var round=0;
    //fight begins, start alert
    function fight(){
        alert(playerOneName+":"+playerOneHealth+" *START* "+playerTwoName+":"+playerTwoHealth);
        for (var i=0; i<10; i++){

            //random number formula is - Math.floor(Math.random()* (max-min) + min); this determines how much damage a player
            // receives per round
            var minDamage1=player1Damage*.5;
            var minDamage2=player2Damage *.5;
            var f1=Math.floor(Math.random()*(player1Damage-minDamage1)+ minDamage1);
            var f2=Math.floor(Math.random()*(player2Damage-minDamage2)+ minDamage2);

            //inflict damage
            playerOneHealth-=f1;
            playerTwoHealth-=f2;
            //print to console
            console.log(playerOneName+":"+playerOneHealth+""+playerTwoName+":"+playerTwoHealth);

            //check for winner after each round
            var result = winnerCheck();
            console.log(result);
            //if there is no winner loop begins again for 10 rounds or until a player reaches zero
            if(result==="no winner"){
                round++;
                alert(playerOneName+":"+playerOneHealth+" *ROUND "+round+" Over* "+playerTwoName+":"+playerTwoHealth);
            }else{
                alert(result);
                //break out of loop if one or both players health falls below zero
                break;
            };

        };

    };
    //winner results based on higher health
    function winnerCheck(){
        var result="no winner";
        if(playerOneHealth<1 && playerTwoHealth<1){
            result="You Both Die";
        }else if(playerOneHealth<1){
            result=playerTwoName+" WINS!"
        }else if(playerTwoHealth<1){
            result=playerOneName+" WINS!"
        };
        //show results
        return result;

    };


  //program gets started below

    fight();
})();
