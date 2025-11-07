// objects
// it is collection of properties

let person = {
    firstName : "Shivam",
    lastName : "Raj",
    age : 24,
    fullName : function(){
        console.log(this.firstName + this.lastName)
    }
}

console.log(person.fullName());

console.log(person.lastName);

// as array
console.log(person['lastName'])

// modify
person.firstName = 'Shiv'
console.log(person.firstName);

// add
person.gender = 'male'
console.log(person);

// delete
delete person.gender

// check property exists in the object
console.log('gender' in person)

// iterate an object
// print all the values of js object
for(let key in person){
    console.log(person[key]);
}
