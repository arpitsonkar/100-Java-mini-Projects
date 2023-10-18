var con = document.querySelector("#main")
var love = document.querySelector("i")

con.addEventListener("dblclick",function(){
    love.style.transform = 'scale(1)';
    love.style.opacity = 0.8;

    setTimeout(function(){
        love.style.opacity = 0;
    },2000);
    
    setTimeout(function(){
        love.style.transform = 'scale(0)';
    },3000);
})
