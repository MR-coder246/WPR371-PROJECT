const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  // Function to calculate bonus and total salary
  function calculateBonusAndTotalSalary(salary, yearsOfService) {
    const bonusPercentage = yearsOfService > 5 ? 0.05 : 0;
    const bonusAmount = salary * bonusPercentage;
    const totalSalary = salary + bonusAmount;
    return { bonusAmount, totalSalary };
  }
  
  // Prompt the user for salary and years of service
  readline.question("Please enter your salary: ", (salaryInput) => {
    const salary = parseFloat(salaryInput);
  
    readline.question("Please enter your years of service: ", (yearsOfServiceInput) => {
      const yearsOfService = parseInt(yearsOfServiceInput);
  
      const { bonusAmount, totalSalary } = calculateBonusAndTotalSalary(salary, yearsOfService);
  
      console.log(`\nBonus Amount: ${bonusAmount.toFixed(2)}`);
      console.log(`Total Salary after Bonus: ${totalSalary.toFixed(2)}`);
  
      readline.close();
    });
  });
  