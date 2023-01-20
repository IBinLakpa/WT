let element;
const spanElements = document.querySelectorAll("div");
for(el of spanElements) {
	el.addEventListener("mousedown", grab, true)
}
function grab(event){
	element = event.currentTarget;
	document.addEventListener("mousemove", mover, true);
	document.addEventListener("mouseup", droper, true);
	for(el of spanElements) {
    	if(el.style.zIndex=='2'){
	    	el.style.zIndex='1';
	        console.log('set 1')
    	}
		else if(el.style.zIndex=='1'){
    	   el.style.zIndex='0';
    	}
	}
    element.style.zIndex='2';
}
function mover(event){
	element.style.left = event.clientX + "px";
	element.style.top = event.clientY + "px";
}
function droper(event){
	document.removeEventListener("mousemove", mover, true);
	document.removeEventListener("mouseup", droper, true);
}