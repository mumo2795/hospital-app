"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";

export default function SupportPage() {
  const { language } = useLanguage();

  const supportServices = [
    "Dietetik dan Sajian / Dietetics and Catering",
    "Farmasi / Pharmacy",
    "Pendidikan Kesihatan / Health Education",
    "Kesihatan Awam / Public Health",
    "Kawalan Infeksi dan Antibiotik / Infection Control and Antibiotics",
    "Kerja Sosial Perubatan / Medical Social Work",
    "Perkhidmatan Bahan Steril / Sterile Supply Services",
    "Rekod Perubatan / Medical Records",
    "Pusat Penyelidikan Klinikal / Clinical Research Centre",
    "Perolehan Organ Hospital / Hospital Organ Procurement",
    "Kejururawatan / Nursing",
    "Penyeliaan Hospital / Hospital Supervision",
    "Medikolegal & Kluster / Medicolegal & Cluster",
    "Kualiti / Quality",
    "Pengurusan Katil (BMU) / Bed Management Unit",
    "Penjagaan Luka / Wound Care",
    "Kejuruteraan / Engineering",
    "Kesihatan Awam / Public Health",
    "Casemix",
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navigation />
      <main className="flex-1">
        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-6">
            <h1 className="text-4xl font-bold mb-8 text-gray-900">
              {language === "en" ? "Support Services" : "Perkhidmatan Sokongan"}
            </h1>

            <div className="bg-white rounded-lg shadow-md p-8">
              <div className="grid md:grid-cols-2 gap-4">
                {supportServices.map((service, index) => (
                  <div
                    key={index}
                    className="flex items-start p-4 bg-gray-50 rounded-lg hover:bg-red-50 transition-colors duration-200"
                  >
                    <span className="text-red-600 mr-3 mt-1 text-xl">•</span>
                    <span className="text-base text-gray-700">{service}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
