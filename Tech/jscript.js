// sidebar

var a = document.querySelector(".side")

function op(){
    console.log("A")
    a.style.left="0%"
}
function clos(){
    a.style.left='-53%'
}

//timer

var countdowndate= new Date("Mar 23, 2024 00:00:00").getTime();
var x= setInterval(function(){
    var now=new Date().getTime();
    var distance= countdowndate-now;
    var days= Math.floor(distance / (1000*60*60*24));
    var hours =  Math.floor((distance % (1000 * 60*60*24)) / (1000*60*60));
     var minutes =Math.floor((distance %(1000*60* 60)) / (1000 *60));
    var seconds =Math.floor((distance % (1000*60)) / 1000);
    document.getElementById("days").innerHTML= days;
    document.getElementById("hours").innerHTML= hours;
    document.getElementById("minutes").innerHTML=minutes;
    document.getElementById("seconds").innerHTML=seconds;

    if(distance<0){
        clearInterval(x);
        document.getElementById("days").innerHTML="00";
        document.getElementById("hours").innerHTML="00";
        document.getElementById("minutes").innerHTML="00";
        document.getElementById("seconds").innerHTML="00";
    
    }

},1000);

