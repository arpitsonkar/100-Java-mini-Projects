const endDAte = "2 November 2025 12:00 AM"
document.querySelector("#end-date").innerHTML = endDAte

const inputs = document.querySelectorAll("input")

function clock(){
    const end = new Date(endDAte)
    const now = new Date()
    const diff = (end - now) /1000;
    inputs[0].value = Math.floor(diff/60/60/24);
    inputs[1].value = Math.floor(diff/60/60)%24;
    inputs[2].value = Math.floor(diff/60)%60;
    inputs[3].value = Math.floor(diff)% 60;

}


clock();

setInterval(function(){
    clock();
},1000)