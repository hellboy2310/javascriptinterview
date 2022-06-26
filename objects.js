let object = {
    name:"Bhavesh",
    lastName : "Purohit",
    sayhi: function () {
        console.log("this is hellboy");
    }
}
console.log(object);

for(let key in object)
{
    console.log( key ,":", object[key]);
}


object.sayhi();