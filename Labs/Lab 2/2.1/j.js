window.onload = function() {
    d = document.getElementById('screen_divider');
    s_l = document.getElementById('s_left');
    s_r = document.getElementById('s_right');
    d.addEventListener('mousedown',shift_divider,false);
    s_l.addEventListener('mouseup',move_left,false)
    s_r.addEventListener('mouseup',move_right,false)
    //d.addEventListener('click',move_div,false);
}
function shift_divider(){
    const d = document.getElementById('screen_divider');
    let x="yellow";
    d.style.backgroundColor=x;
}
function move_div(){
    const d = document.getElementById('screen_divider');
    d.style.backgroundColor="blue";
    let posX="70px";
    d.style.left="70px";
}
function move_left(){
    const d = document.getElementById('screen_divider');
    const s_l = document.getElementById('s_left');
    const s_r = document.getElementById('s_right');
    d.style.right+="50px";
    s_l.style.width+="50px";
    s_r.style.width-="50px";
}
function move_right(){
    const d = document.getElementById('screen_divider');
    const s_l = document.getElementById('s_left');
    const s_r = document.getElementById('s_right');
    d.style.left+="50px";
    s_l.style.width-="50px";
    s_r.style.width+="50px";
}