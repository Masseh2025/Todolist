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
                <div class="todo-list__task-time">0:00</div>
                <div class="menu"></div>
              </li>`
    );
  }

  removeTask() {
    console.log("hi");
  }
}

const input = document.querySelector("#task-input");
const list = document.querySelector("[data-list]");

const todoList = new TodoList(input, list);

input.addEventListener("keyup", function (e) {
  if (input.value === "") return;
  if (e.key === "Enter") {
    todoList.addTask(input.value);
  }
});
