"use client";

import { useEffect } from "react";

// Extend window interface for N8N chat
declare global {
  interface Window {
    createChat?: any;
  }
}

export default function N8NChatWidget() {
  useEffect(() => {
    // Load N8N chat widget when component mounts
    const apiUrl = "/api/chat";

    console.log("Initializing N8N Chat with proxy URL:", apiUrl);

    // Wait for container to be available
    const container = document.getElementById("n8n-chat-container");
    if (!container) {
      console.error("Chat container not found");
      return;
    }

    // Load the script
    const script = document.createElement("script");
    script.type = "module";
    script.innerHTML = `
      import { createChat } from 'https://cdn.jsdelivr.net/npm/@n8n/chat/dist/chat.bundle.es.js';

      try {
        createChat({
          webhookUrl: '${apiUrl}',
          target: '#n8n-chat-container',
          mode: 'window'
        });
      } catch (error) {
        console.error("Failed to create chat:", error);
      }
    `;
    document.body.appendChild(script);

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return (
    <>
      {/* N8N Chat CSS */}
      <link
        href="https://cdn.jsdelivr.net/npm/@n8n/chat/dist/style.css"
        rel="stylesheet"
      />
    </>
  );
}
