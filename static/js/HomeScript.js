
$(function() {





//i guess its used for testing something temporary	
$(".focusclass").click(function(){alert('clicked');});	
//making toolbar - controls and logic as accordion
$( "#toolbar" ).accordion();
//assign draggable for all controls
$("#inptb1").draggable({
           appendTo: "body",
           helper: 'clone',
           cancel: null});
		   
$("#brtb1").draggable({
           appendTo: "body",
           helper: 'clone',
           cancel: null});

 $("#rdtb1").draggable({
           appendTo: "body",
           helper: 'clone',
           cancel: null}); 

 $("#btntb1").draggable({
           appendTo: "body",
           helper: 'clone',
           cancel: false});
		   
$("#chbtb1").draggable({
           appendTo: "body",
           helper: 'clone',
           cancel: null});

 $("#cmbtb1").draggable({
           appendTo: "body",
           helper: 'clone',
           cancel: null}); 

 $("#lbltb1").draggable({
           appendTo: "body",
           helper: 'clone',
           cancel: false});
		   
$("#pwdtb1").draggable({
           appendTo: "body",
           helper: 'clone',
           cancel: false});
		   
$("#clntb1").draggable({
           appendTo: "body",
           helper: 'clone',
           cancel: null});

$("#pgbtb1").draggable({
           appendTo: "body",
           helper: 'clone',
           cancel: null}); 

$("#imgtb1").draggable({
           appendTo: "body",
           helper: 'clone',
           cancel: false});
		   
$("#divtb1").draggable({
           appendTo: "body",
           helper: 'clone',
           cancel: false});
		   
$("#dbstb1").draggable({
           appendTo: "body",
           helper: 'clone',
           cancel: false});		

$("#tabtb1").draggable({
           appendTo: "body",
           helper: 'clone',
           cancel: false});		

$("#seltb1").draggable({
           appendTo: "body",
           helper: 'clone',
           cancel: false});	
		   
$("#instb1").draggable({
           appendTo: "body",
           helper: 'clone',
           cancel: false});
		   
$("#updtb1").draggable({
           appendTo: "body",
           helper: 'clone',
           cancel: false});		

$("#deltb1").draggable({
           appendTo: "body",
           helper: 'clone',
           cancel: false});	
//assign draggable for all logics		   
$("#helloworld").draggable({
           appendTo: "body",
           helper: 'clone',
           cancel: false});
		   
$("#himsg").draggable({
           appendTo: "body",
           helper: 'clone',
           cancel: false});
		   
$("#strcon").draggable({
           appendTo: "body",
           helper: 'clone',
           cancel: false});
$("#addtwono").draggable({
           appendTo: "body",
           helper: 'clone',
           cancel: false});
		   
$("#addthreeno").draggable({
           appendTo: "body",
           helper: 'clone',
           cancel: false});
		   
$("#dividetwono").draggable({
           appendTo: "body",
           helper: 'clone',
           cancel: false});
		   
$("#multiplytwono").draggable({
           appendTo: "body",
           helper: 'clone',
           cancel: false});
		   
$("#strconreturn").draggable({
           appendTo: "body",
           helper: 'clone',
           cancel: false});		   
		   
		   
		   
		   
		   
		   
//assign specific function for each droppable
 $( "#adroppable" ).droppable({
		   			drop: function( event, ui ) {
						var item_id = ui.draggable.attr("id");
						if(item_id=='inptb1')
						{
						adduitoxml('text');
						}
						else if(item_id=='rdtb1')
						{
						adduitoxml('radio');
						}
						else if(item_id=='btntb1')
						{
						adduitoxml('button');
						}
						else if(item_id=='chbtb1')
						{
						adduitoxml('check');
						}
						else if(item_id=='cmbtb1')
						{
						adduitoxml('combo');
						}
						else if(item_id=='lbltb1')
						{
						adduitoxml('label');
						}
						else if(item_id=='pwdtb1')
						{
						adduitoxml('password');
						}
						else if(item_id=='clntb1')
						{
						$(this).append("");
						}
						else if(item_id=='pgbtb1')
						{
						$(this).append("");
						}
						else if(item_id=='imgtb1')
						{
						adduitoxml('image');
						}
						else if(item_id=='brtb1')
						{
						adduitoxml('br');
						}
						else if(item_id=='helloworld')
						{
						loadhelloworldlayout();
						get_ids();
						$("#helloworld_form").fadeIn(1000);
						hwpositionPopup();
						adduitoxml('helloworld');
						//killhelloworldlayout();
						}
						
						else if(item_id=='addtwono')
						{
						loadaddtwonolayout();
						get_ids();
						$("#addtwono_form").fadeIn(1000);
						a2positionPopup();
						adduitoxml('addtwono');
						//killhelloworldlayout();
						}
						else if(item_id=='addthreeno')
						{
						loadaddthreenolayout();
						get_ids();
						$("#addthreeno_form").fadeIn(1000);
						a3positionPopup();
						adduitoxml('addthreeno');
						//killhelloworldlayout();
						}
						else if(item_id=='dbstb1')
						{
						loaddatabaselayout();
						$("#database_form").fadeIn(1000);
						dbpositionPopup();
						//adduitoxml('addthreeno');
						//killhelloworldlayout();
						}
						else if(item_id=='instb1')
						{
						loadtbinsertlayout();
						get_ids();
						$("#tbinsert_form").fadeIn(1000);
						tbinsertPopup();
						}
						else if(item_id=='seltb1')//select operation
						{
						loadselectlayout();
						get_ids();
					    $("#select_form").fadeIn(1000);
						selectpositionPopup();
						}
						else if(item_id=='tabtb1')
						{
						adduitoxml('table');
						}
						else if(item_id=='divtb1')
						{
						adduitoxml('div');
						}
						item_id="";
						}});
//assign settings panel with property and style as accordion
$( "#settings" ).accordion();
//i guess its a temporary code i used to test select functionality on application tab
$( "#apptab" ).tabs({select:function(){alert('selected');}});
//assign tabs for windows mode
$( "#wmodetab" ).tabs();
//assign tabs for iphone mode
$( "#ipmodetab" ).tabs();
//assign tabs for android mode
$( "#amodetab" ).tabs();
});

