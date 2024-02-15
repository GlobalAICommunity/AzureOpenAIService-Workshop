"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[804],{6476:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var a=n(7624),i=n(4552);const r={},o="Basic Prompting",s={id:"Part-1-labs/Basic-Prompting",title:"Basic Prompting",description:"Prompt engineering is a concept in Natural Language Processing (NLP) that involves embedding descriptions of tasks in input to prompt the model to output the desired results.",source:"@site/docs/04-Part-1-labs/1-Basic-Prompting.md",sourceDirName:"04-Part-1-labs",slug:"/Part-1-labs/Basic-Prompting",permalink:"/Part-1-labs/Basic-Prompting",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Get started",permalink:"/setup"},next:{title:"Conversation history",permalink:"/Part-1-labs/Conversation-history"}},l={},c=[{value:"Generating novel content",id:"generating-novel-content",level:2},{value:"Less-useful prompts",id:"less-useful-prompts",level:2},{value:"Generative AI models can&#39;t perform actions",id:"generative-ai-models-cant-perform-actions",level:2},{value:"Completions are not facts",id:"completions-are-not-facts",level:2},{value:"Information extraction",id:"information-extraction",level:2},{value:"Structured data extraction",id:"structured-data-extraction",level:2},{value:"Text Classification",id:"text-classification",level:2},{value:"Text summarization",id:"text-summarization",level:2}];function h(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.M)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"basic-prompting",children:"Basic Prompting"}),"\n",(0,a.jsx)(t.admonition,{title:"What is prompt engineering?",type:"tip",children:(0,a.jsxs)(t.p,{children:["Prompt engineering is a concept in Natural Language Processing (NLP) that involves ",(0,a.jsx)(t.strong,{children:"embedding descriptions of tasks"})," in input to ",(0,a.jsx)(t.strong,{children:"prompt the model"})," to output the ",(0,a.jsx)(t.strong,{children:"desired results"}),"."]})}),"\n",(0,a.jsx)(t.p,{children:"Lets start with a few prompts and observe the response using the chat interface."}),"\n",(0,a.jsx)(t.p,{children:"Here are some examples to try, but get creative with your own prompts and see what happens!"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-text",metastring:'title="Enter in the user prompt:"',children:"What is the capital of Australia?\n"})}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-text",metastring:'title="Enter in the user prompt:"',children:"A recipe for banana bread, and an itemized shopping list of the ingredients.\n"})}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-text",metastring:'title="Enter in the user prompt:"',children:"What were the 10 top movies of 2001? \nRespond in a list.\nListing the movie name, the box office earnings, and the studio\nRanking the movies from 1 to 10 in the list.\n"})}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-text",metastring:'title="Enter in the user prompt:"',children:"Write a Python function to calculate the nth prime number.\n"})}),"\n",(0,a.jsx)(t.h2,{id:"generating-novel-content",children:"Generating novel content"}),"\n",(0,a.jsx)(t.p,{children:"Even though the outputs are generated based on frequencies of similar content in the training data, generative AI models are still capable of generating novel content that has never existed before."}),"\n",(0,a.jsx)(t.p,{children:"Try a prompt like this:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-text",metastring:'title="Enter in the user prompt:"',children:"Write a limerick about the Python programming language\n"})}),"\n",(0,a.jsx)(t.p,{children:"How was the limerick? If you didn't like it, you can always ask the chat session to generate a new one."}),"\n",(0,a.jsx)(t.p,{children:"Next lets check out the parameters we have available: Use the Temperature field on the right column of the chat interface, and set Temperature to zero. What do you observe when you retry the prompt?"}),"\n",(0,a.jsx)(t.p,{children:'The Temperature parameter controls how "creative" the model is allowed to be. At low values of "Temperature", the model is very likely to respond with the completion with the highest weight, limiting the variability in the responses. At higher values of Temperature, low-weighted completions become more likely to be generated, allowing for more creative (but less precise) responses.'}),"\n",(0,a.jsx)(t.p,{children:"Here is another prompt to try with different Temperature values:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-text",metastring:'title="Enter in the user prompt:"',children:"What is a unique and long name for a cat?\n"})}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.strong,{children:"Make sure the Temperature parameter is reset to 1 before you continue."})}),"\n",(0,a.jsx)(t.h2,{id:"less-useful-prompts",children:"Less-useful prompts"}),"\n",(0,a.jsx)(t.p,{children:"Natural language generative AI models have a number of limitations:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"They are limited by their training data, which was frozen at a fixed point in time in the past."}),"\n",(0,a.jsx)(t.li,{children:"They generate text that resembles human language, but are not capable of reasoning or cognition."}),"\n",(0,a.jsx)(t.li,{children:"They have no memory of prior prompts (if chat is cleared), and no capability to learn or change their behavior."}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"Here are some example prompts that demonstrate these weaknesses:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-text",metastring:'title="Enter in the user prompt:"',children:"When did Queen Elizabeth II die?\n"})}),"\n",(0,a.jsx)(t.p,{children:"In this case, the model is limited by training data, which is current only up to June 2021."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-text",metastring:'title="Enter in the user prompt:"',children:"What is the square root of 98765?\n"})}),"\n",(0,a.jsx)(t.p,{children:"The model will generate an answer to math questions, but there's no guarantee it will be correct. The correct answer here (to 3 dp) is 314.269. Try submitting the same prompt again and see if you get the same answer. (If you do get the correct response to a math question from a foundational GPT model, it's only because the question and answer are well represented in the training data.)"}),"\n",(0,a.jsx)(t.p,{children:"But you could ask the model to write Python code to calculate the square root of 98765, and it would probably do a good job. (Try it!)."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-text",metastring:'title="Enter in the user prompt:"',children:"Write Python code to calculate the square root of 98765\n"})}),"\n",(0,a.jsx)(t.p,{children:"Next, ask the model to solve a puzzle:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-text",metastring:'title="Enter in the user prompt:"',children:"Steven is my uncle. Steven has two children, Sam and Lindsay. Sam's sole aunt is called Julie. What is my mother's name?\n"})}),"\n",(0,a.jsx)(t.p,{children:"It's a simple puzzle, but the GPT-3.5 model cannot reason about the relationships between people and may not be able to solve it. (More advanced models like GPT-4 are more likely to get the answer right, but are still not guaranteed to do so.)"}),"\n",(0,a.jsx)(t.h2,{id:"generative-ai-models-cant-perform-actions",children:"Generative AI models can't perform actions"}),"\n",(0,a.jsx)(t.p,{children:"Clear the contents of the chat box. Enter the following text:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-text",metastring:'title="Enter in the user prompt:"',children:"What are the 5 stocks listed on https://finance.yahoo.com/trending-tickers with the largest market cap?\n"})}),"\n",(0,a.jsx)(t.p,{children:"Although the model will respond with a plausible answer, look closely: those aren't actually the 5 largest stocks today. Foundational AI models are not capable of performing actions, so they can't actually visit the web page and read the list of stocks. Instead, they generate a plausible response based on the prompt and the training data."}),"\n",(0,a.jsx)(t.h2,{id:"completions-are-not-facts",children:"Completions are not facts"}),"\n",(0,a.jsx)(t.p,{children:"Clear the contents of the prompt box. Enter the following text, then click Generate."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-text",metastring:'title="Enter in the user prompt:"',children:"Write an obituary for the poet Harold Bloomsbury. Include references.\n"})}),"\n",(0,a.jsx)(t.p,{children:"There has never been a poet (nor indeed any person, according to web search) named Harold Bloomsbury. As a result, the model generates text in the form of an obituary, but not grounded in any facts. Even the requested references, while convincing-looking, are not real."}),"\n",(0,a.jsx)(t.p,{children:"As we've seen, natural language Generative AI models can produce unexpected or unwanted responses to prompts. This can be caused by any number of factors, including:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"Insufficient information in the training data"}),"\n",(0,a.jsx)(t.li,{children:"Insufficient context in the prompt"}),"\n",(0,a.jsx)(t.li,{children:"Lack of capability of the model itself"}),"\n",(0,a.jsx)(t.li,{children:'Hostile intent by the user providing the prompt ("jailbreaking")'}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"information-extraction",children:"Information extraction"}),"\n",(0,a.jsx)(t.p,{children:"The example below shows how you can combine a prompt with data to extract information using natural-language instructions. In this case, the completion extracts the name, company, location, and phone number from an email. Modify the prompt and the source data to extract different information."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"Extract the person name, company name, location and phone number from the text below.\n\nHello. My name is Robert Smith. I\u2019m calling from Contoso Insurance, Delaware. My colleague mentioned that you are interested in learning about our comprehensive benefits policy. Could you give me a call back at (555) 346-9322 when you get a chance so we can go over the benefits?\n"})}),"\n",(0,a.jsx)(t.h2,{id:"structured-data-extraction",children:"Structured data extraction"}),"\n",(0,a.jsx)(t.p,{children:"In this example, we provide freeform narrative about fictitious fruits, and prompt the model to generate a table of all the fruits mentioned and their attributes."}),"\n",(0,a.jsx)(t.p,{children:'In this example, we "primed" the model with the desired output format: a header row, and a couple of examples.'}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"There are many fruits that were found on the recently discovered planet Goocrux. There are neoskizzles that grow there, which are purple and taste like candy. There are also loheckles, which are a grayish blue fruit and are very tart, a little bit like a lemon. Pounits are a bright green color and are more savory than sweet. There are also plenty of loopnovas which are a neon pink flavor and taste like cotton candy. Finally, there are fruits called glowls, which have a very sour and bitter taste which is acidic and caustic, and a pale orange tinge to them.\n\n\nPlease make a table summarizing the fruits from Goocrux\n| Fruit | Color | Flavor |\n| Neoskizzles | Purple | Sweet |\n| Loheckles | Grayish blue | Tart |\n"})}),"\n",(0,a.jsx)(t.p,{children:"Try extending the prompt by appending the following text:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"Please also make a JSON array summarizing the fruits from Goocrux:\n"})}),"\n",(0,a.jsx)(t.p,{children:"The model will now return a JSON array of the fruit and their attributes."}),"\n",(0,a.jsx)(t.h2,{id:"text-classification",children:"Text Classification"}),"\n",(0,a.jsx)(t.p,{children:'In this example, we provide one example of a headline and a category, and ask the model to classify a second example. This is an example of "one-shot learning": with just one example, the model can generalize to classify a new example.'}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"Classify the following news headline into 1 of the following categories: Business, Tech, Politics, Sport, Entertainment\n\nHeadline 1: Donna Steffensen Is Cooking Up a New Kind of Perfection. The Internet's most beloved cooking guru has a buzzy new book and a fresh new perspective\nCategory: Entertainment\n\nHeadline 2: Major Retailer Announces Plans to Close Over 100 Stores\n\nCategory:\n"})}),"\n",(0,a.jsx)(t.p,{children:"Try replacing Headline 2 with other text and regenerating the completion. Does it generate the appropriate category?"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"Jets lose, again!\n"})}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"Obama announces re-election bid\n"})}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"Microsoft up in after-hours trading\n"})}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"20nm process offers more density and better power value\n"})}),"\n",(0,a.jsx)(t.h2,{id:"text-summarization",children:"Text summarization"}),"\n",(0,a.jsx)(t.p,{children:'Text summarization is a well known capability of ChatGPT - it creates a short summary of a larger piece of text. Add tl;dr (for "too long; didn\'t read") to gain a summary of the article below. Where can you see this being useful in your business?'}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"At Microsoft, we have been on a quest to advance AI beyond existing techniques, by taking a more holistic, human-centric approach to learning and understanding. As Chief Technology Officer of Azure AI Cognitive Services, I have been working with a team of amazing scientists and engineers to turn this quest into a reality. In my role, I enjoy a unique perspective in viewing the relationship among three attributes of human cognition: monolingual text (X), audio or visual sensory signals, (Y) and multilingual (Z). At the intersection of all three, there\u2019s magic\u2014what we call XYZ-code as illustrated in Figure 1\u2014a joint representation to create more powerful AI that can speak, hear, see, and understand humans better. \n\nWe believe XYZ-code will enable us to fulfill our long-term vision: cross-domain transfer learning, spanning modalities and languages. The goal is to have pre-trained models that can jointly learn representations to support a broad range of downstream AI tasks, much in the way humans do today. Over the past five years, we have achieved human performance on benchmarks in conversational speech recognition, machine translation, conversational question answering, machine reading comprehension, and image captioning. These five breakthroughs provided us with strong signals toward our more ambitious aspiration to produce a leap in AI capabilities, achieving multi-sensory and multilingual learning that is closer in line with how humans learn and understand. I believe the joint XYZ-code is a foundational component of this aspiration, if grounded with external knowledge sources in the downstream AI tasks.\n"})}),"\n",(0,a.jsxs)(t.p,{children:["Prompt Engineering is a complex and rapidly-evolving practice. ",(0,a.jsx)(t.a,{href:"https://learn.microsoft.com/azure/cognitive-services/openai/concepts/advanced-prompt-engineering",children:"This article"})," on Microsoft Learn provides the latest guidance."]}),"\n",(0,a.jsx)(t.p,{children:"In the next labs we are going to learn how to stear the models to create the response we want."}),"\n",(0,a.jsx)(t.admonition,{title:"Assignment",type:"info",children:(0,a.jsx)(t.p,{children:"Create a prompt that generates a rhyme about a lost kangaroo in the middle of the city."})})]})}function d(e={}){const{wrapper:t}={...(0,i.M)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},4552:(e,t,n)=>{n.d(t,{I:()=>s,M:()=>o});var a=n(1504);const i={},r=a.createContext(i);function o(e){const t=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),a.createElement(r.Provider,{value:t},e.children)}}}]);