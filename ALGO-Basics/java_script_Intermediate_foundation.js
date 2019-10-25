// // Sigma - Implement function sigma(num) that, given a number, returns the sum of all 
// positive integers up to the given number (inclusive).  Ex: sigma(3) = 6 (or 1+2+3); 
// sigma(5) = 15 (or 1+2+3+4+5).

function sigma(num){
    var sum = 0;
    if (num > 0){
        for (i=num; i > 0; i--) {
            sum +=i;

        }
}
    return sum;
}
//console.log(sigma(-3));
//console.log(sigma(5));


// // Factorial - Write a function factorial(num) that, given a number, returns the 
// product (multiplication) of all positive integers from 1 up to the given number (inclusive).  
// For example, factorial(3) = 6 (or 1*2*3); factorial(5) = 120 (or 1*2*3*4*5).

function factorial(num){
    var mult = 1;
    if (num < 0){
        return "not a valid number";
    }
    for (i =1; i <= num; i++){
        mult *=i;
    }
    return mult;
}
//console.log(factorial(3));
//console.log(factorial(5));



// // Fibonacci - Create a function to generate Fibonacci numbers.  In this famous mathematical 
// sequence, each number is the sum of the previous two, starting with values 0 and 1.  
// Your function should accept one argument, an index into the sequence (where 0 corresponds 
//     to the initial value, 4 corresponds to the value four later, etc).  
//     Examples: fibonacci(0) = 0 (given), fibonacci(1) = 1 (given), 
//     fibonacci(2) = 1 (fib(0)+fib(1), or 0+1), fibonacci(3) = 2 (fib(1) + fib(2)3, or 1+1), 
//     fibonacci(4) = 3 (1+2), fibonacci(5) = 5 (2+3), fibonacci(6) = 8 (3+5), fibonacci(7) = 13 (5+8).  
//     Do this without using recursion first.  If you don't know what a recursion is yet, 
//     don't worry as we'll be introducing this concept in Part 2 of this assignment.


///Fib(n) = Fib(n-2) + Fib(n-1)

function fibonacci(num){
    if (num <= 1){
        return num;
    }
    var start = 1;
    var previous = 1;
    var temp =0;
    for (var i = 2; i < num; i++){
        temp = start;
        start = previous + start;
        previous = temp; 
        console.log(start) ; 
    }
    return start;
}

console.log("fib: " + fibonacci(7));
console.log("fib: " + fibonacci(3));
console.log("fib: " + fibonacci(5));


// // Array: Second-to-Last: Return the second-to-last element of an array. 
// Given [42, true, 4, "Liam", 7], return "Liam".  If array is too short, return null.

function SecondToLast(arr){
   if (arr.length < 2){
        return null;
   }
   else{
       return arr[arr.length - 2];
   }
}

console.log(SecondToLast([3]));

// // Array: Nth-to-Last: Return the element that is N-from-array's-end.  
// Given ([5,2,3,6,4,9,7],3), return 4.  If the array is too short, return null.

function NthToLast(arr, num){
    if (num > arr.length){
        return null;
    }
    return arr[arr.length-num];
}
console.log("NthToLast");
console.log(NthToLast([5,2,3,6,4,9,7],3));


/*** 
 * 1) Initialize two variables first and second to INT_MIN as,
   first = second = INT_MIN
    2) Start traversing the array,
   a) If the current element in array say arr[i] is greater
      than first. Then update first and second as,
      second = first
      first = arr[i]
   b) If the current element is in between first and second,
      then update second to store the value of current variable as
      second = arr[i]
3) Return the value stored in second. */

function retSecondLargest(arr){
    var max = 0;
    var secondlargest = 0;
    for(i=0; i<arr.length; i++)
    {
        if (arr[i] > max) {           
            secondlargest = max;
            max = arr[i];
        }
        else if(arr[i] > secondlargest && arr[i] != max){
            secondlargest = arr[i];
            //console.log(secondbig);
        }
    }
    return (secondlargest);
}

console.log("Second largest ",retSecondLargest([42,1,4,3.14,7]));


// // Double Trouble: Create a function that changes a given array to list 
// each existing element twice, retaining original order.  Convert [4, "Ulysses", 42, false] 
// to [4,4, "Ulysses", "Ulysses", 42, 42, false, false].

function Doubleme(arr){
    var arr1 = [];
    for (i=0; i< arr.length; i++){
        arr1.push(arr[i]);
        arr1.push(arr[i]);
    }

    return arr1;
}

console.log(Doubleme([4, "Ulysses", 42, false]));

console.log("Doubleme1-------------------------");

function Doubleme1(arr){
    mylen = arr.length;
    arr.length = 6;
    for (i = mylen-1; i>=0; i--){
        arr[2*i] = arr[i];
        arr[2*i + 1] = arr[i];
    
    }

    return arr;
}

console.log(Doubleme1([4, "Ulysses", 42, false]));


//PART 2 - RECURSION
function fibrec(num){
    if (num <=1){
        return num;
    }
    else {
        return (fibrec(num-2) + fibrec(num-1));
    }
}

console.log(fibrec(6));

