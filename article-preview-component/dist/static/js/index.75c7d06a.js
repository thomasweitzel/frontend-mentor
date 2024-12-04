(()=>{"use strict";var e={988:function(e,i,t){var M=t("893"),a=t("294"),r=t("745");let l=()=>(0,M.jsx)("div",{className:"flex-auto p-3 cursor-pointer",children:(0,M.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"15",height:"13",children:(0,M.jsx)("path",{fill:"currentColor",d:"M15 6.495L8.766.014V3.88H7.441C3.33 3.88 0 7.039 0 10.936v2.049l.589-.612C2.59 10.294 5.422 9.11 8.39 9.11h.375v3.867L15 6.495z"})})}),s=e=>{let{onClick:i,product:t,clazz:a}=e,{author:r}=t,{image:s,name:u,date:n}=r;return(0,M.jsxs)("div",{className:"group flex h-[8em] items-center space-x-4 bg-white px-10",children:[(0,M.jsx)("img",{src:s,alt:`Profile picture of ${u}`,className:"h-10 w-10 flex-none rounded-full"}),(0,M.jsxs)("div",{className:"flex-auto",children:[(0,M.jsx)("p",{children:u}),(0,M.jsx)("p",{className:"text-[11px] opacity-50",children:n})]}),(0,M.jsx)("div",{className:`rounded-full ${a}`,onClick:i,children:(0,M.jsx)(l,{})})]})},u=e=>{let{onClick:i,product:t}=e,{socialIcons:r}=t,[u,n]=(0,a.useState)(window.matchMedia("(min-width: 800px)").matches);return((0,a.useEffect)(()=>{let e=window.matchMedia("(min-width: 800px)"),i=e=>{n(e.matches)};return e.addEventListener("change",i),()=>{e.removeEventListener("change",i)}},[]),u)?(0,M.jsxs)(a.Fragment,{children:[(0,M.jsx)("div",{className:"share relative text-white",children:(0,M.jsxs)("div",{className:"absolute right-[3em] top-[-2em] flex flex-row items-center rounded-lg bg-very-dark-grayish-blue px-8 py-4 shadow-extra-large",children:[(0,M.jsx)("span",{className:"mr-4 flex-none align-middle tracking-[0.4em] text-grayish-blue",children:"SHARE"}),r.map((e,i)=>(0,M.jsx)("div",{className:"ml-4 flex-none",children:(0,M.jsx)("img",{src:e.icon,alt:`Icon for ${e.name}`})},i))]})}),(0,M.jsx)(s,{onClick:i,product:t,clazz:"bg-desaturated-dark-blue text-white"})]}):(0,M.jsxs)("div",{className:"group flex h-[8em] items-center bg-very-dark-grayish-blue px-10 text-white",children:[(0,M.jsx)("span",{className:"flex-none align-middle tracking-[0.4em] text-grayish-blue",children:"SHARE"}),r.map((e,i)=>(0,M.jsx)("div",{className:"ml-4 flex-none",children:(0,M.jsx)("img",{src:e.icon,alt:`Icon for ${e.name}`})},i)),(0,M.jsx)("div",{className:"ml-auto flex-none rounded-full bg-desaturated-dark-blue text-white",onClick:i,children:(0,M.jsx)(l,{})})]})},n=e=>{let{product:i}=e,[t,r]=(0,a.useState)(!0),{productImage:l,title:n,text:c}=i;return(0,M.jsx)("div",{className:"flex min-h-screen min-w-full flex-col items-center justify-center",children:(0,M.jsx)("article",{className:"w-mobile overflow-hidden rounded-lg shadow-extra-large md:w-desktop","aria-labelledby":"title",children:(0,M.jsxs)("div",{className:"grid grid-cols-1 gap-0 md:grid-cols-[40%_auto]",children:[(0,M.jsx)("img",{className:"m-0 h-[200px] w-full object-cover object-left p-0 md:h-full",src:l,alt:n}),(0,M.jsxs)("div",{children:[(0,M.jsxs)("section",{className:"space-y-5 bg-white px-10 pb-6 pt-10","aria-describedby":"product-info",children:[(0,M.jsx)("h1",{className:"text-[16px] font-bold md:text-[22px]",id:"title",children:n}),(0,M.jsx)("h2",{className:"text-[14px] opacity-50",id:"product-info",children:c})]}),(0,M.jsx)("section",{"aria-live":"polite",children:t?(0,M.jsx)(s,{onClick:()=>r(!1),product:i,clazz:"bg-light-grayish-blue text-desaturated-dark-blue"}):(0,M.jsx)(u,{onClick:()=>r(!0),product:i})})]})]})})})},c=t.p+"static/image/avatar-michelle.0a9d3a7d.jpg",g=t.p+"static/image/drawers.57b96840.jpg",j={socialIcons:[{icon:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+PHBhdGggZmlsbD0iI0ZGRiIgZD0iTTE4Ljg5NiAwSDEuMTA0Qy40OTQgMCAwIC40OTQgMCAxLjEwNHYxNy43OTNDMCAxOS41MDYuNDk0IDIwIDEuMTA0IDIwaDkuNTh2LTcuNzQ1SDguMDc2VjkuMjM3aDIuNjA2VjcuMDFjMC0yLjU4MyAxLjU3OC0zLjk5IDMuODgzLTMuOTkgMS4xMDQgMCAyLjA1Mi4wODIgMi4zMjkuMTE5djIuN2gtMS41OThjLTEuMjU0IDAtMS40OTYuNTk3LTEuNDk2IDEuNDd2MS45MjhoMi45ODlsLS4zOSAzLjAxOGgtMi42VjIwaDUuMDk4Yy42MDggMCAxLjEwMi0uNDk0IDEuMTAyLTEuMTA0VjEuMTA0QzIwIC40OTQgMTkuNTA2IDAgMTguODk2IDB6Ii8+PC9zdmc+",name:"Facebook"},{icon:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIxNyI+PHBhdGggZmlsbD0iI0ZGRiIgZD0iTTIwIDIuMTcyYTguMTkyIDguMTkyIDAgMDEtMi4zNTcuNjQ2IDQuMTEgNC4xMSAwIDAwMS44MDQtMi4yNyA4LjIyIDguMjIgMCAwMS0yLjYwNS45OTZBNC4wOTYgNC4wOTYgMCAwMDEzLjg0Ny4yNDhjLTIuNjUgMC00LjU5NiAyLjQ3Mi0zLjk5OCA1LjAzN0ExMS42NDggMTEuNjQ4IDAgMDExLjM5MiAxYTQuMTA5IDQuMTA5IDAgMDAxLjI3IDUuNDc4IDQuMDg2IDQuMDg2IDAgMDEtMS44NTgtLjUxM2MtLjA0NSAxLjkgMS4zMTggMy42NzkgMy4yOTEgNC4wNzVhNC4xMTMgNC4xMTMgMCAwMS0xLjg1My4wNyA0LjEwNiA0LjEwNiAwIDAwMy44MzMgMi44NDlBOC4yNSA4LjI1IDAgMDEwIDE0LjY1OGExMS42MTYgMTEuNjE2IDAgMDA2LjI5IDEuODQzYzcuNjE4IDAgMTEuOTIyLTYuNDM0IDExLjY2My0xMi4yMDVBOC4zNTQgOC4zNTQgMCAwMDIwIDIuMTcyeiIvPjwvc3ZnPg==",name:"Twitter"},{icon:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+PHBhdGggZmlsbD0iI0ZGRiIgZD0iTTEwIDBDNC40NzggMCAwIDQuNDc3IDAgMTBjMCA0LjIzNyAyLjYzNiA3Ljg1NSA2LjM1NiA5LjMxMi0uMDg4LS43OTEtLjE2Ny0yLjAwNS4wMzUtMi44NjguMTgyLS43OCAxLjE3Mi00Ljk3IDEuMTcyLTQuOTdzLS4yOTktLjYtLjI5OS0xLjQ4NmMwLTEuMzkuODA2LTIuNDI4IDEuODEtMi40MjguODUyIDAgMS4yNjQuNjQgMS4yNjQgMS40MDggMCAuODU4LS41NDUgMi4xNC0uODI4IDMuMzMtLjIzNi45OTUuNSAxLjgwNyAxLjQ4IDEuODA3IDEuNzc4IDAgMy4xNDQtMS44NzQgMy4xNDQtNC41OCAwLTIuMzkzLTEuNzItNC4wNjgtNC4xNzctNC4wNjgtMi44NDUgMC00LjUxNSAyLjEzNS00LjUxNSA0LjM0IDAgLjg1OS4zMzEgMS43ODEuNzQ1IDIuMjgxYS4zLjMgMCAwMS4wNjkuMjg4bC0uMjc4IDEuMTMzYy0uMDQ0LjE4My0uMTQ1LjIyMy0uMzM1LjEzNC0xLjI0OS0uNTgxLTIuMDMtMi40MDctMi4wMy0zLjg3NCAwLTMuMTU0IDIuMjkyLTYuMDUyIDYuNjA4LTYuMDUyIDMuNDY5IDAgNi4xNjUgMi40NzMgNi4xNjUgNS43NzYgMCAzLjQ0Ny0yLjE3MyA2LjIyLTUuMTkgNi4yMi0xLjAxMyAwLTEuOTY1LS41MjUtMi4yOTEtMS4xNDhsLS42MjMgMi4zNzhjLS4yMjYuODY5LS44MzUgMS45NTgtMS4yNDQgMi42MjEuOTM3LjI5IDEuOTMxLjQ0NiAyLjk2Mi40NDYgNS41MjIgMCAxMC00LjQ3NyAxMC0xMFMxNS41MjIgMCAxMCAweiIvPjwvc3ZnPg==",name:"Pintrest"}],author:{image:c,name:"Michelle Appleton",date:"28 Jun 2020"},productImage:g,title:"Shift the overall look and feel by adding these wonderful touches to furniture in your home",text:"Ever been in a room and felt like something was missing? Perhaps it felt slightly bare and uninviting. I’ve got some simple tips to help you make any room feel complete."};r.createRoot(document.getElementById("main")).render((0,M.jsx)(a.StrictMode,{children:(0,M.jsx)(()=>(0,M.jsx)(n,{product:j}),{})}))}},i={};function t(M){var a=i[M];if(void 0!==a)return a.exports;var r=i[M]={exports:{}};return e[M](r,r.exports,t),r.exports}t.m=e,t.o=function(e,i){return Object.prototype.hasOwnProperty.call(e,i)},(()=>{var e=[];t.O=function(i,M,a,r){if(M){r=r||0;for(var l=e.length;l>0&&e[l-1][2]>r;l--)e[l]=e[l-1];e[l]=[M,a,r];return}for(var s=1/0,l=0;l<e.length;l++){for(var M=e[l][0],a=e[l][1],r=e[l][2],u=!0,n=0;n<M.length;n++)(!1&r||s>=r)&&Object.keys(t.O).every(function(e){return t.O[e](M[n])})?M.splice(n--,1):(u=!1,r<s&&(s=r));if(u){e.splice(l--,1);var c=a();void 0!==c&&(i=c)}}return i}})(),t.p="./",t.rv=function(){return"1.1.5"},(()=>{var e={980:0};t.O.j=function(i){return 0===e[i]};var i=function(i,M){var a=M[0],r=M[1],l=M[2],s,u,n=0;if(a.some(function(i){return 0!==e[i]})){for(s in r)t.o(r,s)&&(t.m[s]=r[s]);if(l)var c=l(t)}for(i&&i(M);n<a.length;n++)u=a[n],t.o(e,u)&&e[u]&&e[u][0](),e[u]=0;return t.O(c)},M=self.webpackChunkrsbuild_template=self.webpackChunkrsbuild_template||[];M.forEach(i.bind(null,0)),M.push=i.bind(null,M.push.bind(M))})(),t.ruid="bundler=rspack@1.1.5";var M=t.O(void 0,["361"],function(){return t("988")});M=t.O(M)})();