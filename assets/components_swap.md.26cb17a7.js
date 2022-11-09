import{d as p,c as d,b as C,F as i,a as A}from"./chunks/f-icon-sun.7cb0bf49.js";import{j as h,k as l,r as E,o as g,c as q,a as t,u as s,d as f,e as o,_ as B}from"./app.b0f28c76.js";import{F as m}from"./chunks/f-icon-face-smile.0d89e570.js";const I=o('<h1 id="swap-\u5207\u6362" tabindex="-1" data-v-67abe36a>Swap \u5207\u6362 <a class="header-anchor" href="#swap-\u5207\u6362" aria-hidden="true" data-v-67abe36a>#</a></h1><p data-v-67abe36a>\u7CBE\u81F4\u7684\u5207\u6362\u7EC4\u4EF6</p><ul data-v-67abe36a><li data-v-67abe36a><a href="https://github.com/FightingDesign/fighting-design/tree/master/packages/fighting-design/swap" target="_blank" rel="noreferrer" data-v-67abe36a>\u6E90\u4EE3\u7801</a></li><li data-v-67abe36a><a href="https://github.com/FightingDesign/fighting-design/blob/master/docs/docs/components/swap.md" target="_blank" rel="noreferrer" data-v-67abe36a>\u6587\u6863\u7F16\u8F91</a></li></ul><h2 id="\u57FA\u672C\u4F7F\u7528" tabindex="-1" data-v-67abe36a>\u57FA\u672C\u4F7F\u7528 <a class="header-anchor" href="#\u57FA\u672C\u4F7F\u7528" aria-hidden="true" data-v-67abe36a>#</a></h2><p data-v-67abe36a>\u9700\u8981\u4F7F\u7528 <code data-v-67abe36a>v-model</code> \u7ED1\u5B9A\u4E00\u4E2A\u503C</p><p data-v-67abe36a><code data-v-67abe36a>icon-on</code> \u548C <code data-v-67abe36a>icon-off</code> \u5206\u522B\u63A7\u5236\u5207\u6362\u7684\u4E0D\u540C\u56FE\u6807</p>',6),_=o(`<details class="details custom-block" data-v-67abe36a><summary data-v-67abe36a>\u663E\u793A\u4EE3\u7801</summary><div class="language-html" data-v-67abe36a><button title="Copy Code" class="copy" data-v-67abe36a></button><span class="lang" data-v-67abe36a>html</span><pre class="shiki" data-v-67abe36a><code data-v-67abe36a><span class="line" data-v-67abe36a><span style="color:#89DDFF;" data-v-67abe36a>&lt;</span><span style="color:#F07178;" data-v-67abe36a>template</span><span style="color:#89DDFF;" data-v-67abe36a>&gt;</span></span>
<span class="line" data-v-67abe36a><span style="color:#A6ACCD;" data-v-67abe36a>  </span><span style="color:#89DDFF;" data-v-67abe36a>&lt;</span><span style="color:#F07178;" data-v-67abe36a>f-swap</span><span style="color:#89DDFF;" data-v-67abe36a> </span><span style="color:#C792EA;" data-v-67abe36a>v-model</span><span style="color:#89DDFF;" data-v-67abe36a>=</span><span style="color:#89DDFF;" data-v-67abe36a>&quot;</span><span style="color:#C3E88D;" data-v-67abe36a>value1</span><span style="color:#89DDFF;" data-v-67abe36a>&quot;</span><span style="color:#89DDFF;" data-v-67abe36a> </span><span style="color:#C792EA;" data-v-67abe36a>:icon-on</span><span style="color:#89DDFF;" data-v-67abe36a>=</span><span style="color:#89DDFF;" data-v-67abe36a>&quot;</span><span style="color:#C3E88D;" data-v-67abe36a>FIconSun</span><span style="color:#89DDFF;" data-v-67abe36a>&quot;</span><span style="color:#89DDFF;" data-v-67abe36a> </span><span style="color:#C792EA;" data-v-67abe36a>:icon-off</span><span style="color:#89DDFF;" data-v-67abe36a>=</span><span style="color:#89DDFF;" data-v-67abe36a>&quot;</span><span style="color:#C3E88D;" data-v-67abe36a>FIconMoon</span><span style="color:#89DDFF;" data-v-67abe36a>&quot;</span><span style="color:#89DDFF;" data-v-67abe36a> /&gt;</span></span>
<span class="line" data-v-67abe36a><span style="color:#A6ACCD;" data-v-67abe36a>  </span><span style="color:#89DDFF;" data-v-67abe36a>&lt;</span><span style="color:#F07178;" data-v-67abe36a>f-swap</span><span style="color:#89DDFF;" data-v-67abe36a> </span><span style="color:#C792EA;" data-v-67abe36a>v-model</span><span style="color:#89DDFF;" data-v-67abe36a>=</span><span style="color:#89DDFF;" data-v-67abe36a>&quot;</span><span style="color:#C3E88D;" data-v-67abe36a>value2</span><span style="color:#89DDFF;" data-v-67abe36a>&quot;</span><span style="color:#89DDFF;" data-v-67abe36a> </span><span style="color:#C792EA;" data-v-67abe36a>:icon-on</span><span style="color:#89DDFF;" data-v-67abe36a>=</span><span style="color:#89DDFF;" data-v-67abe36a>&quot;</span><span style="color:#C3E88D;" data-v-67abe36a>FIconSun</span><span style="color:#89DDFF;" data-v-67abe36a>&quot;</span><span style="color:#89DDFF;" data-v-67abe36a> </span><span style="color:#C792EA;" data-v-67abe36a>:icon-off</span><span style="color:#89DDFF;" data-v-67abe36a>=</span><span style="color:#89DDFF;" data-v-67abe36a>&quot;</span><span style="color:#C3E88D;" data-v-67abe36a>FIconMoon</span><span style="color:#89DDFF;" data-v-67abe36a>&quot;</span><span style="color:#89DDFF;" data-v-67abe36a> /&gt;</span></span>
<span class="line" data-v-67abe36a><span style="color:#89DDFF;" data-v-67abe36a>&lt;/</span><span style="color:#F07178;" data-v-67abe36a>template</span><span style="color:#89DDFF;" data-v-67abe36a>&gt;</span></span>
<span class="line" data-v-67abe36a></span>
<span class="line" data-v-67abe36a><span style="color:#89DDFF;" data-v-67abe36a>&lt;</span><span style="color:#F07178;" data-v-67abe36a>script</span><span style="color:#89DDFF;" data-v-67abe36a> </span><span style="color:#C792EA;" data-v-67abe36a>lang</span><span style="color:#89DDFF;" data-v-67abe36a>=</span><span style="color:#89DDFF;" data-v-67abe36a>&quot;</span><span style="color:#C3E88D;" data-v-67abe36a>ts</span><span style="color:#89DDFF;" data-v-67abe36a>&quot;</span><span style="color:#89DDFF;" data-v-67abe36a> </span><span style="color:#C792EA;" data-v-67abe36a>setup</span><span style="color:#89DDFF;" data-v-67abe36a>&gt;</span></span>
<span class="line" data-v-67abe36a><span style="color:#A6ACCD;" data-v-67abe36a>  </span><span style="color:#89DDFF;" data-v-67abe36a>import</span><span style="color:#A6ACCD;" data-v-67abe36a> </span><span style="color:#89DDFF;" data-v-67abe36a>{</span><span style="color:#F07178;" data-v-67abe36a> </span><span style="color:#A6ACCD;" data-v-67abe36a>FIconSun</span><span style="color:#89DDFF;" data-v-67abe36a>,</span><span style="color:#F07178;" data-v-67abe36a> </span><span style="color:#A6ACCD;" data-v-67abe36a>FIconMoon</span><span style="color:#F07178;" data-v-67abe36a> </span><span style="color:#89DDFF;" data-v-67abe36a>}</span><span style="color:#A6ACCD;" data-v-67abe36a> </span><span style="color:#89DDFF;" data-v-67abe36a>from</span><span style="color:#A6ACCD;" data-v-67abe36a> </span><span style="color:#89DDFF;" data-v-67abe36a>&#39;</span><span style="color:#C3E88D;" data-v-67abe36a>@fighting-design/fighting-icon</span><span style="color:#89DDFF;" data-v-67abe36a>&#39;</span></span>
<span class="line" data-v-67abe36a><span style="color:#A6ACCD;" data-v-67abe36a>  </span><span style="color:#89DDFF;" data-v-67abe36a>import</span><span style="color:#A6ACCD;" data-v-67abe36a> </span><span style="color:#89DDFF;" data-v-67abe36a>{</span><span style="color:#F07178;" data-v-67abe36a> </span><span style="color:#A6ACCD;" data-v-67abe36a>ref</span><span style="color:#F07178;" data-v-67abe36a> </span><span style="color:#89DDFF;" data-v-67abe36a>}</span><span style="color:#A6ACCD;" data-v-67abe36a> </span><span style="color:#89DDFF;" data-v-67abe36a>from</span><span style="color:#A6ACCD;" data-v-67abe36a> </span><span style="color:#89DDFF;" data-v-67abe36a>&#39;</span><span style="color:#C3E88D;" data-v-67abe36a>vue</span><span style="color:#89DDFF;" data-v-67abe36a>&#39;</span></span>
<span class="line" data-v-67abe36a></span>
<span class="line" data-v-67abe36a><span style="color:#A6ACCD;" data-v-67abe36a>  </span><span style="color:#C792EA;" data-v-67abe36a>const</span><span style="color:#A6ACCD;" data-v-67abe36a> value1 </span><span style="color:#89DDFF;" data-v-67abe36a>=</span><span style="color:#A6ACCD;" data-v-67abe36a> </span><span style="color:#82AAFF;" data-v-67abe36a>ref</span><span style="color:#A6ACCD;" data-v-67abe36a>(</span><span style="color:#FF9CAC;" data-v-67abe36a>true</span><span style="color:#A6ACCD;" data-v-67abe36a>)</span></span>
<span class="line" data-v-67abe36a><span style="color:#A6ACCD;" data-v-67abe36a>  </span><span style="color:#C792EA;" data-v-67abe36a>const</span><span style="color:#A6ACCD;" data-v-67abe36a> value2 </span><span style="color:#89DDFF;" data-v-67abe36a>=</span><span style="color:#A6ACCD;" data-v-67abe36a> </span><span style="color:#82AAFF;" data-v-67abe36a>ref</span><span style="color:#A6ACCD;" data-v-67abe36a>(</span><span style="color:#FF9CAC;" data-v-67abe36a>false</span><span style="color:#A6ACCD;" data-v-67abe36a>)</span></span>
<span class="line" data-v-67abe36a><span style="color:#89DDFF;" data-v-67abe36a>&lt;/</span><span style="color:#F07178;" data-v-67abe36a>script</span><span style="color:#89DDFF;" data-v-67abe36a>&gt;</span></span>
<span class="line" data-v-67abe36a></span></code></pre></div></details><h2 id="\u4E0D\u540C\u5C3A\u5BF8" tabindex="-1" data-v-67abe36a>\u4E0D\u540C\u5C3A\u5BF8 <a class="header-anchor" href="#\u4E0D\u540C\u5C3A\u5BF8" aria-hidden="true" data-v-67abe36a>#</a></h2><p data-v-67abe36a><code data-v-67abe36a>size</code> \u5C5E\u6027\u53EF\u914D\u7F6E\u4E0D\u540C\u7684\u5C3A\u5BF8</p>`,3),w=o(`<details class="details custom-block" data-v-67abe36a><summary data-v-67abe36a>\u663E\u793A\u4EE3\u7801</summary><div class="language-html" data-v-67abe36a><button title="Copy Code" class="copy" data-v-67abe36a></button><span class="lang" data-v-67abe36a>html</span><pre class="shiki" data-v-67abe36a><code data-v-67abe36a><span class="line" data-v-67abe36a><span style="color:#89DDFF;" data-v-67abe36a>&lt;</span><span style="color:#F07178;" data-v-67abe36a>template</span><span style="color:#89DDFF;" data-v-67abe36a>&gt;</span></span>
<span class="line" data-v-67abe36a><span style="color:#A6ACCD;" data-v-67abe36a>  </span><span style="color:#89DDFF;" data-v-67abe36a>&lt;</span><span style="color:#F07178;" data-v-67abe36a>f-swap</span></span>
<span class="line" data-v-67abe36a><span style="color:#89DDFF;" data-v-67abe36a>    </span><span style="color:#C792EA;" data-v-67abe36a>v-model</span><span style="color:#89DDFF;" data-v-67abe36a>=</span><span style="color:#89DDFF;" data-v-67abe36a>&quot;</span><span style="color:#C3E88D;" data-v-67abe36a>value5</span><span style="color:#89DDFF;" data-v-67abe36a>&quot;</span></span>
<span class="line" data-v-67abe36a><span style="color:#89DDFF;" data-v-67abe36a>    </span><span style="color:#C792EA;" data-v-67abe36a>:size</span><span style="color:#89DDFF;" data-v-67abe36a>=</span><span style="color:#89DDFF;" data-v-67abe36a>&quot;</span><span style="color:#C3E88D;" data-v-67abe36a>50</span><span style="color:#89DDFF;" data-v-67abe36a>&quot;</span></span>
<span class="line" data-v-67abe36a><span style="color:#89DDFF;" data-v-67abe36a>    </span><span style="color:#C792EA;" data-v-67abe36a>:icon-on</span><span style="color:#89DDFF;" data-v-67abe36a>=</span><span style="color:#89DDFF;" data-v-67abe36a>&quot;</span><span style="color:#C3E88D;" data-v-67abe36a>FIconFaceSmile</span><span style="color:#89DDFF;" data-v-67abe36a>&quot;</span></span>
<span class="line" data-v-67abe36a><span style="color:#89DDFF;" data-v-67abe36a>    </span><span style="color:#C792EA;" data-v-67abe36a>:icon-off</span><span style="color:#89DDFF;" data-v-67abe36a>=</span><span style="color:#89DDFF;" data-v-67abe36a>&quot;</span><span style="color:#C3E88D;" data-v-67abe36a>FIconFaceFrown</span><span style="color:#89DDFF;" data-v-67abe36a>&quot;</span></span>
<span class="line" data-v-67abe36a><span style="color:#89DDFF;" data-v-67abe36a>  /&gt;</span></span>
<span class="line" data-v-67abe36a><span style="color:#A6ACCD;" data-v-67abe36a>  </span><span style="color:#89DDFF;" data-v-67abe36a>&lt;</span><span style="color:#F07178;" data-v-67abe36a>f-swap</span></span>
<span class="line" data-v-67abe36a><span style="color:#89DDFF;" data-v-67abe36a>    </span><span style="color:#C792EA;" data-v-67abe36a>v-model</span><span style="color:#89DDFF;" data-v-67abe36a>=</span><span style="color:#89DDFF;" data-v-67abe36a>&quot;</span><span style="color:#C3E88D;" data-v-67abe36a>value6</span><span style="color:#89DDFF;" data-v-67abe36a>&quot;</span></span>
<span class="line" data-v-67abe36a><span style="color:#89DDFF;" data-v-67abe36a>    </span><span style="color:#C792EA;" data-v-67abe36a>size</span><span style="color:#89DDFF;" data-v-67abe36a>=</span><span style="color:#89DDFF;" data-v-67abe36a>&quot;</span><span style="color:#C3E88D;" data-v-67abe36a>30px</span><span style="color:#89DDFF;" data-v-67abe36a>&quot;</span></span>
<span class="line" data-v-67abe36a><span style="color:#89DDFF;" data-v-67abe36a>    </span><span style="color:#C792EA;" data-v-67abe36a>:icon-on</span><span style="color:#89DDFF;" data-v-67abe36a>=</span><span style="color:#89DDFF;" data-v-67abe36a>&quot;</span><span style="color:#C3E88D;" data-v-67abe36a>FIconEye</span><span style="color:#89DDFF;" data-v-67abe36a>&quot;</span></span>
<span class="line" data-v-67abe36a><span style="color:#89DDFF;" data-v-67abe36a>    </span><span style="color:#C792EA;" data-v-67abe36a>:icon-off</span><span style="color:#89DDFF;" data-v-67abe36a>=</span><span style="color:#89DDFF;" data-v-67abe36a>&quot;</span><span style="color:#C3E88D;" data-v-67abe36a>FIconEyeSlash</span><span style="color:#89DDFF;" data-v-67abe36a>&quot;</span></span>
<span class="line" data-v-67abe36a><span style="color:#89DDFF;" data-v-67abe36a>  /&gt;</span></span>
<span class="line" data-v-67abe36a><span style="color:#89DDFF;" data-v-67abe36a>&lt;/</span><span style="color:#F07178;" data-v-67abe36a>template</span><span style="color:#89DDFF;" data-v-67abe36a>&gt;</span></span>
<span class="line" data-v-67abe36a></span>
<span class="line" data-v-67abe36a><span style="color:#89DDFF;" data-v-67abe36a>&lt;</span><span style="color:#F07178;" data-v-67abe36a>script</span><span style="color:#89DDFF;" data-v-67abe36a> </span><span style="color:#C792EA;" data-v-67abe36a>lang</span><span style="color:#89DDFF;" data-v-67abe36a>=</span><span style="color:#89DDFF;" data-v-67abe36a>&quot;</span><span style="color:#C3E88D;" data-v-67abe36a>ts</span><span style="color:#89DDFF;" data-v-67abe36a>&quot;</span><span style="color:#89DDFF;" data-v-67abe36a> </span><span style="color:#C792EA;" data-v-67abe36a>setup</span><span style="color:#89DDFF;" data-v-67abe36a>&gt;</span></span>
<span class="line" data-v-67abe36a><span style="color:#A6ACCD;" data-v-67abe36a>  </span><span style="color:#89DDFF;" data-v-67abe36a>import</span><span style="color:#A6ACCD;" data-v-67abe36a> </span><span style="color:#89DDFF;" data-v-67abe36a>{</span></span>
<span class="line" data-v-67abe36a><span style="color:#F07178;" data-v-67abe36a>    </span><span style="color:#A6ACCD;" data-v-67abe36a>FIconFaceFrown</span><span style="color:#89DDFF;" data-v-67abe36a>,</span></span>
<span class="line" data-v-67abe36a><span style="color:#F07178;" data-v-67abe36a>    </span><span style="color:#A6ACCD;" data-v-67abe36a>FIconFaceSmile</span><span style="color:#89DDFF;" data-v-67abe36a>,</span></span>
<span class="line" data-v-67abe36a><span style="color:#F07178;" data-v-67abe36a>    </span><span style="color:#A6ACCD;" data-v-67abe36a>FIconEye</span><span style="color:#89DDFF;" data-v-67abe36a>,</span></span>
<span class="line" data-v-67abe36a><span style="color:#F07178;" data-v-67abe36a>    </span><span style="color:#A6ACCD;" data-v-67abe36a>FIconEyeSlash</span></span>
<span class="line" data-v-67abe36a><span style="color:#F07178;" data-v-67abe36a>  </span><span style="color:#89DDFF;" data-v-67abe36a>}</span><span style="color:#A6ACCD;" data-v-67abe36a> </span><span style="color:#89DDFF;" data-v-67abe36a>from</span><span style="color:#A6ACCD;" data-v-67abe36a> </span><span style="color:#89DDFF;" data-v-67abe36a>&#39;</span><span style="color:#C3E88D;" data-v-67abe36a>@fighting-design/fighting-icon</span><span style="color:#89DDFF;" data-v-67abe36a>&#39;</span></span>
<span class="line" data-v-67abe36a><span style="color:#A6ACCD;" data-v-67abe36a>  </span><span style="color:#89DDFF;" data-v-67abe36a>import</span><span style="color:#A6ACCD;" data-v-67abe36a> </span><span style="color:#89DDFF;" data-v-67abe36a>{</span><span style="color:#F07178;" data-v-67abe36a> </span><span style="color:#A6ACCD;" data-v-67abe36a>ref</span><span style="color:#F07178;" data-v-67abe36a> </span><span style="color:#89DDFF;" data-v-67abe36a>}</span><span style="color:#A6ACCD;" data-v-67abe36a> </span><span style="color:#89DDFF;" data-v-67abe36a>from</span><span style="color:#A6ACCD;" data-v-67abe36a> </span><span style="color:#89DDFF;" data-v-67abe36a>&#39;</span><span style="color:#C3E88D;" data-v-67abe36a>vue</span><span style="color:#89DDFF;" data-v-67abe36a>&#39;</span></span>
<span class="line" data-v-67abe36a></span>
<span class="line" data-v-67abe36a><span style="color:#A6ACCD;" data-v-67abe36a>  </span><span style="color:#C792EA;" data-v-67abe36a>const</span><span style="color:#A6ACCD;" data-v-67abe36a> value3 </span><span style="color:#89DDFF;" data-v-67abe36a>=</span><span style="color:#A6ACCD;" data-v-67abe36a> </span><span style="color:#82AAFF;" data-v-67abe36a>ref</span><span style="color:#A6ACCD;" data-v-67abe36a>(</span><span style="color:#FF9CAC;" data-v-67abe36a>true</span><span style="color:#A6ACCD;" data-v-67abe36a>)</span></span>
<span class="line" data-v-67abe36a><span style="color:#A6ACCD;" data-v-67abe36a>  </span><span style="color:#C792EA;" data-v-67abe36a>const</span><span style="color:#A6ACCD;" data-v-67abe36a> value4 </span><span style="color:#89DDFF;" data-v-67abe36a>=</span><span style="color:#A6ACCD;" data-v-67abe36a> </span><span style="color:#82AAFF;" data-v-67abe36a>ref</span><span style="color:#A6ACCD;" data-v-67abe36a>(</span><span style="color:#FF9CAC;" data-v-67abe36a>true</span><span style="color:#A6ACCD;" data-v-67abe36a>)</span></span>
<span class="line" data-v-67abe36a><span style="color:#89DDFF;" data-v-67abe36a>&lt;/</span><span style="color:#F07178;" data-v-67abe36a>script</span><span style="color:#89DDFF;" data-v-67abe36a>&gt;</span></span>
<span class="line" data-v-67abe36a></span></code></pre></div></details><h2 id="\u4E0D\u540C\u52A8\u753B" tabindex="-1" data-v-67abe36a>\u4E0D\u540C\u52A8\u753B <a class="header-anchor" href="#\u4E0D\u540C\u52A8\u753B" aria-hidden="true" data-v-67abe36a>#</a></h2><p data-v-67abe36a><code data-v-67abe36a>type</code> \u5C5E\u6027\u53EF\u4EE5\u914D\u7F6E\u4E0D\u540C\u7684\u52A8\u753B\u7C7B\u578B</p>`,3),V=o(`<details class="details custom-block" data-v-67abe36a><summary data-v-67abe36a>\u663E\u793A\u4EE3\u7801</summary><div class="language-html" data-v-67abe36a><button title="Copy Code" class="copy" data-v-67abe36a></button><span class="lang" data-v-67abe36a>html</span><pre class="shiki" data-v-67abe36a><code data-v-67abe36a><span class="line" data-v-67abe36a><span style="color:#89DDFF;" data-v-67abe36a>&lt;</span><span style="color:#F07178;" data-v-67abe36a>template</span><span style="color:#89DDFF;" data-v-67abe36a>&gt;</span></span>
<span class="line" data-v-67abe36a><span style="color:#A6ACCD;" data-v-67abe36a>  </span><span style="color:#89DDFF;" data-v-67abe36a>&lt;</span><span style="color:#F07178;" data-v-67abe36a>f-swap</span></span>
<span class="line" data-v-67abe36a><span style="color:#89DDFF;" data-v-67abe36a>    </span><span style="color:#C792EA;" data-v-67abe36a>v-model</span><span style="color:#89DDFF;" data-v-67abe36a>=</span><span style="color:#89DDFF;" data-v-67abe36a>&quot;</span><span style="color:#C3E88D;" data-v-67abe36a>value5</span><span style="color:#89DDFF;" data-v-67abe36a>&quot;</span></span>
<span class="line" data-v-67abe36a><span style="color:#89DDFF;" data-v-67abe36a>    </span><span style="color:#C792EA;" data-v-67abe36a>type</span><span style="color:#89DDFF;" data-v-67abe36a>=</span><span style="color:#89DDFF;" data-v-67abe36a>&quot;</span><span style="color:#C3E88D;" data-v-67abe36a>default</span><span style="color:#89DDFF;" data-v-67abe36a>&quot;</span></span>
<span class="line" data-v-67abe36a><span style="color:#89DDFF;" data-v-67abe36a>    </span><span style="color:#C792EA;" data-v-67abe36a>:icon-on</span><span style="color:#89DDFF;" data-v-67abe36a>=</span><span style="color:#89DDFF;" data-v-67abe36a>&quot;</span><span style="color:#C3E88D;" data-v-67abe36a>FIconEye</span><span style="color:#89DDFF;" data-v-67abe36a>&quot;</span></span>
<span class="line" data-v-67abe36a><span style="color:#89DDFF;" data-v-67abe36a>    </span><span style="color:#C792EA;" data-v-67abe36a>:icon-off</span><span style="color:#89DDFF;" data-v-67abe36a>=</span><span style="color:#89DDFF;" data-v-67abe36a>&quot;</span><span style="color:#C3E88D;" data-v-67abe36a>FIconEyeSlash</span><span style="color:#89DDFF;" data-v-67abe36a>&quot;</span></span>
<span class="line" data-v-67abe36a><span style="color:#89DDFF;" data-v-67abe36a>  /&gt;</span></span>
<span class="line" data-v-67abe36a><span style="color:#A6ACCD;" data-v-67abe36a>  </span><span style="color:#89DDFF;" data-v-67abe36a>&lt;</span><span style="color:#F07178;" data-v-67abe36a>f-swap</span></span>
<span class="line" data-v-67abe36a><span style="color:#89DDFF;" data-v-67abe36a>    </span><span style="color:#C792EA;" data-v-67abe36a>v-model</span><span style="color:#89DDFF;" data-v-67abe36a>=</span><span style="color:#89DDFF;" data-v-67abe36a>&quot;</span><span style="color:#C3E88D;" data-v-67abe36a>value6</span><span style="color:#89DDFF;" data-v-67abe36a>&quot;</span></span>
<span class="line" data-v-67abe36a><span style="color:#89DDFF;" data-v-67abe36a>    </span><span style="color:#C792EA;" data-v-67abe36a>type</span><span style="color:#89DDFF;" data-v-67abe36a>=</span><span style="color:#89DDFF;" data-v-67abe36a>&quot;</span><span style="color:#C3E88D;" data-v-67abe36a>sound</span><span style="color:#89DDFF;" data-v-67abe36a>&quot;</span></span>
<span class="line" data-v-67abe36a><span style="color:#89DDFF;" data-v-67abe36a>    </span><span style="color:#C792EA;" data-v-67abe36a>:icon-on</span><span style="color:#89DDFF;" data-v-67abe36a>=</span><span style="color:#89DDFF;" data-v-67abe36a>&quot;</span><span style="color:#C3E88D;" data-v-67abe36a>FIconSun</span><span style="color:#89DDFF;" data-v-67abe36a>&quot;</span></span>
<span class="line" data-v-67abe36a><span style="color:#89DDFF;" data-v-67abe36a>    </span><span style="color:#C792EA;" data-v-67abe36a>:icon-off</span><span style="color:#89DDFF;" data-v-67abe36a>=</span><span style="color:#89DDFF;" data-v-67abe36a>&quot;</span><span style="color:#C3E88D;" data-v-67abe36a>FIconMoon</span><span style="color:#89DDFF;" data-v-67abe36a>&quot;</span></span>
<span class="line" data-v-67abe36a><span style="color:#89DDFF;" data-v-67abe36a>  /&gt;</span></span>
<span class="line" data-v-67abe36a><span style="color:#A6ACCD;" data-v-67abe36a>  </span><span style="color:#89DDFF;" data-v-67abe36a>&lt;</span><span style="color:#F07178;" data-v-67abe36a>f-swap</span></span>
<span class="line" data-v-67abe36a><span style="color:#89DDFF;" data-v-67abe36a>    </span><span style="color:#C792EA;" data-v-67abe36a>v-model</span><span style="color:#89DDFF;" data-v-67abe36a>=</span><span style="color:#89DDFF;" data-v-67abe36a>&quot;</span><span style="color:#C3E88D;" data-v-67abe36a>value7</span><span style="color:#89DDFF;" data-v-67abe36a>&quot;</span></span>
<span class="line" data-v-67abe36a><span style="color:#89DDFF;" data-v-67abe36a>    </span><span style="color:#C792EA;" data-v-67abe36a>type</span><span style="color:#89DDFF;" data-v-67abe36a>=</span><span style="color:#89DDFF;" data-v-67abe36a>&quot;</span><span style="color:#C3E88D;" data-v-67abe36a>swap</span><span style="color:#89DDFF;" data-v-67abe36a>&quot;</span></span>
<span class="line" data-v-67abe36a><span style="color:#89DDFF;" data-v-67abe36a>    </span><span style="color:#C792EA;" data-v-67abe36a>:icon-on</span><span style="color:#89DDFF;" data-v-67abe36a>=</span><span style="color:#89DDFF;" data-v-67abe36a>&quot;</span><span style="color:#C3E88D;" data-v-67abe36a>FIconFaceSmile</span><span style="color:#89DDFF;" data-v-67abe36a>&quot;</span></span>
<span class="line" data-v-67abe36a><span style="color:#89DDFF;" data-v-67abe36a>    </span><span style="color:#C792EA;" data-v-67abe36a>:icon-off</span><span style="color:#89DDFF;" data-v-67abe36a>=</span><span style="color:#89DDFF;" data-v-67abe36a>&quot;</span><span style="color:#C3E88D;" data-v-67abe36a>FIconFaceFrown</span><span style="color:#89DDFF;" data-v-67abe36a>&quot;</span></span>
<span class="line" data-v-67abe36a><span style="color:#89DDFF;" data-v-67abe36a>  /&gt;</span></span>
<span class="line" data-v-67abe36a><span style="color:#89DDFF;" data-v-67abe36a>&lt;/</span><span style="color:#F07178;" data-v-67abe36a>template</span><span style="color:#89DDFF;" data-v-67abe36a>&gt;</span></span>
<span class="line" data-v-67abe36a></span>
<span class="line" data-v-67abe36a><span style="color:#89DDFF;" data-v-67abe36a>&lt;</span><span style="color:#F07178;" data-v-67abe36a>script</span><span style="color:#89DDFF;" data-v-67abe36a> </span><span style="color:#C792EA;" data-v-67abe36a>lang</span><span style="color:#89DDFF;" data-v-67abe36a>=</span><span style="color:#89DDFF;" data-v-67abe36a>&quot;</span><span style="color:#C3E88D;" data-v-67abe36a>ts</span><span style="color:#89DDFF;" data-v-67abe36a>&quot;</span><span style="color:#89DDFF;" data-v-67abe36a> </span><span style="color:#C792EA;" data-v-67abe36a>setup</span><span style="color:#89DDFF;" data-v-67abe36a>&gt;</span></span>
<span class="line" data-v-67abe36a><span style="color:#A6ACCD;" data-v-67abe36a>  </span><span style="color:#89DDFF;" data-v-67abe36a>import</span><span style="color:#A6ACCD;" data-v-67abe36a> </span><span style="color:#89DDFF;" data-v-67abe36a>{</span></span>
<span class="line" data-v-67abe36a><span style="color:#F07178;" data-v-67abe36a>    </span><span style="color:#A6ACCD;" data-v-67abe36a>FIconSun</span><span style="color:#89DDFF;" data-v-67abe36a>,</span></span>
<span class="line" data-v-67abe36a><span style="color:#F07178;" data-v-67abe36a>    </span><span style="color:#A6ACCD;" data-v-67abe36a>FIconMoon</span><span style="color:#89DDFF;" data-v-67abe36a>,</span></span>
<span class="line" data-v-67abe36a><span style="color:#F07178;" data-v-67abe36a>    </span><span style="color:#A6ACCD;" data-v-67abe36a>FIconFaceSmile</span><span style="color:#89DDFF;" data-v-67abe36a>,</span></span>
<span class="line" data-v-67abe36a><span style="color:#F07178;" data-v-67abe36a>    </span><span style="color:#A6ACCD;" data-v-67abe36a>FIconFaceFrown</span><span style="color:#89DDFF;" data-v-67abe36a>,</span></span>
<span class="line" data-v-67abe36a><span style="color:#F07178;" data-v-67abe36a>    </span><span style="color:#A6ACCD;" data-v-67abe36a>FIconEye</span><span style="color:#89DDFF;" data-v-67abe36a>,</span></span>
<span class="line" data-v-67abe36a><span style="color:#F07178;" data-v-67abe36a>    </span><span style="color:#A6ACCD;" data-v-67abe36a>FIconEyeSlash</span></span>
<span class="line" data-v-67abe36a><span style="color:#F07178;" data-v-67abe36a>  </span><span style="color:#89DDFF;" data-v-67abe36a>}</span><span style="color:#A6ACCD;" data-v-67abe36a> </span><span style="color:#89DDFF;" data-v-67abe36a>from</span><span style="color:#A6ACCD;" data-v-67abe36a> </span><span style="color:#89DDFF;" data-v-67abe36a>&#39;</span><span style="color:#C3E88D;" data-v-67abe36a>@fighting-design/fighting-icon</span><span style="color:#89DDFF;" data-v-67abe36a>&#39;</span></span>
<span class="line" data-v-67abe36a><span style="color:#A6ACCD;" data-v-67abe36a>  </span><span style="color:#89DDFF;" data-v-67abe36a>import</span><span style="color:#A6ACCD;" data-v-67abe36a> </span><span style="color:#89DDFF;" data-v-67abe36a>{</span><span style="color:#F07178;" data-v-67abe36a> </span><span style="color:#A6ACCD;" data-v-67abe36a>ref</span><span style="color:#F07178;" data-v-67abe36a> </span><span style="color:#89DDFF;" data-v-67abe36a>}</span><span style="color:#A6ACCD;" data-v-67abe36a> </span><span style="color:#89DDFF;" data-v-67abe36a>from</span><span style="color:#A6ACCD;" data-v-67abe36a> </span><span style="color:#89DDFF;" data-v-67abe36a>&#39;</span><span style="color:#C3E88D;" data-v-67abe36a>vue</span><span style="color:#89DDFF;" data-v-67abe36a>&#39;</span></span>
<span class="line" data-v-67abe36a></span>
<span class="line" data-v-67abe36a><span style="color:#A6ACCD;" data-v-67abe36a>  </span><span style="color:#C792EA;" data-v-67abe36a>const</span><span style="color:#A6ACCD;" data-v-67abe36a> value5 </span><span style="color:#89DDFF;" data-v-67abe36a>=</span><span style="color:#A6ACCD;" data-v-67abe36a> </span><span style="color:#82AAFF;" data-v-67abe36a>ref</span><span style="color:#A6ACCD;" data-v-67abe36a>(</span><span style="color:#FF9CAC;" data-v-67abe36a>true</span><span style="color:#A6ACCD;" data-v-67abe36a>)</span></span>
<span class="line" data-v-67abe36a><span style="color:#A6ACCD;" data-v-67abe36a>  </span><span style="color:#C792EA;" data-v-67abe36a>const</span><span style="color:#A6ACCD;" data-v-67abe36a> value6 </span><span style="color:#89DDFF;" data-v-67abe36a>=</span><span style="color:#A6ACCD;" data-v-67abe36a> </span><span style="color:#82AAFF;" data-v-67abe36a>ref</span><span style="color:#A6ACCD;" data-v-67abe36a>(</span><span style="color:#FF9CAC;" data-v-67abe36a>true</span><span style="color:#A6ACCD;" data-v-67abe36a>)</span></span>
<span class="line" data-v-67abe36a><span style="color:#A6ACCD;" data-v-67abe36a>  </span><span style="color:#C792EA;" data-v-67abe36a>const</span><span style="color:#A6ACCD;" data-v-67abe36a> value7 </span><span style="color:#89DDFF;" data-v-67abe36a>=</span><span style="color:#A6ACCD;" data-v-67abe36a> </span><span style="color:#82AAFF;" data-v-67abe36a>ref</span><span style="color:#A6ACCD;" data-v-67abe36a>(</span><span style="color:#FF9CAC;" data-v-67abe36a>true</span><span style="color:#A6ACCD;" data-v-67abe36a>)</span></span>
<span class="line" data-v-67abe36a><span style="color:#89DDFF;" data-v-67abe36a>&lt;/</span><span style="color:#F07178;" data-v-67abe36a>script</span><span style="color:#89DDFF;" data-v-67abe36a>&gt;</span></span>
<span class="line" data-v-67abe36a></span></code></pre></div></details><h2 id="attributes" tabindex="-1" data-v-67abe36a>Attributes <a class="header-anchor" href="#attributes" aria-hidden="true" data-v-67abe36a>#</a></h2><div class="vp-table__container" data-v-67abe36a><table data-v-67abe36a><thead data-v-67abe36a><tr data-v-67abe36a><th data-v-67abe36a>\u53C2\u6570</th><th data-v-67abe36a>\u8BF4\u660E</th><th data-v-67abe36a>\u7C7B\u578B</th><th data-v-67abe36a>\u53EF\u9009\u503C</th><th data-v-67abe36a>\u9ED8\u8BA4\u503C</th></tr></thead><tbody data-v-67abe36a><tr data-v-67abe36a><td data-v-67abe36a><code data-v-67abe36a>v-model</code></td><td data-v-67abe36a>\u7ED1\u5B9A\u503C</td><td data-v-67abe36a>boolean</td><td data-v-67abe36a>\u2014\u2014</td><td data-v-67abe36a>false</td></tr><tr data-v-67abe36a><td data-v-67abe36a><code data-v-67abe36a>size</code></td><td data-v-67abe36a>\u7EC4\u4EF6\u5C3A\u5BF8</td><td data-v-67abe36a>string / number</td><td data-v-67abe36a>\u2014\u2014</td><td data-v-67abe36a>40</td></tr><tr data-v-67abe36a><td data-v-67abe36a><code data-v-67abe36a>type</code></td><td data-v-67abe36a>\u52A8\u753B\u7C7B\u578B</td><td data-v-67abe36a>string</td><td data-v-67abe36a><code data-v-67abe36a>sound</code> <code data-v-67abe36a>swap</code> <code data-v-67abe36a>default</code></td><td data-v-67abe36a>default</td></tr><tr data-v-67abe36a><td data-v-67abe36a><code data-v-67abe36a>icon-on</code></td><td data-v-67abe36a>\u6253\u5F00\u5C55\u793A\u7684\u56FE\u6807</td><td data-v-67abe36a>object (VNode / Component)</td><td data-v-67abe36a>\u2014\u2014</td><td data-v-67abe36a>null</td></tr><tr data-v-67abe36a><td data-v-67abe36a><code data-v-67abe36a>icon-off</code></td><td data-v-67abe36a>\u5173\u95ED\u5C55\u793A\u7684\u56FE\u6807</td><td data-v-67abe36a>object (VNode / Component)</td><td data-v-67abe36a>\u2014\u2014</td><td data-v-67abe36a>null</td></tr><tr data-v-67abe36a><td data-v-67abe36a><code data-v-67abe36a>on-change</code></td><td data-v-67abe36a>\u5F53\u7ED1\u5B9A\u503C\u53D1\u751F\u6539\u53D8\u65F6\u89E6\u53D1\u7684\u56DE\u8C03</td><td data-v-67abe36a>Function</td><td data-v-67abe36a>\u2014\u2014</td><td data-v-67abe36a>null</td></tr></tbody></table></div><h2 id="interface" tabindex="-1" data-v-67abe36a>Interface <a class="header-anchor" href="#interface" aria-hidden="true" data-v-67abe36a>#</a></h2><p data-v-67abe36a>\u7EC4\u4EF6\u5BFC\u51FA\u4EE5\u4E0B\u7C7B\u578B\u5B9A\u4E49\uFF1A</p><div class="language-ts" data-v-67abe36a><button title="Copy Code" class="copy" data-v-67abe36a></button><span class="lang" data-v-67abe36a>ts</span><pre class="shiki" data-v-67abe36a><code data-v-67abe36a><span class="line" data-v-67abe36a><span style="color:#89DDFF;" data-v-67abe36a>import</span><span style="color:#A6ACCD;" data-v-67abe36a> </span><span style="color:#89DDFF;" data-v-67abe36a>type</span><span style="color:#A6ACCD;" data-v-67abe36a> </span><span style="color:#89DDFF;" data-v-67abe36a>{</span></span>
<span class="line" data-v-67abe36a><span style="color:#F07178;" data-v-67abe36a>  </span><span style="color:#A6ACCD;" data-v-67abe36a>SwapInstance</span><span style="color:#89DDFF;" data-v-67abe36a>,</span></span>
<span class="line" data-v-67abe36a><span style="color:#F07178;" data-v-67abe36a>  </span><span style="color:#A6ACCD;" data-v-67abe36a>SwapPropsType</span><span style="color:#89DDFF;" data-v-67abe36a>,</span></span>
<span class="line" data-v-67abe36a><span style="color:#F07178;" data-v-67abe36a>  </span><span style="color:#A6ACCD;" data-v-67abe36a>SwapType</span><span style="color:#89DDFF;" data-v-67abe36a>,</span></span>
<span class="line" data-v-67abe36a><span style="color:#F07178;" data-v-67abe36a>  </span><span style="color:#A6ACCD;" data-v-67abe36a>SwapOnChangeInterface</span></span>
<span class="line" data-v-67abe36a><span style="color:#89DDFF;" data-v-67abe36a>}</span><span style="color:#A6ACCD;" data-v-67abe36a> </span><span style="color:#89DDFF;" data-v-67abe36a>from</span><span style="color:#A6ACCD;" data-v-67abe36a> </span><span style="color:#89DDFF;" data-v-67abe36a>&#39;</span><span style="color:#C3E88D;" data-v-67abe36a>fighting-design</span><span style="color:#89DDFF;" data-v-67abe36a>&#39;</span></span>
<span class="line" data-v-67abe36a></span></code></pre></div><h2 id="contributors" tabindex="-1" data-v-67abe36a>Contributors <a class="header-anchor" href="#contributors" aria-hidden="true" data-v-67abe36a>#</a></h2>`,7),S={href:"https://github.com/Tyh2001",target:"_blank"},k={href:"https://github.com/ChetSerenade",target:"_blank"},O=JSON.parse('{"title":"Swap \u5207\u6362","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u57FA\u672C\u4F7F\u7528","slug":"\u57FA\u672C\u4F7F\u7528","link":"#\u57FA\u672C\u4F7F\u7528","children":[]},{"level":2,"title":"\u4E0D\u540C\u5C3A\u5BF8","slug":"\u4E0D\u540C\u5C3A\u5BF8","link":"#\u4E0D\u540C\u5C3A\u5BF8","children":[]},{"level":2,"title":"\u4E0D\u540C\u52A8\u753B","slug":"\u4E0D\u540C\u52A8\u753B","link":"#\u4E0D\u540C\u52A8\u753B","children":[]},{"level":2,"title":"Attributes","slug":"attributes","link":"#attributes","children":[]},{"level":2,"title":"Interface","slug":"interface","link":"#interface","children":[]},{"level":2,"title":"Contributors","slug":"contributors","link":"#contributors","children":[]}],"relativePath":"components/swap.md","lastUpdated":1668000461000}'),x={name:"components/swap.md"},U=h({...x,setup(z){const c=l(!0),v=l(!1),b=l(!0),r=l(!0),F=l(!0),D=l(!0),y=l(!0);return(M,a)=>{const n=E("f-swap"),u=E("f-avatar");return g(),q("div",null,[I,t(n,{modelValue:c.value,"onUpdate:modelValue":a[0]||(a[0]=e=>c.value=e),"icon-on":s(p),"icon-off":s(d)},null,8,["modelValue","icon-on","icon-off"]),t(n,{modelValue:v.value,"onUpdate:modelValue":a[1]||(a[1]=e=>v.value=e),"icon-on":s(p),"icon-off":s(d)},null,8,["modelValue","icon-on","icon-off"]),_,t(n,{modelValue:b.value,"onUpdate:modelValue":a[2]||(a[2]=e=>b.value=e),size:50,"icon-on":s(m),"icon-off":s(C)},null,8,["modelValue","icon-on","icon-off"]),t(n,{modelValue:r.value,"onUpdate:modelValue":a[3]||(a[3]=e=>r.value=e),size:"30px","icon-on":s(i),"icon-off":s(A)},null,8,["modelValue","icon-on","icon-off"]),w,t(n,{modelValue:F.value,"onUpdate:modelValue":a[4]||(a[4]=e=>F.value=e),type:"default","icon-on":s(i),"icon-off":s(A)},null,8,["modelValue","icon-on","icon-off"]),t(n,{modelValue:D.value,"onUpdate:modelValue":a[5]||(a[5]=e=>D.value=e),type:"sound","icon-on":s(p),"icon-off":s(d)},null,8,["modelValue","icon-on","icon-off"]),t(n,{modelValue:y.value,"onUpdate:modelValue":a[6]||(a[6]=e=>y.value=e),type:"swap","icon-on":s(m),"icon-off":s(C)},null,8,["modelValue","icon-on","icon-off"]),V,f("a",S,[t(u,{round:"",src:"https://avatars.githubusercontent.com/u/73180970?v=4"})]),f("a",k,[t(u,{round:"",src:"https://avatars.githubusercontent.com/u/44160015?v=4"})])])}}});const P=B(U,[["__scopeId","data-v-67abe36a"]]);export{O as __pageData,P as default};
