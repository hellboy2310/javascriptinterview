class Person{
    constructor(name,age)
    {
        this.name = name,
        this.age  = age
    }
    showDetails()
    {
        console.log("Name" + this.name + "age" + this.age);

        
    }
}
// we can use do inheritance in javascript but it is not advisable
class PersonChild extends Person{
    constructor()
    {
        super('Steve',23);
    }
}


// let person1 = new Person("Bhavesh",20)
// console.log(person1.showDetails());


let person2 = new PersonChild()
// console.log(person2.showDetails()); 
   let abc = person2.showDetails();

   console.log(abc);

