import { GoogleGenAI } from "@google/genai";
import { 
  MY_PROFILE, 
  SOFTWARE_PROJECTS,
  HARDWARE_PROJECTS,
  EXPERIENCE, 
  EDUCATION, 
  CERTIFICATIONS, 
  SKILLS, 
  CONTACT 
} from "../constants";

let aiClient: GoogleGenAI | null = null;

const getClient = () => {
  if (!aiClient) {
    aiClient = new GoogleGenAI({ apiKey: process.env.API_KEY });
  }
  return aiClient;
};

// Prepare a context string about the portfolio owner
const PORTFOLIO_CONTEXT = `
You are an intelligent assistant for a Senior Software Engineer's portfolio website.
The website is styled like Netflix ("Netfolio").

Here is the data about the engineer:

Profile / About:
${JSON.stringify(MY_PROFILE)}

Work Experience:
${JSON.stringify(EXPERIENCE)}

Software Projects (Including Automation Tools):
${JSON.stringify(SOFTWARE_PROJECTS)}

Hardware Projects:
${JSON.stringify(HARDWARE_PROJECTS)}

Education:
${JSON.stringify(EDUCATION)}

Certifications:
${JSON.stringify(CERTIFICATIONS)}

Technical Skills:
${JSON.stringify(SKILLS)}

Contact Info:
${JSON.stringify(CONTACT)}

Your goal is to answer visitor questions about the engineer's experience, skills, and projects.
Be witty, professional, and concise. If asked about "Netfolio", explain it's a creative portfolio concept.
`;

export const askGemini = async (query: string): Promise<string> => {
  try {
    const client = getClient();
    const response = await client.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: query,
      config: {
        systemInstruction: PORTFOLIO_CONTEXT,
      }
    });
    
    return response.text || "I'm having trouble retrieving that information right now.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm currently offline (API Key missing or invalid). Please try again later.";
  }
};