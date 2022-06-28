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


   var numWays = function(N) {
    var answer = 0;
    var recurse = function(number) {
      if (number === 0) {
        answer++;
      } else if (number > 0) {
        recurse(number - 1);
        recurse(number - 2);
        // recurse(number - 3);
      }
    };
    recurse(N);
    return answer;
  };
  
  /* TEST */
  
//   console.log(numWays(1), 1);
//   console.log(numWays(2), 2);
//   console.log(numWays(3), 4);


function fibPlay(n){
    let cache = {};
    return function fib(n){
        if(n in cache){
            return cache[n]
        }else{
            if(n < 2){
                return n
            }else{
                cache[n] = fib(n-1) + fib(n-2)
                return cache[n]
            }
        }

    }

}

let test = fibPlay()


function climbStairs(n){
    if (n < 2){
        return n
    }else if( n > 0){
        return climbStairs(n -1) + climbStairs(n-2)
    }
}