"use strict";(self.webpackChunkreact_marvel_heroes=self.webpackChunkreact_marvel_heroes||[]).push([[895],{425:(e,a,s)=>{s.d(a,{A:()=>c});const t=s.p+"static/media/error.42292aa12b6bc303ce99.gif";var r=s(579);const c=()=>(0,r.jsx)("img",{style:{display:"block",width:"250px",height:"250px",objectFit:"contain",margin:"0 auto"},alt:"img",src:t})},455:(e,a,s)=>{s.r(a),s.d(a,{default:()=>v});var t=s(43),r=s(897),c=s(502);const n=s.p+"static/media/mjolnir.61f31e1809f12183a524.png";var i=s(425),l=s(579);const o=e=>{let{char:a}=e;const{name:s,description:t,thumbnail:r,homepage:c,wiki:n}=a;let i={objectFit:"cover"};return"http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"!==r&&"http://i.annihil.us/u/prod/marvel/i/mg/f/60/4c002e0305708.gif"!==r||(i={objectFit:"contain"}),(0,l.jsxs)("div",{className:"randomchar__block",children:[(0,l.jsx)("img",{src:r,alt:"Random character",className:"randomchar__img",style:i}),(0,l.jsxs)("div",{className:"randomchar__info",children:[(0,l.jsx)("p",{className:"randomchar__name",children:s}),(0,l.jsx)("p",{className:"randomchar__descr",children:t}),(0,l.jsxs)("div",{className:"randomchar__btns",children:[(0,l.jsx)("a",{href:c,target:"_blank",className:"button button__main",rel:"noreferrer",children:(0,l.jsx)("div",{className:"inner",children:"homepage"})}),(0,l.jsx)("a",{href:n,target:"_blank",className:"button button__secondary",rel:"noreferrer",children:(0,l.jsx)("div",{className:"inner",children:"Wiki"})})]})]})]})},h=()=>{const[e,a]=(0,t.useState)(null),{loading:s,error:h,getCharacter:d,clearError:m}=(0,r.A)();(0,t.useEffect)((()=>(_(),()=>{})),[]);const u=e=>{a(e)},_=()=>{m();const e=Math.floor(400*Math.random()+1011e3);d(e).then(u)},j=h?(0,l.jsx)(i.A,{}):null,p=s?(0,l.jsx)(c.A,{}):null,x=s||h||!e?null:(0,l.jsx)(o,{char:e});return(0,l.jsxs)("div",{className:"randomchar",children:[j,p,x,(0,l.jsxs)("div",{className:"randomchar__static",children:[(0,l.jsxs)("p",{className:"randomchar__title",children:["Random character for today!",(0,l.jsx)("br",{}),"Do you want to get to know him better?"]}),(0,l.jsx)("p",{className:"randomchar__title",children:"Or choose another one"}),(0,l.jsx)("button",{onClick:_,className:"button button__main",children:(0,l.jsx)("div",{className:"inner",children:"try it"})}),(0,l.jsx)("img",{src:n,alt:"mjolnir",className:"randomchar__decoration"})]})]})};var d=s(772),m=s(523);const u=e=>{const[a,s]=(0,t.useState)([]),[n,o]=(0,t.useState)(!1),[h,u]=(0,t.useState)(180),[_,j]=(0,t.useState)(!1),{loading:p,error:x,getAllCharacters:b}=(0,r.A)();(0,t.useEffect)((()=>{g(h,!0)}),[]);const g=(e,a)=>{o(!a),b(e).then(v)},v=async e=>{let a=!1;e.length<9&&(a=!0),s((a=>[...a,...e])),o((e=>!1)),u((e=>e+9)),j((e=>a))},f=(0,t.useRef)([]),N=e=>{f.current.forEach((e=>e.classList.remove("char__item_selected"))),f.current[e].classList.add("char__item_selected"),f.current[e].focus()};const k=function(a){const s=a.map(((a,s)=>{let t={objectFit:"cover"};return"http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"!==a.thumbnail&&"http://i.annihil.us/u/prod/marvel/i/mg/f/60/4c002e0305708.gif"!==a.thumbnail||(t={objectFit:"unset"}),(0,l.jsx)(d.A,{timeout:500,classNames:"char__item",children:(0,l.jsxs)("li",{className:"char__item",tabIndex:0,ref:e=>f.current[s]=e,onClick:()=>{e.onCharSelected(a.id),N(s)},onKeyPress:t=>{" "!==t.key&&"Enter"!==t.key||(e.onCharSelected(a.id),N(s))},children:[(0,l.jsx)("img",{src:a.thumbnail,alt:a.name,style:t}),(0,l.jsx)("div",{className:"char__name",children:a.name})]},a.id)},a.id)}));return(0,l.jsx)("ul",{className:"char__grid",children:(0,l.jsx)(m.A,{component:null,children:s})})}(a),y=x?(0,l.jsx)(i.A,{}):null,C=p&&!n?(0,l.jsx)(c.A,{}):null;return(0,l.jsxs)("div",{className:"char__list",children:[y,C,k,(0,l.jsx)("button",{className:"button button__main button__long",disabled:n,style:{display:_?"none":"block"},onClick:()=>g(h),children:(0,l.jsx)("div",{className:"inner",children:"load more"})})]})},_=()=>(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("p",{className:"char__select",children:"Please select a character to see information"}),(0,l.jsxs)("div",{className:"skeleton",children:[(0,l.jsxs)("div",{className:"pulse skeleton__header",children:[(0,l.jsx)("div",{className:"pulse skeleton__circle"}),(0,l.jsx)("div",{className:"pulse skeleton__mini"})]}),(0,l.jsx)("div",{className:"pulse skeleton__block"}),(0,l.jsx)("div",{className:"pulse skeleton__block"}),(0,l.jsx)("div",{className:"pulse skeleton__block"})]})]}),j=e=>{let{char:a}=e;const{name:s,description:t,thumbnail:r,homepage:c,wiki:n,comics:i}=a;let o={objectFit:"cover"};return"http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===r&&(o={objectFit:"contain"}),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)("div",{className:"char__basics",children:[(0,l.jsx)("img",{src:r,alt:s,style:o}),(0,l.jsxs)("div",{children:[(0,l.jsx)("div",{className:"char__info-name",children:s}),(0,l.jsxs)("div",{className:"char__btns",children:[(0,l.jsx)("a",{href:c,target:"_blank",className:"button button__main",rel:"noreferrer",children:(0,l.jsx)("div",{className:"inner",children:"homepage"})}),(0,l.jsx)("a",{href:n,target:"_blank",className:"button button__secondary",rel:"noreferrer",children:(0,l.jsx)("div",{className:"inner",children:"Wiki"})})]})]})]}),(0,l.jsx)("div",{className:"char__descr",children:t}),(0,l.jsx)("div",{className:"char__comics",children:"Comics:"}),(0,l.jsxs)("ul",{className:"char__comics-list",children:[i.length>0?null:"There is no comics with this character",i.map(((e,a)=>{if(!(a>9))return(0,l.jsx)("li",{className:"char__comics-item",children:e.name},a)}))]})]})},p=e=>{const[a,s]=(0,t.useState)(null),{loading:n,error:o,getCharacter:h,clearError:d}=(0,r.A)();(0,t.useEffect)((()=>{m()}),[e.charId]);const m=()=>{const{charId:a}=e;a&&(d(),h(a).then(u))},u=e=>{s(e)},p=a||n||o?null:(0,l.jsx)(_,{}),x=o?(0,l.jsx)(i.A,{}):null,b=n?(0,l.jsx)(c.A,{}):null,g=n||o||!a?null:(0,l.jsx)(j,{char:a});return(0,l.jsxs)("div",{className:"char__info",children:[p,x,b,g]})};class x extends t.Component{constructor(){super(...arguments),this.state={error:!1}}componentDidCatch(e,a){console.log(e,a),this.setState({error:!0})}render(){return this.state.error?(0,l.jsx)(i.A,{}):this.props.children}}const b=x,g=s.p+"static/media/vision.067d4ae1936d64a577ce.png",v=()=>{const[e,a]=(0,t.useState)(null);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(b,{children:(0,l.jsx)(h,{})}),(0,l.jsxs)("div",{className:"char__content",children:[(0,l.jsx)(b,{children:(0,l.jsx)(u,{onCharSelected:e=>{a(e)}})}),(0,l.jsx)(b,{children:(0,l.jsx)(p,{charId:e})})]}),(0,l.jsx)("img",{className:"bg-decoration",src:g,alt:"vision"})]})}},897:(e,a,s)=>{s.d(a,{A:()=>r});var t=s(43);const r=()=>{const{loading:e,request:a,error:s,clearError:r}=(()=>{const[e,a]=(0,t.useState)(!1),[s,r]=(0,t.useState)(null);return{loading:e,request:(0,t.useCallback)((async function(e){let s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,c=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{"Content-Type":"application/json"};a(!0);try{const r=await fetch(e,{method:s,body:t,headers:c});if(!r.ok)throw new Error("Could not fetch ".concat(e,", status: ").concat(r.status));const n=await r.json();return a(!1),n}catch(n){throw a(!1),r(n.message),n}}),[]),error:s,clearError:(0,t.useCallback)((()=>r(null)),[])}})(),c="https://gateway.marvel.com:443/v1/public/",n="apikey=b860ae4f50120b46e53bb6d38bbb7db4",i=e=>({id:e.id,name:e.name,description:e.description?"".concat(e.description.slice(0,210),"..."):"There is no description for this character",thumbnail:e.thumbnail.path+"."+e.thumbnail.extension,homepage:e.urls[0].url,wiki:e.urls[1].url,comics:e.comics.items}),l=e=>{var a;return{id:e.id,title:e.title,description:e.description||"There is no description",pageCount:e.pageCount?"".concat(e.pageCount," p."):"No information about the number of pages",thumbnail:e.thumbnail.path+"."+e.thumbnail.extension,language:(null===(a=e.textObjects[0])||void 0===a?void 0:a.language)||"en-us",price:e.prices[0].price?"".concat(e.prices[0].price,"$"):"not available",url:e.urls[0].url}};return{loading:e,error:s,clearError:r,getAllCharacters:async function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:180;return(await a("".concat(c,"characters?limit=9&offset=").concat(e,"&").concat(n))).data.results.map(i)},getCharacter:async e=>{const s=await a("".concat(c,"/characters/").concat(e,"?&").concat(n));return i(s.data.results[0])},getAllComics:async function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return(await a("".concat(c,"comics?limit=8&offset=").concat(e,"&").concat(n))).data.results.map(l)},getComic:async e=>{const s=await a("".concat(c,"comics/").concat(e,"?").concat(n));return console.log(l(s.data.results[0])),l(s.data.results[0])}}}}}]);
//# sourceMappingURL=895.8fc4db1e.chunk.js.map