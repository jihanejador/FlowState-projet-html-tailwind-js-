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
    li.textContent = task.title;
    list.appendChild(li);
  });
}
