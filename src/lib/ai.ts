import { GoogleGenAI } from "@google/genai";

// Initialize Gemini (API key is injected by AI Studio)
// We use optional chaining/fallback to prevent crashes if the key isn't set yet
const apiKey = process.env.GEMINI_API_KEY || 'mock_key';
const aiClient = new GoogleGenAI({ apiKey });

export const EXPENSE_SCAN_PROMPT = `You are BizShield AI. Extract amount, category, date, merchant from this receipt image. Return valid JSON only.`;

export const ai = {
  generateRiskReport: async (data: any) => {
    return {
      score: 85,
      summary: "Overall risk is low. Compliance is up to date, but 2 unreviewed AI tools were detected.",
      recommendations: ["Review Grammarly usage", "Update employee handbook"],
    };
  },
  scanExpense: async (receiptImageBase64: string, mimeType: string) => {
    try {
      if (apiKey === 'mock_key') throw new Error("No API key");
      
      const response = await aiClient.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: [
          { text: EXPENSE_SCAN_PROMPT },
          { inlineData: { data: receiptImageBase64, mimeType } }
        ],
        config: {
          responseMimeType: "application/json",
        }
      });
      return JSON.parse(response.text || "{}");
    } catch (e) {
      console.log("Using mock expense scan result...");
      return {
        amount: 120.50,
        category: "Software",
        merchant: "Adobe Systems",
        date: new Date().toISOString().split('T')[0],
        flagged: false,
      };
    }
  }
};
