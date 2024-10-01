import{i as y,a as L,S as p}from"./assets/vendor-u8rapaCG.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const d of r.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const w="46199083-7338ca219a80d00a6fa651740",v="https://pixabay.com/api/",S=document.querySelector("#search-form"),f=document.querySelector(".search-input"),m=document.querySelector("#gallery"),c=document.querySelector("#load-more"),u=document.querySelector("#loading-message");let l="",n=1,g=0,i=!1;async function h(a,t=1){if(!i){i=!0,u.style.display="block";try{const o=await L.get(`${v}`,{params:{key:w,q:a,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:40,page:t}});return g=o.data.totalHits,u.style.display="none",i=!1,o.data}catch(o){u.style.display="none",i=!1,console.error("Hata oluştu:",o)}}}function b(a){const t=a.map(s=>`
        <li class="gallery-item">
          <a href="${s.largeImageURL}">
            <img src="${s.webformatURL}" alt="${s.tags}" loading="lazy" />
          </a>
          <div class="info">
            <p><b>Likes:</b> ${s.likes}</p>
            <p><b>Views:</b> ${s.views}</p>
            <p><b>Comments:</b> ${s.comments}</p>
            <p><b>Downloads:</b> ${s.downloads}</p>
          </div>
        </li>
      `).join("");m.insertAdjacentHTML("beforeend",t);const o=new p(".gallery a",{captionsData:"alt",captionDelay:250});o?o.refresh():o=new p(".gallery a")}S.addEventListener("submit",async a=>{if(a.preventDefault(),m.innerHTML="",l=f.value.trim(),!l)return;n=1;const t=await h(l,n);if(t.hits.length===0){c.style.display="none",y.error({title:"No Results",message:"No images found. Please try a different query.",position:"topRight"});return}b(t.hits),c.style.display="block",f.value=""});c.addEventListener("click",async()=>{n+=1;const a=await h(l,n);b(a.hits),n*40>=g&&(c.style.display="none",y.error({title:"Sorry",message:"We're sorry, but you've reached the end of search results.",position:"topRight"}));const{height:t}=document.querySelector(".gallery").firstElementChild.getBoundingClientRect();window.scrollBy({top:t*2,behavior:"smooth"})});
//# sourceMappingURL=index.js.map
