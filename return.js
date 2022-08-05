function add(num1, num2){
    var sum = num1+num2;
    console.log(sum);
    return sum;
}

// add(2, 4);

var total = add(2, 4);
console.log('SumValue', total);


// ======================================

function bringSingara(money){
    var singaraPrice = 10;
    var quantity = money / singaraPrice;
    return quantity;
}

var myMoney = 200;
var singara = bringSingara(myMoney);
console.log('Total Singara Khamu', singara, 'ta');
