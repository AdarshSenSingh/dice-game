var x= Math.random()*6;
var y= Math.ceil(x);
var randomdiceImg= "dice"+y+".png";
var imgSrc= "images/"+randomdiceImg;
 var ad= document.querySelectorAll("img")[0];
 ad.setAttribute("src",imgSrc);
 var a= Math.random()*6;
 var z= Math.ceil(a);
 var random2= "dice"+z+".png";
 var imgSrc2="images/"+random2;
 var c= document.querySelectorAll("img")[1];
 c.setAttribute("src",imgSrc2);
 if(y>z){
    document.querySelector("h1").innerHTML="Player 1 wins";
    
 }
 else if(y<z) document.querySelector("h1").innerHTML="Player 2 wins";
 else document.querySelector("h1").innerHTML="Match Draw";



