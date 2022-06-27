// const person1 = {
//     name:"bhavesh",
//     age:20
    
// }
// const person2 = person1;
// person2.name = "hellboy";
// console.log(person1);
// console.log(person2);



const person1 = {
    name:"bhavesh",
    age:20
    
}
const person2 = {...person1};
person2.name = "hellboy";
console.log(person1);
console.log(person2);