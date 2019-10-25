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
            else if (i===1 && j===1){
                result[j][j] = 0;

            }
            else{
            result[i][j] = Math.floor(Math.random() * (max - min + 1)) + min;
            }   
        }
    }
    return result;
}


function insertcherry(arr){
    for (i=0; i < arr.length; i+Math.floor(Math.random() * 10) + 1){
        for (j=0; j < arr[i].length; j++){
           if(arr[i][j] == 0){
               arr[i][j] = 3;
        
           }
           else if (arr[i][j] == 1){
                j+=2;
           }
           j += Math.floor(Math.random() * 10) + 1;
        }
        i += 3;
    }
    return arr;
}


var preworld = myrandom(20, 50);
var world = insertcherry(preworld);

//console.log(world);


var score = 0;

var pacman = {
    x: Math.floor(Math.random() * 10) + 3,
    y: Math.floor(Math.random() * 10) + 1
};

var ghost = {
    x:40,
    y:10
}

function displayWorld(){
    var output = '';

    for(var i=0; i<world.length; i++){
        output += "\n<div class='row'>\n";
        for(var j=0; j<world[i].length; j++){
            if(world[i][j] == 2)
                output += "<div class='brick'></div>";
            else if(world[i][j] == 1)
                output += "<div class='coin'></div>";
            else if(world[i][j] == 3)
                output += "<div class='cherry'></div>";
            else if(world[i][j] == 0)
                output += "<div class='empty'></div>";
        }
        output += "\n</div>";
    }
    document.getElementById('world').innerHTML = output;
}

function displayHohst(){
    document.getElementById('ghost').style.top = ghost.y * 10 + 'px';
    document.getElementById('ghost').style.left = ghost.x * 10 + 'px';
}

function displayScore(){
    document.getElementById('score').innerHTML = score;
}

function displayPacman(){
    document.getElementById('pacman').style.top = pacman.y*24.5+"px";
    document.getElementById('pacman').style.left = pacman.x*20+"px";
}

displayWorld();
displayPacman();
displayHohst();
displayScore();

document.onkeydown = function(e){
    
    if(e.keyCode == 37 && world[pacman.y][pacman.x-1] != 2 && pacman.x == 0){
        document.getElementById('pacman').style.transform = "rotate(-180deg)";
        pacman.x = world[0].length-1;
        ghost.x = world[0].length-1;
    }
    else if(e.keyCode == 37 && world[pacman.y][pacman.x-1] != 2 && pacman.x > 0){
        document.getElementById('pacman').style.transform = "rotate(-180deg)";
        pacman.x--;
        ghost.x--;
    }
    else if(e.keyCode == 39 && world[pacman.y][pacman.x+1] != 2 && pacman.x == world[0].length-1){
        document.getElementById('pacman').style.transform = "none";
        pacman.x = 0;
        ghost.x = 0;
    }
    else if(e.keyCode == 39 && world[pacman.y][pacman.x+1] != 2){
        document.getElementById('pacman').style.transform = "none";
        pacman.x++;
        ghost.x++;
    }
    else if(e.keyCode == 38 && world[pacman.y-1][pacman.x] != 2 && pacman.y > 0){
        document.getElementById('pacman').style.transform = "rotate(-90deg)";
        pacman.y--;
        ghost.y;
    }
    else if(e.keyCode == 40 && world[pacman.y+1][pacman.x] != 2){
        document.getElementById('pacman').style.transform = "rotate(90deg)";
        pacman.y++;
        ghost.y++;
    }

    if (world[pacman.y][pacman.x] == 1) {
        world[pacman.y][pacman.x] = 0;
        score+=10;
        displayWorld();
        displayScore();
    }
    else if (world[pacman.y][pacman.x] == 3) {
        world[pacman.y][pacman.x] = 0;
        score+=50;
        displayWorld();
        displayScore();
    }
    //console.log(e.keyCode);
    displayPacman();
    displayHohst();
}