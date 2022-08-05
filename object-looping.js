var shoppingCart = {
    books: 3,
    sunglass: 2,
    keyboard: 1,
    mouse: 1,
    pen: 20
}

const keys = Object.keys(shoppingCart);
// console.log(keys);
   //Output: [ 'books', 'sunglass', 'keyboard', 'mouse', 'pen' ]   

const values = Object.values(shoppingCart);
// console.log(values);
    //Output: [ 3, 2, 1, 1, 20 ]

/* for (var i=0; i<keys.length; i++){
    var propertyName = keys[i];
    var propertyValue = shoppingCart[propertyName];
    console.log(propertyName, propertyValue);      
}
 */

// for in loop: if we use this we don't need to use keys
/* for (var propertyName in shoppingCart){
    const propertyValues = shoppingCart[propertyName];
    console.log(propertyName, propertyValues);
} */
  

