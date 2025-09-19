import{a as m,S as f,i}from"./assets/vendor-BSTwZ_tR.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const g="52348625-41a9db4c50e5799aece4dcd77",y="https://pixabay.com/api/";async function h(s){const t=new URLSearchParams({key:g,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}),o=`${y}?${t}`;try{return(await m.get(o)).data}catch(a){throw new Error(`Не вдалося отримати зображення: ${a.message}`)}}const c=document.querySelector(".gallery"),d=document.querySelector(".loader"),w=new f(".gallery a",{captionsData:"alt",captionDelay:250});function L(s){console.log(s);const t=s.map(({webformatURL:o,largeImageURL:a,tags:e,likes:r,views:n,comments:u,downloads:p})=>`
    <li class="gallery-item">
      <div class="card-info">
        <a href="${a}">
          <img class="gallery-image" 
            src="${o}" 
            alt="${e}" 
            loading="lazy" 
          />
        </a>
        <div class="info">
          <p><span class="likes-label">Likes:</span> ${r}</p>
          <p><span class="views-label">Views:</span> ${n}</p>
          <p><span class="comments-label">Comments:</span> ${u}</p>
          <p><span class="downloads-label">Downloads:</span> ${p}</p>
        </div>
      </div>
    </li>`).join("");c.insertAdjacentHTML("beforeend",t),w.refresh()}function b(){c.innerHTML=""}function v(){d.classList.add("is-visible")}function S(){d.classList.remove("is-visible")}const l=document.querySelector(".form");document.querySelector(".gallery");l.addEventListener("submit",async s=>{s.preventDefault(),console.log(s.target.elements.search.value);const t=s.target.elements.search.value.trim();if(t)try{v(),b();const o=await h(t);if(o.hits.length===0){i.show({title:"❌",color:"red",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}L(o.hits)}catch{i.error({title:"Error",message:"Something went wrong while fetching images 😢",position:"topRight"})}finally{S(),l.reset()}});
//# sourceMappingURL=index.js.map
