// // {} -> block

// let fruits = "apple";
// console.log(fruits);
// {
//     let fruits;
//     console.log(fruits);
//     fruits = "orange";
//     {
//         console.log(fruits);
//     }
//     console.log(fruits);
// }
// console.log(fruits);



//shadowing 
//legal shadowing

// let fruits = "apple";
// console.log(fruits);
// {
//     const fruits = "orange";
//     console.log(fruits);
// }
// console.log(fruits);


//illegal shadowing
let fruits = "apple";
console.log(fruits);
{
    var fruits = "orange";
    console.log(fruits);
}
console.log(fruits);

