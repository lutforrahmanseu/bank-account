document.getElementById("withdraw-btn").addEventListener("click", function () {
  //step 2
  const withdrawField = document.getElementById("withdraw-field");
  const withdrawFieldValue = withdrawField.value;
  const withdrawValueString = parseFloat(withdrawFieldValue);
  withdrawField.value = "";
  if (isNaN(withdrawValueString)) {
    alert("please a valid number");
    return;
  }
  //step 3
  const withdrawAmount = document.getElementById("withdraw-amount");
  const withdrawText = withdrawAmount.innerText;
  const withdrawTextString = parseFloat(withdrawText);

  //step 5
  const balanceWithdraw = document.getElementById("balance-amount");
  const balanceWithdrawText = balanceWithdraw.innerText;
  const balanceWithdrawString = parseFloat(balanceWithdrawText);

  if (withdrawValueString > balanceWithdrawString) {
    alert("no");
    return;
  }
  //step 4
  const totalWithdraw = withdrawTextString + withdrawValueString;
  withdrawAmount.innerText = totalWithdraw;

  const totalBalanceWithdraw = balanceWithdrawString - withdrawValueString;
  balanceWithdraw.innerText = totalBalanceWithdraw;
});
