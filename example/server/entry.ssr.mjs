import{j as u,_ as ie,a as ae,F as E,s as ce,c as W,i as X,u as le,b as de,d as g,e as b,f as me,g as x,h as Y,S as ue,R as pe,Q as _e}from"./assets/@qwik-city-plan-24f12da0.mjs";/**
 * @license
 * @builder.io/qwik/server 1.2.19
 * Copyright Builder.io, Inc. All Rights Reserved.
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/BuilderIO/qwik/blob/main/LICENSE
 */var fe=(e=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(e,{get:(n,t)=>(typeof require<"u"?require:n)[t]}):e)(function(e){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+e+'" is not supported')});function be(e,n){const t=n==null?void 0:n.mapper,s=e.symbolMapper?e.symbolMapper:o=>{var a;if(t){const i=k(o),c=t[i];if(!c){if((a=globalThis.__qwik_reg_symbols)==null?void 0:a.has(i))return[o,"_"];console.error("Cannot resolve symbol",o,"in",t)}return c}};return{isServer:!0,async importSymbol(o,a,i){var w;const c=k(i),l=(w=globalThis.__qwik_reg_symbols)==null?void 0:w.get(c);if(l)return l;let m=String(a);m.endsWith(".js")||(m+=".js");const q=fe(m);if(!(i in q))throw new Error(`Q-ERROR: missing symbol '${i}' in module '${m}'.`);return q[i]},raf:()=>(console.error("server can not rerender"),Promise.resolve()),nextTick:o=>new Promise(a=>{setTimeout(()=>{a(o())})}),chunkForSymbol(o){return s(o,t)}}}async function ye(e,n){const t=be(e,n);ce(t)}var k=e=>{const n=e.lastIndexOf("_");return n>-1?e.slice(n+1):e};function v(){if(typeof performance>"u")return()=>0;const e=performance.now();return()=>(performance.now()-e)/1e6}function G(e){let n=e.base;return typeof e.base=="function"&&(n=e.base(e)),typeof n=="string"?(n.endsWith("/")||(n+="/"),n):"/build/"}var he=`((e,t)=>{const n="__q_context__",o=window,s=new Set,i=t=>e.querySelectorAll(t),a=(e,t,n=t.type)=>{i("[on"+e+"\\\\:"+n+"]").forEach((o=>f(o,e,t,n)))},r=(e,t)=>e.getAttribute(t),l=t=>{if(void 0===t._qwikjson_){let n=(t===e.documentElement?e.body:t).lastElementChild;for(;n;){if("SCRIPT"===n.tagName&&"qwik/json"===r(n,"type")){t._qwikjson_=JSON.parse(n.textContent.replace(/\\\\x3C(\\/?script)/g,"<$1"));break}n=n.previousElementSibling}}},c=(e,t)=>new CustomEvent(e,{detail:t}),f=async(t,o,s,i=s.type)=>{const a="on"+o+":"+i;t.hasAttribute("preventdefault:"+i)&&s.preventDefault();const c=t._qc_,f=null==c?void 0:c.li.filter((e=>e[0]===a));if(f&&f.length>0){for(const e of f)await e[1].getFn([t,s],(()=>t.isConnected))(s,t);return}const b=r(t,a);if(b){const o=t.closest("[q\\\\:container]"),i=new URL(r(o,"q:base"),e.baseURI);for(const a of b.split("\\n")){const r=new URL(a,i),c=r.hash.replace(/^#?([^?[|]*).*$/,"$1")||"default",f=performance.now(),b=import(
/* @vite-ignore */
r.href.split("#")[0]);l(o);const p=(await b)[c],u=e[n];if(t.isConnected)try{e[n]=[t,s,r],d("qsymbol",{symbol:c,element:t,reqTime:f}),await p(s,t)}finally{e[n]=u}}}},d=(t,n)=>{e.dispatchEvent(c(t,n))},b=e=>e.replace(/([A-Z])/g,(e=>"-"+e.toLowerCase())),p=async e=>{let t=b(e.type),n=e.target;for(a("-document",e,t);n&&n.getAttribute;)await f(n,"",e,t),n=e.bubbles&&!0!==e.cancelBubble?n.parentElement:null},u=e=>{a("-window",e,b(e.type))},w=()=>{var n;const a=e.readyState;if(!t&&("interactive"==a||"complete"==a)&&(t=1,d("qinit"),(null!=(n=o.requestIdleCallback)?n:o.setTimeout).bind(o)((()=>d("qidle"))),s.has("qvisible"))){const e=i("[on\\\\:qvisible]"),t=new IntersectionObserver((e=>{for(const n of e)n.isIntersecting&&(t.unobserve(n.target),f(n.target,"",c("qvisible",n)))}));e.forEach((e=>t.observe(e)))}},q=(e,t,n,o=!1)=>e.addEventListener(t,n,{capture:o,passive:!1}),v=t=>{for(const n of t)s.has(n)||(q(e,n,p,!0),q(o,n,u),s.add(n))};if(!e.qR){const t=o.qwikevents;Array.isArray(t)&&v(t),o.qwikevents={push:(...e)=>v(e)},q(e,"readystatechange",w),w()}})(document);`,ge=`(() => {
    ((doc, hasInitialized) => {
        const win = window;
        const events =  new Set;
        const querySelectorAll = query => doc.querySelectorAll(query);
        const broadcast = (infix, ev, type = ev.type) => {
            querySelectorAll("[on" + infix + "\\\\:" + type + "]").forEach((target => dispatch(target, infix, ev, type)));
        };
        const getAttribute = (el, name) => el.getAttribute(name);
        const resolveContainer = containerEl => {
            if (void 0 === containerEl._qwikjson_) {
                let script = (containerEl === doc.documentElement ? doc.body : containerEl).lastElementChild;
                while (script) {
                    if ("SCRIPT" === script.tagName && "qwik/json" === getAttribute(script, "type")) {
                        containerEl._qwikjson_ = JSON.parse(script.textContent.replace(/\\\\x3C(\\/?script)/g, "<$1"));
                        break;
                    }
                    script = script.previousElementSibling;
                }
            }
        };
        const createEvent = (eventName, detail) => new CustomEvent(eventName, {
            detail: detail
        });
        const dispatch = async (element, onPrefix, ev, eventName = ev.type) => {
            const attrName = "on" + onPrefix + ":" + eventName;
            element.hasAttribute("preventdefault:" + eventName) && ev.preventDefault();
            const ctx = element._qc_;
            const qrls = null == ctx ? void 0 : ctx.li.filter((li => li[0] === attrName));
            if (qrls && qrls.length > 0) {
                for (const q of qrls) {
                    await q[1].getFn([ element, ev ], (() => element.isConnected))(ev, element);
                }
                return;
            }
            const attrValue = getAttribute(element, attrName);
            if (attrValue) {
                const container = element.closest("[q\\\\:container]");
                const base = new URL(getAttribute(container, "q:base"), doc.baseURI);
                for (const qrl of attrValue.split("\\n")) {
                    const url = new URL(qrl, base);
                    const symbolName = url.hash.replace(/^#?([^?[|]*).*$/, "$1") || "default";
                    const reqTime = performance.now();
                    const module = import(
                    /* @vite-ignore */
                    url.href.split("#")[0]);
                    resolveContainer(container);
                    const handler = (await module)[symbolName];
                    const previousCtx = doc.__q_context__;
                    if (element.isConnected) {
                        try {
                            doc.__q_context__ = [ element, ev, url ];
                            emitEvent("qsymbol", {
                                symbol: symbolName,
                                element: element,
                                reqTime: reqTime
                            });
                            await handler(ev, element);
                        } finally {
                            doc.__q_context__ = previousCtx;
                        }
                    }
                }
            }
        };
        const emitEvent = (eventName, detail) => {
            doc.dispatchEvent(createEvent(eventName, detail));
        };
        const camelToKebab = str => str.replace(/([A-Z])/g, (a => "-" + a.toLowerCase()));
        const processDocumentEvent = async ev => {
            let type = camelToKebab(ev.type);
            let element = ev.target;
            broadcast("-document", ev, type);
            while (element && element.getAttribute) {
                await dispatch(element, "", ev, type);
                element = ev.bubbles && !0 !== ev.cancelBubble ? element.parentElement : null;
            }
        };
        const processWindowEvent = ev => {
            broadcast("-window", ev, camelToKebab(ev.type));
        };
        const processReadyStateChange = () => {
            var _a;
            const readyState = doc.readyState;
            if (!hasInitialized && ("interactive" == readyState || "complete" == readyState)) {
                hasInitialized = 1;
                emitEvent("qinit");
                (null != (_a = win.requestIdleCallback) ? _a : win.setTimeout).bind(win)((() => emitEvent("qidle")));
                if (events.has("qvisible")) {
                    const results = querySelectorAll("[on\\\\:qvisible]");
                    const observer = new IntersectionObserver((entries => {
                        for (const entry of entries) {
                            if (entry.isIntersecting) {
                                observer.unobserve(entry.target);
                                dispatch(entry.target, "", createEvent("qvisible", entry));
                            }
                        }
                    }));
                    results.forEach((el => observer.observe(el)));
                }
            }
        };
        const addEventListener = (el, eventName, handler, capture = !1) => el.addEventListener(eventName, handler, {
            capture: capture,
            passive: !1
        });
        const push = eventNames => {
            for (const eventName of eventNames) {
                if (!events.has(eventName)) {
                    addEventListener(doc, eventName, processDocumentEvent, !0);
                    addEventListener(win, eventName, processWindowEvent);
                    events.add(eventName);
                }
            }
        };
        if (!doc.qR) {
            const qwikevents = win.qwikevents;
            Array.isArray(qwikevents) && push(qwikevents);
            win.qwikevents = {
                push: (...e) => push(e)
            };
            addEventListener(doc, "readystatechange", processReadyStateChange);
            processReadyStateChange();
        }
    })(document);
})();`,we=`((e,t)=>{const n="__q_context__",o=window,s=new Set,i=t=>e.querySelectorAll(t),a=(e,t,n=t.type)=>{i("[on"+e+"\\\\:"+n+"]").forEach((o=>f(o,e,t,n)))},r=(e,t)=>e.getAttribute(t),l=t=>{if(void 0===t._qwikjson_){let n=(t===e.documentElement?e.body:t).lastElementChild;for(;n;){if("SCRIPT"===n.tagName&&"qwik/json"===r(n,"type")){t._qwikjson_=JSON.parse(n.textContent.replace(/\\\\x3C(\\/?script)/g,"<$1"));break}n=n.previousElementSibling}}},c=(e,t)=>new CustomEvent(e,{detail:t}),f=async(t,o,s,i=s.type)=>{const a="on"+o+":"+i;t.hasAttribute("preventdefault:"+i)&&s.preventDefault();const c=t._qc_,f=null==c?void 0:c.li.filter((e=>e[0]===a));if(f&&f.length>0){for(const e of f)await e[1].getFn([t,s],(()=>t.isConnected))(s,t);return}const b=r(t,a);if(b){const o=t.closest("[q\\\\:container]"),i=new URL(r(o,"q:base"),e.baseURI);for(const a of b.split("\\n")){const r=new URL(a,i),c=r.hash.replace(/^#?([^?[|]*).*$/,"$1")||"default",f=performance.now(),b=import(
/* @vite-ignore */
r.href.split("#")[0]);l(o);const p=(await b)[c],u=e[n];if(t.isConnected)try{e[n]=[t,s,r],d("qsymbol",{symbol:c,element:t,reqTime:f}),await p(s,t)}finally{e[n]=u}}}},d=(t,n)=>{e.dispatchEvent(c(t,n))},b=e=>e.replace(/([A-Z])/g,(e=>"-"+e.toLowerCase())),p=async e=>{let t=b(e.type),n=e.target;for(a("-document",e,t);n&&n.getAttribute;)await f(n,"",e,t),n=e.bubbles&&!0!==e.cancelBubble?n.parentElement:null},u=e=>{a("-window",e,b(e.type))},w=()=>{var n;const a=e.readyState;if(!t&&("interactive"==a||"complete"==a)&&(t=1,d("qinit"),(null!=(n=o.requestIdleCallback)?n:o.setTimeout).bind(o)((()=>d("qidle"))),s.has("qvisible"))){const e=i("[on\\\\:qvisible]"),t=new IntersectionObserver((e=>{for(const n of e)n.isIntersecting&&(t.unobserve(n.target),f(n.target,"",c("qvisible",n)))}));e.forEach((e=>t.observe(e)))}},q=(e,t,n,o=!1)=>e.addEventListener(t,n,{capture:o,passive:!1}),v=t=>{for(const n of t)s.has(n)||(q(e,n,p,!0),q(o,n,u),s.add(n))};if(!e.qR){const t=o.qwikevents;Array.isArray(t)&&v(t),o.qwikevents={push:(...e)=>v(e)},q(e,"readystatechange",w),w()}})(document);`,qe=`(() => {
    ((doc, hasInitialized) => {
        const win = window;
        const events = new Set;
        const querySelectorAll = query => doc.querySelectorAll(query);
        const broadcast = (infix, ev, type = ev.type) => {
            querySelectorAll("[on" + infix + "\\\\:" + type + "]").forEach((target => dispatch(target, infix, ev, type)));
        };
        const getAttribute = (el, name) => el.getAttribute(name);
        const resolveContainer = containerEl => {
            if (void 0 === containerEl._qwikjson_) {
                let script = (containerEl === doc.documentElement ? doc.body : containerEl).lastElementChild;
                while (script) {
                    if ("SCRIPT" === script.tagName && "qwik/json" === getAttribute(script, "type")) {
                        containerEl._qwikjson_ = JSON.parse(script.textContent.replace(/\\\\x3C(\\/?script)/g, "<$1"));
                        break;
                    }
                    script = script.previousElementSibling;
                }
            }
        };
        const createEvent = (eventName, detail) => new CustomEvent(eventName, {
            detail: detail
        });
        const dispatch = async (element, onPrefix, ev, eventName = ev.type) => {
            const attrName = "on" + onPrefix + ":" + eventName;
            element.hasAttribute("preventdefault:" + eventName) && ev.preventDefault();
            const ctx = element._qc_;
            const qrls = null == ctx ? void 0 : ctx.li.filter((li => li[0] === attrName));
            if (qrls && qrls.length > 0) {
                for (const q of qrls) {
                    await q[1].getFn([ element, ev ], (() => element.isConnected))(ev, element);
                }
                return;
            }
            const attrValue = getAttribute(element, attrName);
            if (attrValue) {
                const container = element.closest("[q\\\\:container]");
                const base = new URL(getAttribute(container, "q:base"), doc.baseURI);
                for (const qrl of attrValue.split("\\n")) {
                    const url = new URL(qrl, base);
                    const symbolName = url.hash.replace(/^#?([^?[|]*).*$/, "$1") || "default";
                    const reqTime = performance.now();
                    const module = import(
                    /* @vite-ignore */
                    url.href.split("#")[0]);
                    resolveContainer(container);
                    const handler = (await module)[symbolName];
                    const previousCtx = doc.__q_context__;
                    if (element.isConnected) {
                        try {
                            doc.__q_context__ = [ element, ev, url ];
                            emitEvent("qsymbol", {
                                symbol: symbolName,
                                element: element,
                                reqTime: reqTime
                            });
                            await handler(ev, element);
                        } finally {
                            doc.__q_context__ = previousCtx;
                        }
                    }
                }
            }
        };
        const emitEvent = (eventName, detail) => {
            doc.dispatchEvent(createEvent(eventName, detail));
        };
        const camelToKebab = str => str.replace(/([A-Z])/g, (a => "-" + a.toLowerCase()));
        const processDocumentEvent = async ev => {
            let type = camelToKebab(ev.type);
            let element = ev.target;
            broadcast("-document", ev, type);
            while (element && element.getAttribute) {
                await dispatch(element, "", ev, type);
                element = ev.bubbles && !0 !== ev.cancelBubble ? element.parentElement : null;
            }
        };
        const processWindowEvent = ev => {
            broadcast("-window", ev, camelToKebab(ev.type));
        };
        const processReadyStateChange = () => {
            var _a;
            const readyState = doc.readyState;
            if (!hasInitialized && ("interactive" == readyState || "complete" == readyState)) {
                hasInitialized = 1;
                emitEvent("qinit");
                (null != (_a = win.requestIdleCallback) ? _a : win.setTimeout).bind(win)((() => emitEvent("qidle")));
                if (events.has("qvisible")) {
                    const results = querySelectorAll("[on\\\\:qvisible]");
                    const observer = new IntersectionObserver((entries => {
                        for (const entry of entries) {
                            if (entry.isIntersecting) {
                                observer.unobserve(entry.target);
                                dispatch(entry.target, "", createEvent("qvisible", entry));
                            }
                        }
                    }));
                    results.forEach((el => observer.observe(el)));
                }
            }
        };
        const addEventListener = (el, eventName, handler, capture = !1) => el.addEventListener(eventName, handler, {
            capture: capture,
            passive: !1
        });
        const push = eventNames => {
            for (const eventName of eventNames) {
                if (!events.has(eventName)) {
                    addEventListener(doc, eventName, processDocumentEvent, !0);
                    addEventListener(win, eventName, processWindowEvent);
                    events.add(eventName);
                }
            }
        };
        if (!doc.qR) {
            const qwikevents = win.qwikevents;
            Array.isArray(qwikevents) && push(qwikevents);
            win.qwikevents = {
                push: (...e) => push(e)
            };
            addEventListener(doc, "readystatechange", processReadyStateChange);
            processReadyStateChange();
        }
    })(document);
})();`;function xe(e={}){return Array.isArray(e.events)&&e.events.length>0?(e.debug?qe:we).replace("window.qEvents",JSON.stringify(e.events)):e.debug?ge:he}function je(e,n,t){if(!t)return[];const s=n.prefetchStrategy,r=G(n);if(s!==null){if(!s||!s.symbolsToPrefetch||s.symbolsToPrefetch==="auto")return ve(e,t,r);if(typeof s.symbolsToPrefetch=="function")try{return s.symbolsToPrefetch({manifest:t.manifest})}catch(o){console.error("getPrefetchUrls, symbolsToPrefetch()",o)}}return[]}function ve(e,n,t){const s=[],r=e==null?void 0:e.qrls,{mapper:o,manifest:a}=n,i=new Map;if(Array.isArray(r))for(const c of r){const l=c.getHash(),m=o[l];m&&Z(a,i,s,t,m[1])}return s}function Z(e,n,t,s,r){const o=s+r;let a=n.get(o);if(!a){a={url:o,imports:[]},n.set(o,a);const i=e.bundles[r];if(i&&Array.isArray(i.imports))for(const c of i.imports)Z(e,n,a.imports,s,c)}t.push(a)}function ke(e){if(e!=null&&e.mapping!=null&&typeof e.mapping=="object"&&e.symbols!=null&&typeof e.symbols=="object"&&e.bundles!=null&&typeof e.bundles=="object")return e}function N(){let r=`const w=new Worker(URL.createObjectURL(new Blob(['onmessage=(e)=>{Promise.all(e.data.map(u=>fetch(u))).finally(()=>{setTimeout(postMessage({}),9999)})}'],{type:"text/javascript"})));`;return r+="w.postMessage(u.map(u=>new URL(u,origin)+''));",r+="w.onmessage=()=>{w.terminate()};",r}function S(e){const n=[],t=s=>{if(Array.isArray(s))for(const r of s)n.includes(r.url)||(n.push(r.url),t(r.imports))};return t(e),n}function Ne(e){const n=new Map;let t=0;const s=(i,c)=>{if(Array.isArray(i))for(const l of i){const m=n.get(l.url)||0;n.set(l.url,m+1),t++,c.has(l.url)||(c.add(l.url),s(l.imports,c))}},r=new Set;for(const i of e)r.clear(),s(i.imports,r);const o=t/n.size*2,a=Array.from(n.entries());return a.sort((i,c)=>c[1]-i[1]),a.slice(0,5).filter(i=>i[1]>o).map(i=>i[0])}function Ee(e,n,t){const s=Ce(e==null?void 0:e.implementation),r=[];return s.prefetchEvent==="always"&&Se(r,n,t),s.linkInsert==="html-append"&&ze(r,n,s),s.linkInsert==="js-append"?Ie(r,n,s,t):s.workerFetchInsert==="always"&&Ae(r,n,t),r.length>0?u(E,{children:r}):null}function Se(e,n,t){const s=Ne(n);for(const r of s)e.push(u("link",{rel:"modulepreload",href:r,nonce:t}));e.push(u("script",{"q:type":"prefetch-bundles",dangerouslySetInnerHTML:"document.dispatchEvent(new CustomEvent('qprefetch', {detail:{links: [location.pathname]}}))",nonce:t}))}function ze(e,n,t){const s=S(n),r=t.linkRel||"prefetch";for(const o of s){const a={};a.href=o,a.rel=r,(r==="prefetch"||r==="preload")&&o.endsWith(".js")&&(a.as="script"),e.push(u("link",a,void 0))}}function Ie(e,n,t,s){const r=t.linkRel||"prefetch";let o="";t.workerFetchInsert==="no-link-support"&&(o+="let supportsLinkRel = true;"),o+=`const u=${JSON.stringify(S(n))};`,o+="u.map((u,i)=>{",o+="const l=document.createElement('link');",o+='l.setAttribute("href",u);',o+=`l.setAttribute("rel","${r}");`,t.workerFetchInsert==="no-link-support"&&(o+="if(i===0){",o+="try{",o+=`supportsLinkRel=l.relList.supports("${r}");`,o+="}catch(e){}",o+="}"),o+="document.body.appendChild(l);",o+="});",t.workerFetchInsert==="no-link-support"&&(o+="if(!supportsLinkRel){",o+=N(),o+="}"),t.workerFetchInsert==="always"&&(o+=N()),e.push(u("script",{type:"module","q:type":"link-js",dangerouslySetInnerHTML:o,nonce:s}))}function Ae(e,n,t){let s=`const u=${JSON.stringify(S(n))};`;s+=N(),e.push(u("script",{type:"module","q:type":"prefetch-worker",dangerouslySetInnerHTML:s,nonce:t}))}function Ce(e){return e&&typeof e=="object"?e:Fe}var Fe={linkInsert:null,linkRel:null,workerFetchInsert:null,prefetchEvent:"always"},Re="<!DOCTYPE html>";async function Le(e,n){var L;let t=n.stream,s=0,r=0,o=0,a=0,i="",c;const l=((L=n.streaming)==null?void 0:L.inOrder)??{strategy:"auto",maximunInitialChunk:5e4,maximunChunk:3e4},m=n.containerTagName??"html",q=n.containerAttributes??{},w=t,V=v(),ee=G(n),p=Te(n.manifest);function z(){i&&(w.write(i),i="",s=0,o++,o===1&&(a=V()))}function I(d){const _=d.length;s+=_,r+=_,i+=d}switch(l.strategy){case"disabled":t={write:I};break;case"direct":t=w;break;case"auto":let d=0,_=!1;const T=l.maximunChunk??0,j=l.maximunInitialChunk??0;t={write(h){h==="<!--qkssr-f-->"?_||(_=!0):h==="<!--qkssr-pu-->"?d++:h==="<!--qkssr-po-->"?d--:I(h),d===0&&(_||s>=(o===0?j:T))&&(_=!1,z())}};break}m==="html"?t.write(Re):(t.write("<!--cq-->"),n.qwikLoader?(n.qwikLoader.include===void 0&&(n.qwikLoader.include="never"),n.qwikLoader.position===void 0&&(n.qwikLoader.position="bottom")):n.qwikLoader={include:"never"}),n.manifest||console.warn("Missing client manifest, loading symbols in the client might 404. Please ensure the client build has run and generated the manifest for the server build."),await ye(n,p);const A=p==null?void 0:p.manifest.injections,ne=A?A.map(d=>u(d.tag,d.attributes??{})):void 0,te=v(),C=[];let F=0,R=0;await ie(e,{stream:t,containerTagName:m,containerAttributes:q,serverData:n.serverData,base:ee,beforeContent:ne,beforeClose:async(d,_,T,j)=>{var D,$,Q,H,J,O,B;F=te();const h=v();c=await ae(d,_,void 0,j);const y=[];if(n.prefetchStrategy!==null){const f=je(c,n,p);if(f.length>0){const M=Ee(n.prefetchStrategy,f,(D=n.serverData)==null?void 0:D.nonce);M&&y.push(M)}}const oe=JSON.stringify(c.state,void 0,void 0);y.push(u("script",{type:"qwik/json",dangerouslySetInnerHTML:Ue(oe),nonce:($=n.serverData)==null?void 0:$.nonce})),c.funcs.length>0&&y.push(u("script",{"q:func":"qwik/json",dangerouslySetInnerHTML:Pe(c.funcs),nonce:(Q=n.serverData)==null?void 0:Q.nonce}));const re=!c||c.mode!=="static",U=((H=n.qwikLoader)==null?void 0:H.include)??"auto",K=U==="always"||U==="auto"&&re;if(K){const f=xe({events:(J=n.qwikLoader)==null?void 0:J.events,debug:n.debug});y.push(u("script",{id:"qwikloader",dangerouslySetInnerHTML:f,nonce:(O=n.serverData)==null?void 0:O.nonce}))}const P=Array.from(_.$events$,f=>JSON.stringify(f));if(P.length>0){let f=`window.qwikevents.push(${P.join(", ")})`;K||(f=`window.qwikevents||=[];${f}`),y.push(u("script",{dangerouslySetInnerHTML:f,nonce:(B=n.serverData)==null?void 0:B.nonce}))}return Ke(C,d),R=h(),u(E,{children:y})},manifestHash:(p==null?void 0:p.manifest.manifestHash)||"dev"}),m!=="html"&&t.write("<!--/cq-->"),z();const se=c.resources.some(d=>d._cache!==1/0);return{prefetchResources:void 0,snapshotResult:c,flushes:o,manifest:p==null?void 0:p.manifest,size:r,isStatic:!se,timing:{render:F,snapshot:R,firstFlush:a},_symbols:C}}function Te(e){if(e){if("mapper"in e)return e;if(e=ke(e),e){const n={};return Object.entries(e.mapping).forEach(([t,s])=>{n[k(t)]=[t,s]}),{mapper:n,manifest:e}}}}var Ue=e=>e.replace(/<(\/?script)/g,"\\x3C$1");function Ke(e,n){var t;for(const s of n){const r=(t=s.$componentQrl$)==null?void 0:t.getSymbol();r&&!e.includes(r)&&e.push(r)}}function Pe(e){return`document.currentScript.qFuncs=[${e.join(`,
`)}]`}const De={manifestHash:"kb2kz0",symbols:{s_02wMImzEAbk:{origin:"../../node_modules/.pnpm/@builder.io+qwik-city@1.2.19_@types+node@20.9.4_rollup@2.79.1/node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"QwikCityProvider_component_useTask",canonicalFilename:"s_02wmimzeabk",hash:"02wMImzEAbk",ctxKind:"function",ctxName:"useTask$",captures:!0,parent:"s_TxCFOy819ag",loc:[26295,35258]},s_oN3CwdDwbGM:{origin:"routes/demo/flower/index.tsx",displayName:"flower_component_useVisibleTask",canonicalFilename:"s_on3cwddwbgm",hash:"oN3CwdDwbGM",ctxKind:"function",ctxName:"useVisibleTask$",captures:!0,parent:"s_LmzIsaVlxUU",loc:[391,623]},s_8gdLBszqbaM:{origin:"../../node_modules/.pnpm/@builder.io+qwik-city@1.2.19_@types+node@20.9.4_rollup@2.79.1/node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"Link_component",canonicalFilename:"s_8gdlbszqbam",hash:"8gdLBszqbaM",ctxKind:"function",ctxName:"component$",captures:!1,loc:[37211,38862]},s_J0mUe0DHXqs:{origin:"components/starter/gauge/index.tsx",displayName:"gauge_component",canonicalFilename:"s_j0mue0dhxqs",hash:"J0mUe0DHXqs",ctxKind:"function",ctxName:"component$",captures:!1,loc:[116,1127]},s_KUR09Z0zJfU:{origin:"routes/layout.tsx",displayName:"layout_component",canonicalFilename:"s_kur09z0zjfu",hash:"KUR09Z0zJfU",ctxKind:"function",ctxName:"component$",captures:!1,loc:[926,1066]},s_LmzIsaVlxUU:{origin:"routes/demo/flower/index.tsx",displayName:"flower_component",canonicalFilename:"s_lmzisavlxuu",hash:"LmzIsaVlxUU",ctxKind:"function",ctxName:"component$",captures:!1,loc:[243,1545]},s_Nk9PlpjQm9Y:{origin:"../../node_modules/.pnpm/@builder.io+qwik-city@1.2.19_@types+node@20.9.4_rollup@2.79.1/node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"GetForm_component",canonicalFilename:"s_nk9plpjqm9y",hash:"Nk9PlpjQm9Y",ctxKind:"function",ctxName:"component$",captures:!1,loc:[48978,50329]},s_Q8Wu3fx2Bfc:{origin:"components/starter/header/header.tsx",displayName:"header_component",canonicalFilename:"s_q8wu3fx2bfc",hash:"Q8Wu3fx2Bfc",ctxKind:"function",ctxName:"component$",captures:!1,loc:[159,1082]},s_TxCFOy819ag:{origin:"../../node_modules/.pnpm/@builder.io+qwik-city@1.2.19_@types+node@20.9.4_rollup@2.79.1/node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"QwikCityProvider_component",canonicalFilename:"s_txcfoy819ag",hash:"TxCFOy819ag",ctxKind:"function",ctxName:"component$",captures:!1,loc:[23025,35545]},s_UwDt2jbfcUg:{origin:"components/starter/footer/footer.tsx",displayName:"footer_component",canonicalFilename:"s_uwdt2jbfcug",hash:"UwDt2jbfcUg",ctxKind:"function",ctxName:"component$",captures:!1,loc:[172,551]},s_WmYC5H00wtI:{origin:"../../node_modules/.pnpm/@builder.io+qwik-city@1.2.19_@types+node@20.9.4_rollup@2.79.1/node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"QwikCityMockProvider_component",canonicalFilename:"s_wmyc5h00wti",hash:"WmYC5H00wtI",ctxKind:"function",ctxName:"component$",captures:!1,loc:[35829,37092]},s_X64m0yS90jw:{origin:"routes/index.tsx",displayName:"routes_component",canonicalFilename:"s_x64m0ys90jw",hash:"X64m0yS90jw",ctxKind:"function",ctxName:"component$",captures:!1,loc:[372,3050]},s_al5uLADfhEs:{origin:"routes/demo/todolist/index.tsx",displayName:"todolist_component",canonicalFilename:"s_al5uladfhes",hash:"al5uLADfhEs",ctxKind:"function",ctxName:"component$",captures:!1,loc:[565,1631]},s_caKYKJ4GELk:{origin:"components/router-head/router-head.tsx",displayName:"RouterHead_component",canonicalFilename:"s_cakykj4gelk",hash:"caKYKJ4GELk",ctxKind:"function",ctxName:"component$",captures:!1,loc:[244,978]},s_cow80S9WG2o:{origin:"components/starter/counter/counter.tsx",displayName:"counter_component",canonicalFilename:"s_cow80s9wg2o",hash:"cow80S9WG2o",ctxKind:"function",ctxName:"component$",captures:!1,loc:[162,732]},s_e0ssiDXoeAM:{origin:"../../node_modules/.pnpm/@builder.io+qwik-city@1.2.19_@types+node@20.9.4_rollup@2.79.1/node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"RouterOutlet_component",canonicalFilename:"s_e0ssidxoeam",hash:"e0ssiDXoeAM",ctxKind:"function",ctxName:"component$",captures:!1,loc:[7931,8645]},s_hkexvcMNyK0:{origin:"components/starter/infobox/infobox.tsx",displayName:"infobox_component",canonicalFilename:"s_hkexvcmnyk0",hash:"hkexvcMNyK0",ctxKind:"function",ctxName:"component$",captures:!1,loc:[124,261]},s_hryJse7o0o4:{origin:"root.tsx",displayName:"root_component",canonicalFilename:"s_hryjse7o0o4",hash:"hryJse7o0o4",ctxKind:"function",ctxName:"component$",captures:!1,loc:[309,834]},s_jNAQZbKNt5g:{origin:"components/starter/next-steps/next-steps.tsx",displayName:"next_steps_component",canonicalFilename:"s_jnaqzbknt5g",hash:"jNAQZbKNt5g",ctxKind:"function",ctxName:"component$",captures:!1,loc:[1799,3047]},s_yrXf8TABPk0:{origin:"components/starter/hero/hero.tsx",displayName:"hero_component",canonicalFilename:"s_yrxf8tabpk0",hash:"yrXf8TABPk0",ctxKind:"function",ctxName:"component$",captures:!1,loc:[165,2448]},s_0xi2YtajgF0:{origin:"routes/demo/flower/index.tsx",displayName:"flower_component_div_input_onInput",canonicalFilename:"s_0xi2ytajgf0",hash:"0xi2YtajgF0",ctxKind:"eventHandler",ctxName:"onInput$",captures:!0,parent:"s_LmzIsaVlxUU",loc:[938,1029]},s_HmT6JmehgDo:{origin:"routes/layout.tsx",displayName:"layout_component_useStyles",canonicalFilename:"s_hmt6jmehgdo",hash:"HmT6JmehgDo",ctxKind:"function",ctxName:"useStyles$",captures:!1,parent:"s_KUR09Z0zJfU",loc:[947,953]},s_RPDJAz33WLA:{origin:"../../node_modules/.pnpm/@builder.io+qwik-city@1.2.19_@types+node@20.9.4_rollup@2.79.1/node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"QwikCityProvider_component_useStyles",canonicalFilename:"s_rpdjaz33wla",hash:"RPDJAz33WLA",ctxKind:"function",ctxName:"useStyles$",captures:!1,parent:"s_TxCFOy819ag",loc:[23080,23114]},s_9v1Hf1YRjgA:{origin:"routes/demo/flower/index.tsx",displayName:"flower_component_useStylesScoped",canonicalFilename:"s_9v1hf1yrjga",hash:"9v1Hf1YRjgA",ctxKind:"function",ctxName:"useStylesScoped$",captures:!1,parent:"s_LmzIsaVlxUU",loc:[270,276]},s_A5bZC7WO00A:{origin:"../../node_modules/.pnpm/@builder.io+qwik-city@1.2.19_@types+node@20.9.4_rollup@2.79.1/node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"routeActionQrl_action_submit",canonicalFilename:"s_a5bzc7wo00a",hash:"A5bZC7WO00A",ctxKind:"function",ctxName:"submit",captures:!0,loc:[40230,41864]},s_DyVc0YBIqQU:{origin:"../../node_modules/.pnpm/@builder.io+qwik-city@1.2.19_@types+node@20.9.4_rollup@2.79.1/node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"spa_init",canonicalFilename:"s_dyvc0ybiqqu",hash:"DyVc0YBIqQU",ctxKind:"function",ctxName:"spaInit",captures:!1,loc:[1391,6872]},s_wOIPfiQ04l4:{origin:"../../node_modules/.pnpm/@builder.io+qwik-city@1.2.19_@types+node@20.9.4_rollup@2.79.1/node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"serverQrl_stuff",canonicalFilename:"s_woipfiq04l4",hash:"wOIPfiQ04l4",ctxKind:"function",ctxName:"stuff",captures:!0,loc:[44878,46864]},s_6Ju0tW0w5aI:{origin:"components/starter/next-steps/next-steps.tsx",displayName:"next_steps_component_div_button_onClick",canonicalFilename:"s_6ju0tw0w5ai",hash:"6Ju0tW0w5aI",ctxKind:"eventHandler",ctxName:"onClick$",captures:!0,parent:"s_jNAQZbKNt5g",loc:[2696,2728]},s_6m0siUSeDh8:{origin:"components/starter/next-steps/next-steps.tsx",displayName:"next_steps_component_useOnWindow",canonicalFilename:"s_6m0siusedh8",hash:"6m0siUSeDh8",ctxKind:"function",ctxName:"$",captures:!0,parent:"s_jNAQZbKNt5g",loc:[1887,1995]},s_BUbtvTyvVRE:{origin:"../../node_modules/.pnpm/@builder.io+qwik-city@1.2.19_@types+node@20.9.4_rollup@2.79.1/node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"QwikCityMockProvider_component_goto",canonicalFilename:"s_bubtvtyvvre",hash:"BUbtvTyvVRE",ctxKind:"function",ctxName:"goto",captures:!1,parent:"s_WmYC5H00wtI",loc:[36230,36291]},s_Tr4mXxF6f60:{origin:"components/starter/next-steps/next-steps.tsx",displayName:"next_steps_component_div_button_onClick_1",canonicalFilename:"s_tr4mxxf6f60",hash:"Tr4mXxF6f60",ctxKind:"eventHandler",ctxName:"onClick$",captures:!0,parent:"s_jNAQZbKNt5g",loc:[2936,2972]},s_YkPYwfECpq4:{origin:"components/starter/counter/counter.tsx",displayName:"counter_component_setCount",canonicalFilename:"s_ykpywfecpq4",hash:"YkPYwfECpq4",ctxKind:"function",ctxName:"$",captures:!0,parent:"s_cow80S9WG2o",loc:[223,340]},s_eBQ0vFsFKsk:{origin:"../../node_modules/.pnpm/@builder.io+qwik-city@1.2.19_@types+node@20.9.4_rollup@2.79.1/node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"Link_component_onPrefetch_event",canonicalFilename:"s_ebq0vfsfksk",hash:"eBQ0vFsFKsk",ctxKind:"function",ctxName:"event$",captures:!1,parent:"s_8gdLBszqbaM",loc:[37738,37801]},s_fX0bDjeJa0E:{origin:"../../node_modules/.pnpm/@builder.io+qwik-city@1.2.19_@types+node@20.9.4_rollup@2.79.1/node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"QwikCityProvider_component_goto",canonicalFilename:"s_fx0bdjeja0e",hash:"fX0bDjeJa0E",ctxKind:"function",ctxName:"goto",captures:!0,parent:"s_TxCFOy819ag",loc:[24364,25683]},s_hIs0AEB7UHI:{origin:"components/starter/hero/hero.tsx",displayName:"hero_component_div_div_button_onClick",canonicalFilename:"s_his0aeb7uhi",hash:"hIs0AEB7UHI",ctxKind:"eventHandler",ctxName:"onClick$",captures:!1,parent:"s_yrXf8TABPk0",loc:[555,2190]},s_i1Cv0pYJNR0:{origin:"../../node_modules/.pnpm/@builder.io+qwik-city@1.2.19_@types+node@20.9.4_rollup@2.79.1/node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"Link_component_handleClick_event",canonicalFilename:"s_i1cv0pyjnr0",hash:"i1Cv0pYJNR0",ctxKind:"function",ctxName:"event$",captures:!0,parent:"s_8gdLBszqbaM",loc:[37919,38434]},s_mUX1sewpF0c:{origin:"components/starter/counter/counter.tsx",displayName:"counter_component_div_button_onClick_1",canonicalFilename:"s_mux1sewpf0c",hash:"mUX1sewpF0c",ctxKind:"eventHandler",ctxName:"onClick$",captures:!0,parent:"s_cow80S9WG2o",loc:[648,679]},s_p9MSze0ojs4:{origin:"../../node_modules/.pnpm/@builder.io+qwik-city@1.2.19_@types+node@20.9.4_rollup@2.79.1/node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"GetForm_component_form_onSubmit",canonicalFilename:"s_p9msze0ojs4",hash:"p9MSze0ojs4",ctxKind:"function",ctxName:"_jsxS",captures:!0,parent:"s_Nk9PlpjQm9Y",loc:[49285,49982]},s_qD7GZY5npAA:{origin:"components/starter/counter/counter.tsx",displayName:"counter_component_div_button_onClick",canonicalFilename:"s_qd7gzy5npaa",hash:"qD7GZY5npAA",ctxKind:"eventHandler",ctxName:"onClick$",captures:!0,parent:"s_cow80S9WG2o",loc:[472,503]}},mapping:{s_02wMImzEAbk:"q-4989a1ba.js",s_oN3CwdDwbGM:"q-94a7e376.js",s_8gdLBszqbaM:"q-1aea4ecb.js",s_J0mUe0DHXqs:"q-e94f4c23.js",s_KUR09Z0zJfU:"q-572b1393.js",s_LmzIsaVlxUU:"q-94a7e376.js",s_Nk9PlpjQm9Y:"q-ee3e1356.js",s_Q8Wu3fx2Bfc:"q-2fffa670.js",s_TxCFOy819ag:"q-4989a1ba.js",s_UwDt2jbfcUg:"q-1c0c5a8b.js",s_WmYC5H00wtI:"q-46d4895b.js",s_X64m0yS90jw:"q-ee533594.js",s_al5uLADfhEs:"q-24e1a327.js",s_caKYKJ4GELk:"q-8ac48c5c.js",s_cow80S9WG2o:"q-5df0e993.js",s_e0ssiDXoeAM:"q-d6dd5a06.js",s_hkexvcMNyK0:"q-546b94ba.js",s_hryJse7o0o4:"q-9be97e8b.js",s_jNAQZbKNt5g:"q-2616b0c9.js",s_yrXf8TABPk0:"q-39b7baa0.js",s_0xi2YtajgF0:"q-94a7e376.js",s_HmT6JmehgDo:"q-572b1393.js",s_RPDJAz33WLA:"q-4989a1ba.js",s_9v1Hf1YRjgA:"q-94a7e376.js",s_A5bZC7WO00A:"q-b71048a8.js",s_DyVc0YBIqQU:"q-663033b0.js",s_wOIPfiQ04l4:"q-d5661be2.js",s_6Ju0tW0w5aI:"q-2616b0c9.js",s_6m0siUSeDh8:"q-2616b0c9.js",s_BUbtvTyvVRE:"q-46d4895b.js",s_Tr4mXxF6f60:"q-2616b0c9.js",s_YkPYwfECpq4:"q-5df0e993.js",s_eBQ0vFsFKsk:"q-8f0f4295.js",s_fX0bDjeJa0E:"q-4989a1ba.js",s_hIs0AEB7UHI:"q-9b821217.js",s_i1Cv0pYJNR0:"q-1aea4ecb.js",s_mUX1sewpF0c:"q-5df0e993.js",s_p9MSze0ojs4:"q-ee3e1356.js",s_qD7GZY5npAA:"q-5df0e993.js"},bundles:{"q-1aea4ecb.js":{size:1144,imports:["q-6f466f0d.js","q-e2e8d281.js"],dynamicImports:["q-8f0f4295.js"],origins:["src/entry_Link.js","src/s_8gdlbszqbam.js","src/s_i1cv0pyjnr0.js"],symbols:["s_8gdLBszqbaM","s_i1Cv0pYJNR0"]},"q-1c0c5a8b.js":{size:550,imports:["q-6f466f0d.js","q-c5346634.js","q-e2e8d281.js"],origins:["src/components/starter/footer/footer.module.css?used","src/entry_footer.js","src/s_uwdt2jbfcug.js"],symbols:["s_UwDt2jbfcUg"]},"q-23872776.js":{size:125,imports:["q-6f466f0d.js"],dynamicImports:["q-36719f3a.js"],origins:["@qwik-city-entries"]},"q-24e1a327.js":{size:1202,imports:["q-48bc7458.js","q-6f466f0d.js","q-e2e8d281.js"],origins:["src/entry_todolist.js","src/routes/demo/todolist/todolist.module.css?used","src/s_al5uladfhes.js"],symbols:["s_al5uLADfhEs"]},"q-2616b0c9.js":{size:1503,imports:["q-66e926d0.js","q-6f466f0d.js"],origins:["src/components/starter/next-steps/next-steps.module.css?used","src/entry_next_steps.js","src/s_6ju0tw0w5ai.js","src/s_6m0siusedh8.js","src/s_jnaqzbknt5g.js","src/s_tr4mxxf6f60.js"],symbols:["s_6Ju0tW0w5aI","s_6m0siUSeDh8","s_jNAQZbKNt5g","s_Tr4mXxF6f60"]},"q-2fffa670.js":{size:3824,imports:["q-6f466f0d.js"],origins:["src/components/starter/header/header.module.css?used","src/components/starter/icons/qwik.tsx","src/entry_header.js","src/s_q8wu3fx2bfc.js"],symbols:["s_Q8Wu3fx2Bfc"]},"q-36719f3a.js":{size:19485,origins:["../node_modules/.pnpm/@builder.io+qwik-city@1.2.19_@types+node@20.9.4_rollup@2.79.1/node_modules/@builder.io/qwik-city/service-worker.mjs","../node_modules/.pnpm/workbox-core@7.0.0/node_modules/workbox-core/_private/Deferred.js","../node_modules/.pnpm/workbox-core@7.0.0/node_modules/workbox-core/_private/WorkboxError.js","../node_modules/.pnpm/workbox-core@7.0.0/node_modules/workbox-core/_private/cacheMatchIgnoreParams.js","../node_modules/.pnpm/workbox-core@7.0.0/node_modules/workbox-core/_private/cacheNames.js","../node_modules/.pnpm/workbox-core@7.0.0/node_modules/workbox-core/_private/canConstructResponseFromBodyStream.js","../node_modules/.pnpm/workbox-core@7.0.0/node_modules/workbox-core/_private/executeQuotaErrorCallbacks.js","../node_modules/.pnpm/workbox-core@7.0.0/node_modules/workbox-core/_private/getFriendlyURL.js","../node_modules/.pnpm/workbox-core@7.0.0/node_modules/workbox-core/_private/logger.js","../node_modules/.pnpm/workbox-core@7.0.0/node_modules/workbox-core/_private/timeout.js","../node_modules/.pnpm/workbox-core@7.0.0/node_modules/workbox-core/_private/waitUntil.js","../node_modules/.pnpm/workbox-core@7.0.0/node_modules/workbox-core/_version.js","../node_modules/.pnpm/workbox-core@7.0.0/node_modules/workbox-core/copyResponse.js","../node_modules/.pnpm/workbox-core@7.0.0/node_modules/workbox-core/models/messages/messageGenerator.js","../node_modules/.pnpm/workbox-core@7.0.0/node_modules/workbox-core/models/quotaErrorCallbacks.js","../node_modules/.pnpm/workbox-precaching@7.0.0/node_modules/workbox-precaching/PrecacheController.js","../node_modules/.pnpm/workbox-precaching@7.0.0/node_modules/workbox-precaching/PrecacheRoute.js","../node_modules/.pnpm/workbox-precaching@7.0.0/node_modules/workbox-precaching/PrecacheStrategy.js","../node_modules/.pnpm/workbox-precaching@7.0.0/node_modules/workbox-precaching/_version.js","../node_modules/.pnpm/workbox-precaching@7.0.0/node_modules/workbox-precaching/addRoute.js","../node_modules/.pnpm/workbox-precaching@7.0.0/node_modules/workbox-precaching/cleanupOutdatedCaches.js","../node_modules/.pnpm/workbox-precaching@7.0.0/node_modules/workbox-precaching/createHandlerBoundToURL.js","../node_modules/.pnpm/workbox-precaching@7.0.0/node_modules/workbox-precaching/precache.js","../node_modules/.pnpm/workbox-precaching@7.0.0/node_modules/workbox-precaching/precacheAndRoute.js","../node_modules/.pnpm/workbox-precaching@7.0.0/node_modules/workbox-precaching/utils/PrecacheCacheKeyPlugin.js","../node_modules/.pnpm/workbox-precaching@7.0.0/node_modules/workbox-precaching/utils/PrecacheInstallReportPlugin.js","../node_modules/.pnpm/workbox-precaching@7.0.0/node_modules/workbox-precaching/utils/createCacheKey.js","../node_modules/.pnpm/workbox-precaching@7.0.0/node_modules/workbox-precaching/utils/deleteOutdatedCaches.js","../node_modules/.pnpm/workbox-precaching@7.0.0/node_modules/workbox-precaching/utils/generateURLVariations.js","../node_modules/.pnpm/workbox-precaching@7.0.0/node_modules/workbox-precaching/utils/getOrCreatePrecacheController.js","../node_modules/.pnpm/workbox-precaching@7.0.0/node_modules/workbox-precaching/utils/removeIgnoredSearchParams.js","../node_modules/.pnpm/workbox-routing@7.0.0/node_modules/workbox-routing/NavigationRoute.js","../node_modules/.pnpm/workbox-routing@7.0.0/node_modules/workbox-routing/RegExpRoute.js","../node_modules/.pnpm/workbox-routing@7.0.0/node_modules/workbox-routing/Route.js","../node_modules/.pnpm/workbox-routing@7.0.0/node_modules/workbox-routing/Router.js","../node_modules/.pnpm/workbox-routing@7.0.0/node_modules/workbox-routing/_version.js","../node_modules/.pnpm/workbox-routing@7.0.0/node_modules/workbox-routing/registerRoute.js","../node_modules/.pnpm/workbox-routing@7.0.0/node_modules/workbox-routing/utils/constants.js","../node_modules/.pnpm/workbox-routing@7.0.0/node_modules/workbox-routing/utils/getOrCreateDefaultRouter.js","../node_modules/.pnpm/workbox-routing@7.0.0/node_modules/workbox-routing/utils/normalizeHandler.js","../node_modules/.pnpm/workbox-strategies@7.0.0/node_modules/workbox-strategies/Strategy.js","../node_modules/.pnpm/workbox-strategies@7.0.0/node_modules/workbox-strategies/StrategyHandler.js","../node_modules/.pnpm/workbox-strategies@7.0.0/node_modules/workbox-strategies/_version.js","src/routes/service-worker.ts"]},"q-39b7baa0.js":{size:1146,imports:["q-6f466f0d.js"],dynamicImports:["q-9b821217.js"],origins:["src/components/starter/hero/hero.module.css?used","src/entry_hero.js","src/media/thunder.png?jsx","src/s_yrxf8tabpk0.js"],symbols:["s_yrXf8TABPk0"]},"q-3c77995b.js":{size:241,imports:["q-6f466f0d.js"],dynamicImports:["q-94a7e376.js"],origins:["src/routes/demo/flower/index.tsx"]},"q-46d4895b.js":{size:787,imports:["q-6f466f0d.js","q-e2e8d281.js"],origins:["src/entry_QwikCityMockProvider.js","src/s_bubtvtyvvre.js","src/s_wmyc5h00wti.js"],symbols:["s_BUbtvTyvVRE","s_WmYC5H00wtI"]},"q-48bc7458.js":{size:411,imports:["q-6f466f0d.js","q-e2e8d281.js"],dynamicImports:["q-24e1a327.js"],origins:["src/routes/demo/todolist/index.tsx"]},"q-4989a1ba.js":{size:5847,imports:["q-6f466f0d.js","q-e2e8d281.js"],dynamicImports:["q-23872776.js","q-3c77995b.js","q-48bc7458.js","q-a2299a53.js","q-c5346634.js"],origins:["@qwik-city-plan","src/entry_QwikCityProvider.js","src/s_02wmimzeabk.js","src/s_fx0bdjeja0e.js","src/s_rpdjaz33wla.js","src/s_txcfoy819ag.js"],symbols:["s_02wMImzEAbk","s_fX0bDjeJa0E","s_RPDJAz33WLA","s_TxCFOy819ag"]},"q-546b94ba.js":{size:261,imports:["q-6f466f0d.js"],origins:["src/components/starter/infobox/infobox.module.css?used","src/entry_infobox.js","src/s_hkexvcmnyk0.js"],symbols:["s_hkexvcMNyK0"]},"q-572b1393.js":{size:5401,imports:["q-6f466f0d.js"],dynamicImports:["q-1c0c5a8b.js","q-2fffa670.js"],origins:["src/components/starter/footer/footer.tsx","src/components/starter/header/header.tsx","src/entry_layout.js","src/routes/styles.css?used&inline","src/s_hmt6jmehgdo.js","src/s_kur09z0zjfu.js"],symbols:["s_HmT6JmehgDo","s_KUR09Z0zJfU"]},"q-5df0e993.js":{size:1163,imports:["q-6f466f0d.js"],dynamicImports:["q-e94f4c23.js"],origins:["src/components/starter/counter/counter.module.css?used","src/components/starter/gauge/index.tsx","src/entry_counter.js","src/s_cow80s9wg2o.js","src/s_mux1sewpf0c.js","src/s_qd7gzy5npaa.js","src/s_ykpywfecpq4.js"],symbols:["s_cow80S9WG2o","s_mUX1sewpF0c","s_qD7GZY5npAA","s_YkPYwfECpq4"]},"q-663033b0.js":{size:2286,origins:["src/entry_spaInit.js","src/s_dyvc0ybiqqu.js"],symbols:["s_DyVc0YBIqQU"]},"q-66e926d0.js":{size:1666,imports:["q-6f466f0d.js"],dynamicImports:["q-2616b0c9.js"],origins:["src/components/starter/next-steps/next-steps.tsx"]},"q-6f466f0d.js":{size:50638,origins:["../node_modules/.pnpm/@builder.io+qwik@1.2.19_@types+node@20.9.4_undici@5.27.2/node_modules/@builder.io/qwik/core.min.mjs"]},"q-8ac48c5c.js":{size:765,imports:["q-6f466f0d.js","q-e2e8d281.js"],origins:["src/entry_RouterHead.js","src/s_cakykj4gelk.js"],symbols:["s_caKYKJ4GELk"]},"q-8f0f4295.js":{size:128,imports:["q-6f466f0d.js","q-e2e8d281.js"],origins:["src/s_ebq0vfsfksk.js"],symbols:["s_eBQ0vFsFKsk"]},"q-94a7e376.js":{size:2693,imports:["q-6f466f0d.js","q-e2e8d281.js"],origins:["src/entry_flower.js","src/routes/demo/flower/flower.css?used&inline","src/s_0xi2ytajgf0.js","src/s_9v1hf1yrjga.js","src/s_lmzisavlxuu.js","src/s_on3cwddwbgm.js"],symbols:["s_0xi2YtajgF0","s_9v1Hf1YRjgA","s_LmzIsaVlxUU","s_oN3CwdDwbGM"]},"q-9b821217.js":{size:695,origins:["src/s_his0aeb7uhi.js"],symbols:["s_hIs0AEB7UHI"]},"q-9be97e8b.js":{size:541,imports:["q-6f466f0d.js","q-e2e8d281.js"],dynamicImports:["q-8ac48c5c.js"],origins:["src/components/router-head/router-head.tsx","src/entry_root.js","src/s_hryjse7o0o4.js"],symbols:["s_hryJse7o0o4"]},"q-a2299a53.js":{size:305,imports:["q-6f466f0d.js"],dynamicImports:["q-ee533594.js"],origins:["src/routes/index.tsx"]},"q-b71048a8.js":{size:751,imports:["q-6f466f0d.js"],origins:["src/entry_routeActionQrl.js","src/s_a5bzc7wo00a.js"],symbols:["s_A5bZC7WO00A"]},"q-c5346634.js":{size:380,imports:["q-6f466f0d.js","q-e2e8d281.js"],dynamicImports:["q-572b1393.js"],origins:["src/routes/layout.tsx"]},"q-d5661be2.js":{size:889,imports:["q-6f466f0d.js","q-e2e8d281.js"],origins:["src/entry_serverQrl.js","src/s_woipfiq04l4.js"],symbols:["s_wOIPfiQ04l4"]},"q-d6dd5a06.js":{size:467,imports:["q-6f466f0d.js","q-e2e8d281.js"],origins:["src/entry_RouterOutlet.js","src/s_e0ssidxoeam.js"],symbols:["s_e0ssiDXoeAM"]},"q-df88ec76.js":{size:207,imports:["q-6f466f0d.js"],dynamicImports:["q-9be97e8b.js"],origins:["src/global.css","src/root.tsx"]},"q-e2e8d281.js":{size:9327,imports:["q-6f466f0d.js"],dynamicImports:["q-4989a1ba.js","q-663033b0.js","q-b71048a8.js","q-d6dd5a06.js","q-ee3e1356.js"],origins:["../node_modules/.pnpm/@builder.io+qwik-city@1.2.19_@types+node@20.9.4_rollup@2.79.1/node_modules/@builder.io/qwik-city/index.qwik.mjs","@qwik-city-sw-register"]},"q-e94f4c23.js":{size:955,imports:["q-6f466f0d.js"],origins:["src/components/starter/gauge/gauge.module.css?used","src/entry_gauge.js","src/s_j0mue0dhxqs.js"],symbols:["s_J0mUe0DHXqs"]},"q-ee3e1356.js":{size:1032,imports:["q-6f466f0d.js","q-e2e8d281.js"],origins:["src/entry_GetForm.js","src/s_nk9plpjqm9y.js","src/s_p9msze0ojs4.js"],symbols:["s_Nk9PlpjQm9Y","s_p9MSze0ojs4"]},"q-ee533594.js":{size:2833,imports:["q-66e926d0.js","q-6f466f0d.js"],dynamicImports:["q-39b7baa0.js","q-546b94ba.js","q-5df0e993.js"],origins:["src/components/starter/counter/counter.tsx","src/components/starter/hero/hero.tsx","src/components/starter/infobox/infobox.tsx","src/entry_routes.js","src/s_x64m0ys90jw.js"],symbols:["s_X64m0yS90jw"]}},injections:[{tag:"style",location:"head",attributes:{"data-src":"/build/q-027f67b0.css",dangerouslySetInnerHTML:`._counter-wrapper_43sys_1{margin-top:50px;display:flex;align-items:center;justify-content:center;gap:10px}@media screen and (min-width: 768px){._counter-wrapper_43sys_1{gap:30px}}._anchor_1g8hj_1{color:#fff!important;display:block;font-size:.8rem;text-align:center;text-decoration:none;line-height:1.5}._anchor_1g8hj_1 span:not(._spacer_1g8hj_10){display:block}._spacer_1g8hj_10{display:none;padding:0 15px}@media screen and (min-width: 768px){._anchor_1g8hj_1 span{display:inline!important}}._wrapper_1v6hy_1{position:relative}._gauge_1v6hy_5{width:160px}._value_1v6hy_9{position:absolute;top:50%;left:50%;color:#fff;font-size:3rem;transform:translate(-50%,-50%);width:200px;text-align:center}@media screen and (min-width: 768px){._gauge_1v6hy_5{width:400px}._value_1v6hy_9{font-size:7rem}}._wrapper_tofv3_1{display:flex;align-items:center;justify-content:space-between}._logo_tofv3_7{display:inline-block}._logo_tofv3_7 a{display:block}._header_tofv3_14 ul{margin:0;padding:0;list-style:none;display:flex;gap:30px}._header_tofv3_14 li{display:none;margin:0;padding:0;font-size:.7rem}._header_tofv3_14 li a{color:#fff;display:inline-block;padding:0;text-decoration:none}._header_tofv3_14 li a:hover{color:var(--qwik-light-blue)}@media (min-width: 450px){._header_tofv3_14 li{display:inline-block}}._hero_resu5_1{display:flex;vertical-align:middle;flex-direction:column;flex-wrap:nowrap;align-items:center;height:450px;justify-content:center;gap:40px}._hero-image_resu5_12{width:100%;position:absolute;height:auto;object-fit:cover;z-index:-1;opacity:.2;pointer-events:none}._hero_resu5_1 p{color:#fff;margin:0;font-size:1rem}._button-group_resu5_28{display:flex;flex-direction:row;gap:24px}@media screen and (min-width: 768px){._hero_resu5_1{gap:60px;height:500px}._hero_resu5_1 p{font-size:1.3rem}}._infobox_oa4r7_1{color:#fff;font-size:.8rem;line-height:2;margin:0 0 40px}._infobox_oa4r7_1 h3{font-size:1rem;font-weight:400;margin:0 0 15px;padding:0}._infobox_oa4r7_1 li{line-height:2.5}@media screen and (min-width: 600px){._infobox_oa4r7_1{margin:0}}._gettingstarted_32zqp_1{display:flex;color:#fff;flex-direction:column;justify-content:center;align-items:center;height:280px;line-height:1.5;gap:10px;max-width:600px;margin:0 auto}._gettingstarted_32zqp_1 ._intro_32zqp_14{font-size:1rem;width:100%;word-break:break-word}._gettingstarted_32zqp_1 ._hint_32zqp_19{font-size:.8rem}._gettingstarted_32zqp_1 ._hint_32zqp_19 a{color:var(--qwik-dark-purple)}@media screen and (min-width: 768px){._gettingstarted_32zqp_1{height:180px}._gettingstarted_32zqp_1 ._intro_32zqp_14{font-size:1.2rem}._gettingstarted_32zqp_1 ._hint_32zqp_19{font-size:1rem}}._list_1ofyy_1{display:flex;flex-direction:column;gap:20px;color:#fff}._list_1ofyy_1,._empty_1ofyy_9{min-height:250px}._list_1ofyy_1 li{list-style:none}._empty_1ofyy_9{color:#fff;display:block}._input_1ofyy_22{background:white;color:var(--qwik-light-blue);border:none;border-radius:8px;padding:15px 20px;margin-right:10px;font-size:.8rem}._hint_1ofyy_32{font-size:.8rem;color:#fff;margin-top:30px}@media screen and (min-width: 768px){._input_1ofyy_22{padding:23px 35px;margin-right:20px;font-size:1rem}}:root{--qwik-dark-blue: #006ce9;--qwik-light-blue: #18b6f6;--qwik-light-purple: #ac7ff4;--qwik-dark-purple: #713fc2;--qwik-dirty-black: #1d2033;--qwik-dark-background: #151934;--qwik-dark-text: #ffffff}html{line-height:1;-webkit-text-size-adjust:100%;-moz-tab-size:4;-o-tab-size:4;tab-size:4;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji"}body{padding:0;margin:0;line-height:inherit}html{-webkit-text-size-adjust:100%;-moz-tab-size:4;-o-tab-size:4;tab-size:4;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji"}body{padding:0;line-height:inherit}
`}}],version:"1",options:{target:"client",buildMode:"production",entryStrategy:{type:"smart"}},platform:{qwik:"1.2.19",vite:"",rollup:"3.29.4",env:"node",os:"linux",node:"20.10.0"}},$e=()=>{const e=le(),n=de();return g(E,{children:[b("title",null,null,e.title,1,null),b("link",null,{href:me(t=>t.url.href,[n],"p0.url.href"),rel:"canonical"},null,3,null),b("meta",null,{content:"width=device-width, initial-scale=1.0",name:"viewport"},null,3,null),b("link",null,{href:"/favicon.svg",rel:"icon",type:"image/svg+xml"},null,3,null),e.meta.map(t=>x("meta",{...t},null,0,t.key)),e.links.map(t=>x("link",{...t},null,0,t.key)),e.styles.map(t=>x("style",{...t.props,dangerouslySetInnerHTML:Y(t,"style")},null,0,t.key)),e.scripts.map(t=>x("script",{...t.props,dangerouslySetInnerHTML:Y(t,"script")},null,0,t.key))]},1,"2d_0")},Qe=W(X($e,"s_caKYKJ4GELk"));const He=()=>g(_e,{children:[b("head",null,null,[b("meta",null,{charSet:"utf-8"},null,3,null),b("link",null,{href:"/manifest.json",rel:"manifest"},null,3,null),g(Qe,null,3,"vS_0"),g(ue,null,3,"vS_1")],1,null),b("body",null,{lang:"en"},g(pe,null,3,"vS_2"),1,null)]},1,"vS_3"),Je=W(X(He,"s_hryJse7o0o4"));function Me(e){return Le(g(Je,null,3,"OZ_0"),{manifest:De,...e,containerAttributes:{lang:"en-us",...e.containerAttributes}})}export{Me as default};
