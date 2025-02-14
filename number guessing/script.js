// let usernumber =document.querySelector(".inputt")
// let buttt = document.querySelector(".reb")
// let vall= usernumber.innerHTML
// let clutt = ""

// let game_number =10

// buttt.addEventListener("click" , function(){

//     while (vall != game_number) {
//         // clutt+= `  <div class="wrr"><p>WRONG NUMBER</p></div>`
//         console.log("poka")
//     }

// clutt+= `  <div class="wrr"><p>YOU WON ${usernumber}</p></div>`
// })



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












// // let right_number= 10
// // let user_number=prompt("GUESS THE NUMBER ")

// // while (user_number != right_number ) {
// //     user_number=prompt("WRONG!!! TRY AGAIN")
// // }




// // alert("CONGRALUATION YOU GUESS THE RIGHT NUMBER " , right_number)










// // while (user_number != right_number) {
// //   user_number =  prompt("YOU ENTERED WRONG NUMBER GUESS AGAIN ")
// // }   


// // alert("CONGRALUATION YOU GUESS THE RIGHT NUMBER " , right_number)

















// // if (user_number!==right_number) {

// //     for (let i = 0; i !==user_number; i++) {
// //       user_number=prompt("YOU ENTER WRONG NUMBER guess again")      
// //     console.log(user_number)
       
// //     }
// //     }
// //     else if(user_number==right_number) {
// //         console.log("you guess right the number is: " ,user_number)
// //     }
    