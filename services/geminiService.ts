import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";

let chatSession: Chat | null = null;

const SYSTEM_INSTRUCTION = `
You are "NetMind AI", a specialized career advisor for NetMind IT. 
NetMind IT is a premier technology training provider similar to Fortray, specializing in Cloud Computing, Azure, DevOps, and Full Stack Development.
Our Unique Selling Proposition (USP) is a "Guaranteed Job Program" where graduates are supported until they are hired.

Your goal is to:
1. Help users identify the best career path based on their interests (e.g., "I like coding" -> Full Stack, "I like infrastructure" -> Cloud/Azure).
2. Explain the "Guaranteed Job" program (Training -> Certification -> Live Project Internship -> Job Placement).
3. Be professional, encouraging, and concise.

Course Offerings to recommend:
- Azure Cloud Architect (Infrastructure, Security, Administration)
- DevOps Engineering (CI/CD, Docker, Kubernetes, Jenkins)
- Full Stack Web Development (React, Node.js, TypeScript)
- Cyber Security Analyst (SOC, Pen Testing)
- Data Engineering (Python, SQL, Big Data)

If you don't know the answer, ask the user to contact the admissions team via the form below.
`;

export const initializeChat = (): void => {
  try {
    const apiKey = process.env.API_KEY;
    if (!apiKey) {
      console.warn("API_KEY is missing. Chat features will be disabled.");
      return;
    }

    const ai = new GoogleGenAI({ apiKey });
    chatSession = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
    });
  } catch (error) {
    console.error("Failed to initialize Gemini chat:", error);
  }
};

export const sendMessageToGemini = async function* (message: string): AsyncGenerator<string, void, unknown> {
  if (!chatSession) {
    initializeChat();
    if (!chatSession) {
       yield "I'm sorry, my connection to the server is currently unavailable. Please try contacting our support team directly.";
       return;
    }
  }

  try {
    const result = await chatSession.sendMessageStream({ message });
    
    for await (const chunk of result) {
       const responseChunk = chunk as GenerateContentResponse;
       if (responseChunk.text) {
         yield responseChunk.text;
       }
    }
  } catch (error) {
    console.error("Gemini API Error:", error);
    yield "I encountered a temporary issue processing your request. Please try again in a moment.";
  }
};