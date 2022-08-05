/* let myMoney = 20000;

switch (myMoney){
    case 40000:
        console.log('I will buy OnePlus');
        break;
    case 20000:
        console.log('I will buy xiaomi');
        break;
    case 10000:
        console.log('I will buy symphony');
        break;
    default:
        console.log('I have no money to buy phone');  
} */


//=======================================

let day;
switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case  6:
    day = "Saturday";
}
console.log("Today is " + day);