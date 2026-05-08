"use client";

import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Contact() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-gray-100">
          {t("contact.title")}
        </h2>

        <div className="grid md:grid-cols-2 gap-12 mb-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-gray-900 dark:text-gray-100">
              {t("contact.contactInfo")}
            </h3>

            <div className="space-y-6">
              <div className="flex gap-4">
                <Phone className="text-red-600 dark:text-red-400 flex-shrink-0 mt-1" size={24} />
                <div>
                  <p className="font-semibold text-gray-900 dark:text-gray-100">{t("contact.phone")}</p>
                  <p className="text-gray-600 dark:text-gray-400">+603-3375 7000</p>
                </div>
              </div>

              <div className="flex gap-4">
                <Mail className="text-red-600 dark:text-red-400 flex-shrink-0 mt-1" size={24} />
                <div>
                  <p className="font-semibold text-gray-900 dark:text-gray-100">{t("contact.email")}</p>
                  <p className="text-gray-600 dark:text-gray-400">contact@hospital.my</p>
                </div>
              </div>

              <div className="flex gap-4">
                <MapPin className="text-red-600 dark:text-red-400 flex-shrink-0 mt-1" size={24} />
                <div>
                  <p className="font-semibold text-gray-900 dark:text-gray-100">{t("contact.address")}</p>
                  <p className="text-gray-600 dark:text-gray-400">Jalan Langat, 41200 Klang, Selangor</p>
                </div>
              </div>

              <div className="flex gap-4">
                <Clock className="text-red-600 dark:text-red-400 flex-shrink-0 mt-1" size={24} />
                <div>
                  <p className="font-semibold text-gray-900 dark:text-gray-100">{t("contact.hours")}</p>
                  <p className="text-gray-600 dark:text-gray-400">{t("contact.emergencyHours")}</p>
                  <p className="text-gray-600 dark:text-gray-400">{t("contact.regularHours")}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-gray-900 dark:text-gray-100">
              {t("contact.sendMessage")}
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder={t("contact.yourName")}
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
              />

              <input
                type="email"
                placeholder={t("contact.yourEmail")}
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
              />

              <input
                type="tel"
                placeholder={t("contact.yourPhoneNumber")}
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
              />

              <textarea
                placeholder={t("contact.yourMessage")}
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 rounded-lg transition"
              >
                {t("contact.submit")}
              </button>
            </form>
          </div>
        </div>

        {/* Map */}
        <div className="mt-12">
          <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-gray-100">
            Lokasi / Location
          </h3>
          <div className="w-full h-[450px] rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.1726890847!2d101.4374197!3d3.0206735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cdac634329905f%3A0xf759281c7157e609!2sTengku%20Ampuan%20Rahimah%20Hospital%2C%20Klang!5e0!3m2!1sen!2smy!4v1715140800000!5m2!1sen!2smy"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Hospital Tengku Ampuan Rahimah Location"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
