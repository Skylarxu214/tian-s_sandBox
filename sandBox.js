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
   