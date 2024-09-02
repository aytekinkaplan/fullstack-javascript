document.addEventListener("DOMContentLoaded", () => {
  const taskInput = document.getElementById("taskInput");
  const addTaskBtn = document.getElementById("addTask");
  const taskList = document.getElementById("taskList");
  const clearCompletedBtn = document.getElementById("clearCompleted");
  const deleteAllBtn = document.getElementById("deleteAll");

  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  function renderTasks() {
    taskList.innerHTML = "";
    tasks.forEach((task, index) => {
      const li = document.createElement("li");
      li.innerHTML = `
              <span class="${task.completed ? "completed" : ""}">${
        task.text
      }</span>
              <div class="task-buttons">
                  <button class="complete-btn">${
                    task.completed ? "Undo" : "Complete"
                  }</button>
                  <button class="edit-btn">Edit</button>
                  <button class="delete-btn">Delete</button>
              </div>
          `;
      li.querySelector(".complete-btn").addEventListener("click", () =>
        toggleComplete(index)
      );
      li.querySelector(".edit-btn").addEventListener("click", () =>
        editTask(index)
      );
      li.querySelector(".delete-btn").addEventListener("click", () =>
        deleteTask(index)
      );
      taskList.appendChild(li);
    });
    saveTasks();
  }

  function addTask() {
    const text = taskInput.value.trim();
    if (text) {
      tasks.push({ text, completed: false });
      taskInput.value = "";
      renderTasks();
    }
  }

  function toggleComplete(index) {
    tasks[index].completed = !tasks[index].completed;
    renderTasks();
  }

  function editTask(index) {
    const newText = prompt("Edit task:", tasks[index].text);
    if (newText !== null) {
      tasks[index].text = newText.trim();
      renderTasks();
    }
  }

  function deleteTask(index) {
    tasks.splice(index, 1);
    renderTasks();
  }

  function clearCompleted() {
    tasks = tasks.filter((task) => !task.completed);
    renderTasks();
  }

  function deleteAll() {
    tasks = [];
    renderTasks();
  }

  function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }

  addTaskBtn.addEventListener("click", addTask);
  taskInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") addTask();
  });
  clearCompletedBtn.addEventListener("click", clearCompleted);
  deleteAllBtn.addEventListener("click", deleteAll);

  renderTasks();
});
