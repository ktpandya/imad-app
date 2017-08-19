var counter = 0;
var button = document.getElementById('counter');
button.Onclick - function ()
{
  
  counter = counter + 1;
  var span = document.getElementById('count');
  span.innerHTML = counter.toString();
};