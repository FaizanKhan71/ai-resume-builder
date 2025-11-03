import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = import.meta.env.VITE_GOOGLE_AI_API_KEY;

class AIService {
  constructor() {
    this.genAI = null;
    this.model = null;
    this.init();
  }

  init() {
    if (!apiKey) {
      console.warn('Google AI API Key not found');
      return;
    }

    try {
      this.genAI = new GoogleGenerativeAI(apiKey);
      this.model = this.genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    } catch (error) {
      console.error('Failed to initialize AI:', error);
    }
  }

  async sendMessage(prompt) {
    if (!this.model) {
      throw new Error('AI model not initialized');
    }

    try {
      const result = await this.model.generateContent(prompt);
      return {
        response: {
          text: () => result.response.text()
        }
      };
    } catch (error) {
      console.error('AI Generation Error:', error);
      throw error;
    }
  }
}

const AIChatSession = new AIService();
export { AIChatSession };