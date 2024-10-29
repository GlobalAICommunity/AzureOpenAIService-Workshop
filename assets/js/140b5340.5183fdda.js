"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[828],{4781:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var o=n(7624),r=n(4552);const a={},i="Prompt engineering techniques",s={id:"Part-1-labs/Prompt-engineering-techniques",title:"Prompt engineering techniques",description:"OpenAI models like GPT-3 do not learn or adapt during user interactions. They generate responses based on pre-training with a large dataset and do not update their knowledge from individual conversations. Any improvements or updates to the model's capabilities are made through a controlled retraining process by OpenAI, not through real-time learning.",source:"@site/docs/04-Part-1-labs/4-Prompt-engineering-techniques.md",sourceDirName:"04-Part-1-labs",slug:"/Part-1-labs/Prompt-engineering-techniques",permalink:"/Part-1-labs/Prompt-engineering-techniques",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Conversation history",permalink:"/Part-1-labs/Conversation-history"},next:{title:"Image Generation",permalink:"/Part-1-labs/Image Generation"}},h={},l=[{value:"Zero-shot learning",id:"zero-shot-learning",level:2},{value:"Few-shot learning",id:"few-shot-learning",level:2},{value:"Break the task down",id:"break-the-task-down",level:2},{value:"Chain of thought prompting",id:"chain-of-thought-prompting",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,r.M)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"prompt-engineering-techniques",children:"Prompt engineering techniques"}),"\n",(0,o.jsx)(t.admonition,{title:"Do OpenAI models learn?",type:"tip",children:(0,o.jsx)(t.p,{children:"OpenAI models like GPT-3 do not learn or adapt during user interactions. They generate responses based on pre-training with a large dataset and do not update their knowledge from individual conversations. Any improvements or updates to the model's capabilities are made through a controlled retraining process by OpenAI, not through real-time learning."})}),"\n",(0,o.jsx)(t.p,{children:"This section discusses prompt engineering techniques that can help LLMs solve certain problems more effectively."}),"\n",(0,o.jsx)(t.h2,{id:"zero-shot-learning",children:"Zero-shot learning"}),"\n",(0,o.jsx)(t.p,{children:"LLMs are trained on such large amounts of data they may be be able to perform some tasks with very little prompting. Try the example below and change the sentence to see what outcomes you find."}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-text",metastring:'title="Enter in the user prompt:"',children:"Classify the text into neutral, negative or positive.\nText: My calendar today looks ok\nSentiment:\n"})}),"\n",(0,o.jsx)(t.h2,{id:"few-shot-learning",children:"Few-shot learning"}),"\n",(0,o.jsx)(t.p,{children:"If zero-shot learning is failing for your examples and more complex tasks, few shot prompting can provide examples that can better steer the model to the desired outcomes.  Examples show the model cleanly how we want it to operate. Try the example below to see the outcome. Can you think of other examples that could leverage few-shot learning?"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-text",metastring:'title="Enter in the user prompt:"',children:"Headline: Twins' Correa to use opt-out, test free agency\nTopic: Baseball\nHeadline: Qatar World Cup to have zones for sobering up\nTopic: Soccer\nHeadline: Yates: Fantasy football intel for Week 6\nTopic: Football\nHeadline: Coach confident injury won't derail Warriors\nTopic:\n"})}),"\n",(0,o.jsxs)(t.p,{children:["The next two sections are very well described in the ",(0,o.jsx)(t.a,{href:"https://www.linkedin.com/pulse/meet-mr-prompty-break-tasks-down-chain-thought-dynamic-mario-fontana/?trackingId=%2FzJrYZ06TxWwVVLkU7rxug%3D%3D",children:"'Meet Mr Prompty'"})," articles on LinkedIn, thank you author, Mario Fontana, for sharing your insights."]}),"\n",(0,o.jsx)(t.h2,{id:"break-the-task-down",children:"Break the task down"}),"\n",(0,o.jsx)(t.p,{children:"In this technique, the user is responsible for breaking the task down into smaller, more manageable steps. The LLM then follows the user's instructions to complete the task."}),"\n",(0,o.jsx)(t.p,{children:"First update the System Message:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-text",metastring:'title="Enter in the system message:"',children:"You are a famous poet who wants to write a poem about a flower. \nYou will be given instructions on how to complete the task.\n"})}),"\n",(0,o.jsx)(t.p,{children:"Enter the user prompt below to see 'break down the task' in action"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-text",metastring:'title="Enter in the user prompt:"',children:"You will identify the main features of a flower, choose a flower \nto write about, brainstorm some ideas for the poem, write a draft, \nrevise the poem, and publish the poem\n\n===\nInstructions:\n\n- Identify the main features of a flower.\n    - What are the different parts of a flower?\n    - What are the colors of a flower?\n    - What are the shapes of a flower?\n- Choose a flower to write about.\n    - What kind of flower do you want to write about?\n    - Why did you choose this flower?\n- Brainstorm some ideas for the poem.\n    - What are some things you want to say about the flower?\n    - What kind of poem do you want to write?\n- Write a draft of the poem.\n    - Start writing the poem.\n    - Don't worry about making it perfect yet.\n- Revise the poem.\n    - Read the poem aloud.\n    - Make changes to the poem.\n"})}),"\n",(0,o.jsx)(t.h2,{id:"chain-of-thought-prompting",children:"Chain of thought prompting"}),"\n",(0,o.jsx)(t.p,{children:"In this technique, the LLM is responsible for breaking the task down into smaller steps. The LLM uses its knowledge of the world and its ability to reason. The LLM then generates a chain of thoughts that leads to the solution of the task."}),"\n",(0,o.jsx)(t.p,{children:"Refresh the Playground page to reset the System Message to its default value, and then enter the user prompt below to see 'Chain of thought prompting' in action:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-text",metastring:'title="Enter in the user prompt:"',children:"Who was the first person to walk on the moon? Take a step-by-step approach in your response, cite sources, and give reasoning before sharing a final answer in the below format: ANSWER is: <name>\n"})}),"\n",(0,o.jsx)(t.admonition,{title:"Assignment",type:"info",children:(0,o.jsx)(t.p,{children:"Create a prompt for the assistant that helps determine the best way of traveling between Amsterdam and London and explain why."})})]})}function p(e={}){const{wrapper:t}={...(0,r.M)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},4552:(e,t,n)=>{n.d(t,{I:()=>s,M:()=>i});var o=n(1504);const r={},a=o.createContext(r);function i(e){const t=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),o.createElement(a.Provider,{value:t},e.children)}}}]);