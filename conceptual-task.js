/* Practice problem: Write a function that will take a radius of a circle and will return the area of circle. [Hint: Area of Circle = 𝝅r^2] */
//Solution:

/* function areaOfCircle(radius){
    const pi = 3.1416;
    const area = pi * radius * radius;
    return parseFloat(area.toFixed(2)); 
}

console.log(areaOfCircle(3)); */

// ==========================================================

/* Write a function that takes input the total price of the products you bought and returns the net price calculated according to the discount table below. 
 >= 1000   10%  ||  >= 3000   15%  || > 5000   20%
*/

//Solution:

/* function productNetPrice(totalProductPrice){
    if (totalProductPrice > 5000){
        let discountPrice = totalProductPrice * (20/100);
        let netPrice = totalProductPrice - discountPrice;
        return netPrice;
    }

    else if (totalProductPrice >= 3000){
        let discountPrice = totalProductPrice * (15/100);
        let netPrice = totalProductPrice - discountPrice;
        return netPrice;
    }

    else if (totalProductPrice >= 1000){
        let discountPrice = totalProductPrice * (10/100);
        let netPrice = totalProductPrice - discountPrice;
        return netPrice
    }

    else {
        return (totalProductPrice + ' No Discount Applied')
    }
}

var productNetPrice = productNetPrice (100);
console.log(productNetPrice); */

// ==============================================================

// Odd Sum And Even Sum of an array 

// Solution:

/* function oddEvenSum(arr){
    let evenSum = 0;
    let oddSum = 0; 
    for(let i=0; i<arr.length; i++){
        if(arr[i] % 2 == 0){
           evenSum = evenSum + arr[i];
        }
        else{
            oddSum = oddSum + arr[i];
        }
    }
    return {evenSum, oddSum}
}

const arr = [1, 2, 3, 4, 5, 6, 7];
console.log(oddEvenSum(arr).evenSum); */

// ===========================================================

/* Write a function that will taka an array and calculate the sum of odd numbers greater than 10 and less than 50.
 */

/* let number = [12, 15, 14, 60, 18, 80, 45]

function sumOfOdd (array){
    let sum = 0;
    for (let i=0; i<array.length; i++){
        if (array[i]>10 && array[i]<50 && array[i] % 2 !== 0){
            sum = sum+array[i];
        }
    }
    return sum 
}

console.log(sumOfOdd(number)); */

// ===============================================================

/* Write a JavaScript function that accepts a number as a parameter and check the number is prime or not. */
//Solution:

/* function isPrimeNumber(number){
    if (number<2){
        return `${number} is not a prime number`
    }
    for(let i=2; i<number; i++){
        if (number % i === 0){
            return `${number} is not a prime number`
        }
        return `${number} is a prime number`
    }
}

console.log(isPrimeNumber(13)); */

// ===========================================================

/* Write a function named findArea() that will take base and height of a triangle and will return the area of triangle. */
// Solution

/* function findArea(base, height){
    let area = 1/2 * base * height;
    return area 
}

let base = 4;
let height = 3;
const areaOfTriangle = findArea(base, height);
console.log(areaOfTriangle); */
 

// ===============================================================
/* Write a function named findArea() that will take height and width of a rectangle and will return the area of rectangle. */

// Solution

/* function findArea(height, width){
    let area = 1/2 * height * width;
    return area
}

let h = 4;
let w = 3;
let areaOfCircle = findArea(h, w);
console.log(areaOfCircle); */







