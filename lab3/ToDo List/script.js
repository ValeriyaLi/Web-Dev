const message = document.getElementById("message");
const add = document.getElementById("add");
const allTasks = document.getElementById("allTasks");

add.addEventListener("click", addTask);

message.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
    addTask();
    }
});

function addTask() {
    if (message.value === "") return;

    const task = document.createElement("li");
    task.classList.add("task");
    task.innerHTML = '<input type="checkbox" class="check">' +
    message.value +
    '<button class="delete"></button>';

    allTasks.appendChild(task);
    message.value = "";

    const deleteButton = task.querySelector(".delete");
    deleteButton.addEventListener("click", function() {
    task.remove();
    });

    const checkbox = task.querySelector("input[type='checkbox']");
    checkbox.addEventListener("change", function() {
    task.classList.toggle("completed");
    });
}
