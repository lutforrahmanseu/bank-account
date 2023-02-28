//withdraw part
document.getElementById("btn-withdraw").addEventListener("click", function () {
  const withdrawField = document.getElementById("withdraw-field");
  const withdrawText = withdrawField.value;
  const withdrawString = parseFloat(withdrawText);
  withdrawField.value = "";

  if (isNaN(withdrawString)) {
    alert("please a valid number");
    return;
  }

  const withdrawAmount = document.getElementById("withdraw-amount");
  const withdrawAmountText = withdrawAmount.innerText;
  const withdrawAmountString = parseFloat(withdrawAmountText);

  const balanceAmount = document.getElementById("balance-amount");
  const balanceAmountText = balanceAmount.innerText;
  const balanceAmountString = parseFloat(balanceAmountText);

  if (withdrawString > balanceAmountString) {
    alert("Can't be lifted");
    return;
  }
  const totalWithdraw = withdrawAmountString + withdrawString;
  withdrawAmount.innerText = totalWithdraw;

  const newBalanceTotal = balanceAmountString - withdrawString;
  balanceAmount.innerText = newBalanceTotal;
});
