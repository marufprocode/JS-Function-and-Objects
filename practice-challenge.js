/* ১. একটা ফাংশন লিখবা যেটা ১৩ এর নামতা (multiplication table) আউটপুট হিসেবে দেখাবে।  */
// Solution:


/* function namtaOf13(multiplicationNumber){

    for (var i=1; i<=13; i++){
        var table = multiplicationNumber;
        var count = 13;
        console.log(table, 'X', i, '=', table*i);
    } 
    
}

var namtaOf = namtaOf13(13); */


/* ৫) pizza নামের একটা object কে নিচের উদাহরণ মতো define করবা এবং pepperoni প্রিন্ট করবা।:
 */

//Solution:

/* const pizza = {
    toppings: ['cheese', 'sauce', 'pepperoni'],
    crust: 'deep dish',
    serves: 2
   }

console.log(pizza.toppings[2]); */

/* ২. একটা ফাংশন লিখবা যেটা যেকোন নামকে uppercase বা রেগুলার কেইস হিসেবে নিবে আর আউটপুট হিসেবে সেই নাম lowercase করে রিটার্ন করবে। */

/* function uppercaseFunction (name){
    console.log(name);    
    return name.toLowerCase();
}

var inputName = 'Md Abdullah'
var outputName = uppercaseFunction(inputName.toUpperCase());
console.log(outputName); */

/* ৩. fullName নামে একটা ফাংশন তৈরী কর যেটা তোমার নামের প্রথম অংশ এবং তোমার নামের শেষের অংশ প্যারামিটার হিসেবে নিবে। আর তোমার নামের দুই অংশ জোড়া দিয়ে আউটপুট হিসেবে তোমার পূর্ন নাম রিটার্ন করে দিবে। যেমন ধরো, hablu এবং kanto ইনপুট প্যারামিটার হিসেবে দিলে আউটপুট হিসেবে hablu kanto রিটার্ন করবে।  */

//Solution:

/* function fullNameFunc (fName, lName){
    let output = fName + ' ' +lName;
    console.log(output);
    
}

var firstName = 'hablu';
var lastName = 'kanto';

fullNameFunc(firstName, lastName); */

/* ৪. একটা ফাংশন লিখবা যেটাকে তুমি কোন সংখ্যাকে ইনপুট হিসেবে দিলে সে সেই সংখ্যার square করে সেই square কে রিটার্ন করবে।

অর্থাৎ তুমি ইনপুট হিসেবে 5 দিলে সেটাতে স্কয়ারে হিসেবে 25 আউটপুট হিসেবে পাবে।   */
//Solution:

/* function squareFunc (number){
    var output = number*number;
    return output;
}

inputNumber = 4;

var outputNumber = squareFunc(inputNumber);
console.log(outputNumber); */














