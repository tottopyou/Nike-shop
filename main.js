let comments = [];

loadComments();

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
    exampleInputFeadback='';

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
        out+=`<p class="text-right small">${timeConverter(item.time)}</p>`;
        out+=`<p class="alert alert primary">${item.name}</p>`;
        out+=`<p class="alert alert success">${item.feadback}</p>`;

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