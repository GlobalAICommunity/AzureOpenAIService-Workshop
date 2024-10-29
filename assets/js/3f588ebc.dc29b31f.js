"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[184],{3539:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var i=n(7624),s=n(4552);const a={},r="Multimodal",o={id:"Part-1-labs/Multimodal",title:"Multimodal",description:"By now we have interacted with LLMs using a single modality: inputting text and receiving either text or images. However, multimodal interfaces are becoming increasingly popular, as they allow users to interact with models using multiple modalities, such as text, images, and speech, thus facilitating human-computer interactions. In this section, we will explore how to use multimodal interfaces to interact with GPT-4o.",source:"@site/docs/04-Part-1-labs/6-Multimodal.md",sourceDirName:"04-Part-1-labs",slug:"/Part-1-labs/Multimodal",permalink:"/Part-1-labs/Multimodal",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Image Generation",permalink:"/Part-1-labs/Image Generation"},next:{title:"System Message",permalink:"/Part-2-labs/System-Message"}},l={},c=[{value:"Best Practices",id:"best-practices",level:2},{value:"Excerise 1",id:"excerise-1",level:2},{value:"Excerise 2",id:"excerise-2",level:2},{value:"Excerise 3",id:"excerise-3",level:2},{value:"Next Steps",id:"next-steps",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.M)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"multimodal",children:"Multimodal"}),"\n",(0,i.jsx)(t.p,{children:"By now we have interacted with LLMs using a single modality: inputting text and receiving either text or images. However, multimodal interfaces are becoming increasingly popular, as they allow users to interact with models using multiple modalities, such as text, images, and speech, thus facilitating human-computer interactions. In this section, we will explore how to use multimodal interfaces to interact with GPT-4o."}),"\n",(0,i.jsxs)(t.admonition,{type:"tip",children:[(0,i.jsx)(t.mdxAdmonitionTitle,{}),(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"GPT-4o"})," is a multimodal model that incorporates both natural language processing and visual understanding. It is able to process as input a combination of text and images, and generate an output which is relevant to both modalities."]})]}),"\n",(0,i.jsx)(t.h2,{id:"best-practices",children:"Best Practices"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Contextual specificity"}),": Adding context to the scenario at hand gives the model a better understanding of an appropriate output. This level of specificity aids in focusing on relevant aspects and avoiding extraneous details.\u200b"]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Task-oriented prompts"}),": Focusing on a specific task helps the model to develop the output while taking that perspective into consideration.\u200b"]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Define output format"}),": Clearly mention the desired format for the output, such as markdown, JSON, HTML, etc. You can also suggest a specific structure, length, or specific attributes about the response.\u200b"]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Handling refusals"}),": When the model indicates an inability to perform a task, refining the prompt can be an effective solution. More specific prompts can guide the model towards a clearer understanding and better execution of the task. Some tips to keep in mind:\u200b"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Request explanations for generated responses to enhance transparency in the model's output\u200b"}),"\n",(0,i.jsx)(t.li,{children:"If using a single-image prompt, place the image before the text\u200b"}),"\n",(0,i.jsx)(t.li,{children:"Ask the model to describe the image in detail first and complete your specific task from the description\u200b"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Prompt Tuning"}),": Try prompt tuning techniques that we explored for text generation scenarios such as:\u200b"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Breaking down requests (e.g. chain of thoughts)\u200b"}),"\n",(0,i.jsx)(t.li,{children:"Adding examples (e.g. few-shot learning)\u200b"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"excerise-1",children:"Excerise 1"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["In Project playground section select ",(0,i.jsx)(t.strong,{children:"Chat."})]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"In the chat text box, click on the attachment icon to upload a local image."}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:n(5964).c+"",children:"Download the image"})}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Once you have uploaded the file, try these prompts to start interacting with the image:"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-text",metastring:'title="Enter in the user prompt:"',children:"What is on the image?\n"})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-text",metastring:'title="Enter in the user prompt:"',children:"What is the house made of?\n"})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-text",metastring:'title="Enter in the user prompt:"',children:"Does the house have a swimming pool?\n"})}),"\n",(0,i.jsx)(t.h2,{id:"excerise-2",children:"Excerise 2"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:n(820).c+"",children:"Download the image"})}),"\n"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-text",metastring:'title="Enter in the user prompt:"',children:"Answer the questions on the image.\n"})}),"\n",(0,i.jsx)(t.h2,{id:"excerise-3",children:"Excerise 3"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:n(5636).c+"",children:"Download the images"})}),"\n"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-text",metastring:'title="Enter in the user prompt:"',children:"    Create a tagline and short description for this rental home advertisement.\n    - The first picture is from the home\n    - The other pictures are from sights nearby\n    - In the description use the features of the house and make the ad more compelling with the sights. \n    - Do not talk about features not visible in the images.\n    - If you have information about the location of the images, use that information in the description\n"})}),"\n",(0,i.jsx)(t.h2,{id:"next-steps",children:"Next Steps"}),"\n",(0,i.jsx)(t.p,{children:"Congratulations! You have now completed the 3rd part of the lab and you learnt how to interact with multimodal models."})]})}function h(e={}){const{wrapper:t}={...(0,s.M)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},5964:(e,t,n)=>{n.d(t,{c:()=>i});const i=n.p+"assets/files/mm_1_Rental_Listing_s-e753b1de6109a1267b44fbde00425210.jpg"},820:(e,t,n)=>{n.d(t,{c:()=>i});const i=n.p+"assets/files/mm_2_TriangleCalculation_s-1b0d8fdcded59224a4811657954f3aa7.jpg"},5636:(e,t,n)=>{n.d(t,{c:()=>i});const i=n.p+"assets/files/mm_3-15234e9b74032cd938723f092afd48ea.zip"},4552:(e,t,n)=>{n.d(t,{I:()=>o,M:()=>r});var i=n(1504);const s={},a=i.createContext(s);function r(e){const t=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(a.Provider,{value:t},e.children)}}}]);