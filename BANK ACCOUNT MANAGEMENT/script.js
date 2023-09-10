// Create a constructor function called BankAccount that takes accountNumber, name, type, and balance as arguments.
// Inside the constructor, initialize the properties of the bank account object.


function BankAccount(accountNumber, name, type ,balance) {
    this.accountNumber = accountNumber;
    this.name = name;
    this.type = type;
    this.balance = balance;
    this.deposit = function(amount) {
        this.balance = Number(this.balance) + Number(amount);

    }
    this.withdraw = function(amount) {
        if(this.balance > amount) {
            this.balance = Number(this.balance) - Number(amount);
        }
        else {
            console.warn('insufficient balance');
        }
    }
    this.checkBalance = function() {
        console.log(this.balance);
    }
    this.isActive = function() {
        console.log(this.type);

    }
}

//here elements is the array of accounts ;

function getTotalBalance(elements) {
    let sum = 0;
    elements.forEach((ele) => {
        if(ele.type == 'active') {
            sum += Number(ele.balance);
        }
    })
    return sum; 
}


// added account type active/ inactive

let account1 = new BankAccount(123451, 'person1', 'active', 53454);
let account2 = new BankAccount(123452, 'person2', 'active', 56343);
let account3 = new BankAccount(123453, 'person3', 'inactive', 65654);
let account4 = new BankAccount(123454, 'person4', 'active', 93596);
let account5 = new BankAccount(123455, 'person5', 'active', 85847);
let account6 = new BankAccount(123456, 'person6', 'inactive', 48374);
let account7 = new BankAccount(123457, 'person7', 'active', 34333);
let account8 = new BankAccount(123458, 'person8', 'active', 67574);
let account9 = new BankAccount(123459, 'person9', 'inactive', 94834);

let accounts = [account1, account2, account3, account4, account5, account6, account7, account8, account9];

accounts.forEach((account) => {
    console.log(account);
})

console.log(getTotalBalance(accounts));






// Add the following methods to the BankAccount prototype:
// deposit(amount) - Deposits the specified amount into the account.
// withdraw(amount) - Withdraws the specified amount from the account if the balance is sufficient.
// checkBalance() - Prints the account's balance.
// isActive() - Checks and returns whether the account is active.
// Create multiple BankAccount objects representing different accounts.

// Perform a series of deposit, withdrawal, and balance check operations on these accounts.

// Test the isActive method to check if the accounts are active.

// Implement a function getTotalBalance that calculates and returns the total balance of all active accounts.

// Test the getTotalBalance function to display the total balance of all active accounts.