$(() => {
  $("#load-json").click(() => {
    // Clear form, message & warning before loading json
    clearForm();

    // Fetch data from JSON file
    fetch("/scripts/sample.json")
      .then((response) => response.json())
      .then((response) => {
        const {
          breakfastServed,
          checkInDate,
          checkOutDate,
          email,
          firstName,
          lastName,
        } = response;

        // Display on form
        $("#first-name").val(firstName);
        $("#last-name").val(lastName);
        $("#email").val(email);
        $("#check-in-date").val(checkInDate);
        $("#check-out-date").val(checkOutDate);
        if (breakfastServed)
          document.getElementsByName("breakfast-checked")[0].checked = true;
        else document.getElementsByName("breakfast-checked")[1].checked = true;
      });
  });
});
