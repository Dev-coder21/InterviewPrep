
"use server"
const { GoogleGenAI } = require("@google/genai");

const apiKey = process.env.GEMINI_API_KEY;
const ai = new GoogleGenAI({ apiKey: apiKey });

export async function sendMessage(input) {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash", // Note: gemini-3.5-flash does not exist yet!
      contents: input,
      config: {
        responseMimeType: "application/json",
      }
    });

    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw error;
  }
}