//function to get the generated code from the file and display it on the textarea of code
function acode()
{
http = new XMLHttpRequest();
if (window.XMLHttpRequest) {
http = new XMLHttpRequest();
} else if (window.ActiveXObject) {
http = new ActiveXObject("Microsoft.XMLHTTP");
}
var url = "http://localhost:8000/acode/";
http.open("GET", url, true)
http.onreadystatechange=processResult;
http.send(null);
}

//call back function for updating the code read from server to the UI textarea
function processResult() {
if (http.readyState == 4 && http.status == 200) {
document.getElementById("acode").value = http.responseText;
} else {
}
}


//function to get the generated code from the file and display it on the textarea of code
function pycode()
{
pyhttp = new XMLHttpRequest();
if (window.XMLHttpRequest) {
pyhttp = new XMLHttpRequest();
} else if (window.ActiveXObject) {
pyhttp = new ActiveXObject("Microsoft.XMLHTTP");
}
var url = "http://localhost:8000/pycode/";
pyhttp.open("GET", url, true)
pyhttp.onreadystatechange=processpyResult;
pyhttp.send(null);
}

//call back function for updating the code read from server to the UI textarea
function processpyResult() {
if (pyhttp.readyState == 4 && pyhttp.status == 200) {
document.getElementById("pylogic").value = pyhttp.responseText;
} else {
}
}


//function to get the generated logic from the file and display it on the textarea of logic
function alogic()
{
lhttp = new XMLHttpRequest();
if (window.XMLHttpRequest) {
lhttp = new XMLHttpRequest();
} else if (window.ActiveXObject) {
lhttp = new ActiveXObject("Microsoft.XMLHTTP");
}
var url = "http://localhost:8000/alogic/";
lhttp.open("GET", url, true)
lhttp.onreadystatechange=logicprocessResult;
lhttp.send(null);
}

