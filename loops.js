//For loop


for( let i=0 ; i<5 ; i++){

    console.log(i);

};

var fruit=['mango','apple',240,'orange','banana']; 

for( let i=0 ; i < fruit.length ; i++){
    console.log(fruit[i]);
}

for( let i=0 ; i < fruit.length ; i++){
    if(typeof fruit[i] !== 'string' )continue;
    console.log(fruit[i]);
}


//While loop


let i=0;
while(i < fruit.length){
    console.log(fruit[i]);
    i++;
}


//do While loop

let k=0;
do{
    console.log(fruit[k]);
    k++;
}while(k < fruit.length);


//For-each loop
 
var j = 0;

for(;;){
    if(j>2) break;
    console.log(fruit[j]);
    j++;
}

fruit.forEach((f) => (console.log(f)));


//For-of loop

const state =['gujarat','assam','rajasthan','kerela'];

for(const n of state){
    console.log(n);
}


//For-in loop

const symbol ={
    gj: 'Gujarat',
    as: 'Assam',
    rj: 'Rajasthan',
    kr: 'Kerela',
};

for( const s in symbol){
    console.log(s);
    console.log(`${s} is the key of ${symbol[s]}`);
}






