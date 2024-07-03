import{s as q,c as K,n as S}from"../chunks/scheduler.BZkzKDai.js";import{S as E,i as H,s as x,k as L,l as P,d as f,f as v,m as j,g as d,n as J,o as A,p as I,q as M,r as N,e as _,c as g,u as b,a as C,v as p,w as R,t as U,b as V,h as W}from"../chunks/index.D1msgTfD.js";import{C as z,e as y}from"../chunks/ContentMain.DLYwkzqj.js";import{p as B}from"../chunks/stores.uvrknwSP.js";import{u as D}from"../chunks/keyboard-navigation.BXrW9Svp.js";function w(c,t,r){const l=c.slice();return l[4]=t[r],l}function k(c){let t,r=c[4]+"",l;return{c(){t=_("li"),l=U(r),this.h()},l(o){t=g(o,"LI",{class:!0});var h=C(t);l=V(h,r),h.forEach(f),this.h()},h(){p(t,"class","text-md font-medium text-gray-200")},m(o,h){d(o,t,h),W(t,l)},p:S,d(o){o&&f(t)}}}function F(c){let t,r="arqu",l,o,h="June, 2022 - Present",a,n,m=y(c[1]),i=[];for(let e=0;e<m.length;e+=1)i[e]=k(w(c,m,e));return{c(){t=_("h3"),t.textContent=r,l=x(),o=_("h4"),o.textContent=h,a=x(),n=_("ul");for(let e=0;e<i.length;e+=1)i[e].c();this.h()},l(e){t=g(e,"H3",{class:!0,"data-svelte-h":!0}),b(t)!=="svelte-17x6p3a"&&(t.textContent=r),l=v(e),o=g(e,"H4",{class:!0,"data-svelte-h":!0}),b(o)!=="svelte-14q7040"&&(o.textContent=h),a=v(e),n=g(e,"UL",{role:!0,class:!0});var u=C(n);for(let s=0;s<i.length;s+=1)i[s].l(u);u.forEach(f),this.h()},h(){p(t,"class","text-4xl font-extrabold tracking-tight text-gray-50 sm:text-6xl"),p(o,"class","text-2xl font-semibold tracking-tight text-gray-50 sm:text-3xl"),p(n,"role","list"),p(n,"class","list-inside list-disc space-y-2.5 pt-2")},m(e,u){d(e,t,u),d(e,l,u),d(e,o,u),d(e,a,u),d(e,n,u);for(let s=0;s<i.length;s+=1)i[s]&&i[s].m(n,null)},p(e,u){if(u&2){m=y(e[1]);let s;for(s=0;s<m.length;s+=1){const $=w(e,m,s);i[s]?i[s].p($,u):(i[s]=k($),i[s].c(),i[s].m(n,null))}for(;s<i.length;s+=1)i[s].d(1);i.length=m.length}},d(e){e&&(f(t),f(l),f(o),f(a),f(n)),R(i,e)}}}function G(c){let t,r,l,o,h;return r=new z({props:{fallback:c[2],imgClass:O,$$slots:{default:[F]},$$scope:{ctx:c}}}),{c(){t=x(),L(r.$$.fragment),this.h()},l(a){P("svelte-1054j0y",document.head).forEach(f),t=v(a),j(r.$$.fragment,a),this.h()},h(){document.title="arqu"},m(a,n){d(a,t,n),J(r,a,n),l=!0,o||(h=A(window,"keydown",c[0]),o=!0)},p(a,[n]){const m={};n&128&&(m.$$scope={dirty:n,ctx:a}),r.$set(m)},i(a){l||(I(r.$$.fragment,a),l=!0)},o(a){M(r.$$.fragment,a),l=!1},d(a){a&&f(t),N(r,a),o=!1,h()}}}const O="object-cover shadow-md rounded-3xl bg-white h-full px-16 py-12";function Q(c,t,r){let l;return K(c,B,n=>r(3,l=n)),[n=>D(l.url.pathname,n),["Hired as the lead frontend developer for a ~10-person startup.","Responsible for applying idiomatic VueJS practices and web standards to a previously constructed platform.",'Also responsible for providing "on-the-fly" design expertise.',"Converted previous corporate site from WordPress to SvelteKit as well as created a marketing site from scratch in the same framework."],{src:"images/arqu-logo.svg",alt:"arqu Logo",height:"250",width:"500"}]}class et extends E{constructor(t){super(),H(this,t,Q,G,q,{})}}export{et as component};
