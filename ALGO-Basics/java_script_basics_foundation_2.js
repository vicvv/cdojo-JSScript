// Biggie Size - Given an array, write a function that changes all 
// positive numbers in the array to the string "big".  Example: makeItBig([-1,3,5,-5]) 
// returns that same array, changed to [-1, "big", "big", -5].

function makeItBig(arr){
    for (i=0; i< arr.length; i++){
        if (arr[i] > 0 ){
            arr[i] = "big";
        }
    }
    return arr;
}
console.log(makeItBig([-1,3,5,-5]));

// Print Low, Return High - Create a function that takes in an array 
// of numbers.  The function should print the lowest value in the array, 
// and return the highest value in the array.

function printLowReturnHigh(arr){
    var lowest = arr[0];
    var highest = arr[0];

    for (i=1;i < arr.length; i++){
        if (lowest > arr[i]){
            lowest = arr[i];

        }

        else if (highest < arr[i]){
            highest = arr[i];
        }   
    }

    console.log(lowest);
    return highest;
}

console.log(printLowReturnHigh([1,2,3,4,5]));

// Print One, Return Another - Build a function that takes in an array 
// of numbers.  The function should print the second-to-last value in the 
// array, and return the first odd value in the array.


function printOneReturnAnother(arr){
    console.log("second to last", arr[arr.length-2]);
    for (i=0; i< arr.length; i++){
        if (arr[i]%2 !=0){
            return arr[i];
        }
    }

}
console.log(printOneReturnAnother([2,4,6,7,8,0]));


// Double Vision - Given an array (similar to saying 'takes in an array'), 
// create a function that returns a new array where each value in the original 
// array has been doubled.  Calling double([1,2,3]) should return [2,4,6] 
// without changing the original array.


function doubleMe(arr){
    var newarr = [];
    for (i=0;i<arr.length; i++){
        arr[i] *= 2;
        newarr.push(arr[i]);
    }
    return newarr;
}
console.log(doubleMe([1,2,3]));

// Count Positives - Given an array of numbers, create a function to 
// replace the last value with the number of positive values found in the array.  
// Example, countPositives([-1,1,1,1]) changes the original array to [-1,1,1,3] 
// and returns it.


function countPositives(arr){
    var count = 0;
    for (i=0;i<arr.length; i++){
        if (arr[i]>0){
            count++;
        }
    }
    arr[arr.length-1] = count;
    return arr;
}

console.log(countPositives([-1,1,1,1]));

// Evens and Odds - Create a function that accepts an array.  Every time that 
// array has three odd values in a row, print "That's odd!".  Every time the 
// array has three evens in a row, print "Even more so!".


function wowsOnOdsAndEvens(arr){

    var count_ods = 0;
    var count_evens =0;
    for (i=0;i<arr.length; i++){
        if (arr[i]%2 != 0){
            count_ods++;
            count_evens = 0;
            if(count_ods ==3 ){
                console.log("That's odd");
                count_ods = 0;
            }  
            console.log(count_ods);  
        }        
        else{
            count_evens++;
            if (count_evens > 3){
                console.log("Even more so!");
                count_evens = 0;
            }
        }  
    }
}


console.log(wowsOnOdsAndEvens([1,1,1]));
//console.log(wowsOnOdsAndEvens([1,1,1,1,2,2,2,2,1]));

console.log(wowsOnOdsAndEvens([1,2,2,1,2,1]));

// Increment the Seconds - Given an array of numbers arr, add 1 to every other 
// element, specifically those whose index is odd (arr[1], arr[3], arr[5], etc).  
// Afterward, console.log each array value and return arr.

function incrementTheSecond(arr){
    for (i=0; i<arr.length; i++){
        if (i%2 == 1){
            arr[i]++;
        }
        console.log(arr[i]);
    }
    return arr;
}

console.log(incrementTheSecond([0,1,2,3,4,5]));
console.log(incrementTheSecond([1,2,3,4]));


// Previous Lengths - You are passed an array (similar to saying 'takes in an array' 
// or 'given an array') containing strings.  Working within that same array, replace 
// each string with a number - the length of the string at the previous array 
// index - and return the array.  For example, previousLengths(["hello", "dojo", "awesome"]) 
// should return ["hello", 5, 4]. Hint: Can for loops only go forward?

