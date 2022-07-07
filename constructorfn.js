  function car(brand,model,color){
    this.Brand = brand;
    this.Model  = model;
    this.color = color;

    this.drive = function()
    {
        console.log("driving"+this.Model);
    }
  }
  let car1 = new car("BMW","X5","White");
//   console.log(car1);
  car1.drive();