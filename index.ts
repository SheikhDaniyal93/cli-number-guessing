#! /usr/bin/env node

import inquirer from "inquirer";    

// 1) computer will generate a random number - done

// 2) user input for guessing number - done

// 3) compare user input with computer generated number and show result - done

const randomNumber = Math.floor(Math.random() * 10 + 1);
console.log("Welcome to number guessing game");
const answers = await inquirer.prompt([
    {
        name: "UserGuessNumber",
        type: "number",
        message: "Please Guess a number between 1-100",
    },
]);
if (answers.UserGuessNumber === randomNumber) {
    console.log("Congratulations! You guessed the right number.");
}else{
    console.log("Sorry, you guessed the wrong number.");
};