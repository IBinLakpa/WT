let element, el;

function stacking(class1, class2, class3,event){
	document.getElementsByClassName(class1)[0].style.zIndex = "10";
	document.getElementsByClassName(class2)[0].style.zIndex = "0";
	document.getElementsByClassName(class3)[0].style.zIndex = "0";
	grab(event,class1);			
}
function grab(event, class1){
	document.addEventListener("mousemove", mover(event, class1,), true);
	document.addEventListener("mouseup", droper(event), true);
    console.log("grab")
}
function mover(event, class1){
	document.getElementsByClassName(class1)[0].style.left = event.clientX + "px";
	document.getElementsByClassName(class1)[0].style.top = event.clientY + "px";
}
function droper(event){
	document.removeEventListener("mousemove", mover, true);
	document.removeEventListener("mouseup", droper, true);
}