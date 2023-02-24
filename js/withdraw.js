//withdraw part
document.getElementById("btn-withdraw").addEventListener("click", function () {
  const withdrawField = document.getElementById("withdraw-field");
  const withdrawText = withdrawField.value;
  const withdrawString = parseFloat(withdrawText);

  const withdrawAmount = document.getElementById("withdraw-amount");
  const withdrawAmountText = withdrawAmount.innerText;
  const withdrawAmountString = parseFloat(withdrawAmountText);
  const totalWithdraw = withdrawString + withdrawAmountString;
  withdrawAmount.innerText = totalWithdraw;

  const balanceAmount = document.getElementById("balance-amount");
  const balanceAmountText = balanceAmount.innerText;
  const balanceAmountString = parseFloat(balanceAmountText);
  balanceAmount.innerText = balanceAmountString - totalWithdraw;
  withdrawField.value = "";
});
