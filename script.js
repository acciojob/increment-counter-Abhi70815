//your JS code here. If required.
let inc= document.querySelector("#incrementBtn");
count=0;
inc.addEventListener('click', ()=>{
    count++;
 document.querySelector("#counter").innerText=count++;
	alert(count);
})