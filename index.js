import inquirer from "inquirer"; //calling inquirer an pakage
//store currency data
const currency = {
    USD: 1,
    EUR: 0.91,
    GBP: 0.76,
    INR: 74.57,
    PKR: 280
}; //set base currency
let userAnswer = await inquirer.prompt([
    {
        name: 'from',
        message: "Enter from Currency",
        type: 'list',
        choices: ['USD', 'EUR', 'GBP', 'INR', 'PKR']
    },
    {
        name: 'to',
        message: "Enter from Currency",
        type: 'list',
        choices: ['USD', 'EUR', 'GBP', 'INR', 'PKR']
    },
    {
        name: 'amount',
        message: "Enter your number",
        type: 'number'
    }
]);
let fromAmount = currency[userAnswer.from]; //exchange rate
let toAmount = currency[userAnswer.to]; //exchange rate
let amount = userAnswer.amount;
let baseAmount = amount / fromAmount; //USD base currency
let convertedAmount = baseAmount * toAmount;
console.log(convertedAmount);
