canvas= document.getElementById("myCanvas");
ctx= canvas.getContext("2d");
bg_img= "mars.jpg";
rover= "rover.png";
rover_x= 100;
rover_y= 70;

function add(){
    bg_img_2= new Image();
    bg_img_2.src=bg_img;
    bg_img_2.onload= uploadbg;
    
    rover_2= new Image();
    rover_2.src=rover;
    rover_2.onload= uploadrv;
}

function uploadbg(){
    ctx.drawImage(bg_img_2,0,0,canvas.width,canvas.height);
}

function uploadrv(){
    ctx.drawImage(rover_2,rover_x,rover_y,150,150);
}

window.addEventListener("keydown", my_keydown); 

function my_keydown(e) {
    keyPressed= e.keyCode;
    console.log(keyPressed);
    if(keyPressed=='37'){
        Left();
        console.log('Left');
 }
if(keyPressed=='38'){
    Up();
    console.log('Up');
}
if(keyPressed=='39'){
    Right();
    console.log('Right');
}
if(keyPressed=='40'){
    Down();
    console.log('Down');
}
}
function Left(){
    if(rover_x>=0){
        rover_x = rover_x-10;
        uploadbg();
        uploadrv();

    }
}
function Right(){
    if(rover_x<=800){
        rover_x = rover_x+10;
        uploadbg();
        uploadrv();

    }
}
function Up(){
    if(rover_y>=0){
        rover_y = rover_y-10;
        uploadbg();
        uploadrv();

    }
}
function Down(){
    if(rover_y<=500){
        rover_y = rover_y+10;
        uploadbg();
        uploadrv();

    }
}