const readline = require('readline-sync');
function twoDecimalPlaces (payment) {
  return  (payment).toFixed(2);
}
let monthlyPayment = 2000;
let plan;
function paymentTimePlan() {
  console.log("Enter payment plan:\n 0.Weekly 1.Monthly 2.Quarterly 3.Biannually 4.Yearly 5.All payment plans ");
  plan = readline.question();

  while (!['0','1','2','3','4','5'].includes(plan)) {
    console.log("Enter a valid option!");
    return readline.question();
  }
  return plan;
}

let payPlan;
function rangeOfPaymentPlan (timeInput) {
  switch (timeInput) {
		case '0' :
      payPlan = console.log(`The weekly payment is $${twoDecimalPlaces(monthlyPayment / 4)}`);
      break;
		case '1' :
      payPlan = console.log(`The monthly payment is $${twoDecimalPlaces(monthlyPayment)}`);
      break;
    case '2' :
      payPlan = console.log(`The quarterly payment is $${twoDecimalPlaces(monthlyPayment * 4)}`);
      break;
    case '3' :
      payPlan = console.log(`The biannual payment is $${twoDecimalPlaces(monthlyPayment * 6)}`);
      break;
    case '4' :
      payPlan = console.log(`The yearly payment is $${twoDecimalPlaces(monthlyPayment * 12)}`);
      break;
    case '5' :
      payPlan = console.log(`The weekly payment is $${twoDecimalPlaces(monthlyPayment / 4)}\n` + `The monthly payment is $${twoDecimalPlaces(monthlyPayment)}\n` + `The quarterly payment is $${twoDecimalPlaces(monthlyPayment * 4)}\n` + `The biannual payment is $${twoDecimalPlaces(monthlyPayment * 6)}\n` + `The yearly payment is $${twoDecimalPlaces(monthlyPayment * 12)}`);
      break;
  }
  return payPlan;
}
paymentTimePlan();
rangeOfPaymentPlan(plan);
