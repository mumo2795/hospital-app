import type { Metadata } from "next";
import "./globals.css";
import N8NChatWidget from "@/components/N8NChatWidget";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { FontSizeProvider } from "@/contexts/FontSizeContext";
import { DarkModeProvider } from "@/contexts/DarkModeContext";

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
      <body className="bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100">
        <DarkModeProvider>
          <FontSizeProvider>
            <LanguageProvider>
              {children}
              <div id="n8n-chat-container" style={{ position: 'fixed', bottom: 0, right: 0, width: '400px', height: '600px', zIndex: 9999 }}></div>
              <N8NChatWidget />
            </LanguageProvider>
          </FontSizeProvider>
        </DarkModeProvider>
      </body>
    </html>
  );
}
