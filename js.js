// JavaScript Document
function at_key_return(loca_url){
var textgroup=window.frames[0].document.getElementById("tem").value;
textgroup=textgroup.toString();
textgroup=textgroup.split(loca_url)[1];
return textgroup;
}