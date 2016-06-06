// function getinfo() {

// 	var type = document.getElementById("typehere").value
// 	var text = document.createTextNode(type)
// 	var newitem = document.createElement('LI')
// 	newitem.appendChild(text)
// 	document.getElementById("getinfo").appendChild(newitem)
	
// }
function showitem() {
	var userinput = document.getElementById('userinput').value;
	var createText = document.createTextNode(userinput);
	var div = document.createElement('div');
	var a = document.createElement('a');
	a.setAttribute('href', '#')
	div.className += "fa fa-check";
	var newToDo = document.createElement('LI');
	a.appendChild(div);
	newToDo.appendChild(a);
	newToDo.className += "list-group-item";
	newToDo.appendChild(createText);
	document.getElementById('showitem').appendChild(newToDo);
$("li").fadeIn("slow");

$("ul > li > a").click(function() {
  $(this).parent("li").slideUp(200);
});
}

document.getElementById('add').addEventListener('click', showitem, false)

 

