
var rect=document.querySelector("#center")

rect.addEventListener("mousemove",function(details){
   var rectanglelocation=rect.getBoundingClientRect();
   var insiderectval=details.clientX - rectanglelocation.left

   if(insiderectval<rectanglelocation.width/2){
    var red=gsap.utils.mapRange(0,rectanglelocation.width/2,255,0,insiderectval);
    gsap.to(rect,{
        backgroundColor: `rgb(${red},0,0)`,
        ease: Power4,
    })
   }else{
    var blue=gsap.utils.mapRange(rectanglelocation.width/2,rectanglelocation.width,0,255,insiderectval);
    gsap.to(rect,{
        backgroundColor: `rgb(0,0,${blue})`,
        ease: Power4,
    })
   }
});

rect.addEventListener("mouseleave",function(){
    gsap.to(rect,{
        backgroundColor: "white",
    });
});