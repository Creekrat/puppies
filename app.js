'use strict'

function askUserForSoul(){
    var userName = prompt('Sign your soul away :D');
    alert('Hiya ' + userName);
     return userName;
}

function checkWelcome(){
    
    if (userName === 'Alex'){
        document.write('<h2>' + 'Welcome' + '</h2>')
    } else {
        document.write('<h2>' + 'Welcome Friend :D' + '</h2>')
    }
}

var userName = askUserForSoul();


function numberGuessingGame() {
    var correctAnswer = 25;
    var playGame = prompt('Play a game with me?');
    while(playGame === 'yes'){
        for (var i = 0; i < 5; i = i + 1){
            var userGuess = parseInt(prompt("Enter a number between 1-100"));
            if(userGuess === correctAnswer){
                alert('Yaaaaasss!')
                break;
            } else if (userGuess < correctAnswer){
                alert('Not high enough..')
            } else if (userGuess > correctAnswer){
                alert('Whoa there! Not that high!')
            }
            if(i === 4){
                alert('Fine here is the answer' + correctAnswer);
            }
        }
        playGame = prompt('Wanna try again?');
    }
}

numberGuessingGame();