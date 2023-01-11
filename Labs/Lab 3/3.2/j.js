
function r(){
    var x=document.getElementById("in").value;
    let r = "";
    for(let i=x.length-1; i>=0; i--){
        r+=x[i];
    }
    if(r==x){
        document.getElementById("alert").innerHTML="Palindrome";
    }
    else{
        document.getElementById("alert").innerHTML=("Not a Palindrome");
    }
};