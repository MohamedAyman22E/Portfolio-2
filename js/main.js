// service
let closeBtn = document.querySelectorAll(".service_model .close");
let service_cardLink = document.querySelectorAll(".service_card a");
// let service_card = document.querySelectorAll(".service_card ");
let serviceModel = document.querySelector(".service_model");

service_cardLink.forEach(card => {
  card.addEventListener("click", () => {
    serviceModel.classList.add("active");
  });
});
closeBtn.forEach(close => {
  close.addEventListener("click", () => {
    serviceModel.classList.remove("active");
  });
});
