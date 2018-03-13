$( document ).ready(function(){
var falling = true;

TweenLite.set("#loader",{perspective:600})

var total = 30;
var loader = document.getElementById("loader"),	w = window.innerWidth , h = window.innerHeight;
 
 for (i=0; i<total; i++){ 
   var div = document.createElement('div');
   TweenLite.set(div,{attr:{class:'dot'},x:R(0,w),y:R(-200,-150),z:R(-200,200)});
   loader.appendChild(div);
   animm(div);
 }
 
 function animm(elm){   
   TweenMax.to(elm,R(6,15),{y:h+100,ease:Linear.easeNone,repeat:-1,delay:-15});
   TweenMax.to(elm,R(4,8),{x:'+=100',rotationZ:R(0,180),repeat:-1,yoyo:true,ease:Sine.easeInOut});
   TweenMax.to(elm,R(2,8),{rotationX:R(0,360),rotationY:R(0,360),repeat:-1,yoyo:true,ease:Sine.easeInOut,delay:-5});
 };

function R(min,max) {return min+Math.random()*(max-min)};
});