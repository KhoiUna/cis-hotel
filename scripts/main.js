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

$(() => {
  // Validate form onchange & onkeyup
  form.addEventListener("change", validateForm);
  form.addEventListener("keyup", validateForm);

  // Validate form when submit
  form.addEventListener("submit", (event) => {
    //Stop form from reloading page
    event.preventDefault();
    event.stopPropagation();

    // Get dates from datepickers
    const checkInDate = new Date($("#check-in-date").datepicker("getDate"));
    const checkOutDate = new Date($("#check-out-date").datepicker("getDate"));

    if (!(checkOutDate > checkInDate)) {
      document.querySelector("#success").style.display = "none";
      document.querySelector("#warn").innerText =
        "Check-out date should be later than check-in date";
      return (document.querySelector("#warn").style.display = "block");
    }

    // If form is valid, reset form & display success message, else show warning
    if (form.checkValidity()) {
      form.reset();
      form.classList.remove("was-validated");
      document.querySelector("#warn").style.display = "none";
      document.querySelector("#success").style.display = "block";

      submittedData.style.display = "block";
      submittedData.innerText =
        "First name: " +
        firstName +
        "\n" +
        "Last name: " +
        lastName +
        "\n" +
        "Email: " +
        email;
    } else {
      document.querySelector("#warn").innerText = "Invalid form";
      document.querySelector("#warn").style.display = "block";
    }
  });

  // Initialize datepickers
  $("#check-in-date").datepicker();
  $("#check-out-date").datepicker();

  $("#clear").click(() => {
    form.classList.remove("was-validated");
    document.querySelector(".breakfast-dropdown").style.display = "none";
    form.reset();
  });
});
