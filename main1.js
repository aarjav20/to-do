var add = document.getElementById('add');
var input = document.getElementsByClassName("fill-input");
var rev = document.getElementsByClassName('remove');

var adtem = function() {
  var cl = input[0].cloneNode(true);
  var li = document.getElementById("list1").appendChild(cl);
  li.childNodes[1].value = '';
  li.childNodes[1].focus();
  rev[rev.length - 1].addEventListener('click', rtem);
};
var rtem = function() {
  if (input.length>1) {
    var child = this.parentElement.parentElement;
    child.parentNode.removeChild(child);
  }
};
add.addEventListener('click', adtem);
rev[0].addEventListener('click', rtem);
