var fruit=['mango','apple','orange','banana'];  //old method
console.log(fruit[2]);

var vegitable= Array('potato','onion','tomato');  //new method
console.log(vegitable[1]);

vegitable[1]='carrot';     //change element
console.log(vegitable);

fruit.pop();
console.log(fruit);     //to remove element

vegitable.unshift('cabbage');       //insert element at first
console.log(vegitable);

vegitable.shift();
console.log(vegitable);             //remove element from first

console.log(fruit.indexOf('apple'));       //find index of element

console.log(Array.from('AMIT'));        //seperate each element

