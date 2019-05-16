let myAccount = {
  name : "Richard Long",
  expenses : 0,
  income : 0
}

function addExpense(account, amount) {
  account.expenses += amount;
  console.log(account);      
}

function addIncome(account,myincome) {
  account.income += myincome;
}


function restAccount(account) {
  account.expenses = 0;
  account.income = 0;
}

function getAccountSummary(account) {
  let balance = account.income - account.expenses;  
  return(`Account for ${account.name} has ${balance}. ${account.income} in income. ${account.expenses} in expenses`);
}

console.log(myAccount);
addIncome(myAccount,1000);
addExpense(myAccount,100);
addExpense(myAccount,100);
console.log(getAccountSummary(myAccount));
restAccount(myAccount)
console.log(getAccountSummary(myAccount));

