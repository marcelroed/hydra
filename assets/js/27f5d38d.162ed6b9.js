"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[504],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return s}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),p=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),y=p(r),s=o,m=y["".concat(u,".").concat(s)]||y[s]||d[s]||i;return r?n.createElement(m,a(a({ref:t},c),{},{components:r})):n.createElement(m,a({ref:t},c))}));function s(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=y;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var p=2;p<i;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},6417:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return c},default:function(){return y}});var n=r(7462),o=r(3366),i=(r(7294),r(3905)),a=["components"],l={id:"working_directory",title:"Output/Working directory",sidebar_label:"Output/Working directory"},u=void 0,p={unversionedId:"tutorial/working_directory",id:"version-0.11/tutorial/working_directory",isDocsHomePage:!1,title:"Output/Working directory",description:"Hydra solves the problem of your needing to specify a new output directory for each run, by",source:"@site/versioned_docs/version-0.11/tutorial/8_working_directory.md",sourceDirName:"tutorial",slug:"/tutorial/working_directory",permalink:"/docs/0.11/tutorial/working_directory",editUrl:"https://github.com/facebookresearch/hydra/edit/main/website/versioned_docs/version-0.11/tutorial/8_working_directory.md",tags:[],version:"0.11",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1643048414,formattedLastUpdatedAt:"1/24/2022",sidebarPosition:8,frontMatter:{id:"working_directory",title:"Output/Working directory",sidebar_label:"Output/Working directory"},sidebar:"version-0.11/docs",previous:{title:"Tab completion",permalink:"/docs/0.11/tutorial/tab_completion"},next:{title:"Logging",permalink:"/docs/0.11/tutorial/logging"}},c=[{value:"Original working directory",id:"original-working-directory",children:[]}],d={toc:c};function y(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Hydra solves the problem of your needing to specify a new output directory for each run, by\ncreating a directory for each run and executing your code within that directory."),(0,i.kt)("p",null,"The working directory is used to:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Store the output for the application (For example, a database dump file)"),(0,i.kt)("li",{parentName:"ul"},"Store the Hydra output for the run (Configuration, Logs etc)")),(0,i.kt)("p",null,"Every time you run the app, a new working directory is automatically created:"),(0,i.kt)("p",null,"Python file: ",(0,i.kt)("inlineCode",{parentName:"p"},"my_app.py")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'import os\n\n@hydra.main()\ndef my_app(_cfg):\n    print("Working directory : {}".format(os.getcwd()))\n\n$ python my_app.py\nWorking directory : /home/omry/dev/hydra/outputs/2019-09-25/15-16-17\n\n$ python my_app.py\nWorking directory : /home/omry/dev/hydra/outputs/2019-09-25/15-16-19\n')),(0,i.kt)("p",null,"Let's take a look at one of those working directories:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"$ tree outputs/2019-09-25/15-16-17\noutputs/2019-09-25/15-16-17\n\u251c\u2500\u2500 .hydra\n\u2502   \u251c\u2500\u2500 config.yaml\n\u2502   \u251c\u2500\u2500 hydra.yaml\n\u2502   \u2514\u2500\u2500 overrides.yaml\n\u2514\u2500\u2500 my_app.log\n")),(0,i.kt)("p",null,"We have the Hydra output directory (",(0,i.kt)("inlineCode",{parentName:"p"},".hydra")," by default) and the application log file.\nInside the configuration output directory we have:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"config.yaml"),": A dump of the user specified configuration"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"hydra.yaml"),": A dump of the Hydra configuration"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"overrides.yaml"),": The command line overrides used")),(0,i.kt)("p",null,"And in the main output directory:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"my_app.log"),": A log file created for this run")),(0,i.kt)("h3",{id:"original-working-directory"},"Original working directory"),(0,i.kt)("p",null,"You can still access the original working directory if you need to:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'import os\nimport hydra\nfrom hydra import utils\n\n@hydra.main()\ndef my_app(_cfg):\n    print("Current working directory  : {}".format(os.getcwd()))\n    print("Original working directory : {}".format(utils.get_original_cwd()))\n    print("to_absolute_path(\'foo\')    : {}".format(utils.to_absolute_path("foo")))\n    print("to_absolute_path(\'/foo\')   : {}".format(utils.to_absolute_path("/foo")))\n\n\n$ python examples/tutorial/8_working_directory/original_cwd.py\nCurrent working directory  : /Users/omry/dev/hydra/outputs/2019-10-23/10-53-03\nOriginal working directory : /Users/omry/dev/hydra\nto_absolute_path(\'foo\')    : /Users/omry/dev/hydra/foo\nto_absolute_path(\'/foo\')   : /foo\n')),(0,i.kt)("p",null,"Working directory can be ",(0,i.kt)("a",{parentName:"p",href:"/docs/0.11/configure_hydra/workdir"},"customized"),"."))}y.isMDXComponent=!0}}]);