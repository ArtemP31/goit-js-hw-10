import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{i as o}from"./assets/vendor-BbbuE1sJ.js";const r=document.querySelector(".form");r.addEventListener("submit",m);function m(e){e.preventDefault();const{delay:s,state:i}=e.currentTarget.elements;n(s.value,i.value).then(t=>{o.success({position:"topRight",message:`✅ Fulfilled promise in ${t}ms`})}).catch(t=>{o.error({position:"topRight",message:`❌ Rejected promise in ${t}ms`})}),e.currentTarget.reset()}function n(e,s){return new Promise((i,t)=>{setTimeout(()=>{s==="fulfilled"?i(e):t(e)},e)})}
//# sourceMappingURL=2-snackbar.js.map
