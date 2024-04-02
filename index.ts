#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

let todos = []; // list we'll store things to.
let condition = true; //variable for while loop condition
console.log(chalk.bgMagenta("Welcome to Aayesha's Todo App!"));
while (condition) {
  let operationAns = await inquirer.prompt({
    name: "operation",
    message: "\nWhat do you want to do? ",
    type: "list",
    choices: ["Add task", "Delete Task", "Exit"],
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
    console.log("Updated list:", todos);
  } else if (operationAns.operation === "Delete Task") {
    let deleteTask = await inquirer.prompt({
      name: "taskToRemove",
      type: "input",
      message: "Enter the task you want to delete from your list: ",
    });
    let index = todos.indexOf(deleteTask.taskToRemove);
    if (index !== -1) {
      todos.splice(index, 1);
      console.log(
        chalk.green(`"${deleteTask.taskToRemove}" has been deleted.`)
      );
    } else {
      console.log(
        chalk.yellow(`"${deleteTask.taskToRemove}" is not found in the list.`)
      );
    }

    console.log("Remaining tasks:", todos);
  } else if (operationAns.operation === "Exit") {
    condition = false;
    console.log(chalk.yellowBright("\nThank you for using this CLI app!"));
  }
}
