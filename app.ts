#! /usr/bin/env node

import inquirer from "inquirer"
import chalk from "chalk"

console.log("\n")
console.log(chalk.blue("----------------- WORD COUNTER ------------------"))
console.log("\n")


let answers  = await inquirer.prompt([
    {
        name:"paragraph",
        type:"input",
        message:"Enter Your Paragraph",
        validate:(input) => {
            if(input.trim() === ""){
                return chalk.red("Please Enter Your Paragraph");
            }
            return true;
        }
    }
])

let words = answers.paragraph.trim().split(" ")

console.log(chalk.green(`--------------- Your Paragraph Word Count is ${chalk.yellow(words.length)} ------------`))