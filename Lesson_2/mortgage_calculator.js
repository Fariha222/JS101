/*mortgage/car loan calculator
-Welcome user to calculator
-prompt the amount of loan in dollars
-prompt APR in years
-prompt loan duration
-calculate loan duration in months
-calculate monthly interest rate
-use formula to compute monthly payment
-edge cases: invalid input; zero APR; downpayment; (yearly/weekly/monthly/biyearly/quarterly payment; percentage is a negative number)
*/
const readline = require('readline-sync');

function prompt(input) {
  console.log(`==> ${input}`);
}

function print(output) {
  console.log(`>> ${output}`);
}

function twoDecimalPlaces(payment) {
  return  (payment).toFixed(2);
}

function invalidNumber(number) {
  return number.trimStart() === "" || Number.isNaN(Number(number));
}

prompt('"Welcome to the loan Calculator"');

prompt("Enter the total amount of loan in $:");
let totalLoan = readline.question();

while (invalidNumber(totalLoan)) {
  prompt("Enter a valid amount:");
  totalLoan = readline.question();
}
print(`$${totalLoan}`);

prompt("Enter the Annual Percentage Rate (%):");
let annualPercentageRate = readline.question();

while (invalidNumber(annualPercentageRate)) {
  prompt("Enter a valid Percentage:");
  annualPercentageRate = readline.question();
}
print(`${annualPercentageRate}%`);

prompt('Enter the time in years for the loan:');
let loanDurationYears = readline.question();
while (invalidNumber(totalLoan)) {
  prompt("Enter a valid number:");
  loanDurationYears = readline.question();
}
print(`$${loanDurationYears} Years`);

prompt("Enter a down payment for the loan in $:");
let downPayment = readline.question();
while (invalidNumber(downPayment)) {
  prompt("Enter a valid amount:");
  downPayment = readline.question();
}
print(`$${downPayment}`);

prompt("Enter payment plan:\n 0.Weekly 1.Monthly 2.Quarterly 3.Biannually 4.Yearly 5.All payment plans ");
let plan = readline.question();

while(!['0','1','2','3','4','5'].includes(plan)) {
 prompt("Enter a valid option!");
 plan = readline.question();
}

let loanDurationInMonths = loanDurationYears * 12;

let monthlyPayment;

let monthlyInterestPercent = annualPercentageRate / 12;  //monthly interest percetage

let monthlyInterestDecimal =  monthlyInterestPercent / 100;  //monthly interest in decimals

if (downPayment) {  //if user enter a valid for down payment

let loanMinusDownPayment = totalLoan - downPayment;

if (annualPercentageRate !== "0") {    //case of APR with a value
  monthlyPayment = loanMinusDownPayment * (monthlyInterestDecimal / (1 - Math.pow((1 + monthlyInterestDecimal), (-loanDurationInMonths))));
}  else {    //no downpayment and annualPercentageRate is zero
 monthlyPayment = loanMinusDownPayment / loanDurationInMonths;
}
}  else {    //no downPayment
  if (annualPercentageRate !== "0") {
     monthlyPayment = totalLoan * (monthlyInterestDecimal / (1 - Math.pow((1 + monthlyInterestDecimal), (-loanDurationInMonths))));
  }  else {
            monthlyPayment = totalLoan / loanDurationInMonths;
          }

}

let paymentPlan;
switch (plan) {
  case '0':
    paymentPlan = monthlyPayment / 4;
    prompt(`The weekly payment is $${twoDecimalPlaces(paymentPlan)}`);
    break;
  case '1':
    paymentPlan = monthlyPayment;
    prompt(`The monthly payment is $${twoDecimalPlaces(paymentPlan)}`);
    break;
  case '2':
      paymentPlan = monthlyPayment * 4;
      prompt(`The quarterly payment is $${twoDecimalPlaces(paymentPlan)}`);
      break;
  case '3':
      paymentPlan = monthlyPayment * 6;
      prompt(`The biannual payment is $${twoDecimalPlaces(paymentPlan)}`);
      break;
  case '4':
      paymentPlan = monthlyPayment * 12;
      prompt(`The yearly payment is $${twoDecimalPlaces(paymentPlan)}`);
      break;
    case '5':
      prompt(`The weekly payment is $${twoDecimalPlaces(monthlyPayment / 4)}`);
      prompt(`The monthly payment is $${twoDecimalPlaces(monthlyPayment)}`);
      prompt(`The quarterly payment is $${twoDecimalPlaces(monthlyPayment * 4)}`);
      prompt(`The biannual payment is $${twoDecimalPlaces(monthlyPayment * 6)}`);
      prompt(`The yearly payment is $${twoDecimalPlaces(monthlyPayment * 12)}`);
      break;
    }
