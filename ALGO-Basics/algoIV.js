// Given an array and a value Y, count and print the number of array values greater than Y.

function findgraterthanY(arr,Y){
    var count = 0;
    for (i=0; i<arr.length; i++){
        if (arr[i] >Y){
            count++;
        }
    }
    return count;
}



// Given an array, print the max, min and average values for that array.


function maxMinAve(arr){
    var max, min = arr[0];
    var sum = 0;
    for (i=0; i<arr.length; i++){
        sum += arr[i];
        if (arr[i] > max){
            max = arr[i];
        }
        if (arr[i] < min){
            min = arr[i];
        }
    }

    return min, max, sum/arr.length;
}


// Given an array of numbers, create a function that returns a new array 
//where negative values were replaced with the string ‘Dojo’.   
//For example, replaceNegatives( [1,2,-3,-5,5]) should return [1,2, "Dojo", "Dojo", 5].

function replaceNegatives(arr){

    for (i=0; i<arr.length; i++){
        if (arr[i] < 0){
            arr[i] = 'Dojo';
        }
    }
    return arr ;   
}

// Given array, and indices start and end, REMOVE VALUES IN INDEX RANGE, 
//working in-place (hence shortening the array).  For example, 
//removeVals([20,30,40,50,60,70],2,4) should return [20,30,70].

function removeVals(arr, start, end){
    for (i=0; i < (arr.length-end - 1); i++){
        arr[start +i ] = arr[end+1+i];
    }
    return arr;
}
console.log(removeVals([20,30,40,50,60,70],2,4));