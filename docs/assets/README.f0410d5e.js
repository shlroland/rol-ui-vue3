import{r as n,o as t,c as a,a as s,w as o,F as e,b as p,f as c,g as l,h as u,t as r,i as d,j as i}from"./index.0a0bdcdf.js";var k={data:()=>({visible:!1})};const g=p("hover 激活"),v=p("click 激活"),m=p("focus 激活"),h=p("手动激活");function b(n,t){if(!document.head.querySelector("#"+t)){const a=document.createElement("style");a.textContent=n,a.type="text/css",a.id=t,document.head.appendChild(a)}}k.render=function(p,c,l,u,r,d){const i=n("rol-button"),k=n("rol-popover");return t(),a(e,null,[s(k,{placement:"top-start",title:"标题",width:200,trigger:"hover",content:"这是一段内容,这是一段内容,这是一段内容,这是一段内容。"},{reference:o((()=>[s(i,null,{default:o((()=>[g])),_:1})])),_:1}),s(k,{placement:"bottom",title:"标题",width:200,trigger:"click",content:"这是一段内容,这是一段内容,这是一段内容,这是一段内容。"},{reference:o((()=>[s(i,null,{default:o((()=>[v])),_:1})])),_:1}),s(k,{ref:"popover",placement:"right",title:"标题",width:200,trigger:"focus",content:"这是一段内容,这是一段内容,这是一段内容,这是一段内容。"},{reference:o((()=>[s(i,null,{default:o((()=>[m])),_:1})])),_:1},512),s(k,{placement:"bottom",title:"标题",width:200,trigger:"manual",content:"这是一段内容,这是一段内容,这是一段内容,这是一段内容。",visible:r.visible,"onUpdate:visible":c[2]||(c[2]=n=>r.visible=n)},{reference:o((()=>[s(i,{onClick:c[1]||(c[1]=n=>r.visible=!r.visible)},{default:o((()=>[h])),_:1})])),_:1},8,["visible"])],64)},b(".vuedoc {\n}\n.vuedoc-demo {\n}\n.vuedoc-demo__inner {\n  border: 1px solid #eaeefb;\n}\n.vuedoc-demo__preview {\n  padding: 20px;\n  background-color: #fff;\n}\n.vuedoc-demo__source {\n  background-color: #fafafa;\n  border-top: 1px solid #eaeefb;\n  overflow: hidden;\n  height: 0;\n  transition: all 0.2s ease-in-out;\n}\n.vuedoc-demo__sourceref {\n  overflow: hidden;\n}\n.vuedoc-demo__sourceref > pre {\n  padding: 20px 0;\n  margin: 0;\n  line-height: 1.5;\n}\n.vuedoc-demo__sourceref code {\n  background-color: inherit;\n}\n.vuedoc-demo__footer {\n  border-top: 1px solid #eaeefb;\n  height: 44px;\n  line-height: 43px;\n  box-sizing: border-box;\n  background-color: #fff;\n  border-bottom-left-radius: 4px;\n  border-bottom-right-radius: 4px;\n  text-align: center;\n  margin-top: -1px;\n  color: #d3dce6;\n  cursor: pointer;\n  position: relative;\n}\n.vuedoc-demo__footer:hover {\n  color: #409eff;\n  background-color: #f9fafc;\n}\n","__vd__base__"),b("/**\n * okaidia theme for JavaScript, CSS and HTML\n * Loosely based on Monokai textmate theme by http://www.monokai.nl/\n * @author ocodia\n */\n\ncode[class*='language-'],\npre[class*='language-'] {\n  color: #f8f8f2;\n  background: none;\n  text-shadow: 0 1px rgba(0, 0, 0, 0.3);\n  font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;\n  font-size: 1em;\n  text-align: left;\n  white-space: pre;\n  word-spacing: normal;\n  word-break: normal;\n  word-wrap: normal;\n  line-height: 1.5;\n\n  -moz-tab-size: 4;\n  -o-tab-size: 4;\n  tab-size: 4;\n\n  -webkit-hyphens: none;\n  -moz-hyphens: none;\n  -ms-hyphens: none;\n  hyphens: none;\n}\n\n/* Code blocks */\npre[class*='language-'] {\n  padding: 1em;\n  margin: 0;\n  overflow: auto;\n}\n\n:not(pre) > code[class*='language-'],\npre[class*='language-'] {\n  background: #272822;\n}\n\n/* Inline code */\n:not(pre) > code[class*='language-'] {\n  padding: 0.1em;\n  border-radius: 0.3em;\n  white-space: normal;\n}\n\n.token.comment,\n.token.prolog,\n.token.doctype,\n.token.cdata {\n  color: #8292a2;\n}\n\n.token.punctuation {\n  color: #f8f8f2;\n}\n\n.token.namespace {\n  opacity: 0.7;\n}\n\n.token.property,\n.token.tag,\n.token.constant,\n.token.symbol,\n.token.deleted {\n  color: #f92672;\n}\n\n.token.boolean,\n.token.number {\n  color: #ae81ff;\n}\n\n.token.selector,\n.token.attr-name,\n.token.string,\n.token.char,\n.token.builtin,\n.token.inserted {\n  color: #a6e22e;\n}\n\n.token.operator,\n.token.entity,\n.token.url,\n.language-css .token.string,\n.style .token.string,\n.token.variable {\n  color: #f8f8f2;\n}\n\n.token.atrule,\n.token.attr-value,\n.token.function,\n.token.class-name {\n  color: #e6db74;\n}\n\n.token.keyword {\n  color: #66d9ef;\n}\n\n.token.regex,\n.token.important {\n  color: #fd971f;\n}\n\n.token.important,\n.token.bold {\n  font-weight: bold;\n}\n.token.italic {\n  font-style: italic;\n}\n\n.token.entity {\n  cursor: help;\n}\n","__vd__theme__");const f=c({components:{vdpv_0:k},setup(n){const t=l(),a=[t],s=u({vdpv_0Height:"0px"});return{toggleCode:n=>{const t="vdpv_"+n;"0px"===s[t+"Height"]?s[t+"Height"]=((a[n].value?a[n].value.offsetHeight:0)||0)+"px":s[t+"Height"]="0px"},...r(s),vdpv_0Ref:t}}});f.matter={title:"Popover",description:"Popover component doc",wrapperClass:"popover-demo-wrapper",tags:["components","data"]};const q={class:"vuedoc  popover-demo-wrapper"},_=i('<h1 id="popover-气泡卡片"><a href="#popover-%E6%B0%94%E6%B3%A1%E5%8D%A1%E7%89%87" aria-hidden="true" tabindex="-1"><span class="icon icon-link"></span></a>Popover 气泡卡片</h1><p>Popover 的属性与 Tooltip 类似。</p><h2 id="基础用法"><a href="#%E5%9F%BA%E7%A1%80%E7%94%A8%E6%B3%95" aria-hidden="true" tabindex="-1"><span class="icon icon-link"></span></a>基础用法</h2><p><code>trigger</code>属性用于设置何时触发 Popover，支持四种触发方式：<code>hover</code>，<code>click</code>，<code>focus</code> 和 <code>manual</code>。对于触发 Popover 的元素，有两种写法：使用 <code>#reference</code> 的具名插槽。</p>',4),w={class:"vuedoc-demo"},x={class:"vuedoc-demo__inner"},y={class:"vuedoc-demo__preview"},S={ref:"vdpv_0Ref",class:"vuedoc-demo__sourceref"},E=i('<div class="vuedoc__code"><pre class="language-markup"><code class="language-markup"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>rol-popover</span>\n    <span class="token attr-name">placement</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>top-start<span class="token punctuation">&quot;</span></span>\n    <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>标题<span class="token punctuation">&quot;</span></span>\n    <span class="token attr-name">:width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>200<span class="token punctuation">&quot;</span></span>\n    <span class="token attr-name">trigger</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hover<span class="token punctuation">&quot;</span></span>\n    <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>这是一段内容,这是一段内容,这是一段内容,这是一段内容。<span class="token punctuation">&quot;</span></span>\n  <span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#reference</span><span class="token punctuation">&gt;</span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>rol-button</span><span class="token punctuation">&gt;</span></span>hover 激活<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>rol-button</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>rol-popover</span><span class="token punctuation">&gt;</span></span>\n\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>rol-popover</span>\n    <span class="token attr-name">placement</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>bottom<span class="token punctuation">&quot;</span></span>\n    <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>标题<span class="token punctuation">&quot;</span></span>\n    <span class="token attr-name">:width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>200<span class="token punctuation">&quot;</span></span>\n    <span class="token attr-name">trigger</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>click<span class="token punctuation">&quot;</span></span>\n    <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>这是一段内容,这是一段内容,这是一段内容,这是一段内容。<span class="token punctuation">&quot;</span></span>\n  <span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#reference</span><span class="token punctuation">&gt;</span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>rol-button</span><span class="token punctuation">&gt;</span></span>click 激活<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>rol-button</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>rol-popover</span><span class="token punctuation">&gt;</span></span>\n\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>rol-popover</span>\n    <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>popover<span class="token punctuation">&quot;</span></span>\n    <span class="token attr-name">placement</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>right<span class="token punctuation">&quot;</span></span>\n    <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>标题<span class="token punctuation">&quot;</span></span>\n    <span class="token attr-name">:width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>200<span class="token punctuation">&quot;</span></span>\n    <span class="token attr-name">trigger</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>focus<span class="token punctuation">&quot;</span></span>\n    <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>这是一段内容,这是一段内容,这是一段内容,这是一段内容。<span class="token punctuation">&quot;</span></span>\n  <span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#reference</span><span class="token punctuation">&gt;</span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>rol-button</span><span class="token punctuation">&gt;</span></span>focus 激活<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>rol-button</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>rol-popover</span><span class="token punctuation">&gt;</span></span>\n\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>rol-popover</span>\n    <span class="token attr-name">placement</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>bottom<span class="token punctuation">&quot;</span></span>\n    <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>标题<span class="token punctuation">&quot;</span></span>\n    <span class="token attr-name">:width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>200<span class="token punctuation">&quot;</span></span>\n    <span class="token attr-name">trigger</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>manual<span class="token punctuation">&quot;</span></span>\n    <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>这是一段内容,这是一段内容,这是一段内容,这是一段内容。<span class="token punctuation">&quot;</span></span>\n    <span class="token attr-name"><span class="token namespace">v-model:</span>visible</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>visible<span class="token punctuation">&quot;</span></span>\n  <span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#reference</span><span class="token punctuation">&gt;</span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>rol-button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>visible = !visible<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>手动激活<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>rol-button</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>rol-popover</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>\n  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">{</span>\n      visible<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span></code></pre></div>',1),H=i('<h3 id="attributes"><a href="#attributes" aria-hidden="true" tabindex="-1"><span class="icon icon-link"></span></a>Attributes</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>trigger</td><td>触发方式</td><td>String</td><td>click/focus/hover/manual</td><td>click</td></tr><tr><td>title</td><td>标题</td><td>String</td><td>—</td><td>—</td></tr><tr><td>content</td><td>显示的内容，也可以通过 <code>slot</code> 传入 DOM</td><td>String</td><td>—</td><td>—</td></tr><tr><td>width</td><td>宽度</td><td>String, Number</td><td>—</td><td>最小宽度 150px</td></tr><tr><td>placement</td><td>出现位置</td><td>String</td><td>top/top-start/top-end/bottom/bottom-start/bottom-end/left/left-start/left-end/right/right-start/right-end</td><td>bottom</td></tr><tr><td>disabled</td><td>Popover 是否可用</td><td>Boolean</td><td>—</td><td>false</td></tr><tr><td>visible / v-model:visible</td><td>状态是否可见</td><td>Boolean</td><td>—</td><td>false</td></tr><tr><td>offset</td><td>出现位置的偏移量</td><td>Number</td><td>—</td><td>0</td></tr><tr><td>transition</td><td>定义渐变动画</td><td>String</td><td>—</td><td>fade-in-linear</td></tr><tr><td>show-arrow</td><td>是否显示 Tooltip 箭头</td><td>Boolean</td><td>—</td><td>true</td></tr><tr><td>popper-options</td><td><a href="https://popper.js.org/documentation.html">popper.js</a> 的参数</td><td>Object</td><td>参考 <a href="https://popper.js.org/documentation.html">popper.js</a> 文档</td><td><code>{ boundariesElement: &#39;body&#39;, gpuAcceleration: false }</code></td></tr><tr><td>popper-class</td><td>为 popper 添加类名</td><td>String</td><td>—</td><td>—</td></tr><tr><td>open-delay</td><td>触发方式为 hover 时的显示延迟，单位为毫秒</td><td>Number</td><td>—</td><td>—</td></tr><tr><td>close-delay</td><td>触发方式为 hover 时的隐藏延迟，单位为毫秒</td><td>number</td><td>—</td><td>200</td></tr><tr><td>tabindex</td><td>Popover 组件的 <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex">tabindex</a></td><td>number</td><td>—</td><td>0</td></tr></tbody></table><h3 id="slot"><a href="#slot" aria-hidden="true" tabindex="-1"><span class="icon icon-link"></span></a>Slot</h3><table><thead><tr><th>参数</th><th>说明</th></tr></thead><tbody><tr><td>—</td><td>Popover 内嵌 HTML 文本</td></tr><tr><td>reference</td><td>触发 Popover 显示的 HTML 元素</td></tr></tbody></table><h3 id="events"><a href="#events" aria-hidden="true" tabindex="-1"><span class="icon icon-link"></span></a>Events</h3><table><thead><tr><th>事件名称</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>show</td><td>显示时触发</td><td>—</td></tr><tr><td>after-enter</td><td>显示动画播放完毕后触发</td><td>—</td></tr><tr><td>hide</td><td>隐藏时触发</td><td>—</td></tr><tr><td>after-leave</td><td>隐藏动画播放完毕后触发</td><td>—</td></tr></tbody></table>',6);f.render=function(o,e,p,c,l,u){const r=n("vdpv_0");return t(),a("div",q,[_,s("div",w,[s("div",x,[s("div",y,[s(r)]),s("div",{style:{height:o.vdpv_0Height},class:"vuedoc-demo__source"},[s("div",S,[E],512)],4),s("div",{class:"vuedoc-demo__footer",onClick:e[1]||(e[1]=n=>o.toggleCode(0))},d(o.vdpv_0Height>0?"hidden":"show"),1)])]),H])};export default f;
