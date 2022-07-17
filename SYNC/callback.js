function greet(personName,age,callback,callback2)
{
    let msg = "Hello  " + personName;
    let ageofperson = age;
    callback(msg);//sync callback
    callback2(ageofperson);//sync callback
}
function logGreeting(ms)
{
    console.log(ms);

}

function showAge(age)
{
    console.log(age);
}

greet('steve',23,logGreeting,showAge);