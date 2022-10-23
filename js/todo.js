const main_content = document.querySelector(".main-content");
const todo_list = document.querySelector(".todo-list");
const todo = document.createElement("div");
const todo_form = document.createElement("form");
const todo_question = document.createElement("span");
let todo_input = document.createElement("input");

const TODOS_KEY = "todos";
let toDos = [];

function todoCreate() {
  todo_input.autocomplete = "off";
  todo_input.spellcheck = false;

  todo_form.className = "main-content__todo-form";

  todo_question.innerHTML = "What is your main focus for today?";
  todo_form.appendChild(todo_input);

  todo.className = "main-content__todo";
  todo.appendChild(todo_question);
  todo.appendChild(todo_form);
  main_content.appendChild(todo);

  todo_input = document.querySelector(".main-content__todo-form input");
}

function saveToDoList() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}
function deleteToDoList(event) {
  const li = event.target.parentElement;
  toDos = toDos.filter((todo) => todo.id !== parseInt(li.id));
  li.remove();
  saveToDoList();
}

function checkBoxEvent(event) {
  const li = event.target.parentElement.parentElement;

  toDos.forEach((todo) => {
    if (todo.id === parseInt(li.id)) {
      todo.check = event.target.checked;
    }
  });

  saveToDoList();
}

function todoInsert(newToDo) {
  const li = document.createElement("li");
  const div = document.createElement("div");
  const checkBox = document.createElement("input");
  const text = document.createElement("span");
  const button = document.createElement("button");

  checkBox.type = "checkbox";
  checkBox.checked = newToDo.check;
  checkBox.addEventListener("click", checkBoxEvent);

  button.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
</svg>`;
  button.addEventListener("click", deleteToDoList);

  li.id = newToDo.id;
  text.innerHTML = newToDo.text;

  div.appendChild(checkBox);
  div.appendChild(text);
  li.appendChild(div);
  li.appendChild(button);

  todo_list.appendChild(li);
}

function todoInputEvent(event) {
  event.preventDefault();
  const newToDo = {
    text: todo_input.value,
    id: Date.now(),
    check: false,
  };

  todo_input.value = "";

  toDos.push(newToDo);
  todoInsert(newToDo);
  saveToDoList();
}

const saveList = localStorage.getItem(TODOS_KEY);

if (saveList != null) {
  toDos = JSON.parse(saveList);
  toDos.forEach(todoInsert);
}

todo_form.addEventListener("submit", todoInputEvent);
