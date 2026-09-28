const shareBtn = document.querySelector(".card__color");
const cardName = document.querySelector(".card__name");
const cardSocial = document.querySelector(".card__social");

shareBtn.addEventListener("click", function () {
  shareBtn.classList.toggle("active");
  cardName.classList.toggle("hidden");
  cardSocial.classList.toggle("active");
});
