const readlineSync = require('readline-sync');

const account1 = {
    accountNumber: '12345',
    routingNumber: '350293848',
    balance: 100000000
};


const account2 = JSON.parse(JSON.stringify(account1));
account2.accountNumber = '23456';
const bankAccounts = [account1, account2];

function myBankApp(){
    printOptionMenu();

    const userOption = Number(readlineSync.question('Please select option: '));

    switch(userOption){
        case 1:
            const account = findAccount();
            _logAccountInfo(account);
            break;
            case 2:
                withdawMoney();
                break;
            case 0:
                console.log('Good bye');
                break;
            default:
                console.log('Wrong option!!');
    }

}

function printOptionMenu(){
    const menu = `
    === This is Banking application ===
        1. Find an account
        2. Update balance
        0. Exit the program
    Please enter number action you need
    `
    console.log(menu);
}

function findAccount() {
    const accountNumber = getAccountNumber();
    return bankAccounts.find(function (account){
        if(account.accountNumber === accountNumber){
            return account;
        }
    });
}

function withdrawMoney(){
    const accountNumber = getAccountNumber();
    const account = findAccount(accountNumber);
    _logAccountInfo(account);

    const amountToWithDaw = Number(readlineSync.question('Please input an amount: '));
    const currentBalance = account.balance;
    if(account.balance < amountToWithDaw){
        console.log('Insufficient balance!!');
        return;
    }
    account.balance = currentBalance -  amountToWithDaw; // account.balance -= amountToWithDaw
    _logAccountInfo(account);

}

function getAccountNumber(){
    return readlineSync.question('Please input account number: ');
}

function _logAccountInfo(account){
    if(account){
        console.log("Your account is: ", account)
    } else {
        console.log("There is no account with provided info");
    }

}

myBankApp();