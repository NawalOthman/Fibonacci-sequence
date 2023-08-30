var Fibonacci = []
 var number = prompt("Please, Enter Positive number: ")


 function test_number(number)
 {
     if(number > 0 )
     {
          if(number == 1){
            Fibonacci = [0];
            alert(Fibonacci)
            }
        else if(number==2){
            Fibonacci = [0, 1];
                alert(Fibonacci)}
          else{
                Fibonacci=[0,1]
                while(Fibonacci.length<number){
                v= Fibonacci[Fibonacci.length-1] + Fibonacci[Fibonacci.length-2]
                Fibonacci.push(v)
                }
              alert("Fibonacci sequence of " + number + " is: "+ Fibonacci)
              }
            }
     else
     {
       alert("Please, Enter Positive number.")
      
     }
 }

 test_number(number)
