// array for todo list
const todoList = [
  {
    id: 1,
    task: 'Learn HTML',
    completed: true,
  },
  {
    id: 2,
    task: 'Learn CSS',
    completed: true,
  },
  {
    id: 3,
    task: 'Learn JS',
    completed: false,
  },
  {
    id: 4,
    task: 'Learn TypeScript',
    completed: false,
  },
  {
    id: 5,
    task: 'Learn React',
    completed: false,
  },
];

// add your code here

let check = '';
if (todoList[0].completed) {
  check = 'checked';
}

const exampleString = `<input type="checkbox" id="todo-${todoList[0].id}" ${check}>`;


const exampleString2 = `<input type="checkbox" id="todo-${todoList[0].id}" ${todoList[0].completed && 'checked'
}>`;


console.log(exampleString);