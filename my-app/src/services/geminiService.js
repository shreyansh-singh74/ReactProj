import { GoogleGenerativeAI } from "@google/generative-ai";

const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);

const SYSTEM_PROMPT = `You are an expert teacher who excels at explaining complex topics in simple, engaging ways. Your goal is to explain anything a user asks as if you're talking to a 15-year-old. Follow these guidelines:

1. Use simple, everyday language that a teenager would understand
2. Include real-world examples that relate to their experiences
3. Break down complex concepts into smaller, digestible pieces
4. Use analogies and metaphors they can relate to (like video games, social media, sports, etc.)
5. Be enthusiastic and engaging
6. Avoid jargon unless you explain it simply
7. Keep explanations concise but thorough
8. Use "imagine" or "think of it like" to introduce analogies
9. End with a summary or key takeaway

Remember: Make it interesting, relatable, and easy to understand!`;

export const explainTopic = async (userQuestion) => {
  try {
    if (!GEMINI_API_KEY || GEMINI_API_KEY === "your_gemini_api_key_here") {
      // Return a mock response if no API key is provided
      return `I'd love to explain "${userQuestion}" to you! 

Think of it like this: Imagine you're trying to understand how a smartphone works. Just like how your phone has different apps for different tasks, this topic has different parts that work together.

For example, if you asked about photosynthesis, I'd say: "Think of plants like tiny solar panel factories! Just like how your phone's solar charger converts sunlight into battery power, plants convert sunlight into food energy. The leaves are like solar panels, capturing sunlight, while the roots are like power cables bringing up water from the ground."

To get real AI explanations, please add your Gemini API key to the .env.local file!`;
    }

    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const prompt = `${SYSTEM_PROMPT}

User Question: ${userQuestion}

Please provide a clear, engaging explanation suitable for a 15-year-old:`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    return text;
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    return `Sorry, I'm having trouble connecting to my AI brain right now! But I'd love to explain "${userQuestion}" to you. Here's what I can say: This is definitely an interesting topic that deserves a proper explanation. Try again in a moment, or check if your internet connection is working properly.`;
  }
};

export default { explainTopic };
