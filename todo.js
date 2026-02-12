import { saveTodos } from "./storage.js";
import { renderTasks } from "./ui.js";

const regex = /^[a-zA-Z0-9 ]+$/;

export function initTodo(todos) {
  const input = document.getElementById("taskInput");
  const button = document.getElementById("addTaskBtn");

  button.addEventListener("click", () => {
    const title = input.value.trim();

    if (!title || !regex.test(title)) return;

    const newTask ={
        id: Date.now(),
        title,
        done:false
    };

    todos.push(newTask);
    saveTodos(todos);
    renderTasks(todos);
    input.value = "";
  });

}
export function deleteTask(todos, id){
    const index = todos.findIndex(task=> task.id==id);

    if(index !==-1){
        todos.splice(index, 1);
        saveTodos(todos);
        renderTasks(todos);
    }
}
