"use strict";(self.webpackChunkwebpackWcBlocksMainJsonp=self.webpackChunkwebpackWcBlocksMainJsonp||[]).push([[3037],{921:(t,o,e)=>{e.r(o),e.d(o,{Block:()=>u,default:()=>d});var l=e(9196),n=e(7608),r=e.n(n),s=e(2864),a=e(947),c=e(5736),i=e(721);const u=t=>{const{textAlign:o}=t,e=(0,a.F)(t),{product:n}=(0,s.useProductDataContext)(),i=r()(e.className,"wc-block-components-product-average-rating",{[`has-text-align-${o}`]:o});return(0,l.createElement)("div",{className:i,style:e.style},Number(n.average_rating)>0?n.average_rating:(0,c.__)("No ratings","woocommerce"))},d=(0,i.withProductDataContext)(u)},947:(t,o,e)=>{e.d(o,{F:()=>c});var l=e(7608),n=e.n(l),r=e(6946),s=e(3392),a=e(172);const c=t=>{const o=(t=>{const o=(0,r.isObject)(t)?t:{style:{}};let e=o.style;return(0,r.isString)(e)&&(e=JSON.parse(e)||{}),(0,r.isObject)(e)||(e={}),{...o,style:e}})(t),e=(0,a.vc)(o),l=(0,a.l8)(o),c=(0,a.su)(o),i=(0,s.f)(o);return{className:n()(i.className,e.className,l.className,c.className),style:{...i.style,...e.style,...l.style,...c.style}}}},3392:(t,o,e)=>{e.d(o,{f:()=>n});var l=e(6946);const n=t=>{const o=(0,l.isObject)(t.style.typography)?t.style.typography:{},e=(0,l.isString)(o.fontFamily)?o.fontFamily:"";return{className:t.fontFamily?`has-${t.fontFamily}-font-family`:e,style:{fontSize:t.fontSize?`var(--wp--preset--font-size--${t.fontSize})`:o.fontSize,fontStyle:o.fontStyle,fontWeight:o.fontWeight,letterSpacing:o.letterSpacing,lineHeight:o.lineHeight,textDecoration:o.textDecoration,textTransform:o.textTransform}}}},172:(t,o,e)=>{e.d(o,{l8:()=>d,su:()=>v,vc:()=>u});var l=e(7608),n=e.n(l),r=e(7427),s=e(2289),a=e(6946);function c(t={}){const o={};return(0,s.getCSSRules)(t,{selector:""}).forEach((t=>{o[t.key]=t.value})),o}function i(t,o){return t&&o?`has-${(0,r.o)(o)}-${t}`:""}function u(t){var o,e,l,r,s,u,d;const{backgroundColor:v,textColor:y,gradient:f,style:g}=t,m=i("background-color",v),b=i("color",y),p=function(t){if(t)return`has-${t}-gradient-background`}(f),h=p||(null==g||null===(o=g.color)||void 0===o?void 0:o.gradient);return{className:n()(b,p,{[m]:!h&&!!m,"has-text-color":y||(null==g||null===(e=g.color)||void 0===e?void 0:e.text),"has-background":v||(null==g||null===(l=g.color)||void 0===l?void 0:l.background)||f||(null==g||null===(r=g.color)||void 0===r?void 0:r.gradient),"has-link-color":(0,a.isObject)(null==g||null===(s=g.elements)||void 0===s?void 0:s.link)?null==g||null===(u=g.elements)||void 0===u||null===(d=u.link)||void 0===d?void 0:d.color:void 0}),style:c({color:(null==g?void 0:g.color)||{}})}}function d(t){var o;const e=(null===(o=t.style)||void 0===o?void 0:o.border)||{};return{className:function(t){var o;const{borderColor:e,style:l}=t,r=e?i("border-color",e):"";return n()({"has-border-color":!!e||!(null==l||null===(o=l.border)||void 0===o||!o.color),[r]:!!r})}(t),style:c({border:e})}}function v(t){var o;return{className:void 0,style:c({spacing:(null===(o=t.style)||void 0===o?void 0:o.spacing)||{}})}}}}]);