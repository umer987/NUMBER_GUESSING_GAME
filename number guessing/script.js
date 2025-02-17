//ok sir theek he
//salam bhai kese he ap log
//ok bhai theek he sab

const inputField = document.querySelector(".inputt");
const checkButton = document.querySelector(".reb");
const resultDisplay = document.querySelector(".iii");


    const randomNumber = 10;
  
    checkButton.addEventListener("click", function () {
        const userGuess = parseInt(inputField.value);
        
       

        if (userGuess === randomNumber) {
            resultDisplay.innerHTML  = "🎉 Correct! You guessed it!";
            checkButton.innerHTML = "green";
        } else if (userGuess > randomNumber) {
            resultDisplay.innerHTML = "📉 Too high! Try again!";
        checkButton.innerHTML ="orange";
        } else {
            resultDisplay.innerHTML = "📈 Too low! Try again!";
            checkButton.innerHTML  = "blue";
        }
    });
























// // if (user_number!==right_number) {

// //     for (let i = 0; i !==user_number; i++) {
// //       user_number=prompt("YOU ENTER WRONG NUMBER guess again")      
// //     console.log(user_number)
       
// //     }
// //     }
// //     else if(user_number==right_number) {
// //         console.log("you guess right the number is: " ,user_number)
// //     }
    
