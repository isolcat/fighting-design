import{d as o,c as p,b as C,F as i,a as A}from"./chunks/f-icon-sun.7e4f1714.js";import{j as h,k as b,r as E,o as g,c as q,a as t,u as s,d as f,e as l,_ as B}from"./app.421c80ba.js";import{F as m}from"./chunks/f-icon-face-smile.455f1b11.js";const I=l('<h1 id="swap-\u5207\u6362" tabindex="-1" data-v-80180ebb>Swap \u5207\u6362 <a class="header-anchor" href="#swap-\u5207\u6362" aria-hidden="true" data-v-80180ebb>#</a></h1><p data-v-80180ebb>\u7CBE\u81F4\u7684\u5207\u6362\u7EC4\u4EF6</p><ul data-v-80180ebb><li data-v-80180ebb><a href="https://github.com/FightingDesign/fighting-design/tree/master/packages/fighting-design/swap" target="_blank" rel="noreferrer" data-v-80180ebb>\u6E90\u4EE3\u7801</a></li><li data-v-80180ebb><a href="https://github.com/FightingDesign/fighting-design/blob/master/docs/docs/components/swap.md" target="_blank" rel="noreferrer" data-v-80180ebb>\u6587\u6863\u7F16\u8F91</a></li></ul><h2 id="\u57FA\u672C\u4F7F\u7528" tabindex="-1" data-v-80180ebb>\u57FA\u672C\u4F7F\u7528 <a class="header-anchor" href="#\u57FA\u672C\u4F7F\u7528" aria-hidden="true" data-v-80180ebb>#</a></h2><p data-v-80180ebb>\u9700\u8981\u4F7F\u7528 <code data-v-80180ebb>v-model</code> \u7ED1\u5B9A\u4E00\u4E2A\u503C</p><p data-v-80180ebb><code data-v-80180ebb>icon-on</code> \u548C <code data-v-80180ebb>icon-off</code> \u5206\u522B\u63A7\u5236\u5207\u6362\u7684\u4E0D\u540C\u56FE\u6807</p>',6),_=l(`<details class="details custom-block" data-v-80180ebb><summary data-v-80180ebb>\u663E\u793A\u4EE3\u7801</summary><div class="language-html" data-v-80180ebb><button title="Copy Code" class="copy" data-v-80180ebb></button><span class="lang" data-v-80180ebb>html</span><pre class="shiki" data-v-80180ebb><code data-v-80180ebb><span class="line" data-v-80180ebb><span style="color:#89DDFF;" data-v-80180ebb>&lt;</span><span style="color:#F07178;" data-v-80180ebb>template</span><span style="color:#89DDFF;" data-v-80180ebb>&gt;</span></span>
<span class="line" data-v-80180ebb><span style="color:#A6ACCD;" data-v-80180ebb>  </span><span style="color:#89DDFF;" data-v-80180ebb>&lt;</span><span style="color:#F07178;" data-v-80180ebb>f-swap</span><span style="color:#89DDFF;" data-v-80180ebb> </span><span style="color:#C792EA;" data-v-80180ebb>v-model</span><span style="color:#89DDFF;" data-v-80180ebb>=</span><span style="color:#89DDFF;" data-v-80180ebb>&quot;</span><span style="color:#C3E88D;" data-v-80180ebb>value1</span><span style="color:#89DDFF;" data-v-80180ebb>&quot;</span><span style="color:#89DDFF;" data-v-80180ebb> </span><span style="color:#C792EA;" data-v-80180ebb>:icon-on</span><span style="color:#89DDFF;" data-v-80180ebb>=</span><span style="color:#89DDFF;" data-v-80180ebb>&quot;</span><span style="color:#C3E88D;" data-v-80180ebb>FIconSun</span><span style="color:#89DDFF;" data-v-80180ebb>&quot;</span><span style="color:#89DDFF;" data-v-80180ebb> </span><span style="color:#C792EA;" data-v-80180ebb>:icon-off</span><span style="color:#89DDFF;" data-v-80180ebb>=</span><span style="color:#89DDFF;" data-v-80180ebb>&quot;</span><span style="color:#C3E88D;" data-v-80180ebb>FIconMoon</span><span style="color:#89DDFF;" data-v-80180ebb>&quot;</span><span style="color:#89DDFF;" data-v-80180ebb> /&gt;</span></span>
<span class="line" data-v-80180ebb><span style="color:#A6ACCD;" data-v-80180ebb>  </span><span style="color:#89DDFF;" data-v-80180ebb>&lt;</span><span style="color:#F07178;" data-v-80180ebb>f-swap</span><span style="color:#89DDFF;" data-v-80180ebb> </span><span style="color:#C792EA;" data-v-80180ebb>v-model</span><span style="color:#89DDFF;" data-v-80180ebb>=</span><span style="color:#89DDFF;" data-v-80180ebb>&quot;</span><span style="color:#C3E88D;" data-v-80180ebb>value2</span><span style="color:#89DDFF;" data-v-80180ebb>&quot;</span><span style="color:#89DDFF;" data-v-80180ebb> </span><span style="color:#C792EA;" data-v-80180ebb>:icon-on</span><span style="color:#89DDFF;" data-v-80180ebb>=</span><span style="color:#89DDFF;" data-v-80180ebb>&quot;</span><span style="color:#C3E88D;" data-v-80180ebb>FIconSun</span><span style="color:#89DDFF;" data-v-80180ebb>&quot;</span><span style="color:#89DDFF;" data-v-80180ebb> </span><span style="color:#C792EA;" data-v-80180ebb>:icon-off</span><span style="color:#89DDFF;" data-v-80180ebb>=</span><span style="color:#89DDFF;" data-v-80180ebb>&quot;</span><span style="color:#C3E88D;" data-v-80180ebb>FIconMoon</span><span style="color:#89DDFF;" data-v-80180ebb>&quot;</span><span style="color:#89DDFF;" data-v-80180ebb> /&gt;</span></span>
<span class="line" data-v-80180ebb><span style="color:#89DDFF;" data-v-80180ebb>&lt;/</span><span style="color:#F07178;" data-v-80180ebb>template</span><span style="color:#89DDFF;" data-v-80180ebb>&gt;</span></span>
<span class="line" data-v-80180ebb></span>
<span class="line" data-v-80180ebb><span style="color:#89DDFF;" data-v-80180ebb>&lt;</span><span style="color:#F07178;" data-v-80180ebb>script</span><span style="color:#89DDFF;" data-v-80180ebb> </span><span style="color:#C792EA;" data-v-80180ebb>lang</span><span style="color:#89DDFF;" data-v-80180ebb>=</span><span style="color:#89DDFF;" data-v-80180ebb>&quot;</span><span style="color:#C3E88D;" data-v-80180ebb>ts</span><span style="color:#89DDFF;" data-v-80180ebb>&quot;</span><span style="color:#89DDFF;" data-v-80180ebb> </span><span style="color:#C792EA;" data-v-80180ebb>setup</span><span style="color:#89DDFF;" data-v-80180ebb>&gt;</span></span>
<span class="line" data-v-80180ebb><span style="color:#A6ACCD;" data-v-80180ebb>  </span><span style="color:#89DDFF;" data-v-80180ebb>import</span><span style="color:#A6ACCD;" data-v-80180ebb> </span><span style="color:#89DDFF;" data-v-80180ebb>{</span><span style="color:#F07178;" data-v-80180ebb> </span><span style="color:#A6ACCD;" data-v-80180ebb>FIconSun</span><span style="color:#89DDFF;" data-v-80180ebb>,</span><span style="color:#F07178;" data-v-80180ebb> </span><span style="color:#A6ACCD;" data-v-80180ebb>FIconMoon</span><span style="color:#F07178;" data-v-80180ebb> </span><span style="color:#89DDFF;" data-v-80180ebb>}</span><span style="color:#A6ACCD;" data-v-80180ebb> </span><span style="color:#89DDFF;" data-v-80180ebb>from</span><span style="color:#A6ACCD;" data-v-80180ebb> </span><span style="color:#89DDFF;" data-v-80180ebb>&#39;</span><span style="color:#C3E88D;" data-v-80180ebb>@fighting-design/fighting-icon</span><span style="color:#89DDFF;" data-v-80180ebb>&#39;</span></span>
<span class="line" data-v-80180ebb><span style="color:#A6ACCD;" data-v-80180ebb>  </span><span style="color:#89DDFF;" data-v-80180ebb>import</span><span style="color:#A6ACCD;" data-v-80180ebb> </span><span style="color:#89DDFF;" data-v-80180ebb>{</span><span style="color:#F07178;" data-v-80180ebb> </span><span style="color:#A6ACCD;" data-v-80180ebb>ref</span><span style="color:#F07178;" data-v-80180ebb> </span><span style="color:#89DDFF;" data-v-80180ebb>}</span><span style="color:#A6ACCD;" data-v-80180ebb> </span><span style="color:#89DDFF;" data-v-80180ebb>from</span><span style="color:#A6ACCD;" data-v-80180ebb> </span><span style="color:#89DDFF;" data-v-80180ebb>&#39;</span><span style="color:#C3E88D;" data-v-80180ebb>vue</span><span style="color:#89DDFF;" data-v-80180ebb>&#39;</span></span>
<span class="line" data-v-80180ebb></span>
<span class="line" data-v-80180ebb><span style="color:#A6ACCD;" data-v-80180ebb>  </span><span style="color:#C792EA;" data-v-80180ebb>const</span><span style="color:#A6ACCD;" data-v-80180ebb> value1 </span><span style="color:#89DDFF;" data-v-80180ebb>=</span><span style="color:#A6ACCD;" data-v-80180ebb> </span><span style="color:#82AAFF;" data-v-80180ebb>ref</span><span style="color:#A6ACCD;" data-v-80180ebb>(</span><span style="color:#FF9CAC;" data-v-80180ebb>true</span><span style="color:#A6ACCD;" data-v-80180ebb>)</span></span>
<span class="line" data-v-80180ebb><span style="color:#A6ACCD;" data-v-80180ebb>  </span><span style="color:#C792EA;" data-v-80180ebb>const</span><span style="color:#A6ACCD;" data-v-80180ebb> value2 </span><span style="color:#89DDFF;" data-v-80180ebb>=</span><span style="color:#A6ACCD;" data-v-80180ebb> </span><span style="color:#82AAFF;" data-v-80180ebb>ref</span><span style="color:#A6ACCD;" data-v-80180ebb>(</span><span style="color:#FF9CAC;" data-v-80180ebb>false</span><span style="color:#A6ACCD;" data-v-80180ebb>)</span></span>
<span class="line" data-v-80180ebb><span style="color:#89DDFF;" data-v-80180ebb>&lt;/</span><span style="color:#F07178;" data-v-80180ebb>script</span><span style="color:#89DDFF;" data-v-80180ebb>&gt;</span></span>
<span class="line" data-v-80180ebb></span></code></pre></div></details><h2 id="\u4E0D\u540C\u5C3A\u5BF8" tabindex="-1" data-v-80180ebb>\u4E0D\u540C\u5C3A\u5BF8 <a class="header-anchor" href="#\u4E0D\u540C\u5C3A\u5BF8" aria-hidden="true" data-v-80180ebb>#</a></h2><p data-v-80180ebb><code data-v-80180ebb>size</code> \u5C5E\u6027\u53EF\u914D\u7F6E\u4E0D\u540C\u7684\u5C3A\u5BF8</p>`,3),w=l(`<details class="details custom-block" data-v-80180ebb><summary data-v-80180ebb>\u663E\u793A\u4EE3\u7801</summary><div class="language-html" data-v-80180ebb><button title="Copy Code" class="copy" data-v-80180ebb></button><span class="lang" data-v-80180ebb>html</span><pre class="shiki" data-v-80180ebb><code data-v-80180ebb><span class="line" data-v-80180ebb><span style="color:#89DDFF;" data-v-80180ebb>&lt;</span><span style="color:#F07178;" data-v-80180ebb>template</span><span style="color:#89DDFF;" data-v-80180ebb>&gt;</span></span>
<span class="line" data-v-80180ebb><span style="color:#A6ACCD;" data-v-80180ebb>  </span><span style="color:#89DDFF;" data-v-80180ebb>&lt;</span><span style="color:#F07178;" data-v-80180ebb>f-swap</span></span>
<span class="line" data-v-80180ebb><span style="color:#89DDFF;" data-v-80180ebb>    </span><span style="color:#C792EA;" data-v-80180ebb>v-model</span><span style="color:#89DDFF;" data-v-80180ebb>=</span><span style="color:#89DDFF;" data-v-80180ebb>&quot;</span><span style="color:#C3E88D;" data-v-80180ebb>value5</span><span style="color:#89DDFF;" data-v-80180ebb>&quot;</span></span>
<span class="line" data-v-80180ebb><span style="color:#89DDFF;" data-v-80180ebb>    </span><span style="color:#C792EA;" data-v-80180ebb>:size</span><span style="color:#89DDFF;" data-v-80180ebb>=</span><span style="color:#89DDFF;" data-v-80180ebb>&quot;</span><span style="color:#C3E88D;" data-v-80180ebb>50</span><span style="color:#89DDFF;" data-v-80180ebb>&quot;</span></span>
<span class="line" data-v-80180ebb><span style="color:#89DDFF;" data-v-80180ebb>    </span><span style="color:#C792EA;" data-v-80180ebb>:icon-on</span><span style="color:#89DDFF;" data-v-80180ebb>=</span><span style="color:#89DDFF;" data-v-80180ebb>&quot;</span><span style="color:#C3E88D;" data-v-80180ebb>FIconFaceSmile</span><span style="color:#89DDFF;" data-v-80180ebb>&quot;</span></span>
<span class="line" data-v-80180ebb><span style="color:#89DDFF;" data-v-80180ebb>    </span><span style="color:#C792EA;" data-v-80180ebb>:icon-off</span><span style="color:#89DDFF;" data-v-80180ebb>=</span><span style="color:#89DDFF;" data-v-80180ebb>&quot;</span><span style="color:#C3E88D;" data-v-80180ebb>FIconFaceFrown</span><span style="color:#89DDFF;" data-v-80180ebb>&quot;</span></span>
<span class="line" data-v-80180ebb><span style="color:#89DDFF;" data-v-80180ebb>  /&gt;</span></span>
<span class="line" data-v-80180ebb><span style="color:#A6ACCD;" data-v-80180ebb>  </span><span style="color:#89DDFF;" data-v-80180ebb>&lt;</span><span style="color:#F07178;" data-v-80180ebb>f-swap</span></span>
<span class="line" data-v-80180ebb><span style="color:#89DDFF;" data-v-80180ebb>    </span><span style="color:#C792EA;" data-v-80180ebb>v-model</span><span style="color:#89DDFF;" data-v-80180ebb>=</span><span style="color:#89DDFF;" data-v-80180ebb>&quot;</span><span style="color:#C3E88D;" data-v-80180ebb>value6</span><span style="color:#89DDFF;" data-v-80180ebb>&quot;</span></span>
<span class="line" data-v-80180ebb><span style="color:#89DDFF;" data-v-80180ebb>    </span><span style="color:#C792EA;" data-v-80180ebb>size</span><span style="color:#89DDFF;" data-v-80180ebb>=</span><span style="color:#89DDFF;" data-v-80180ebb>&quot;</span><span style="color:#C3E88D;" data-v-80180ebb>30px</span><span style="color:#89DDFF;" data-v-80180ebb>&quot;</span></span>
<span class="line" data-v-80180ebb><span style="color:#89DDFF;" data-v-80180ebb>    </span><span style="color:#C792EA;" data-v-80180ebb>:icon-on</span><span style="color:#89DDFF;" data-v-80180ebb>=</span><span style="color:#89DDFF;" data-v-80180ebb>&quot;</span><span style="color:#C3E88D;" data-v-80180ebb>FIconEye</span><span style="color:#89DDFF;" data-v-80180ebb>&quot;</span></span>
<span class="line" data-v-80180ebb><span style="color:#89DDFF;" data-v-80180ebb>    </span><span style="color:#C792EA;" data-v-80180ebb>:icon-off</span><span style="color:#89DDFF;" data-v-80180ebb>=</span><span style="color:#89DDFF;" data-v-80180ebb>&quot;</span><span style="color:#C3E88D;" data-v-80180ebb>FIconEyeSlash</span><span style="color:#89DDFF;" data-v-80180ebb>&quot;</span></span>
<span class="line" data-v-80180ebb><span style="color:#89DDFF;" data-v-80180ebb>  /&gt;</span></span>
<span class="line" data-v-80180ebb><span style="color:#89DDFF;" data-v-80180ebb>&lt;/</span><span style="color:#F07178;" data-v-80180ebb>template</span><span style="color:#89DDFF;" data-v-80180ebb>&gt;</span></span>
<span class="line" data-v-80180ebb></span>
<span class="line" data-v-80180ebb><span style="color:#89DDFF;" data-v-80180ebb>&lt;</span><span style="color:#F07178;" data-v-80180ebb>script</span><span style="color:#89DDFF;" data-v-80180ebb> </span><span style="color:#C792EA;" data-v-80180ebb>lang</span><span style="color:#89DDFF;" data-v-80180ebb>=</span><span style="color:#89DDFF;" data-v-80180ebb>&quot;</span><span style="color:#C3E88D;" data-v-80180ebb>ts</span><span style="color:#89DDFF;" data-v-80180ebb>&quot;</span><span style="color:#89DDFF;" data-v-80180ebb> </span><span style="color:#C792EA;" data-v-80180ebb>setup</span><span style="color:#89DDFF;" data-v-80180ebb>&gt;</span></span>
<span class="line" data-v-80180ebb><span style="color:#A6ACCD;" data-v-80180ebb>  </span><span style="color:#89DDFF;" data-v-80180ebb>import</span><span style="color:#A6ACCD;" data-v-80180ebb> </span><span style="color:#89DDFF;" data-v-80180ebb>{</span></span>
<span class="line" data-v-80180ebb><span style="color:#F07178;" data-v-80180ebb>    </span><span style="color:#A6ACCD;" data-v-80180ebb>FIconFaceFrown</span><span style="color:#89DDFF;" data-v-80180ebb>,</span></span>
<span class="line" data-v-80180ebb><span style="color:#F07178;" data-v-80180ebb>    </span><span style="color:#A6ACCD;" data-v-80180ebb>FIconFaceSmile</span><span style="color:#89DDFF;" data-v-80180ebb>,</span></span>
<span class="line" data-v-80180ebb><span style="color:#F07178;" data-v-80180ebb>    </span><span style="color:#A6ACCD;" data-v-80180ebb>FIconEye</span><span style="color:#89DDFF;" data-v-80180ebb>,</span></span>
<span class="line" data-v-80180ebb><span style="color:#F07178;" data-v-80180ebb>    </span><span style="color:#A6ACCD;" data-v-80180ebb>FIconEyeSlash</span></span>
<span class="line" data-v-80180ebb><span style="color:#F07178;" data-v-80180ebb>  </span><span style="color:#89DDFF;" data-v-80180ebb>}</span><span style="color:#A6ACCD;" data-v-80180ebb> </span><span style="color:#89DDFF;" data-v-80180ebb>from</span><span style="color:#A6ACCD;" data-v-80180ebb> </span><span style="color:#89DDFF;" data-v-80180ebb>&#39;</span><span style="color:#C3E88D;" data-v-80180ebb>@fighting-design/fighting-icon</span><span style="color:#89DDFF;" data-v-80180ebb>&#39;</span></span>
<span class="line" data-v-80180ebb><span style="color:#A6ACCD;" data-v-80180ebb>  </span><span style="color:#89DDFF;" data-v-80180ebb>import</span><span style="color:#A6ACCD;" data-v-80180ebb> </span><span style="color:#89DDFF;" data-v-80180ebb>{</span><span style="color:#F07178;" data-v-80180ebb> </span><span style="color:#A6ACCD;" data-v-80180ebb>ref</span><span style="color:#F07178;" data-v-80180ebb> </span><span style="color:#89DDFF;" data-v-80180ebb>}</span><span style="color:#A6ACCD;" data-v-80180ebb> </span><span style="color:#89DDFF;" data-v-80180ebb>from</span><span style="color:#A6ACCD;" data-v-80180ebb> </span><span style="color:#89DDFF;" data-v-80180ebb>&#39;</span><span style="color:#C3E88D;" data-v-80180ebb>vue</span><span style="color:#89DDFF;" data-v-80180ebb>&#39;</span></span>
<span class="line" data-v-80180ebb></span>
<span class="line" data-v-80180ebb><span style="color:#A6ACCD;" data-v-80180ebb>  </span><span style="color:#C792EA;" data-v-80180ebb>const</span><span style="color:#A6ACCD;" data-v-80180ebb> value3 </span><span style="color:#89DDFF;" data-v-80180ebb>=</span><span style="color:#A6ACCD;" data-v-80180ebb> </span><span style="color:#82AAFF;" data-v-80180ebb>ref</span><span style="color:#A6ACCD;" data-v-80180ebb>(</span><span style="color:#FF9CAC;" data-v-80180ebb>true</span><span style="color:#A6ACCD;" data-v-80180ebb>)</span></span>
<span class="line" data-v-80180ebb><span style="color:#A6ACCD;" data-v-80180ebb>  </span><span style="color:#C792EA;" data-v-80180ebb>const</span><span style="color:#A6ACCD;" data-v-80180ebb> value4 </span><span style="color:#89DDFF;" data-v-80180ebb>=</span><span style="color:#A6ACCD;" data-v-80180ebb> </span><span style="color:#82AAFF;" data-v-80180ebb>ref</span><span style="color:#A6ACCD;" data-v-80180ebb>(</span><span style="color:#FF9CAC;" data-v-80180ebb>true</span><span style="color:#A6ACCD;" data-v-80180ebb>)</span></span>
<span class="line" data-v-80180ebb><span style="color:#89DDFF;" data-v-80180ebb>&lt;/</span><span style="color:#F07178;" data-v-80180ebb>script</span><span style="color:#89DDFF;" data-v-80180ebb>&gt;</span></span>
<span class="line" data-v-80180ebb></span></code></pre></div></details><h2 id="\u4E0D\u540C\u52A8\u753B" tabindex="-1" data-v-80180ebb>\u4E0D\u540C\u52A8\u753B <a class="header-anchor" href="#\u4E0D\u540C\u52A8\u753B" aria-hidden="true" data-v-80180ebb>#</a></h2><p data-v-80180ebb><code data-v-80180ebb>type</code> \u5C5E\u6027\u53EF\u4EE5\u914D\u7F6E\u4E0D\u540C\u7684\u52A8\u753B\u7C7B\u578B</p>`,3),V=l(`<details class="details custom-block" data-v-80180ebb><summary data-v-80180ebb>\u663E\u793A\u4EE3\u7801</summary><div class="language-html" data-v-80180ebb><button title="Copy Code" class="copy" data-v-80180ebb></button><span class="lang" data-v-80180ebb>html</span><pre class="shiki" data-v-80180ebb><code data-v-80180ebb><span class="line" data-v-80180ebb><span style="color:#89DDFF;" data-v-80180ebb>&lt;</span><span style="color:#F07178;" data-v-80180ebb>template</span><span style="color:#89DDFF;" data-v-80180ebb>&gt;</span></span>
<span class="line" data-v-80180ebb><span style="color:#A6ACCD;" data-v-80180ebb>  </span><span style="color:#89DDFF;" data-v-80180ebb>&lt;</span><span style="color:#F07178;" data-v-80180ebb>f-swap</span></span>
<span class="line" data-v-80180ebb><span style="color:#89DDFF;" data-v-80180ebb>    </span><span style="color:#C792EA;" data-v-80180ebb>v-model</span><span style="color:#89DDFF;" data-v-80180ebb>=</span><span style="color:#89DDFF;" data-v-80180ebb>&quot;</span><span style="color:#C3E88D;" data-v-80180ebb>value5</span><span style="color:#89DDFF;" data-v-80180ebb>&quot;</span></span>
<span class="line" data-v-80180ebb><span style="color:#89DDFF;" data-v-80180ebb>    </span><span style="color:#C792EA;" data-v-80180ebb>type</span><span style="color:#89DDFF;" data-v-80180ebb>=</span><span style="color:#89DDFF;" data-v-80180ebb>&quot;</span><span style="color:#C3E88D;" data-v-80180ebb>default</span><span style="color:#89DDFF;" data-v-80180ebb>&quot;</span></span>
<span class="line" data-v-80180ebb><span style="color:#89DDFF;" data-v-80180ebb>    </span><span style="color:#C792EA;" data-v-80180ebb>:icon-on</span><span style="color:#89DDFF;" data-v-80180ebb>=</span><span style="color:#89DDFF;" data-v-80180ebb>&quot;</span><span style="color:#C3E88D;" data-v-80180ebb>FIconEye</span><span style="color:#89DDFF;" data-v-80180ebb>&quot;</span></span>
<span class="line" data-v-80180ebb><span style="color:#89DDFF;" data-v-80180ebb>    </span><span style="color:#C792EA;" data-v-80180ebb>:icon-off</span><span style="color:#89DDFF;" data-v-80180ebb>=</span><span style="color:#89DDFF;" data-v-80180ebb>&quot;</span><span style="color:#C3E88D;" data-v-80180ebb>FIconEyeSlash</span><span style="color:#89DDFF;" data-v-80180ebb>&quot;</span></span>
<span class="line" data-v-80180ebb><span style="color:#89DDFF;" data-v-80180ebb>  /&gt;</span></span>
<span class="line" data-v-80180ebb><span style="color:#A6ACCD;" data-v-80180ebb>  </span><span style="color:#89DDFF;" data-v-80180ebb>&lt;</span><span style="color:#F07178;" data-v-80180ebb>f-swap</span></span>
<span class="line" data-v-80180ebb><span style="color:#89DDFF;" data-v-80180ebb>    </span><span style="color:#C792EA;" data-v-80180ebb>v-model</span><span style="color:#89DDFF;" data-v-80180ebb>=</span><span style="color:#89DDFF;" data-v-80180ebb>&quot;</span><span style="color:#C3E88D;" data-v-80180ebb>value6</span><span style="color:#89DDFF;" data-v-80180ebb>&quot;</span></span>
<span class="line" data-v-80180ebb><span style="color:#89DDFF;" data-v-80180ebb>    </span><span style="color:#C792EA;" data-v-80180ebb>type</span><span style="color:#89DDFF;" data-v-80180ebb>=</span><span style="color:#89DDFF;" data-v-80180ebb>&quot;</span><span style="color:#C3E88D;" data-v-80180ebb>sound</span><span style="color:#89DDFF;" data-v-80180ebb>&quot;</span></span>
<span class="line" data-v-80180ebb><span style="color:#89DDFF;" data-v-80180ebb>    </span><span style="color:#C792EA;" data-v-80180ebb>:icon-on</span><span style="color:#89DDFF;" data-v-80180ebb>=</span><span style="color:#89DDFF;" data-v-80180ebb>&quot;</span><span style="color:#C3E88D;" data-v-80180ebb>FIconSun</span><span style="color:#89DDFF;" data-v-80180ebb>&quot;</span></span>
<span class="line" data-v-80180ebb><span style="color:#89DDFF;" data-v-80180ebb>    </span><span style="color:#C792EA;" data-v-80180ebb>:icon-off</span><span style="color:#89DDFF;" data-v-80180ebb>=</span><span style="color:#89DDFF;" data-v-80180ebb>&quot;</span><span style="color:#C3E88D;" data-v-80180ebb>FIconMoon</span><span style="color:#89DDFF;" data-v-80180ebb>&quot;</span></span>
<span class="line" data-v-80180ebb><span style="color:#89DDFF;" data-v-80180ebb>  /&gt;</span></span>
<span class="line" data-v-80180ebb><span style="color:#A6ACCD;" data-v-80180ebb>  </span><span style="color:#89DDFF;" data-v-80180ebb>&lt;</span><span style="color:#F07178;" data-v-80180ebb>f-swap</span></span>
<span class="line" data-v-80180ebb><span style="color:#89DDFF;" data-v-80180ebb>    </span><span style="color:#C792EA;" data-v-80180ebb>v-model</span><span style="color:#89DDFF;" data-v-80180ebb>=</span><span style="color:#89DDFF;" data-v-80180ebb>&quot;</span><span style="color:#C3E88D;" data-v-80180ebb>value7</span><span style="color:#89DDFF;" data-v-80180ebb>&quot;</span></span>
<span class="line" data-v-80180ebb><span style="color:#89DDFF;" data-v-80180ebb>    </span><span style="color:#C792EA;" data-v-80180ebb>type</span><span style="color:#89DDFF;" data-v-80180ebb>=</span><span style="color:#89DDFF;" data-v-80180ebb>&quot;</span><span style="color:#C3E88D;" data-v-80180ebb>swap</span><span style="color:#89DDFF;" data-v-80180ebb>&quot;</span></span>
<span class="line" data-v-80180ebb><span style="color:#89DDFF;" data-v-80180ebb>    </span><span style="color:#C792EA;" data-v-80180ebb>:icon-on</span><span style="color:#89DDFF;" data-v-80180ebb>=</span><span style="color:#89DDFF;" data-v-80180ebb>&quot;</span><span style="color:#C3E88D;" data-v-80180ebb>FIconFaceSmile</span><span style="color:#89DDFF;" data-v-80180ebb>&quot;</span></span>
<span class="line" data-v-80180ebb><span style="color:#89DDFF;" data-v-80180ebb>    </span><span style="color:#C792EA;" data-v-80180ebb>:icon-off</span><span style="color:#89DDFF;" data-v-80180ebb>=</span><span style="color:#89DDFF;" data-v-80180ebb>&quot;</span><span style="color:#C3E88D;" data-v-80180ebb>FIconFaceFrown</span><span style="color:#89DDFF;" data-v-80180ebb>&quot;</span></span>
<span class="line" data-v-80180ebb><span style="color:#89DDFF;" data-v-80180ebb>  /&gt;</span></span>
<span class="line" data-v-80180ebb><span style="color:#89DDFF;" data-v-80180ebb>&lt;/</span><span style="color:#F07178;" data-v-80180ebb>template</span><span style="color:#89DDFF;" data-v-80180ebb>&gt;</span></span>
<span class="line" data-v-80180ebb></span>
<span class="line" data-v-80180ebb><span style="color:#89DDFF;" data-v-80180ebb>&lt;</span><span style="color:#F07178;" data-v-80180ebb>script</span><span style="color:#89DDFF;" data-v-80180ebb> </span><span style="color:#C792EA;" data-v-80180ebb>lang</span><span style="color:#89DDFF;" data-v-80180ebb>=</span><span style="color:#89DDFF;" data-v-80180ebb>&quot;</span><span style="color:#C3E88D;" data-v-80180ebb>ts</span><span style="color:#89DDFF;" data-v-80180ebb>&quot;</span><span style="color:#89DDFF;" data-v-80180ebb> </span><span style="color:#C792EA;" data-v-80180ebb>setup</span><span style="color:#89DDFF;" data-v-80180ebb>&gt;</span></span>
<span class="line" data-v-80180ebb><span style="color:#A6ACCD;" data-v-80180ebb>  </span><span style="color:#89DDFF;" data-v-80180ebb>import</span><span style="color:#A6ACCD;" data-v-80180ebb> </span><span style="color:#89DDFF;" data-v-80180ebb>{</span></span>
<span class="line" data-v-80180ebb><span style="color:#F07178;" data-v-80180ebb>    </span><span style="color:#A6ACCD;" data-v-80180ebb>FIconSun</span><span style="color:#89DDFF;" data-v-80180ebb>,</span></span>
<span class="line" data-v-80180ebb><span style="color:#F07178;" data-v-80180ebb>    </span><span style="color:#A6ACCD;" data-v-80180ebb>FIconMoon</span><span style="color:#89DDFF;" data-v-80180ebb>,</span></span>
<span class="line" data-v-80180ebb><span style="color:#F07178;" data-v-80180ebb>    </span><span style="color:#A6ACCD;" data-v-80180ebb>FIconFaceSmile</span><span style="color:#89DDFF;" data-v-80180ebb>,</span></span>
<span class="line" data-v-80180ebb><span style="color:#F07178;" data-v-80180ebb>    </span><span style="color:#A6ACCD;" data-v-80180ebb>FIconFaceFrown</span><span style="color:#89DDFF;" data-v-80180ebb>,</span></span>
<span class="line" data-v-80180ebb><span style="color:#F07178;" data-v-80180ebb>    </span><span style="color:#A6ACCD;" data-v-80180ebb>FIconEye</span><span style="color:#89DDFF;" data-v-80180ebb>,</span></span>
<span class="line" data-v-80180ebb><span style="color:#F07178;" data-v-80180ebb>    </span><span style="color:#A6ACCD;" data-v-80180ebb>FIconEyeSlash</span></span>
<span class="line" data-v-80180ebb><span style="color:#F07178;" data-v-80180ebb>  </span><span style="color:#89DDFF;" data-v-80180ebb>}</span><span style="color:#A6ACCD;" data-v-80180ebb> </span><span style="color:#89DDFF;" data-v-80180ebb>from</span><span style="color:#A6ACCD;" data-v-80180ebb> </span><span style="color:#89DDFF;" data-v-80180ebb>&#39;</span><span style="color:#C3E88D;" data-v-80180ebb>@fighting-design/fighting-icon</span><span style="color:#89DDFF;" data-v-80180ebb>&#39;</span></span>
<span class="line" data-v-80180ebb><span style="color:#A6ACCD;" data-v-80180ebb>  </span><span style="color:#89DDFF;" data-v-80180ebb>import</span><span style="color:#A6ACCD;" data-v-80180ebb> </span><span style="color:#89DDFF;" data-v-80180ebb>{</span><span style="color:#F07178;" data-v-80180ebb> </span><span style="color:#A6ACCD;" data-v-80180ebb>ref</span><span style="color:#F07178;" data-v-80180ebb> </span><span style="color:#89DDFF;" data-v-80180ebb>}</span><span style="color:#A6ACCD;" data-v-80180ebb> </span><span style="color:#89DDFF;" data-v-80180ebb>from</span><span style="color:#A6ACCD;" data-v-80180ebb> </span><span style="color:#89DDFF;" data-v-80180ebb>&#39;</span><span style="color:#C3E88D;" data-v-80180ebb>vue</span><span style="color:#89DDFF;" data-v-80180ebb>&#39;</span></span>
<span class="line" data-v-80180ebb></span>
<span class="line" data-v-80180ebb><span style="color:#A6ACCD;" data-v-80180ebb>  </span><span style="color:#C792EA;" data-v-80180ebb>const</span><span style="color:#A6ACCD;" data-v-80180ebb> value5 </span><span style="color:#89DDFF;" data-v-80180ebb>=</span><span style="color:#A6ACCD;" data-v-80180ebb> </span><span style="color:#82AAFF;" data-v-80180ebb>ref</span><span style="color:#A6ACCD;" data-v-80180ebb>(</span><span style="color:#FF9CAC;" data-v-80180ebb>true</span><span style="color:#A6ACCD;" data-v-80180ebb>)</span></span>
<span class="line" data-v-80180ebb><span style="color:#A6ACCD;" data-v-80180ebb>  </span><span style="color:#C792EA;" data-v-80180ebb>const</span><span style="color:#A6ACCD;" data-v-80180ebb> value6 </span><span style="color:#89DDFF;" data-v-80180ebb>=</span><span style="color:#A6ACCD;" data-v-80180ebb> </span><span style="color:#82AAFF;" data-v-80180ebb>ref</span><span style="color:#A6ACCD;" data-v-80180ebb>(</span><span style="color:#FF9CAC;" data-v-80180ebb>true</span><span style="color:#A6ACCD;" data-v-80180ebb>)</span></span>
<span class="line" data-v-80180ebb><span style="color:#A6ACCD;" data-v-80180ebb>  </span><span style="color:#C792EA;" data-v-80180ebb>const</span><span style="color:#A6ACCD;" data-v-80180ebb> value7 </span><span style="color:#89DDFF;" data-v-80180ebb>=</span><span style="color:#A6ACCD;" data-v-80180ebb> </span><span style="color:#82AAFF;" data-v-80180ebb>ref</span><span style="color:#A6ACCD;" data-v-80180ebb>(</span><span style="color:#FF9CAC;" data-v-80180ebb>true</span><span style="color:#A6ACCD;" data-v-80180ebb>)</span></span>
<span class="line" data-v-80180ebb><span style="color:#89DDFF;" data-v-80180ebb>&lt;/</span><span style="color:#F07178;" data-v-80180ebb>script</span><span style="color:#89DDFF;" data-v-80180ebb>&gt;</span></span>
<span class="line" data-v-80180ebb></span></code></pre></div></details><h2 id="attributes" tabindex="-1" data-v-80180ebb>Attributes <a class="header-anchor" href="#attributes" aria-hidden="true" data-v-80180ebb>#</a></h2><div class="vp-table__container" data-v-80180ebb><table data-v-80180ebb><thead data-v-80180ebb><tr data-v-80180ebb><th data-v-80180ebb>\u53C2\u6570</th><th data-v-80180ebb>\u8BF4\u660E</th><th data-v-80180ebb>\u7C7B\u578B</th><th data-v-80180ebb>\u53EF\u9009\u503C</th><th data-v-80180ebb>\u9ED8\u8BA4\u503C</th></tr></thead><tbody data-v-80180ebb><tr data-v-80180ebb><td data-v-80180ebb><code data-v-80180ebb>v-model</code></td><td data-v-80180ebb>\u7ED1\u5B9A\u503C</td><td data-v-80180ebb>boolean</td><td data-v-80180ebb>\u2014\u2014</td><td data-v-80180ebb>false</td></tr><tr data-v-80180ebb><td data-v-80180ebb><code data-v-80180ebb>size</code></td><td data-v-80180ebb>\u7EC4\u4EF6\u5C3A\u5BF8</td><td data-v-80180ebb>string / number</td><td data-v-80180ebb>\u2014\u2014</td><td data-v-80180ebb>40</td></tr><tr data-v-80180ebb><td data-v-80180ebb><code data-v-80180ebb>type</code></td><td data-v-80180ebb>\u52A8\u753B\u7C7B\u578B</td><td data-v-80180ebb>string</td><td data-v-80180ebb><code data-v-80180ebb>sound</code> <code data-v-80180ebb>swap</code> <code data-v-80180ebb>default</code></td><td data-v-80180ebb>default</td></tr><tr data-v-80180ebb><td data-v-80180ebb><code data-v-80180ebb>icon-on</code></td><td data-v-80180ebb>\u6253\u5F00\u5C55\u793A\u7684\u56FE\u6807</td><td data-v-80180ebb>object (VNode / Component)</td><td data-v-80180ebb>\u2014\u2014</td><td data-v-80180ebb>null</td></tr><tr data-v-80180ebb><td data-v-80180ebb><code data-v-80180ebb>icon-off</code></td><td data-v-80180ebb>\u5173\u95ED\u5C55\u793A\u7684\u56FE\u6807</td><td data-v-80180ebb>object (VNode / Component)</td><td data-v-80180ebb>\u2014\u2014</td><td data-v-80180ebb>null</td></tr><tr data-v-80180ebb><td data-v-80180ebb><code data-v-80180ebb>on-change</code></td><td data-v-80180ebb>\u5F53\u7ED1\u5B9A\u503C\u53D1\u751F\u6539\u53D8\u65F6\u89E6\u53D1\u7684\u56DE\u8C03</td><td data-v-80180ebb>Function</td><td data-v-80180ebb>\u2014\u2014</td><td data-v-80180ebb>null</td></tr></tbody></table></div><h2 id="interface" tabindex="-1" data-v-80180ebb>Interface <a class="header-anchor" href="#interface" aria-hidden="true" data-v-80180ebb>#</a></h2><p data-v-80180ebb>\u7EC4\u4EF6\u5BFC\u51FA\u4EE5\u4E0B\u7C7B\u578B\u5B9A\u4E49\uFF1A</p><div class="language-ts" data-v-80180ebb><button title="Copy Code" class="copy" data-v-80180ebb></button><span class="lang" data-v-80180ebb>ts</span><pre class="shiki" data-v-80180ebb><code data-v-80180ebb><span class="line" data-v-80180ebb><span style="color:#89DDFF;" data-v-80180ebb>import</span><span style="color:#A6ACCD;" data-v-80180ebb> </span><span style="color:#89DDFF;" data-v-80180ebb>type</span><span style="color:#A6ACCD;" data-v-80180ebb> </span><span style="color:#89DDFF;" data-v-80180ebb>{</span></span>
<span class="line" data-v-80180ebb><span style="color:#F07178;" data-v-80180ebb>  </span><span style="color:#A6ACCD;" data-v-80180ebb>SwapInstance</span><span style="color:#89DDFF;" data-v-80180ebb>,</span></span>
<span class="line" data-v-80180ebb><span style="color:#F07178;" data-v-80180ebb>  </span><span style="color:#A6ACCD;" data-v-80180ebb>SwapPropsType</span><span style="color:#89DDFF;" data-v-80180ebb>,</span></span>
<span class="line" data-v-80180ebb><span style="color:#F07178;" data-v-80180ebb>  </span><span style="color:#A6ACCD;" data-v-80180ebb>SwapType</span><span style="color:#89DDFF;" data-v-80180ebb>,</span></span>
<span class="line" data-v-80180ebb><span style="color:#F07178;" data-v-80180ebb>  </span><span style="color:#A6ACCD;" data-v-80180ebb>SwapOnChangeInterface</span></span>
<span class="line" data-v-80180ebb><span style="color:#89DDFF;" data-v-80180ebb>}</span><span style="color:#A6ACCD;" data-v-80180ebb> </span><span style="color:#89DDFF;" data-v-80180ebb>from</span><span style="color:#A6ACCD;" data-v-80180ebb> </span><span style="color:#89DDFF;" data-v-80180ebb>&#39;</span><span style="color:#C3E88D;" data-v-80180ebb>fighting-design</span><span style="color:#89DDFF;" data-v-80180ebb>&#39;</span></span>
<span class="line" data-v-80180ebb></span></code></pre></div><h2 id="contributors" tabindex="-1" data-v-80180ebb>Contributors <a class="header-anchor" href="#contributors" aria-hidden="true" data-v-80180ebb>#</a></h2>`,7),S={href:"https://github.com/Tyh2001",target:"_blank"},k={href:"https://github.com/ChetSerenade",target:"_blank"},O=JSON.parse('{"title":"Swap \u5207\u6362","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u57FA\u672C\u4F7F\u7528","slug":"\u57FA\u672C\u4F7F\u7528","link":"#\u57FA\u672C\u4F7F\u7528","children":[]},{"level":2,"title":"\u4E0D\u540C\u5C3A\u5BF8","slug":"\u4E0D\u540C\u5C3A\u5BF8","link":"#\u4E0D\u540C\u5C3A\u5BF8","children":[]},{"level":2,"title":"\u4E0D\u540C\u52A8\u753B","slug":"\u4E0D\u540C\u52A8\u753B","link":"#\u4E0D\u540C\u52A8\u753B","children":[]},{"level":2,"title":"Attributes","slug":"attributes","link":"#attributes","children":[]},{"level":2,"title":"Interface","slug":"interface","link":"#interface","children":[]},{"level":2,"title":"Contributors","slug":"contributors","link":"#contributors","children":[]}],"relativePath":"components/swap.md","lastUpdated":1667811023000}'),x={name:"components/swap.md"},U=h({...x,setup(z){const d=b(!0),c=b(!1),v=b(!0),r=b(!0),F=b(!0),D=b(!0),y=b(!0);return(M,a)=>{const n=E("f-swap"),u=E("f-avatar");return g(),q("div",null,[I,t(n,{modelValue:d.value,"onUpdate:modelValue":a[0]||(a[0]=e=>d.value=e),"icon-on":s(o),"icon-off":s(p)},null,8,["modelValue","icon-on","icon-off"]),t(n,{modelValue:c.value,"onUpdate:modelValue":a[1]||(a[1]=e=>c.value=e),"icon-on":s(o),"icon-off":s(p)},null,8,["modelValue","icon-on","icon-off"]),_,t(n,{modelValue:v.value,"onUpdate:modelValue":a[2]||(a[2]=e=>v.value=e),size:50,"icon-on":s(m),"icon-off":s(C)},null,8,["modelValue","icon-on","icon-off"]),t(n,{modelValue:r.value,"onUpdate:modelValue":a[3]||(a[3]=e=>r.value=e),size:"30px","icon-on":s(i),"icon-off":s(A)},null,8,["modelValue","icon-on","icon-off"]),w,t(n,{modelValue:F.value,"onUpdate:modelValue":a[4]||(a[4]=e=>F.value=e),type:"default","icon-on":s(i),"icon-off":s(A)},null,8,["modelValue","icon-on","icon-off"]),t(n,{modelValue:D.value,"onUpdate:modelValue":a[5]||(a[5]=e=>D.value=e),type:"sound","icon-on":s(o),"icon-off":s(p)},null,8,["modelValue","icon-on","icon-off"]),t(n,{modelValue:y.value,"onUpdate:modelValue":a[6]||(a[6]=e=>y.value=e),type:"swap","icon-on":s(m),"icon-off":s(C)},null,8,["modelValue","icon-on","icon-off"]),V,f("a",S,[t(u,{round:"",src:"https://avatars.githubusercontent.com/u/73180970?v=4"})]),f("a",k,[t(u,{round:"",src:"https://avatars.githubusercontent.com/u/44160015?v=4"})])])}}});const P=B(U,[["__scopeId","data-v-80180ebb"]]);export{O as __pageData,P as default};
