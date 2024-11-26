import{S as ge,i as ve,s as Ee,e as i,t as w,k as S,c as u,a as o,h as k,d as s,m as L,b as e,ar as ye,g as le,H as r,J as R,as as _e,K as U,at as we,I as be,M as ke,au as xe,F as re,G as ae}from"../../../chunks/vendor-c278652d.js";import{g as Ie}from"../../../chunks/navigation-bd39ff07.js";import{p as Oe}from"../../../chunks/fetch-3a9bcacc.js";import"../../../chunks/singletons-a6a7384f.js";function Ne(d){let a;return{c(){a=w("Submit")},l(t){a=k(t,"Submit")},m(t,l){le(t,a,l)},d(t){t&&s(a)}}}function Te(d){let a,t,l,f,b;return{c(){a=i("span"),t=re("svg"),l=re("circle"),f=re("path"),b=w(`
          Submitting...`),this.h()},l(n){a=u(n,"SPAN",{class:!0});var m=o(a);t=ae(m,"svg",{class:!0,xmlns:!0,fill:!0,viewBox:!0,stroke:!0});var x=o(t);l=ae(x,"circle",{class:!0,cx:!0,cy:!0,r:!0,stroke:!0,"stroke-width":!0}),o(l).forEach(s),f=ae(x,"path",{class:!0,fill:!0,d:!0}),o(f).forEach(s),x.forEach(s),b=k(m,`
          Submitting...`),m.forEach(s),this.h()},h(){e(l,"class","opacity-25"),e(l,"cx","12"),e(l,"cy","12"),e(l,"r","10"),e(l,"stroke","currentColor"),e(l,"stroke-width","4"),e(f,"class","opacity-75"),e(f,"fill","currentColor"),e(f,"d","M4 12a8 8 0 1116 0A8 8 0 014 12z"),e(t,"class","animate-spin w-5 h-5 mr-3"),e(t,"xmlns","http://www.w3.org/2000/svg"),e(t,"fill","none"),e(t,"viewBox","0 0 24 24"),e(t,"stroke","currentColor"),e(a,"class","flex items-center justify-center")},m(n,m){le(n,a,m),r(a,t),r(t,l),r(t,f),r(a,b)},d(n){n&&s(a)}}}function De(d){let a,t,l,f,b,n,m,x,P,c,M,v,B,W,z,p,G,O,C,J,K,_,N,X,T,Q,D,Y,A,Z,$,ee,E,te,se;function oe(h,y){return h[3]?Te:Ne}let V=oe(d),I=V(d);return{c(){a=i("div"),t=i("form"),l=i("h2"),f=w("Add New Item"),b=S(),n=i("div"),m=i("label"),x=w("Item Name"),P=S(),c=i("input"),M=S(),v=i("div"),B=i("label"),W=w("Description"),z=S(),p=i("textarea"),G=S(),O=i("div"),C=i("label"),J=w("Duration"),K=S(),_=i("select"),N=i("option"),X=w("One Minute"),T=i("option"),Q=w("Ten Minutes"),D=i("option"),Y=w("One Day"),A=i("option"),Z=w("One Week"),$=S(),ee=S(),E=i("button"),I.c(),this.h()},l(h){a=u(h,"DIV",{class:!0});var y=o(a);t=u(y,"FORM",{class:!0});var g=o(t);l=u(g,"H2",{class:!0});var ne=o(l);f=k(ne,"Add New Item"),ne.forEach(s),b=L(g),n=u(g,"DIV",{class:!0});var j=o(n);m=u(j,"LABEL",{for:!0,class:!0});var ie=o(m);x=k(ie,"Item Name"),ie.forEach(s),P=L(j),c=u(j,"INPUT",{id:!0,minlength:!0,maxlength:!0,type:!0,class:!0,name:!0,placeholder:!0}),j.forEach(s),M=L(g),v=u(g,"DIV",{class:!0});var F=o(v);B=u(F,"LABEL",{for:!0,class:!0});var ue=o(B);W=k(ue,"Description"),ue.forEach(s),z=L(F),p=u(F,"TEXTAREA",{id:!0,minlength:!0,maxlength:!0,class:!0,name:!0,placeholder:!0}),o(p).forEach(s),F.forEach(s),G=L(g),O=u(g,"DIV",{class:!0});var H=o(O);C=u(H,"LABEL",{for:!0,class:!0});var ce=o(C);J=k(ce,"Duration"),ce.forEach(s),K=L(H),_=u(H,"SELECT",{id:!0,class:!0});var q=o(_);N=u(q,"OPTION",{});var de=o(N);X=k(de,"One Minute"),de.forEach(s),T=u(q,"OPTION",{});var fe=o(T);Q=k(fe,"Ten Minutes"),fe.forEach(s),D=u(q,"OPTION",{});var me=o(D);Y=k(me,"One Day"),me.forEach(s),A=u(q,"OPTION",{});var he=o(A);Z=k(he,"One Week"),he.forEach(s),q.forEach(s),H.forEach(s),$=L(g),ee=L(g),E=u(g,"BUTTON",{class:!0,type:!0});var pe=o(E);I.l(pe),pe.forEach(s),g.forEach(s),y.forEach(s),this.h()},h(){e(l,"class","text-2xl font-bold text-gray-800 mb-6 text-center"),e(m,"for","name"),e(m,"class","block text-sm font-semibold text-gray-700 mb-2"),e(c,"id","name"),c.required=!0,e(c,"minlength","3"),e(c,"maxlength","60"),e(c,"type","text"),e(c,"class","w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500"),e(c,"name","username"),e(c,"placeholder","Item Name"),e(n,"class","mb-4"),e(B,"for","desc"),e(B,"class","block text-sm font-semibold text-gray-700 mb-2"),e(p,"id","desc"),p.required=!0,e(p,"minlength","3"),e(p,"maxlength","600"),e(p,"class","w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500"),e(p,"name","description"),e(p,"placeholder","Item Description"),e(v,"class","mb-4"),e(C,"for","duration"),e(C,"class","block text-sm font-semibold text-gray-700 mb-2"),N.__value=60,N.value=N.__value,T.__value=60*10,T.value=T.__value,D.__value=60*60*24,D.value=D.__value,A.__value=60*60*24*7,A.value=A.__value,e(_,"id","duration"),e(_,"class","w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500"),d[1]===void 0&&ye(()=>d[7].call(_)),e(O,"class","mb-4"),e(E,"class","w-full py-3 mt-4 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 disabled:opacity-50"),e(E,"type","submit"),E.disabled=d[3],e(t,"class","bg-white p-8 rounded-lg shadow-lg w-full max-w-lg"),e(a,"class","flex justify-center p-8")},m(h,y){le(h,a,y),r(a,t),r(t,l),r(l,f),r(t,b),r(t,n),r(n,m),r(m,x),r(n,P),r(n,c),R(c,d[0]),r(t,M),r(t,v),r(v,B),r(B,W),r(v,z),r(v,p),R(p,d[2]),r(t,G),r(t,O),r(O,C),r(C,J),r(O,K),r(O,_),r(_,N),r(N,X),r(_,T),r(T,Q),r(_,D),r(D,Y),r(_,A),r(A,Z),_e(_,d[1]),r(t,$),r(t,ee),r(t,E),I.m(E,null),te||(se=[U(c,"input",d[5]),U(p,"input",d[6]),U(_,"change",d[7]),U(t,"submit",we(d[4]))],te=!0)},p(h,[y]){y&1&&c.value!==h[0]&&R(c,h[0]),y&4&&R(p,h[2]),y&2&&_e(_,h[1]),V!==(V=oe(h))&&(I.d(1),I=V(h),I&&(I.c(),I.m(E,null))),y&8&&(E.disabled=h[3])},i:be,o:be,d(h){h&&s(a),I.d(),te=!1,ke(se)}}}function Ae(d,a,t){let l="Chair",f=60,b="This is a fantastic chair that you would be quite happy with!",n=!1;async function m(){try{t(3,n=!0);const[M,v]=await Oe("/dashboard/items/new",{name:l,description:b,duration:f});t(3,n=!1),v||Ie(`/items/${M.id}`)}catch(M){t(3,n=!1),console.error("Error submitting the form:",M)}}function x(){l=this.value,t(0,l)}function P(){b=this.value,t(2,b)}function c(){f=xe(this),t(1,f)}return[l,f,b,n,m,x,P,c]}class Ce extends ge{constructor(a){super();ve(this,a,Ae,De,Ee,{})}}export{Ce as default};