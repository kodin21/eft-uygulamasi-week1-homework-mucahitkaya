const accounts = [
  {
    iban: "trxx yyyy xxxx yyyy",
    balance: 100,
  },
  {
    iban: "trxx yyyy xxxx yyyx",
    balance: 5040,
  },
  {
    iban: "trxx yyyy xxxx xyyx",
    balance: 10594,
  },
];
const user = {
  name: "Jane",
  surname: "Doe",
  accounts,
};

function bakiyeCheck() {
  const selectedIban = document.getElementById("accounts").value;
  const balanceOfSelectedIBan = accounts.find(
    (account) => account.iban == selectedIban
  );
  console.log(balanceOfSelectedIBan.balance);
}

function gondermeKosullari() {
  const inputValue = document.getElementById("iban-input").value;
  const selectedIban = document.getElementById("accounts").value;
  const money = document.getElementById("money");
  const gonder = document.getElementById("money-gonder");

  const amountOfMoney = money.value;

  const IBANBalance = accounts.find((account) => account.iban == selectedIban);
  if (selectedIban != "" && inputValue != "") {
    if (amountOfMoney != "" && amountOfMoney > IBANBalance.balance) {
      alert("Maalesef Bakiye Yetersiz!");
      console.log("ğ");
      gonder.style.display = "none";
    } else if (amountOfMoney != "" && amountOfMoney <= IBANBalance.balance) {
      gonder.style.display = "block";
    }
  }
}

function sendingFuntion() {
  const selectedIban = document.getElementById("accounts").value;
  const money = document.getElementById("money");
  const amountOfMoney = money.value;
  const IBANBalance = accounts.find((account) => account.iban == selectedIban);

  if (amountOfMoney != "" && amountOfMoney <= 500) {
    alert("İşlem Başarılı");
  }
}
