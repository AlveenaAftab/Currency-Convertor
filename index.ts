import inquirer from "inquirer"; //calling inquirer an pakage

//store currency data
const currency :any = {
    USD: 1,
    EUR:0.91,
    GBP:0.76,
    INR:74.57,
    PKR: 280
}; //set base currency



let userAnswer= await inquirer.prompt(
    [
        {                                   //to store data we use user answer,we use variable to store inquirer data
           name: 'from',                           //await error b/c compiler doesnot ts config file so,
            message: "Enter from Currency",
            type: 'list',
            choices: ['USD','EUR','GBP','INR','PKR']
        },
        {
            name: 'to',                           //await error b/c compiler doesnot ts config file so,
            message: "Enter from Currency",
            type: 'list',
            choices: ['USD','EUR','GBP','INR','PKR']
        },
        {
            name:'amount',
            message:"Enter your number",
            type:'number'
        }
    ]
);
let fromAmount = currency[userAnswer.from] //exchange rate
let toAmount = currency[userAnswer.to]     //exchange rate
let amount = userAnswer.amount
let baseAmount = amount / fromAmount  //USD base currency
let convertedAmount = baseAmount * toAmount
console.log(convertedAmount);




