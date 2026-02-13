import { deleteTask } from "./todo.js";

export function renderTasks(todos) {
  const list = document.getElementById("taskList");
  const empty = document.getElementById("emptyState");

  list.innerHTML = "";

  if (todos.length === 0) {
    empty.classList.remove("hidden");
    return;
  }

  empty.classList.add("hidden");

  todos.forEach(task => {
    const li = document.createElement("li");
    li.className = "bg-[#F2C185] rounded-full px-4 py-2 text-sm";
    const span =document.createElement("span");
    span.textContent=task.title;

    const deletbtn = document.createElement("button");
    deletbtn.textContent="✕";
    deletbtn.className="text-red-600 font-bold hover:scale-110 transition";
    deletbtn.addEventListener("click",()=>{
        deleteTask(todos, task.id);
    });

    li.appendChild(span);
    li.appendChild(deletbtn);
    list.appendChild(li);

  });
}
