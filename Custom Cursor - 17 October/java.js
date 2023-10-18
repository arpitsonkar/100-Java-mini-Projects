var main = document.querySelector("#main")
var crsr = document.querySelector(".cursor")

main.addEventListener("mousemove",function(arpit){
    crsr.style.left = arpit.x+"px"
    crsr.style.top = arpit.y+"px"

})

// arpit = dets 