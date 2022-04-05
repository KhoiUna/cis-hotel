// Declare DOM elements
const form = document.querySelector(".needs-validation");

// Declare functions
const validateForm = () => {
  form.classList.add("was-validated");

  document.querySelector("#success").style.display = "none";
  document.querySelector("#warn").style.display = "none";

  if (document.getElementsByName("breakfast-checked")[0].checked)
    document.querySelector(".breakfast-dropdown").style.display = "block";
  if (document.getElementsByName("breakfast-checked")[1].checked)
    document.querySelector(".breakfast-dropdown").style.display = "none";
};

$(function () {
  form.addEventListener("change", validateForm);
  form.addEventListener("keyup", validateForm);
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    event.stopPropagation();

    const checkInDate = new Date($("#check-in-date").datepicker("getDate"));
    const checkOutDate = new Date($("#check-out-date").datepicker("getDate"));

    if (!(checkOutDate > checkInDate)) {
      document.querySelector("#warn").innerText =
        "Check-out date should be later than check-in date";
      return (document.querySelector("#warn").style.display = "block");
    }

    if (form.checkValidity()) {
      form.reset();
      form.classList.remove("was-validated");
      document.querySelector("#warn").style.display = "none";
      document.querySelector("#success").style.display = "block";
    } else {
      document.querySelector("#warn").innerText = "Invalid form";
      document.querySelector("#warn").style.display = "block";
    }
  });

  $("#check-in-date").datepicker();
  $("#check-out-date").datepicker();

  $("#clear").click(() => {
    form.classList.remove("was-validated");
    document.querySelector(".breakfast-dropdown").style.display = "none";
    form.reset();
  });
});
