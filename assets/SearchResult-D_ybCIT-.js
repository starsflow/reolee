import{u as U,f as se,g as te,h as Y,i as ae,P as le,t as re,j as ue,k as F,l as b,m as ie,w as M,n as t,p as oe,R as $,q as ne,v as ce,x as ve,C as pe,y as he,z as de,A as ye,B as me,D as ge,E as w,F as Ee,G as Ae,H as ke,I as j,J as I,K as fe}from"./app-C2oSMp_3.js";const He=["/","/about/","/blog/","/book/","/paper/","/paper/vldb21-slimchain.html","/blog/minilsm-rust/","/blog/minilsm-rust/ch1.html","/blog/minilsm-rust/ch2.html","/book/emcpp/","/book/emcpp/ch1.html","/book/emcpp/ch2.html","/book/emcpp/ch3.html","/book/emcpp/ch4.html","/404.html","/category/","/category/%E8%AE%BA%E6%96%87%E7%AC%94%E8%AE%B0/","/category/%E6%97%A5%E5%B8%B8%E7%AC%94%E8%AE%B0/","/category/%E8%AF%BB%E4%B9%A6%E7%AC%94%E8%AE%B0/","/tag/","/tag/blockchain/","/tag/lsm/","/tag/kv%E5%AD%98%E5%82%A8/","/tag/%E6%BA%90%E7%A0%81%E9%98%85%E8%AF%BB/","/tag/cpp/","/tag/%E7%BC%96%E7%A8%8B%E8%AF%AD%E8%A8%80/","/article/","/star/","/timeline/"],Re="SEARCH_PRO_QUERY_HISTORY",g=U(Re,[]),be=()=>{const{queryHistoryCount:a}=w,l=a>0;return{enabled:l,queryHistory:g,addQueryHistory:r=>{l&&(g.value=Array.from(new Set([r,...g.value.slice(0,a-1)])))},removeQueryHistory:r=>{g.value=[...g.value.slice(0,r),...g.value.slice(r+1)]}}},L=a=>He[a.id]+("anchor"in a?`#${a.anchor}`:""),we="SEARCH_PRO_RESULT_HISTORY",{resultHistoryCount:_}=w,E=U(we,[]),Qe=()=>{const a=_>0;return{enabled:a,resultHistory:E,addResultHistory:l=>{if(a){const r={link:L(l),display:l.display};"header"in l&&(r.header=l.header),E.value=[r,...E.value.slice(0,_-1)]}},removeResultHistory:l=>{E.value=[...E.value.slice(0,l),...E.value.slice(l+1)]}}},Be=a=>{const l=pe(),r=Y(),Q=he(),i=F(0),f=b(()=>i.value>0),d=de([]);return ye(()=>{const{search:y,terminate:B}=me(),A=ge(c=>{const k=c.join(" "),{searchFilter:C=h=>h,splitWord:q,suggestionsFilter:P,...m}=l.value;k?(i.value+=1,y(c.join(" "),r.value,m).then(h=>C(h,k,r.value,Q.value)).then(h=>{i.value-=1,d.value=h}).catch(h=>{console.warn(h),i.value-=1,i.value||(d.value=[])})):d.value=[]},w.searchDelay-w.suggestDelay);M([a,r],([c])=>A(c),{immediate:!0}),Ee(()=>{B()})}),{isSearching:f,results:d}};var qe=se({name:"SearchResult",props:{queries:{type:Array,required:!0},isFocusing:Boolean},emits:["close","updateQuery"],setup(a,{emit:l}){const r=te(),Q=Y(),i=ae(le),{enabled:f,addQueryHistory:d,queryHistory:y,removeQueryHistory:B}=be(),{enabled:A,resultHistory:c,addResultHistory:k,removeResultHistory:C}=Qe(),q=f||A,P=re(a,"queries"),{results:m,isSearching:h}=Be(P),u=ue({isQuery:!0,index:0}),v=F(0),p=F(0),O=b(()=>q&&(y.value.length>0||c.value.length>0)),x=b(()=>m.value.length>0),S=b(()=>m.value[v.value]||null),z=()=>{const{isQuery:e,index:s}=u;s===0?(u.isQuery=!e,u.index=e?c.value.length-1:y.value.length-1):u.index=s-1},G=()=>{const{isQuery:e,index:s}=u;s===(e?y.value.length-1:c.value.length-1)?(u.isQuery=!e,u.index=0):u.index=s+1},J=()=>{v.value=v.value>0?v.value-1:m.value.length-1,p.value=S.value.contents.length-1},K=()=>{v.value=v.value<m.value.length-1?v.value+1:0,p.value=0},V=()=>{p.value<S.value.contents.length-1?p.value+=1:K()},N=()=>{p.value>0?p.value-=1:J()},D=e=>e.map(s=>fe(s)?s:t(s[0],s[1])),W=e=>{if(e.type==="customField"){const s=Ae[e.index]||"$content",[o,R=""]=ke(s)?s[Q.value].split("$content"):s.split("$content");return e.display.map(n=>t("div",D([o,...n,R])))}return e.display.map(s=>t("div",D(s)))},H=()=>{v.value=0,p.value=0,l("updateQuery",""),l("close")},X=()=>f?t("ul",{class:"search-pro-result-list"},t("li",{class:"search-pro-result-list-item"},[t("div",{class:"search-pro-result-title"},i.value.queryHistory),y.value.map((e,s)=>t("div",{class:["search-pro-result-item",{active:u.isQuery&&u.index===s}],onClick:()=>{l("updateQuery",e)}},[t(j,{class:"search-pro-result-type"}),t("div",{class:"search-pro-result-content"},e),t("button",{class:"search-pro-remove-icon",innerHTML:I,onClick:o=>{o.preventDefault(),o.stopPropagation(),B(s)}})]))])):null,Z=()=>A?t("ul",{class:"search-pro-result-list"},t("li",{class:"search-pro-result-list-item"},[t("div",{class:"search-pro-result-title"},i.value.resultHistory),c.value.map((e,s)=>t($,{to:e.link,class:["search-pro-result-item",{active:!u.isQuery&&u.index===s}],onClick:()=>{H()}},()=>[t(j,{class:"search-pro-result-type"}),t("div",{class:"search-pro-result-content"},[e.header?t("div",{class:"content-header"},e.header):null,t("div",e.display.map(o=>D(o)).flat())]),t("button",{class:"search-pro-remove-icon",innerHTML:I,onClick:o=>{o.preventDefault(),o.stopPropagation(),C(s)}})]))])):null;return ie("keydown",e=>{if(a.isFocusing){if(x.value){if(e.key==="ArrowUp")N();else if(e.key==="ArrowDown")V();else if(e.key==="Enter"){const s=S.value.contents[p.value];d(a.queries.join(" ")),k(s),r.push(L(s)),H()}}else if(A){if(e.key==="ArrowUp")z();else if(e.key==="ArrowDown")G();else if(e.key==="Enter"){const{index:s}=u;u.isQuery?(l("updateQuery",y.value[s]),e.preventDefault()):(r.push(c.value[s].link),H())}}}}),M([v,p],()=>{var e;(e=document.querySelector(".search-pro-result-list-item.active .search-pro-result-item.active"))==null||e.scrollIntoView(!1)},{flush:"post"}),()=>t("div",{class:["search-pro-result-wrapper",{empty:a.queries.length?!x.value:!O.value}],id:"search-pro-results"},a.queries.length?h.value?t(oe,{hint:i.value.searching}):x.value?t("ul",{class:"search-pro-result-list"},m.value.map(({title:e,contents:s},o)=>{const R=v.value===o;return t("li",{class:["search-pro-result-list-item",{active:R}]},[t("div",{class:"search-pro-result-title"},e||i.value.defaultTitle),s.map((n,ee)=>{const T=R&&p.value===ee;return t($,{to:L(n),class:["search-pro-result-item",{active:T,"aria-selected":T}],onClick:()=>{d(a.queries.join(" ")),k(n),H()}},()=>[n.type==="text"?null:t(n.type==="title"?ne:n.type==="heading"?ce:ve,{class:"search-pro-result-type"}),t("div",{class:"search-pro-result-content"},[n.type==="text"&&n.header?t("div",{class:"content-header"},n.header):null,t("div",W(n))])])})])})):i.value.emptyResult:q?O.value?[X(),Z()]:i.value.emptyHistory:i.value.emptyResult)}});export{qe as default};