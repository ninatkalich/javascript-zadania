var num1 = 1, num2 = 11;
if (num1 > num2) console.log("liczba " + num1 + " jest wieksza");
else console.log("liczba " + num2 + " jest wieksza");

//zad 2

var num1 = 12, num2 = 2, num3 = 9;
if (num1 >= num2) {
    if (num1 >= num3) console.log("liczba 1:  " + num1 + "jest nawjwieksza");
    else console.log("liczba 3: " + num3 + "jest nawjwieksza");
}
else if (num2 >= num3) console.log("liczba  2: " + num2 + "jest nawjwieksza");

else console.log("liczba 3: " + num3 + "jest nawjwieksza");

//zad 3
for (var i = 0; i <10 ; i++) {
    console.log("Lubie JavaScript");
}
//zad 4
var result = 0;
for (var i = 1; i <= 10; i++) {
    result += i;
}
//zad 5
var n = 10;
for (var i = 0; i <= n; i++) {
    console.log(i)
    if (i % 2 == 0) console.log(" - parzysta");
    else console.log(" = nieparzysta");
}


//zad7

for (var i = 0; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) console.log("FizzBuzz")
    else if (i % 3 == 0) console.log("Fizz");
    else if (i % 5 == 0) console.log("Buzz");
    else console.log(i);

}

//zad8 


for (var i = 0; i <= 4; i++) {
    for (var j = 0; j < i + 1; j++) {
        document.write("*");
    }
    document.writeln("<br>");

}


    var rown = 4;
    for (var i = 0; i <= rown; i++) {
        for (var z = rown; z >= i; z--) {

            document.writeln("&nbsp");
        }
        for (var j = 0; j < i + 1; j++) {
            document.write("*");
            document.writeln("&nbsp");

        }
        document.writeln("<br>");

    }


 

    
    for (var i = 0; i <= rown; i++) {
        for (var z = rwon; z >= i; z--) {
            document.writeln("&nbsp");
        }
        for (var j = 0; j <=i*2; j++) {
            document.write("*");

        }
        document.writeln("<br>");

    }


    
           for (var i = 1; i <= rown+1; i++) {
       for(var z=1;z<=i;z++)
        {
             document.writeln("*");
        }
   
      for(var j=i;j<=4;j++)
        {
             document.writeln(j);
        }
       document.writeln("<br>");
    }
    
        var rown = 5;
    for (var i = 1; i <= rown; i++) {
     
      for(var j=i;j<=5;j++)
        {
             document.writeln("*");
        }
        for(var z=rown-i;z<4;z++)
        {
           document.writeln(z+1);
            
        }
   
       document.writeln("<br>");
    }
    
