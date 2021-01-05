import{r as n,o as a,c as t,a as s,w as p,b as o,F as e,f as c,g as l,h as u,t as k,i,j as r}from"./index.0a0bdcdf.js";const d={class:"box"},g={class:"top"},m=o("上左"),f=o("上边"),v=o("上右"),q={class:"left"},h=o("左上"),b=o("左边"),_=o("左下"),x={class:"right"},y=o("右上"),w=o("右边"),B=o("右下"),T={class:"bottom"},C=o("下左"),R=o("下边"),H=o("下右");const L={render:function(o,e){const c=n("rol-button"),l=n("rol-tooltip");return a(),t("div",d,[s("div",g,[s(l,{class:"item",effect:"dark",content:"Top Left 提示文字",placement:"top-start"},{default:p((()=>[s(c,null,{default:p((()=>[m])),_:1})])),_:1}),s(l,{class:"item",effect:"dark",content:"Top Center 提示文字",placement:"top"},{default:p((()=>[s(c,null,{default:p((()=>[f])),_:1})])),_:1}),s(l,{class:"item",effect:"dark",content:"Top Right 提示文字",placement:"top-end"},{default:p((()=>[s(c,null,{default:p((()=>[v])),_:1})])),_:1})]),s("div",q,[s(l,{class:"item",effect:"dark",content:"Left Top 提示文字",placement:"left-start"},{default:p((()=>[s(c,null,{default:p((()=>[h])),_:1})])),_:1}),s(l,{class:"item",effect:"dark",content:"Left Center 提示文字",placement:"left"},{default:p((()=>[s(c,null,{default:p((()=>[b])),_:1})])),_:1}),s(l,{class:"item",effect:"dark",content:"Left Bottom 提示文字",placement:"left-end"},{default:p((()=>[s(c,null,{default:p((()=>[_])),_:1})])),_:1})]),s("div",x,[s(l,{class:"item",effect:"dark",content:"Right Top 提示文字",placement:"right-start"},{default:p((()=>[s(c,null,{default:p((()=>[y])),_:1})])),_:1}),s(l,{class:"item",effect:"dark",content:"Right Center 提示文字",placement:"right"},{default:p((()=>[s(c,null,{default:p((()=>[w])),_:1})])),_:1}),s(l,{class:"item",effect:"dark",content:"Right Bottom 提示文字",placement:"right-end"},{default:p((()=>[s(c,null,{default:p((()=>[B])),_:1})])),_:1})]),s("div",T,[s(l,{class:"item",effect:"dark",content:"Bottom Left 提示文字",placement:"bottom-start"},{default:p((()=>[s(c,null,{default:p((()=>[C])),_:1})])),_:1}),s(l,{class:"item",effect:"dark",content:"Bottom Center 提示文字",placement:"bottom"},{default:p((()=>[s(c,null,{default:p((()=>[R])),_:1})])),_:1}),s(l,{class:"item",effect:"dark",content:"Bottom Right 提示文字",placement:"bottom-end"},{default:p((()=>[s(c,null,{default:p((()=>[H])),_:1})])),_:1})])])}},E=o("Dark"),A=o("Light");const S={render:function(o,c){const l=n("rol-button"),u=n("rol-tooltip");return a(),t(e,null,[s(u,{content:"Top center",placement:"top"},{default:p((()=>[s(l,null,{default:p((()=>[E])),_:1})])),_:1}),s(u,{content:"Bottom center",placement:"bottom",effect:"light"},{default:p((()=>[s(l,{style:{"margin-left":"15px"}},{default:p((()=>[A])),_:1})])),_:1})],64)}},z=o(" 多行信息"),j=s("br",null,null,-1),M=o("第二行信息 "),D=o("Top center");const F={};function N(n,a){if(!document.head.querySelector("#"+a)){const t=document.createElement("style");t.textContent=n,t.type="text/css",t.id=a,document.head.appendChild(t)}}F.render=function(o,e){const c=n("rol-button"),l=n("rol-tooltip");return a(),t(l,{placement:"top"},{content:p((()=>[z,j,M])),default:p((()=>[s(c,null,{default:p((()=>[D])),_:1})])),_:1})},N(".vuedoc {\n}\n.vuedoc-demo {\n}\n.vuedoc-demo__inner {\n  border: 1px solid #eaeefb;\n}\n.vuedoc-demo__preview {\n  padding: 20px;\n  background-color: #fff;\n}\n.vuedoc-demo__source {\n  background-color: #fafafa;\n  border-top: 1px solid #eaeefb;\n  overflow: hidden;\n  height: 0;\n  transition: all 0.2s ease-in-out;\n}\n.vuedoc-demo__sourceref {\n  overflow: hidden;\n}\n.vuedoc-demo__sourceref > pre {\n  padding: 20px 0;\n  margin: 0;\n  line-height: 1.5;\n}\n.vuedoc-demo__sourceref code {\n  background-color: inherit;\n}\n.vuedoc-demo__footer {\n  border-top: 1px solid #eaeefb;\n  height: 44px;\n  line-height: 43px;\n  box-sizing: border-box;\n  background-color: #fff;\n  border-bottom-left-radius: 4px;\n  border-bottom-right-radius: 4px;\n  text-align: center;\n  margin-top: -1px;\n  color: #d3dce6;\n  cursor: pointer;\n  position: relative;\n}\n.vuedoc-demo__footer:hover {\n  color: #409eff;\n  background-color: #f9fafc;\n}\n","__vd__base__"),N("/**\n * okaidia theme for JavaScript, CSS and HTML\n * Loosely based on Monokai textmate theme by http://www.monokai.nl/\n * @author ocodia\n */\n\ncode[class*='language-'],\npre[class*='language-'] {\n  color: #f8f8f2;\n  background: none;\n  text-shadow: 0 1px rgba(0, 0, 0, 0.3);\n  font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;\n  font-size: 1em;\n  text-align: left;\n  white-space: pre;\n  word-spacing: normal;\n  word-break: normal;\n  word-wrap: normal;\n  line-height: 1.5;\n\n  -moz-tab-size: 4;\n  -o-tab-size: 4;\n  tab-size: 4;\n\n  -webkit-hyphens: none;\n  -moz-hyphens: none;\n  -ms-hyphens: none;\n  hyphens: none;\n}\n\n/* Code blocks */\npre[class*='language-'] {\n  padding: 1em;\n  margin: 0;\n  overflow: auto;\n}\n\n:not(pre) > code[class*='language-'],\npre[class*='language-'] {\n  background: #272822;\n}\n\n/* Inline code */\n:not(pre) > code[class*='language-'] {\n  padding: 0.1em;\n  border-radius: 0.3em;\n  white-space: normal;\n}\n\n.token.comment,\n.token.prolog,\n.token.doctype,\n.token.cdata {\n  color: #8292a2;\n}\n\n.token.punctuation {\n  color: #f8f8f2;\n}\n\n.token.namespace {\n  opacity: 0.7;\n}\n\n.token.property,\n.token.tag,\n.token.constant,\n.token.symbol,\n.token.deleted {\n  color: #f92672;\n}\n\n.token.boolean,\n.token.number {\n  color: #ae81ff;\n}\n\n.token.selector,\n.token.attr-name,\n.token.string,\n.token.char,\n.token.builtin,\n.token.inserted {\n  color: #a6e22e;\n}\n\n.token.operator,\n.token.entity,\n.token.url,\n.language-css .token.string,\n.style .token.string,\n.token.variable {\n  color: #f8f8f2;\n}\n\n.token.atrule,\n.token.attr-value,\n.token.function,\n.token.class-name {\n  color: #e6db74;\n}\n\n.token.keyword {\n  color: #66d9ef;\n}\n\n.token.regex,\n.token.important {\n  color: #fd971f;\n}\n\n.token.important,\n.token.bold {\n  font-weight: bold;\n}\n.token.italic {\n  font-style: italic;\n}\n\n.token.entity {\n  cursor: help;\n}\n","__vd__theme__");const O=c({components:{vdpv_0:L,vdpv_1:S,vdpv_2:F},setup(n){const a=l(),t=l(),s=l(),p=[a,t,s],o=u({vdpv_0Height:"0px",vdpv_1Height:"0px",vdpv_2Height:"0px"});return{toggleCode:n=>{const a="vdpv_"+n;"0px"===o[a+"Height"]?o[a+"Height"]=((p[n].value?p[n].value.offsetHeight:0)||0)+"px":o[a+"Height"]="0px"},...k(o),vdpv_0Ref:a,vdpv_1Ref:t,vdpv_2Ref:s}}});O.matter={title:"Tooltip",description:"Tooltip component doc",wrapperClass:"tooltip-demo-wrapper",tags:["components","data"]};const U={class:"vuedoc  tooltip-demo-wrapper"},G=r('<h1 id="tooltip-文字提示"><a href="#tooltip-%E6%96%87%E5%AD%97%E6%8F%90%E7%A4%BA" aria-hidden="true" tabindex="-1"><span class="icon icon-link"></span></a>Tooltip 文字提示</h1><p>常用于展示鼠标 hover 时的提示信息。</p><h2 id="基础用法"><a href="#%E5%9F%BA%E7%A1%80%E7%94%A8%E6%B3%95" aria-hidden="true" tabindex="-1"><span class="icon icon-link"></span></a>基础用法</h2><p>提供 9 种不同方向的展示方式，可以通过以下完整示例来理解，选择你要的效果。</p><p>使用<code>content</code>属性来决定<code>hover</code>时的提示信息。由<code>placement</code>属性决定展示效果：<code>placement</code>属性值为：<code>方向-对齐位置</code>；四个方向：<code>top</code>、<code>left</code>、<code>right</code>、<code>bottom</code>；三种对齐位置：<code>start</code>, <code>end</code>，默认为空。如<code>placement=&quot;left-end&quot;</code>，则提示信息出现在目标元素的左侧，且提示信息的底部与目标元素的底部对齐。</p>',5),I={class:"vuedoc-demo"},J={class:"vuedoc-demo__inner"},W={class:"vuedoc-demo__preview"},K={ref:"vdpv_0Ref",class:"vuedoc-demo__sourceref"},P=r('<div class="vuedoc__code"><pre class="language-markup"><code class="language-markup"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>box<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>top<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>rol-tooltip</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item<span class="token punctuation">&quot;</span></span> <span class="token attr-name">effect</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>dark<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Top Left 提示文字<span class="token punctuation">&quot;</span></span> <span class="token attr-name">placement</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>top-start<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>rol-button</span><span class="token punctuation">&gt;</span></span>上左<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>rol-button</span><span class="token punctuation">&gt;</span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>rol-tooltip</span><span class="token punctuation">&gt;</span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>rol-tooltip</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item<span class="token punctuation">&quot;</span></span> <span class="token attr-name">effect</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>dark<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Top Center 提示文字<span class="token punctuation">&quot;</span></span> <span class="token attr-name">placement</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>top<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>rol-button</span><span class="token punctuation">&gt;</span></span>上边<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>rol-button</span><span class="token punctuation">&gt;</span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>rol-tooltip</span><span class="token punctuation">&gt;</span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>rol-tooltip</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item<span class="token punctuation">&quot;</span></span> <span class="token attr-name">effect</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>dark<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Top Right 提示文字<span class="token punctuation">&quot;</span></span> <span class="token attr-name">placement</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>top-end<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>rol-button</span><span class="token punctuation">&gt;</span></span>上右<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>rol-button</span><span class="token punctuation">&gt;</span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>rol-tooltip</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>left<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>rol-tooltip</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item<span class="token punctuation">&quot;</span></span> <span class="token attr-name">effect</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>dark<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Left Top 提示文字<span class="token punctuation">&quot;</span></span> <span class="token attr-name">placement</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>left-start<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>rol-button</span><span class="token punctuation">&gt;</span></span>左上<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>rol-button</span><span class="token punctuation">&gt;</span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>rol-tooltip</span><span class="token punctuation">&gt;</span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>rol-tooltip</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item<span class="token punctuation">&quot;</span></span> <span class="token attr-name">effect</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>dark<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Left Center 提示文字<span class="token punctuation">&quot;</span></span> <span class="token attr-name">placement</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>left<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>rol-button</span><span class="token punctuation">&gt;</span></span>左边<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>rol-button</span><span class="token punctuation">&gt;</span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>rol-tooltip</span><span class="token punctuation">&gt;</span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>rol-tooltip</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item<span class="token punctuation">&quot;</span></span> <span class="token attr-name">effect</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>dark<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Left Bottom 提示文字<span class="token punctuation">&quot;</span></span> <span class="token attr-name">placement</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>left-end<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>rol-button</span><span class="token punctuation">&gt;</span></span>左下<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>rol-button</span><span class="token punctuation">&gt;</span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>rol-tooltip</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>right<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>rol-tooltip</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item<span class="token punctuation">&quot;</span></span> <span class="token attr-name">effect</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>dark<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Right Top 提示文字<span class="token punctuation">&quot;</span></span> <span class="token attr-name">placement</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>right-start<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>rol-button</span><span class="token punctuation">&gt;</span></span>右上<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>rol-button</span><span class="token punctuation">&gt;</span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>rol-tooltip</span><span class="token punctuation">&gt;</span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>rol-tooltip</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item<span class="token punctuation">&quot;</span></span> <span class="token attr-name">effect</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>dark<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Right Center 提示文字<span class="token punctuation">&quot;</span></span> <span class="token attr-name">placement</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>right<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>rol-button</span><span class="token punctuation">&gt;</span></span>右边<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>rol-button</span><span class="token punctuation">&gt;</span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>rol-tooltip</span><span class="token punctuation">&gt;</span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>rol-tooltip</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item<span class="token punctuation">&quot;</span></span> <span class="token attr-name">effect</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>dark<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Right Bottom 提示文字<span class="token punctuation">&quot;</span></span> <span class="token attr-name">placement</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>right-end<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>rol-button</span><span class="token punctuation">&gt;</span></span>右下<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>rol-button</span><span class="token punctuation">&gt;</span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>rol-tooltip</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>bottom<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>rol-tooltip</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item<span class="token punctuation">&quot;</span></span> <span class="token attr-name">effect</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>dark<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Bottom Left 提示文字<span class="token punctuation">&quot;</span></span> <span class="token attr-name">placement</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>bottom-start<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>rol-button</span><span class="token punctuation">&gt;</span></span>下左<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>rol-button</span><span class="token punctuation">&gt;</span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>rol-tooltip</span><span class="token punctuation">&gt;</span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>rol-tooltip</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item<span class="token punctuation">&quot;</span></span> <span class="token attr-name">effect</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>dark<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Bottom Center 提示文字<span class="token punctuation">&quot;</span></span> <span class="token attr-name">placement</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>bottom<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>rol-button</span><span class="token punctuation">&gt;</span></span>下边<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>rol-button</span><span class="token punctuation">&gt;</span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>rol-tooltip</span><span class="token punctuation">&gt;</span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>rol-tooltip</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item<span class="token punctuation">&quot;</span></span> <span class="token attr-name">effect</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>dark<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Bottom Right 提示文字<span class="token punctuation">&quot;</span></span> <span class="token attr-name">placement</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>bottom-end<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>rol-button</span><span class="token punctuation">&gt;</span></span>下右<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>rol-button</span><span class="token punctuation">&gt;</span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>rol-tooltip</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span></code></pre></div>',1),Q=s("h2",{id:"主题"},[s("a",{href:"#%E4%B8%BB%E9%A2%98","aria-hidden":"true",tabindex:"-1"},[s("span",{class:"icon icon-link"})]),o("主题")],-1),V=s("p",null,[o("通过设置"),s("code",null,"effect"),o("属性来改变主题，默认为"),s("code",null,"dark"),o("。("),s("code",null,"dark"),o("和"),s("code",null,"light"),o(")")],-1),X={class:"vuedoc-demo"},Y={class:"vuedoc-demo__inner"},Z={class:"vuedoc-demo__preview"},$={ref:"vdpv_1Ref",class:"vuedoc-demo__sourceref"},nn=r('<div class="vuedoc__code"><pre class="language-markup"><code class="language-markup"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>rol-tooltip</span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Top center<span class="token punctuation">&quot;</span></span> <span class="token attr-name">placement</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>top<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>rol-button</span><span class="token punctuation">&gt;</span></span>Dark<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>rol-button</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>rol-tooltip</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>rol-tooltip</span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Bottom center<span class="token punctuation">&quot;</span></span> <span class="token attr-name">placement</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>bottom<span class="token punctuation">&quot;</span></span> <span class="token attr-name">effect</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>light<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>rol-button</span><span class="token style-attr language-css"><span class="token attr-name"> <span class="token attr-name">style</span></span><span class="token punctuation">=&quot;</span><span class="token attr-value"><span class="token property">margin-left</span><span class="token punctuation">:</span> 15px</span><span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Light<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>rol-button</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>rol-tooltip</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span></code></pre></div>',1),an=s("h2",{id:"更多-content"},[s("a",{href:"#%E6%9B%B4%E5%A4%9A-content","aria-hidden":"true",tabindex:"-1"},[s("span",{class:"icon icon-link"})]),o("更多 Content")],-1),tn=s("p",null,[o("用具名 slot 分发"),s("code",null,"content"),o("，替代"),s("code",null,"tooltip"),o("中的"),s("code",null,"content"),o("属性。")],-1),sn={class:"vuedoc-demo"},pn={class:"vuedoc-demo__inner"},on={class:"vuedoc-demo__preview"},en={ref:"vdpv_2Ref",class:"vuedoc-demo__sourceref"},cn=r('<div class="vuedoc__code"><pre class="language-markup"><code class="language-markup"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>rol-tooltip</span> <span class="token attr-name">placement</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>top<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#content</span><span class="token punctuation">&gt;</span></span> 多行信息<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/&gt;</span></span>第二行信息 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>rol-button</span><span class="token punctuation">&gt;</span></span>Top center<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>rol-button</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>rol-tooltip</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span></code></pre></div>',1),ln=r('<h3 id="attributes"><a href="#attributes" aria-hidden="true" tabindex="-1"><span class="icon icon-link"></span></a>Attributes</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>append-to-body</td><td>决定 popper 是否传送到 document.body 下</td><td>Boolean</td><td>-</td><td>false</td></tr><tr><td>effect</td><td>默认提供的主题</td><td>String</td><td>dark/light</td><td>dark</td></tr><tr><td>content</td><td>显示的内容，也可以通过 <code>slot#content</code> 传入 DOM</td><td>String</td><td>—</td><td>—</td></tr><tr><td>placement</td><td>Tooltip 的出现位置</td><td>String</td><td>top/top-start/top-end/bottom/bottom-start/bottom-end/left/left-start/left-end/right/right-start/right-end</td><td>bottom</td></tr><tr><td>value / v-model</td><td>状态是否可见</td><td>Boolean</td><td>—</td><td>false</td></tr><tr><td>disabled</td><td>Tooltip 是否可用</td><td>Boolean</td><td>—</td><td>false</td></tr><tr><td>offset</td><td>出现位置的偏移量</td><td>Number</td><td>—</td><td>0</td></tr><tr><td>transition</td><td>定义渐变动画</td><td>String</td><td>—</td><td>el-fade-in-linear</td></tr><tr><td>visible-arrow</td><td>是否显示 Tooltip 箭头</td><td>Boolean</td><td>—</td><td>true</td></tr><tr><td>popper-options</td><td><a href="https://popper.js.org/documentation.html">popper.js</a> 的参数</td><td>Object</td><td>参考 <a href="https://popper.js.org/documentation.html">popper.js</a> 文档</td><td>{ boundariesElement: &#39;body&#39;, gpuAcceleration: false }</td></tr><tr><td>open-delay</td><td>延迟出现，单位毫秒</td><td>Number</td><td>—</td><td>0</td></tr><tr><td>manual</td><td>手动控制模式，设置为 true 后，mouseenter 和 mouseleave 事件将不会生效</td><td>Boolean</td><td>—</td><td>false</td></tr><tr><td>popper-class</td><td>为 Tooltip 的 popper 添加类名</td><td>String</td><td>—</td><td>—</td></tr><tr><td>enterable</td><td>鼠标是否可进入到 tooltip 中</td><td>Boolean</td><td>—</td><td>true</td></tr><tr><td>hide-after</td><td>Tooltip 出现后自动隐藏延时，单位毫秒，为 0 则不会自动隐藏</td><td>number</td><td>—</td><td>0</td></tr><tr><td>tabindex</td><td>Tooltip 组件的 <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex">tabindex</a></td><td>number</td><td>—</td><td>0</td></tr></tbody></table>',2);O.render=function(p,o,e,c,l,u){const k=n("vdpv_0"),r=n("vdpv_1"),d=n("vdpv_2");return a(),t("div",U,[G,s("div",I,[s("div",J,[s("div",W,[s(k)]),s("div",{style:{height:p.vdpv_0Height},class:"vuedoc-demo__source"},[s("div",K,[P],512)],4),s("div",{class:"vuedoc-demo__footer",onClick:o[1]||(o[1]=n=>p.toggleCode(0))},i(p.vdpv_0Height>0?"hidden":"show"),1)])]),Q,V,s("div",X,[s("div",Y,[s("div",Z,[s(r)]),s("div",{style:{height:p.vdpv_1Height},class:"vuedoc-demo__source"},[s("div",$,[nn],512)],4),s("div",{class:"vuedoc-demo__footer",onClick:o[2]||(o[2]=n=>p.toggleCode(1))},i(p.vdpv_1Height>0?"hidden":"show"),1)])]),an,tn,s("div",sn,[s("div",pn,[s("div",on,[s(d)]),s("div",{style:{height:p.vdpv_2Height},class:"vuedoc-demo__source"},[s("div",en,[cn],512)],4),s("div",{class:"vuedoc-demo__footer",onClick:o[3]||(o[3]=n=>p.toggleCode(2))},i(p.vdpv_2Height>0?"hidden":"show"),1)])]),ln])};export default O;
