import type { Metadata } from "next";
import "./globals.css";
import ChatbotWidget from "@/components/ChatbotWidget";

export const metadata: Metadata = {
  title: "Hospital Tengku Ampuan Rahimah",
  description: "Quality Healthcare. Personalized. Professional healthcare services with AI-powered assistance.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900">
        {children}
        <ChatbotWidget />
      </body>
    </html>
  );
}
