let person1 = {
    name:"hellboy",
    age:25,

}

let person2 = {
    name:'steve',
    age:20,
}

let showDetails = function(city,car){
    console.log(`${this.name} is ${this.age} years old, he lives in ${city} and he drives ${car}`);

}





showDetails.call(person2,"Ahmedabad","mercesdes")//function borrowing