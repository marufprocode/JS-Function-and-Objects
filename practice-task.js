/* 1. Write a function called foo() which prints “foo” and a function called bar() which prints
“bar”. Call function bar() in the foo() function after printing. What will be the output? Now call
the foo() to see the output. */

//Solution:

/* function foo(){
    console.log('foo');
    bar();
}

function bar(){
    console.log('bar');
}
foo();
 */

/* 2. Write a function called make_avg() which will take an three integers and return the
average of those values. */

//Solution:

/* function make_avg(num1, num2, num3){
    var sumOfNum = num1 + num2 + num3;
    var average = sumOfNum/3;
    return average
}

var averageNum = make_avg(4, 6, 2);
console.log(averageNum); */

/* 3. Challenging: Write a function called make_avg() which will take an array of integers and
the size of that array and return the average of those values. */

//Solution 1:

/* var intNum = [4, 6, 8, 2];

function make_avg(numbers){
    sum = 0
    for (var i=0; i<numbers.length; i++){
        sum = sum + numbers[i];
    }
    return sum
}

var sumOfInt = make_avg(intNum);
console.log(sumOfInt); */



// solution 2:

/* var intNum = [4, 6, 8, 2, 2];


function make_avg (numbers){
    var index = 0;
    var sum = 0;

    while (index<numbers.length){
        sum = sum + numbers[index];
        index++
    }
    console.log(sum);
}

make_avg(intNum); */


/* 4. Write a function called odd_even() which takes an integer value and tells whether this
value is even or odd. You need to do it in 4 ways: */

// solution:

// Has Return, Has Parameter

/* function odd_even(intNum){
    const checkNum = (intNum % 2 === 0) ? 'Even Number' : 'Odd Number'
    return checkNum
}

var checkNumType = odd_even(25);
console.log(checkNumType); */

//No return, Has Parameter with if condition

/* function odd_even(intNum){
    if (intNum % 2 === 0){
        console.log('Even Number');
    }
    else {
        console.log('Odd Number');
    }
}
odd_even(25); */

//Has return, Has Parameter with if condition

/* function odd_even(intNum){
    if (intNum % 2 === 0){
        return 'Even Number'
    }
    return 'Odd Number'
}
var number = 24;
var checkNumType = odd_even(number);
console.log(checkNumType); */


/* 5. You are in a hurry to go to your school on time. But when you are crossing the road, the
traffic signal is red coloured. In this situation, if you try to cross the road, you may be in
danger.If you notice a yellow coloured traffic signal, you should stop. If you notice a green
coloured traffic signal, you should cross the road. So write a JS code, where there is a
variable called signal. Its value can be green, yellow or red & we will get different activities as
output depending on the variable. So, hurry up. */


/* function trafficFunc (trafficSignal){
    var direction = trafficSignal === 'Red' ? 'You May Fall In Danger, wait untill green signal' : 
                    (trafficSignal == 'Yellow') ? 'You should stop, wait untill green signal':
                    (trafficSignal == 'Green') ? 'You can cross the road now': 'Not Defined';
    
    return direction
}

var signal = 'Green';
var directionToGo = trafficFunc (signal);
console.log(directionToGo); */






