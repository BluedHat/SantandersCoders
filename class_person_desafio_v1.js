class Person{
    constructor(firstname, lastname,age,gender,interests ) {
        this.firstname=firstname;
        this.lastaname=lastname;
        this.age=age;
        this.gender=gender;
        this.interests=interests = [ ];
        this.bio = bio = [`${this.name} is ${this.age} years old. They like ${this.interests}`];
        this.greeting = greeting = [`Hi!, I'm ${this.name}`]
    }
}

class Teacher extends Person{
     super( )
     constructor(subject,greeting ){
         this.subject=subject = [];
         this.greeting =  [`Hello, my name ${this.firstname} ${this.lastname}, and I teach ${this.subject}`]
     }

}

class Student extends Person{
    super( )
    constructor(greeting){
        this.greeting = greeting =  [`Yo"I'm ${this.firstname}.`]
    }

}