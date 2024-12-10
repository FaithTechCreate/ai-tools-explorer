import { Model } from '../types';

export const modelsData: Model[] = [
  {
    Name: 'Whisper',
    Description:
      'Whisper is an automatic speech recognition (ASR) system developed by OpenAI, capable of transcribing and translating audio from multiple languages.',
    Link: 'https://huggingface.co/openai/whisper-large-v2',
    Type: 'Automatic Speech Recognition',
    Usage: 'Transcribing audio to text',
    License: 'Open Source',
  },
  {
    Name: 'BERT',
    Description:
      'BERT (Bidirectional Encoder Representations from Transformers) is a transformer-based model developed by Google for natural language understanding tasks.',
    Link: 'https://huggingface.co/bert-base-uncased',
    Type: 'Natural Language Processing',
    Usage: 'Language understanding, sentiment analysis, question answering',
    License: 'Open Source',
  },
  {
    Name: 'Sentence Transformers',
    Description:
      'Sentence Transformers are models that convert sentences into dense vector representations, enabling tasks like semantic search and clustering.',
    Link: 'https://sbert.net/',
    Type: 'Natural Language Processing',
    Usage: 'Compute embeddings, semantic search, sentence similarity comparison',
    License: 'Open Source',
  },
  {
    Name: 'FLUX.1 [schnell]',
    Description:
      'FLUX.1 [schnell] is a variant of the FLUX.1 model optimized for faster image generation with slightly reduced quality.',
    Link: 'https://github.com/black-forest-labs/flux',
    Type: 'Text-to-Image, Image-to-Image Generation',
    Usage: 'Creating images from text descriptions or images',
    License: 'Open Source',
  },
  {
    Name: 'FLUX.1 [dev]',
    Description:
      'FLUX.1 [dev] is a development version of the FLUX.1 model, offering a balance between speed and image quality.',
    Link: 'https://github.com/black-forest-labs/flux',
    Type: 'Text-to-Image, Image-to-Image Generation',
    Usage: 'Creating images from text descriptions or images',
    License: 'Open-ish',
  },
  {
    Name: 'Stable Diffusion 3.5',
    Description:
      'Stable Diffusion is a deep learning model developed by Stability AI for generating detailed images based on text descriptions.',
    Link: 'https://stability.ai/stable-image',
    Type: 'Text-to-Image Generation',
    Usage: 'Creating images from text descriptions',
    License: 'Open-ish',
  },
  {
    Name: 'DALL-E 3',
    Description:
      "DALL-E 3 is OpenAI's latest text-to-image generation model, capable of creating highly detailed and accurate images from textual prompts.",
    Link: 'https://openai.com/dall-e-3',
    Type: 'Text-to-Image Generation',
    Usage: 'Creating images from text descriptions',
    License: 'Proprietary',
  },
  {
    Name: 'Midjourney',
    Description:
      'Midjourney is an independent research lab that produces an AI program of the same name, generating images from textual descriptions.',
    Link: 'https://www.midjourney.com/',
    Type: 'Text-to-Image Generation',
    Usage: 'Creating images from text descriptions',
    License: 'Proprietary',
  },
  {
    Name: 'FLUX.1.1 Pro',
    Description:
      'FLUX.1.1 Pro is an advanced version of the FLUX.1 model, offering enhanced image generation capabilities for professional use.',
    Link: 'https://docs.bfl.ml/',
    Type: 'Text-to-Image Generation',
    Usage: 'Creating images from text descriptions',
    License: 'Proprietary',
  },
  {
    Name: 'Genmo Mochi 1',
    Description:
      'Genmo Mochi 1 is a generative model designed for creating high-quality images and animations from textual inputs.',
    Link: 'https://www.genmo.ai/play',
    Type: 'Text-to-Video Generation',
    Usage: 'Creating videos from text descriptions',
    License: 'Open Source',
  },
  {
    Name: 'Google Gemma 2',
    Description:
      'Google Gemma is a language model developed by Google, focusing on natural language understanding and generation tasks.',
    Link: 'https://ai.google.dev/gemma/docs',
    Type: 'Large Language Model',
    Usage: 'Text generation, instruction following',
    License: 'Open Source',
  },
  {
    Name: 'Microsoft Phi 3',
    Description:
      'Microsoft Phi is a large-scale AI model developed by Microsoft, aimed at advancing natural language processing and understanding.',
    Link: 'https://huggingface.co/microsoft/Phi-3-mini-128k-instruct',
    Type: 'Large Language Model',
    Usage: 'Text generation, language understanding',
    License: 'Open Source',
  },
  {
    Name: 'IBM Granite 3.0',
    Description:
      "IBM Granite 3.0 is IBM's AI model designed for enterprise applications, offering capabilities in natural language understanding and data analysis.",
    Link: 'https://huggingface.co/ibm-granite',
    Type: 'Large Language Model',
    Usage: 'Text generation, language understanding, code generation',
    License: 'Open Source',
  },
  {
    Name: 'Alibaba Cloud Qwen 2.5',
    Description:
      "Qwen 2.5 is Alibaba Cloud's large-scale language model, designed for various AI applications including natural language processing and understanding.",
    Link: 'https://github.com/QwenLM/Qwen',
    Type: 'Large Language Model',
    Usage: 'Text generation, language understanding',
    License: 'Open Source',
  },
  {
    Name: 'Meta LLaMa 3.2',
    Description:
      "LLaMa 3.2 is Meta's previous open-source large language model, offering advanced capabilities in natural language understanding and generation.",
    Link: 'https://huggingface.co/collections/meta-llama/llama-32-66f448ffc8c32f949b04c8cf',
    Type: 'Large Language Model',
    Usage: 'Text generation, language understanding, code generation',
    License: 'Open-ish',
  },
  {
    Name: 'Meta LLaMa 3.1',
    Description:
      "LLaMa 3.1 is an earlier version of Meta's open-source large language model, providing robust natural language processing capabilities.",
    Link: 'https://huggingface.co/collections/meta-llama/llama-31-669fc079a0c406a149a5738f',
    Type: 'Large Language Model',
    Usage: 'Text generation, language understanding, code generation',
    License: 'Open-ish',
  },
  {
    Name: 'Nvidia LLaMa 3.1 Nemotron 70B Instruct',
    Description:
      "Nemotron 70B Instruct is Nvidia's large-scale language model, optimized for instruction-following tasks and natural language understanding.",
    Link: 'https://huggingface.co/nvidia/Llama-3.1-Nemotron-70B-Instruct',
    Type: 'Large Language Model',
    Usage: 'Text generation, language understanding, code generation',
    License: 'Open-ish',
  },
  {
    Name: 'Mistral',
    Description:
      'Mistral is a language model designed for efficient and scalable natural language processing tasks.',
    Link: 'https://mistral.ai/technology/',
    Type: 'Large Language Model',
    Usage: 'Text generation, language understanding',
    License: 'Open-ish',
  },
  {
    Name: 'Pixtral 12B',
    Description: 'A 12B model with image understanding capabilities in addition to text.',
    Link: 'https://mistral.ai/news/pixtral-12b/',
    Type: 'Large Language Model',
    Usage: 'Text generation, language understanding',
    License: 'Open Source',
  },
  {
    Name: 'Codestral',
    Description: 'Language model for coding',
    Link: 'https://huggingface.co/mistralai/Codestral-22B-v0.1',
    Type: 'Large Language Model',
    Usage: 'Text generation, language understanding',
    License: 'Open-ish',
  },
  {
    Name: 'Falcon',
    Description:
      'Falcon is a state-of-the-art language model developed for advanced natural language understanding and generation.',
    Link: 'https://huggingface.co/tiiuae/falcon-40b',
    Type: 'Large Language Model',
    Usage: 'Text generation, language tasks',
    License: 'Open-ish',
  },
  {
    Name: 'Pythia',
    Description:
      'Pythia is a suite of large language models developed for research in natural language processing.',
    Link: 'https://huggingface.co/EleutherAI/pythia-12b',
    Type: 'Large Language Model',
    Usage: 'Text generation, language tasks',
    License: 'Open-ish',
  },
  {
    Name: 'OpenAI GPT-4o',
    Description:
      "GPT-4o is OpenAI's cost-efficient small AI model, designed to make AI technology more affordable and less energy-intensive.",
    Link: 'https://platform.openai.com/docs/models#gpt-4o',
    Type: 'Large Language Model',
    Usage: 'Text generation, language understanding, code generation',
    License: 'Proprietary',
  },
  {
    Name: 'Claude Sonnet 3.5',
    Description:
      "Claude Sonnet 3.5 is Anthropic's advanced AI model, offering enhanced natural language understanding and generation capabilities.",
    Link: 'https://www.anthropic.com/claude/sonnet',
    Type: 'Large Language Model',
    Usage: 'Text generation, language understanding, code generation',
    License: 'Proprietary',
  },
  {
    Name: 'Google Gemini',
    Description:
      "Google Gemini is Google's generative AI model, designed to compete with OpenAI's ChatGPT, offering enhanced speed and quality.",
    Link: 'https://ai.google.dev/gemini-api/docs/models/gemini',
    Type: 'Large Language Model',
    Usage: 'Text generation, language understanding, code generation',
    License: 'Proprietary',
  },
  {
    Name: 'Amazon Nova Pro',
    Description:
      'Amazon Nova Pro is a highly capable multimodal model with the best combination of accuracy, speed, and cost for a wide range of tasks.  It is part of the Amazon Nova series of state-of-the-art foundation available exclusively on Amazon Bedrock.',
    Link: 'https://aws.amazon.com/ai/generative-ai/nova/',
    Type: 'Large Language Model',
    Usage: 'Text generation, language understanding, code generation',
    License: 'Proprietary',
  },
  {
    Name: 'DeepSeek v2.5',
    Description: 'A strong, economical, and efficient mixture-of-experts language model.',
    Link: 'https://huggingface.co/deepseek-ai/DeepSeek-V2.5',
    Type: 'Large Language Model',
    Usage: 'Text generation, language understanding, code generation',
    License: 'Open-ish',
  },
  {
    Name: 'OpenAI o1',
    Description: 'o1 is a reasoning model for solving hard problems.',
    Link: 'https://openai.com/o1/',
    Type: 'Large Language Model',
    Usage: 'Text generation, language understanding, code generation',
    License: 'Proprietary',
  },
  {
    Name: 'Meta LLaMa 3.3',
    Description:
      'LLaMa 3.3 is a pretrained and instruction tuned generative model in 70B (text in/text out). It delivers similar performance to LLaMa 3.1 405B with cost effective inference.',
    Link: 'https://huggingface.co/collections/meta-llama/llama-33-67531d5c405ec5d08a852000',
    Type: 'Large Language Model',
    Usage: 'Text generation, language understanding, code generation',
    License: 'Open-ish',
  },
  {
    Name: 'Tencent HunyuanVideo',
    Description:
      'HunyuanVideo is a novel open-source video foundation model that exhibits performance in video generation that is comparable to, if not superior to, leading closed-source models.',
    Link: 'https://huggingface.co/tencent/HunyuanVideo',
    Type: 'Text-to-Video Generation',
    Usage: 'Creating videos from text descriptions',
    License: 'Open-ish',
  },
];