//call back function for updating the code read from server to the UI textarea
function logicprocessResult() {
if (lhttp.readyState == 4 && lhttp.status == 200) {
alert(lhttp.responseText);
document.getElementById("alogic").value = lhttp.responseText;
} else {
}
}









//function to add ui controls to xml as well on the UI with id returned from the server side
function adduitoxml(elem)
{
//this code not work in ie but works well with mozila
//alert('inside ajx');
//$.ajax({
//url: "http://localhost:8000/android/?elem=" + elem,
//context: document.body
//}).done(function() {
//});
//this code is added to handle the same functionality in IE,assuming we support only IE at first release
axhttp = new XMLHttpRequest();
if (window.XMLHttpRequest) {
axhttp = new XMLHttpRequest();
} else if (window.ActiveXObject) {
axhttp = new ActiveXObject("Microsoft.XMLHTTP");
}
window.count = window.count + 1;
var url = "http://localhost:8000/android/?elem=" + elem+count;
axhttp.open("GET", url, true)
axhttp.onreadystatechange=processUI;
axhttp.send(null);
//axhttp = null;
}

//call back function for adding UI element to droppable area along with the ID returned from the server side
function processUI() {
if (axhttp.readyState == 4 && axhttp.status == 200) {
uiid = axhttp.responseText;
switch(uiid.substring(0,2))
{
case 'tb':
  $("#adroppable").append("<input type='text' onfocus='myFunction()' id='" + uiid + "'>");
  break;
case 'br':
  $("#adroppable").append("<br onfocus='myFunction()' id='" + uiid + "'>");
  break;
case 'bt':
  $("#adroppable").append("<input type='button' onfocus='myFunction()' id='" + uiid + "'>");
  break;
case 'ra':
  $("#adroppable").append("<input type='radio' onfocus='myFunction()' id='" + uiid + "'>");
  break;
case 'ch':
  $("#adroppable").append("<input type='checkbox' onfocus='myFunction()' id='" + uiid + "'>");
  break;
case 'cm':
  $("#adroppable").append("<select onfocus='myFunction()' id='" + uiid + "'><option></option></select>");
  break;
case 'lb':
  $("#adroppable").append("<p onfocus='myFunction()' id='" + uiid + "'>");
  break;
case 'pw':
  $("#adroppable").append("<input type='password' onfocus='myFunction()' id='" + uiid + "'>");
  break;
case 'im':
  $("#adroppable").append("<img src = '' onfocus='myFunction()' id='" + uiid + "'>");
  break;
case 'hw':
  $("#adroppable").append("<p id='" + uiid + "'>Hello World Logic</p>");
  break;
case 'a2':
  $("#adroppable").append("<p id='" + uiid + "'>Add Two number Logic</p>");
  break;
case 'a3':
  $("#adroppable").append("<p id='" + uiid + "'>Add Three number Logic</p>");
  break;
case 'ta':
  $("#adroppable").append("<table border = '0' id='" + uiid + "'></table>");
  break;
case 'dv':
  $("#adroppable").append("<div id='" + uiid + "'></div>");
  break;
}
axhttp = null;
} else {
}
}

//function code to delete the UI element
function deleteuielement()
{
dhttp = new XMLHttpRequest();
if (window.XMLHttpRequest) {
dhttp = new XMLHttpRequest();
} else if (window.ActiveXObject) {
dhttp = new ActiveXObject("Microsoft.XMLHTTP");
}
var url = "http://localhost:8000/remandroid/?elem=" + window.focuselem;
dhttp.open("GET", url, true)
//axhttp.onreadystatechange=processUI;
dhttp.send(null);
}


	
//function code to load a layout for helloworld logic	
function loadhelloworldlayout()
{
window.logicid[0] = "helloworldsel";
//$("body").append("<form id='helloworld_form'><select id='sel'></select><input type='button' value='Bind' id='bind'/></form>");
$("body").append("<form id='helloworld_form'>" +
				 "<h2> Hello World Details..</h2><br>" +
				 "<table>" +
				 "<tr><td><label>Action ID: </label></td>" + 
				 "<td><select id='helloworldsel' width='10'></select></td></tr>" + 
				 "<tr><td><input type='button' value='Bind' id='hwbind' /></td>" +
				 "</tr></table>" + 
				 "</form>");

$("#hwbind").click(function(){$("#helloworld_form").fadeOut(500); helloworldbindevent(); });
}	

