function calculateDollarToCoint () {
  const errorMessage = "Enter a valid number!";
  const cointInput = document.getElementById("coinInput").value;
  const bitcoint = parseInt(cointInput);
  const moneyInput = document.getElementById("moneyInput").value;
  const money = parseInt(moneyInput);

  let result = "";
  if (!Number.isInteger(bitcoint) || !Number.isInteger(money) || bitcoint < 0 || money < 0) {
    result = errorMessage;
  } else {
    result = "You can by " + (money / bitcoint).toFixed(8) + " BTC";
  }

  document.getElementById("result").innerText = result;
  console.log(result);
}
