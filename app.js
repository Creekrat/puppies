'use strict'

function askUserForSoul(){
    var userName = prompt('Sign your soul away :D');
    alert('Hiya' + userName);
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

checkWelcome();