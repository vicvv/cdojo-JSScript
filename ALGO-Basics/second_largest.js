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