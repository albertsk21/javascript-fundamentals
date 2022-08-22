class Person {

    constructor(fName, lName, age, email){
        this.fName = fName;
        this.lName = lName;
        this.age = Number(age);
        this.email = email;
    }



     toString(){
        return `${this.fName} ${this.lName} (age: ${this.age}, email: ${this.email})`;
    }

}

let person = new Person('Anna', 'Simpson',
    22, 'anna@yahoo.com');

console.log(person.toString());