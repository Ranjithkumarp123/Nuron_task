// Adding function to play sound by clicking images

function crashSound(){
var x= document.getElementById("crashAudio");
x.play();
}


function kickSound(){
var x= document.getElementById("kickAudio");
x.play();
}

function snareSound(){
    var x= document.getElementById("snareAudio");
    x.play();
    }

function tom_1Sound(){
    var x= document.getElementById("tom_1Audio");
    x.play();
    }

function tom_2Sound(){
    var x= document.getElementById("tom_2Audio");
    x.play();
    } 
            
function tom_3Sound(){
    var x= document.getElementById("tom_3Audio");
    x.play();
    } 
                
                
function tom_4Sound(){
    var x= document.getElementById("tom_4Audio");
    x.play();
    }                

// Adding Event listeners for the keys to play sounds

document.addEventListener('keydown', function(e) {
    if (e.key == "W" || e.key == "w") {
        document.getElementById('crashAudio').play();
    }
    else if (e.key == "A" || e.key =="a") {
        document.getElementById('kickAudio').play();
    }
    else if(e.key == "S" || e.key =="s"){
        document.getElementById('snareAudio').play();   
    }
    else if (e.key == "D" || e.key == "d") {
        document.getElementById('tom_1Audio').play();
    }
    else if (e.key == "J" || e.key == "j") {
        document.getElementById('tom_2Audio').play();
    }
    else if (e.key == "K" || e.key == "k") {
        document.getElementById('tom_3Audio').play();
    }
    else if (e.key == "L" || e.key == "l") {
        document.getElementById('tom_4Audio').play();
    }
    });

