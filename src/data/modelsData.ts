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
    Type: 'Language Model',
    Usage: 'Text generation, instruction following',
    License: 'Open Source',
  },
  {
    Name: 'Microsoft Phi-3',
    Description:
      'Microsoft Phi is a large-scale AI model developed by Microsoft, aimed at advancing natural language processing and understanding.',
    Link: 'https://huggingface.co/microsoft/Phi-3-mini-128k-instruct',
    Type: 'Language Model',
    Usage: 'Text generation, language understanding',
    License: 'Open Source',
  },
  {
    Name: 'IBM Granite 3.0',
    Description:
      "IBM Granite 3.0 is IBM's AI model designed for enterprise applications, offering capabilities in natural language understanding and data analysis.",
    Link: 'https://huggingface.co/ibm-granite',
    Type: 'Language Model',
    Usage: 'Text generation, language understanding, code generation',
    License: 'Open Source',
  },
  {
    Name: 'Alibaba Cloud Qwen 2.5',
    Description:
      "Qwen 2.5 is Alibaba Cloud's large-scale language model, designed for various AI applications including natural language processing and understanding.",
    Link: 'https://github.com/QwenLM/Qwen',
    Type: 'Language Model',
    Usage: 'Text generation, language understanding',
    License: 'Open Source',
  },
  {
    Name: 'Meta LLaMa 3.2',
    Description:
      "LLaMa 3.2 is Meta's previous open-source large language model, offering advanced capabilities in natural language understanding and generation.",
    Link: 'https://huggingface.co/collections/meta-llama/llama-32-66f448ffc8c32f949b04c8cf',
    Type: 'Language Model',
    Usage: 'Text generation, language understanding, code generation',
    License: 'Open-ish',
  },
  {
    Name: 'Meta LLaMa 3.1',
    Description:
      "LLaMa 3.1 is an earlier version of Meta's open-source large language model, providing robust natural language processing capabilities.",
    Link: 'https://huggingface.co/collections/meta-llama/llama-31-669fc079a0c406a149a5738f',
    Type: 'Language Model',
    Usage: 'Text generation, language understanding, code generation',
    License: 'Open-ish',
  },
  {
    Name: 'Nvidia LLaMa 3.1 Nemotron 70B Instruct',
    Description:
      "Nemotron 70B Instruct is Nvidia's large-scale language model, optimized for instruction-following tasks and natural language understanding.",
    Link: 'https://huggingface.co/nvidia/Llama-3.1-Nemotron-70B-Instruct',
    Type: 'Language Model',
    Usage: 'Text generation, language understanding, code generation',
    License: 'Open-ish',
  },
  {
    Name: 'Mistral',
    Description:
      'Mistral is a language model designed for efficient and scalable natural language processing tasks.',
    Link: 'https://mistral.ai/technology/',
    Type: 'Language Model',
    Usage: 'Text generation, language understanding',
    License: 'Open-ish',
  },
  {
    Name: 'Pixtral 12B',
    Description: 'A 12B model with image understanding capabilities in addition to text.',
    Link: 'https://mistral.ai/news/pixtral-12b/',
    Type: 'Language Model',
    Usage: 'Text generation, language understanding',
    License: 'Open Source',
  },
  {
    Name: 'Codestral',
    Description: 'Language model for coding',
    Link: 'https://huggingface.co/mistralai/Codestral-22B-v0.1',
    Type: 'Language Model',
    Usage: 'Text generation, language understanding',
    License: 'Open-ish',
  },
  {
    Name: 'Falcon',
    Description:
      'Falcon is a state-of-the-art language model developed for advanced natural language understanding and generation.',
    Link: 'https://huggingface.co/tiiuae/falcon-40b',
    Type: 'Language Model',
    Usage: 'Text generation, language tasks',
    License: 'Open-ish',
  },
  {
    Name: 'Pythia',
    Description:
      'Pythia is a suite of large language models developed for research in natural language processing.',
    Link: 'https://huggingface.co/EleutherAI/pythia-12b',
    Type: 'Language Model',
    Usage: 'Text generation, language tasks',
    License: 'Open-ish',
  },
  {
    Name: 'OpenAI GPT-4o',
    Description:
      "GPT-4o is OpenAI's cost-efficient small AI model, designed to make AI technology more affordable and less energy-intensive.",
    Link: 'https://platform.openai.com/docs/models#gpt-4o',
    Type: 'Language Model',
    Usage: 'Text generation, language understanding, code generation',
    License: 'Proprietary',
  },
  {
    Name: 'Claude Sonnet 3.5',
    Description:
      "Claude Sonnet 3.5 is Anthropic's advanced AI model, offering enhanced natural language understanding and generation capabilities.",
    Link: 'https://www.anthropic.com/claude/sonnet',
    Type: 'Language Model',
    Usage: 'Text generation, language understanding, code generation',
    License: 'Proprietary',
  },
  {
    Name: 'Google Gemini 1.5 Pro',
    Description:
      "Google's generative AI model, designed to compete with OpenAI's ChatGPT, offering enhanced speed and quality.",
    Link: 'https://ai.google.dev/gemini-api/docs/models/gemini#gemini-1.5-pro',
    Type: 'Language Model',
    Usage: 'Text generation, language understanding, code generation',
    License: 'Proprietary',
  },
  {
    Name: 'Amazon Nova Pro',
    Description:
      'Amazon Nova Pro is a highly capable multimodal model with the best combination of accuracy, speed, and cost for a wide range of tasks.  It is part of the Amazon Nova series of state-of-the-art foundation available exclusively on Amazon Bedrock.',
    Link: 'https://aws.amazon.com/ai/generative-ai/nova/',
    Type: 'Language Model',
    Usage: 'Text generation, language understanding, code generation',
    License: 'Proprietary',
  },
  {
    Name: 'DeepSeek v2.5',
    Description: 'A strong, economical, and efficient mixture-of-experts language model.',
    Link: 'https://huggingface.co/deepseek-ai/DeepSeek-V2.5',
    Type: 'Language Model',
    Usage: 'Text generation, language understanding, code generation',
    License: 'Open-ish',
  },
  {
    Name: 'OpenAI o1',
    Description: 'o1 is a reasoning model for solving hard problems.',
    Link: 'https://openai.com/o1/',
    Type: 'Language Model',
    Usage: 'Text generation, language understanding, code generation',
    License: 'Proprietary',
  },
  {
    Name: 'Meta LLaMa 3.3',
    Description:
      'LLaMa 3.3 is a pretrained and instruction tuned generative model in 70B (text in/text out). It delivers similar performance to LLaMa 3.1 405B with cost effective inference.',
    Link: 'https://huggingface.co/collections/meta-llama/llama-33-67531d5c405ec5d08a852000',
    Type: 'Language Model',
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
  {
    Name: 'OpenAI Sora Turbo',
    Description: 'Sora creates realistic videos from text.',
    Link: 'https://sora.com/',
    Type: 'Text-to-Video Generation',
    Usage: 'Creating videos from text descriptions',
    License: 'Proprietary',
  },
  {
    Name: 'Google Gemini 2.0 Flash',
    Description:
      'An advanced multimodal model built for the agentic era. Supports multimodal inputs and native audio, image output.',
    Link: 'https://ai.google.dev/gemini-api/docs/models/gemini#gemini-2.0-flash',
    Type: 'Language Model',
    Usage: 'Text generation, language understanding, code generation',
    License: 'Proprietary',
  },
  {
    Name: 'Moondream',
    Description:
      'Moondream provides tiny open-source vision-language models that bring powerful image understanding.',
    Link: 'https://moondream.ai/',
    Type: 'Vision-Language Model',
    Usage: 'Image analysis, object detection, visual reasoning',
    License: 'Open Source',
  },
  {
    Name: 'OlMo 2',
    Description:
      'OLMo 2 is a family of fully-open language models, developed start-to-finish with open and accessible training data, open-source training code, reproducible training recipes, transparent evaluations, intermediate checkpoints, and more.',
    Link: 'https://allenai.org/olmo',
    Type: 'Language Model',
    Usage: 'Text generation, language understanding',
    License: 'Open Source',
  },
  {
    Name: 'Imagen 3',
    Description:
      "Google's advanced text-to-image AI model featuring improved image generation quality, better text rendering, reduced artifacts, and enterprise customization capabilities for brand-specific image creation.",
    Link: 'https://deepmind.google/technologies/imagen-3/',
    Type: 'Text-to-Image Generation',
    Usage: 'Creating images from text descriptions, image editing',
    License: 'Proprietary',
  },
  {
    Name: 'DeepSeek V3',
    Description:
      'A powerful Mixture-of-Experts (MoE) language model featuring 671B total parameters with 37B activated per token, delivering high performance while maintaining efficiency through selective neural network activation.',
    Link: 'https://huggingface.co/deepseek-ai/deepseek-v3-base',
    Type: 'Language Model',
    Usage: 'Text generation, language understanding, code generation, reasoning tasks',
    License: 'Open-ish',
  },
  {
    Name: 'MiniMax-Text-01',
    Description:
      'A Mixture-of-Experts language model that features a hybrid architecture combining Lightning Attention and Softmax Attention, with context handling up to 4 million tokens and performance comparable to GPT-4o.',
    Link: 'https://huggingface.co/MiniMaxAI/MiniMax-Text-01',
    Type: 'Language Model',
    Usage: 'Text generation, language understanding, code generation',
    License: 'Open-ish',
  },
  {
    Name: 'MiniMax-VL-01',
    Description:
      'A multimodal vision-language model that combines visual and language understanding. Features advanced capabilities in visual question answering, image captioning, and text-to-image search, with optimized visual consistency and seamless transitions between visual states.',
    Link: 'https://huggingface.co/MiniMaxAI/MiniMax-VL-01',
    Type: 'Vision-Language Model',
    Usage: 'Visual question answering, image captioning, visual understanding, multimodal tasks',
    License: 'Open-ish',
  },
  {
    Name: 'Cosmos World Foundation Models',
    Description:
      "NVIDIA's platform of state-of-the-art generative world foundation models that can predict and generate physics-aware videos of future states in virtual environments.",
    Link: 'https://developer.nvidia.com/cosmos',
    Type: 'World Foundation Model',
    Usage:
      'Physical AI simulation, robotics development, autonomous vehicle training, physics-aware video generation',
    License: 'Open-ish',
  },
  {
    Name: 'VEO 2',
    Description:
      "Google DeepMind's advanced video generation model creating high-quality clips at up to 4K resolution.",
    Link: 'https://deepmind.google/technologies/veo/veo-2/',
    Type: 'Text-to-Video Generation',
    Usage: 'Creating videos from text descriptions, cinematic content generation',
    License: 'Proprietary',
  },
  {
    Name: 'Microsoft Phi-4',
    Description:
      'A 14 billion parameter language model specializing in complex reasoning tasks. Features enhanced multi-lingual support, long-context handling up to 4,000 tokens, and advanced capabilities in STEM problem-solving. Trained primarily on synthetic data with architecture similar to Phi-3-medium.',
    Link: 'https://huggingface.co/microsoft/phi-4',
    Type: 'Language Model',
    Usage: 'Text generation, complex reasoning, language understanding, code generation',
    License: 'Open Source',
  },
  {
    Name: 'DeepSeek-R1',
    Description:
      'DeepSeek-R1 is a reasoning-focused language model, designed to excel at complex problem-solving tasks. It implements run-time reasoning similar to OpenAI o1 and stands out for its transparent decision-making process, particularly in mathematics, science, and coding challenges.',
    Link: 'https://github.com/deepseek-ai/DeepSeek-R1',
    Type: 'Language Model',
    Usage:
      'Complex reasoning tasks, mathematical problem solving, code generation, step-by-step analysis',
    License: 'Open Source',
  },
];
