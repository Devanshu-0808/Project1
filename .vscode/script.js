// dets is mouse jab jab move ho ra hai tab tab kya kya ghantnaye ho rahi hai hai like Xaxis , Yaxis coardinate etc
let crsr =document.querySelector("#cursor")
let crsr2 =document.querySelector("#cursor-b")
document.addEventListener("mousemove",function(dets){
    // console.log(dets.y)//give yaxis  
    // console.log(dets.x)//give xaxis  
     crsr.style.left=dets.x+"px"
     crsr.style.top=dets.y+30+"px"
     crsr2.style.left=dets.x-200+"px"
     crsr2.style.top=dets.y-200+"px"

})
let h4=document.querySelectorAll("#nav h4")
h4.forEach(function(value){
     value.addEventListener("mouseenter" , function(){
           crsr.style.scale=3
           crsr.style.border="1px solid white"
           crsr.style.backgroundColor="transparent"
           
     })
     value.addEventListener("mouseleave" , function(){
        crsr.style.scale=1
        crsr.style.border="0px solid #95C11E"
        crsr.style.backgroundColor="#95C11E"
        
        
  })

})


gsap.to("#nav" , {
    backgroundColor : "black" , 
    duration : 0.5,
    height:"110px",
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        start:"top -10px",//itna scroll karne par bar dikhne lagega
        end:"top -11%",//itna scrool karne par bar dikhne lagega             
        scrub:1/*black nav black wala gayab hone ki timing 1 to 5 scale hai  exdum se color na change hoye*/
    }
})
gsap.to("#main" , {
    backgroundColor: "#000",
    scrollTrigger:{
        
        trigger:"#main",
        scroller:"body",
        // markers: true,
        start:"top -80%",
        end:"top -10%",
        
        scrub:2
    }
})
gsap.from("#about-us img , #about-us-in" ,{
    y:90,
    
    duration:1,
    // stagger : 0.4, /*stagger is used for one by one */
  scrollTrigger:{
    trigger:"about-us",
    scroller:"body",
    scrub:1
  }
} )
gsap.from("#colon1" ,{
    y:-70,
    x:-70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        scrub:2
    }
})
gsap.from("#colon2" ,{
    y:70,
    x:70,
    scrollTrigger:{
        trigger:"#colon2",
        scroller:"body",
        scrub:2
    }
})
gsap.from("#page4 h1" , {
    y:50,
    scrollTrigger:{
      trigger:"#page4 h1",
      scroller:"body",
     
      scrub:3
    }
})

