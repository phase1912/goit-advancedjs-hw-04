import{a as d,S as y,i as c}from"./assets/vendor-DFCQGEf1.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}})();const g="50612184-536cfb83b780c62ede1e3fae6",h="https://pixabay.com/api/";async function v(t,a=1){const s={key:g,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,page:a,per_page:15};try{return(await d.get(h,{params:s})).data}catch(i){throw console.error("Axios request failed:",i.message),i}}function L(t,a,s){s&&(t.innerHTML=""),t.innerHTML+=a.hits.map(({webformatURL:i,largeImageURL:e,tags:o,likes:r,views:n,comments:l,downloads:u})=>`
        <li class="gallery-item">
          <a class="gallery-link" href="${e}">
            <img
              class="gallery-image"
              src="${i}"
              alt="${o.length>0?o.split(",").slice(0,3).join(", "):"no name"}"
            />

             <ul class="caption-overlay">
                <li class="caption-overlay-item">
                    <strong>Likes:</strong>
                    <span>${r}</span>
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
                    <span>${u}</span>
                </li>
            </ul>
          </a>
        </li>
      `).join(""),new y(".gallery a",{captions:!0,captionsData:"alt",captionPosition:"bottom",captionDelay:250})}let m=1,f="";const b=15;document.querySelector(".form").addEventListener("submit",async function(t){t.preventDefault(),m=1,await p()});document.querySelector(".load-more-btn").addEventListener("click",async function(t){t.preventDefault(),m++,await p(!0)});async function p(t=!1){const a=document.querySelector(".search-input"),s=document.querySelector(".search-input").value.trim(),i=document.querySelector(".loader"),e=document.querySelector(".load-more-btn");console.log("Search submitted for:",s);const o=t?f!=="":s!=="";try{if(o){const r=document.querySelector(".gallery");s&&(f=s),t||(r.style.display="none"),i.classList.add("active"),e.classList.remove("active");const n=await v(t?f:s,t?m:1);if(n.total===0){c.error({title:"❌ Error",message:`Nothing found for "${s}"`,position:"topRight"}),r.innerHTML="";return}if(n.hits.length===0){c.error({title:"❌ Error",message:"We're sorry, but you've reached the end of search results.",position:"topRight"});return}if(L(r,n,!t),r.style.display="flex",t||(a.value=""),n.totalHits>b&&e.classList.add("active"),t&&n.hits.length>0){const l=r.querySelector(".gallery-item");if(l){const u=l.getBoundingClientRect().height;window.scrollBy({top:u*2,behavior:"smooth"})}}}else c.error({title:"❌ Error",message:"Empty query",position:"topRight"})}catch(r){c.error({title:"❌ Error",message:`${(r==null?void 0:r.message)??"something went wrong"}`,position:"topRight"})}finally{i.classList.remove("active")}}
//# sourceMappingURL=index.js.map
