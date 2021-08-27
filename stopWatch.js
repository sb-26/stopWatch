var output = document.getElementById("console");

var start = document.getElementsByClassName("start-button")[0];

var stop = document.getElementsByClassName("stop-button")[0];

var reset = document.getElementsByClassName("reset-button")[0];

var sec = 1;
var min = 0;

var startWatch;

//start stop-watch
start.addEventListener("click", function(){
    startWatch = setInterval(function(){
        output.innerHTML=min+" : "+sec;
        sec++;
        if(sec==60){
            min++;
            sec=0;
        }
    },1000);
});

//stop stop-watch
stop.addEventListener("click", function(){
    clearInterval(startWatch);
});

//reset stop-watch
reset.addEventListener("click", function(){
    output.innerHTML="mm:ss";
    clearInterval(startWatch);
    sec=1;
    min=0;
});
