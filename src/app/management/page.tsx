"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";

export default function ManagementPage() {
  const { language } = useLanguage();

  const managementServices = [
    "Pentadbiran / Administration",
    "Akaun & Belanjawan / Accounts & Budget",
    "Sumber Manusia / Human Resources",
    "Teknologi Maklumat / Information Technology",
    "Aset, Stor & Pengurusan Latihan / Assets, Store & Training Management",
    "Perolehan & Pembangunan / Procurement & Development",
    "Perpustakaan / Library",
    "Latihan / Training",
    "Keselamatan / Security",
    "Psikologi Kaunseling / Counseling Psychology",
    "Hasil & Daftar Masuk / Revenue & Admission",
    "Gaji / Payroll",
    "Perhubungan Awam / Public Relations",
    "Hal Ehwal Islam / Islamic Affairs",
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navigation />
      <main className="flex-1">
        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-6">
            <h1 className="text-4xl font-bold mb-8 text-gray-900">
              {language === "en" ? "Management" : "Pengurusan"}
            </h1>

            <div className="bg-white rounded-lg shadow-md p-8">
              <div className="grid md:grid-cols-2 gap-4">
                {managementServices.map((service, index) => (
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
