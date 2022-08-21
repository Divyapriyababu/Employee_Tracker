const inquirer = require('inquirer'); 

const choices = [
    "view all departments", 
    "view all roles", 
    "view all employees", 
    "add a department", 
    "add a role", 
    "add an employee",
    "update an employee role"
];

const questions = [
    {
        type: "list",
        name: "choice",
        message: "What would you like to do?",
        choices: choices
    }
]

function askQuestion() {
    inquirer
    .prompt(questions)
    .then((data) => {
        const {choice} = data;
        console.log("You have selected the choice: " + choice);
    });
}

askQuestion();