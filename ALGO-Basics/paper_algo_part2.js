function printUpTo(x){
  if (x<0){
    return false;
  }
  for (i=1; i<=1000000;i++){
    //console.log(i);
  }
}
printUpTo(1000000); // should print all the integers from 1 to 1000000
y = printUpTo(-10); // should return false
console.log(y); // should print false



function printSum(x){
  var sum = 0;
  for (i=0;i < 256; i++){
    sum +=i;
    console.log(sum);
  }
  return sum;
}
y = printSum(255); // should print all the integers from 0 to 255 and with each integer print the sum so far.
console.log(y) ;// should print 32640


function printSumArray(x){
  var sum = 0;
  for(var i=0; i<x.length; i++) {
    //your code here
    sum =+arr[i];
  }
  return sum;
}
console.log( printSumArray([1,2,3]) ); // should log 6