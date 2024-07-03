import{s as j,c as D,n as K}from"../chunks/scheduler.BZkzKDai.js";import{S as M,i as q,s as $,k as z,l as F,d as f,f as w,m as P,g as _,n as T,o as U,p as A,q as N,r as V,e as g,c as y,u as C,a as v,v as p,w as S,t as B,b as G,h as x,H as J,x as O}from"../chunks/index.D1msgTfD.js";import{C as Q,e as b}from"../chunks/ContentMain.DLYwkzqj.js";import{p as R}from"../chunks/stores.uvrknwSP.js";import{u as W}from"../chunks/keyboard-navigation.BXrW9Svp.js";function L(h,a,s){const o=h.slice();return o[4]=a[s].year,o[5]=a[s].items,o}function E(h,a,s){const o=h.slice();return o[8]=a[s],o}function H(h){let a,s,o=h[8]+"";return{c(){a=g("li"),s=new J(!1),this.h()},l(r){a=y(r,"LI",{class:!0});var d=v(a);s=O(d,!1),d.forEach(f),this.h()},h(){s.a=null,p(a,"class","text-md text-gray-50")},m(r,d){_(r,a,d),s.m(o,a)},p:K,d(r){r&&f(a)}}}function I(h){let a,s,o=h[4]+"",r,d,n,i,m=b(h[5]),l=[];for(let e=0;e<m.length;e+=1)l[e]=H(E(h,m,e));return{c(){a=g("li"),s=g("p"),r=B(o),d=$(),n=g("ul");for(let e=0;e<l.length;e+=1)l[e].c();i=$(),this.h()},l(e){a=y(e,"LI",{class:!0});var c=v(a);s=y(c,"P",{class:!0});var t=v(s);r=G(t,o),t.forEach(f),d=w(c),n=y(c,"UL",{class:!0});var u=v(n);for(let k=0;k<l.length;k+=1)l[k].l(u);u.forEach(f),i=w(c),c.forEach(f),this.h()},h(){p(s,"class","text-sm font-medium text-gray-200"),p(n,"class","list-inside list-disc space-y-0.5"),p(a,"class","py-4")},m(e,c){_(e,a,c),x(a,s),x(s,r),x(a,d),x(a,n);for(let t=0;t<l.length;t+=1)l[t]&&l[t].m(n,null);x(a,i)},p(e,c){if(c&2){m=b(e[5]);let t;for(t=0;t<m.length;t+=1){const u=E(e,m,t);l[t]?l[t].p(u,c):(l[t]=H(u),l[t].c(),l[t].m(n,null))}for(;t<l.length;t+=1)l[t].d(1);l.length=m.length}},d(e){e&&f(a),S(l,e)}}}function X(h){let a,s="Loyola",o,r,d="September, 2000 - May, 2004",n,i,m=b(h[1]),l=[];for(let e=0;e<m.length;e+=1)l[e]=I(L(h,m,e));return{c(){a=g("h3"),a.textContent=s,o=$(),r=g("h4"),r.textContent=d,n=$(),i=g("ul");for(let e=0;e<l.length;e+=1)l[e].c();this.h()},l(e){a=y(e,"H3",{class:!0,"data-svelte-h":!0}),C(a)!=="svelte-10fjrzd"&&(a.textContent=s),o=w(e),r=y(e,"H4",{class:!0,"data-svelte-h":!0}),C(r)!=="svelte-9ts0ad"&&(r.textContent=d),n=w(e),i=y(e,"UL",{role:!0,class:!0});var c=v(i);for(let t=0;t<l.length;t+=1)l[t].l(c);c.forEach(f),this.h()},h(){p(a,"class","text-4xl font-extrabold tracking-tight text-gray-50 sm:text-6xl"),p(r,"class","text-2xl font-semibold tracking-tight text-gray-50 sm:text-3xl"),p(i,"role","list"),p(i,"class","divide-y divide-gray-200")},m(e,c){_(e,a,c),_(e,o,c),_(e,r,c),_(e,n,c),_(e,i,c);for(let t=0;t<l.length;t+=1)l[t]&&l[t].m(i,null)},p(e,c){if(c&2){m=b(e[1]);let t;for(t=0;t<m.length;t+=1){const u=L(e,m,t);l[t]?l[t].p(u,c):(l[t]=I(u),l[t].c(),l[t].m(i,null))}for(;t<l.length;t+=1)l[t].d(1);l.length=m.length}},d(e){e&&(f(a),f(o),f(r),f(n),f(i)),S(l,e)}}}function Y(h){let a,s,o,r,d;return s=new Q({props:{fallback:h[2],imgClass:Z,$$slots:{default:[X]},$$scope:{ctx:h}}}),{c(){a=$(),z(s.$$.fragment),this.h()},l(n){F("svelte-1w6nm3j",document.head).forEach(f),a=w(n),P(s.$$.fragment,n),this.h()},h(){document.title="Loyola"},m(n,i){_(n,a,i),T(s,n,i),o=!0,r||(d=U(window,"keydown",h[0]),r=!0)},p(n,[i]){const m={};i&2048&&(m.$$scope={dirty:i,ctx:n}),s.$set(m)},i(n){o||(A(s.$$.fragment,n),o=!0)},o(n){N(s.$$.fragment,n),o=!1},d(n){n&&f(a),V(s,n),r=!1,d()}}}const Z="object-cover shadow-md rounded-3xl";function ee(h,a,s){let o;return D(h,R,i=>s(3,o=i)),[i=>W(o.url.pathname,i),[{year:"2000-2001",items:["Entered with a $5000/year scholarship.","Lost said scholarship in one semester.","Had to actually <em>study</em> for math class."]},{year:"2001-2002",items:["Second year of primarily focusing on core classes.","Attended men's retreat in spring 2022 when I realized what I wanted to do with my life..."]},{year:"2002-2003",items:["Spent the entire year on a paid vacation for which I got credit studying in Montpellier, France.","Didn't take a single math class."]},{year:"2003-2004",items:["Three 400-level math courses in the fall semester.","Five 400-level in the spring.","Including a Complex Variables independent study."]}],{src:"images/loyola.jpg",alt:"Loyola Logo",height:"500",width:"500"}]}class oe extends M{constructor(a){super(),q(this,a,ee,Y,j,{})}}export{oe as component};
