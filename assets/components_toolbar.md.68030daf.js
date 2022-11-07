import{r as d,o as C,c as h,a,w as s,d as r,_ as u,e as n,u as o,b as l}from"./app.a6d89a4c.js";import{F as v,a as D,b as F,c as y}from"./chunks/f-icon-clock.297fcde8.js";const A=n('<h1 id="toolbar-\u5DE5\u5177\u680F" tabindex="-1" data-v-bb41a092>Toolbar \u5DE5\u5177\u680F <a class="header-anchor" href="#toolbar-\u5DE5\u5177\u680F" aria-hidden="true" data-v-bb41a092>#</a></h1><p data-v-bb41a092><code data-v-bb41a092>Toolbar</code> \u5DE5\u5177\u680F\u7EC4\u4EF6</p><ul data-v-bb41a092><li data-v-bb41a092><a href="https://github.com/FightingDesign/fighting-design/tree/master/packages/fighting-design/toolbar" target="_blank" rel="noreferrer" data-v-bb41a092>\u6E90\u4EE3\u7801</a></li><li data-v-bb41a092><a href="https://github.com/FightingDesign/fighting-design/blob/master/docs/docs/components/toolbar.md" target="_blank" rel="noreferrer" data-v-bb41a092>\u6587\u6863\u7F16\u8F91</a></li></ul><h2 id="\u57FA\u672C\u4F7F\u7528" tabindex="-1" data-v-bb41a092>\u57FA\u672C\u4F7F\u7528 <a class="header-anchor" href="#\u57FA\u672C\u4F7F\u7528" aria-hidden="true" data-v-bb41a092>#</a></h2><p data-v-bb41a092>\u5DE5\u5177\u680F\u7684\u57FA\u672C\u4F7F\u7528\uFF0C<code data-v-bb41a092>icon</code> \u53EF\u4EE5\u914D\u7F6E\u5E26\u6709\u56FE\u8868\u7684\u9009\u9879</p>',5),_=n(`<details class="details custom-block" data-v-bb41a092><summary data-v-bb41a092>\u663E\u793A\u4EE3\u7801</summary><div class="language-html" data-v-bb41a092><button title="Copy Code" class="copy" data-v-bb41a092></button><span class="lang" data-v-bb41a092>html</span><pre class="shiki" data-v-bb41a092><code data-v-bb41a092><span class="line" data-v-bb41a092><span style="color:#89DDFF;" data-v-bb41a092>&lt;</span><span style="color:#F07178;" data-v-bb41a092>template</span><span style="color:#89DDFF;" data-v-bb41a092>&gt;</span></span>
<span class="line" data-v-bb41a092><span style="color:#A6ACCD;" data-v-bb41a092>  </span><span style="color:#89DDFF;" data-v-bb41a092>&lt;</span><span style="color:#F07178;" data-v-bb41a092>f-toolbar</span><span style="color:#89DDFF;" data-v-bb41a092>&gt;</span></span>
<span class="line" data-v-bb41a092><span style="color:#A6ACCD;" data-v-bb41a092>    </span><span style="color:#89DDFF;" data-v-bb41a092>&lt;</span><span style="color:#F07178;" data-v-bb41a092>f-toolbar-item</span><span style="color:#89DDFF;" data-v-bb41a092> </span><span style="color:#C792EA;" data-v-bb41a092>:icon</span><span style="color:#89DDFF;" data-v-bb41a092>=</span><span style="color:#89DDFF;" data-v-bb41a092>&quot;</span><span style="color:#C3E88D;" data-v-bb41a092>FIconApps</span><span style="color:#89DDFF;" data-v-bb41a092>&quot;</span><span style="color:#89DDFF;" data-v-bb41a092> /&gt;</span></span>
<span class="line" data-v-bb41a092><span style="color:#A6ACCD;" data-v-bb41a092>    </span><span style="color:#89DDFF;" data-v-bb41a092>&lt;</span><span style="color:#F07178;" data-v-bb41a092>f-toolbar-item</span><span style="color:#89DDFF;" data-v-bb41a092> </span><span style="color:#C792EA;" data-v-bb41a092>:icon</span><span style="color:#89DDFF;" data-v-bb41a092>=</span><span style="color:#89DDFF;" data-v-bb41a092>&quot;</span><span style="color:#C3E88D;" data-v-bb41a092>FIconBlock</span><span style="color:#89DDFF;" data-v-bb41a092>&quot;</span><span style="color:#89DDFF;" data-v-bb41a092> /&gt;</span></span>
<span class="line" data-v-bb41a092><span style="color:#A6ACCD;" data-v-bb41a092>    </span><span style="color:#89DDFF;" data-v-bb41a092>&lt;</span><span style="color:#F07178;" data-v-bb41a092>f-toolbar-item</span><span style="color:#89DDFF;" data-v-bb41a092> </span><span style="color:#C792EA;" data-v-bb41a092>:icon</span><span style="color:#89DDFF;" data-v-bb41a092>=</span><span style="color:#89DDFF;" data-v-bb41a092>&quot;</span><span style="color:#C3E88D;" data-v-bb41a092>FIconCameraVideoSlash</span><span style="color:#89DDFF;" data-v-bb41a092>&quot;</span><span style="color:#89DDFF;" data-v-bb41a092> /&gt;</span></span>
<span class="line" data-v-bb41a092><span style="color:#A6ACCD;" data-v-bb41a092>    </span><span style="color:#89DDFF;" data-v-bb41a092>&lt;</span><span style="color:#F07178;" data-v-bb41a092>f-toolbar-item</span><span style="color:#89DDFF;" data-v-bb41a092> </span><span style="color:#C792EA;" data-v-bb41a092>:icon</span><span style="color:#89DDFF;" data-v-bb41a092>=</span><span style="color:#89DDFF;" data-v-bb41a092>&quot;</span><span style="color:#C3E88D;" data-v-bb41a092>FIconClock</span><span style="color:#89DDFF;" data-v-bb41a092>&quot;</span><span style="color:#89DDFF;" data-v-bb41a092> /&gt;</span></span>
<span class="line" data-v-bb41a092><span style="color:#A6ACCD;" data-v-bb41a092>  </span><span style="color:#89DDFF;" data-v-bb41a092>&lt;/</span><span style="color:#F07178;" data-v-bb41a092>f-toolbar</span><span style="color:#89DDFF;" data-v-bb41a092>&gt;</span></span>
<span class="line" data-v-bb41a092><span style="color:#89DDFF;" data-v-bb41a092>&lt;/</span><span style="color:#F07178;" data-v-bb41a092>template</span><span style="color:#89DDFF;" data-v-bb41a092>&gt;</span></span>
<span class="line" data-v-bb41a092></span>
<span class="line" data-v-bb41a092><span style="color:#89DDFF;" data-v-bb41a092>&lt;</span><span style="color:#F07178;" data-v-bb41a092>script</span><span style="color:#89DDFF;" data-v-bb41a092> </span><span style="color:#C792EA;" data-v-bb41a092>lang</span><span style="color:#89DDFF;" data-v-bb41a092>=</span><span style="color:#89DDFF;" data-v-bb41a092>&quot;</span><span style="color:#C3E88D;" data-v-bb41a092>ts</span><span style="color:#89DDFF;" data-v-bb41a092>&quot;</span><span style="color:#89DDFF;" data-v-bb41a092> </span><span style="color:#C792EA;" data-v-bb41a092>setup</span><span style="color:#89DDFF;" data-v-bb41a092>&gt;</span></span>
<span class="line" data-v-bb41a092><span style="color:#A6ACCD;" data-v-bb41a092>  </span><span style="color:#89DDFF;" data-v-bb41a092>import</span><span style="color:#A6ACCD;" data-v-bb41a092> </span><span style="color:#89DDFF;" data-v-bb41a092>{</span></span>
<span class="line" data-v-bb41a092><span style="color:#F07178;" data-v-bb41a092>    </span><span style="color:#A6ACCD;" data-v-bb41a092>FIconApps</span><span style="color:#89DDFF;" data-v-bb41a092>,</span></span>
<span class="line" data-v-bb41a092><span style="color:#F07178;" data-v-bb41a092>    </span><span style="color:#A6ACCD;" data-v-bb41a092>FIconBlock</span><span style="color:#89DDFF;" data-v-bb41a092>,</span></span>
<span class="line" data-v-bb41a092><span style="color:#F07178;" data-v-bb41a092>    </span><span style="color:#A6ACCD;" data-v-bb41a092>FIconCameraVideoSlash</span><span style="color:#89DDFF;" data-v-bb41a092>,</span></span>
<span class="line" data-v-bb41a092><span style="color:#F07178;" data-v-bb41a092>    </span><span style="color:#A6ACCD;" data-v-bb41a092>FIconClock</span></span>
<span class="line" data-v-bb41a092><span style="color:#F07178;" data-v-bb41a092>  </span><span style="color:#89DDFF;" data-v-bb41a092>}</span><span style="color:#A6ACCD;" data-v-bb41a092> </span><span style="color:#89DDFF;" data-v-bb41a092>from</span><span style="color:#A6ACCD;" data-v-bb41a092> </span><span style="color:#89DDFF;" data-v-bb41a092>&#39;</span><span style="color:#C3E88D;" data-v-bb41a092>@fighting-design/fighting-icon</span><span style="color:#89DDFF;" data-v-bb41a092>&#39;</span></span>
<span class="line" data-v-bb41a092><span style="color:#89DDFF;" data-v-bb41a092>&lt;/</span><span style="color:#F07178;" data-v-bb41a092>script</span><span style="color:#89DDFF;" data-v-bb41a092>&gt;</span></span>
<span class="line" data-v-bb41a092></span></code></pre></div></details><h2 id="\u4E0D\u540C\u5927\u5C0F" tabindex="-1" data-v-bb41a092>\u4E0D\u540C\u5927\u5C0F <a class="header-anchor" href="#\u4E0D\u540C\u5927\u5C0F" aria-hidden="true" data-v-bb41a092>#</a></h2><p data-v-bb41a092><code data-v-bb41a092>size</code> \u5C5E\u6027\u53EF\u4EE5\u914D\u7F6E\u4E0D\u540C\u7684\u5927\u5C0F</p>`,3),g=n(`<details class="details custom-block" data-v-bb41a092><summary data-v-bb41a092>\u663E\u793A\u4EE3\u7801</summary><div class="language-html" data-v-bb41a092><button title="Copy Code" class="copy" data-v-bb41a092></button><span class="lang" data-v-bb41a092>html</span><pre class="shiki" data-v-bb41a092><code data-v-bb41a092><span class="line" data-v-bb41a092><span style="color:#89DDFF;" data-v-bb41a092>&lt;</span><span style="color:#F07178;" data-v-bb41a092>f-toolbar</span><span style="color:#89DDFF;" data-v-bb41a092> </span><span style="color:#C792EA;" data-v-bb41a092>size</span><span style="color:#89DDFF;" data-v-bb41a092>=</span><span style="color:#89DDFF;" data-v-bb41a092>&quot;</span><span style="color:#C3E88D;" data-v-bb41a092>large</span><span style="color:#89DDFF;" data-v-bb41a092>&quot;</span><span style="color:#89DDFF;" data-v-bb41a092>&gt;</span><span style="color:#A6ACCD;" data-v-bb41a092>\u5927\u578B\u5DE5\u5177\u680F</span><span style="color:#89DDFF;" data-v-bb41a092>&lt;/</span><span style="color:#F07178;" data-v-bb41a092>f-toolbar</span><span style="color:#89DDFF;" data-v-bb41a092>&gt;</span></span>
<span class="line" data-v-bb41a092><span style="color:#89DDFF;" data-v-bb41a092>&lt;</span><span style="color:#F07178;" data-v-bb41a092>f-toolbar</span><span style="color:#89DDFF;" data-v-bb41a092> </span><span style="color:#C792EA;" data-v-bb41a092>size</span><span style="color:#89DDFF;" data-v-bb41a092>=</span><span style="color:#89DDFF;" data-v-bb41a092>&quot;</span><span style="color:#C3E88D;" data-v-bb41a092>middle</span><span style="color:#89DDFF;" data-v-bb41a092>&quot;</span><span style="color:#89DDFF;" data-v-bb41a092>&gt;</span><span style="color:#A6ACCD;" data-v-bb41a092>\u4E2D\u578B\u5DE5\u5177\u680F</span><span style="color:#89DDFF;" data-v-bb41a092>&lt;/</span><span style="color:#F07178;" data-v-bb41a092>f-toolbar</span><span style="color:#89DDFF;" data-v-bb41a092>&gt;</span></span>
<span class="line" data-v-bb41a092><span style="color:#89DDFF;" data-v-bb41a092>&lt;</span><span style="color:#F07178;" data-v-bb41a092>f-toolbar</span><span style="color:#89DDFF;" data-v-bb41a092> </span><span style="color:#C792EA;" data-v-bb41a092>size</span><span style="color:#89DDFF;" data-v-bb41a092>=</span><span style="color:#89DDFF;" data-v-bb41a092>&quot;</span><span style="color:#C3E88D;" data-v-bb41a092>small</span><span style="color:#89DDFF;" data-v-bb41a092>&quot;</span><span style="color:#89DDFF;" data-v-bb41a092>&gt;</span><span style="color:#A6ACCD;" data-v-bb41a092>\u5C0F\u578B\u5DE5\u5177\u680F</span><span style="color:#89DDFF;" data-v-bb41a092>&lt;/</span><span style="color:#F07178;" data-v-bb41a092>f-toolbar</span><span style="color:#89DDFF;" data-v-bb41a092>&gt;</span></span>
<span class="line" data-v-bb41a092><span style="color:#89DDFF;" data-v-bb41a092>&lt;</span><span style="color:#F07178;" data-v-bb41a092>f-toolbar</span><span style="color:#89DDFF;" data-v-bb41a092> </span><span style="color:#C792EA;" data-v-bb41a092>size</span><span style="color:#89DDFF;" data-v-bb41a092>=</span><span style="color:#89DDFF;" data-v-bb41a092>&quot;</span><span style="color:#C3E88D;" data-v-bb41a092>mini</span><span style="color:#89DDFF;" data-v-bb41a092>&quot;</span><span style="color:#89DDFF;" data-v-bb41a092>&gt;</span><span style="color:#A6ACCD;" data-v-bb41a092>\u8FF7\u4F60\u5DE5\u5177\u680F</span><span style="color:#89DDFF;" data-v-bb41a092>&lt;/</span><span style="color:#F07178;" data-v-bb41a092>f-toolbar</span><span style="color:#89DDFF;" data-v-bb41a092>&gt;</span></span>
<span class="line" data-v-bb41a092></span></code></pre></div></details><h2 id="\u5706\u89D2" tabindex="-1" data-v-bb41a092>\u5706\u89D2 <a class="header-anchor" href="#\u5706\u89D2" aria-hidden="true" data-v-bb41a092>#</a></h2><p data-v-bb41a092><code data-v-bb41a092>round</code> \u5C5E\u6027\u4E3A\u5706\u89D2</p>`,3),m=n(`<details class="details custom-block" data-v-bb41a092><summary data-v-bb41a092>\u663E\u793A\u4EE3\u7801</summary><div class="language-html" data-v-bb41a092><button title="Copy Code" class="copy" data-v-bb41a092></button><span class="lang" data-v-bb41a092>html</span><pre class="shiki" data-v-bb41a092><code data-v-bb41a092><span class="line" data-v-bb41a092><span style="color:#89DDFF;" data-v-bb41a092>&lt;</span><span style="color:#F07178;" data-v-bb41a092>f-toolbar</span><span style="color:#89DDFF;" data-v-bb41a092> </span><span style="color:#C792EA;" data-v-bb41a092>round</span><span style="color:#89DDFF;" data-v-bb41a092>&gt;</span><span style="color:#A6ACCD;" data-v-bb41a092>\u5706\u89D2</span><span style="color:#89DDFF;" data-v-bb41a092>&lt;/</span><span style="color:#F07178;" data-v-bb41a092>f-toolbar</span><span style="color:#89DDFF;" data-v-bb41a092>&gt;</span></span>
<span class="line" data-v-bb41a092></span></code></pre></div></details><h2 id="\u80CC\u666F\u8272" tabindex="-1" data-v-bb41a092>\u80CC\u666F\u8272 <a class="header-anchor" href="#\u80CC\u666F\u8272" aria-hidden="true" data-v-bb41a092>#</a></h2><p data-v-bb41a092><code data-v-bb41a092>background</code> \u53EF\u4EE5\u81EA\u5B9A\u4E49\u80CC\u666F\u8272</p><p data-v-bb41a092><code data-v-bb41a092>text-color</code> \u53EF\u4EE5\u81EA\u5B9A\u4E49\u6587\u5B57\u989C\u8272</p>`,4),f=n(`<details class="details custom-block" data-v-bb41a092><summary data-v-bb41a092>\u663E\u793A\u4EE3\u7801</summary><div class="language-html" data-v-bb41a092><button title="Copy Code" class="copy" data-v-bb41a092></button><span class="lang" data-v-bb41a092>html</span><pre class="shiki" data-v-bb41a092><code data-v-bb41a092><span class="line" data-v-bb41a092><span style="color:#89DDFF;" data-v-bb41a092>&lt;</span><span style="color:#F07178;" data-v-bb41a092>f-toolbar</span><span style="color:#89DDFF;" data-v-bb41a092> </span><span style="color:#C792EA;" data-v-bb41a092>background</span><span style="color:#89DDFF;" data-v-bb41a092>=</span><span style="color:#89DDFF;" data-v-bb41a092>&quot;</span><span style="color:#C3E88D;" data-v-bb41a092>#42B883</span><span style="color:#89DDFF;" data-v-bb41a092>&quot;</span><span style="color:#89DDFF;" data-v-bb41a092> </span><span style="color:#C792EA;" data-v-bb41a092>text-color</span><span style="color:#89DDFF;" data-v-bb41a092>=</span><span style="color:#89DDFF;" data-v-bb41a092>&quot;</span><span style="color:#C3E88D;" data-v-bb41a092>#fff</span><span style="color:#89DDFF;" data-v-bb41a092>&quot;</span><span style="color:#89DDFF;" data-v-bb41a092>&gt;</span></span>
<span class="line" data-v-bb41a092><span style="color:#A6ACCD;" data-v-bb41a092>  </span><span style="color:#89DDFF;" data-v-bb41a092>&lt;</span><span style="color:#F07178;" data-v-bb41a092>f-toolbar-item</span><span style="color:#89DDFF;" data-v-bb41a092>&gt;</span><span style="color:#A6ACCD;" data-v-bb41a092>\u64CD\u4F5C</span><span style="color:#89DDFF;" data-v-bb41a092>&lt;/</span><span style="color:#F07178;" data-v-bb41a092>f-toolbar-item</span><span style="color:#89DDFF;" data-v-bb41a092>&gt;</span></span>
<span class="line" data-v-bb41a092><span style="color:#A6ACCD;" data-v-bb41a092>  </span><span style="color:#89DDFF;" data-v-bb41a092>&lt;</span><span style="color:#F07178;" data-v-bb41a092>f-toolbar-item</span><span style="color:#89DDFF;" data-v-bb41a092>&gt;</span><span style="color:#A6ACCD;" data-v-bb41a092>\u66F4\u591A</span><span style="color:#89DDFF;" data-v-bb41a092>&lt;/</span><span style="color:#F07178;" data-v-bb41a092>f-toolbar-item</span><span style="color:#89DDFF;" data-v-bb41a092>&gt;</span></span>
<span class="line" data-v-bb41a092><span style="color:#A6ACCD;" data-v-bb41a092>  </span><span style="color:#89DDFF;" data-v-bb41a092>&lt;</span><span style="color:#F07178;" data-v-bb41a092>f-toolbar-item</span><span style="color:#89DDFF;" data-v-bb41a092>&gt;</span><span style="color:#A6ACCD;" data-v-bb41a092>\u8FD4\u56DE</span><span style="color:#89DDFF;" data-v-bb41a092>&lt;/</span><span style="color:#F07178;" data-v-bb41a092>f-toolbar-item</span><span style="color:#89DDFF;" data-v-bb41a092>&gt;</span></span>
<span class="line" data-v-bb41a092><span style="color:#89DDFF;" data-v-bb41a092>&lt;/</span><span style="color:#F07178;" data-v-bb41a092>f-toolbar</span><span style="color:#89DDFF;" data-v-bb41a092>&gt;</span></span>
<span class="line" data-v-bb41a092></span></code></pre></div></details><h2 id="\u70B9\u51FB\u4E8B\u4EF6" tabindex="-1" data-v-bb41a092>\u70B9\u51FB\u4E8B\u4EF6 <a class="header-anchor" href="#\u70B9\u51FB\u4E8B\u4EF6" aria-hidden="true" data-v-bb41a092>#</a></h2><p data-v-bb41a092><code data-v-bb41a092>f-toolbar</code> \u91C7\u7528<a href="https://zh.javascript.info/event-delegation" target="_blank" rel="noreferrer" data-v-bb41a092>\u4E8B\u4EF6\u59D4\u6258</a>\uFF0C\u53EF\u4EE5\u7ED9 <code data-v-bb41a092>f-toolbar</code> \u6DFB\u52A0\u4E8B\u4EF6\uFF0C\u5E76\u7ED9\u6BCF\u4E2A <code data-v-bb41a092>f-toolbar-item</code> \u6DFB\u52A0\u552F\u4E00\u7684 <code data-v-bb41a092>data-key</code>\uFF0C\u90A3\u4E48\u5728 <code data-v-bb41a092>click</code> \u7684\u56DE\u8C03\u4E2D\u5C31\u53EF\u4EE5\u89E3\u6784\u51FA <code data-v-bb41a092>key</code> \u7528\u4E8E\u533A\u5206</p><p data-v-bb41a092>\u4E5F\u53EF\u4EE5\u7ED9\u6BCF\u4E2A <code data-v-bb41a092>f-toolbar-item</code> \u5355\u72EC\u6DFB\u52A0\u70B9\u51FB\u4E8B\u4EF6</p>`,4),k=n(`<details class="details custom-block" data-v-bb41a092><summary data-v-bb41a092>\u663E\u793A\u4EE3\u7801</summary><div class="language-html" data-v-bb41a092><button title="Copy Code" class="copy" data-v-bb41a092></button><span class="lang" data-v-bb41a092>html</span><pre class="shiki" data-v-bb41a092><code data-v-bb41a092><span class="line" data-v-bb41a092><span style="color:#89DDFF;" data-v-bb41a092>&lt;</span><span style="color:#F07178;" data-v-bb41a092>template</span><span style="color:#89DDFF;" data-v-bb41a092>&gt;</span></span>
<span class="line" data-v-bb41a092><span style="color:#A6ACCD;" data-v-bb41a092>  </span><span style="color:#89DDFF;" data-v-bb41a092>&lt;</span><span style="color:#F07178;" data-v-bb41a092>f-toolbar</span><span style="color:#89DDFF;" data-v-bb41a092> </span><span style="color:#C792EA;" data-v-bb41a092>@click</span><span style="color:#89DDFF;" data-v-bb41a092>=</span><span style="color:#89DDFF;" data-v-bb41a092>&quot;</span><span style="color:#C3E88D;" data-v-bb41a092>handleClick</span><span style="color:#89DDFF;" data-v-bb41a092>&quot;</span><span style="color:#89DDFF;" data-v-bb41a092>&gt;</span></span>
<span class="line" data-v-bb41a092><span style="color:#A6ACCD;" data-v-bb41a092>    </span><span style="color:#89DDFF;" data-v-bb41a092>&lt;</span><span style="color:#F07178;" data-v-bb41a092>f-toolbar-item</span><span style="color:#89DDFF;" data-v-bb41a092> </span><span style="color:#C792EA;" data-v-bb41a092>data-key</span><span style="color:#89DDFF;" data-v-bb41a092>=</span><span style="color:#89DDFF;" data-v-bb41a092>&quot;</span><span style="color:#C3E88D;" data-v-bb41a092>1</span><span style="color:#89DDFF;" data-v-bb41a092>&quot;</span><span style="color:#89DDFF;" data-v-bb41a092> </span><span style="color:#C792EA;" data-v-bb41a092>:icon</span><span style="color:#89DDFF;" data-v-bb41a092>=</span><span style="color:#89DDFF;" data-v-bb41a092>&quot;</span><span style="color:#C3E88D;" data-v-bb41a092>FIconApps</span><span style="color:#89DDFF;" data-v-bb41a092>&quot;</span><span style="color:#89DDFF;" data-v-bb41a092> /&gt;</span></span>
<span class="line" data-v-bb41a092><span style="color:#A6ACCD;" data-v-bb41a092>    </span><span style="color:#89DDFF;" data-v-bb41a092>&lt;</span><span style="color:#F07178;" data-v-bb41a092>f-toolbar-item</span><span style="color:#89DDFF;" data-v-bb41a092> </span><span style="color:#C792EA;" data-v-bb41a092>data-key</span><span style="color:#89DDFF;" data-v-bb41a092>=</span><span style="color:#89DDFF;" data-v-bb41a092>&quot;</span><span style="color:#C3E88D;" data-v-bb41a092>2</span><span style="color:#89DDFF;" data-v-bb41a092>&quot;</span><span style="color:#89DDFF;" data-v-bb41a092> </span><span style="color:#C792EA;" data-v-bb41a092>:icon</span><span style="color:#89DDFF;" data-v-bb41a092>=</span><span style="color:#89DDFF;" data-v-bb41a092>&quot;</span><span style="color:#C3E88D;" data-v-bb41a092>FIconBlock</span><span style="color:#89DDFF;" data-v-bb41a092>&quot;</span><span style="color:#89DDFF;" data-v-bb41a092> /&gt;</span></span>
<span class="line" data-v-bb41a092><span style="color:#A6ACCD;" data-v-bb41a092>    </span><span style="color:#89DDFF;" data-v-bb41a092>&lt;</span><span style="color:#F07178;" data-v-bb41a092>f-toolbar-item</span><span style="color:#89DDFF;" data-v-bb41a092> </span><span style="color:#C792EA;" data-v-bb41a092>data-key</span><span style="color:#89DDFF;" data-v-bb41a092>=</span><span style="color:#89DDFF;" data-v-bb41a092>&quot;</span><span style="color:#C3E88D;" data-v-bb41a092>3</span><span style="color:#89DDFF;" data-v-bb41a092>&quot;</span><span style="color:#89DDFF;" data-v-bb41a092> </span><span style="color:#C792EA;" data-v-bb41a092>:icon</span><span style="color:#89DDFF;" data-v-bb41a092>=</span><span style="color:#89DDFF;" data-v-bb41a092>&quot;</span><span style="color:#C3E88D;" data-v-bb41a092>FIconCameraVideoSlash</span><span style="color:#89DDFF;" data-v-bb41a092>&quot;</span><span style="color:#89DDFF;" data-v-bb41a092> /&gt;</span></span>
<span class="line" data-v-bb41a092><span style="color:#A6ACCD;" data-v-bb41a092>    </span><span style="color:#89DDFF;" data-v-bb41a092>&lt;</span><span style="color:#F07178;" data-v-bb41a092>f-toolbar-item</span><span style="color:#89DDFF;" data-v-bb41a092> </span><span style="color:#C792EA;" data-v-bb41a092>data-key</span><span style="color:#89DDFF;" data-v-bb41a092>=</span><span style="color:#89DDFF;" data-v-bb41a092>&quot;</span><span style="color:#C3E88D;" data-v-bb41a092>4</span><span style="color:#89DDFF;" data-v-bb41a092>&quot;</span><span style="color:#89DDFF;" data-v-bb41a092> </span><span style="color:#C792EA;" data-v-bb41a092>:icon</span><span style="color:#89DDFF;" data-v-bb41a092>=</span><span style="color:#89DDFF;" data-v-bb41a092>&quot;</span><span style="color:#C3E88D;" data-v-bb41a092>FIconClock</span><span style="color:#89DDFF;" data-v-bb41a092>&quot;</span><span style="color:#89DDFF;" data-v-bb41a092> /&gt;</span></span>
<span class="line" data-v-bb41a092><span style="color:#A6ACCD;" data-v-bb41a092>  </span><span style="color:#89DDFF;" data-v-bb41a092>&lt;/</span><span style="color:#F07178;" data-v-bb41a092>f-toolbar</span><span style="color:#89DDFF;" data-v-bb41a092>&gt;</span></span>
<span class="line" data-v-bb41a092><span style="color:#89DDFF;" data-v-bb41a092>&lt;/</span><span style="color:#F07178;" data-v-bb41a092>template</span><span style="color:#89DDFF;" data-v-bb41a092>&gt;</span></span>
<span class="line" data-v-bb41a092></span>
<span class="line" data-v-bb41a092><span style="color:#89DDFF;" data-v-bb41a092>&lt;</span><span style="color:#F07178;" data-v-bb41a092>script</span><span style="color:#89DDFF;" data-v-bb41a092> </span><span style="color:#C792EA;" data-v-bb41a092>lang</span><span style="color:#89DDFF;" data-v-bb41a092>=</span><span style="color:#89DDFF;" data-v-bb41a092>&quot;</span><span style="color:#C3E88D;" data-v-bb41a092>ts</span><span style="color:#89DDFF;" data-v-bb41a092>&quot;</span><span style="color:#89DDFF;" data-v-bb41a092> </span><span style="color:#C792EA;" data-v-bb41a092>setup</span><span style="color:#89DDFF;" data-v-bb41a092>&gt;</span></span>
<span class="line" data-v-bb41a092><span style="color:#A6ACCD;" data-v-bb41a092>  </span><span style="color:#89DDFF;" data-v-bb41a092>import</span><span style="color:#A6ACCD;" data-v-bb41a092> </span><span style="color:#89DDFF;" data-v-bb41a092>{</span></span>
<span class="line" data-v-bb41a092><span style="color:#F07178;" data-v-bb41a092>    </span><span style="color:#A6ACCD;" data-v-bb41a092>FIconApps</span><span style="color:#89DDFF;" data-v-bb41a092>,</span></span>
<span class="line" data-v-bb41a092><span style="color:#F07178;" data-v-bb41a092>    </span><span style="color:#A6ACCD;" data-v-bb41a092>FIconBlock</span><span style="color:#89DDFF;" data-v-bb41a092>,</span></span>
<span class="line" data-v-bb41a092><span style="color:#F07178;" data-v-bb41a092>    </span><span style="color:#A6ACCD;" data-v-bb41a092>FIconCameraVideoSlash</span><span style="color:#89DDFF;" data-v-bb41a092>,</span></span>
<span class="line" data-v-bb41a092><span style="color:#F07178;" data-v-bb41a092>    </span><span style="color:#A6ACCD;" data-v-bb41a092>FIconClock</span></span>
<span class="line" data-v-bb41a092><span style="color:#F07178;" data-v-bb41a092>  </span><span style="color:#89DDFF;" data-v-bb41a092>}</span><span style="color:#A6ACCD;" data-v-bb41a092> </span><span style="color:#89DDFF;" data-v-bb41a092>from</span><span style="color:#A6ACCD;" data-v-bb41a092> </span><span style="color:#89DDFF;" data-v-bb41a092>&#39;</span><span style="color:#C3E88D;" data-v-bb41a092>@fighting-design/fighting-icon</span><span style="color:#89DDFF;" data-v-bb41a092>&#39;</span></span>
<span class="line" data-v-bb41a092></span>
<span class="line" data-v-bb41a092><span style="color:#A6ACCD;" data-v-bb41a092>  </span><span style="color:#C792EA;" data-v-bb41a092>const</span><span style="color:#A6ACCD;" data-v-bb41a092> handleClick </span><span style="color:#89DDFF;" data-v-bb41a092>=</span><span style="color:#A6ACCD;" data-v-bb41a092> </span><span style="color:#89DDFF;" data-v-bb41a092>({</span><span style="color:#A6ACCD;" data-v-bb41a092> </span><span style="color:#A6ACCD;" data-v-bb41a092>key</span><span style="color:#89DDFF;" data-v-bb41a092>,</span><span style="color:#A6ACCD;" data-v-bb41a092> </span><span style="color:#A6ACCD;" data-v-bb41a092>evt</span><span style="color:#A6ACCD;" data-v-bb41a092> </span><span style="color:#89DDFF;" data-v-bb41a092>})</span><span style="color:#A6ACCD;" data-v-bb41a092> </span><span style="color:#C792EA;" data-v-bb41a092>=&gt;</span><span style="color:#A6ACCD;" data-v-bb41a092> </span><span style="color:#89DDFF;" data-v-bb41a092>{</span></span>
<span class="line" data-v-bb41a092><span style="color:#F07178;" data-v-bb41a092>    </span><span style="color:#A6ACCD;" data-v-bb41a092>console</span><span style="color:#89DDFF;" data-v-bb41a092>.</span><span style="color:#82AAFF;" data-v-bb41a092>log</span><span style="color:#F07178;" data-v-bb41a092>(</span><span style="color:#A6ACCD;" data-v-bb41a092>key</span><span style="color:#89DDFF;" data-v-bb41a092>,</span><span style="color:#F07178;" data-v-bb41a092> </span><span style="color:#A6ACCD;" data-v-bb41a092>evt</span><span style="color:#F07178;" data-v-bb41a092>)</span></span>
<span class="line" data-v-bb41a092><span style="color:#F07178;" data-v-bb41a092>  </span><span style="color:#89DDFF;" data-v-bb41a092>}</span></span>
<span class="line" data-v-bb41a092><span style="color:#89DDFF;" data-v-bb41a092>&lt;/</span><span style="color:#F07178;" data-v-bb41a092>script</span><span style="color:#89DDFF;" data-v-bb41a092>&gt;</span></span>
<span class="line" data-v-bb41a092></span></code></pre></div></details><h2 id="toolbar-attributes" tabindex="-1" data-v-bb41a092>Toolbar Attributes <a class="header-anchor" href="#toolbar-attributes" aria-hidden="true" data-v-bb41a092>#</a></h2><div class="vp-table__container" data-v-bb41a092><table data-v-bb41a092><thead data-v-bb41a092><tr data-v-bb41a092><th data-v-bb41a092>\u53C2\u6570</th><th data-v-bb41a092>\u8BF4\u660E</th><th data-v-bb41a092>\u7C7B\u578B</th><th data-v-bb41a092>\u53EF\u9009\u503C</th><th data-v-bb41a092>\u9ED8\u8BA4\u503C</th></tr></thead><tbody data-v-bb41a092><tr data-v-bb41a092><td data-v-bb41a092><code data-v-bb41a092>size</code></td><td data-v-bb41a092>\u6587\u5B57\u5927\u5C0F\uFF0C\u5FC5\u987B\u5199\u5165\u6307\u5B9A\u7684\u6570\u503C\u548C\u5355\u4F4D</td><td data-v-bb41a092>string</td><td data-v-bb41a092><code data-v-bb41a092>large</code> <code data-v-bb41a092>middle</code> <code data-v-bb41a092>small</code> <code data-v-bb41a092>mini</code></td><td data-v-bb41a092>large</td></tr><tr data-v-bb41a092><td data-v-bb41a092><code data-v-bb41a092>round</code></td><td data-v-bb41a092>\u663E\u793A\u4E3A\u5706\u89D2</td><td data-v-bb41a092>boolean</td><td data-v-bb41a092>\u2014\u2014</td><td data-v-bb41a092>false</td></tr><tr data-v-bb41a092><td data-v-bb41a092><code data-v-bb41a092>background</code></td><td data-v-bb41a092>\u80CC\u666F\u989C\u8272</td><td data-v-bb41a092>string</td><td data-v-bb41a092>\u2014\u2014</td><td data-v-bb41a092>\u2014\u2014</td></tr><tr data-v-bb41a092><td data-v-bb41a092><code data-v-bb41a092>text-color</code></td><td data-v-bb41a092>\u5B57\u4F53\u989C\u8272</td><td data-v-bb41a092>string</td><td data-v-bb41a092>\u2014\u2014</td><td data-v-bb41a092>\u2014\u2014</td></tr><tr data-v-bb41a092><td data-v-bb41a092><code data-v-bb41a092>fixed</code></td><td data-v-bb41a092>\u662F\u5426\u56FA\u5B9A\u5B9A\u4F4D</td><td data-v-bb41a092>boolean</td><td data-v-bb41a092>\u2014\u2014</td><td data-v-bb41a092>false</td></tr><tr data-v-bb41a092><td data-v-bb41a092><code data-v-bb41a092>fixed-style</code></td><td data-v-bb41a092>\u56FA\u5B9A\u5B9A\u4F4D\u7684\u6837\u5F0F\uFF0C\u4EC5\u652F\u6301 <code data-v-bb41a092>top</code> <code data-v-bb41a092>right</code> <code data-v-bb41a092>button</code> <code data-v-bb41a092>left</code></td><td data-v-bb41a092>object</td><td data-v-bb41a092>\u2014\u2014</td><td data-v-bb41a092>\u2014\u2014</td></tr><tr data-v-bb41a092><td data-v-bb41a092><code data-v-bb41a092>width</code></td><td data-v-bb41a092>\u81EA\u5B9A\u4E49\u5BBD\u5EA6</td><td data-v-bb41a092>string</td><td data-v-bb41a092>\u2014\u2014</td><td data-v-bb41a092>\u2014\u2014</td></tr><tr data-v-bb41a092><td data-v-bb41a092><code data-v-bb41a092>height</code></td><td data-v-bb41a092>\u81EA\u5B9A\u4E49\u9AD8\u5EA6</td><td data-v-bb41a092>string</td><td data-v-bb41a092>\u2014\u2014</td><td data-v-bb41a092>\u2014\u2014</td></tr><tr data-v-bb41a092><td data-v-bb41a092><code data-v-bb41a092>click</code></td><td data-v-bb41a092>\u70B9\u51FB\u4E4B\u540E\u89E6\u53D1\u7684\u56DE\u8C03</td><td data-v-bb41a092>Function</td><td data-v-bb41a092>\u2014\u2014</td><td data-v-bb41a092>null</td></tr></tbody></table></div><h2 id="toolbar-slots" tabindex="-1" data-v-bb41a092>Toolbar Slots <a class="header-anchor" href="#toolbar-slots" aria-hidden="true" data-v-bb41a092>#</a></h2><div class="vp-table__container" data-v-bb41a092><table data-v-bb41a092><thead data-v-bb41a092><tr data-v-bb41a092><th data-v-bb41a092>\u540D\u79F0</th><th data-v-bb41a092>\u8BF4\u660E</th></tr></thead><tbody data-v-bb41a092><tr data-v-bb41a092><td data-v-bb41a092><code data-v-bb41a092>default</code></td><td data-v-bb41a092>\u5B50\u5DE5\u5177\u680F\u9009\u9879</td></tr></tbody></table></div><h2 id="toolbar-item-attributes" tabindex="-1" data-v-bb41a092>Toolbar-Item Attributes <a class="header-anchor" href="#toolbar-item-attributes" aria-hidden="true" data-v-bb41a092>#</a></h2><div class="vp-table__container" data-v-bb41a092><table data-v-bb41a092><thead data-v-bb41a092><tr data-v-bb41a092><th data-v-bb41a092>\u53C2\u6570</th><th data-v-bb41a092>\u8BF4\u660E</th><th data-v-bb41a092>\u7C7B\u578B</th><th data-v-bb41a092>\u53EF\u9009\u503C</th><th data-v-bb41a092>\u9ED8\u8BA4\u503C</th></tr></thead><tbody data-v-bb41a092><tr data-v-bb41a092><td data-v-bb41a092><code data-v-bb41a092>data-key</code></td><td data-v-bb41a092>\u552F\u4E00\u503C</td><td data-v-bb41a092>string / number</td><td data-v-bb41a092>\u2014\u2014</td><td data-v-bb41a092>\u2014\u2014</td></tr><tr data-v-bb41a092><td data-v-bb41a092><code data-v-bb41a092>color</code></td><td data-v-bb41a092>\u81EA\u5B9A\u4E49\u6587\u5B57\u989C\u8272</td><td data-v-bb41a092>string</td><td data-v-bb41a092>\u2014\u2014</td><td data-v-bb41a092>\u2014\u2014</td></tr><tr data-v-bb41a092><td data-v-bb41a092><code data-v-bb41a092>icon</code></td><td data-v-bb41a092>\u81EA\u5B9A\u4E49 icon</td><td data-v-bb41a092>object (VNode / Component)</td><td data-v-bb41a092>\u2014\u2014</td><td data-v-bb41a092>null</td></tr><tr data-v-bb41a092><td data-v-bb41a092><code data-v-bb41a092>icon-size</code></td><td data-v-bb41a092>\u81EA\u5B9A\u4E49 icon \u5927\u5C0F</td><td data-v-bb41a092>string / number</td><td data-v-bb41a092>\u2014\u2014</td><td data-v-bb41a092>16px</td></tr><tr data-v-bb41a092><td data-v-bb41a092><code data-v-bb41a092>click</code></td><td data-v-bb41a092>\u70B9\u51FB\u4E4B\u540E\u89E6\u53D1\u7684\u56DE\u8C03</td><td data-v-bb41a092>Function</td><td data-v-bb41a092>\u2014\u2014</td><td data-v-bb41a092>null</td></tr></tbody></table></div><h2 id="toolbar-item-slots" tabindex="-1" data-v-bb41a092>Toolbar-Item Slots <a class="header-anchor" href="#toolbar-item-slots" aria-hidden="true" data-v-bb41a092>#</a></h2><div class="vp-table__container" data-v-bb41a092><table data-v-bb41a092><thead data-v-bb41a092><tr data-v-bb41a092><th data-v-bb41a092>\u540D\u79F0</th><th data-v-bb41a092>\u8BF4\u660E</th></tr></thead><tbody data-v-bb41a092><tr data-v-bb41a092><td data-v-bb41a092><code data-v-bb41a092>default</code></td><td data-v-bb41a092>\u9ED8\u8BA4\u5185\u5BB9</td></tr></tbody></table></div><h2 id="interface" tabindex="-1" data-v-bb41a092>Interface <a class="header-anchor" href="#interface" aria-hidden="true" data-v-bb41a092>#</a></h2><p data-v-bb41a092>\u7EC4\u4EF6\u5BFC\u51FA\u4EE5\u4E0B\u7C7B\u578B\u5B9A\u4E49\uFF1A</p><div class="language-ts" data-v-bb41a092><button title="Copy Code" class="copy" data-v-bb41a092></button><span class="lang" data-v-bb41a092>ts</span><pre class="shiki" data-v-bb41a092><code data-v-bb41a092><span class="line" data-v-bb41a092><span style="color:#89DDFF;" data-v-bb41a092>import</span><span style="color:#A6ACCD;" data-v-bb41a092> </span><span style="color:#89DDFF;" data-v-bb41a092>type</span><span style="color:#A6ACCD;" data-v-bb41a092> </span><span style="color:#89DDFF;" data-v-bb41a092>{</span></span>
<span class="line" data-v-bb41a092><span style="color:#F07178;" data-v-bb41a092>  </span><span style="color:#A6ACCD;" data-v-bb41a092>ToolbarInstance</span><span style="color:#89DDFF;" data-v-bb41a092>,</span></span>
<span class="line" data-v-bb41a092><span style="color:#F07178;" data-v-bb41a092>  </span><span style="color:#A6ACCD;" data-v-bb41a092>ToolbarPropsType</span><span style="color:#89DDFF;" data-v-bb41a092>,</span></span>
<span class="line" data-v-bb41a092><span style="color:#F07178;" data-v-bb41a092>  </span><span style="color:#A6ACCD;" data-v-bb41a092>ToolbarType</span><span style="color:#89DDFF;" data-v-bb41a092>,</span></span>
<span class="line" data-v-bb41a092><span style="color:#F07178;" data-v-bb41a092>  </span><span style="color:#A6ACCD;" data-v-bb41a092>ToolbarClickEmitInterface</span><span style="color:#89DDFF;" data-v-bb41a092>,</span></span>
<span class="line" data-v-bb41a092><span style="color:#F07178;" data-v-bb41a092>  </span><span style="color:#A6ACCD;" data-v-bb41a092>ToolbarItemInstance</span><span style="color:#89DDFF;" data-v-bb41a092>,</span></span>
<span class="line" data-v-bb41a092><span style="color:#F07178;" data-v-bb41a092>  </span><span style="color:#A6ACCD;" data-v-bb41a092>ToolbarItemPropsType</span></span>
<span class="line" data-v-bb41a092><span style="color:#89DDFF;" data-v-bb41a092>}</span><span style="color:#A6ACCD;" data-v-bb41a092> </span><span style="color:#89DDFF;" data-v-bb41a092>from</span><span style="color:#A6ACCD;" data-v-bb41a092> </span><span style="color:#89DDFF;" data-v-bb41a092>&#39;</span><span style="color:#C3E88D;" data-v-bb41a092>fighting-design</span><span style="color:#89DDFF;" data-v-bb41a092>&#39;</span></span>
<span class="line" data-v-bb41a092></span></code></pre></div><h2 id="contributors" tabindex="-1" data-v-bb41a092>Contributors <a class="header-anchor" href="#contributors" aria-hidden="true" data-v-bb41a092>#</a></h2>`,13),E={href:"https://github.com/Tyh2001",target:"_blank"},T={href:"https://github.com/ECO-M",target:"_blank"},P=JSON.parse('{"title":"Toolbar \u5DE5\u5177\u680F","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u57FA\u672C\u4F7F\u7528","slug":"\u57FA\u672C\u4F7F\u7528","link":"#\u57FA\u672C\u4F7F\u7528","children":[]},{"level":2,"title":"\u4E0D\u540C\u5927\u5C0F","slug":"\u4E0D\u540C\u5927\u5C0F","link":"#\u4E0D\u540C\u5927\u5C0F","children":[]},{"level":2,"title":"\u5706\u89D2","slug":"\u5706\u89D2","link":"#\u5706\u89D2","children":[]},{"level":2,"title":"\u80CC\u666F\u8272","slug":"\u80CC\u666F\u8272","link":"#\u80CC\u666F\u8272","children":[]},{"level":2,"title":"\u70B9\u51FB\u4E8B\u4EF6","slug":"\u70B9\u51FB\u4E8B\u4EF6","link":"#\u70B9\u51FB\u4E8B\u4EF6","children":[]},{"level":2,"title":"Toolbar Attributes","slug":"toolbar-attributes","link":"#toolbar-attributes","children":[]},{"level":2,"title":"Toolbar Slots","slug":"toolbar-slots","link":"#toolbar-slots","children":[]},{"level":2,"title":"Toolbar-Item Attributes","slug":"toolbar-item-attributes","link":"#toolbar-item-attributes","children":[]},{"level":2,"title":"Toolbar-Item Slots","slug":"toolbar-item-slots","link":"#toolbar-item-slots","children":[]},{"level":2,"title":"Interface","slug":"interface","link":"#interface","children":[]},{"level":2,"title":"Contributors","slug":"contributors","link":"#contributors","children":[]}],"relativePath":"components/toolbar.md","lastUpdated":1667783997000}'),I={name:"components/toolbar.md"},q=Object.assign(I,{setup(S){const i=({key:p,evt:e})=>{console.log(p,e)};return(p,e)=>{const t=d("f-toolbar-item"),b=d("f-toolbar"),c=d("f-avatar");return C(),h("div",null,[A,a(b,null,{default:s(()=>[a(t,{icon:o(v)},null,8,["icon"]),a(t,{icon:o(D)},null,8,["icon"]),a(t,{icon:o(F)},null,8,["icon"]),a(t,{icon:o(y)},null,8,["icon"])]),_:1}),_,a(b,{size:"large"},{default:s(()=>[l("\u5927\u578B\u5DE5\u5177\u680F")]),_:1}),a(b,{size:"middle"},{default:s(()=>[l("\u4E2D\u578B\u5DE5\u5177\u680F")]),_:1}),a(b,{size:"small"},{default:s(()=>[l("\u5C0F\u578B\u5DE5\u5177\u680F")]),_:1}),a(b,{size:"mini"},{default:s(()=>[l("\u8FF7\u4F60\u5DE5\u5177\u680F")]),_:1}),g,a(b,{round:""},{default:s(()=>[l("\u5706\u89D2")]),_:1}),m,a(b,{background:"#42B883","text-color":"#fff"},{default:s(()=>[a(t,null,{default:s(()=>[l("\u64CD\u4F5C")]),_:1}),a(t,null,{default:s(()=>[l("\u66F4\u591A")]),_:1}),a(t,null,{default:s(()=>[l("\u8FD4\u56DE")]),_:1})]),_:1}),f,a(b,{onClick:i},{default:s(()=>[a(t,{"data-key":"1",icon:o(v)},null,8,["icon"]),a(t,{"data-key":"2",icon:o(D)},null,8,["icon"]),a(t,{"data-key":"3",icon:o(F)},null,8,["icon"]),a(t,{"data-key":"4",icon:o(y)},null,8,["icon"])]),_:1}),k,r("a",E,[a(c,{round:"",src:"https://avatars.githubusercontent.com/u/73180970?v=4"})]),r("a",T,[a(c,{round:"",src:"https://avatars.githubusercontent.com/u/23503047?v=4"})])])}}}),z=u(q,[["__scopeId","data-v-bb41a092"]]);export{P as __pageData,z as default};
