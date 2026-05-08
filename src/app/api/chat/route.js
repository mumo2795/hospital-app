export async function POST(request) {
  try {
    const body = await request.json();
    const webhookUrl = process.env.NEXT_PUBLIC_N8N_WEBHOOK_URL;

    if (!webhookUrl) {
      return Response.json(
        { error: "Webhook URL not configured" },
        { status: 500 }
      );
    }

    console.log("Received request body:", body);

    const payload = {
      chatInput: body.chatInput || body.message || "",
      sessionId: body.sessionId || "",
      action: body.action || "sendMessage",
    };

    console.log("Sending to n8n:", payload);

    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const data = await response.json();
    console.log("n8n Response:", data);

    return Response.json(data, { status: response.status });
  } catch (error) {
    console.error("Chat API error:", error);
    return Response.json(
      { error: "Failed to process chat request", details: String(error) },
      { status: 500 }
    );
  }
}

export async function GET() {
  return Response.json({ message: "Chat API is running" });
}
