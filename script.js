document.getElementById("year").textContent=new Date().getFullYear();
document.querySelectorAll('a[href^="#"]').forEach(link=>link.addEventListener("click",e=>{const t=document.querySelector(link.getAttribute("href"));if(!t)return;e.preventDefault();t.scrollIntoView({behavior:"smooth",block:"start"})}));
const lb=document.getElementById("lightbox"),lbImg=document.getElementById("lightbox-image"),lbCap=document.getElementById("lightbox-caption");
document.querySelectorAll(".lightbox-trigger").forEach(b=>b.addEventListener("click",()=>{const i=b.querySelector("img");lbImg.src=b.dataset.full||i.src;lbImg.alt=i.alt;lbCap.textContent=i.alt;lb.classList.add("open");lb.setAttribute("aria-hidden","false");document.body.classList.add("no-scroll")}));
function closeLb(){if(!lb)return;lb.classList.remove("open");lb.setAttribute("aria-hidden","true");document.body.classList.remove("no-scroll");lbImg.src=""}
document.querySelector(".lightbox-close")?.addEventListener("click",closeLb);lb?.addEventListener("click",e=>{if(e.target===lb)closeLb()});document.addEventListener("keydown",e=>{if(e.key==="Escape")closeLb()});
