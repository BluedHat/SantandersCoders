class Person{
    constructor(firstname, lastname,age,gender,interests) {
        this.fullname = {firstname,
            lastname}
        this.age = age
        this.gender = gender
        this.interests = interests
        this.id =  undefined
        //this.mtr = 0;
        //newMtr = ( ) => this.mtr +1;
        const bio = (`${this.fullname} is ${this.age} years old. They like ${this.interests}`);
        const greetings = (`Hi!, I'm ${this.fullname.firstname}`);
}};

class Teacher extends Person{
    constructor(firstname, lastname,age,gender,interests,subject,id){
        super(firstname,lastname,age,gender,interests,id)
         this.fullname = {firstname,
                          lastname}
         this.age = age
         this.gender = gender
         this.interests = interests
         this.subject = subject
         this.id =  "Teacher"
         let prefix = (gender) => ((gender == 'femme')? "Miss." : "Mr.");
         let genreClass = prefix(this.gender)
         const greetings =  console.log(`Hello, my name is ${genreClass} ${this.fullname.lastname}, and I teach ${this.subject}`)
        };
}

class Student extends Person{
    constructor(firstname, lastname,age,room,id){
        super(firstname,lastname,age,id)
         this.fullname = {firstname,
                          lastname}
         this.age = age
         //this.mtr = mtr
         this.room = room
         this.id = "Student"
         const greetings =  console.log(`Yo"I'm ${this.fullname.firstname}, from ${this.room}.`)
    }
}

a = new Student('Maria','Fernanda',5, 315);
b = new Teacher('Maria','Fifi',15,'femme','Livros, Festas e Volei','Matemática');
c = new Student('Fifi','Fernanda',25, '38B');
d = new Teacher('Fnixe','Fifi',46,'undefined','Ping Pong','Português');
e = new Student('Yusuke','Mattos',5,1001);
f = new Teacher('Goku','Dragon',36,'male','Basquete', 'Geografia');
