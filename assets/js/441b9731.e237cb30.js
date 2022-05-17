"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6520],{3905:function(e,t,n){n.r(t),n.d(t,{MDXContext:function(){return p},MDXProvider:function(){return l},mdx:function(){return m},useMDXComponents:function(){return u},withMDXComponents:function(){return s}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){return function(t){var n=u(t.components);return r.createElement(e,o({},t,{components:n}))}},u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=d(e,["components","mdxType","originalType","parentName"]),s=u(n),l=a,f=s["".concat(i,".").concat(l)]||s[l]||h[l]||o;return n?r.createElement(f,c(c({ref:t},p),{},{components:n})):r.createElement(f,c({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var c={};for(var d in t)hasOwnProperty.call(t,d)&&(c[d]=t[d]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},37308:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return d},metadata:function(){return p},toc:function(){return s},default:function(){return l}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],c={id:"changes_to_hydra_main_config_path",title:"Changes to @hydra.main() and hydra.initialize()"},d=void 0,p={unversionedId:"upgrades/1.1_to_1.2/changes_to_hydra_main_config_path",id:"version-1.2/upgrades/1.1_to_1.2/changes_to_hydra_main_config_path",title:"Changes to @hydra.main() and hydra.initialize()",description:"Prior to Hydra 1.2, @hydra.main() and hydra.initialize() default config path was the directory containing the Python app (calling @hydra.main() or hydra.initialize()).",source:"@site/versioned_docs/version-1.2/upgrades/1.1_to_1.2/hydra_main_config_path.md",sourceDirName:"upgrades/1.1_to_1.2",slug:"/upgrades/1.1_to_1.2/changes_to_hydra_main_config_path",permalink:"/docs/upgrades/1.1_to_1.2/changes_to_hydra_main_config_path",editUrl:"https://github.com/facebookresearch/hydra/edit/main/website/versioned_docs/version-1.2/upgrades/1.1_to_1.2/hydra_main_config_path.md",tags:[],version:"1.2",lastUpdatedBy:"P\xe1draig Brady",lastUpdatedAt:1652825677,formattedLastUpdatedAt:"5/17/2022",frontMatter:{id:"changes_to_hydra_main_config_path",title:"Changes to @hydra.main() and hydra.initialize()"},sidebar:"docs",previous:{title:"version_base",permalink:"/docs/upgrades/version_base"},next:{title:"Changes to job's runtime working directory",permalink:"/docs/upgrades/1.1_to_1.2/changes_to_job_working_dir"}},s=[],u={toc:s};function l(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.mdx)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("p",null,"Prior to Hydra 1.2, ",(0,o.mdx)("strong",{parentName:"p"},"@hydra.main()")," and ",(0,o.mdx)("strong",{parentName:"p"},"hydra.initialize()")," default ",(0,o.mdx)("inlineCode",{parentName:"p"},"config path")," was the directory containing the Python app (calling ",(0,o.mdx)("strong",{parentName:"p"},"@hydra.main()")," or ",(0,o.mdx)("strong",{parentName:"p"},"hydra.initialize()"),").\nStarting with Hydra 1.1 we give ",(0,o.mdx)("a",{parentName:"p",href:"/docs/upgrades/1.0_to_1.1/changes_to_hydra_main_config_path"},"control over the default config path"),",\nand starting with Hydra 1.2, with ",(0,o.mdx)("a",{parentName:"p",href:"/docs/upgrades/version_base"},"version_base"),' >= "1.2", we choose a default config_path=None, indicating that no directory should be added to the config search path.'))}l.isMDXComponent=!0}}]);