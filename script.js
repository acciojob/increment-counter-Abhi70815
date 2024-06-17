//your JS code here. If required.
let count= document.querySelector("#counter");
let inc= document.querySelector("#incrementBtn");
let i=0;
inc.addEventListener('click', ()=>{
    i++;
count.innerText=i;
	alert(i);
})