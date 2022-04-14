// Global variables
const form = document.querySelector(".needs-validation");
let firstName,
  lastName,
  email,
  checkInDate,
  checkOutDate,
  breakfastServed = "";

// Global functions
const clearForm = () => {
  form.reset();
  form.classList.remove("was-validated");
  document.querySelector("#warn").style.display = "none";
  document.querySelector("#success").style.display = "none";
};
