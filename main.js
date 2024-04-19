#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([{
        name: "sentence",
        type: "input",
        message: "Enter your sentence to count your words"
    }]);
const words = answer.sentence.trim().split(" ");
console.log(words);
let count = words.length;
console.log(`Your word count is ${count}`);