function setPreviousLength(arr){
    for(i=arr.length -1; i<0; i++){
        arr[i] = arr[i-i].length;
        return arr;
    }
}

console.log(setPreviousLength(["hello", "dojo", "awesome"]));



// Add Seven - Build a function that accepts an array. Return a new array with all 
// the values of the original, but add 7 to each. Do not alter the original array.  
// Example, addSeven([1,2,3]) should return [8,9,10] in a new array.

function addSeven(arr){
    var newarr=[];
    for (i=0; i<arr.length; i++){
        arr[i] += 7;
        newarr.push(arr[i]);
    }
    return arr;
}
console.log(addSeven([1,2,3]));

// Reverse Array - Given an array, write a function that reverses its values, 
// in-place.  Example: reverse([3,1,6,4,2]) returns the same array, but now contains 
// values reversed like so... [2,4,6,1,3].  Do this without creating an empty temporary 
// array.  (Hint: you'll need to swap values).

function reverseMe(arr){
    for (i=0; i<(arr.length)/2; i++){
        temp = arr[i];
        arr[i] = arr[arr.length-i-1];
        arr[arr.length-i-1] = temp;
    }
    return arr;
}
console.log(reverseMe([1,2,3,4,5]));
console.log(reverseMe([1,2,3,4,5,6]));

// Outlook: Negative - Given an array, create and return a new one containing all 
// the values of the original array, but make them all negative (not simply multiplied by -1). 
// Given [1,-3,5], return [-1,-3,-5].

function convertToNegatives(arr){
    var newarr=[];
    for (i=0; i<arr.length; i++){
        if(arr[i] > 0){
            arr[i] = -arr[i];
            newarr.push([arr[i]]);
        }
        newarr.push([arr[i]]);
    }
    return arr;
}

console.log(convertToNegatives([1,-3,-5]));

// Always Hungry - Create a function that accepts an array, and prints "yummy" each 
// time one of the values is equal to "food".  If no array values are "food", 
// then print "I'm hungry" once.

function AlwaysHungry(arr){
    var count = 0;
    for (i=0; i<arr.length; i++){ 
        if (arr[i] == "food"){
            console.log("yammy");
            count++;
        }
    }
    if (count == 0){
        console.log("I am hungry");
    }
}
console.log(AlwaysHungry([1,2,3,"food",5, 7, "food"]));

//#13 Swap Toward the Center - Given an array, swap the first and last values, third and 
// third-to-last values, etc.  Example: swapTowardCenter([true,42,"Ada",2,"pizza"]) turns 
// the array into ["pizza", 42, "Ada", 2, true].  swapTowardCenter([1,2,3,4,5,6]) turns 
// the array into [6,2,4,3,5,1].  No need to return the array this time.

function swapTowardCenter(arr){

    var temp = arr[0]; 
    arr[0] = arr[arr.length-1];
    arr[arr.length-1] = temp;
    var temp2 = arr[2];
    arr[2] = arr[arr.length-3];
    arr[arr.length-3] = temp2;
    return arr;
    
}
console.log(swapTowardCenter([1,2,3,4,5,6]));
console.log(swapTowardCenter([1,2,3,4,5,6,8]));
console.log(swapTowardCenter([1,2,3,4,5,6,8,10]));

// // Scale the Array - Given an array arr and a number num, multiply all values in the 
// array arr by the number num, and return the changed array arr.  For example, 
// scaleArray([1,2,3], 3) should return [3,6,9].

function scaleTheArray(arr, num){
    for (i=0; i<arr.length; i++){ 
        arr[i] *= num;
    }
    return arr;
}
console.log(scaleTheArray([1,2,3], 3));

//remove the negative numbers from an array
var x = [-3,5,1,3,2,10,-7];
var temp = 0;
for (var i = x.length - 1; i >= 0; i--) {
    if (x[i] < 0) {
        if (i !== x.length - 1) {
            // swap current value with last value
            temp = x[i];
            x[i] = x[x.length - 1];
            x[x.length - 1] = temp;
        }
        x.pop();
    }
}
console.log(x);