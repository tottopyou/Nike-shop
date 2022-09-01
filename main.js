let comments = [];


loadComments();
const button = document.querySelector('#submit');
const newTask = document.querySelector('#exampleInputName1');
const newTask2 = document.querySelector('#exampleInputFeadback1')

button.disabled = true;

newTask.onkeyup  = () => {
    if ((newTask.value.length > 0) && (newTask2.value.length > 0 )) {
        button.disabled = false;
    }
    else {
        button.disabled = true;
    }
}

newTask2.onkeyup  = () => {
    if ((newTask.value.length > 0) && (newTask2.value.length > 0 )) {
        button.disabled = false;
    }
    else {
        button.disabled = true;
    }
}



document.getElementById('submit').onclick= function()
{
    event.preventDefault();
    let exampleInputName = document.getElementById('exampleInputName1');
    let exampleInputFeadback = document.getElementById('exampleInputFeadback1');

    let comment = 
    {
        name: exampleInputName.value,
        feadback : exampleInputFeadback.value,
        time: Math.floor(Date.now()/1000)
    }

    exampleInputName.value='';
    exampleInputFeadback.value='';
    
    button.disabled = true;

    comments.push(comment);

    saveComments();

    showComments();

}
function saveComments()
{
    localStorage.setItem('comments', JSON.stringify(comments));
}

function loadComments()
{
    if(localStorage.getItem('comments')) comments=JSON.parse(localStorage.getItem('comments'));
    showComments();


}

function showComments()
{
    let commentField=document.getElementById('feadback-field');
    let out= '';
    comments.forEach(function(item)
    {
        out+=`<div class="coment"><p class="alert alert primary">${item.name} <a class="text-right small">${timeConverter(item.time)}</a></p><p class="alert alert success">${item.feadback}</p></div>`;

    });

    commentField.innerHTML=out;

}
function timeConverter(UNIX_timestamp){
    var a = new Date(UNIX_timestamp * 1000);
    var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date = a.getDate();
    var hour = a.getHours();
    var min = a.getMinutes();
    var sec = a.getSeconds();
    var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
    return time;

}