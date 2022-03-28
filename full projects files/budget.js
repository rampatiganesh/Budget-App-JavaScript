var total = document.getElementById('total'); 
var sub = document.getElementById('sub');
function addmoney()
{
//console.log(total.value);
budget.textContent=total.value;
current.textContent=total.value;
}
function submoney()
{

current.textContent=total.value - sub.value;
}
