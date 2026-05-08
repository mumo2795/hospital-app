"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";

export default function IntroductionPage() {
  const { language } = useLanguage();

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navigation />
      <main className="flex-1">
        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-6">
            <h1 className="text-4xl font-bold mb-8 text-gray-900">
              {language === "en" ? "Introduction" : "Pengenalan"}
            </h1>

            <div className="bg-white rounded-lg shadow-md p-8 space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                Hospital Tengku Ampuan Rahimah (HTAR), Klang telah mula beroperasi pada April 1985.
                Ia merupakan sebuah hospital kerajaan dengan lebih 1000 katil pesakit dan 20 bidang klinikal
                yang terletak di Klang Selatan di dalam daerah Klang, Selangor. Hospital ini menyediakan
                perkhidmatan kesihatan utama dan juga penjagaan kesihatan pakar kebangsaan terpilih.
                Hospital ini merupakan pusat rujukan utama pakar bagi daerah yang meliputi Klang,
                Sabak Bernam, Kuala Selangor dan sebahagian daerah Petaling dan Kuala Langat.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                Hospital TAR Klang juga menempatkan kemudahan pengajaran perubatan kepada penuntut
                perubatan Universiti Malaya dan Management and Science University Malaysia (MSU).
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
