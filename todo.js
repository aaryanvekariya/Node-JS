// let command = process.argv[2]
// let task = process.argv.slice(3).join(' ')

// switch(command){
//     case "Add":
//         console.log("Add Task Successfully")
//         break;

//     case "List":
//          console.log("There is your List of Tasks")
//             break;
            
//     case "Delete":
//         console.log("Delete Task Successfully")
//         break;

//     default:
//         console.log("Invalid Command")    
// }


const fs = require('fs').promises;
const path = require('path');

const todoFile = 'Todo.txt';

async function main() {
  const task = process.argv[2];
  const msg = process.argv.slice(3).join(' ');

  if (!task) {
    console.log("Please provide a task type (add, list, delete).");
    return;
  }

  switch (task) {
    case 'add':
      if (!msg) {
        console.log("Please provide a task to add.");
        return;
      }
      await addToDo(msg);
      console.log("Todo added!");
      break;

    case 'list':
      await listTodos();
      break;

    case 'delete':
      const index = parseInt(msg, 10);
      if (isNaN(index)) {
        console.log("Please provide a valid task number to delete.");
        return;
      }
      const wasDeleted = await deleteTodo(index);
      if (wasDeleted) {
        console.log("Todo deleted!");
      } else {
        console.log("Invalid task number.");
      }
      break;

    default:
      console.log("Unknown task. Available tasks: add, list, delete.");
      break;
  }
}

async function addToDo(msg) {
  try {
    await fs.appendFile(todoFile, `${msg}\n`);
  } catch (err) {
    console.error("Error adding task:", err);
  }
}

async function listTodos() {
  try {
    const todos = await getTodos();
    if (todos.length === 0) {
      console.log("No todos found.");
      return;
    }
    todos.forEach((task, index) => {
      console.log(`${index + 1}. ${task}`);
    });
  } catch (err) {
    console.error("Error listing tasks:", err);
  }
}

async function deleteTodo(index) {
  try {
    const todos = await getTodos();
    if (index < 1 || index > todos.length) {
      return false; 
    }
    todos.splice(index - 1, 1);

    
    if (todos.length > 0) {
      await fs.writeFile(todoFile, todos.join('\n') + '\n');
    } else {
      
      await fs.writeFile(todoFile, '');
    }
    return true; 
  } catch (err) {
    console.error("Error deleting task:", err);
    return false; 
  }
}

async function getTodos() {
  try {
    const data = await fs.readFile(todoFile, 'utf-8');
    return data.trim().split('\n').filter(Boolean); 
  } catch (err) {
    return []; 
  }
}

main();