/* empty css                      */import{i as a,S as p}from"./assets/vendor-5ObWk2rO.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&t(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function t(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();const m="46775903-5820c4e6d789cb0cb95772c39",h="https://pixabay.com/api/?";function g(s,o=1){const i=new URLSearchParams({key:m,image_type:"photo",orientation:"horizontal",safesearch:"true",page:o,q:s});return fetch(`${h}${i}`).then(t=>{if(!t.ok)throw iziToast.error({title:"Error",message:"Ups.. Something wrong",position:"topRight"}),new Error("Network response was not ok");return t.json()}).catch(t=>console.log(t))}function f(s){return s.map(({webformatURL:o,largeImageURL:i,tags:t,likes:e,views:r,comments:n,downloads:u})=>`<li class="gallery-item">
          <a class="gallery-link" href="${i}">
            <img
              class="gallery-image"
              src="${o}"
              alt="${t}"
              width="360"
            />
          </a>
          <ul class="gallery-item-info">
                <li class="info-block">
                  <h5>Likes</h5>
                  <p>${e}</p>
                </li>
                <li class="info-block">
                  <h5>Views</h5>
                  <p>${r}</p>
                </li>
                <li class="info-block">
                  <h5>Comments</h5>
                  <p>${n}</p>
                </li>
                <li class="info-block">
                  <h5>Downloads</h5>
                  <p>${u}</p>
                </li>
              </ul>
            </li>`).join("")}let y=1;const d=document.querySelector(".form"),c=document.querySelector(".gallery"),l=document.querySelector(".loader");l.style.display="none";d.addEventListener("submit",b);function b(s){s.preventDefault(),l.style.display="block",c.innerHTML="";const o=s.target.elements.input,i=o?o.value.trim():"";if(i.length===0)return l.style.display="none",a.error({title:"Error",backgroundColor:"tomato",message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"white",messageSize:"20",position:"bottomRight",close:!0,displayMode:2});g(i,y).then(t=>{if(t.hits.length===0)return c.innerHTML="",a.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"bottomRight"});c.insertAdjacentHTML("beforeend",f(t.hits)),w.refresh()}).catch(t=>{console.log(t),a.error({title:"Error",message:"Something went wrong. Please try again later.",position:"topRight"})}).finally(()=>{l.style.display="none"})}const w=new p(".gallery a",{captionsData:"alt",captionDelay:250});
//# sourceMappingURL=index.js.map
