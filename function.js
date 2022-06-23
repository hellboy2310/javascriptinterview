// // //types of function 
// // //function statement

// // function sayHello(){
// //     console.log("hello world");

// // }
// // sayHello();//function invocation

// // function sayHi(param){
// //     console.log("this is john snow and his age is:-",param);
// // }
// // sayHi("hello");//function invocation


// // let rval = sayHi();
// // console.log("rval",rval);


// // //function expressino
// // let fnContiner = function fn()
// // {
// //     console.log("this is and expression function");
// // }
// // fnContiner();

// // //anonymous function

// // let anonymousfunction = function(){
// //     console.log("this is an anonymous function");
// // }
// // anonymousfunction();

// // //Immediately invoked function expression
// // (function fn()
// // {
// //     console.log("this is and IIFE function");
// //     console.log("this will run on its own");
// // })();



// // //arrow function

// // let fn = (num) =>{
// //     return num * num;
    
// // }
// // console.log(fn(5));

// // variable can be passed as a parameter
// // function sayHello(param){
// //         console.log("hello",param);
// //         param();
// //         return "kuch bi";
// // }
// // function smaller(){
// //     console.log("this is smaller");

// // }


// // // sayHello([1,2,3,4]);
// // let rval = sayHello(smaller);
// // console.log(rval);


// //RETURNING FUNCTION INSIDE A FUNCTION 
// function outer (){
//     console.log(" i will return inner function");
//     return function inner(){
//         console.log("i am inner function");
//     }
// }
// let rval = outer();
// console.log("Rval",rval);
// rval();


function real(){
    console.log("I am real");
}
function real()
{
    console.log("no i am real");
}
real();

function real(){
    console.log("you both are assholes");
}



