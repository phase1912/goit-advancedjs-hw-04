import{a as p,S as y,i as l}from"./assets/vendor-DFCQGEf1.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const i of e.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function n(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function s(t){if(t.ep)return;t.ep=!0;const e=n(t);fetch(t.href,e)}})();const g="50612184-536cfb83b780c62ede1e3fae6",h="https://pixabay.com/api/";async function v(o,r=1){const n={key:g,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,page:r,per_page:15};try{return(await p.get(h,{params:n})).data}catch(s){throw console.error("Axios request failed:",s.message),s}}function L(o,r,n){n&&(o.innerHTML=""),o.innerHTML+=r.hits.map(({webformatURL:s,largeImageURL:t,tags:e,likes:i,views:a,comments:c,downloads:d})=>`
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
                    <span>${i}</span>
                </li>
                <li class="caption-overlay-item">
                    <strong>Views:</strong>
                     <span>${a}</span>
                </li>
                <li class="caption-overlay-item">
                    <strong>Comments:</strong>
                    <span>${c}</span>
                </li>
                <li class="caption-overlay-item">
                    <strong>Downloads:</strong>
                    <span>${d}</span>
                </li>
            </ul>
          </a>
        </li>
      `).join(""),new y(".gallery a",{captions:!0,captionsData:"alt",captionPosition:"bottom",captionDelay:250})}let m=1,u="";document.querySelector(".form").addEventListener("submit",async function(o){o.preventDefault(),m=1,await f()});document.querySelector(".load-more-btn").addEventListener("click",async function(o){o.preventDefault(),m++,await f(!0)});async function f(o=!1){const r=document.querySelector(".search-input").value.trim(),n=document.querySelector(".loader"),s=document.querySelector(".load-more-btn");document.querySelector(".search-input").value="",console.log("Search submitted for:",r);const t=o?u!=="":r!=="";try{if(t){const e=document.querySelector(".gallery");r&&(u=r),o||(e.style.display="none"),n.classList.add("active"),s.classList.remove("active");const i=await v(o?u:r,o?m:1);if(i.total===0){l.error({title:"❌ Error",message:`Nothing found for "${r}"`,position:"topRight"}),e.innerHTML="";return}if(i.hits.length===0){l.error({title:"❌ Error",message:"We're sorry, but you've reached the end of search results.",position:"topRight"});return}if(L(e,i,!o),e.style.display="flex",s.classList.add("active"),o&&i.hits.length>0){const a=e.querySelector(".gallery-item");if(a){const c=a.getBoundingClientRect().height;window.scrollBy({top:c*2,behavior:"smooth"})}}}else l.error({title:"❌ Error",message:"Empty query",position:"topRight"})}catch(e){l.error({title:"❌ Error",message:`${(e==null?void 0:e.message)??"something went wrong"}`,position:"topRight"})}finally{n.classList.remove("active")}}
//# sourceMappingURL=index.js.map
