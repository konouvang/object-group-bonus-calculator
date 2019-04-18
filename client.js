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


function bonusCalculator(employee){
  for(let i = 0 ; i < employees.length; i++){
    console.log(employees);
    percentage(employees[i]);
  }
}


//---------------------------------------\\

function percentage(employee){
  let bonusPercentage = 0;
  switch (employee.reviewRating){
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
  return bonusPercentage;
}
 /*et tenureBonus = 0;
    switch (employee.employeeNumber.length){
      case 4:
    tenureBonus = 0.05;
      break;
      default:
    tenureBonus = 0;
      break;
    }

    let totalBonusPercentage = bonusPercentage + tenureBonus;
    return totalBonusPercentage;*/

    console.log(bonusCalculator(employees));