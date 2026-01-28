//a company wants to automate monthly salary calculation for employees based on their working days, basic pay and bonus
 //. create a script file to 
 //a) calculate gross salary
 //b) apply tax deduction 
 //c) display employee net salary-->
 // ===== Employee Salary Calculation =====

// Input values
let employeeName = "Rahul";
let basicPay = 60000;     // Monthly basic salary
let bonus = 5000;         // Bonus amount
let workingDays = 26;     // Days worked in a month
let totalDays = 30;

// a) Calculate Gross Salary
let perDaySalary = basicPay / totalDays;
let grossSalary = (perDaySalary * workingDays) + bonus;

// b) Apply Tax Deduction
let tax;

if (grossSalary > 50000) {
    tax = grossSalary * 0.10; // 10% tax
} else {
    tax = grossSalary * 0.05; // 5% tax
}

// c) Calculate Net Salary
let netSalary = grossSalary - tax;

// Display Output
console.log("Employee Name: " + employeeName);
console.log("Gross Salary: " + grossSalary);
console.log("Tax Deduction: " + tax);
console.log("Net Salary: " + netSalary);