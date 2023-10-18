var addfrnd = document.querySelector("#add")
var isstatus = document.querySelector("h3")
var check = 0

addfrnd.addEventListener("click",function(){
    if(check == 0){
    isstatus.innerHTML = "Friends"
    isstatus.style.color = "green"
    addfrnd.innerHTML = "Remove Friend"
    addfrnd.style.backgroundColor = "rgb(252, 243, 243)"
    addfrnd.style.color = "black"
    addfrnd.style.border = "2px solid black"
    
    check = 1

    }else{
    isstatus.innerHTML = "Stranger"
    isstatus.style.color = "red"
    addfrnd.innerHTML = "Add Friend"
    addfrnd.style.backgroundColor = "rgb(8, 53, 255)"
    addfrnd.style.color = "white"
    addfrnd.style.border = "0px"
    check = 0
}
})