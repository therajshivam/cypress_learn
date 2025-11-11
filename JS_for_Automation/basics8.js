// inheritance
// It is the main piller of oop
// one class can aquire/inherit the properties, methods of another class
// the class which inherits the prooperties of other is known as subclass(derived class, child class)
// the class whose properties are inherited is known as superclass
const Person = require("./basics7")
class Pet extends Person {

    get Location(){
            return "BlueCross"
        }

    constructor(firstName, lastName)
    {
        
        // call parent class constructor
        super(firstName, lastName)
    }

}

new Pet("sam", "san")
pet.fullName()
