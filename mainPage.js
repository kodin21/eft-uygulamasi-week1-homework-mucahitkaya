const accounts = [
    {
        iban: 'trxx yyyy xxxx yyyy',
        balance: 100,
    },
    {
        iban: 'trxx yyyy xxxx yyyx',
        balance: 5040,
    },
    {
        iban: 'trxx yyyy xxxx xyyx',
        balance: 10594,
    }
];
const user = {
    name: 'Jane',
    surname: 'Doe',
    accounts
};

function bakiyeCheck(){
    
    const selectedIban= document.getElementById("accounts").value
    //account dediğimiz şey array değerleri array değerlerinin de değerelerine
    //ulaşabilmek için . yaparak ulaştık
    const balanceOfSelectedIBan=accounts.find(account=>account.iban==selectedIban)
    console.log(balanceOfSelectedIBan.balance);
    document.getElementById("selected-iban").innerText=selectedIban;
    
    
}

function ibanInput(){
    const ibanValue =document.getElementById("iban-input").value;
    document.getElementById("gönderilecek-iban").innerText=ibanValue;
    
}
function göndermeKosullari(){
    const selectedIban= document.getElementById("accounts").value
    const inputValue=document.getElementById("para-miktari").value;
    console.log(inputValue);
    const balanceOfSelectedIBan=accounts.find(account=>account.iban==selectedIban)
    if(inputValue>balanceOfSelectedIBan.balance)alert("Keşke be agam");
    else if()
    
}

/* 
money.addEventListener("blur",()=> {

    const selectedIban=document.querySelector("#ibans");

    const selectedAccount= accounts.find(account=>account.iban==selectedIban.value)
    console.log(selectedAccount.balance);

    if(money.value <= selectedAccount.balance ){
        btn.disabled=false;
    }
    else{
        alert("yüksek rakam girdiniz");

    }

 })*/






