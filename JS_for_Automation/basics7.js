// class

module.exports = class Person 
{
    // properties
    age = 25

    // another method for declaring properties highly suggestable
    get location(){
        return "Canada"
    }

    // constructor
    // it is a method which executes by default when u create object of the class
    constructor(firstName, lastName){
        this.firstName = firstName
        this.lastName = lastName
    }
    // methods
    fullName(){
        console.log(this.firstName + this.lastName);
        
    }
}

// accessing the property of class with create object of class and accessing object of the class
// let person = new Person('Tim', 'Joseph')
// let person1 = new Person('Chris', 'Joseph')
// console.log(person.age);

// console.log(person.location);

// console.log(person.fullName()); 
