"use client";

import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-gray-100">
              {t("about.title")}
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              {t("about.paragraph1")}
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              {t("about.paragraph2")}
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              {t("about.paragraph3")}
            </p>
          </div>

          <div className="relative">
            {/* Marketing Image */}
            <div className="relative h-[350px] rounded-lg overflow-hidden shadow-lg mb-6">
              <Image
                src="/images/marketing pic 1.webp"
                alt="Hospital Services"
                fill
                className="object-cover"
              />
            </div>

            {/* Stats Card */}
            <div className="bg-red-100 dark:bg-red-900/30 rounded-lg p-8">
              <div className="text-center">
                <h3 className="text-5xl font-bold text-red-600 dark:text-red-400 mb-2">25+</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-6">{t("about.yearsOfService")}</p>
                <div className="grid grid-cols-2 gap-4 text-left">
                  <div>
                    <p className="text-2xl font-bold text-red-600 dark:text-red-400">500+</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{t("about.staffMembers")}</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-red-600 dark:text-red-400">50K+</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{t("about.happyPatients")}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
