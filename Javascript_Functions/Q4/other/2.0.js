const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function checkService(salary, years) {
  if (years < 5) {
    const bonus = salary * 0.05;
    console.log("Your bonus amount is: " + bonus);
    console.log("Your salary after bonus is: " + (bonus + salary));
  } else {
    console.log("Your salary is: " + salary);
  }
}

rl.question("Please enter your years of service: ", function (yearsInput) {
  rl.question("Please enter your salary: ", function (salaryInput) {
    rl.close();

    const years = parseInt(yearsInput);
    const salary = parseFloat(salaryInput);

    if (isNaN(years) || isNaN(salary)) {
      console.log("Invalid input. Please enter valid numeric values.");
    } else {
      checkService(salary, years);
    }
  });
});
