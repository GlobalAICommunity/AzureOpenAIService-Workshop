"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[984],{4137:(e,t,n)=>{n.d(t,{Zo:()=>h,kt:()=>m});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},h=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),c=p(n),f=r,m=c["".concat(l,".").concat(f)]||c[f]||u[f]||a;return n?o.createElement(m,i(i({ref:t},h),{},{components:n})):o.createElement(m,i({ref:t},h))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:r,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}f.displayName="MDXCreateElement"},1674:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var o=n(7462),r=(n(7294),n(4137));const a={},i="Ways of 'learning'",s={unversionedId:"Ways-of-learning",id:"Ways-of-learning",title:"Ways of 'learning'",description:"This section discusses prompt engineering techniques that can help LLMs solve certain problems more effectively.",source:"@site/docs/44-Ways-of-learning.md",sourceDirName:".",slug:"/Ways-of-learning",permalink:"/Ways-of-learning",draft:!1,editUrl:"https://github.com/hnky/AzureOpenAIService-Workshop/tree/main/docs/44-Ways-of-learning.md",tags:[],version:"current",sidebarPosition:44,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Response grounding",permalink:"/Response-grounding"},next:{title:"Function Calling",permalink:"/Function-Calling"}},l={},p=[{value:"Zero-shot learning",id:"zero-shot-learning",level:2},{value:"Few-shot learning",id:"few-shot-learning",level:2},{value:"Break the task down",id:"break-the-task-down",level:2},{value:"Chain of thought prompting",id:"chain-of-thought-prompting",level:2}],h={toc:p},c="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,o.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"ways-of-learning"},"Ways of 'learning'"),(0,r.kt)("p",null,"This section discusses prompt engineering techniques that can help LLMs solve certain problems more effectively."),(0,r.kt)("h2",{id:"zero-shot-learning"},"Zero-shot learning"),(0,r.kt)("p",null,"LLMs are trained on such large amounts of data they may be be able to perform some tasks with very little prompting. Try the example below and change the sentence to see what outcomes you find."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"Classify the text into neutral, negative or positive.\nText: My calendar today looks ok\nSentiment:\n")),(0,r.kt)("h2",{id:"few-shot-learning"},"Few-shot learning"),(0,r.kt)("p",null,"If zero-shot learning is failing for your examples and more complex tasks, few shot prompting can provide examples that can better steer the model to the desired outcomes.  Examples show the model cleanly how we want it to operate. Try the example below to see the outcome. Can you think of other examples that could leverage few-shot learning?"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"Headline: Twins' Correa to use opt-out, test free agency\nTopic: Baseball\nHeadline: Qatar World Cup to have zones for sobering up\nTopic: Soccer\nHeadline: Yates: Fantasy football intel for Week 6\nTopic: Football\nHeadline: Coach confident injury won't derail Warriors\nTopic:\n")),(0,r.kt)("p",null,"The next two sections are very well described in the ",(0,r.kt)("a",{parentName:"p",href:"https://www.linkedin.com/pulse/meet-mr-prompty-break-tasks-down-chain-thought-dynamic-mario-fontana/?trackingId=%2FzJrYZ06TxWwVVLkU7rxug%3D%3D"},"'Meet Mr Prompty'")," articles on LinkedIn, thank you author, Mario Fontana, for sharing your insights."),(0,r.kt)("h2",{id:"break-the-task-down"},"Break the task down"),(0,r.kt)("p",null,"In this technique, the user is responsible for breaking the task down into smaller, more manageable steps. The LLM then follows the user's instructions to complete the task."),(0,r.kt)("p",null,"First update the system prompt:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"You are a famous poet who wants to write a poem about a flower. \nYou will be given instructions on how to complete the task.\n")),(0,r.kt)("p",null,"Enter the user prompt below to see 'break down the task' in action"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"You will identify the main features of a flower, choose a flower \nto write about, brainstorm some ideas for the poem, write a draft, \nrevise the poem, and publish the poem\n\n===\nInstructions:\n\n- Identify the main features of a flower.\n    - What are the different parts of a flower?\n    - What are the colors of a flower?\n    - What are the shapes of a flower?\n- Choose a flower to write about.\n    - What kind of flower do you want to write about?\n    - Why did you choose this flower?\n- Brainstorm some ideas for the poem.\n    - What are some things you want to say about the flower?\n    - What kind of poem do you want to write?\n- Write a draft of the poem.\n    - Start writing the poem.\n    - Don't worry about making it perfect yet.\n- Revise the poem.\n    - Read the poem aloud.\n    - Make changes to the poem.\n")),(0,r.kt)("h2",{id:"chain-of-thought-prompting"},"Chain of thought prompting"),(0,r.kt)("p",null,"In this technique, the LLM is responsible for breaking the task down into smaller steps. The LLM uses its knowledge of the world and its ability to reason. The LLM then generates a chain of thoughts that leads to the solution of the task."),(0,r.kt)("p",null,"Enter the user prompt below to see 'Chain of thought prompting' in action:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"Who was the first person to walk on the moon? Take a step-by-step approach in your response, cite sources, and give reasoning before sharing a final answer in the below format: ANSWER is: <name>\n")))}u.isMDXComponent=!0}}]);