"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9],{4137:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>c});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=d(n),m=o,c=p["".concat(s,".").concat(m)]||p[m]||h[m]||r;return n?a.createElement(c,i(i({ref:t},u),{},{components:n})):a.createElement(c,i({ref:t},u))}));function c(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:o,i[1]=l;for(var d=2;d<r;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5968:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var a=n(7462),o=(n(7294),n(4137));const r={},i="Understanding LLM's",l={unversionedId:"Understanding-LLMs",id:"Understanding-LLMs",title:"Understanding LLM's",description:"What is a Large Language Model (LLM)",source:"@site/docs/30-Understanding-LLMs.md",sourceDirName:".",slug:"/Understanding-LLMs",permalink:"/AzureOpenAIService-Workshop/Understanding-LLMs",draft:!1,editUrl:"https://github.com/hnky/AzureOpenAIService-Workshop/tree/main/docs/30-Understanding-LLMs.md",tags:[],version:"current",sidebarPosition:30,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Explore AI Models",permalink:"/AzureOpenAIService-Workshop/Explore-AI-Models"},next:{title:"Prompt Engineering",permalink:"/AzureOpenAIService-Workshop/Prompt-Engineering"}},s={},d=[{value:"What is a Large Language Model (LLM)",id:"what-is-a-large-language-model-llm",level:2},{value:"How large are they?",id:"how-large-are-they",level:3},{value:"Where do &#39;foundational models&#39; fit into LLMs?",id:"where-do-foundational-models-fit-into-llms",level:3},{value:"How does a LLM differ from more traditional natural language processing (NLP)?",id:"how-does-a-llm-differ-from-more-traditional-natural-language-processing-nlp",level:3},{value:"What doesn&#39;t a LLM do?",id:"what-doesnt-a-llm-do",level:3},{value:"Understanding tokens",id:"understanding-tokens",level:2},{value:"How many tokens are in the following words?",id:"how-many-tokens-are-in-the-following-words",level:3},{value:"Token limits",id:"token-limits",level:3},{value:"Using Generative AI",id:"using-generative-ai",level:2},{value:"Information extraction",id:"information-extraction",level:3},{value:"Extract structured data from text",id:"extract-structured-data-from-text",level:3},{value:"Classification",id:"classification",level:3},{value:"Text summarization",id:"text-summarization",level:3},{value:"Next steps",id:"next-steps",level:2}],u={toc:d},p="wrapper";function h(e){let{components:t,...r}=e;return(0,o.kt)(p,(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"understanding-llms"},"Understanding LLM's"),(0,o.kt)("h2",{id:"what-is-a-large-language-model-llm"},"What is a Large Language Model (LLM)"),(0,o.kt)("p",null,"A large language model (LLM) is a type of AI that can process and produce natural language text. It learns from a massive amount of text data such as books, articles, and web pages to discover patterns and rules of language from them. "),(0,o.kt)("h3",{id:"how-large-are-they"},"How large are they?"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Alt Text",src:n(4191).Z,width:"2030",height:"1128"})),(0,o.kt)("p",null,"An LLM is built using a neural network architecture. It takes an input, has a number of hidden layers that break down different aspects of language, and then an output layer. People often report how the next foundational model is bigger than the last - what does this mean? The more parameters a model has, the more data it can process, learn from, and generate. For each connection between two neurons of the neural network architecture, there is a function: weight * input + bias.  These produce numerical values that determine how the model processes language. They are rather large when they can report millions of parameters back in 2018 to trillions of parameters being calculated by GPT4 in 2023."),(0,o.kt)("h3",{id:"where-do-foundational-models-fit-into-llms"},"Where do 'foundational models' fit into LLMs?"),(0,o.kt)("p",null,"A foundation model refers to a specific instance or version of an LLM, such as GPT-3, GPT-4 or Codex, that has been trained and fine-tuned on a large corpus of text or code (in the case of the Codex model). A foundational model takes in training data in all different formats and uses a transformer architecture to build a general model. From there adaptions and specializations can be created to achieve certain tasks via prompting or fine-tuning."),(0,o.kt)("h3",{id:"how-does-a-llm-differ-from-more-traditional-natural-language-processing-nlp"},"How does a LLM differ from more traditional natural language processing (NLP)?"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Traditional NLP"),(0,o.kt)("th",{parentName:"tr",align:null},"Large Language Models"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"One model per capability needed."),(0,o.kt)("td",{parentName:"tr",align:null},"Single model for variety of natural language use cases")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Provide the model a set of labelled data to train ML model on"),(0,o.kt)("td",{parentName:"tr",align:null},"Uses many TBs of unlabelled data in the foundation model")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Highly optimized for specific use cases"),(0,o.kt)("td",{parentName:"tr",align:null},"Describe in natural language what you want the model to do")))),(0,o.kt)("h3",{id:"what-doesnt-a-llm-do"},"What doesn't a LLM do?"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Understand language:")," its just a predictive engine that based on text it has seen previously will pull patterns together to produce text. Also does not understand math."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Understand facts:"),' there are no separate \'modes\' for "information retrieval" and "creative writing", it just predicts the next most probably token.'),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Understand manners, emotion or ethics"),": Avoid anthropomorphizing LLMs or claiming they\n'understand' anything: the output is just a combination of the training data and the prompts.")),(0,o.kt)("h2",{id:"understanding-tokens"},"Understanding tokens"),(0,o.kt)("p",null,"We've mentioned \"tokens\" a few times without stopping to explain what they are. Let's do that now."),(0,o.kt)("p",null,"The OpenAI natural language models don't operate on words or characters as units of text, but on something in-between: tokens. A token may be a single character, or a fraction of a word, or an entire word. Many common words are represented by a single token, less common words are represented by multiple tokens."),(0,o.kt)("p",null,"Open AI has a useful Tokenizer website that can help you understand how it tokenizes your requests - navigate there now and try out the examples below: ",(0,o.kt)("a",{parentName:"p",href:"https://platform.openai.com/tokenizer"},"https://platform.openai.com/tokenizer"),"."),(0,o.kt)("p",null,"When you enter text in the prompt box, a counter appears below that counts the total number of tokens in the box. (Note: the counter takes a few seconds to update if you're actively typing.)"),(0,o.kt)("h3",{id:"how-many-tokens-are-in-the-following-words"},"How many tokens are in the following words?"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"apple\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"blueberries\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Skarsg\xe5rd\n")),(0,o.kt)("p",null,'As a common word, "apple" requires only one token. The word "blueberries" requires two tokens: "blue" and "berries". Unless they are very common, proper names generally require multiple tokens. It\'s this token representation that allows AI models to generate words that are not in any dictionary, but without having to generate text on a letter-by-letter basis (which could easily result in gibberish).'),(0,o.kt)("p",null,"The natural language models generate completions one token at a time, but the generated token is not deterministic. At each step, the model outputs a list of all possible tokens with associated weights. The API samples one token from this list, with heavily-weighted tokens more likely to be selected than the others."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Alt Text",src:n(8308).Z,width:"2052",height:"352"})),(0,o.kt)("p",null,'Then it adds that token to the prompt and repeats the process until the "Max length (tokens)" limit is met for the completion, or until the model generates a special token called a "stop token", which prevents further tokens from being generated. (This ',(0,o.kt)("a",{parentName:"p",href:"https://bea.stollnitz.com/blog/how-gpt-works/"},"blog")," by Beatriz Stollnitz explains the process in more detail.)"),(0,o.kt)("p",null,"This is how the model generates completions of one or more words, and why those completions can change from invocation to invocation."),(0,o.kt)("h3",{id:"token-limits"},"Token limits"),(0,o.kt)("p",null,"Every model has a limit on the number of tokens it can process in a single request. For gpt-35-turbo it is 4,096 tokens, and you can see the limits for other models ",(0,o.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/azure/cognitive-services/openai/concepts/models#gpt-3-models-1"},"here"),". Note that this limit applies to the total number of tokens in the prompt and the completion: as we've seen, the completion is added to the prompt before the next token is generated, and both must be contained within the token limit."),(0,o.kt)("p",null,"Newer models like gpt-4-32k have much larger token limits: up to 32,768 tokens. This not only allows for longer completions but also much larger prompts. This is particularly useful for prompt engineering, as we'll see later."),(0,o.kt)("h2",{id:"using-generative-ai"},"Using Generative AI"),(0,o.kt)("p",null,"Most people are familiar with natural language generative AI from applications like ChatGPT, but you can use these models for much more than chatbots. In this section, we'll explore some other useful applications of these models."),(0,o.kt)("h3",{id:"information-extraction"},"Information extraction"),(0,o.kt)("p",null,"The example below shows how you can combine a prompt with data to extract information using natural-language instructions. In this case, the completion extracts the name, company, location, and phone number from an email. Modify the prompt and the source data to extract different information."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Extract the person name, company name, location and phone number from the text below.\n\nHello. My name is Robert Smith. I\u2019m calling from Contoso Insurance, Delaware. My colleague mentioned that you are interested in learning about our comprehensive benefits policy. Could you give me a call back at (555) 346-9322 when you get a chance so we can go over the benefits?\n")),(0,o.kt)("h3",{id:"extract-structured-data-from-text"},"Extract structured data from text"),(0,o.kt)("p",null,"In this example, we provide freeform narrative about fictitious fruits, and prompt the model to generate a table of all the fruits mentioned and their attributes."),(0,o.kt)("p",null,'In this example, we "primed" the model with the desired output format: a header row, and a couple of examples.'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"There are many fruits that were found on the recently discovered planet Goocrux. There are neoskizzles that grow there, which are purple and taste like candy. There are also loheckles, which are a grayish blue fruit and are very tart, a little bit like a lemon. Pounits are a bright green color and are more savory than sweet. There are also plenty of loopnovas which are a neon pink flavor and taste like cotton candy. Finally, there are fruits called glowls, which have a very sour and bitter taste which is acidic and caustic, and a pale orange tinge to them.\n\n\nPlease make a table summarizing the fruits from Goocrux\n| Fruit | Color | Flavor |\n| Neoskizzles | Purple | Sweet |\n| Loheckles | Grayish blue | Tart |\n")),(0,o.kt)("p",null,"Try extending the prompt by appending the following text:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Please also make a JSON array summarizing the fruits from Goocrux:\n")),(0,o.kt)("p",null,"The model will now return a JSON array of the fruit and their attributes."),(0,o.kt)("h3",{id:"classification"},"Classification"),(0,o.kt)("p",null,'In this example, we provide one example of a headline and a category, and ask the model to classify a second example. This is an example of "one-shot learning": with just one example, the model can generalize to classify a new example.'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Classify the following news headline into 1 of the following categories: Business, Tech, Politics, Sport, Entertainment\n\nHeadline 1: Donna Steffensen Is Cooking Up a New Kind of Perfection. The Internet's most beloved cooking guru has a buzzy new book and a fresh new perspective\nCategory: Entertainment\n\nHeadline 2: Major Retailer Announces Plans to Close Over 100 Stores\n\nCategory:\n")),(0,o.kt)("p",null,"Try replacing Headline 2 with other text and regenerating the completion. Does it generate the appropriate category? "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Jets lose, again!\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Obama announces re-election bid\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Microsoft up in after-hours trading\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"20nm process offers more density and better power value\n")),(0,o.kt)("h3",{id:"text-summarization"},"Text summarization"),(0,o.kt)("p",null,'Text summarization is a well known capability of ChatGPT - it creates a short summary of a larger piece of text. Add tl;dr (for "too long; didn\'t read") to gain a summary of the article below. Where can you see this being useful in your business?'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"At Microsoft, we have been on a quest to advance AI beyond existing techniques, by taking a more holistic, human-centric approach to learning and understanding. As Chief Technology Officer of Azure AI Cognitive Services, I have been working with a team of amazing scientists and engineers to turn this quest into a reality. In my role, I enjoy a unique perspective in viewing the relationship among three attributes of human cognition: monolingual text (X), audio or visual sensory signals, (Y) and multilingual (Z). At the intersection of all three, there\u2019s magic\u2014what we call XYZ-code as illustrated in Figure 1\u2014a joint representation to create more powerful AI that can speak, hear, see, and understand humans better. \n\nWe believe XYZ-code will enable us to fulfill our long-term vision: cross-domain transfer learning, spanning modalities and languages. The goal is to have pre-trained models that can jointly learn representations to support a broad range of downstream AI tasks, much in the way humans do today. Over the past five years, we have achieved human performance on benchmarks in conversational speech recognition, machine translation, conversational question answering, machine reading comprehension, and image captioning. These five breakthroughs provided us with strong signals toward our more ambitious aspiration to produce a leap in AI capabilities, achieving multi-sensory and multilingual learning that is closer in line with how humans learn and understand. I believe the joint XYZ-code is a foundational component of this aspiration, if grounded with external knowledge sources in the downstream AI tasks.\n")),(0,o.kt)("h2",{id:"next-steps"},"Next steps"),(0,o.kt)("p",null,"These examples are illustrative as one-off demonstrations, but their real power comes with automation. You can use the Azure OpenAI service to perform similar tasks either on-demand (say, as a customer request form is submitted) or in batch mode (say, to extract data points from a database of unstructured text responses). Lets move on to learn more about Prompt Engineering in the chat interface."))}h.isMDXComponent=!0},4191:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/llm-001-da6e9df83e520a18f43984ad5118b9a7.png"},8308:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/llm-002-392e502091b9423ce85a7a1db1c258d2.png"}}]);