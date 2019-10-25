/** pay attention to the global vars. In this case var x is global so it will
 * change after function a is called
 * */ 

var x = 5;
function a (){
    x = 10;
}
console.log(x);
a();
console.log(x);


/**
 * 
 * below console output is 
 * x inside b is: 10
 * x inside a is: 20
 * undefined
 */

 function a (x){
     x= x+3;
     x= b(x)+10;
     console.log('x in a is:', x);
 }

 function b (x){
     x=x*2;
     console.log('x inside b is:', x);
     return x;
 }

 y = a(2);
 console.log(y);


 /**Second biggest array */

var biggest = myArray[0];
var nextbiggest = myArray[0];
    for(var i=0;i<myArray.length;i++){
        if(myArray[i]>biggest){
            nextbiggest = biggest;
            biggest = myArray[i];
        }
        else if(myArray[i]>nextbiggest && myArray[i]!=biggest)
            nextbiggest = myArray[i];
    }
    
console.log(nextbiggest);


//checking arr lenght
arr= [1,2,3,4,5];
arr.length = 10;
console.log(arr);
