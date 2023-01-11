const i=document.getElementById("in");
function r(){
    var x=document.getElementById("in").value;
    let r = 0;
    console.log(x);
    for(let i=1; i<=x; i++){
        let c=0;
        console.log("Loop");
        console.log(i);
        for(let j=1; j<=i; j++){
            if((i%j)==0){
                c++;   
                console.log(j);             
            }
        }
        if(c==2){
            r+=i;
        }
    }
    document.getElementById("ans").innerHTML=r;
};