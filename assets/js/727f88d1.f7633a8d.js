"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[23],{4137:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),h=o,m=u["".concat(s,".").concat(h)]||u[h]||d[h]||a;return n?r.createElement(m,i(i({ref:t},c),{},{components:n})):r.createElement(m,i({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},6999:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var r=n(7462),o=(n(7294),n(4137));const a={},i="Basic Prompting",l={unversionedId:"Basic-Prompting",id:"Basic-Prompting",title:"Basic Prompting",description:'Prompt Engineering is the process of adding additional context to the prompt to provide "grounding" to the AI model and make it more likely to produce the desired response and less likely to produce undesirable outputs. For example, in a chatbot application, the system would inject additional instructions and data into the prompt before the user\'s actual input, to provide context to the model.',source:"@site/docs/41-Basic-Prompting.md",sourceDirName:".",slug:"/Basic-Prompting",permalink:"/Basic-Prompting",draft:!1,editUrl:"https://github.com/hnky/AzureOpenAIService-Workshop/tree/main/docs/41-Basic-Prompting.md",tags:[],version:"current",sidebarPosition:41,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Understanding LLM's",permalink:"/Understanding-LLMs"},next:{title:"Prompt Engineering Techniques",permalink:"/Prompt-Engineering-Techniques"}},s={},p=[{value:"Generating novel content",id:"generating-novel-content",level:2},{value:"Less-useful prompts",id:"less-useful-prompts",level:2},{value:"Generative AI models can&#39;t perform actions",id:"generative-ai-models-cant-perform-actions",level:2},{value:"Completions are not facts",id:"completions-are-not-facts",level:2}],c={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"basic-prompting"},"Basic Prompting"),(0,o.kt)("p",null,'Prompt Engineering is the process of adding additional context to the prompt to provide "grounding" to the AI model and make it more likely to produce the desired response and less likely to produce undesirable outputs. For example, in a chatbot application, the system would inject additional instructions and data into the prompt before the user\'s actual input, to provide context to the model.'),(0,o.kt)("p",null,"Lets start with a few prompts and observe the response using the chat interface. Here are some examples to try, but get creative with your own prompts and see what happens!"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"What is the capital of Australia?\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"A recipe for banana bread, and an itemized shopping list of the ingredients.\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"What were the 10 top movies of 2001? Respond in the form of a table listing the movie name, the box office earnings, and the studio.\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Write a Python function to calculate the nth prime number.\n")),(0,o.kt)("h2",{id:"generating-novel-content"},"Generating novel content"),(0,o.kt)("p",null,"Even though the outputs are generated based on frequencies of similar content in the training data, generative AI models are still capable of generating novel content that has never existed before."),(0,o.kt)("p",null,"Try a prompt like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Write a limerick about the Python programming language\n")),(0,o.kt)("p",null,"How was the limerick? If you didn't like it, you can always ask the chat session to generate a new one."),(0,o.kt)("p",null,"Next lets check out the parameters we have available: Use the Temperature field on the right column of the chat interface, and set Temperature to zero. What do you observe when you retry the prompt?"),(0,o.kt)("p",null,'The Temperature parameter controls how "creative" the model is allowed to be. At low values of "Temperature", the model is very likely to respond with the completion with the highest weight, limiting the variability in the responses. At higher values of Temperature, low-weighted completions become more likely to be generated, allowing for more creative (but less precise) responses.'),(0,o.kt)("p",null,"Here is another prompt to try with different Temperature values:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"What is a unique and long name for a cat?\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Make sure the Temperature parameter is reset to 1 before you continue.")),(0,o.kt)("h2",{id:"less-useful-prompts"},"Less-useful prompts"),(0,o.kt)("p",null,"Natural language generative AI models have a number of limitations:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"They are limited by their training data, which was frozen at a fixed point in time in the past."),(0,o.kt)("li",{parentName:"ul"},"They generate text that resembles human language, but are not capable of reasoning or cognition."),(0,o.kt)("li",{parentName:"ul"},"They have no memory of prior prompts (if chat is cleared), and no capability to learn or change their behavior.")),(0,o.kt)("p",null,"Here are some example prompts that demonstrate these weaknesses:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"When did Queen Elizabeth II die?\n")),(0,o.kt)("p",null,"In this case, the model is limited by training data, which is current only up to June 2021."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"What is the square root of 98765?\n")),(0,o.kt)("p",null,"The model will generate an answer to math questions, but there's no guarantee it will be correct. The correct answer here (to 3 dp) is 314.269. Try clicking Regenerate and see if you get the same answer. (If you do get the correct response to a math question from a foundational GPT model, it's only because the question and answer are well represented in the training data.)"),(0,o.kt)("p",null,"But you could ask the model to write Python code to calculate the square root of 98765, and it would probably do a good job. (Try it!)."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Write Python code to calculate the square root of 98765\n")),(0,o.kt)("p",null,"Next, ask the model to solve a puzzle:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Steven is my uncle. Steven has two children, Sam and Lindsay. Sam's sole aunt is called Julie. What is my mother's name?\n")),(0,o.kt)("p",null,"It's a simple puzzle, but the model cannot reason about the relationships between people and will not be able to solve it. (More advanced models like GPT-4 are more likely to get the answer right, but are still not guaranteed to do so.)"),(0,o.kt)("h2",{id:"generative-ai-models-cant-perform-actions"},"Generative AI models can't perform actions"),(0,o.kt)("p",null,"Clear the contents of the chat box. Enter the following text:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"What are the 5 stocks listed on https://finance.yahoo.com/trending-tickers with the largest market cap?\n")),(0,o.kt)("p",null,"Although the model will respond with a plausible answer, look closely: those aren't actually the 5 largest stocks today. Foundational AI models are not capable of performing actions, so they can't actually visit the web page and read the list of stocks. Instead, they generate a plausible response based on the prompt and the training data."),(0,o.kt)("h2",{id:"completions-are-not-facts"},"Completions are not facts"),(0,o.kt)("p",null,"Clear the contents of the prompt box. Enter the following text, then click Generate."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Write an obituary for the poet Harold Bloomsbury. Include references.\n")),(0,o.kt)("p",null,"There has never been a poet (nor indeed any person, according to web search) named Harold Bloomsbury. As a result, the model generates text in the form of an obituary, but not grounded in any facts. Even the requested references, while convincing-looking, are not real."))}d.isMDXComponent=!0}}]);