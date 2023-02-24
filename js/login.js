document.getElementById("bank-submit").addEventListener("click", function () {
  const firstInput = document.getElementById("first-input");
  const firstText = firstInput.value;
  firstInput.value = "";

  const secondInput = document.getElementById("second-input");
  const secondText = secondInput.value;
  secondInput.value = "";
  if (firstText === "lutfor@gmail.com" && secondText === "lutfor") {
    window.location.href = "bank.html";
  } else {
    alert("Invalid User");
  }
});
