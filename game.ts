#! /usr/bin/env node

import inquirer from "inquirer"; 

console.log("\n\twellcome To azeem - CLI number guessing Game\n");

const randomNumber = Math.floor(Math.random() * 10 + 1);

const answer = await inquirer.prompt([
    {
   name: "userguessenumber",
   type: "number",
   message: "Enter your Guess number(number limit from 1 to 10):",  
},
]);
if(answer.userguessenumber === randomNumber){
console.log("conguratulation ! You guess a correct number. ");
}
else{
    console.log("sorry , you guess a wrong number");
}
