import{d as h,h as y,i as g,l as P,u as t,e as l,c as v,b as u,t as i,a as j,j as C,o as n}from"./index-0204c66f.js";import{u as L,C as k,S as E}from"./constants-99ec137a.js";import{a as V,L as b,_ as B}from"./ErrorComponent.vue_vue_type_script_setup_true_lang-a1b8f0de.js";import{P as I}from"./PaginationComponent-fb63cb18.js";const a={all:["post"],user:{all:()=>[...a.all,"user"],id:e=>[...a.user.all(),e]},id:e=>[...a.all,e]};function T(e){return fetch(`https://jsonplaceholder.typicode.com/posts/${e}`).then(s=>s.json())}function w(){return fetch("https://jsonplaceholder.typicode.com/posts").then(e=>e.json())}function x(e){return fetch(`https://jsonplaceholder.typicode.com/users/${e}/posts`).then(s=>s.json())}const N={get:T,getAll:w,getFromUserId:x};function U(e){return L({queryKey:a.user.id(e),queryFn:()=>N.getFromUserId(e.value),cacheTime:k,staleTime:E})}const A={key:2,class:"post-wrapper"},F=h({__name:"PostListView",setup(e){const s=y(),p=g(()=>Number(s.params.id)),o=P(0),{data:r,isLoading:d,isError:m,error:_}=U(p);return(S,c)=>t(d)?(n(),l(b,{key:0})):t(m)?(n(),l(V,{key:1,error:t(_)},null,8,["error"])):t(r)?(n(),v("div",A,[u("h3",null,i(t(r)[o.value].title),1),u("p",null,i(t(r)[o.value].body),1),j(I,{currentPage:o.value,"onUpdate:currentPage":c[0]||(c[0]=f=>o.value=f),start:0,limit:t(r).length-1},null,8,["currentPage","limit"])])):C("",!0)}});const D=B(F,[["__scopeId","data-v-b6697fcd"]]);export{D as default};
