"use client";

import { Heart, Stethoscope, Brain, Eye, Zap, Pill } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Services() {
  const { t } = useLanguage();

  const services = [
    {
      icon: Stethoscope,
      titleKey: "services.generalPractice",
      descKey: "services.generalPracticeDesc",
    },
    {
      icon: Heart,
      titleKey: "services.cardiology",
      descKey: "services.cardiologyDesc",
    },
    {
      icon: Brain,
      titleKey: "services.neurology",
      descKey: "services.neurologyDesc",
    },
    {
      icon: Eye,
      titleKey: "services.ophthalmology",
      descKey: "services.ophthalmologyDesc",
    },
    {
      icon: Zap,
      titleKey: "services.emergency",
      descKey: "services.emergencyDesc",
    },
    {
      icon: Pill,
      titleKey: "services.pharmacy",
      descKey: "services.pharmacyDesc",
    },
  ];

  return (
    <section id="services" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-4 text-gray-900 dark:text-gray-100">
          {t("services.title")}
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
          {t("services.description")}
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg hover:shadow-lg transition duration-300"
              >
                <Icon className="text-red-600 dark:text-red-400 mb-4" size={40} />
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  {t(service.titleKey)}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">{t(service.descKey)}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
