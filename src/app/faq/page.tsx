"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "1. Bagaimana caranya untuk mendapatkan rawatan kepakaran?",
      answer: "Anda perlu diperiksa oleh pegawai perubatan di klinik kesihatan terlebih dahulu sebelum dirujuk kepada doktor pakar yang berkaitan."
    },
    {
      question: "2. Berapakah caj kemasukan @ cagaran hospital bagi warganegara dan bukan warganegara?",
      answer: "Caj cagaran adalah berbeza mengikut kerakyatan dan disiplin seperti berikut:\n\nPembedahan: Warganegara RM30, Bukan Warganegara RM2,800\nPerubatan: Warganegara RM20, Bukan Warganegara RM1,400\nSakit Puan: Warganegara RM15, Bukan Warganegara RM2,800"
    },
    {
      question: "3. Siapakah yang boleh mendapat pemotongan atau pengecualian bil hospital?",
      answer: "Bagi semua kes penyakit berjangkit, penerima bantuan kebajikan masyarakat, OKU, pelajar sekolah (disertakan surat pengesahan sekolah), kakitangan kerajaan (disertakan surat jaminan/eGL), pesara kerajaan dan penderma darah (mengikut bilangan pendermaan darah)."
    },
    {
      question: "4. Apakah penyakit berjangkit yang dimasukkan ke wad dikecualikan dari bayaran?",
      answer: "Ya, semua jenis penyakit berjangkit dikecualikan bagi warganegara."
    },
    {
      question: "5. Apakah dokumen-dokumen yang perlu dibawa semasa mendapatkan rawatan atau kemasukan bagi tujuan pengecualian bayaran?",
      answer: "Surat pengesahan daripada Jabatan Kebajikan Masyarakat, Kad Pencen, surat sekolah atau surat pengesahan (GL)."
    },
    {
      question: "6. Apakah yang dimaksudkan dengan kes-kes kecemasan bagi tujuan rawatan di Jabatan Kecemasan?",
      answer: "Kes-kes kecemasan termasuk kes kemalangan (di jalan raya / di tempat kerja / domestik) serangan lelah, serangan jantung, pengsan, digigit ular, kebakaran, sawan, pendarahan kemaluan, keracunan makanan, sakit perut secara tiba-tiba dan amat kuat."
    },
    {
      question: "7. Adakah waris dibenarkan menunggu pesakit di dalam wad?",
      answer: "Ya. Ibu/bapa/penjaga jika pesakit kanak-kanak. Manakala pesakit dewasa cuma mereka yang tenat sahaja dan penjaganya mestilah sama jantina."
    },
    {
      question: "8. Adakah pihak hospital bertanggungjawab di atas kehilangan harta benda atau kenderaan pesakit / waris?",
      answer: "Tidak. Pihak hospital tidak bertanggungjawab ke atas sebarang kehilangan. Oleh sebab itu pesakit/waris dinasihatkan tidak membawa sebarang barang berharga semasa berada di hospital."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navigation />
      <main className="flex-1">
        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-6">
            <h1 className="text-4xl font-bold mb-8 text-gray-900">Soalan Lazim</h1>
            <h2 className="text-3xl font-bold mb-6 text-red-600">Frequently Asked Questions</h2>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors duration-200"
                  >
                    <span className="text-lg font-semibold text-gray-900 pr-4">{faq.question}</span>
                    <ChevronDown
                      size={24}
                      className={`text-red-600 flex-shrink-0 transition-transform duration-300 ${
                        openIndex === index ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      openIndex === index ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="px-6 pb-6">
                      <p className="text-base text-gray-700 leading-relaxed whitespace-pre-line">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
