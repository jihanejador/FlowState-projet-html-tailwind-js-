import { initTodo } from "./todo.js";
import { initTimer } from "./timer.js";
import { renderTasks } from "./ui.js";
import { getTodos } from "./storage.js";

const todos = getTodos();

renderTasks(todos);
initTodo(todos);
initTimer(); 
