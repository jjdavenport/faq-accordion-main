const faq = document.querySelectorAll(".faq");

faq.forEach((faq, i) => {
  const question = faq.querySelector(".question");
  const answer = faq.querySelector(".answer");
  const plusBtn = faq.querySelector(".plus-button");
  const minusBtn = faq.querySelector(".minus-button");
  question.addEventListener("click", () => {
    answer.classList.toggle("answer-active");
    plusBtn.classList.toggle("plus-button-inactive");
    minusBtn.classList.toggle("minus-button-active");
  });
  if (i === 0) {
    answer.classList.add("answer-active");
    plusBtn.classList.add("plus-button-inactive");
    minusBtn.classList.add("minus-button-active");
  }
});
