if (!localStorage.getItem('counter')) {
    localStorage.setItem('counter', 0);
}
            
function count() {
    let counter = localStorage.getItem('counter');

    counter++;
    document.querySelector('.num-st').innerHTML = counter;

    localStorage.setItem('counter', counter);
}


var basket=document.querySelector(".basket");

function animationBasket1()
{
    let id1 = null;
    let pos1 = 43.5;

    clearInterval(id1);
    id1=setInterval(modificate1,1);
    function modificate1()
    {
        if (pos1==75) 
        {
            clearInterval(id1)
        }
        else
        {
            pos1+=0.5;
            basket.style.width=pos1 + 'px';
        }
    }
    
    setTimeout(() => {animationBasket2();},2500);
    setTimeout(() => {document.querySelector(".number").style.display = 'flex';},500);
}
function animationBasket2()
{

    let id2 = null;
    let pos2= 75;
    clearInterval(id2);
    id2=setInterval(modificate2,1);
    function modificate2()
    {
        if (pos2==43.5) 
        {
            clearInterval(id2)
        }
        else
        {
            pos2=pos2-0.5;
            basket.style.width=pos2 + 'px';
        }
    }
    document.querySelector(".number").style.display = 'none';
}


document.querySelector('.num-st').innerHTML = localStorage.getItem('counter');

const button1=document.getElementById("1"),
      button2=document.getElementById("2"), 
      button3=document.getElementById("3"),
      button4=document.getElementById("4"),
      button5=document.getElementById("5"),
      button6=document.getElementById("6"),     
      button7=document.getElementById("7")


button1.addEventListener("click", animationBasket1);
button1.addEventListener("click", count);

button2.addEventListener("click", animationBasket1);
button2.addEventListener("click", count);

button3.addEventListener("click", animationBasket1);
button3.addEventListener("click", count);

button4.addEventListener("click", animationBasket1);
button4.addEventListener("click", count);

button5.addEventListener("click", animationBasket1);
button5.addEventListener("click", count);

button6.addEventListener("click", animationBasket1);
button6.addEventListener("click", count);

button7.addEventListener("click", animationBasket1);
button7.addEventListener("click", count);
