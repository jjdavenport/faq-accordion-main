const b1 = document.getElementById("b1");
const a1 = document.getElementById("1");
const m1 = document.getElementById("m1");

const b2 = document.getElementById("b2");
const a2 = document.getElementById("2");
const m2 = document.getElementById("m2");
const b3 = document.getElementById("b3");
const a3 = document.getElementById("3");
const m3 = document.getElementById("m3");

const b4 = document.getElementById("b4");
const a4 = document.getElementById("4");
const m4 = document.getElementById("m4");

b1.addEventListener("click", () => {
  a1.classList.toggle("a-active");
  b1.style = "display: none";
  m1.style = "display: flex";
});

m1.addEventListener("click", () => {
  a1.classList.toggle("a-active");
  m1.style = "display: none";
  b1.style = "display: flex";
});

b2.addEventListener("click", () => {
  a2.classList.toggle("a-active");
  b2.style = "display: none";
  m2.style = "display: flex";
});

m2.addEventListener("click", () => {
  a2.classList.toggle("a-active");
  m2.style = "display: none";
  b2.style = "display: flex";
});

b3.addEventListener("click", () => {
  a3.classList.toggle("a-active");
  b3.style = "display: none";
  m3.style = "display: flex";
});

m3.addEventListener("click", () => {
  a3.classList.toggle("a-active");
  m3.style = "display: none";
  b3.style = "display: flex";
});

b4.addEventListener("click", () => {
  a4.classList.toggle("a-active");
  b4.style = "display: none";
  m4.style = "display: flex";
});

m4.addEventListener("click", () => {
  a4.classList.toggle("a-active");
  m4.style = "display: none";
  b4.style = "display: flex";
});
