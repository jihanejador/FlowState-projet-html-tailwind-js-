const KEY = "flowstate_todos";

export function saveTodos(todos) {
  localStorage.setItem(KEY, JSON.stringify(todos));
}

export function getTodos() {
  return JSON.parse(localStorage.getItem(KEY)) || [];
}
