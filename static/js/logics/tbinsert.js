function tbinsert(col)
{
var js = JSON.stringify(col);
tbinshttp = new XMLHttpRequest();
	if (window.XMLHttpRequest) {
	tbinshttp = new XMLHttpRequest();
	} else if (window.ActiveXObject) {
	tbinshttp = new ActiveXObject("Microsoft.XMLHTTP");
	}
	var url = "http://localhost:8000/tbins/?tc=" + js + "&db=" + window.db + "&tb=" + window.tb;
	tbinshttp.open("GET", url)
	tbinshttp.setRequestHeader("Content-type", "application/json", true)
	tbinshttp.onreadystatechange=processtbins;
	tbinshttp.send(null);




}

function processtbins()
	{
if (tbinshttp.readyState == 4 && tbinshttp.status == 200) {
	alert(tbinshttp.responseText);
	}}


function tbinsertcall(event)
{
var col = [];
for(i=0;i<window.tbinsert.length;i++)
{
n = window.tbinsert[i].text.split("-");
var cname = n[0];
var cvalue = document.getElementById(n[1]).value;
col[i] = cname + "-" + cvalue;
}
//var col = window.tbinsert;
//tbinsert(col);

var js = JSON.stringify(col);
tbinshttp = new XMLHttpRequest();
	if (window.XMLHttpRequest) {
	tbinshttp = new XMLHttpRequest();
	} else if (window.ActiveXObject) {
	tbinshttp = new ActiveXObject("Microsoft.XMLHTTP");
	}
	var url = "http://localhost:8000/tbins/?tc=" + js + "&db=" + window.db + "&tb=" + window.tb;
	tbinshttp.open("GET", url)
	tbinshttp.setRequestHeader("Content-type", "application/json", true)
	tbinshttp.onreadystatechange=processtbins;
	tbinshttp.send(null);


}