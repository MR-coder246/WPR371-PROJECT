let yearsInput = prompt("Please enter your years of service:");
let salaryInput = prompt("Please enter your salary:");
  
  const years = parseInt(yearsInput);
  const salary = parseFloat(salaryInput);
function checkService(salary, years) {
    if (years < 5) {
      const bonus = salary * 0.05;
      console.log("Your bonus amount is: " + bonus);
      console.log("Your salary after bonus is: " + (bonus + salary));
    } else {
      console.log("Your salary is: " + salary+" you don't qaulify for bonus.");
    }
  }
  
  