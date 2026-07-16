const modal=document.getElementById("contact-modal");
document.querySelectorAll(".js-contact").forEach(el=>el.addEventListener("click",()=>{modal.hidden=false;document.body.style.overflow="hidden"}));
document.querySelectorAll(".js-close").forEach(el=>el.addEventListener("click",()=>{modal.hidden=true;document.body.style.overflow=""}));
document.addEventListener("keydown",e=>{if(e.key==="Escape"&&!modal.hidden){modal.hidden=true;document.body.style.overflow=""}});
