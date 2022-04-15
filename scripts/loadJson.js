$(() => {
  $("#load-json").click(() => {
    // Clear form, message & warning before loading json
    clearForm();

    // Fetch data from JSON file
    fetch(`${window.location.href}/sample.json`)
      .then((response) => response.json())
      .then((response) => {
        firstName = response.firstName;
        lastName = response.lastName;
        email = response.email;

        // Display on form
        $("#first-name").val(response.firstName);
        $("#last-name").val(response.lastName);
        $("#email").val(response.email);
        $("#check-in-date").val(response.checkInDate);
        $("#check-out-date").val(response.checkOutDate);
        if (response.breakfastServed)
          document.getElementsByName("breakfast-checked")[0].checked = true;
        else document.getElementsByName("breakfast-checked")[1].checked = true;
      });
  });
});
