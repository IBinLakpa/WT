function a(){
    var x=r();
    x.sort();
    document.getElementById("ra").innerText=x;
}
function d(){
    var x=r();
    x.sort();
    x.reverse();
    document.getElementById("ra").innerText=x;
}
function r(){
    var a1=document.getElementById("a1").value;
    var a2=document.getElementById("a2").value;
    var a3=document.getElementById("a3").value;
    var a4=document.getElementById("a4").value;
    var a5=document.getElementById("a5").value;
    var a6=document.getElementById("a6").value;
    let a=[];
    a.push(a1);
    a.push(a2);
    a.push(a3);
    a.push(a4);
    a.push(a5);
    a.push(a6);
    document.getElementById("ar").innerText=a;
    return a;
};