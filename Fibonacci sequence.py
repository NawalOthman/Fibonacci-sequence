Fibonacci = []
number = input("Please, Enter Positive number: ")

def test_number(number):
     if(int(number) > 0 ):
          if(number == 1):
             Fibonacci = [0]
             print(Fibonacci)
            
          elif(number==2):
             Fibonacci = [0, 1]
             print(Fibonacci)
          else:
                Fibonacci=[0,1]
                while(len(Fibonacci) < int(number)):
                    v= Fibonacci[len(Fibonacci)-1] + Fibonacci[len(Fibonacci)-2]
                    Fibonacci.append(v)
                
                print(f"Fibonacci sequence of  {number} is:  {Fibonacci} ")
              
            
     else:
     
       print("Please, Enter Positive number.")
      
     
test_number(number)

