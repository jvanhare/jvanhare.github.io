(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[548],{7589:function(e,s,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/publications",function(){return n(2225)}])},2225:function(e,s,n){"use strict";n.r(s),n.d(s,{__N_SSG:function(){return u},default:function(){return x}});var t=n(5893),a=n(1664),r=n.n(a),i=n(6215);function l(e,s){return s.issued["date-parts"][0][0]>e.issued["date-parts"][0][0]||s.issued["date-parts"][0][1]>e.issued["date-parts"][0][1]?1:-1}function c(e){return(0,t.jsx)("span",{className:"whitespace-normal",children:e.map(e=>e.given+" "+e.family).join(", ").replace(/, ([^,]*)$/,", and $1")+". "})}function d(e){return(0,t.jsxs)("span",{children:[(0,t.jsx)("span",{className:"font-bold whitespace-normal",dangerouslySetInnerHTML:{__html:e}}),". "]})}function h(e,s,n){return void 0!=n?(0,t.jsxs)("span",{className:"whitespace-normal",children:[(0,t.jsx)("span",{className:"italic",dangerouslySetInnerHTML:{__html:n}}),(0,t.jsxs)("span",{children:[". ",s,", ",e,"."," "]})]}):null}function o(e){return void 0!=e?(0,t.jsxs)(r(),{target:"_blank",href:"https://doi.org/".concat(e),className:"no-underline hover:underline text-sky-500 hover:text-sky-500 visited:text-sky-500",children:["[",e,"]"]}):null}function m(e){return void 0!=e?e.endsWith(".pdf")?(0,t.jsx)(r(),{target:"_blank",href:e,className:"no-underline hover:underline text-sky-500 hover:text-sky-500 visited:text-sky-500",children:" [PDF]"}):(0,t.jsx)(r(),{target:"_blank",href:e,className:"no-underline hover:underline text-sky-500 hover:text-sky-500 visited:text-sky-500",children:" [Slides]"}):null}var u=!0;function x(e){let{biblio:s}=e,n=s.filter(e=>"article-journal"===e.type).sort(l),a=s.filter(e=>"paper-conference"===e.type).sort(l),r=s.filter(e=>"document"===e.type).sort(l),u=s.filter(e=>"thesis"===e.type).sort(l);return(0,t.jsxs)(i.Z,{children:[(0,t.jsx)("h1",{children:"Publications"}),(0,t.jsx)("h2",{children:"Peer-reviewed journal articles"}),(0,t.jsx)("ol",{className:"list-decimal list-inside",children:n.map(e=>{var s,n,a;return(0,t.jsxs)("li",{className:"my-4",children:[c(e.author),d(e.title),(s=e.issued["date-parts"][0][0],n=e.volume,void 0!=(a=e["container-title"])?(0,t.jsxs)("span",{children:[(0,t.jsxs)("span",{className:"italic whitespace-normal",children:[a," ",n," "]}),(0,t.jsxs)("span",{children:["(",s,"). "]})]}):null),o(e.DOI),m(e.URL)]},e.id)})}),(0,t.jsx)("h2",{children:"Peer-reviewed conference papers"}),(0,t.jsx)("ol",{className:"list-decimal list-inside",children:a.map(e=>(0,t.jsxs)("li",{className:"my-4",children:[c(e.author),d(e.title),h(e.issued["date-parts"][0][0],e["publisher-place"],e["container-title"]),o(e.DOI),m(e.URL)]},e.id))}),(0,t.jsx)("h2",{children:"Conferences and seminars"}),(0,t.jsx)("ol",{className:"list-decimal list-inside",children:r.map(e=>(0,t.jsxs)("li",{className:"my-4",children:[c(e.author),d(e.title),h(e.issued["date-parts"][0][0],e["publisher-place"],e.publisher),o(e.DOI),m(e.URL)]},e.id))}),(0,t.jsx)("h2",{children:"Thesis"}),(0,t.jsx)("ol",{className:"list-decimal list-inside",children:u.map(e=>{var s,n;return(0,t.jsxs)("li",{children:[c(e.author),d(e.title),(s=e.issued["date-parts"][0][0],void 0!=(n=e.publisher)?(0,t.jsxs)("span",{className:"whitespace-normal",children:[(0,t.jsx)("span",{className:"italic",children:n}),", ",s,"."," "]}):null),o(e.DOI),m(e.URL)]},e.id)})})]})}},6215:function(e,s,n){"use strict";n.d(s,{Z:function(){return w}});var t=n(5893),a=n(9008),r=n.n(a),i=n(2010),l=n(1664),c=n.n(l),d=n(3186),h=n(2941),o=n(6702),m=n(2774),u=n(408),x=n(8268),j=n(7294),p=n(8231),f=n(2549);let v=()=>{let[e,s]=(0,j.useState)(!1),{theme:n,setTheme:a}=(0,i.F)();return((0,j.useEffect)(()=>{s(!0)},[]),e)?(0,t.jsx)("div",{className:"hover:text-sky-500",children:"dark"===n?(0,t.jsx)(p.Z,{onClick:()=>a("dark"===n?"light":"dark")}):(0,t.jsx)(f.Z,{onClick:()=>a("dark"===n?"light":"dark")})}):null},N=[{name:"About",href:"/",current:!0},{name:"CV",href:"/cv",current:!1},{name:"Publications",href:"/publications",current:!1},{name:"Teaching",href:"/teaching",current:!1}],b=()=>(0,t.jsx)(d.p,{as:"nav",children:e=>{let{open:s}=e;return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("div",{className:"relative flex items-center justify-between h-16",children:[(0,t.jsx)("div",{className:"absolute items-center sm:hidden",children:(0,t.jsxs)(d.p.Button,{className:"inline-flex items-center justify-center rounded-md",children:[(0,t.jsx)("span",{className:"sr-only",children:"Open main menu"}),s?(0,t.jsx)(x.Z,{className:"block hover:text-sky-500","aria-hidden":"true"}):(0,t.jsx)(u.Z,{className:"block hover:text-sky-500","aria-hidden":"true"})]})}),(0,t.jsx)("div",{className:"hidden sm:block align-middle",children:(0,t.jsx)("div",{className:"flex space-x-4 text-2xl font-serif",children:N.map(e=>(0,t.jsx)("h2",{children:(0,t.jsx)(c(),{href:e.href,className:"hover:underline hover:text-sky-500",children:e.name})},e.name))})}),(0,t.jsxs)("div",{className:"absolute inset-y-0 right-0 flex items-center sm:static sm:inset-auto sm:ml-0 sm:pr-0",children:[(0,t.jsx)("a",{"aria-label":"mailto",target:"_blank",href:"mailto:julien.vanharen@inria.fr",className:"hover:underline hover:text-sky-500 px-2",children:(0,t.jsx)(m.Z,{})}),(0,t.jsx)("a",{"aria-label":"scholar",target:"_blank",href:"https://scholar.google.com/citations?hl=enanduser=R6OO3noAAAAJ",className:"hover:underline hover:text-sky-500 px-2",children:(0,t.jsx)(h.Z,{})}),(0,t.jsx)("a",{"aria-label":"github",target:"_blank",href:"https://github.com/jvanhare",className:"hover:underline hover:text-sky-500 px-2",children:(0,t.jsx)(o.Z,{})}),(0,t.jsx)(v,{})]})]}),(0,t.jsx)(d.p.Panel,{className:"sm:hidden",children:(0,t.jsx)("div",{className:" ",children:N.map(e=>(0,t.jsx)(d.p.Button,{"aria-label":e.name,as:"a",href:e.href,className:"block rounded-md text-base font-medium hover:text-sky-500 hover:underline","aria-current":e.current?"page":void 0,children:e.name},e.name))})})]})}});var k=n(1752),y=n.n(k);function g(){let e=new Date,s=e.getFullYear(),n=e.toLocaleString("en-us",{month:"short"}),{publicRuntimeConfig:a}=y()();return(0,t.jsx)("footer",{children:(0,t.jsxs)("div",{className:"clearfix ",children:[(0,t.jsxs)("div",{className:"text-xs md:text-sm float-left mb-2 mt-4",children:["\xa9 ",n," ",s," by Julien Vanharen."]}),(0,t.jsxs)("div",{className:"text-xs md:text-sm float-right mb-2 mt-4",children:["Last updated in ",a.buildMonth," ",a.buildYear,"."]})]})})}let _=e=>{let{children:s}=e;return(0,t.jsxs)("div",{children:[(0,t.jsxs)(r(),{children:[(0,t.jsx)("title",{children:"Julien Vanharen"},"gen-title"),(0,t.jsx)("meta",{name:"description",content:"Julien Vanharen's website"},"gen-desc"),(0,t.jsx)("meta",{name:"google-site-verification",content:"4_-iwXy7om5Xryr9DhjyOV20kyLapnbl8QP164lW68Y"}),(0,t.jsx)("meta",{name:"theme-color",content:"#f1f5f9",media:"(prefers-color-scheme: light)"}),(0,t.jsx)("meta",{name:"theme-color",content:"#1e293b",media:"(prefers-color-scheme: dark)"})]}),(0,t.jsx)(i.f,{attribute:"class",children:(0,t.jsxs)("div",{className:"container mx-auto max-w-3xl px-4 text-lg",children:[(0,t.jsx)(b,{}),(0,t.jsx)("main",{children:(0,t.jsx)("div",{className:" py-4",children:s})}),(0,t.jsx)(g,{})]})})]})};var w=_}},function(e){e.O(0,[937,774,888,179],function(){return e(e.s=7589)}),_N_E=e.O()}]);