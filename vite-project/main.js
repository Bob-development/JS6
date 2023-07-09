'use strict'
// TASK 1
// let isRunning = true;
// let userTransferOfCarrency;
// let userQuantityOfMoney;

let isCorrectName = true;
let userName;

let isRunning = false;
let operation;

let usersDB = [];

const userDB = {

}

while (!isRunning) {
    getUserName();
    greeting();

    switch (operation.toLowerCase()) {
        case 'a':
            if (userDB.cardNum == undefined){
                console.log("DB is empty...");
                continue;
            }
            else {
                console.log(usersDB);
            }
            break;

        case 'b':
            takeCard();
            break;

        case 'q':
            isRunning = true;
            break;
    
        default:
            break;
    }
}

function takeCard() {
    let isCorrectNumber = false;

    while (!isCorrectNumber){
        let cardNum = prompt("Enter ur card number:")
        if (cardNum.length < 10){
            alert("Write ur card number correctly")
        }
        else{
            userDB.cardNum = cardNum;
            isCorrectNumber = true;
        }
    }

    let isCorrectData = false;

    while (!isCorrectData){
        let cardDate = prompt("Enter ur card date:")
        if (cardDate.length === 5 && cardDate.indexOf("/")){
            userDB.cardDate = cardDate;
            isCorrectData = true;
        }
    }

    let isCorrectCvv = false;

    while (!isCorrectCvv){
        let cardCvv = prompt("Enter ur card cvv:")
        if (cardCvv.length === 3){
            userDB.cardCvv = cardCvv;
            isCorrectCvv = true;
        }
    }

    // for (let i = 0; ; i++){
        // usersDB[i] = userDB;
    //     break;
    // }
    usersDB.push(userDB);
}

function greeting() {
  operation = prompt("Hey, " + userName + " u can choose some extions:\n a) Get users    b) New scum operation     q) quit");
}

function getUserName() {
    while (isCorrectName){
        userName = prompt("Enter ur name here: ");
        
        if (userName.length < 2){
            alert("Enter ur name corectly, idiot");
        } 
        else{
            isCorrectName = false;
        }
    }
}