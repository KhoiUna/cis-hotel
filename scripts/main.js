const form = document.querySelector(".needs-validation");

form.addEventListener("keyup", (event) => {
  form.classList.add("was-validated");
  document.querySelector("#success").style.display = "none";
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  event.stopPropagation();

  form.classList.add("was-validated");

  if (form.checkValidity()) {
    form.reset();
    form.classList.remove("was-validated");
    document.querySelector("#success").style.display = "block";
  }
});

$(function () {
  $("#check-in-date").datepicker();
  $("#check-out-date").datepicker();
});
