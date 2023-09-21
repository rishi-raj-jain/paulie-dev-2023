/* empty css                       *//* empty css                               *//* empty css                       */const Le={name:"MissingMediaQueryDirective",title:"Missing value for `client:media` directive.",message:'Media query not provided for `client:media` directive. A media query similar to `client:media="(max-width: 600px)"` must be provided'},H={name:"NoMatchingRenderer",title:"No matching renderer found.",message:(e,t,r,n)=>`Unable to render \`${e}\`.

${n>0?`There ${r?"are":"is"} ${n} renderer${r?"s":""} configured in your \`astro.config.mjs\` file,
but ${r?"none were":"it was not"} able to server-side render \`${e}\`.`:`No valid renderer was found ${t?`for the \`.${t}\` file extension.`:"for this file extension."}`}`,hint:e=>`Did you mean to enable the ${e} integration?

See https://docs.astro.build/en/core-concepts/framework-components/ for more information on how to install and configure integrations.`},Z={name:"NoClientEntrypoint",title:"No client entrypoint specified in renderer.",message:(e,t,r)=>`\`${e}\` component has a \`client:${t}\` directive, but no client entrypoint was provided by \`${r}\`.`,hint:"See https://docs.astro.build/en/reference/integrations-reference/#addrenderer-option for more information on how to configure your renderer."},P={name:"NoClientOnlyHint",title:"Missing hint on client:only directive.",message:e=>`Unable to render \`${e}\`. When using the \`client:only\` hydration strategy, Astro needs a hint to use the correct renderer.`,hint:e=>`Did you mean to pass \`client:only="${e}"\`? See https://docs.astro.build/en/reference/directives-reference/#clientonly for more information on client:only`},Q={name:"InvalidComponentArgs",title:"Invalid component arguments.",message:e=>`Invalid arguments passed to${e?` <${e}>`:""} component.`,hint:"Astro components cannot be rendered directly via function call, such as `Component()` or `{items.map(Component)}`."},X={name:"AstroGlobUsedOutside",title:"Astro.glob() used outside of an Astro file.",message:e=>`\`Astro.glob(${e})\` can only be used in \`.astro\` files. \`import.meta.glob(${e})\` can be used instead to achieve a similar result.`,hint:"See Vite's documentation on `import.meta.glob` for more information: https://vitejs.dev/guide/features.html#glob-import"},K={name:"AstroGlobNoMatch",title:"Astro.glob() did not match any files.",message:e=>`\`Astro.glob(${e})\` did not return any matching files. Check the pattern for typos.`};function Ie(e){return e.replace(/\r\n|\r(?!\n)|\n/g,`
`)}function Ce(e,t){if(!t||t.line===void 0||t.column===void 0)return"";const r=Ie(e).split(`
`).map(a=>a.replace(/\t/g,"  ")),n=[];for(let a=-2;a<=2;a++)r[t.line+a]&&n.push(t.line+a);let o=0;for(const a of n){let i=`> ${a}`;i.length>o&&(o=i.length)}let s="";for(const a of n){const i=a===t.line-1;s+=i?"> ":"  ",s+=`${a+1} | ${r[a]}
`,i&&(s+=`${Array.from({length:o}).join(" ")}  | ${Array.from({length:t.column}).join(" ")}^
`)}return s}class S extends Error{loc;title;hint;frame;type="AstroError";constructor(t,...r){super(...r);const{name:n,title:o,message:s,stack:a,location:i,hint:u,frame:y}=t;this.title=o,this.name=n,s&&(this.message=s),this.stack=a||this.stack,this.loc=i,this.hint=u,this.frame=y}setLocation(t){this.loc=t}setName(t){this.name=t}setMessage(t){this.message=t}setHint(t){this.hint=t}setFrame(t,r){this.frame=Ce(t,r)}static is(t){return t.type==="AstroError"}}function Ne(e){return!(e.length!==3||!e[0]||typeof e[0]!="object")}function le(e,t,r){const n=t?.split("/").pop()?.replace(".astro","")??"",o=(...s)=>{if(!Ne(s))throw new S({...Q,message:Q.message(n)});return e(...s)};return Object.defineProperty(o,"name",{value:n,writable:!1}),o.isAstroComponentFactory=!0,o.moduleId=t,o.propagation=r,o}function Oe(e){return le(e.factory,e.moduleId,e.propagation)}function B(e,t,r){return typeof e=="function"?le(e,t,r):Oe(e)}const Me="3.0.12";function Ue(){return t=>{if(typeof t=="string")throw new S({...X,message:X.message(JSON.stringify(t))});let r=[...Object.values(t)];if(r.length===0)throw new S({...K,message:K.message(JSON.stringify(t))});return Promise.all(r.map(n=>n()))}}function J(e){return{site:e?new URL(e):void 0,generator:`Astro v${Me}`,glob:Ue()}}const{replace:He}="",Pe=/[&<>'"]/g,De={"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"},_e=e=>De[e],ke=e=>He.call(e,Pe,_e);function W(e){return!!e&&typeof e=="object"&&typeof e.then=="function"}async function*Ve(e){const t=e.getReader();try{for(;;){const{done:r,value:n}=await t.read();if(r)return;yield n}}finally{t.releaseLock()}}const C=ke;class ue extends Uint8Array{}Object.defineProperty(ue.prototype,Symbol.toStringTag,{get(){return"HTMLBytes"}});class N extends String{get[Symbol.toStringTag](){return"HTMLString"}}const m=e=>e instanceof N?e:typeof e=="string"?new N(e):e;function ze(e){return Object.prototype.toString.call(e)==="[object HTMLString]"}function Fe(e){return new ue(e)}function fe(e){return typeof e.getReader=="function"}async function*ee(e){if(fe(e))for await(const t of Ve(e))yield R(t);else for await(const t of e)yield R(t)}function*Be(e){for(const t of e)yield R(t)}function R(e){if(e&&typeof e=="object"){if(e instanceof Uint8Array)return Fe(e);if(e instanceof Response&&e.body){const t=e.body;return ee(t)}else{if(typeof e.then=="function")return Promise.resolve(e).then(t=>R(t));if(Symbol.iterator in e)return Be(e);if(Symbol.asyncIterator in e||fe(e))return ee(e)}}return m(e)}const de=Symbol.for("astro:render");function pe(e){return Object.defineProperty(e,de,{value:!0})}function Je(e){return e&&typeof e=="object"&&e[de]}function me(e){var t,r,n="";if(typeof e=="string"||typeof e=="number")n+=e;else if(typeof e=="object")if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=me(e[t]))&&(n&&(n+=" "),n+=r);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}function he(){for(var e,t,r=0,n="";r<arguments.length;)(e=arguments[r++])&&(t=me(e))&&(n&&(n+=" "),n+=t);return n}const g={Value:0,JSON:1,RegExp:2,Date:3,Map:4,Set:5,BigInt:6,URL:7,Uint8Array:8,Uint16Array:9,Uint32Array:10};function D(e,t={},r=new WeakSet){if(r.has(e))throw new Error(`Cyclic reference detected while serializing props for <${t.displayName} client:${t.hydrate}>!

Cyclic references cannot be safely serialized for client-side usage. Please remove the cyclic reference.`);r.add(e);const n=e.map(o=>ge(o,t,r));return r.delete(e),n}function ye(e,t={},r=new WeakSet){if(r.has(e))throw new Error(`Cyclic reference detected while serializing props for <${t.displayName} client:${t.hydrate}>!

Cyclic references cannot be safely serialized for client-side usage. Please remove the cyclic reference.`);r.add(e);const n=Object.fromEntries(Object.entries(e).map(([o,s])=>[o,ge(s,t,r)]));return r.delete(e),n}function ge(e,t={},r=new WeakSet){switch(Object.prototype.toString.call(e)){case"[object Date]":return[g.Date,e.toISOString()];case"[object RegExp]":return[g.RegExp,e.source];case"[object Map]":return[g.Map,D(Array.from(e),t,r)];case"[object Set]":return[g.Set,D(Array.from(e),t,r)];case"[object BigInt]":return[g.BigInt,e.toString()];case"[object URL]":return[g.URL,e.toString()];case"[object Array]":return[g.JSON,D(e,t,r)];case"[object Uint8Array]":return[g.Uint8Array,Array.from(e)];case"[object Uint16Array]":return[g.Uint16Array,Array.from(e)];case"[object Uint32Array]":return[g.Uint32Array,Array.from(e)];default:return e!==null&&typeof e=="object"?[g.Value,ye(e,t,r)]:e===void 0?[g.Value]:[g.Value,e]}}function be(e,t){return JSON.stringify(ye(e,t))}const We=Object.freeze(["data-astro-transition-scope","data-astro-transition-persist"]);function qe(e,t){let r={isPage:!1,hydration:null,props:{}};for(const[n,o]of Object.entries(e))if(n.startsWith("server:")&&n==="server:root"&&(r.isPage=!0),n.startsWith("client:"))switch(r.hydration||(r.hydration={directive:"",value:"",componentUrl:"",componentExport:{value:""}}),n){case"client:component-path":{r.hydration.componentUrl=o;break}case"client:component-export":{r.hydration.componentExport.value=o;break}case"client:component-hydration":break;case"client:display-name":break;default:{if(r.hydration.directive=n.split(":")[1],r.hydration.value=o,!t.has(r.hydration.directive)){const s=Array.from(t.keys()).map(a=>`client:${a}`).join(", ");throw new Error(`Error: invalid hydration directive "${n}". Supported hydration methods: ${s}`)}if(r.hydration.directive==="media"&&typeof r.hydration.value!="string")throw new S(Le);break}}else r.props[n]=o;for(const n of Object.getOwnPropertySymbols(e))r.props[n]=e[n];return r}async function Ge(e,t){const{renderer:r,result:n,astroId:o,props:s,attrs:a}=e,{hydrate:i,componentUrl:u,componentExport:y}=t;if(!y.value)throw new Error(`Unable to resolve a valid export for "${t.displayName}"! Please open an issue at https://astro.build/issues!`);const p={children:"",props:{uid:o}};if(a)for(const[w,A]of Object.entries(a))p.props[w]=C(A);p.props["component-url"]=await n.resolve(decodeURI(u)),r.clientEntrypoint&&(p.props["component-export"]=y.value,p.props["renderer-url"]=await n.resolve(decodeURI(r.clientEntrypoint)),p.props.props=C(be(s,t))),p.props.ssr="",p.props.client=i;let f=await n.resolve("astro:scripts/before-hydration.js");return f.length&&(p.props["before-hydration-url"]=f),p.props.opts=C(JSON.stringify({name:t.displayName,value:t.hydrateArgs||""})),We.forEach(w=>{s[w]&&(p.props[w]=s[w])}),p}/**
 * shortdash - https://github.com/bibig/node-shorthash
 *
 * @license
 *
 * (The MIT License)
 *
 * Copyright (c) 2013 Bibig <bibig@me.com>
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 */const V="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXY",_=V.length;function Ye(e){let t=0;if(e.length===0)return t;for(let r=0;r<e.length;r++){const n=e.charCodeAt(r);t=(t<<5)-t+n,t=t&t}return t}function Ze(e){let t,r="",n=Ye(e);const o=n<0?"Z":"";for(n=Math.abs(n);n>=_;)t=n%_,n=Math.floor(n/_),r=V[t]+r;return n>0&&(r=V[n]+r),o+r}function Qe(e){return e==null?!1:e.isAstroComponentFactory===!0}function Xe(e,t){let r=t.propagation||"none";return t.moduleId&&e.componentMetadata.has(t.moduleId)&&r==="none"&&(r=e.componentMetadata.get(t.moduleId).propagation),r==="in-tree"||r==="self"}const Ke=Symbol.for("astro.headAndContent");function et(e){return typeof e=="object"&&!!e[Ke]}var tt='(()=>{var b=Object.defineProperty;var f=(a,s,i)=>s in a?b(a,s,{enumerable:!0,configurable:!0,writable:!0,value:i}):a[s]=i;var d=(a,s,i)=>(f(a,typeof s!="symbol"?s+"":s,i),i);var u;{let a={0:t=>m(t),1:t=>i(t),2:t=>new RegExp(t),3:t=>new Date(t),4:t=>new Map(i(t)),5:t=>new Set(i(t)),6:t=>BigInt(t),7:t=>new URL(t),8:t=>new Uint8Array(t),9:t=>new Uint16Array(t),10:t=>new Uint32Array(t)},s=t=>{let[e,r]=t;return e in a?a[e](r):void 0},i=t=>t.map(s),m=t=>typeof t!="object"||t===null?t:Object.fromEntries(Object.entries(t).map(([e,r])=>[e,s(r)]));customElements.get("astro-island")||customElements.define("astro-island",(u=class extends HTMLElement{constructor(){super(...arguments);d(this,"Component");d(this,"hydrator");d(this,"hydrate",async()=>{var l;if(!this.hydrator||!this.isConnected)return;let e=(l=this.parentElement)==null?void 0:l.closest("astro-island[ssr]");if(e){e.addEventListener("astro:hydrate",this.hydrate,{once:!0});return}let r=this.querySelectorAll("astro-slot"),c={},h=this.querySelectorAll("template[data-astro-template]");for(let n of h){let o=n.closest(this.tagName);o!=null&&o.isSameNode(this)&&(c[n.getAttribute("data-astro-template")||"default"]=n.innerHTML,n.remove())}for(let n of r){let o=n.closest(this.tagName);o!=null&&o.isSameNode(this)&&(c[n.getAttribute("name")||"default"]=n.innerHTML)}let p;try{p=this.hasAttribute("props")?m(JSON.parse(this.getAttribute("props"))):{}}catch(n){let o=this.getAttribute("component-url")||"<unknown>",y=this.getAttribute("component-export");throw y&&(o+=` (export ${y})`),console.error(`[hydrate] Error parsing props for component ${o}`,this.getAttribute("props"),n),n}await this.hydrator(this)(this.Component,p,c,{client:this.getAttribute("client")}),this.removeAttribute("ssr"),this.dispatchEvent(new CustomEvent("astro:hydrate"))});d(this,"unmount",()=>{this.isConnected||this.dispatchEvent(new CustomEvent("astro:unmount"))})}disconnectedCallback(){document.removeEventListener("astro:after-swap",this.unmount),document.addEventListener("astro:after-swap",this.unmount,{once:!0})}connectedCallback(){!this.hasAttribute("await-children")||this.firstChild?this.childrenConnectedCallback():new MutationObserver((e,r)=>{r.disconnect(),setTimeout(()=>this.childrenConnectedCallback(),0)}).observe(this,{childList:!0})}async childrenConnectedCallback(){let e=this.getAttribute("before-hydration-url");e&&await import(e),this.start()}start(){let e=JSON.parse(this.getAttribute("opts")),r=this.getAttribute("client");if(Astro[r]===void 0){window.addEventListener(`astro:${r}`,()=>this.start(),{once:!0});return}Astro[r](async()=>{let c=this.getAttribute("renderer-url"),[h,{default:p}]=await Promise.all([import(this.getAttribute("component-url")),c?import(c):()=>()=>{}]),l=this.getAttribute("component-export")||"default";if(!l.includes("."))this.Component=h[l];else{this.Component=h;for(let n of l.split("."))this.Component=this.Component[n]}return this.hydrator=p,this.hydrate},e,this)}attributeChangedCallback(){this.hydrate()}},d(u,"observedAttributes",["props"]),u))}})();';const rt="<style>astro-island,astro-slot,astro-static-slot{display:contents}</style>";function nt(e){return e._metadata.hasHydrationScript?!1:e._metadata.hasHydrationScript=!0}function ot(e,t){return e._metadata.hasDirectives.has(t)?!1:(e._metadata.hasDirectives.add(t),!0)}function te(e,t){const n=e.clientDirectives.get(t);if(!n)throw new Error(`Unknown directive: ${t}`);return n}function st(e,t,r){switch(t){case"both":return`${rt}<script>${te(e,r)};${tt}<\/script>`;case"directive":return`<script>${te(e,r)}<\/script>`}return""}const we=/^(area|base|br|col|command|embed|hr|img|input|keygen|link|meta|param|source|track|wbr)$/i,it=/^(allowfullscreen|async|autofocus|autoplay|controls|default|defer|disabled|disablepictureinpicture|disableremoteplayback|formnovalidate|hidden|loop|nomodule|novalidate|open|playsinline|readonly|required|reversed|scoped|seamless|itemscope)$/i,at=/^(contenteditable|draggable|spellcheck|value)$/i,ct=/^(autoReverse|externalResourcesRequired|focusable|preserveAlpha)$/i,lt=new Set(["set:html","set:text"]),ut=e=>e.trim().replace(/(?:(?!^)\b\w|\s+|[^\w]+)/g,(t,r)=>/[^\w]|\s/.test(t)?"":r===0?t:t.toUpperCase()),T=(e,t=!0)=>t?String(e).replace(/&/g,"&#38;").replace(/"/g,"&#34;"):e,ft=e=>e.toLowerCase()===e?e:e.replace(/[A-Z]/g,t=>`-${t.toLowerCase()}`),re=e=>Object.entries(e).map(([t,r])=>t[0]!=="-"&&t[1]!=="-"?`${ft(t)}:${r}`:`${t}:${r}`).join(";");function dt(e){let t="";for(const[r,n]of Object.entries(e))t+=`const ${ut(r)} = ${JSON.stringify(n)?.replace(/<\/script>/g,"\\x3C/script>")};
`;return m(t)}function ne(e){return e.length===1?e[0]:`${e.slice(0,-1).join(", ")} or ${e[e.length-1]}`}function $e(e,t,r=!0){if(e==null)return"";if(e===!1)return at.test(t)||ct.test(t)?m(` ${t}="false"`):"";if(lt.has(t))return console.warn(`[astro] The "${t}" directive cannot be applied dynamically at runtime. It will not be rendered as an attribute.

Make sure to use the static attribute syntax (\`${t}={value}\`) instead of the dynamic spread syntax (\`{...{ "${t}": value }}\`).`),"";if(t==="class:list"){const n=T(he(e),r);return n===""?"":m(` ${t.slice(0,-5)}="${n}"`)}if(t==="style"&&!(e instanceof N)){if(Array.isArray(e)&&e.length===2)return m(` ${t}="${T(`${re(e[0])};${e[1]}`,r)}"`);if(typeof e=="object")return m(` ${t}="${T(re(e),r)}"`)}return t==="className"?m(` class="${T(e,r)}"`):e===!0&&(t.startsWith("data-")||it.test(t))?m(` ${t}`):m(` ${t}="${T(e,r)}"`)}function z(e,t=!0){let r="";for(const[n,o]of Object.entries(e))r+=$e(o,n,t);return m(r)}function x(e,{props:t,children:r=""},n=!0){const{lang:o,"data-astro-id":s,"define:vars":a,...i}=t;return a&&(e==="style"&&(delete i["is:global"],delete i["is:scoped"]),e==="script"&&(delete i.hoist,r=dt(a)+`
`+r)),(r==null||r=="")&&we.test(e)?`<${e}${z(i,n)} />`:`<${e}${z(i,n)}>${r}</${e}>`}function Ae(e){const t=[],r={write:o=>t.push(o)},n=e(r);return{async renderToFinalDestination(o){for(const s of t)o.write(s);r.write=s=>o.write(s),await n}}}const k=(e,t,r)=>{const n=JSON.stringify(e.props),o=e.children;return t===r.findIndex(s=>JSON.stringify(s.props)===n&&s.children==o)};function oe(e){e._metadata.hasRenderedHead=!0;const t=Array.from(e.styles).filter(k).map(s=>s.props.rel==="stylesheet"?x("link",s):x("style",s));e.styles.clear();const r=Array.from(e.scripts).filter(k).map(s=>x("script",s,!1));let o=Array.from(e.links).filter(k).map(s=>x("link",s,!1)).join(`
`)+t.join(`
`)+r.join(`
`);if(e._metadata.extraHead.length>0)for(const s of e._metadata.extraHead)o+=s;return m(o)}function*pt(){yield pe({type:"maybe-head"})}const F=Symbol.for("astro:slot-string");class ve extends N{instructions;[F];constructor(t,r){super(t),this.instructions=r,this[F]=!0}}function mt(e){return!!e[F]}function Se(e,t,r){return!t&&r?Se(e,r):{async render(n){await E(n,typeof t=="function"?t(e):t)}}}async function O(e,t,r){let n="",o=null;const s={write(i){i instanceof Response||(typeof i=="object"&&"type"in i&&typeof i.type=="string"?(o===null&&(o=[]),o.push(i)):n+=q(e,i))}};return await Se(e,t,r).render(s),m(new ve(n,o))}async function je(e,t={}){let r=null,n={};return t&&await Promise.all(Object.entries(t).map(([o,s])=>O(e,s).then(a=>{a.instructions&&(r===null&&(r=[]),r.push(...a.instructions)),n[o]=a}))),{slotInstructions:r,children:n}}const ht=Symbol.for("astro:fragment"),se=Symbol.for("astro:renderer");new TextEncoder;const yt=new TextDecoder;function Te(e,t){if(Je(t)){const r=t;switch(r.type){case"directive":{const{hydration:n}=r;let o=n&&nt(e),s=n&&ot(e,n.directive),a=o?"both":s?"directive":null;if(a){let i=st(e,a,n.directive);return m(i)}else return""}case"head":return e._metadata.hasRenderedHead?"":oe(e);case"maybe-head":return e._metadata.hasRenderedHead||e._metadata.headInTree?"":oe(e);default:throw new Error(`Unknown chunk type: ${t.type}`)}}else{if(t instanceof Response)return"";if(mt(t)){let r="";const n=t;if(n.instructions)for(const o of n.instructions)r+=Te(e,o);return r+=t.toString(),r}}return t.toString()}function q(e,t){return ArrayBuffer.isView(t)?yt.decode(t):Te(e,t)}function gt(e){return!!e&&typeof e=="object"&&"render"in e&&typeof e.render=="function"}async function E(e,t){if(t=await t,t instanceof ve)e.write(t);else if(ze(t))e.write(t);else if(Array.isArray(t)){const r=t.map(n=>Ae(o=>E(o,n)));for(const n of r)n&&await n.renderToFinalDestination(e)}else if(typeof t=="function")await E(e,t());else if(typeof t=="string")e.write(m(C(t)));else if(!(!t&&t!==0))if(gt(t))await t.render(e);else if(St(t))await t.render(e);else if(At(t))await t.render(e);else if(ArrayBuffer.isView(t))e.write(t);else if(typeof t=="object"&&(Symbol.asyncIterator in t||Symbol.iterator in t))for await(const r of t)await E(e,r);else e.write(t)}const Ee=Symbol.for("astro.componentInstance");class bt{[Ee]=!0;result;props;slotValues;factory;returnValue;constructor(t,r,n,o){this.result=t,this.props=r,this.factory=o,this.slotValues={};for(const s in n){const a=n[s](t);this.slotValues[s]=()=>a}}async init(t){return this.returnValue!==void 0?this.returnValue:(this.returnValue=this.factory(t,this.props,this.slotValues),this.returnValue)}async render(t){this.returnValue===void 0&&await this.init(this.result);let r=this.returnValue;W(r)&&(r=await r),et(r)?await r.content.render(t):await E(t,r)}}function wt(e,t){if(e!=null)for(const r of Object.keys(e))r.startsWith("client:")&&console.warn(`You are attempting to render <${t} ${r} />, but ${t} is an Astro component. Astro components do not render in the client and should not have a hydration directive. Please use a framework component for client rendering.`)}function $t(e,t,r,n,o={}){wt(n,t);const s=new bt(e,n,o,r);return Xe(e,r)&&!e._metadata.propagators.has(r)&&e._metadata.propagators.set(r,s),s}function At(e){return typeof e=="object"&&!!e[Ee]}const xe=Symbol.for("astro.renderTemplateResult");class vt{[xe]=!0;htmlParts;expressions;error;constructor(t,r){this.htmlParts=t,this.error=void 0,this.expressions=r.map(n=>W(n)?Promise.resolve(n).catch(o=>{if(!this.error)throw this.error=o,o}):n)}async render(t){const r=this.expressions.map(n=>Ae(o=>{if(n||n===0)return E(o,n)}));for(let n=0;n<this.htmlParts.length;n++){const o=this.htmlParts[n],s=r[n];t.write(m(o)),s&&await s.renderToFinalDestination(t)}}}function St(e){return typeof e=="object"&&!!e[xe]}function j(e,...t){return new vt(e,t)}function jt(e){return typeof HTMLElement<"u"&&HTMLElement.isPrototypeOf(e)}async function Tt(e,t,r,n){const o=Et(t);let s="";for(const a in r)s+=` ${a}="${T(await r[a])}"`;return m(`<${o}${s}>${await O(e,n?.default)}</${o}>`)}function Et(e){const t=customElements.getName(e);return t||e.name.replace(/^HTML|Element$/g,"").replace(/[A-Z]/g,"-$&").toLowerCase().replace(/^-/,"html-")}const ie=new Map([["solid","solid-js"]]);function xt(e){switch(e?.split(".").pop()){case"svelte":return["@astrojs/svelte"];case"vue":return["@astrojs/vue"];case"jsx":case"tsx":return["@astrojs/react","@astrojs/preact","@astrojs/solid-js","@astrojs/vue (jsx)"];default:return["@astrojs/react","@astrojs/preact","@astrojs/solid-js","@astrojs/vue","@astrojs/svelte","@astrojs/lit"]}}function Rt(e){return e===ht}function Lt(e){return e&&e["astro:html"]===!0}const It=/\<\/?astro-slot\b[^>]*>/g,Ct=/\<\/?astro-static-slot\b[^>]*>/g;function Nt(e,t){const r=t?Ct:It;return e.replace(r,"")}async function Ot(e,t,r,n,o={}){if(!r&&!n["client:only"])throw new Error(`Unable to render ${t} because it is ${r}!
Did you forget to import the component or is it possible there is a typo?`);const{renderers:s,clientDirectives:a}=e,i={astroStaticSlot:!0,displayName:t},{hydration:u,isPage:y,props:p}=qe(n,a);let f="",w;u&&(i.hydrate=u.directive,i.hydrateArgs=u.value,i.componentExport=u.componentExport,i.componentUrl=u.componentUrl);const A=xt(i.componentUrl),b=s.filter(c=>c.name!=="astro:jsx"),{children:$,slotInstructions:v}=await je(e,o);let l;if(i.hydrate!=="only"){let c=!1;try{c=r&&r[se]}catch{}if(c){const d=r[se];l=s.find(({name:h})=>h===d)}if(!l){let d;for(const h of s)try{if(await h.ssr.check.call({result:e},r,p,$)){l=h;break}}catch(U){d??=U}if(!l&&d)throw d}if(!l&&typeof HTMLElement=="function"&&jt(r)){const d=await Tt(e,r,n,o);return{render(h){h.write(d)}}}}else{if(i.hydrateArgs){const c=i.hydrateArgs,d=ie.has(c)?ie.get(c):c;l=s.find(({name:h})=>h===`@astrojs/${d}`||h===d)}if(!l&&b.length===1&&(l=b[0]),!l){const c=i.componentUrl?.split(".").pop();l=s.filter(({name:d})=>d===`@astrojs/${c}`||d===c)[0]}}if(l)i.hydrate==="only"?f=await O(e,o?.fallback):{html:f,attrs:w}=await l.ssr.renderToStaticMarkup.call({result:e},r,p,$,i);else{if(i.hydrate==="only")throw new S({...P,message:P.message(i.displayName),hint:P.hint(A.map(c=>c.replace("@astrojs/","")).join("|"))});if(typeof r!="string"){const c=b.filter(h=>A.includes(h.name)),d=b.length>1;if(c.length===0)throw new S({...H,message:H.message(i.displayName,i?.componentUrl?.split(".").pop(),d,b.length),hint:H.hint(ne(A.map(h=>"`"+h+"`")))});if(c.length===1)l=c[0],{html:f,attrs:w}=await l.ssr.renderToStaticMarkup.call({result:e},r,p,$,i);else throw new Error(`Unable to render ${i.displayName}!

This component likely uses ${ne(A)},
but Astro encountered an error during server-side rendering.

Please ensure that ${i.displayName}:
1. Does not unconditionally access browser-specific globals like \`window\` or \`document\`.
   If this is unavoidable, use the \`client:only\` hydration directive.
2. Does not conditionally return \`null\` or \`undefined\` when rendered on the server.

If you're still stuck, please open an issue on GitHub or join us at https://astro.build/chat.`)}}if(l&&!l.clientEntrypoint&&l.name!=="@astrojs/lit"&&i.hydrate)throw new S({...Z,message:Z.message(t,i.hydrate,l.name)});if(!f&&typeof r=="string"){const c=Mt(r),d=Object.values($).join(""),h=j`<${c}${z(p)}${m(d===""&&we.test(c)?"/>":`>${d}</${c}>`)}`;f="";const U={write(Y){Y instanceof Response||(f+=q(e,Y))}};await h.render(U)}if(!u)return{render(c){if(v)for(const d of v)c.write(d);y||l?.name==="astro:jsx"?c.write(f):f&&f.length>0&&c.write(m(Nt(f,l?.ssr?.supportsAstroStaticSlot??!1)))}};const M=Ze(`<!--${i.componentExport.value}:${i.componentUrl}-->
${f}
${be(p,i)}`),L=await Ge({renderer:l,result:e,astroId:M,props:p,attrs:w},i);let I=[];if(f){if(Object.keys($).length>0)for(const c of Object.keys($)){let d=l?.ssr?.supportsAstroStaticSlot?i.hydrate?"astro-slot":"astro-static-slot":"astro-slot",h=c==="default"?`<${d}>`:`<${d} name="${c}">`;f.includes(h)||I.push(c)}}else I=Object.keys($);const Re=I.length>0?I.map(c=>`<template data-astro-template${c!=="default"?`="${c}"`:""}>${$[c]}</template>`).join(""):"";return L.children=`${f??""}${Re}`,L.children&&(L.props["await-children"]=""),{render(c){if(v)for(const d of v)c.write(d);c.write(pe({type:"directive",hydration:u})),c.write(m(x("astro-island",L,!1)))}}}function Mt(e){const t=/[&<>'"\s]+/g;return t.test(e)?e.trim().split(t)[0].trim():e}async function Ut(e,t={}){const r=await O(e,t?.default);return{render(n){r!=null&&n.write(r)}}}async function Ht(e,t,r,n={}){const{slotInstructions:o,children:s}=await je(e,n),a=t({slots:s}),i=o?o.map(u=>q(e,u)).join(""):"";return{render(u){u.write(m(i+a))}}}function Pt(e,t,r,n,o={}){const s=$t(e,t,r,n,o);return{async render(a){await s.render(a)}}}async function G(e,t,r,n,o={}){return W(r)&&(r=await r),Rt(r)?await Ut(e,o):(n=Dt(n),Lt(r)?await Ht(e,r,n,o):Qe(r)?Pt(e,t,r,n,o):await Ot(e,t,r,n,o))}function Dt(e){if(e["class:list"]!==void 0){const t=e["class:list"];delete e["class:list"],e.class=he(e.class,t),e.class===""&&delete e.class}return e}const _t=J(),kt=B(async(e,t,r)=>{const n=e.createAstro(_t,t,r);n.self=kt;const{id:o}=n.props;async function s(i){try{const u=new URL("https://publish.twitter.com/oembed");return u.searchParams.set("url",i),u.searchParams.set("omit_script","true"),u.searchParams.set("dnt","true"),await fetch(u).then(y=>y.json())}catch(u){console.error(`[error]  astro-embed
         ${u.status} - ${u.statusText}: Failed to fetch tweet ${i}`)}}const a=await s(o);return j`${a&&j`${G(e,"astro-embed-tweet","astro-embed-tweet",{},{default:()=>j`${R(a.html)}`})}`}`},"/Users/paul/Paulie/Dev Live/paulie-dev-2023/node_modules/@astro-community/astro-embed-twitter/Tweet.astro",void 0),Vt=/(?=(\s*))\1(?:<a [^>]*?>)??(?=(\s*))\2(?:https?:\/\/)??(?:w{3}\.)??(?:youtube\.com|youtu\.be)\/(?:watch\?v=|embed\/)??([A-Za-z0-9-_]{11})(?:[^\s<>]*)(?=(\s*))\4(?:<\/a>)??(?=(\s*))\5/;function zt(e){return e.match(Vt)?.[3]}const Ft=J(),Bt=B(async(e,t,r)=>{const n=e.createAstro(Ft,t,r);n.self=Bt;const{id:o,poster:s,...a}=n.props,i=/^[A-Za-z0-9-_]+$/;function u(f){return i.test(f)?f:zt(f)}const y=u(o),p=s||`https://i.ytimg.com/vi/${y}/hqdefault.jpg`;return j`${G(e,"lite-youtube","lite-youtube",{videoid:y,...a,style:`background-image: url('${p}');`})}`},"/Users/paul/Paulie/Dev Live/paulie-dev-2023/node_modules/@astro-community/astro-embed-youtube/YouTube.astro",void 0);class Jt extends Map{constructor(t){super(),this.maxSize=t}get(t){const r=super.get(t);return r&&this.#e(t,r),r}set(t,r){return this.#e(t,r),this.size>this.maxSize&&this.delete(this.keys().next().value),this}#e(t,r){this.delete(t),super.set(t,r)}}const ae=new Jt(1e3),ce=(...e)=>e.join(`
         `);async function Wt(e){try{const t=ae.get(e);if(t)return t;const r=await fetch(e);if(!r.ok)throw new Error(ce(`Failed to fetch ${e}`,`Error ${r.status}: ${r.statusText}`));const n=await r.json();return ae.set(e,n),n}catch(t){console.error(ce("[error]  astro-embed",t?.message??t));return}}const qt=/(?=(\s*))\1(?:<a [^>]*?>)??(?=(\s*))\2(?:https?:\/\/)??(?:w{3}\.)??(?:vimeo\.com)\/(\d{1,20})(?:[^\s<>]*)(?=(\s*))\4(?:<\/a>)??(?=(\s*))\5/;function Gt(e){return e.match(qt)?.[3]}const Yt=J(),Zt=B(async(e,t,r)=>{const n=e.createAstro(Yt,t,r);n.self=Zt;const{id:o,poster:s,params:a="",playlabel:i="Play"}=n.props,u=/^\d+$/;function y(l){return u.test(l)?l:Gt(l)}const p=y(o);let f=s;if(!f){const l=await Wt(`https://vimeo.com/api/v2/video/${p}.json`),{thumbnail_large:M}=l?.[0]||{};f=M}let[w,A]=a.split("#t=");const b=new URLSearchParams(w);A||(A=b.get("t")),b.append("autoplay","1"),b.has("dnt")||b.append("dnt","1");const $=b.get("color"),v=[];return $&&v.push(`--ltv-color: #${$}`),f&&v.push(`background-image: url('${f}')`),j`${G(e,"lite-vimeo","lite-vimeo",{"data-id":p,"data-t":A,"data-params":b.toString(),style:v.join(";")},{default:()=>j`${pt()}<button class="ltv-playbtn" type="button"${$e(i,"aria-label")}></button>`})}`},"/Users/paul/Paulie/Dev Live/paulie-dev-2023/node_modules/@astro-community/astro-embed-vimeo/Vimeo.astro",void 0);export{kt as Tweet};
