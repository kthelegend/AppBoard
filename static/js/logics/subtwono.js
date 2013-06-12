function subtwono(no1,no2)
{
no3 = parseInt(no1) - parseInt(no2);
return no3;
}


function subtwonocall(event)
{



var no1 = document.getElementById(event.data.n1id).value;
var no2 = document.getElementById(event.data.n2id).value;

var res = subtwono(no1,no2);
document.getElementById(event.data.rid).value = res;


}