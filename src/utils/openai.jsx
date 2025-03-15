import OpenAI from 'openai';
import { deepseek_API_KEY } from './constant';

const openai = new OpenAI({
  baseURL: 'https://openrouter.ai/api/v1',
  apiKey: deepseek_API_KEY,
  dangerouslyAllowBrowser: true,
});
export default openai;
