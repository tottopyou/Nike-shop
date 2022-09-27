


const  log_button = document.querySelector(".Log-in");
const  close_button = document.querySelector(".close-button");

log_button.addEventListener("click", log_menu);
close_button.addEventListener("click",close)

function log_menu (){
    document.querySelector(".Log_in").style.display = 'flex';
    setTimeout(() => {document.querySelector(".Log_in").style.animationPlayState = 'paused';},1000);
}

function close (){
    document.querySelector(".Log_in").style.animationPlayState = '';
    setTimeout(() => {document.querySelector(".Log_in").style.display = 'none';},1000);
}



const aboba = document.querySelector('.create');
aboba.addEventListener('click', create_acc);

var i=1;

function create_acc (){
    
    if(i==1)
    {
        document.querySelector("#name").style.display = 'flex';
        let ac = document.querySelector('.acc_acc');
        let cr = document.querySelector('.create')
        ac.innerHTML = 'Already have an account?' ;
        cr.innerHTML = 'Log In';
        i++;
    }
    else
    {
        document.querySelector("#name").style.display = 'none';
        let ac = document.querySelector('.acc_acc');
        let cr = document.querySelector('.create')
        ac.innerHTML = 'No account? ' ;
        cr.innerHTML = 'Create one';
        i--;
    }

   
}


const light_button = document.querySelector('.light-img')
light_button.addEventListener("click",light)

function light(){
    
    var x = document.getElementById("pass");
    if (x.type === "password") {
        x.type = "text";
        document.querySelector(".light-yellow").style.display = 'flex';
    } else {
        x.type = "password";
        document.querySelector(".light-yellow").style.display = 'none';
    }
}