document.getElementById("deposit-btn").addEventListener("click", function () {
  const depositField = document.getElementById("deposit-field");

  const depositFieldValue = depositField.value;
  const depositFieldString = parseFloat(depositFieldValue);
  depositField.value = "";
  if (isNaN(depositFieldString)) {
    alert("please a valid number");
    return;
  }

  const depositAmount = document.getElementById("deposit-amount");
  const depositAmountText = depositAmount.innerText;
  const depositString = parseFloat(depositAmountText);

  const totalDeposit = depositFieldString + depositString;
  depositAmount.innerText = totalDeposit;

  const balanceAmount = document.getElementById("balance-amount");
  const balanceAmountValue = balanceAmount.innerText;
  const balanceString = parseFloat(balanceAmountValue);
  const totalBalanceAmount = depositFieldString + balanceString;
  balanceAmount.innerText = totalBalanceAmount;
});
