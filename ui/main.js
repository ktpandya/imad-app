/*var madi = document.getElementById('madi');
var marginleft = 0;
/*function moveright ()
{marginleft = marginleft + 10;
madi.style.marginleft = marginleft + 'px';
}
madi.onclick = function ()
{
var interval = setinterval(moveright,100);    
};
madi.onclick = function ()
{marginleft = marginleft + 10;
madi.style.marginleft = '10px';

};*/
var nameinput = document.getElementById('name_');
var submit = document.getElementById('submit');
var name = nameinput.value;
var request = new XMLHttpRequest();
request.open('GET', 'https://kushpandya69.imad.hasura-app.io/submit-name?name=' + name, true);
request.send(null);
submit.onclick = function ()
{
    var names = ['name1','name2','name3'];
    var list = '';
    for (var i = 1; i< names.length; i++);
    {
    list += '<li>' + names[i] + '</li>' ;
    }
    var ul = document.getElementById('namelist');
    ul.innerHTML = list;
};