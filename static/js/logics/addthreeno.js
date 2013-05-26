function addthreeno(no1,no2,no3)
{
no4 = parseInt(no1) + parseInt(no2) + parseInt(no3);
return no4;
}


function addthreenocall(event)
{
var no1 = document.getElementById(event.data.n1id).value;
var no2 = document.getElementById(event.data.n2id).value;
var no3 = document.getElementById(event.data.n3id).value;
var res = addthreeno(no1,no2,no3);
document.getElementById(event.data.rid).value = res;


}