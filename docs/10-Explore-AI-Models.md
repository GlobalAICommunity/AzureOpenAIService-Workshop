# Explore AI Models

Before you begin this section, navigate to [setup](Setup) part of the workshop.

## Deployed models available

In this workshop you will be using the `gpt-35-turbo` model, an instance of the OpenAI ChatGPT model.

In this workshop, we will occasionally mention GPT-4, the latest model from OpenAI, but we will not use it.

You can find details about these models and other models available in [Azure OpenAI Service](https://aka.ms/oai/models).

There you will learn that:

- gpt-35-turbo is currently available 10 regions, has a Max Request limit of 4,096 tokens (16k tokens for gpt-35-turbo-16k), and is based on training data up to September 2021.
- gpt-4 is available in 9 regions, has a Max Request limit of 8,192 tokens (or 32,768 tokens for the gpt-4-32k variant), and is based on training data up to September 2021.

## Which model should I use?

There are many considerations when choosing a model, including cost, availability, performance, and capability. But as a general guide, we recommend the following:

- Start with gpt-35-turbo. This model is very economical, has good performance, and despite the "ChatGPT" name can be used for a wide range of tasks beyond chat and conversation.
- If you need to generate more than 4,096 tokens, or need to support larger prompts, you will need to use gpt-35-turbo-16k, gpt-4 or gpt-4-32k. These models are more expensive and can be slower, and have limited availability, but they are the most powerful models available today. *Find out more about tokens later on in this workshop.*
- For tasks like search, clustering, recommendations and anomaly detection consider an embeddings model. An embedding is vector of numbers that can be easily utilized by computers. The embedding is an information dense representation of the semantic meaning of a piece of text. The distance between two embeddings in the vector space is correlated with semantic similarity, for example, if two texts are similar, then their vector representations should also be similar.  search, clustering, recommendations and anomaly detection.
- DALL-E is a model that generates images from text prompts that the user provides. Unlike the models about the output is different, image not text like chat.
- Finally, Whisper can be used for speech to text capabilities, often used to transcribe audio files. The model is trained on a large dataset of English audio and text. The model is optimized for transcribing audio files that contain speech in English. The model can also be used to transcribe audio files that contain speech in other languages. The output of the model is English text. Best for quickly transcribing audio files one at a time, translate audio from other languages into English or providing a prompt to the model to guide the output.
