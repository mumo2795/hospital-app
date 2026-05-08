"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";

export default function OrgChartPage() {
  const { language } = useLanguage();

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navigation />
      <main className="flex-1">
        <section className="py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-6">
            <h1 className="text-4xl font-bold mb-8 text-gray-900">
              {language === "en" ? "Organization Chart" : "Carta Organisasi"}
            </h1>

            <div className="bg-white rounded-lg shadow-md p-8">
              <div className="relative w-full">
                <Image
                  src="/images/CARTA-ORGANISASI-HTAR-20261.jpg"
                  alt="Carta Organisasi Hospital Tengku Ampuan Rahimah"
                  width={1200}
                  height={800}
                  className="w-full h-auto rounded-lg"
                  priority
                />
              </div>
              <p className="text-center text-sm text-gray-500 mt-4">
                Carta Organisasi Hospital Tengku Ampuan Rahimah 2026
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
