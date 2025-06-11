const heading = document.getElementById("main-heading");
heading.textContent = "Updated Student List";

const container = document.querySelector(".container");
container.style.backgroundColor = "#1b1b72";

const secondItem = document.querySelector("#student-list").children[1];
secondItem.style.color = "yellow";

const newStudent = document.createElement("li");
newStudent.textContent = "Popatlal";
newStudent.classList.add("student");
document.getElementById("student-list").appendChild(newStudent);

const thirdItem = document.querySelector("#student-list").children[2];
thirdItem.remove();

console.log(document.getElementById("student-list").parentElement);
console.log(document.getElementById("student-list").children);
console.log(document.getElementById("student-list").firstElementChild);
console.log(document.getElementById("student-list").lastElementChild);

const fourthItem = document.querySelector("#student-list").children[3];
console.log(fourthItem.nextElementSibling);
console.log(fourthItem.previousElementSibling);

document.getElementById("add-btn").addEventListener("click", () => {
  const li = document.createElement("li");
  li.textContent = "New Student";
  li.className = "student";
  document.getElementById("student-list").appendChild(li);
});
