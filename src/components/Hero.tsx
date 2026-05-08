"use client";

import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative h-[600px] md:h-[700px] overflow-hidden">
      {/* Background Cover Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hosp cover photo.jpg"
          alt="Hospital Tengku Ampuan Rahimah"
          fill
          className="object-cover"
          priority
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Text Content on Top */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-6xl mx-auto px-6 w-full">
          <div className="max-w-2xl bg-white/10 backdrop-blur-sm p-8 rounded-lg">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">
              {t("hero.title")}
            </h1>
            <h2 className="text-4xl md:text-5xl font-bold text-red-500 mb-6 drop-shadow-lg">
              {t("hero.subtitle")}
            </h2>
            <p className="text-lg text-white mb-8 drop-shadow-md">
              {t("hero.description")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition shadow-lg">
                {t("hero.bookAppointment")}
              </button>
              <button className="bg-white/90 hover:bg-white border-2 border-white text-gray-900 px-8 py-3 rounded-lg font-semibold transition shadow-lg">
                {t("hero.learnMore")}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
