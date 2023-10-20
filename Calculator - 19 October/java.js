function fillup(value){
    display2.value += value;
}

function equalx(){
    try{
    display2.value = eval(display2.value);
    display2.style.textAlign = 'right';

    }catch(error){
        display2.style.fontSize = '20px';
        display2.value = 'Me Nhi Btaunga';
    }
    
}

function clearx(){
    display2.value = '';
}

function backS(){
    display2.value = display2.value.slice(0,-1);
}