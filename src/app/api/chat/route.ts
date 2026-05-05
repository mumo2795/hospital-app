import { NextRequest, NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";
import axios from "axios";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");

// System prompt for Sarah the nurse assistant
const SYSTEM_PROMPT = `You are Sarah, a professional and friendly medical assistant for Hospital Tengku Ampuan Rahimah. 
You provide helpful information about hospital services, appointment scheduling, medical questions, and general healthcare guidance.

Key characteristics:
- Professional yet approachable tone
- Multilingual capable (respond in the language the user uses)
- Knowledgeable about hospital services
- Always recommend users contact the hospital directly for urgent medical issues
- Provide clear, concise answers
- Professional and empathetic

Hospital Details:
- Name: Hospital Tengku Ampuan Rahimah
- Phone: Contact hospital directly
- Services: General healthcare, specialist consultations, diagnostics, emergency services
- Always maintain patient privacy and confidentiality

When users ask about:
- Appointments: Offer to help them schedule or direct to the hospital
- Medical emergencies: Strongly advise calling emergency services
- Specific medical advice: Recommend consulting with doctors
- Hospital information: Provide available details`;

interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

async function triggerN8NWorkflow(
  userMessage: string,
  assistantResponse: string
): Promise<void> {
  // This function triggers N8N workflow if enabled
  if (process.env.N8N_ENABLED === "true" && process.env.N8N_WEBHOOK_URL) {
    try {
      await axios.post(
        process.env.N8N_WEBHOOK_URL,
        {
          userMessage,
          assistantResponse,
          timestamp: new Date().toISOString(),
          hospital: process.env.NEXT_PUBLIC_HOSPITAL_NAME,
        },
        {
          timeout: 5000,
        }
      );
    } catch (error) {
      console.error("N8N webhook error:", error);
      // Don't fail the chat if N8N fails
    }
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { message, conversationHistory = [] } = body;

    if (!message || typeof message !== "string") {
      return NextResponse.json(
        { error: "Invalid message format" },
        { status: 400 }
      );
    }

    // Check if API key exists
    if (!process.env.GEMINI_API_KEY) {
      console.error("GEMINI_API_KEY is not set!");
      return NextResponse.json(
        {
          error: "API Key not configured",
          message: "GEMINI_API_KEY environment variable is missing",
        },
        { status: 500 }
      );
    }

    // Format conversation history for Gemini
    const history = conversationHistory.map((msg: ChatMessage) => ({
      role: msg.role === "assistant" ? "model" : "user",
      parts: [{ text: msg.content }],
    }));

    // Initialize Gemini model with correct name
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash-exp" });

    // Start chat session with history
    const chat = model.startChat({
      history: history,
      generationConfig: {
        maxOutputTokens: 1024,
      },
    });

    // Send message and get response
    const result = await chat.sendMessage(message);
    const assistantMessage = result.response.text();

    // Trigger N8N workflow asynchronously (don't wait for it)
    triggerN8NWorkflow(message, assistantMessage).catch(console.error);

    return NextResponse.json({
      response: assistantMessage,
      model: "gemini-2.0-flash-exp",
      usage: {
        input_tokens: 0,
        output_tokens: 0,
      },
    });
  } catch (error) {
    console.error("Chat API error:", error);

    return NextResponse.json(
      {
        error: "Internal server error",
        message:
          error instanceof Error
            ? error.message
            : "An unknown error occurred",
        details: error,
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({
    message: "Chat API is running",
    hospital: process.env.NEXT_PUBLIC_HOSPITAL_NAME,
    chatbotName: process.env.NEXT_PUBLIC_CHATBOT_NAME,
  });
}
