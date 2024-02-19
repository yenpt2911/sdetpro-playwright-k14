/**
 * Creating 1 object representing Bank Count Number with below structure:

{
    accountNumber: String,
    routingNumber: String,
    balance: Number
}
. Creating another Bank Account Object which clone from the previous one and update the accountNumber only . Put them into ann array call: bankAccounts

. Write a consolse interface app to:

allow user to find account by using accountNumber, if the account is existing, print the name and balance info out (NOT all the object)
allow user to withdraw the money and avoid user to take more than current balance
Note: Strongly recommend to create functions to process each tasks
=== Banking application===
1. Find an account
2. Update balance
0. Exit the program
 */


const readline = require('readline-sync');

const firstAccount = {
    accountNumber: '12345',
    routingNumber: '350293848',
    balance: 100000000
};


const secondAccount = JSON.parse(JSON.stringify(firstAccount));
secondAccount.accountNumber = '23456';
const bankAccounts = [firstAccount, secondAccount];

while (true) {
    bankingAction();
    const userInput = getActionInput();

    switch (userInput) {
        case '0':
            console.log('\nThank for utilizing. See ya!\n');
            isContinue = false;
            break;
        case '1':
            findAccount(bankAccounts);
            break;
        case '2':
            updateBalance(bankAccounts);
            break;
        default:
            console.log('\nInvalid input, please try again!\n');
            break;
    }
}

function findAccount(bankAccounts) {
    while (true) {
        const accountNumInput = readline.question('Please enter the account number (If you want to go back, please input "0"): ');

        if (accountNumInput === '0') {
            return;
        }

        const result = bankAccounts.find(acc => acc.accountNumber === accountNumInput);

        if (result) {
            console.log(`\nYour account number ${result.accountNumber} has balance: ${result.balance.toLocaleString()}.\n`);
            return result;
        } else {
            console.log('\nYour account number have not existed. Please try enter account number existed!\n');
        }
    }
}

function updateBalance(bankAccounts) {
    let withdrawMoney;
    const bankAcc = findAccount(bankAccounts);

    if (!bankAcc) {
        return null;
    }

    while (true) {
        withdrawMoney = readline.question(
            'Please input a valid value to withdraw, e.g.: 10000. (Please input "0" to go back): ',
            { validate: input => validateInput(input) }
        );

        if (withdrawMoney === '0') {
            return null;
        }

        if (withdrawMoney > 0 && withdrawMoney <= bankAcc.balance) {
            break;
        } else {
            console.log('\nInvalid amount. Please try again!\n');
        }
    }

    bankAcc.balance -= withdrawMoney;
    console.log(`\nYou have withdraw successfully ${withdrawMoney}. New balance: ${bankAcc.balance.toLocaleString()}\n`);
}

function getActionInput() {
    return readline.question('Please enter your selection: ');
}

function bankingAction() {
    const menu = `
    === This is Banking application ===
        1. Find an account
        2. Update balance
        0. Exit the program
    Please enter number action you need
    `
    console.log(menu);
}

function validateInput(input) {
    return /^[0-9]+$/.test(input);
}