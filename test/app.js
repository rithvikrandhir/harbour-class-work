let sides = 0;
function add(){
  sides++;
  let node = document.createElement("div");
  node.className = 'side';
  console.log(node);
  document.getElementsByClassName('shape')[0].appendChild(node);
}
function remove(){
  sides--;
  var elements=document.getElementsByClassName('shape')[0].children
  //console.log();
  elements[elements.length-1].remove();
}
