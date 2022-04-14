// Global variables
const form = document.querySelector(".needs-validation");
const submittedData = document.querySelector("#submitted_data");
let firstName,
  lastName,
  email = "";

// Global functions
const clearForm = () => {
  form.reset();
  form.classList.remove("was-validated");
  document.querySelector("#warn").style.display = "none";
  document.querySelector("#success").style.display = "none";

  submittedData.innerText = "";
};
