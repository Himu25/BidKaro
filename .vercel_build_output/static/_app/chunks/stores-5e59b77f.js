import{aj as n}from"./vendor-05407831.js";const o=()=>{const s=n("__svelte__");return{page:{subscribe:s.page.subscribe},navigating:{subscribe:s.navigating.subscribe},get preloading(){return console.error("stores.preloading is deprecated; use stores.navigating instead"),{subscribe:s.navigating.subscribe}},session:s.session,updated:s.updated}},a={subscribe(s){return o().page.subscribe(s)}},t=s=>{throw new Error(`Cannot ${s} session store before subscribing`)},r={subscribe(s){const e=o().session;return r.set=e.set,r.update=e.update,e.subscribe(s)},set:()=>t("set"),update:()=>t("update")};export{a as p,r as s};
