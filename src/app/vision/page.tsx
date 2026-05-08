"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";

export default function VisionPage() {
  const { language } = useLanguage();

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navigation />
      <main className="flex-1">
        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-6">
            <h1 className="text-4xl font-bold mb-8 text-gray-900">
              {language === "en" ? "Vision, Mission & Objectives" : "Objektif, Misi dan Visi"}
            </h1>

            <div className="space-y-6">
              {/* Vision */}
              <div className="bg-white rounded-lg shadow-md p-8">
                <h3 className="text-2xl font-bold mb-4 text-red-600">
                  {language === "en" ? "VISION" : "VISI"}
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Mewujudkan sebuah pusat perkhidmatan perubatan yang cemerlang.
                </p>
              </div>

              {/* Mission */}
              <div className="bg-white rounded-lg shadow-md p-8">
                <h3 className="text-2xl font-bold mb-4 text-red-600">
                  {language === "en" ? "MISSION" : "MISI"}
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Memberi kepuasan yang menyeluruh melalui perkhidmatan yang berkualiti dan beretika,
                  secara cekap dan professional untuk memenuhi keperluan dan ekspektasi semua pelanggan.
                </p>
              </div>

              {/* Objectives */}
              <div className="bg-white rounded-lg shadow-md p-8">
                <h3 className="text-2xl font-bold mb-4 text-red-600">
                  {language === "en" ? "OBJECTIVES" : "OBJEKTIF"}
                </h3>
                <ul className="space-y-3 text-lg text-gray-700">
                  <li className="flex items-start">
                    <span className="text-red-600 mr-3 mt-1">•</span>
                    <span>Mempertingkatkan rawatan pesakit yang berkualiti melalui perkhidmatan diagnostic,
                    rawatan dan pemulihan awal yang cekap dan berkesan.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-3 mt-1">•</span>
                    <span>Menggalakkan inovasi dalam perkhidmatan.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-3 mt-1">•</span>
                    <span>Menjalankan latihan dan penyelidikan secara berterusan serta memberi tumpuan
                    kepada pembangunan modal insan.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-3 mt-1">•</span>
                    <span>Menyediakan persekitaran yang selamat dan selesa kepada pelanggan dan warga kerja.</span>
                  </li>
                </ul>
              </div>

              {/* Culture */}
              <div className="bg-white rounded-lg shadow-md p-8">
                <h3 className="text-2xl font-bold mb-4 text-red-600">
                  {language === "en" ? "OUR CULTURE" : "BUDAYA KAMI"}
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Penyayang, Profesionalisma dan Kerja Berpasukan
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
