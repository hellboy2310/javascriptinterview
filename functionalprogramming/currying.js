

//currying with bind
// function fn(a,b)
// {
//     console.log(a + b);
// }
// let addwith2 = fn.bind(this,2,3);
// addwith2();


//closure currying

function add(x)
{
    return function(y){
        console.log(x + y);
    }
}

let addwith2 = add(2);
addwith2(3);