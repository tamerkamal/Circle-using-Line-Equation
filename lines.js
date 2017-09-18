 window.onload=function(){

 var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
 var x;
 var y;
    var step=0.01;

    var h = 150; 
    var k = 150;
    var r = 50;
var theta=0;
    ctx.beginPath();  //tell canvas to start a set of lines

setInterval(drawLine,20);

function drawLine(){
    theta+=step;
       x = h + r*Math.cos(theta);
        y = k - r*Math.sin(theta);    //note 2.
       ctx.lineTo(x,y);
      
	ctx.stroke();        //actually draw the accumulated lines

}

     


ctx.closePath(); 

 }
   
