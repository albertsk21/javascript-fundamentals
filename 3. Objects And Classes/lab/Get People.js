function getPeople() {

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

    let personOne = new Person('Anna','Simpson',22,'abba@yahoo.com');
    let personTwo = new Person('Softuni');
    let personThree = new Person('Stephan','Johnson',25,);
    let personFour = new Person('Gabriel','Peterson',24,'g.p@gmail.com');
    let arrayPeople = [personOne,personTwo,personThree,personFour];

    arrayPeople.forEach(e =>{
        console.log(e);
        })

}
