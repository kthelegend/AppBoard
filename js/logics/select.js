function processselect()
	{
if (selhttp.readyState == 4 && selhttp.status == 200) {
	alert(selhttp.responseText);
	document.getElementById(window.selres).innerHTML = selhttp.responseText;
	}}


function selectcall(event)
{
window.selres = event.data.resid;
selhttp = new XMLHttpRequest();
	if (window.XMLHttpRequest) {
	selhttp = new XMLHttpRequest();
	} else if (window.ActiveXObject) {
	selhttp = new ActiveXObject("Microsoft.XMLHTTP");
	}
	var url = "http://localhost:8000/select/?db=" + event.data.dname + "&tb=" + event.data.tname ;
	selhttp.open("GET", url)
	selhttp.onreadystatechange=processselect;
	selhttp.send(null);


}