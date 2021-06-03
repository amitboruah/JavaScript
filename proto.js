const user = function(firstName,coursecount){
    this.firstName=firstName;
    this.coursecount=coursecount;
    this.getCourse = function() {
        console.log(`course count is: ${this.coursecount}`);
    };
};

user.prototype.getFirstName =function(){                            //we  can inject funtion from outside
    console.log(`your first name is :${this.firstName}`);
};

var amit= new user('amit',4);
amit.getCourse();
amit.getFirstName();

var yash= new user('yash',4);
yash.getCourse();
yash.getFirstName();