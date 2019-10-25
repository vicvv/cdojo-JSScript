function printAverage(x){
    sum = 0;
    for (i=0; i < x.length; i++){
        sum += x[i];

    }

    return sum/x.length;
 }
 y = printAverage([1,2,3]);
 console.log(y); // should log 2
   
 y = printAverage([5,2,8]);
 console.log(y); // should log 5



 //Create an array with all the odd integers between 1 and 255 (inclusive)
 function returnOddArray(){

    var arr = [];
    for (i=0; i<256; i++){
        if(i%2 != 0){
            arr.push(i);
        }
    }
 }
 y = returnOddArray();
 console.log(y); // should log [1,3,5,...,253,255]


 function squareValue(x){
    for (i=0; i<x.length; i++){
        x[i]*=x[i];
    }
    return x;
 }
 y = squareValue([1,2,3]);
 console.log(y); // should log [1,4,9]
   
 y = squareValue([2,5,8]);
 console.log(y); // should log [4,25,64]