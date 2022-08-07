var student = {
  id: 115,
  name: "Soaliman Khan",
  class: 9,
  marks: 98,
};

var mobile = {
  brand: "Samsung",
  price: 19000,
  storage: "64GB",
  camera: "12MP",
  warrenty: "1 Year",
};

var myComputer = {
  brand: "Lenovo",
  price: 39000,
  color: "silver",
  processor: "core i7",
};
//to get property value
/* console.log(myComputer);
console.log(myComputer.price);
console.log(myComputer.brand, myComputer.color); */

//to set property value
/* myComputer.color = "red";
console.log(myComputer);
console.log(myComputer.color); */

var shoppingCart = {
    books: 3,
    sunglass: 2,
    keyboard: 1,
    mouse: 1,
    pen: 20
}

// to get property values== when you know the proerty name use dot notation to get the values:
/* var penCount = shoppingCart.pen;
console.log(penCount); */

//Alternative system to get property values== when you know the proerty name
/* var booksCount = shoppingCart['books'];
console.log(booksCount); */

// another system to get 

/* var computerMouse = 'mouse';
var mouseCount = shoppingCart[computerMouse];
console.log(computerMouse, mouseCount); */

// ==========================================================================================

//to get all the properties name of an object
/* var properties = Object.keys(shoppingCart);
console.log(properties); */

//to get all the properties values of an object
/* var propertiesValue = Object.values(shoppingCart);
console.log(propertiesValue); */


// ===================================================

//Set property values
/* shoppingCart.mouse = 15;
console.log(shoppingCart.mouse);

shoppingCart['mouse'] = 20;
console.log(shoppingCart.mouse);

var computerMouse = 'mouse';
shoppingCart[computerMouse]= 30;
console.log(shoppingCart.mouse); */











