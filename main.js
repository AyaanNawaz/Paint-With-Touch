var last_position_of_x, last_position_of_y;
canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
color="black";
width_of_line=1;
var width= screen.width;
new_width= screen.width - 70;
new_height= screen.height - 300;
if(width < 992)
{document.getElementById("myCanvas").width=new_width;
document.getElementById("myCanvas").height=new_height;
canvas.addEventListener("touchstart",my_touchstart);
function my_touchstart(e){
color=document.getElementById("color").value ;
width_of_line=document.getElementById("width_of_line").value ;
last_position_of_x=e.touches[0].clientX-canvas.offsetLeft;
last_position_of_y=e.touches[0].clientY-canvas.offsetTop;
}
canvas.addEventListener("touchmove",my_touchmove);
function my_touchmove(e){
current_position_of_x=e.touches[0].clientX-canvas.offsetLeft;
current_position_of_y=e.touches[0].clientY-canvas.offsetTop;
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=width_of_line;
ctx.moveTo(last_position_of_x,last_position_of_y);
ctx.lineTo(current_position_of_x,current_position_of_y);
ctx.stroke();
last_position_of_x=current_position_of_x;
last_position_of_y=current_position_of_y;
}
function clearArea(){
ctx.clearRect(0,0,canvas.width,canvas.height);
}
}

{canvas.addEventListener("mousedown",my_mousedown);
    function my_mousedown(e){
    mouseEvent="mousedown";
    color=document.getElementById("color").value ;
    width_of_line=document.getElementById("width_of_line").value ;
    }
    canvas.addEventListener("mouseup",my_mouseup);
    function my_mouseup(e){
    mouseEvent="mouseup";
    }
    canvas.addEventListener("mouseleave",my_mouseleave);
    function my_mouseleave(e){
    mouseEvent="mouseleave";
    }
    canvas.addEventListener("mousemove",my_mousemove);
    function my_mousemove(e){
    current_position_of_x=e.clientX-canvas.offsetLeft;
    current_position_of_y=e.clientY-canvas.offsetTop;
    if(mouseEvent=="mousedown")
    {ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=width_of_line;
    ctx.moveTo(last_position_of_x,last_position_of_y);
    ctx.lineTo(current_position_of_x,current_position_of_y);
    ctx.stroke();
    }
    last_position_of_x=current_position_of_x;
    last_position_of_y=current_position_of_y;
    }
    function clearArea(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    }
}