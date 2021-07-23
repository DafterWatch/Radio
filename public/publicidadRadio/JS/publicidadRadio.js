n =  new Date();
y = n.getFullYear();
m = n.getMonth() + 1;
d = n.getDate();
document.getElementById("date").innerHTML = m + "/" + d + "/" + y;
var dateControl = document.getElementById("start");
if(m<10){
    m = "0"+m;
}
if(d<10){
    d = "0"+d;
}
a = y+"-"+m+"-"+d;
dateControl.value = a;