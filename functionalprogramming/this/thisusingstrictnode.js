
        // ----------------------this keyword in node with stirct mode---------------------------


        'use strict'

        console.log(this);

        function fn(){
            console.log(this);
        }
        fn();

        let obj = {
            name : "hellboy",
            f:function(){
                console.log(this);
            }
        }
            obj.f();


        let obj2 = {
            name: "rocky",
            f:function (){
                    function g(){
                        console.log(this);
                    }
                    g();
            }
        }
        obj2.f();