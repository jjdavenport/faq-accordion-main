const b1 = document.getElementById("btn1");
const a1 = document.getElementById("answer1");
const m1 = document.getElementById("minus-btn1");
const q1 = document.getElementById("question1");

const b2 = document.getElementById("btn2");
const a2 = document.getElementById("answer2");
const m2 = document.getElementById("minus-btn2");
const q2 = document.getElementById("question2");

const b3 = document.getElementById("btn3");
const a3 = document.getElementById("answer3");
const m3 = document.getElementById("minus-btn3");
const q3 = document.getElementById("question3");

const b4 = document.getElementById("btn4");
const a4 = document.getElementById("answer4");
const m4 = document.getElementById("minus-btn4");
const q4 = document.getElementById("question4");

function openQuestion() {
  a1.classList.toggle("answer-active");
  b1.classList.toggle("plus-btn");
  m1.classList.toggle("minus-btn");
}

openQuestion();

q1.addEventListener("click", () => {
  a1.classList.toggle("answer-active");
  b1.classList.toggle("plus-btn");
  m1.classList.toggle("minus-btn");
});

q2.addEventListener("click", () => {
  a2.classList.toggle("answer-active");
  b2.classList.toggle("plus-btn");
  m2.classList.toggle("minus-btn");
});

q3.addEventListener("click", () => {
  a3.classList.toggle("answer-active");
  b3.classList.toggle("plus-btn");
  m3.classList.toggle("minus-btn");
});

q4.addEventListener("click", () => {
  a4.classList.toggle("answer-active");
  b4.classList.toggle("plus-btn");
  m4.classList.toggle("minus-btn");
});
