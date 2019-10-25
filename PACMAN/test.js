function myrandom (width, height){
    var result = [];
    var max = 2;
    var min = 0;
    for (var i = 0 ; i < width; i++) {
        result[i] = [];
        for (var j = 0; j < height; j++) {
            if (i === 0 | j === height - 1| j === 0| i === width - 1){
                result[i][j] = 2;
            }
            else{
            result[i][j] = Math.floor(Math.random() * (max - min + 1)) + min;
            }   
        }
    }
    return result;
}

function insertcherry(arr){
   console.log(arr);

    for (i=0; i < arr.length; i++){
        for (j=0; j < arr[i].length; j++){
           if(arr[i][j] != 2){
               arr[i][j] = 3;
           }
           j += 10;
        }
        i += 3;
    }
    return arr;
}


// Create a random world with width = 10 & height = 20
var preworld = myrandom(30, 50);

console.log(preworld);
var world = insertcherry(preworld);

//console.log(world);