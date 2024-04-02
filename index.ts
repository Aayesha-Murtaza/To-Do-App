import inquirer from "inquirer";


let todos = []; // list we'll store things to.
let condition = true ; //variable for while loop condition
while(condition){
let addTasks = await inquirer.prompt([
  {
    name: "toDo",
    type: "input",
    message: "What do you want to add in your to do list? ",
  },
  {
    name: 'addAnother',
    type: 'confirm',
    message: 'Do you want to add another task?',
    default:  "false",
  }
]);

todos.push(addTasks.toDo);
condition = addTasks.addAnother;
console.log(todos);
}