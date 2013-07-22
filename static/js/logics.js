
function addtwono(no1,no2)

{

no3 = parseInt(no1) + parseInt(no2);

return no3;

}





function addtwonocall(event)

{







var no1 = document.getElementById(event.n1id.id).value;

var no2 = document.getElementById(event.n2id.id).value;



var res = addtwono(no1,no2);

document.getElementById(event.rid.id).value = res;





}

<!---append logic here---!>
