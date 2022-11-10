import{h as D,k as o,r as c,o as d,c as i,a as l,d as y,e as n}from"./app.3ea64e24.js";const A=n('<h1 id="up-load-\u6587\u4EF6\u4E0A\u4F20" tabindex="-1">Up Load \u6587\u4EF6\u4E0A\u4F20 <a class="header-anchor" href="#up-load-\u6587\u4EF6\u4E0A\u4F20" aria-hidden="true">#</a></h1><p>\u5343\u4E07\u4E0D\u8981\u4E0A\u4F20 2G \u4EE5\u4E0A\u7684\u6587\u4EF6</p><ul><li><a href="https://github.com/FightingDesign/fighting-design/tree/master/packages/fighting-design/up-load" target="_blank" rel="noreferrer">\u6E90\u4EE3\u7801</a></li><li><a href="https://github.com/FightingDesign/fighting-design/blob/master/docs/docs/components/up-load.md" target="_blank" rel="noreferrer">\u6587\u6863\u7F16\u8F91</a></li></ul><h2 id="\u57FA\u672C\u4F7F\u7528" tabindex="-1">\u57FA\u672C\u4F7F\u7528 <a class="header-anchor" href="#\u57FA\u672C\u4F7F\u7528" aria-hidden="true">#</a></h2><p>\u9700\u8981\u4F7F\u7528 <code>v-model:files</code> \u7ED1\u5B9A\u4E00\u4E2A\u6570\u7EC4</p>',5),C=n(`<details class="details custom-block"><summary>\u663E\u793A\u4EE3\u7801</summary><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">f-up-load</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">v-model:files</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">files1</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">lang</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">ts</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">setup</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">ref</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">vue</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> files1 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">ref</span><span style="color:#A6ACCD;">([])</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div></details><h2 id="\u4E0A\u4F20\u591A\u4E2A" tabindex="-1">\u4E0A\u4F20\u591A\u4E2A <a class="header-anchor" href="#\u4E0A\u4F20\u591A\u4E2A" aria-hidden="true">#</a></h2><p><code>multiple</code> \u5C5E\u6027\u53EF\u914D\u7F6E\u4E0A\u4F20\u591A\u4E2A\u6587\u4EF6</p>`,3),E=n(`<details class="details custom-block"><summary>\u663E\u793A\u4EE3\u7801</summary><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">f-up-load</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">v-model:files</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">files2</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">multiple</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">lang</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">ts</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">setup</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">ref</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">vue</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> files2 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">ref</span><span style="color:#A6ACCD;">([])</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div></details><h2 id="\u9650\u5236\u6570\u91CF" tabindex="-1">\u9650\u5236\u6570\u91CF <a class="header-anchor" href="#\u9650\u5236\u6570\u91CF" aria-hidden="true">#</a></h2><p><code>max-length</code> \u5C5E\u6027\u53EF\u9650\u5236\u4E0A\u4F20\u6587\u4EF6\u7684\u6570\u91CF</p>`,3),h=n(`<details class="details custom-block"><summary>\u663E\u793A\u4EE3\u7801</summary><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">f-up-load</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">v-model:files</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">files3</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">multiple</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">:max-length</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">4</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">lang</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">ts</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">setup</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">ref</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">vue</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> files3 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">ref</span><span style="color:#A6ACCD;">([])</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div></details><h2 id="\u62D6\u62FD\u4E0A\u4F20" tabindex="-1">\u62D6\u62FD\u4E0A\u4F20 <a class="header-anchor" href="#\u62D6\u62FD\u4E0A\u4F20" aria-hidden="true">#</a></h2><p><code>drag</code> \u5C5E\u6027\u53EF\u914D\u7F6E\u62D6\u62FD\u4E0A\u4F20</p>`,3),m=n(`<details class="details custom-block"><summary>\u663E\u793A\u4EE3\u7801</summary><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">f-up-load</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">v-model:files</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">files4</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">multiple</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">drag</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">lang</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">ts</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">setup</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">ref</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">vue</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> files4 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">ref</span><span style="color:#A6ACCD;">([])</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div></details><h2 id="attributes" tabindex="-1">Attributes <a class="header-anchor" href="#attributes" aria-hidden="true">#</a></h2><div class="vp-table__container"><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>v-model:files</code></td><td>\u6587\u4EF6\u5217\u8868</td><td>array</td><td>\u2014\u2014</td><td>\u2014\u2014</td></tr><tr><td><code>accept</code></td><td>\u63A5\u53D7\u7684\u6587\u4EF6\u7C7B\u578B</td><td>string</td><td>\u2014\u2014</td><td>\u2014\u2014</td></tr><tr><td><code>name</code></td><td>\u539F\u751F name \u5C5E\u6027</td><td>string</td><td>\u2014\u2014</td><td>\u2014\u2014</td></tr><tr><td><code>drag</code></td><td>\u662F\u5426\u53EF\u62D6\u62FD\u4E0A\u4F20</td><td>boolean</td><td>\u2014\u2014</td><td>false</td></tr><tr><td><code>is-remove</code></td><td>\u662F\u5426\u53EF\u5220\u9664</td><td>boolean</td><td>\u2014\u2014</td><td>true</td></tr><tr><td><code>showList</code></td><td>\u662F\u5426\u5C55\u793A\u6587\u4EF6\u5217\u8868</td><td>boolean</td><td>\u2014\u2014</td><td>true</td></tr><tr><td><code>multiple</code></td><td>\u662F\u5426\u53EF\u591A\u9009</td><td>boolean</td><td>\u2014\u2014</td><td>false</td></tr><tr><td><code>max-size</code></td><td>\u6700\u5927\u4E0A\u4F20\u5C3A\u5BF8</td><td>number</td><td>\u2014\u2014</td><td>null</td></tr><tr><td><code>max-length</code></td><td>\u6700\u5927\u4E0A\u4F20\u6570\u91CF</td><td>number</td><td>\u2014\u2014</td><td>null</td></tr><tr><td><code>disabled</code></td><td>\u662F\u5426\u7981\u7528</td><td>boolean</td><td>\u2014\u2014</td><td>false</td></tr><tr><td><code>load</code></td><td>\u4E0A\u4F20\u6210\u529F\u540E\u6267\u884C\u7684\u56DE\u8C03</td><td>Function</td><td>\u2014\u2014</td><td>null</td></tr><tr><td><code>change</code></td><td>\u7ED1\u5B9A\u7684\u6587\u4EF6\u5217\u8868\u53D1\u751F\u6539\u53D8\u65F6\u89E6\u53D1\u7684\u56DE\u8C03</td><td>Function</td><td>\u2014\u2014</td><td>null</td></tr></tbody></table></div><h2 id="slots" tabindex="-1">Slots <a class="header-anchor" href="#slots" aria-hidden="true">#</a></h2><div class="vp-table__container"><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td><code>default</code></td><td>\u81EA\u5B9A\u4E49\u4E0A\u4F20\u6309\u94AE\u6837\u5F0F</td></tr></tbody></table></div><h2 id="interface" tabindex="-1">Interface <a class="header-anchor" href="#interface" aria-hidden="true">#</a></h2><p>\u7EC4\u4EF6\u5BFC\u51FA\u4EE5\u4E0B\u7C7B\u578B\u5B9A\u4E49\uFF1A</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">UpLoadInstance</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">UpLoadPropsType</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">UpLoadUpdateFilesInterface</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">UpLoadFilterFilesInterface</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">UpLoadRemoveFileInterface</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">fighting-design</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span></code></pre></div><h2 id="contributors" tabindex="-1">Contributors <a class="header-anchor" href="#contributors" aria-hidden="true">#</a></h2>`,9),f={href:"https://github.com/Tyh2001",target:"_blank"},k=JSON.parse('{"title":"Up Load \u6587\u4EF6\u4E0A\u4F20","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u57FA\u672C\u4F7F\u7528","slug":"\u57FA\u672C\u4F7F\u7528","link":"#\u57FA\u672C\u4F7F\u7528","children":[]},{"level":2,"title":"\u4E0A\u4F20\u591A\u4E2A","slug":"\u4E0A\u4F20\u591A\u4E2A","link":"#\u4E0A\u4F20\u591A\u4E2A","children":[]},{"level":2,"title":"\u9650\u5236\u6570\u91CF","slug":"\u9650\u5236\u6570\u91CF","link":"#\u9650\u5236\u6570\u91CF","children":[]},{"level":2,"title":"\u62D6\u62FD\u4E0A\u4F20","slug":"\u62D6\u62FD\u4E0A\u4F20","link":"#\u62D6\u62FD\u4E0A\u4F20","children":[]},{"level":2,"title":"Attributes","slug":"attributes","link":"#attributes","children":[]},{"level":2,"title":"Slots","slug":"slots","link":"#slots","children":[]},{"level":2,"title":"Interface","slug":"interface","link":"#interface","children":[]},{"level":2,"title":"Contributors","slug":"contributors","link":"#contributors","children":[]}],"relativePath":"components/up-load.md","lastUpdated":1668048639000}'),g={name:"components/up-load.md"},B=D({...g,setup(b){const p=o([]),e=o([]),u=o([]),r=o([]);return(v,s)=>{const t=c("f-up-load"),F=c("f-avatar");return d(),i("div",null,[A,l(t,{files:p.value,"onUpdate:files":s[0]||(s[0]=a=>p.value=a)},null,8,["files"]),C,l(t,{files:e.value,"onUpdate:files":s[1]||(s[1]=a=>e.value=a),multiple:""},null,8,["files"]),E,l(t,{files:u.value,"onUpdate:files":s[2]||(s[2]=a=>u.value=a),multiple:"","max-length":4},null,8,["files"]),h,l(t,{files:r.value,"onUpdate:files":s[3]||(s[3]=a=>r.value=a),multiple:"",drag:""},null,8,["files"]),m,y("a",f,[l(F,{round:"",src:"https://avatars.githubusercontent.com/u/73180970?v=4"})])])}}});export{k as __pageData,B as default};
