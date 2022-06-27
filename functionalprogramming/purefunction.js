// //impure function 

// let a = 5;
// function fn(b)
// {
//     console.log("the sum is ",a + b);
// }
// fn(3);


//pure function 

// function addNum(a,b)
// {
//     console.log("the sum is ",a + b);//side effect
// }
// addNum( 2 , 3);



function addNum(a,b)
{
   return a+b;//no side effects
}
console.log(addNum( 2 , 3));
