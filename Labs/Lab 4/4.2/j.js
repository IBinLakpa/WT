let element, el;
const spanElements = document.getElementsByTagName("div");

for(el of spanElements) {
	el.addEventListener("mousedown", grab, true)
    console.log("set")
}
function grab(event,element){
	element = event.currentTarget;
	document.addEventListener("mousemove", mover(element), true);
	document.addEventListener("mouseup", droper(element), true);
    console.log("grab")
}
function mover(event, element){
	element.style.left = event.clientX + "px";
	element.style.top = event.clientY + "px";
}
function droper(event){
	document.removeEventListener("mousemove", mover, true);
	document.removeEventListener("mouseup", droper, true);
}