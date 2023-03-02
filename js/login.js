document.getElementById("submit-btn").addEventListener("click", function () {
  const passField = document.getElementById("pass-field");
  const passValue = passField.value;
  passField.value = "";

  const emailField = document.getElementById("email-field");
  const emailValue = emailField.value;
  emailField.value = "";
  if (emailValue === "lutfor@gmail.com" && passValue === "lutfor") {
    window.location.href = "bank.html";
  } else {
    alert("Invalid User");
  }
});
