$(() => {
  $("#first-name").keyup((e) => {
    e.preventDefault();
    firstName = e.target.value;
  });

  $("#last-name").keyup((e) => {
    e.preventDefault();
    lastName = e.target.value;
  });

  $("#email").keyup((e) => {
    e.preventDefault();
    email = e.target.value;
  });
});
