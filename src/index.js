document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("create-task-form");
  const taskList = document.getElementById("tasks");

  form.addEventListener("submit", function(event) {
      event.preventDefault(); // Prevent form refresh

      const inputField = document.getElementById("new-task-description");
      const taskText = inputField.value.trim();

      if (taskText === "") return; // Ignore empty input

      // Create task element
      const taskItem = document.createElement("li");
      taskItem.textContent = taskText;

      // Add delete button
      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "X";
      deleteBtn.addEventListener("click", () => taskItem.remove());

      taskItem.appendChild(deleteBtn);
      taskList.appendChild(taskItem);

      // Clear input field
      inputField.value = "";
  });
});