function helloworldbindevent()
{
var eventid = document.getElementById('helloworldsel').value;
						$('#' + eventid).on("click",helloworld);
						//killhelloworldlayout();
}

//function code to load a layout for add two number logic	
function loadaddtwonolayout()
{
window.logicid[0] = "atwono1sel";
window.logicid[1] = "atwono2sel";
window.logicid[2] = "atworessel";
window.logicid[3] = "atwoactsel";

$("body").append("<form id='addtwono_form' style='display:none'>" + 
				 "<h2> Add Two Nos..</h2><br>" +
				 "<table><tr>" + 
				 "<td><label>NO1 ID: </label></td><td><select id='atwono1sel'></select></td></tr>" +
				 "<tr><td><label>NO2 ID: </label></td><td><select id='atwono2sel'></select></td></tr>" + 
				 "<tr><td><label>Result ID: </label></td><td><select id='atworessel'></select></td></tr>" + 
				 "<tr><td><label>Action ID: </label></td><td><select id='atwoactsel'></select><br /></td></tr>" + 
				 "<tr><td><input type='button' value='Bind' id='a2bind' /></td></tr></table>" + 
				 "</form>");
				 
$("#a2bind").click(function(){$("#addtwono_form").fadeOut(500); addtwonobindevent(); });
}
	
function addtwonobindevent()
{
var eventid = document.getElementById('atwoactsel').value;
var no1id = document.getElementById('atwono1sel').value;
var no2id = document.getElementById('atwono2sel').value;
var resid = document.getElementById('atworessel').value;
$('#' + eventid).on("click",{ n1id:no1id,n2id:no2id,rid:resid },addtwonocall);
						//killhelloworldlayout();
}
	
//function code to load a layout for add three number logic
function loadaddthreenolayout()
{
window.logicid[0] = "athreeno1sel";
window.logicid[1] = "athreeno2sel";
window.logicid[2] = "athreeressel";
window.logicid[3] = "athreeactsel";
window.logicid[4] = "athreeno3sel";

$("body").append("<form id='addthreeno_form' style='display:none'>" + 
				 "<h2> Add Three Nos..</h2>" +
				 "<table>" + 
				 "<tr><td><label>NO1 ID: </label></td><td><select id='athreeno1sel'></select></td></tr>" +
				 "<tr><td><label>NO2 ID: </label></td><td><select id='athreeno2sel'></select></td></tr>" + 
				 "<tr><td><label>NO3 ID: </label></td><td><select id='athreeno3sel'></select></td></tr>" + 
				 "<tr><td><label>Result ID: </label></td><td><select id='athreeressel'></select></td></tr>" + 
				 "<tr><td><label>Action ID: </label></td><td><select id='athreeactsel'></select></td></tr>" + 
				 "<tr><td><input type='button' value='Bind' id='a3bind'/></td></tr>" + 
				 "</table>" + 
				 "</form>");
				 
$("#a3bind").click(function(){$("#addthreeno_form").fadeOut(500); addthreenobindevent();});
}

function addthreenobindevent()
{
var eventid = document.getElementById('athreeactsel').value;
var no1id = document.getElementById('athreeno1sel').value;
var no2id = document.getElementById('athreeno2sel').value;
var no3id = document.getElementById('athreeno3sel').value;
var resid = document.getElementById('athreeressel').value;
$('#' + eventid).on("click",{ n1id:no1id,n2id:no2id,n3id:no3id,rid:resid },addthreenocall);
						//killhelloworldlayout();
}

