chrome.extension.sendRequest("show_page_action");

var boxTitle = "Look, a Cat!";
var imgAPI = "http://thecatapi.com/api/images/get?format=src&type=gif";
var moduleReplace = "module:_48_1";

var div = document.getElementById(moduleReplace);

var nodes = div.childNodes;
if (nodes)
{
	div.innerHTML = div.innerHTML.replace('<span class="moduleTitle">Tools</span>','<span class="moduleTitle">' + boxTitle + '</span>');
	for(var i=0; i<nodes.length; i++) {		
	    if (nodes[i].className == 'collapsible') {
	        console.log('Cats inbound!')
	        nodes[i].innerHTML = '<img width="100%" src="'+imgAPI+'" />';
	    }
	}
}

else 
{
	console.log('Couldn\'t find the right box for our cats. Sorry!');
}
