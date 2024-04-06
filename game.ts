#! usr/bin/env node

import inquirer from "inquirer"; 

console.log("wellcome To azeem - CLI number guessing Game");

const randomNumber = Math.floor(Math.random() * 10 + 1);

async function palyRound(){
const answer = await inquirer.prompt([{
   name: "userguessenumber",
   type: "number",
   message: "Enter your Guess number(number limit from 1 to 10):",  
}]);
 const userguessenumber = answer.userguessenumber;

if(answer.userguessenumber === randomNumber){
console.log("conguratulation ! You guess a correct number.  ");
return true;

}
else{
    if(userguessenumber > answer){
    console.log(`\n Your guessed number is greter than  actual number`);
}else if (userguessenumber < answer){
    console.log(`\n Your guessed number is less than actual number`);
}
return false
}
} 
   let isguessed = false;
   let attempt = 0;


   console.log(`\n Number guessing Game!`)

while (! isguessed){
    attempt++
    console.log(`Your attempt No.${attempt}`);
    isguessed = await palyRound();
}
 console.log(`You have attempted ${attempt} times to guessed the right Number `); 