//function code to load a layout for divide two number logic
function loaddividetwonolayout()
{
$("body").append("<form id='overlay_form' style='display:none'>" + 
				 "<h2> Add Two Nos..</h2" +
				 "<table>" +
				 "<tr><td><label>NO1 ID: </label></td><td><select id='dtwono1sel'></select></td></tr>" +
				 "<tr><td><label>NO2 ID: </label></td><td><select id='dtwono2sel'></select></td></tr>" + 
				 "<tr><td><label>Result ID: </label></td><td><select id='dtworessel'></select></td></tr>" + 
				 "<tr><td><label>Action ID: </label></td><td><select id='dtwoactsel'></select></td></tr>" + 
				 "<tr><td><input type='button' value='Bind' id='bind'/></td></tr>" + 
				 "</table>" + 
				 "</form>");
				 
$("#bind").click(function(){$("#overlay_form").fadeOut(500); });
}
	
//function code to kill a layout for divide two number logic
function killdividetwonolayout()
{
$("body").remove("<form id='overlay_form' style='display:none'>" + 
				 "<h2> Add Two Nos..</h2" +
				 "<label>NO1 ID: </label><select id='dtwono1sel'></select><br /><br />" +
				 "<label>NO2 ID: </label><select id='dtwono2sel'></select><br /><br />" + 
				 "<label>Result ID: </label><select id='dtworessel'></select><br /><br />" + 
				 "<label>Action ID: </label><select id='dtwoactsel'></select><br /><br />" + 
				 "<input type='button' value='Bind' id='bind' />" + 
				 "</form>");

}

//function code to load a layout for hi message logic
function loadhimsglayout()
{
$("body").append("<form id='overlay_form' style='display:none'>" + 
				 "<h2> Add Two Nos..</h2>" +
				 "<table>" +
				 "<tr><td><label>Name ID: </label></td><td><select id='himsgnamesel'></select></td></tr>" +
				 "<tr><td><label>Action ID: </label></td><td><select id='himsgactsel'></select></td></tr>" + 
				 "<tr><td><input type='button' value='Bind' id='bind' /></td></tr>" +
				 "</table>" + 
				 "</form>");
				 
$("#bind").click(function(){$("#overlay_form").fadeOut(500); });
}

//function code to kill a layout for hi message logic
function killhimsglayout()
{
$("body").remove("<form id='overlay_form' style='display:none'>" + 
				 "<h2> Add Two Nos..</h2>" +
				 "<label>Name ID: </label><select id='himsgnamesel'></select><br /><br />" +
				 "<label>Action ID: </label><select id='himsgactsel'></select><br /><br />" + 
				 "<input type='button' value='Bind' id='bind'/>" + 
				 "</form>");
}

//function code to load a layout for multiply logic
function loadmultwonolayout()
{
$("body").append("<form id='overlay_form' style='display:none'>" + 
				 "<h2> Add Two Nos..</h2>" +
				 "<table>" + 
				 "<tr><td><label>NO1 ID: </label></td><td><select id='mtwono1sel'></select></td></tr>" +
				 "<tr><td><label>NO2 ID: </label></td><td><select id='mtwono2sel'></select></td></tr>" + 
				 "<tr><td><label>Result ID: </label></td><td><select id='mtworessel'></select></td></tr>" + 
				 "<tr><td><label>Action ID: </label></td><td><select id='mtwoactsel'></select></td></tr>" + 
				 "<tr><td><input type='button' value='Bind' id='bind'/></td></tr>" + 
				 "</table>" + 
				 "</form>");
				 
$("#bind").click(function(){$("#overlay_form").fadeOut(500); });
}

//function code to kill a layout for multiply logic	
function killmultwonolayout()
{
$("body").append("<form id='overlay_form' style='display:none'>" + 
				 "<h2> Add Two Nos..</h2>" +
				 "<label>NO1 ID: </label><select id='mtwono1sel'></select><br /><br />" +
				 "<label>NO2 ID: </label><select id='mtwono2sel'></select><br /><br />" + 
				 "<label>Result ID: </label><select id='mtworessel'></select><br /><br />" + 
				 "<label>Action ID: </label><select id='mtwoactsel'></select><br /><br />" + 
				 "<input type='button' value='Bind' id='bind'/>" + 
				 "</form>");
}

