import{f as n,h as e,t as o,o as t,c as a,j as r}from"./index.0a0bdcdf.js";function d(n,e){if(!document.head.querySelector("#"+e)){const o=document.createElement("style");o.textContent=n,o.type="text/css",o.id=e,document.head.appendChild(o)}}d(".vuedoc {\n}\n.vuedoc-demo {\n}\n.vuedoc-demo__inner {\n  border: 1px solid #eaeefb;\n}\n.vuedoc-demo__preview {\n  padding: 20px;\n  background-color: #fff;\n}\n.vuedoc-demo__source {\n  background-color: #fafafa;\n  border-top: 1px solid #eaeefb;\n  overflow: hidden;\n  height: 0;\n  transition: all 0.2s ease-in-out;\n}\n.vuedoc-demo__sourceref {\n  overflow: hidden;\n}\n.vuedoc-demo__sourceref > pre {\n  padding: 20px 0;\n  margin: 0;\n  line-height: 1.5;\n}\n.vuedoc-demo__sourceref code {\n  background-color: inherit;\n}\n.vuedoc-demo__footer {\n  border-top: 1px solid #eaeefb;\n  height: 44px;\n  line-height: 43px;\n  box-sizing: border-box;\n  background-color: #fff;\n  border-bottom-left-radius: 4px;\n  border-bottom-right-radius: 4px;\n  text-align: center;\n  margin-top: -1px;\n  color: #d3dce6;\n  cursor: pointer;\n  position: relative;\n}\n.vuedoc-demo__footer:hover {\n  color: #409eff;\n  background-color: #f9fafc;\n}\n","__vd__base__"),d("/**\n * okaidia theme for JavaScript, CSS and HTML\n * Loosely based on Monokai textmate theme by http://www.monokai.nl/\n * @author ocodia\n */\n\ncode[class*='language-'],\npre[class*='language-'] {\n  color: #f8f8f2;\n  background: none;\n  text-shadow: 0 1px rgba(0, 0, 0, 0.3);\n  font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;\n  font-size: 1em;\n  text-align: left;\n  white-space: pre;\n  word-spacing: normal;\n  word-break: normal;\n  word-wrap: normal;\n  line-height: 1.5;\n\n  -moz-tab-size: 4;\n  -o-tab-size: 4;\n  tab-size: 4;\n\n  -webkit-hyphens: none;\n  -moz-hyphens: none;\n  -ms-hyphens: none;\n  hyphens: none;\n}\n\n/* Code blocks */\npre[class*='language-'] {\n  padding: 1em;\n  margin: 0;\n  overflow: auto;\n}\n\n:not(pre) > code[class*='language-'],\npre[class*='language-'] {\n  background: #272822;\n}\n\n/* Inline code */\n:not(pre) > code[class*='language-'] {\n  padding: 0.1em;\n  border-radius: 0.3em;\n  white-space: normal;\n}\n\n.token.comment,\n.token.prolog,\n.token.doctype,\n.token.cdata {\n  color: #8292a2;\n}\n\n.token.punctuation {\n  color: #f8f8f2;\n}\n\n.token.namespace {\n  opacity: 0.7;\n}\n\n.token.property,\n.token.tag,\n.token.constant,\n.token.symbol,\n.token.deleted {\n  color: #f92672;\n}\n\n.token.boolean,\n.token.number {\n  color: #ae81ff;\n}\n\n.token.selector,\n.token.attr-name,\n.token.string,\n.token.char,\n.token.builtin,\n.token.inserted {\n  color: #a6e22e;\n}\n\n.token.operator,\n.token.entity,\n.token.url,\n.language-css .token.string,\n.style .token.string,\n.token.variable {\n  color: #f8f8f2;\n}\n\n.token.atrule,\n.token.attr-value,\n.token.function,\n.token.class-name {\n  color: #e6db74;\n}\n\n.token.keyword {\n  color: #66d9ef;\n}\n\n.token.regex,\n.token.important {\n  color: #fd971f;\n}\n\n.token.important,\n.token.bold {\n  font-weight: bold;\n}\n.token.italic {\n  font-style: italic;\n}\n\n.token.entity {\n  cursor: help;\n}\n","__vd__theme__");const c=n({components:{},setup(n){const t=[],a=e({});return{toggleCode:n=>{const e="vdpv_"+n;"0px"===a[e+"Height"]?a[e+"Height"]=((t[n].value?t[n].value.offsetHeight:0)||0)+"px":a[e+"Height"]="0px"},...o(a)}}});c.matter={};const i={class:"vuedoc  "},s=r('<h1 id="tag"><a href="#tag" aria-hidden="true" tabindex="-1"><span class="icon icon-link"></span></a><code>Tag</code></h1><blockquote><p>TODO: description</p></blockquote><h2 id="usage"><a href="#usage" aria-hidden="true" tabindex="-1"><span class="icon icon-link"></span></a>Usage</h2><div class="vuedoc__code"><pre class="language-markup"><code class="language-markup">const tag = require(&#39;Tag&#39;);\n\n// TODO: DEMONSTRATE API</code></pre></div>',4);c.render=function(n,e,o,r,d,c){return t(),a("div",i,[s])};export default c;
