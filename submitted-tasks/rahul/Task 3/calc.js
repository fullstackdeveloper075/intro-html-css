function cal(v)
{
document.getElementById("op").value+=v
}
 function clears()
 {
 document.getElementById("op").value = ""
 }
function solver()
{
let x = document.getElementById("op").value
let y = eval(x)
document.getElementById("op").value = y
}

