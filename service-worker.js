if(!self.define){let e,s={};const i=(i,r)=>(i=new URL(i+".js",r).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(r,d)=>{const a=e||("document"in self?document.currentScript.src:"")||location.href;if(s[a])return;let c={};const l=e=>i(e,a),n={module:{uri:a},exports:c,require:l};s[a]=Promise.all(r.map((e=>n[e]||l(e)))).then((e=>(d(...e),c)))}}define(["./workbox-afb8f5db"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"2023/07/01/hello-world/index.html",revision:"4e6d94395774ec5cb6e827d372a7a6c7"},{url:"404.html",revision:"524fa6f70c200ac415d98e8a0bf37023"},{url:"about/bangumi/index.html",revision:"35821bcfbc4af3d4dc94ffd1db23cdd0"},{url:"about/index.html",revision:"c07a8a7ab91c410d431e42b425450c60"},{url:"archives/2023/07/index.html",revision:"5fd8fd07561349365135dcd45d7f0573"},{url:"archives/2023/index.html",revision:"ff323d3b7924a89d93d22b268f5988ef"},{url:"archives/index.html",revision:"3fb561d637f9aa4c805b787aec11af84"},{url:"categories/debug/index.html",revision:"eb6fa33b5271f2bc8c1c201ada5c9648"},{url:"categories/index.html",revision:"2073fd473abbd69ed9569e89653ecc0a"},{url:"css/first.css",revision:"42b3a0e105ecc057057022080606222d"},{url:"css/Readme.html",revision:"c1421c18e077ab9a9582161d9197e693"},{url:"css/style.css",revision:"be3dcd20834a8a2f098ce472e609600a"},{url:"friends/index.html",revision:"16b22e1905388c511524e4c20d39e0ad"},{url:"index.html",revision:"e5bf7cb684ad64c429fbd52a91add463"},{url:"js/app.js",revision:"73640783a3499d94a20ec862aa6b77d3"},{url:"js/plugins/aplayer.js",revision:"dbe5eea968969672c52022ed895192a0"},{url:"js/plugins/parallax.js",revision:"8bf0ab10d50243ae87016af576642cdc"},{url:"js/plugins/rightMenus.js",revision:"88486ad37fb5c915bfb2264f6d973b7f"},{url:"js/plugins/tags/contributors.js",revision:"b70d3ea24c88f38b8390ce067f9bed08"},{url:"js/plugins/tags/friends.js",revision:"8f3b5da4522006725aa8476bbbd63784"},{url:"js/plugins/tags/sites.js",revision:"502da5f5613472f2f873c104f9d2db75"},{url:"js/search/algolia.js",revision:"cdfcea63869fe52c59b0456e0f1ec520"},{url:"js/search/hexo.js",revision:"cd9dceb05414dd24af5caecea45eb5ea"},{url:"js/search/meilisearch.js",revision:"742aba7d66d0e925f9b020629d70b16b"},{url:"tags/debug/index.html",revision:"75570bd0f1da1f596f3869ac112b5f16"},{url:"tags/index.html",revision:"f7a2c4c97f5c149f6a01df91fcd14f45"}],{})}));
//# sourceMappingURL=service-worker.js.map
