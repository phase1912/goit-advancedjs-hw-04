import{S as u,i as a}from"./assets/vendor-5ObWk2rO.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&t(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function t(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}})();async function p(i){const t=`https://pixabay.com/api/?key=50612184-536cfb83b780c62ede1e3fae6&q=${encodeURIComponent(i)}&image_type=photo&orientation=horizontal&safesearch=true`;try{const e=await fetch(t);if(!e.ok)throw new Error(`Error: ${e.status}`);return e.json()}catch(e){throw console.error("Fetch failed:",e),e}}function f(i,r){i.innerHTML=r.hits.map(({webformatURL:s,largeImageURL:t,tags:e,likes:o,views:n,comments:l,downloads:c})=>`
        <li class="gallery-item">
          <a class="gallery-link" href="${t}">
            <img
              class="gallery-image"
              src="${s}"
              alt="${e.length>0?e.split(",").slice(0,3).join(", "):"no name"}"
            />

             <ul class="caption-overlay">
                <li class="caption-overlay-item">
                    <strong>Likes:</strong>
                    <span>${o}</span>
                </li>
                <li class="caption-overlay-item">
                    <strong>Views:</strong>
                     <span>${n}</span>
                </li>
                <li class="caption-overlay-item">
                    <strong>Comments:</strong>
                    <span>${l}</span>
                </li>
                <li class="caption-overlay-item">
                    <strong>Downloads:</strong>
                    <span>${c}</span>
                </li>
            </ul>
          </a>
        </li>
      `).join(""),new u(".gallery a",{captions:!0,captionsData:"alt",captionPosition:"bottom",captionDelay:250})}document.querySelector(".search-form").addEventListener("submit",async function(i){i.preventDefault();const r=document.querySelector(".search-input").value.trim(),s=document.querySelector(".loader");document.querySelector(".search-input").value="",console.log("Search submitted for:",r);try{if(r){const t=document.querySelector(".gallery");t.style.display="none",s.classList.add("active");const e=await p(r);if(e.total===0){a.error({title:"❌ Error",message:`Nothing found for "${r}"`,position:"topRight"}),t.innerHTML="";return}f(t,e),t.style.display="flex"}else a.error({title:"❌ Error",message:"Empty query",position:"topRight"})}catch(t){a.error({title:"❌ Error",message:`${(t==null?void 0:t.message)??"something went wrong"}`,position:"topRight"})}finally{s.classList.remove("active")}});
//# sourceMappingURL=index.js.map
