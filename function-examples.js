/* function functionName (parameters){
    function body
    return
}

var returnValue = functionName(parameters value);
 */

function assignment (assignment1, assignment2, assignment3){
    const totalAssignmentMarks = assignment1+assignment2+assignment3;
    const average = totalAssignmentMarks/3;
    return average;
}

var assignment1Marks = 60;
var assignment2Marks = 70;
var assignment3Marks = 55;

var myAverageAssignmentMarks = assignment(assignment1Marks, assignment2Marks, assignment3Marks);
console.log('My Average Assignment Marks', parseFloat(myAverageAssignmentMarks.toFixed(2)));
