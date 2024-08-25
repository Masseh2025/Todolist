class TodoList {
  constructor(taskInput, taskList) {
    this.taskInput = taskInput;
    this.taskList = taskList;
  }

  addTask(text) {
    this.taskList.insertAdjacentHTML(
      "afterend",
      `              <li class="todo-list__task">
                <div class="todo-list__task-container">
                  <input type="checkbox" name="" id="checkbox">${text}
                </div>
                <div class="todo-list__task-time">${new Date()}</div>
                <div class="menu" data-menu></div>
              </li>`
    );
    const menu = document.querySelector("[data-menu]");
    menu.addEventListener("click", function (e) {
      todoList.removeTask(e);
    });
    this.save();
  }

  removeTask(e) {
    e.target.parentElement.remove();
    this.save();
  }

  save() {
    localStorage.setItem("data", content.innerHTML);
  }

  showContent() {
    content.innerHTML = localStorage.getItem("data");
    const input = document.querySelector("#task-input");
    const list = document.querySelector("[data-list]");

    const todoList = new TodoList(input, list);

    input.addEventListener("keyup", function (e) {
      if (input.value === "") return;
      if (e.key === "Enter") {
        todoList.addTask(input.value);
      }
    });

    const menu = document.querySelectorAll("[data-menu]");
    for (const item of menu) {
      item.addEventListener("click", function (e) {
        todoList.removeTask(e);
      });
      console.log(item);
    }
  }
}

const input = document.querySelector("#task-input");
const list = document.querySelector("[data-list]");
const content = document.querySelector("[data-content]");

const todoList = new TodoList(input, list);

input.addEventListener("keyup", function (e) {
  if (input.value === "") return;
  if (e.key === "Enter") {
    todoList.addTask(input.value);
  }
});

// // function showContent() {
// //   content.innerHTML = localStorage.getItem("data");
// // }
// // showContent();

// // console.log(content.innerHTML);

// todoList.showContent();

todoList.showContent();
