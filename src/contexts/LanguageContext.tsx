"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type Language = "en" | "ms";

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Header
    "header.services": "Services",
    "header.about": "About",
    "header.contact": "Contact",

    // Hero
    "hero.title": "Quality Healthcare.",
    "hero.subtitle": "Personalized.",
    "hero.description":
      "Hospital Tengku Ampuan Rahimah provides comprehensive healthcare services with a commitment to excellence and patient-centered care.",
    "hero.bookAppointment": "Book Appointment",
    "hero.learnMore": "Learn More",

    // Services
    "services.title": "Our Services",
    "services.description":
      "We provide a wide range of medical services to meet all your healthcare needs.",
    "services.generalPractice": "General Practice",
    "services.generalPracticeDesc":
      "Comprehensive healthcare services for all ages with experienced medical professionals.",
    "services.cardiology": "Cardiology",
    "services.cardiologyDesc":
      "Specialized heart and cardiovascular disease treatment and prevention.",
    "services.neurology": "Neurology",
    "services.neurologyDesc":
      "Expert diagnosis and treatment of neurological disorders and conditions.",
    "services.ophthalmology": "Ophthalmology",
    "services.ophthalmologyDesc":
      "Complete eye care services including surgery and diagnostics.",
    "services.emergency": "Emergency Services",
    "services.emergencyDesc":
      "24/7 emergency response team ready for urgent medical needs.",
    "services.pharmacy": "Pharmacy",
    "services.pharmacyDesc":
      "Full-service pharmacy with prescription fulfillment and health consultation.",

    // About
    "about.title": "About Hospital Tengku Ampuan Rahimah",
    "about.paragraph1":
      "Founded with a commitment to excellence in healthcare, our hospital serves the community with state-of-the-art medical facilities and highly qualified healthcare professionals.",
    "about.paragraph2":
      "We prioritize patient safety, comfort, and optimal outcomes in every aspect of our services.",
    "about.paragraph3":
      "Our mission is to provide accessible, affordable, and quality healthcare services to all patients.",
    "about.yearsOfService": "Years of Service",
    "about.staffMembers": "Staff Members",
    "about.happyPatients": "Happy Patients",

    // Contact
    "contact.title": "Get in Touch",
    "contact.contactInfo": "Contact Information",
    "contact.phone": "Phone",
    "contact.email": "Email",
    "contact.address": "Address",
    "contact.addressValue": "Kuala Lumpur, Malaysia",
    "contact.hours": "Hours",
    "contact.emergencyHours": "24/7 Emergency Services",
    "contact.regularHours": "Mon-Fri: 8:00 AM - 5:00 PM",
    "contact.sendMessage": "Send us a Message",
    "contact.yourName": "Your Name",
    "contact.yourEmail": "Your Email",
    "contact.phoneNumber": "Phone Number",
    "contact.yourMessage": "Your Message",
    "contact.submit": "Send Message",

    // Footer
    "footer.tagline": "Providing quality healthcare services since 1999.",
    "footer.services": "Services",
    "footer.generalPractice": "General Practice",
    "footer.cardiology": "Cardiology",
    "footer.emergency": "Emergency",
    "footer.company": "Company",
    "footer.aboutUs": "About Us",
    "footer.contact": "Contact",
    "footer.careers": "Careers",
    "footer.legal": "Legal",
    "footer.privacy": "Privacy Policy",
    "footer.terms": "Terms of Service",
    "footer.copyright":
      "© 2024 Hospital Tengku Ampuan Rahimah. All rights reserved.",
  },
  ms: {
    // Header
    "header.services": "Perkhidmatan",
    "header.about": "Tentang Kami",
    "header.contact": "Hubungi",

    // Hero
    "hero.title": "Penjagaan Kesihatan Berkualiti.",
    "hero.subtitle": "Diperibadikan.",
    "hero.description":
      "Hospital Tengku Ampuan Rahimah menyediakan perkhidmatan penjagaan kesihatan yang komprehensif dengan komitmen terhadap kecemerlangan dan penjagaan berpusatkan pesakit.",
    "hero.bookAppointment": "Tempah Temujanji",
    "hero.learnMore": "Ketahui Lebih Lanjut",

    // Services
    "services.title": "Perkhidmatan Kami",
    "services.description":
      "Kami menyediakan pelbagai perkhidmatan perubatan untuk memenuhi semua keperluan penjagaan kesihatan anda.",
    "services.generalPractice": "Amalan Umum",
    "services.generalPracticeDesc":
      "Perkhidmatan penjagaan kesihatan menyeluruh untuk semua peringkat umur dengan profesional perubatan yang berpengalaman.",
    "services.cardiology": "Kardiologi",
    "services.cardiologyDesc":
      "Rawatan dan pencegahan penyakit jantung dan kardiovaskular yang khusus.",
    "services.neurology": "Neurologi",
    "services.neurologyDesc":
      "Diagnosis dan rawatan pakar untuk gangguan dan keadaan neurologi.",
    "services.ophthalmology": "Oftalmologi",
    "services.ophthalmologyDesc":
      "Perkhidmatan penjagaan mata lengkap termasuk pembedahan dan diagnostik.",
    "services.emergency": "Perkhidmatan Kecemasan",
    "services.emergencyDesc":
      "Pasukan tindak balas kecemasan 24/7 bersedia untuk keperluan perubatan mendesak.",
    "services.pharmacy": "Farmasi",
    "services.pharmacyDesc":
      "Farmasi perkhidmatan penuh dengan pemenuhan preskripsi dan perundingan kesihatan.",

    // About
    "about.title": "Tentang Hospital Tengku Ampuan Rahimah",
    "about.paragraph1":
      "Ditubuhkan dengan komitmen terhadap kecemerlangan dalam penjagaan kesihatan, hospital kami melayani masyarakat dengan kemudahan perubatan terkini dan profesional penjagaan kesihatan yang berkelayakan tinggi.",
    "about.paragraph2":
      "Kami mengutamakan keselamatan pesakit, keselesaan, dan hasil yang optimum dalam setiap aspek perkhidmatan kami.",
    "about.paragraph3":
      "Misi kami adalah untuk menyediakan perkhidmatan penjagaan kesihatan yang mudah diakses, berpatutan, dan berkualiti kepada semua pesakit.",
    "about.yearsOfService": "Tahun Perkhidmatan",
    "about.staffMembers": "Ahli Kakitangan",
    "about.happyPatients": "Pesakit Gembira",

    // Contact
    "contact.title": "Hubungi Kami",
    "contact.contactInfo": "Maklumat Hubungan",
    "contact.phone": "Telefon",
    "contact.email": "E-mel",
    "contact.address": "Alamat",
    "contact.addressValue": "Kuala Lumpur, Malaysia",
    "contact.hours": "Waktu Operasi",
    "contact.emergencyHours": "Perkhidmatan Kecemasan 24/7",
    "contact.regularHours": "Isnin-Jumaat: 8:00 Pagi - 5:00 Petang",
    "contact.sendMessage": "Hantar Mesej kepada Kami",
    "contact.yourName": "Nama Anda",
    "contact.yourEmail": "E-mel Anda",
    "contact.phoneNumber": "Nombor Telefon",
    "contact.yourMessage": "Mesej Anda",
    "contact.submit": "Hantar Mesej",

    // Footer
    "footer.tagline":
      "Menyediakan perkhidmatan penjagaan kesihatan berkualiti sejak 1999.",
    "footer.services": "Perkhidmatan",
    "footer.generalPractice": "Amalan Umum",
    "footer.cardiology": "Kardiologi",
    "footer.emergency": "Kecemasan",
    "footer.company": "Syarikat",
    "footer.aboutUs": "Tentang Kami",
    "footer.contact": "Hubungi",
    "footer.careers": "Kerjaya",
    "footer.legal": "Undang-undang",
    "footer.privacy": "Dasar Privasi",
    "footer.terms": "Terma Perkhidmatan",
    "footer.copyright":
      "© 2024 Hospital Tengku Ampuan Rahimah. Hak cipta terpelihara.",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "ms" : "en"));
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.en] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
