"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";

export default function CharterPage() {
  const { language } = useLanguage();

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navigation />
      <main className="flex-1">
        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-6">
            <h1 className="text-4xl font-bold mb-8 text-gray-900">
              {language === "en" ? "Customer Charter" : "Piagam Pelanggan"}
            </h1>

            <div className="space-y-6">
              {/* Emergency Department */}
              <div className="bg-white rounded-lg shadow-md p-8">
                <h3 className="text-2xl font-bold mb-4 text-red-600">
                  {language === "en" ? "Emergency Department" : "Jabatan Kecemasan"}
                </h3>
                <ul className="space-y-3 text-base text-gray-700">
                  <li className="flex items-start">
                    <span className="text-red-600 mr-3 mt-1">•</span>
                    <span>Semua pesakit yang ditakrifkan oleh Malaysian Triage Category (MTC) sebagai kes MERAH
                    akan dirawat oleh Pegawai Perubatan dengan serta merta.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-3 mt-1">•</span>
                    <span>Untuk kes separa kritikal, setiap pesakit akan diperiksa oleh Pegawai Perubatan
                    dalam tempoh 30 minit selepas pendaftaran.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-3 mt-1">•</span>
                    <span>Untuk kes bukan kritikal, setiap pesakit akan diperiksa oleh Pegawai Perubatan
                    dalam tempoh 90 minit selepas pendaftaran.</span>
                  </li>
                </ul>
              </div>

              {/* Specialist Clinic */}
              <div className="bg-white rounded-lg shadow-md p-8">
                <h3 className="text-2xl font-bold mb-4 text-red-600">
                  {language === "en" ? "Specialist Clinic" : "Klinik Pakar"}
                </h3>
                <p className="text-base text-gray-700">
                  Setiap pesakit akan diperiksa oleh Pegawai Perubatan dalam tempoh 90 minit selepas pendaftaran.
                </p>
              </div>

              {/* Admission Unit */}
              <div className="bg-white rounded-lg shadow-md p-8">
                <h3 className="text-2xl font-bold mb-4 text-red-600">
                  {language === "en" ? "Admission Unit" : "Unit Daftar Masuk"}
                </h3>
                <p className="text-base text-gray-700">
                  Setiap pesakit akan didaftarkan untuk masuk ke wad dalam tempoh 5 minit.
                </p>
              </div>

              {/* Revenue Unit */}
              <div className="bg-white rounded-lg shadow-md p-8">
                <h3 className="text-2xl font-bold mb-4 text-red-600">
                  {language === "en" ? "Revenue Unit" : "Unit Hasil"}
                </h3>
                <ul className="space-y-3 text-base text-gray-700">
                  <li className="flex items-start">
                    <span className="text-red-600 mr-3 mt-1">•</span>
                    <span>Setiap pelanggan akan mendapat bayaran balik baki wang deposit dalam tempoh 15 minit
                    dari masa penyerahan resit deposit asal.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-3 mt-1">•</span>
                    <span>Bagi Bayaran balik baki wang deposit yang melebihi RM1000, semua dokumen akan dihantar
                    ke Jabatan Akauntan Negara dalam tempoh 2 hari bekerja dan bayaran akan dikreditkan terus ke bank pelanggan.</span>
                  </li>
                </ul>
              </div>

              {/* Medical Records */}
              <div className="bg-white rounded-lg shadow-md p-8">
                <h3 className="text-2xl font-bold mb-4 text-red-600">
                  {language === "en" ? "Medical Records" : "Rekod Perubatan"}
                </h3>
                <p className="text-base text-gray-700">
                  Permohonan Laporan Perubatan yang lengkap akan disiapkan dalam masa 28 hari
                  (tidak termasuk cuti mingguan dan cuti am) dari tarikh penerimaan.
                </p>
              </div>

              {/* Patient Responsibilities */}
              <div className="bg-red-50 rounded-lg border-2 border-red-200 p-8">
                <h3 className="text-xl font-bold mb-4 text-gray-900">
                  Untuk melaksanakan piagam pelanggan dengan berkesan, pesakit adalah wajib untuk:
                </h3>
                <ul className="space-y-2 text-base text-gray-700">
                  <li className="flex items-start">
                    <span className="text-red-600 mr-3 mt-1">✓</span>
                    <span>Mematuhi peraturan Hospital</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-3 mt-1">✓</span>
                    <span>Mengguna segala kemudahan dengan bertanggungjawab</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-3 mt-1">✓</span>
                    <span>Mematuhi pelan rawatan yang diberi</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
