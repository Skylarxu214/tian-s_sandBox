function factorialRecursive(num){
    if(num === 2){
        return 2
    }
    let result = num * factorialRecursive(num - 1 )
    console.log(result)
    return result 
}


function fibonacciIterative(n){
    let fib = [0,1]
     for(let i = 2; i < n + 1 ; i++ ){
       fib.push(fib[i -1 ] + fib[i - 2])
     }
     return fib[n]
   }
   
   
   function fibonacciRecursive(n) {

     if (n < 2){
       return n 
     }
   
     return fibonacciRecursive(n - 1) + fibonacciRecursive(n -2)
     
   }
   
   function factorial(n){
    if(n === 1 || n === 0){
        return 1
    }else{
       return  n * factorial(n - 1)
    }
   }

   // explainations:
   // 4*factoial(3) = 4*6
   //  3*factorial(2) = 3*2
   //   2* factoial(1) = 2*1
   //        1(after return 1, bubble up step by steps to n)