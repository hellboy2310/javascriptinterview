console.log("vanName",varName);
var varName;
console.log("varName",varName);
varName = "Captain America";
console.log("varName",varName);
fn();
function fn(){
    console.log("Hello from fn");
}
fn();
fnContainer();//function expression and not a declaration
var fnContainer = function(){
    console.log(" I am expression");
}
fnContainer();
 