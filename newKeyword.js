const user = function(firstName,coursecount){
    this.firstName=firstName;
    this.coursecount=coursecount;
    this.getCourse = () => {
        console.log(`course count is: ${this.coursecount}`);
    };
};

var amit= new user('amit',4);
console.log(amit);

var yash= new user('yash',4);
console.log(yash);