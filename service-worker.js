if(!self.define){let e,i={};const a=(a,d)=>(a=new URL(a+".js",d).href,i[a]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=i,document.head.appendChild(e)}else e=a,importScripts(a),i()})).then((()=>{let e=i[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(d,r)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(i[c])return;let s={};const l=e=>a(e,c),n={module:{uri:c},exports:s,require:l};i[c]=Promise.all(d.map((e=>n[e]||l(e)))).then((e=>(r(...e),s)))}}define(["./workbox-afb8f5db"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"2013/12/24/categories/index.html",revision:"e13f7b013f576b9a8d0cf71f709da275"},{url:"2013/12/24/elements/index.html",revision:"1b5026de549fb11a1ed1d614aa6122ea"},{url:"2013/12/24/excerpts/index.html",revision:"7dc3447066c0708b3fd06bf8ae92a24c"},{url:"2013/12/24/gallery-post/index.html",revision:"80170a72c39c56e0d6c3deb5037ecf12"},{url:"2013/12/24/link-post-without-title/index.html",revision:"be10a86258faa89894d52fd7c0653266"},{url:"2013/12/24/link-post/index.html",revision:"a05b5caab58a4276f98ab3e50e961015"},{url:"2013/12/24/long-title/index.html",revision:"aad4b16b1dbb0f058d3773460c057c8f"},{url:"2013/12/24/tag-plugins/index.html",revision:"4d9bbc1c768a87a9eba5b9ba718a6b53"},{url:"2013/12/24/tags/index.html",revision:"739e1c000c9ce90f35088a2400851900"},{url:"2013/12/24/videos/index.html",revision:"ebac10c5282afb7e1d72cbcc2ec7c9bb"},{url:"2013/12/24/中文測試/index.html",revision:"81fae107bda8da602b7361fd192472e8"},{url:"2013/12/24/日本語テスト/index.html",revision:"71260f3bdf10cf758bb080f35c2842ea"},{url:"2013/12/25/no-title/index.html",revision:"9efebe78c9a99e5b89fe8d5b4856e4be"},{url:"2013/12/26/images/index.html",revision:"c3a15ac32c5715dfcc4c756c6b4cc717"},{url:"2018/07/24/markdown/index.html",revision:"6862241bf1327f685708638a706a3219"},{url:"2019/07/25/code-highlight/index.html",revision:"922d39f4bfa55789baf3396ccbcd267b"},{url:"2023/07/18/hello-world/index.html",revision:"e4e18622ee071b1856a4de986c40043b"},{url:"404.html",revision:"07b2c9ca9f22043bc3b91f5cc1012b45"},{url:"about/bangumi/index.html",revision:"13f930d7ef3097bd05045f10fd1115d5"},{url:"archives/2013/12/index.html",revision:"ccc966932cdd39bc1465ef9a8dcc2d97"},{url:"archives/2013/12/page/2/index.html",revision:"59b1995b1aee12920275ccd4adadf948"},{url:"archives/2013/index.html",revision:"3277ed4bea5b1a49b91d3e8b5a02ab32"},{url:"archives/2013/page/2/index.html",revision:"a078c14ab5a11d73fff0a936c8d00e41"},{url:"archives/2018/07/index.html",revision:"190837fed0f1cb4615f99362fb5d72c3"},{url:"archives/2018/index.html",revision:"771ac0f1da02b234cb922cbef4523dd8"},{url:"archives/2019/07/index.html",revision:"1649633b01aa9131000ddb26807bfe78"},{url:"archives/2019/index.html",revision:"f19dc5001ee6b1435fb7c9ccead52eae"},{url:"archives/2023/07/index.html",revision:"8c8e1898ea778c9d82e59fdae33f2f07"},{url:"archives/2023/index.html",revision:"d7bead9f25e4e91091a9377acc475199"},{url:"archives/index.html",revision:"f0131a8faec57b19a160a39ac91ce1fb"},{url:"archives/page/2/index.html",revision:"ec0bfe9787728492a8320e0428a368d3"},{url:"categories/Foo/Bar/Baz/index.html",revision:"fb6d2f255ffe5594ca1dc9677b87243a"},{url:"categories/Foo/Bar/index.html",revision:"514623a32121e05a8143c8c9d68df22d"},{url:"categories/Foo/index.html",revision:"ec3c02d1a1ee5135356daeae67df84e1"},{url:"categories/index.html",revision:"ee761e8eb3d371fede75745f3dab45af"},{url:"css/first.css",revision:"42b3a0e105ecc057057022080606222d"},{url:"css/Readme.html",revision:"c1421c18e077ab9a9582161d9197e693"},{url:"css/style.css",revision:"be3dcd20834a8a2f098ce472e609600a"},{url:"friends/index.html",revision:"7362f9761e892c54b381c5240288c95d"},{url:"index.html",revision:"f212e03da7334a9a1838e15f1c88d3c5"},{url:"js/app.js",revision:"73640783a3499d94a20ec862aa6b77d3"},{url:"js/plugins/aplayer.js",revision:"dbe5eea968969672c52022ed895192a0"},{url:"js/plugins/parallax.js",revision:"8bf0ab10d50243ae87016af576642cdc"},{url:"js/plugins/rightMenus.js",revision:"88486ad37fb5c915bfb2264f6d973b7f"},{url:"js/plugins/tags/contributors.js",revision:"b70d3ea24c88f38b8390ce067f9bed08"},{url:"js/plugins/tags/friends.js",revision:"8f3b5da4522006725aa8476bbbd63784"},{url:"js/plugins/tags/sites.js",revision:"502da5f5613472f2f873c104f9d2db75"},{url:"js/search/algolia.js",revision:"cdfcea63869fe52c59b0456e0f1ec520"},{url:"js/search/hexo.js",revision:"cd9dceb05414dd24af5caecea45eb5ea"},{url:"js/search/meilisearch.js",revision:"742aba7d66d0e925f9b020629d70b16b"},{url:"page/2/index.html",revision:"7baa2bcf5ad126fdb241af2832c7c00a"},{url:"tags/Bar/index.html",revision:"c78fef47a6c2902820d6ffe07e1b7dac"},{url:"tags/Baz/index.html",revision:"59001b024c2a37d3b6cf07eb3904a4bb"},{url:"tags/Foo/index.html",revision:"086a17d1d33c1150d469a41c1205d516"},{url:"tags/index.html",revision:"95302f4d680dfed3b9bb4a774209e2d4"}],{})}));
//# sourceMappingURL=service-worker.js.map
