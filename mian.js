import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random() * 6 - 1);
const answer = await inquirer.prompt([
    {
        "name": "userGuessedNumber",
        "type": "number",
        "message": "please guess a number between 1 to 5"
    },
]);
if (answer.userGuessedNumber === randomNumber) {
    console.log("huraah! you won the game");
}
else {
    console.log("oh ho! you guess wrong number");
}