//function code to load a layout for string concatenation logic
function loadstrconlayout()
{
$("body").append("<form id='overlay_form' style='display:none'>" + 
				 "<h2> Add Two Nos..</h2>" +
				 "<table>" + 
				 "<tr></td><label>String1 ID: </label></td><td><select id='strcons1sel'></select></td></tr>" +
				 "<tr><td><label>String2 ID: </label></td><td><select id='strcons2sel'></select></td></tr>" + 
				 "<tr><td><label>Action ID: </label></td><td><select id='strconactsel'></select></td></tr>" + 
				 "<tr><td><input type='button' value='Bind' id='bind'/></td></tr>" + 
				 "</table>" + 
				 "</form>");
				 
$("#bind").click(function(){$("#overlay_form").fadeOut(500); });
}

//function code to kill a layout for string concatenation logic
function killstrconlayout()
{
$("body").remove("<form id='overlay_form' style='display:none'>" + 
				 "<h2> Add Two Nos..</h2>" +
				 "<label>String1 ID: </label><select id='strcons1sel'></select><br /><br />" +
				 "<label>String2 ID: </label><select id='strcons2sel'></select><br /><br />" + 
				 "<label>Action ID: </label><select id='strconactsel'></select><br /><br />" + 
				 "<input type='button' value='Bind' id='bind'/>" + 
				 "</form>");
}

//function code to load a layout for string concatenation with return logic
function loadstrconwrlayout()
{
$("body").append("<form id='overlay_form' style='display:none'>" + 
				 "<h2> Add Two Nos..</h2>" +
				 "<table>" + 
				 "<tr><td><label>String1 ID: </label></td><td><select id='strconwrs1sel'></select></td></tr>" +
				 "<tr><td><label>String2 ID: </label></td><td><select id='strconwrs2sel'></select></td></tr>" + 
				 "<tr><td><label>Result ID: </label></td><td><select id='strconwrressel'></select></td></tr>" + 
				 "<tr><td><label>Action ID: </label></td><td><select id='strconwractsel'></select></td></tr>" + 
				 "<tr><td><input type='button' value='Bind' id='bind'/></td></tr>" + 
				 "</table>" + 
				 "</form>");
				 
$("#bind").click(function(){$("#overlay_form").fadeOut(500); });
}

//function code to kill a layout for string concatenation with return logic
function killstrconwrlayout()
{
$("body").remove("<form id='overlay_form' style='display:none'>" + 
				 "<h2> Add Two Nos..</h2>" +
				 "<label>String1 ID: </label><select id='strconwrs1sel'></select><br /><br />" +
				 "<label>String2 ID: </label><select id='strconwrs2sel'></select><br /><br />" + 
				 "<label>Result ID: </label><select id='strconwrressel'></select><br /><br />" + 
				 "<label>Action ID: </label><select id='strconwractsel'></select><br /><br />" + 
				 "<input type='button' value='Bind' id='bind'/>" + 
				 "</form>");
}

function loaddatabaselayout()
{
$("body").append("<form id='database_form' style='display:none;'>" +
				 "<h2>Database details</h2>" + 
				 "<table border='0'>" + 
				 "<tr><td><label>Name :</label></td><td><input type='text' name='database' id='database'/></td></tr>" + 
				 "<tr><td><label>Table :</label></td><td><input type='text' name='table' id='dbtable'/></td></tr>" + 
				 "<tr><td><label>Columns :</label></td><td><input type='text' name='column' id='tbcolumn' style='width:74px'/>" + 
				 "<select id='datasel' style='width:74px'><option>text</option><option>number</option><option>float</option></select>" + 
				 "<input type='button' value='+' id='tcadd' onclick='add_columns()'></td></tr>" + 
				 "<tr><td></td><td><select style='width: 154px' id='tcsel'></select><input type='button' value='-' id='tcdel' onclick='del_columns()'/></td></tr>" + 
				 "<tr><td><input type ='button' value='Create' id='dbcreate'/></td></tr>" + 
				 "</table>" + 
				 "</form>");
$("#dbcreate").click(function(){$("#database_form").fadeOut(500); createdatabase(); });
}

