# Multimodal 

By now we have interacted with LLMs using a single modality: inputting text and receiving either text or images. However, multimodal interfaces are becoming increasingly popular, as they allow users to interact with models using multiple modalities, such as text, images, and speech, thus facilitating human-computer interactions. In this section, we will explore how to use multimodal interfaces to interact with GPT-4o.


:::tip 
**GPT-4o** is a multimodal model that incorporates both natural language processing and visual understanding. It is able to process as input a combination of text and images, and generate an output which is relevant to both modalities.
:::

## Best Practices

- **Contextual specificity**: Adding context to the scenario at hand gives the model a better understanding of an appropriate output. This level of specificity aids in focusing on relevant aspects and avoiding extraneous details.​

- **Task-oriented prompts**: Focusing on a specific task helps the model to develop the output while taking that perspective into consideration.​

- **Define output format**: Clearly mention the desired format for the output, such as markdown, JSON, HTML, etc. You can also suggest a specific structure, length, or specific attributes about the response.​

- **Handling refusals**: When the model indicates an inability to perform a task, refining the prompt can be an effective solution. More specific prompts can guide the model towards a clearer understanding and better execution of the task. Some tips to keep in mind:​
    - Request explanations for generated responses to enhance transparency in the model's output​
    - If using a single-image prompt, place the image before the text​
    - Ask the model to describe the image in detail first and complete your specific task from the description​

- **Prompt Tuning**: Try prompt tuning techniques that we explored for text generation scenarios such as:​
    - Breaking down requests (e.g. chain of thoughts)​
    - Adding examples (e.g. few-shot learning)​

## Excerise 1

1. In Project playground section select **Chat.** 
2. In the chat text box, click on the attachment icon to upload a local image.

3. [Download the image](../images/mm_1_Rental_Listing_s.jpg)

4. Once you have uploaded the file, try these prompts to start interacting with the image:


```text title="Enter in the user prompt:"
What is on the image?
```

```text title="Enter in the user prompt:"
What is the house made of?
```

```text title="Enter in the user prompt:"
Does the house have a swimming pool?
```

## Excerise 2

1. [Download the image](../images/mm_2_TriangleCalculation_s.jpg)

```text title="Enter in the user prompt:"
Answer the questions on the image.
```

## Excerise 3

1. [Download the images](../images/mm_3.zip)

```text title="Enter in the user prompt:"
    Create a tagline and short description for this rental home advertisement.
    - The first picture is from the home
    - The other pictures are from sights nearby
    - In the description use the features of the house and make the ad more compelling with the sights. 
    - Do not talk about features not visible in the images.
    - If you have information about the location of the images, use that information in the description
```


## Next Steps

Congratulations! You have now completed the 3rd part of the lab and you learnt how to interact with multimodal models. 

