/* ১. তোমাকে ফাংশনের ইনপুট হিসেবে সেলসিয়াস দিবে। তুমি ক্যালকুলেশন করে তাপমাত্রা ফারেনহাইট এ কনভার্ট করে সেটার আউটপুট রিটার্ন করবে  */
// Solution

/* function convertToFh(celcius){
    const toFh = celcius * 9 / 5 + 32;
    let message = celcius+'\xB0C is ' + toFh + ' \xB0F';
    return message  
}

let celcius = 2;

console.log(convertToFh(celcius)); */

// ===================================================================

/* ২. একইভাবে উল্টা হিসাব করবে। যাতে তোমাকে ফারেনহাইট হিসেবে তাপমাত্রা দিলে সেটাকে সেলসিয়াস এ কনভার্ট করে আউটপুট দিবে।  */

// Fahrenheit to Celsius : (°F − 32) ÷ 1.8 = °C
/* function convertToCelcius(fahrenheit){
    let toCelcius = (fahrenheit-32) / 1.8
    let message = fahrenheit+'\xB0F is ' + parseFloat(toCelcius).toFixed(2) + ' \xB0C';
    return message
}

console.log(convertToCelcius(2)); */

// =========================================================================

/* ৩. কেউ ১০০ এর মধ্যে কত মার্ক্স্ পেয়েছে সেটা তোমাকে বলে দিবে। তুমি একটা ফাংশন দিয়ে বলে দিবে সে এ+ পাবে নাকি অন্য কোন গ্রেড পাবে।  */

/* function gradeCalculation(marks){
    if (marks>=80){
        return "your marks is "+ marks +" and You Got A+"
    }
    else if (marks>=70){
        return "your marks is "+ marks +" and You Got A"
    }
    else if (marks>=60){
        return "your marks is "+ marks +" and You Got B"
    }
    else if (marks>=50){
        return "your marks is "+ marks +" and You Got C"
    }
    else if (marks>=40){
        return "your marks is "+ marks +" and You Got D"
    }
    else if (marks>=33){
        return "your marks is "+ marks +" and You Got E"
    }
    else{
        return "your marks is "+ marks +" and You Failed in Exam"
    }
}

let examMarks = 25;
let gradeOfMarks = gradeCalculation(examMarks);
console.log(gradeOfMarks); */

// ===========================================================
/* ৪. সুদের হিসাব করবে। জাস্ট হিসাব কেমনে করতে হয়। সেই চিন্তায় করবে। সুদ ভালো না খারাপ সেটা এখন চিন্তা করার দরকার নাই। জাস্ট একটা ফর্মুলা থাকলে সেটা কিভাবে কোড এ লিখতে হয় সেই এঙ্গেল থেকে করার চেষ্টা করো।  */

// Simple interest calculation: Principle, interest rate, Time duration (find interest amount).
// Complex Interest

//Simple Interest Solution:

/* function interestCal(p, i, t) {
  let simpleInterest = (p * i * t) / 100;
  return simpleInterest
}

let principle = 1500;
let interestRate = 8;
let timeMonth = 3;

console.log(interestCal(principle, interestRate, timeMonth)); */

//Compound Interest Solution:
/* Here,

P is the principal amount.
R is the annual interest rate.
t is the time the money is invested or borrowed for.
n is the number of times that interest is compounded per unit t, for example if interest is compounded monthly and t is in years then the value of n would be 12. If interest is compounded quarterly and t is in years then the value of n would be 4. */

/* function compoundInterestCal(p, t, r, n){
    let comInterestRate = p * (Math.pow((1 + (r / n)), (n * t)));
    const interest = comInterestRate - p;
    return interest;
}

const principal = 2000;
const time = 5;
const rate = .08;
const n = 12;
let chkComInterestRate = compoundInterestCal(principal, time, rate, n);
console.log(chkComInterestRate); */


