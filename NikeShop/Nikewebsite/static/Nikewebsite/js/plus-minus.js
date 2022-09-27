
// Для count в корзині + або - 

let  counter_two = 1;

function count_plus() {

    counter_two++;
    document.querySelector('.plus-minus').innerHTML = counter_two;
}



function count_minus() {

    if(counter_two>1){
        counter_two--;
    document.querySelector('.plus-minus').innerHTML = counter_two;
    }
    
}

const  button_plus=document.getElementById("plus"),
       button_minus=document.getElementById("minus");

button_plus.addEventListener("click", count_plus);
button_minus.addEventListener("click", count_minus);