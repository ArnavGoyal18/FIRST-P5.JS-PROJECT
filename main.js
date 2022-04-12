function preload(){

}
function setup(){
    Canvas=createCanvas(640,480);
    Canvas.position(120,250);
    video=createCapture(VIDEO);
    video.hide();
    tint_colour="";
    }
    function draw(){
        image(video,0,0,640,480);
        tint(tint_colour);
    }
    function take_snapshot(){
        save("Kavin.png");
    }
    function filter_tint(){
        tint_colour=document.getElementById("colour_name").value;
    }