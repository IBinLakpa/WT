const d=document.getElementById("display");
function back(){
    let s= d.value.toString();
    d.value=s.substr(0,s.length-1);
};