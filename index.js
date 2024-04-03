#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let todos = []; // list we'll store things to.
let condition = true; //variable for while loop condition
console.log(chalk.bgMagenta("Welcome to Aayesha's Todo App!"));
while (condition) {
    console.log('');
    let operationAns = await inquirer.prompt({
        name: "operation",
        message: "What do you want to do? ",
        type: "list",
        choices: [
            "Add task",
            "Delete task",
            "Modify task",
            "View all tasks",
            "Exit",
        ],
    });
    if (operationAns.operation === "Add task") {
        let addTasks = await inquirer.prompt([
            {
                name: "toDo",
                type: "input",
                message: "What do you want to add in your to do list? ",
            },
        ]);
        todos.push(addTasks.toDo);
        console.log(chalk.green("Task added successfully!"));
    }
    else if (operationAns.operation === "Delete task") {
        let deleteTask = await inquirer.prompt({
            name: "taskToRemove",
            type: "input",
            message: "Enter the task you want to delete from your list: ",
        });
        let index = todos.indexOf(deleteTask.taskToRemove);
        if (index !== -1) {
            todos.splice(index, 1);
            console.log(chalk.green(`"${deleteTask.taskToRemove}" has been deleted.`));
        }
        else {
            console.log(chalk.yellow(`"${deleteTask.taskToRemove}" is not found in the list.`));
        }
    }
    else if (operationAns.operation === "Exit") {
        condition = false;
    }
    else if (operationAns.operation == "View all tasks") {
        console.log("All tasks :", todos);
    }
    else if (operationAns.operation == "Modify task") {
        let modifyTask = await inquirer.prompt([
            {
                name: "modify",
                type: "input",
                message: "Enter the task which you want to modify:",
            },
        ]);
        let updatetask = todos.indexOf(modifyTask.modify);
        if (updatetask !== -1) {
            let updateTask = await inquirer.prompt([
                {
                    name: "updated",
                    type: "input",
                    message: "Enter new task:",
                },
            ]);
            todos[updatetask] = updateTask.updated;
            console.log(chalk.green(`"${modifyTask.modify}" has been updated to "${updateTask.updated}".`));
        }
        else {
            console.log(chalk.yellow(`"${modifyTask.modify}" is not found in the list.`));
        }
    }
}
console.log(chalk.bgCyanBright("\nThank you for using this CLI app!"));
