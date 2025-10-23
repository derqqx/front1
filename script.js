// Task 0: First Script
console.log("Adilzhan Zhumash – Group SE-2422");
alert("Hello, JavaScript World!");

// Task 1: Variables & Operators
let name = "Adilzhan";
let age = 18;
let student = true;
console.log("Name:", name, "Age:", age, "Student:", student);
let sum = 5 + 10;
console.log("5 + 10 =", sum);
let sentence = "Hello, my name is " + name + " and I am " + age + " years old.";
console.log(sentence);

// Task 2: Changing Content
function changeText() {
  document.getElementById("text-change").innerText = "The text has been changed!";
}

// Task 3: Changing Styles
function changeColor() {
  document.getElementById("colorBox").style.background = "#4CAF50";
  document.getElementById("colorBox").style.color = "white";
}
function changeFontSize() {
  document.getElementById("colorBox").style.fontSize = "20px";
}

// Task 4: Creating & Removing Elements
function addItem() {
  let li = document.createElement("li");
  li.textContent = "New Item";
  document.getElementById("itemList").appendChild(li);
}
function removeItem() {
  let list = document.getElementById("itemList");
  if (list.lastElementChild) list.removeChild(list.lastElementChild);
}

// Task 5: Mouse Events
let box = document.getElementById("hoverBox");
box.addEventListener("mouseover", function() {
  box.style.background = "#4CAF50";
  box.style.color = "white";
});
box.addEventListener("mouseout", function() {
  box.style.background = "#ccc";
  box.style.color = "black";
});

// Task 6: Keyboard Events
let input = document.getElementById("liveInput");
let display = document.getElementById("displayText");
input.addEventListener("keyup", function() {
  display.innerText = input.value;
});

// Task 7: Form Validation
document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault();
  let name = document.getElementById("nameField").value;
  let email = document.getElementById("emailField").value;
  let pass = document.getElementById("passwordField").value;
  let error = "";

  if (!name || !email || !pass) {
    error = "Please fill in all fields.";
  } else {
    error = "";
    alert("Form submitted successfully!");
  }
  document.getElementById("errorMessage").innerText = error;
});

// Task 8: To-Do List
function addTask() {
  let input = document.getElementById("taskInput");
  let taskText = input.value.trim();
  if (taskText === "") return;

  let li = document.createElement("li");
  li.textContent = taskText;

  // delete button
  let delBtn = document.createElement("button");
  delBtn.textContent = "Delete";
  delBtn.onclick = function() {
    li.remove();
  };

  li.appendChild(delBtn);
  document.getElementById("taskList").appendChild(li);
  input.value = "";
}