(()=>{"use strict";var e,t={39:()=>{const e=window.wp.blocks,t=window.wp.components,l=window.wp.blockEditor,o=window.wp.data,a=window.wp.element,r=window.wp.i18n,n=window.ReactJSXRuntime,s=e=>{const{tagName:t,id:l,tagHref:o,tagRel:r,tagTarget:n,style:s,className:i,children:c}=e;return(0,a.createElement)(t,{className:i,id:l,href:o,rel:r,target:n,style:s},c)},i=({attributes:e,setAttributes:l})=>(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.SelectControl,{label:(0,r.__)("Tag","smart-tag-block"),value:e.tagName,options:[{label:"<div>",value:"div"},{label:"<header>",value:"header"},{label:"<main>",value:"main"},{label:"<section>",value:"section"},{label:"<article>",value:"article"},{label:"<aside>",value:"aside"},{label:"<footer>",value:"footer"},{label:"<a>",value:"a"}],onChange:e=>l({tagName:e})}),"a"===e.tagName&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.TextControl,{label:(0,r.__)("Link to (href)","smart-tag-block"),help:"",value:e.tagHref,onChange:e=>l({tagHref:e})}),(0,n.jsx)(t.TextControl,{label:(0,r.__)("Rel","smart-tag-block"),help:"",value:e.tagRel,onChange:e=>l({tagRel:e})}),(0,n.jsx)(t.TextControl,{label:(0,r.__)("Target","smart-tag-block"),help:"",value:e.tagTarget,onChange:e=>l({tagTarget:e})})]})]}),c=JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"rf/caption-box","version":"1.0.0","title":"Caption Box","category":"layout","icon":"embed-generic","description":"A block to display a caption box.","attributes":{"title":{"type":"string","source":"html","selector":".caption-title","default":""},"captionStyle":{"type":"string","default":"default"},"backgroundColor":{"type":"string","default":""},"borderColor":{"type":"string","default":""},"captionColor":{"type":"string","default":""},"tagName":{"type":"string","default":"div"},"tagHref":{"type":"string","default":""},"tagRel":{"type":"string","default":""},"tagTarget":{"type":"string","default":"_self"}},"supports":{"html":false,"className":true},"keywords":["post","featured"],"textdomain":"rf-caption-box","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css"}');(0,e.registerBlockType)(c.name,{...c,edit:function(e){const{attributes:a,setAttributes:c}=e,{title:d,captionStyle:p,backgroundColor:g,borderColor:u,captionColor:b}=a,h=(0,l.useBlockProps)({className:`caption-box caption-${p||"default"}`,style:{backgroundColor:g||void 0,borderColor:u||void 0},captionStyle:{backgroundColor:u||void 0,color:b||void 0}}),v=(0,o.useSelect)("core/block-editor").getSettings().colors;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(l.InspectorControls,{children:[(0,n.jsxs)(t.PanelBody,{title:"Settings",initialOpen:!0,children:[(0,n.jsx)(t.SelectControl,{label:"Select Style",value:p,options:[{label:"Default",value:"default"},{label:"Style 1",value:"style-1"},{label:"Style 2",value:"style-2"}],onChange:e=>c({captionStyle:e})}),(0,n.jsx)(i,{...e})]}),(0,n.jsxs)(t.PanelBody,{title:"Colors",initialOpen:!1,children:[(0,n.jsxs)("div",{style:{marginBottom:"1em"},children:[(0,n.jsx)("p",{children:(0,n.jsx)("strong",{children:"Background Color"})}),(0,n.jsx)(t.ColorPalette,{colors:v,value:g,onChange:e=>c({backgroundColor:e})})]}),(0,n.jsxs)("div",{style:{marginBottom:"1em"},children:[(0,n.jsx)("p",{children:(0,n.jsx)("strong",{children:"Border Color"})}),(0,n.jsx)(t.ColorPalette,{colors:v,value:u,onChange:e=>c({borderColor:e})})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)("p",{children:(0,n.jsx)("strong",{children:"Caption Text Color"})}),(0,n.jsx)(t.ColorPalette,{colors:v,value:b,onChange:e=>c({captionColor:e})})]})]})]}),(0,n.jsx)("div",{...h,children:(0,n.jsxs)(s,{...a,tagName:"div",className:"",children:[d&&(0,n.jsx)(l.RichText,{tagName:"p",className:"caption-title title",placeholder:(0,r.__)("Title","rf-faq"),value:d,onChange:e=>c({title:e}),style:h.captionStyle}),(0,n.jsx)("div",{className:"caption-content",children:(0,n.jsx)(l.InnerBlocks,{})})]})})]})},save:function(e){const{attributes:t}=e,{title:o,captionStyle:a,backgroundColor:r,borderColor:i,captionColor:c}=t,d=l.useBlockProps.save({className:`caption-box caption-${a||"default"}`,style:{backgroundColor:r||void 0,borderColor:i||void 0},captionStyle:{backgroundColor:i||void 0,color:c||void 0}});return(0,n.jsxs)(s,{...t,className:d.className,style:d.style,children:[o&&(0,n.jsx)("p",{className:"caption-title title",style:d.captionStyle,children:o}),(0,n.jsx)("div",{className:"caption-content",children:(0,n.jsx)(l.InnerBlocks.Content,{})})]})}})}},l={};function o(e){var a=l[e];if(void 0!==a)return a.exports;var r=l[e]={exports:{}};return t[e](r,r.exports,o),r.exports}o.m=t,e=[],o.O=(t,l,a,r)=>{if(!l){var n=1/0;for(d=0;d<e.length;d++){for(var[l,a,r]=e[d],s=!0,i=0;i<l.length;i++)(!1&r||n>=r)&&Object.keys(o.O).every((e=>o.O[e](l[i])))?l.splice(i--,1):(s=!1,r<n&&(n=r));if(s){e.splice(d--,1);var c=a();void 0!==c&&(t=c)}}return t}r=r||0;for(var d=e.length;d>0&&e[d-1][2]>r;d--)e[d]=e[d-1];e[d]=[l,a,r]},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={57:0,350:0};o.O.j=t=>0===e[t];var t=(t,l)=>{var a,r,[n,s,i]=l,c=0;if(n.some((t=>0!==e[t]))){for(a in s)o.o(s,a)&&(o.m[a]=s[a]);if(i)var d=i(o)}for(t&&t(l);c<n.length;c++)r=n[c],o.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return o.O(d)},l=globalThis.webpackChunkcaption_box=globalThis.webpackChunkcaption_box||[];l.forEach(t.bind(null,0)),l.push=t.bind(null,l.push.bind(l))})();var a=o.O(void 0,[350],(()=>o(39)));a=o.O(a)})();