"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[404],{4137:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),d=a,m=u["".concat(l,".").concat(d)]||u[d]||h[d]||o;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3568:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(7462),a=(n(7294),n(4137));const o={},i="Other things to try",s={unversionedId:"Extra-Credit",id:"Extra-Credit",title:"Other things to try",description:"Completed the workshop already? Need something else to do? Here are some other things to try",source:"@site/docs/90-Extra-Credit.md",sourceDirName:".",slug:"/Extra-Credit",permalink:"/AzureOpenAIService-Workshop/Extra-Credit",draft:!1,editUrl:"https://github.com/hnky/AzureOpenAIService-Workshop/tree/main/docs/90-Extra-Credit.md",tags:[],version:"current",sidebarPosition:90,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Recap: What we've learned",permalink:"/AzureOpenAIService-Workshop/Learnings-and-Resources"}},l={},c=[{value:"Generate Images with Bing Create",id:"generate-images-with-bing-create",level:2},{value:"Have a conversation with Bing Chat",id:"have-a-conversation-with-bing-chat",level:2},{value:"Have an ongoing conversation",id:"have-an-ongoing-conversation",level:3},{value:"Get information about recent events",id:"get-information-about-recent-events",level:3},{value:"Generate an image in Creative mode",id:"generate-an-image-in-creative-mode",level:2}],p={toc:c},u="wrapper";function h(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"other-things-to-try"},"Other things to try"),(0,a.kt)("p",null,"Completed the workshop already? Need something else to do? Here are some other things to try"),(0,a.kt)("h2",{id:"generate-images-with-bing-create"},"Generate Images with Bing Create"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"NOTE: A Microsoft account is required for this section")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Go to ",(0,a.kt)("a",{parentName:"li",href:"https://www.bing.com/create"},"Bing Create")," and sign in with your Microsoft account if prompted")),(0,a.kt)("p",null,"Bing Create uses the Dall-E image generation model to generate an image from a prompt you supply. "),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},'Click the "Surprise Me" button to generate a random prompt, and then click "Create" to geneate an image based on that prompt.')),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Try entering your own prompt and see what images are generated."))),(0,a.kt)("h2",{id:"have-a-conversation-with-bing-chat"},"Have a conversation with Bing Chat"),(0,a.kt)("p",null,"In this section we will use Bing Chat: ",(0,a.kt)("a",{parentName:"p",href:"https://bing.com/chat"},"https://bing.com/chat"),"."),(0,a.kt)("p",null,"Unlike the conversation-based models such as ChatGPT in Azure OpenAI Service, Bing Chat's responses are not limited by the underlying natural language model alone. Bing Chat uses a variety of techniques to provide \"grounding\" for its responses, including the results of live Web searches. This means that Bing Chat can use current information, not just information that was included in the model's training data, to inform its responses. "),(0,a.kt)("p",null,"Bing Chat also offers three interaction modes: Creative, Balanced, and Precise, which allow you to control the tradeoff between the relevance of the responses and the creativity of the responses."),(0,a.kt)("p",null,"Let's try some examples to see how this works in practice."),(0,a.kt)("h3",{id:"have-an-ongoing-conversation"},"Have an ongoing conversation"),(0,a.kt)("p",null,"Start with Bing in Balanced mode. Ask any question you like. Ask for followups-too! You can also use the suggested continuation buttons to guide the conversation."),(0,a.kt)("h3",{id:"get-information-about-recent-events"},"Get information about recent events"),(0,a.kt)("p",null,"Bing Chat is based on ",(0,a.kt)("a",{parentName:"p",href:"https://blogs.bing.com/search/march_2023/Confirmed-the-new-Bing-runs-on-OpenAI%E2%80%99s-GPT-4"},"OpenAI's GPT-4 model"),", which was trained on data collected before September 2021. Nonetheless, thanks to the grounding techniques mentioned above, Bing Chat can provide information about recent and current events. "),(0,a.kt)("p",null,'First, enable "Precise" mode in Bing Chat by clicking the "New Topic" button and clicking the "More Precise" button.'),(0,a.kt)("p",null,"Now, try these prompts, and compare the results to using the models in the Azure OpenAI Service playground:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"When did Queen Elizabeth II die?\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"How's today's weather in Seattle, WA\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"What big news happened today?\n")),(0,a.kt)("h2",{id:"generate-an-image-in-creative-mode"},"Generate an image in Creative mode"),(0,a.kt)("p",null,"As the name suggests, Creative mode is best for generating creative responses that won't necessarily be grounded in facts: poetry, jokes, and so on. You can also use Bing Chat in creative mode to generate images. Try something like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Draw a logo for an ice-cream shop located in Hawaii near the beach.\n")),(0,a.kt)("p",null,"Try other prompts and see what creative responses you can get!"))}h.isMDXComponent=!0}}]);