function createdatabase()
{
col = [];
var tcsel=document.getElementById("tcsel");
var db = document.getElementById("database").value;
var tb = document.getElementById("dbtable").value;
for(i=0;i<tcsel.options.length;i++)
{
col[i] = tcsel.options[i].text;
}
var js = JSON.stringify(col);
jsonhttp = new XMLHttpRequest();
	if (window.XMLHttpRequest) {
	jsonhttp = new XMLHttpRequest();
	} else if (window.ActiveXObject) {
	jsonhttp = new ActiveXObject("Microsoft.XMLHTTP");
	}
	var url = "http://localhost:8000/database/?tc=" + js + "&db=" + db + "&tb=" + tb;
	jsonhttp.open("GET", url)
	jsonhttp.setRequestHeader("Content-type", "application/json", true)
	jsonhttp.onreadystatechange=processjson;
	jsonhttp.send(null);

	}

function processjson()
	{
if (jsonhttp.readyState == 4 && jsonhttp.status == 200) {
	alert(jsonhttp.responseText);
	}}

function add_columns()
{
var x=document.getElementById("tcsel");
var option=document.createElement("option");
option.text=document.getElementById("tbcolumn").value + "-" + document.getElementById("datasel").value ;
try
  {
  // for IE earlier than version 8
  x.add(option,x.options[null]);
  }
catch (e)
  {
  x.add(option,null);
  }
}

function del_columns()
{
var x=document.getElementById("tcsel");
x.remove(x.selectedIndex);
}

function loadtbinsertlayout()
{
window.logicid[0] = "tbinsids";
window.logicid[1] = "tbinsactid";
$("body").append("<form id='tbinsert_form' style='display:none'>" +
				 "<h2>Insert Table details</h2>" + 
				 "<table border='0' width='100%'>" + 
				 "<tr><td width='20px'><label>DB Name :</label></td><td><input type='text' name='database' id='tbinsdatabase'/></td></tr>" + 
				 "<tr><td><label>Table :</label></td><td><select id='tbinssel' style='width:75px'><option>...</option></select></td></tr>" + 
				 "<tr><td><label>Columns :</label></td><td><select id='tbinscolumn' style='width:75px'></select>" + 
				 "<select id='tbinsids' style='width:75px'></select>" + 
				 "<input type='button' value='+' id='tcinsidadd' onclick='ins_add_columns()'></td></tr>" + 
				 "<tr><td></td><td><select style='width: 154px' id='tcinssel'></select><input type='button' value='-' id='tcdel' onclick='ins_del_columns()'/></td></tr>" +
				 "<tr><td>Action ID:</td><td><select id='tbinsactid' style='width:75px'></select></td></tr>" + 
				 "<tr><td><input type ='button' value='BindInsert' id='dbinsert'/></td></tr>" + 
				 "</table>" + 
				 "</form>");
				 
$('#tbinsdatabase').focusout(function() { get_tables(); });
$("#tbinssel").change(function () { get_columns(); });
$("#dbinsert").click(function(){$("#tbinsert_form").fadeOut(500); tbinsertbindevent(); });
}

function get_tables()
{
    gthttp = new XMLHttpRequest();
	if (window.XMLHttpRequest) {
	gthttp = new XMLHttpRequest();
	} else if (window.ActiveXObject) {
	gthttp = new ActiveXObject("Microsoft.XMLHTTP");
	}
	var url = "http://localhost:8000/tables/?db=" + document.getElementById("tbinsdatabase").value;
	gthttp.open("GET", url, true)
	gthttp.onreadystatechange=processgettable;
	gthttp.send(null);
}
//call back function for property result and submit json result to UI
	function processgettable()
	{
	if (gthttp.readyState == 4 && gthttp.status == 200) {
	var json = eval('(' + gthttp.responseText +')');
	$.each(json, function(i, option) { 
	$('#tbinssel').append($('<option/>').attr("value", option).text(option));
	});
	} 
	}
	
