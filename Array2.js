//using Fill
var testArray =[2,3,4,5,6,7,8,9];

console.log(testArray.fill('a'));     //it change whole array value 

console.log(testArray.fill('a',3));   //giving the range (3 to end)
console.log(testArray.fill('a',3,6));   //range 3 to 6 (initial point is included and last point is excluded)

//using Filter 

const newArray =[10,20,23,34,45,56];

const result= newArray.filter((n) => n < 34);      //create a filter for your array
console.log(result);


//using Slice

var n2Array =[1,2,3,4,5,6,7,8];


console.log(n2Array.slice(1,4));            // silce the array you have to provide range

//using Splice

n2Array.splice(1,3,'a')                     //start point and how many element have to remove and put that 'a' value
console.log(n2Array);