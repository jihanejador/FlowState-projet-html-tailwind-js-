export function initTodo(todos) {
  const input = document.getElementById("taskInput");
  const button = document.getElementById("addTaskBtn");

  button.addEventListener("click", () => {
    const title = input.value.trim();

    if (!title || !regex.test(title)) return;

    todos.push({ title, done: false });
    
    renderTasks(todos);
    input.value = "";
  });
}
