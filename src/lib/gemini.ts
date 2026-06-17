import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

export async function generateStudyBuddyReply(message: string) {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: message,
    config: {
      systemInstruction:
        "You are Study Buddy, a friendly educational assistant. Explain topics clearly and simply. Keep answers concise, helpful, and beginner-friendly.",
    },
  });

  return response.text;
}
