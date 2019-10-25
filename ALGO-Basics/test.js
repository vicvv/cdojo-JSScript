
//swapTowardCenter([1,2,3,4,5,6]) turns 
// the array into  [6,2,4,3,5,1].  No need to return the array this time.


function swapTowardCenter(arr){

var temp = arr[0]; 
arr[0] = arr[arr.length-1];
arr[arr.length-1] = temp;
var temp2 = arr[2];
arr[2] = arr[arr.length-3];
arr[arr.length-3] = temp2;
return arr;

}

//console.log(swapTowardCenter([1,2,3,4,5,6,8,20,29,1,3]));



function wowsOnOdsAndEvens(arr){

    var count_ods = 0;
    var count_evens =0;
    for (i=0;i<arr.length; i++){
        if (arr[i]%2 != 0){
            count_ods++;
            count_evens = 0;
            if(count_ods == 3  ){
                console.log("That's odd");
                count_ods = 0;
            }  
             
        }        
        else if (arr[i]%2 == 0){
            count_evens++;
            count_ods=0;
            if (count_evens == 3){
                console.log("Even more so!");
                count_evens = 0;
            }
        }  
    }
}


console.log(wowsOnOdsAndEvens([1,1,2,1,1,1,2,2,2]));
//console.log(wowsOnOdsAndEvens([1,1,1,1,2,2,2,2,1]));

//console.log(wowsOnOdsAndEvens([1,2,2,1,2,1]));



var array = [true,42,"Ada",2,"pizza"];
var nums = [1,2,3,4,5,6];
function swapTowardCenter(arr){
  var temp = arr[0]; 
  arr[0] = arr[arr.length-1];
  arr[arr.length-1] = temp;
  var temp2 = arr[2];
  arr[2] = arr[arr.length-3];
  arr[arr.length-3] = temp2;
  return arr;
}
console.log(swapTowardCenter(array));
console.log(swapTowardCenter(nums));