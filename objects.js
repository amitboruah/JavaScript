var user = {
    firstName : 'Amit',
    lastNmae : 'Boruah',
    age : 20,
    googleLogin : true,

};

console.log(user);                      //dump all the value
console.log(user.firstName);            //call specific key from object

user.age =40;                           //update the value
console.log(user);

console.table(user);                    //dump all value in tabular form


//enter data in specific key

var user1 = {
    firstName : 'Amit',
    lastNmae : 'Boruah',
    age : 20,
    googleLogin : true,
    courselist: [],
    buycourse: function(courseName){
        this.courselist.push(this.courseName)
    },
    courseCount: function(){
        return `${this.firstName} is enrolled in ${this.courselist.length} course `

    },
};

user1.buycourse('JAVA');
user1.buycourse('Python');
console.log(user1.courseCount());


