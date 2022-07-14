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


function bubbleSort(arr){
  // let each num compare to the num after them 
  // loop it from the beginning arr.length - 1 times, to go over 
  // every eles
  // time complexity is O(n^2)

  for(let i = 0; i < arr.length; i++){
    let route = i
    for(let j = 0; j < arr.length - 1; j++){
      if(arr[j] > arr[j+1]){
        let cur = arr[j]
        arr[j] = arr[j+1]
        arr[j+1] = cur
      }
      console.log(route,arr)
    }
  }
  return arr
}

function selectionSort(nums){
  // the most straight forward loop
  // let each num compared to the rest, and find the min index, switch the min index to the current index
  // change the value of current and previous

  for(let i = 0; i < nums.length -1; i ++){
    let min = i
    let cur = nums[i]
    for(let j = i+1; j< nums.length; j++){
      if(nums[j]< nums[min]){
        min = j
      }
    }
      nums[i] = nums[min]
      nums[min] = cur
  }
  return nums
}

let month = [1,2,4,5]
console.log(month.splice(0,1))// 1 is taking out
console.log(month)// 1 will be gone
console.log(month.splice(0,0,1)) // before the current index 0 add on 1
console.log(month)
console.log(month.splice(2,0,3))// before the current index 2
console.log(month)

function insertionSort(array) {
  for(let i =0 ; i< array.length; i++){
    if (array[i] < array[0]){
      array.unshift(array.splice(i,1)[0])
    }else{
      if(array[i] < array[i -1]){
        for(let j =1; j< i; j++){
          if(array[i] > array[j-1] && array[i] < array[j]){
            array.splice(j,0,array.splice(i,1)[0])
          }
        }
      }
    }
  }
  return array
}


function mergeSort(arr){
  if(arr.length <= 1){
    return arr
  }
  let mid = Math.floor(arr.length / 2)
  let left = arr.slice(0,mid)
  let right = arr.slice(mid)
  console.log('left', left)
  console.log('right', right)
  return merge(
    mergeSort(left),
    mergeSort(right)
  )
}

function merge(left,right){
  let result = []
  let indexL = 0
  let indexR = 0
  while(indexL < left.length && indexR < right.length){
    if(left[indexL]< right[indexR]){
      result.push(left[indexL])
      indexL ++
    }else{
      result.push(right[indexR])
      indexR ++
    }
  }
  return [...result, ...left.slice(indexL), ...right.slice(indexR)]
}

let answer = mergeSort([7,3,8,2,1,9,6])