function reverseMe(arr){
    for (i=0; i<(arr.length-1)/2; i++){
        temp = arr[i];
        arr[i] = arr[arr.length-i - 1];
        arr[arr.length-i - 1] = temp;
    }
    return arr;
}
console.log("with - 1");
console.log("Even " + reverseMe([1,2,3,4,5]));
console.log("Odd " + reverseMe([1,2,3,4,5,6]));



function reverseMeNoMOne(arr){
    for (i=0; i<(arr.length)/2; i++){
        temp = arr[i];
        arr[i] = arr[arr.length-i - 1];
        arr[arr.length-i - 1] = temp;

    }
    return arr;
}
console.log("without - 1");
console.log("Even " + reverseMeNoMOne([1,2,3,4,5,6]));
console.log("Odd " + reverseMeNoMOne([1,2,3,4,5,6]));