<<<<<<< HEAD
/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(t){
  let time_number = parseInt(t, 10);
  if (time_number < 12){
    return "Good Morning"
  }
  
  if (time_number<17) {
    return "Good Afternoon"
  }
  
    return "Good Evening"
  
}

/* Write your implementation of displayMessage() */


function displayMessage(msg) {
  document.getElementById("greeting").innerText = msg;
=======
/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(t){
  let time_number = parseInt(t, 10);
  if (time_number < 12){
    return "Good Morning"
  }
  
  if (time_number<17) {
    return "Good Afternoon"
  }
  
    return "Good Evening"
  
}

/* Write your implementation of displayMessage() */
function displayMessage(m){
  elemt = document.getElementById("greeting")
  elmt.textContent = m;
  
>>>>>>> 476edbd5ee3a06a6bcd3f446f890b84c6dee5ae4
}