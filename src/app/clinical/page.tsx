"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";

export default function ClinicalPage() {
  const { language } = useLanguage();

  const clinicalServices = [
    "Perubatan Am / General Medicine",
    "Pembedahan Am / General Surgery",
    "Ortopedik / Orthopedics",
    "Anestesiologi dan Rawatan Rapi / Anesthesiology and Intensive Care",
    "Psikiatri / Psychiatry",
    "Kecemasan / Emergency",
    "Obstetrik & Ginekologi / Obstetrics & Gynecology",
    "Pediatrik / Pediatrics",
    "Oftalmologi / Ophthalmology",
    "Otorinolaringologi / Otorhinolaryngology",
    "Perubatan Rehabilitasi / Rehabilitation Medicine",
    "Dermatologi / Dermatology",
    "Patologi / Pathology",
    "Perubatan Transfusi Darah / Blood Transfusion Medicine",
    "Pergigian Pediatrik / Pediatric Dentistry",
    "Bedah Mulut & Maksilofasial / Oral & Maxillofacial Surgery",
    "Perubatan Forensik / Forensic Medicine",
    "Nefrologi / Nephrology",
    "Radiologi / Radiology",
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navigation />
      <main className="flex-1">
        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-6">
            <h1 className="text-4xl font-bold mb-8 text-gray-900">
              {language === "en" ? "Clinical Services" : "Perkhidmatan Klinikal"}
            </h1>

            <div className="bg-white rounded-lg shadow-md p-8">
              <div className="grid md:grid-cols-2 gap-4">
                {clinicalServices.map((service, index) => (
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
