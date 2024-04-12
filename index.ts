#! /usr/bin/env node

import inquirer from "inquirer";

let myBalance = 20000;
let pinCode = 1254;

let atm = await inquirer.prompt([
  {
    message: "Enter Your Pin Number: ",
    type: "number",
    name: "pinNumber",
  }
]);
    if (atm.pinNumber === pinCode) {
        console.log("Right Code! ");

        let operationAnswer = await inquirer.prompt(
        [
            {
                message: "Please Select One Option",
                type : "list",
                name: "operation",
                choices: ["Withdraw", "Check Balance"]
            }
        ]
        );
        console.log(operationAnswer);

        if (operationAnswer.operation === "Withdraw") {
            let answer = await inquirer.prompt([
                {
                    message: "fast",
                    type:"list",
                    name: "remaining",
                    choices:["Fast Cash", "Enter Your Amount"]
                }
            ])
            if (answer.remaining === "Fast Cash"){
                let fastCashAns = await inquirer.prompt(
                    [
                        {
                            message: "Select Your Amount",
                            type: "list",
                            name: "cashAmount",
                            choices: ["1000", "5000", "10000", "20000", "25000"]
                        }
                    ]
            )
                if (fastCashAns.cashAmount > myBalance){
                console.log("Insufficient Amount");
            }
                else if (myBalance -= fastCashAns.cashAmount){
                    console.log(`${fastCashAns.cashAmount} withdraw successfully`);
                    console.log(`Now Your Balance Is: ${myBalance}`);
                }
            }
                else if (answer.remaining === "Enter Your Amount"){
                let enterAmount = await inquirer.prompt(
                    [
                        {
                            message: "Enter Your Amount",
                            type: "number",
                            name: "amount",
                        }
                    ]
                );
                if (enterAmount.amount > myBalance){
                    console.log("Insufficient Amount");
            }
                else if (myBalance -= enterAmount.amount){
                    console.log(`${enterAmount.amount} withdraw successfully`);
                    console.log(`Now Your Balance Is: ${myBalance}`);
          }

        }
        } 
        else if (operationAnswer.operation === "Check Balance")
          console.log("Your Balance is:" + myBalance);

}
else{
    console.log("Please Put Wright Pin Number");
   }