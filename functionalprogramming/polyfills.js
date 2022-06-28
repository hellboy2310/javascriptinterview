
// //cutomized map
// let myArr = [1,2,3,4,5];
// function mypolyfills(arr,cb){
//     let newArr = [];
//     for(let i =0;i<arr.length;i++)
//     {
//         newArr.push(cb(arr[i]));
//     }
//     return newArr;
// }

// function square(x){
//     return x * x;
// }

// console.log(mypolyfills(myArr,square));

//customizede filter

// let farr = [1,2,3,4,5,6,7,8,9,10];

// function mypolyfillsfilter(arr,cb)
// {
//     let filteredArr = [];
//     for(let i = 0;i<arr.length;i++)
//     {
//         if(cb(arr[i]))
//             filteredArr.push(arr[i]);
//     }
//     return filteredArr;
// }

// function iseven(x)
// {
//     if( x % 2 == 0) return x;
// }

// console.log(mypolyfillsfilter(farr,iseven));


//customized reduce

let rA = [1,2,3,4,5];
function mypolyfills(arr,acc,cb)
{
    for(let i = 0;i<arr.length;i++)
    {
        acc = cb(acc,arr[i]);
    }
    return acc;

}
function sum (a,b)
{
    return a+b;
}

console.log(mypolyfills(rA,0,sum));