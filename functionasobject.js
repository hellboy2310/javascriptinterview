function fn(){
    console.log("hello from fn");
}
fn();
fn.prop = "this is sheldon cooper";

console.log(fn.prop);

fn.myFn = function fn(){
    console.log(" i am a method of function");
}
fn.myFn();