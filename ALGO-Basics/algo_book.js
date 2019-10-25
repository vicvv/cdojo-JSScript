/* Implement a function that accepts two non-negative integers as arguments. 
Function ​lastDigitAtoB(a, b)​ should return the last digit of the first number (a) 
raised to an exponent of the second number (b).
Examples: given ​(3, 4)​, you should return ​1​ (the last digit of 81: 3 * 3 * 3 * 3). 
Given ​(12, 5)​, return 2​ (the least significant digit of 248832, which is 12 * 12 * 12 * 12 * 12). 
*/


function lastDigitAtoB(a,b){
    var lastdigit = 0;
    var result = 1;
    for (i=0; i<b; i++){
        result *= a;
    }
    
    lastdigit = result%10;
    return lastdigit;
}

console.log(lastDigitAtoB(3,4));


/*Create function ​clockHandAngles(seconds)​ that, given the number of seconds since 12:00:00, 
will print the angles (in degrees) of the hour, minute and second hands. 
As a quick review, there are 360 degrees in a full arc rotation. 
Treat “straight-up” 12:00:00 as 0 degrees for all hands.*/

function clockHandAngles(seconds){
    //one degree = 240seconds
    var total_degrees = 360;
    var seconds_aday = 86400;
    var one_degree = 1;
    var degree = 0;
    var minutes_a_day = 1440;

    if (seconds > seconds_aday){
        console.log ("Number of seconds should not be bigger then 86400");
    }
    else{
        var hours;
    }

}

//console.clockHandAngles(1);

/*PushFront
Given an array and an additional value, ​insert this value ​at the beginning of the array. 
Do this without using any built-in array methods.*/

function PushFront(arr,num){
    var newarr =[num];
    for (i=0;i < arr.length; i++){
        newarr.push(arr[i]);
    }

    return newarr;

}
var num = 0;
console.log(PushFront([1,2,3,4,5],num));


//add the element to the beginning of an array 

function addElementAtThebeggingin(arr, num){
    for (i = arr.length-1; i >= 0 ;i--){
        arr[i+1] = arr[i];
    }
    arr[0] = num;
    return arr;
}

arr = [1,2,3,4,5];

console.log(addElementAtThebeggingin(arr, 0));






/* function PushFront1(arr,num,start,end){

    arr.push(num);
    for (i=0; i < arr.length - (end -1); i++){
        arr[i+start] = arr[end + 1+ i];

    }

    return arr;

}

console.log("push front");
console.log(PushFront1([1,2,3],10,0,0));





 */
/*Given an array, index, and additional value, ​insert the value into the array a​t 
the given index. Do this without using built-in array methods. You can think of 
​PushFront(arr,val)​ as equivalent to InsertAt(arr,0,val)​*/

// function InsertAt(arr, index, value){

//     var newarr =[];
//     for (i=0;i < arr.length; i++){

//         if (i == index){
//             newarr.push(value);
//             newarr.push(arr[i]);
//         }
//         else{
//             newarr.push(arr[i]);
//         }
//     }

//     return newarr;

// }

// console.log(InsertAt([2,4,3,1,5], 3, 8));

/*Given an array, ​remove and return the value ​at the beginning of the array. 
Do this without using any built-in array methods except ​pop()​.*/


/*Implement a function ​removeNegatives()​ that accepts an array and removes 
any values that are less than zero.
Second-level challenge: ​don’t use nested loops.*/



/**Count duplicates from the array using hash
 */

 arr = ['a','a','a','a','b', 'c'];

 function countDupsinArray(arr){
    var hash ={};   
    for (i=0; i<arr.length; i++){

        if (arr[i] in hash){
            hash[arr[i]] = hash[arr[i]] + 1;
            console.log(arr[i]);
        }
        else{
            hash[arr[i]] = 1;
            console.log(arr[i]);
        }       
    }
    return hash;
 }

 result = countDupsinArray(arr);
 console.log(countDupsinArray(arr));

 var key,val = 0;

 for (key in result){
    console.log(key, result[key]);
 }






