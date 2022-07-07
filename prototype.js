let person1 = {
    name:"hellboy",
    age : 25,


showDetails : function(){
    console.log(this.name +  ' ' + this.age);
}
}


let person2 = {
    name:'xerxes'
}
person2.__proto__ = person1
// console.log(person2.name + " " + person2.age);

person2.showDetails();