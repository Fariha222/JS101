const TOTAL_MONTHS = 12;
const readline = require('readline-sync');

function prompt (input) {
  console.log(`==> ${input}`);
}

function print (output) {
  console.log(`>> ${output}`);
}

function twoDecimalPlaces (payment) {
  return  (payment).toFixed(2);
}

function invalidNumber (number) {
  return number.trimStart() === "" || Number.isNaN(Number(number));
}

let totalLoan;

function enterTotalLoan() {
  prompt("Enter the total amount of loan in $:");
  totalLoan = readline.question();

  while (invalidNumber.totalLoan) {
    prompt("Enter a valid amount:");
    totalLoan = readline.question();
  }
  return totalLoan;
}

let annualPercentageRate;

function enterAnnualPercentage() {
  prompt("Enter the Annual Percentage Rate (%):");
  annualPercentageRate = readline.question();

  while (invalidNumber(annualPercentageRate)) {
    prompt("Enter a valid Percentage:");
    annualPercentageRate = readline.question();
  }
  return annualPercentageRate;
}

let loanDurationYears;

function enterLoanTimePeriod() {
  prompt('Enter the time in years for the loan:');
  loanDurationYears = readline.question();
  while (invalidNumber(totalLoan)) {
    prompt("Enter a valid number:");
    loanDurationYears = readline.question();
  }
  return loanDurationYears;
}

let downPayment;

function enterDownPayment() {
  prompt("Enter a down payment for the loan in $:");
  downPayment = readline.question();
  while (invalidNumber(downPayment)) {
    prompt("Enter a valid amount:");
    downPayment = readline.question();
  }
  return downPayment;
}

let plan;
function paymentTimePlan() {
  prompt("Enter payment plan:\n 1.Monthly 2.Quarterly 3.Biannually 4.Yearly 5.All payment plans ");
  plan = readline.question();

  while (!['1','2','3','4','5'].includes(plan)) {
    prompt("Enter a valid option!");
    plan = readline.question();
  }
  return plan;
}

let monthlyPayment;

let payPlan;
function rangeOfPaymentPlan (timeInput) {
  switch (timeInput) {
    case '1' :
      payPlan = prompt(`The monthly payment is $${twoDecimalPlaces(monthlyPayment)}`);
      break;
    case '2' :
      payPlan = prompt(`The quarterly payment is $${twoDecimalPlaces(monthlyPayment * 4)}`);
      break;
    case '3' :
      payPlan = prompt(`The biannual payment is $${twoDecimalPlaces(monthlyPayment * 6)}`);
      break;
    case '4' :
      payPlan = prompt(`The yearly payment is $${twoDecimalPlaces(monthlyPayment * 12)}`);
      break;
    case '5' :
      payPlan = prompt(`The weekly payment is $${twoDecimalPlaces(monthlyPayment / 4)}\n` + `The monthly payment is $${twoDecimalPlaces(monthlyPayment)}\n` + `The quarterly payment is $${twoDecimalPlaces(monthlyPayment * 4)}\n` + `The biannual payment is $${twoDecimalPlaces(monthlyPayment * 6)}\n` + `The yearly payment is $${twoDecimalPlaces(monthlyPayment * 12)}`);
      break;
  }
  return payPlan;
}
let calculateAgain;
function anotherCalculation () {
  prompt ("\n Would you like to perform another calculation? (y/n)");
  calculateAgain = readline.question().toLowerCase();

  while ( calculateAgain !== "y" && calculateAgain !== "n") {
    prompt("Enter y or n!");
    calculateAgain = readline.question().toLowerCase();
  }
  return calculateAgain;
}


function loanMonths (years) {
  return years * 12;
}

function interestPercentMonthly (apr) {
  let monthlyInterestPercent = apr / TOTAL_MONTHS;  //monthly interest percetage
  return monthlyInterestPercent / 100;
}

function calculateMonthlyPayment (loan, monthlyInterest, loanMonthDuration) {
  return loan * (monthlyInterest
  / (1 - Math.pow((1 + monthlyInterest),
    (-loanMonthDuration))));
}
console.clear();

prompt('"Welcome to the loan Calculator"');

while (true) {
  enterTotalLoan();
  print(`$${totalLoan}`);

  enterAnnualPercentage();
  print(`${annualPercentageRate}%`);

  enterLoanTimePeriod();
  print(`$${loanDurationYears} Years`);

  enterDownPayment();
  print(`$${downPayment}`);

  paymentTimePlan();

  let loanDurationInMonths = loanMonths(loanDurationYears);

  let monthlyInterestDecimal = interestPercentMonthly(annualPercentageRate);

  if (downPayment) { //user enter a valid number for down payment

    let loanMinusDpay = totalLoan - downPayment;
    if (annualPercentageRate !== "0") {                  //case of APR with a value
      monthlyPayment = calculateMonthlyPayment (loanMinusDpay,
        monthlyInterestDecimal, loanDurationInMonths);
    }  else  {                                     //no downpayment and APR is zero
      monthlyPayment = loanMinusDpay / loanDurationInMonths;
    }
  }  else if (annualPercentageRate !== "0") {  //no down payment
    monthlyPayment = calculateMonthlyPayment (totalLoan,
      monthlyInterestDecimal, loanDurationInMonths);
  }  else  {
    monthlyPayment = totalLoan / loanDurationInMonths;
  }
  rangeOfPaymentPlan(plan);

  anotherCalculation();

  console.clear();

  if (calculateAgain === "n") break;
}
