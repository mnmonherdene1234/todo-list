const form = document.getElementById("form");
const tasks = document.getElementById("tasks");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const task = formData.get("task");

  const newLi = document.createElement("li");
  newLi.innerHTML = task;
  newLi.addEventListener("click", () => {
    newLi.classList.add("completed");
  });

  tasks.append(newLi);
});
