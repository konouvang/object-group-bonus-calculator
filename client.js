const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];


// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// Take small steps! Don't write a for loop and two functions that do all of the calculations right away.
// This problem is massive! Break the problem down. Use the debugger.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.


function bonusCalculator(employeeArray){
  for(let i = 0 ; i < employeeArray.length; i++) {
    let individualEmployee = employeeArray[i];
    console.log(percentage(individualEmployee));
  }
}


//---------------------------------------\\

function percentage(employee){
  let bonusPercentage = 0;

  switch (employee.reviewRating) {
    case 3:
      bonusPercentage = 0.04;
      break;
    case 4:
      bonusPercentage = 0.06;
      break;
    case 5:
      bonusPercentage = 0.10;
      break;
    default:
      bonusPercentage = 0;
      break;
  }

  let tenureBonus = 0;

  switch (employee.employeeNumber.length){
    case 4:
      tenureBonus = 0.05;
      break;
    default:
      tenureBonus = 0;
      break;
  }

  let totalBonusPercentage = bonusPercentage + tenureBonus;

  employee.annualSalary = parseInt(employee.annualSalary);

  if (employee.annualSalary > 65000){
    totalBonusPercentage -= 0.01;
  }

  if  (totalBonusPercentage < 0){
    totalBonusPercentage = 0;
  }

  if (totalBonusPercentage > 0.13) {
    totalBonusPercentage = 0.13;
  }

  let bonusCash = employee.annualSalary * totalBonusPercentage;
  employee.annualSalary = employee.annualSalary + bonusCash;

  return {
    name: employee.name,
    bonusPercentage: totalBonusPercentage,
    totalCompensation: employee.annualSalary,
    totalBonus: bonusCash,
  }
}

bonusCalculator(employees);