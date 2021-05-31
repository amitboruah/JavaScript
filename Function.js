function printHello(){              //regular method of declaring funtion
    console.log('hello world');
}

printHello();

var printGoodmornig= function(){        //delcare fuction inside a variable
    console.log('Goodmorning');
}

printGoodmornig();

var printEvening= () =>{                //arrow function
    console.log('good evening');        
}

printEvening();

function sayBye(){                      //if we use return inside funtion than we have to call function in console.log
    return 'Good bye';
}

console.log(sayBye());

/* ********************************************************************************** */

function evenNum(element){                      //minimizing the code using .every and arrow funtion 
    return element % 2 === 0;
};

console.log(Array (2,4,6).every(evenNum));

console.log(Array (10,15,20).every((e) => ( e % 5 === 0)));