function get_columns()
{
    gchttp = new XMLHttpRequest();
	if (window.XMLHttpRequest) {
	gchttp = new XMLHttpRequest();
	} else if (window.ActiveXObject) {
	gchttp = new ActiveXObject("Microsoft.XMLHTTP");
	}
	var url = "http://localhost:8000/columns/?db=" + document.getElementById("tbinsdatabase").value + "&tb=" + document.getElementById("tbinssel").value;
	gchttp.open("GET", url, true)
	gchttp.onreadystatechange=processgetcolumn;
	gchttp.send(null);
}
//call back function for property result and submit json result to UI
	function processgetcolumn()
	{
	if (gchttp.readyState == 4 && gchttp.status == 200) {
	var json = eval('(' + gchttp.responseText +')');
	$.each(json, function(i, option) { 
	//option = option.substring(0, option.length - 6)
	$('#tbinscolumn').append($('<option/>').attr("value", option[0]).text(option[0]));
	});
	} 
	}
	
	

function ins_add_columns()
{
var x=document.getElementById("tcinssel");
var option=document.createElement("option");
option.text=document.getElementById("tbinscolumn").value + "-" + document.getElementById("tbinsids").value ;
try
  {
  // for IE earlier than version 8
  x.add(option,x.options[null]);
  }
catch (e)
  {
  x.add(option,null);
  }
}

function del_columns()
{
var x=document.getElementById("tcinssel");
x.remove(x.selectedIndex);
}

function tbinsertbindevent()
{
window.tbinsert = document.getElementById('tcinssel').options;
window.db = document.getElementById("tbinsdatabase").value;
window.tb = document.getElementById("tbinssel").value;
var eventid = document.getElementById('tbinsactid').value;
$('#' + eventid).on("click",tbinsertcall);
						//killhelloworldlayout();
}


function loadselectlayout()
{
window.logicid[0] = "tbselectactid";
window.logicid[1] = "tbselectresid";

$("body").append("<form id='select_form' style='display:none'>" +
				 "<h2>Select Table details</h2>" + 
				 "<table>" + 
				 "<tr><td><label>DB Name :</label></td><td><input type='text' name='database' id='selectdatabase'/></td></tr>" + 
				 "<tr><td><label>Table :</label></td><td><select id='selectsel' style='width:75px'><option>...</option></select></td></tr>" + 
				 "<tr><td>Result ID:</td><td><select id='tbselectresid' style='width:75px'></select></td></tr>" + 
				 "<tr><td>Action ID:</td><td><select id='tbselectactid' style='width:75px'></select></td></tr>" + 
				 "<tr><td><input type ='button' value='BindSelect' id='dbselect'/></td></tr>" + 
				 "</table>" + 
				 "</form>");
				 
$('#selectdatabase').focusout(function() { select_get_tables(); });
$("#dbselect").click(function(){$("#select_form").fadeOut(500); selectbindevent(); });
}

function select_get_tables()
{
	
    sgthttp = new XMLHttpRequest();
	if (window.XMLHttpRequest) {
	sgthttp = new XMLHttpRequest();
	} else if (window.ActiveXObject) {
	sgthttp = new ActiveXObject("Microsoft.XMLHTTP");
	}
	var url = "http://localhost:8000/tables/?db=" + document.getElementById("selectdatabase").value;
	sgthttp.open("GET", url, true)
	sgthttp.onreadystatechange=processselectgettable;
	sgthttp.send(null);
}
//call back function for property result and submit json result to UI
	function processselectgettable()
	{
	if (sgthttp.readyState == 4 && sgthttp.status == 200) {
	var json = eval('(' + sgthttp.responseText +')');
	$.each(json, function(i, option) { 
	$('#selectsel').append($('<option/>').attr("value", option).text(option));
	});
	} 
	}

	function selectbindevent()
	{
	
	
var dbname = document.getElementById('selectdatabase').value;
var tbname = document.getElementById('selectsel').value;
var resultid = document.getElementById('tbselectresid').value;
var eventid = document.getElementById('tbselectactid').value;
$('#' + eventid).on("click",{ dname:dbname,tname:tbname,resid:resultid},selectcall);

	
	}