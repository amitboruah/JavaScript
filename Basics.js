//variable and data types

var a='hello';              //string
var b=40;                   //number
var c=true;                 //boolean
var d=30.5;                 //float

const e=50;
let f='hello world';

console.log(`${a} is a type of ${typeof(a)}`);              //we can use typeof() to find the data-type
console.log(`${b} is a type of ${typeof(b)}`);
console.log(`${c} is a type of ${typeof(c)}`);
console.log(`${d} is a type of ${typeof(d)}`);
console.log(`${e} is a type of ${typeof(e)}`);
console.log(`${f} is a type of ${typeof(f)}`);

//Logical operators

var num1=30;                                                //we have logical operator like >,<,<=,>=,==,===
var num2=40;

if(num1<num2){
    console.log(num2,'is greater');
}
else{
    console.log(num1,'is greater');
}
    
//conditional operator

const googleLoggedIn=true;
const fbLoggedIn=false;

if(googleLoggedIn||fbLoggedIn){                             //we have two conditional operator || and &&
    console.log('WELCOME');
}
else{
    console.log('sorry please log in ');
}

//ternary operator

var authanticated=false;

authanticated ? console.log('SIGNED OUT'): console.log('SIGNED IN');