let Name = prompt("please enter your Name");
let Surname = prompt("please enter your Surname");
document.write(Name + " "+ Surname + " is logged in");
const button = document.querySelector(".validate");

const form = querySelectorAll(".review");
const icons = document.querySelectorAll("form.i");

form.addEventListener("submit", e => {
    e.preventDefault();
const ul = document.createElement("ul");
const li = document.createElement("li");
li.textContent = validate.value;
form.append(ul);
ul.append(li);
validate.value="";
 button.addEventListener("click", () => {
     ul.delete(li);
});
});
