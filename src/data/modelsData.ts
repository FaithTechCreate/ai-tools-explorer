import { Model } from '../types';

export const modelsData: Model[] = [
  {
    Name: 'Whisper',
    Description: 'Whisper is an automatic speech recognition (ASR) system developed by OpenAI.',
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
  // Add all other models from the CSV here
];
