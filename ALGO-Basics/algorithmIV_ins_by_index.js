// Given an array and a value Y, count and print the number of array values greater than Y.

function countGreaterThenNumbers(arr, num){
    var count=0;
    for (i=0; i<arr.length;i++){
        if (arr[i]> num){
            count++;
        }   
    }
    return (count);
}

//console.log(countGreaterThenNumbers([1,2,3,4,5],2))

// Given an array, print the max, min and average values for that array.

function findAverage(arr){
    var min = arr[0];
    var max = arr[0];
    var sum = 0;
    
    for (i=0; i<arr.length;i++){

        sum +=arr[i];

        if(arr[i] < min){
            min = arr[i];
        }
        else if(arr[i] > max){
            max = arr[i];
        }
    }
    return ([min,max, sum/arr.length]);
    
}

console.log(findAverage([5,2,7,9]));


// Given an array of numbers, create a function that returns a new array where negative values 
//were replaced with the string ‘Dojo’. For example, replaceNegatives( [1,2,-3,-5,5]) should 
//return [1,2, "Dojo", "Dojo", 5].


function replaceNegatives(arr){

    for (i=0; i<arr.length;i++){
        if (arr[i] < 0){
            arr[i] = "Dojo";
        }
    }
    return arr;
}

console.log(replaceNegatives([1,2,-3,-5,5]));


// Given array, and indices start and end, remove values in that index range, working in-place 
//(hence shortening the array).  For example, removeVals([20,30,40,50,60,70],2,4) should return [20,30,70].


//to solve this problem I have to find the element by the index end+1 and move it in the place of the elment
// at the index of start.  to do thant I am coposing the loop as such :

// for (i=0; i < arr.length -end -1; i++) which is
// for (i=0; i< 6 - 4 - 1; i++)
// for (i=0; i<1; i++)


function removeByIndex(arr, start, end){
    for (i = 0; i < arr.length - end - 1; i++){   
        arr[start + i ] = arr[end + i + 1];
        console.log(i);
        //arr[2+0] = arr[4+0+1]
    }
    console.log(array);
// next step is to shorten the array.
// for (i=0; i<4-2+1;i++)
// for (i=0;i<3; i++)
    for (i=0; i < end-start+1; i++){
        arr.pop();
    }
      return arr; 
}

console.log(removeByIndex([20,30,40,50,60,70],2,4));


