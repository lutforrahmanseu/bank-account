//deposit part
document.getElementById("btn-deposit").addEventListener("click", function () {
  const depositField = document.getElementById("deposit-field");
  const depositValue = depositField.value;
  const depositString = parseFloat(depositValue);

  const depositAmount = document.getElementById("deposit-amount");
  const depositAmountText = depositAmount.innerText;
  const depositAmountString = parseFloat(depositAmountText);

  const totalDeposit = depositString + depositAmountString;
  depositAmount.innerText = totalDeposit;
  const balanceAmount = document.getElementById("balance-amount");
  const balanceAmountText = balanceAmount.innerText;
  const balanceAmountString = parseFloat(balanceAmountText);
  const totalBalance = balanceAmountString + depositString;
  balanceAmount.innerText = totalBalance;
  depositField.value = "";
  if (isNaN(depositValue)) {
    alert("Is Not a number");
  }
});
