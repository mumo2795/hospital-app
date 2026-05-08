"use client";

import { useLanguage } from "@/contexts/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-red-400">HTAR</h3>
            <p className="text-gray-400">
              {t("footer.tagline")}
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">{t("footer.services")}</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-red-400 transition">
                  {t("footer.generalPractice")}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-400 transition">
                  {t("footer.cardiology")}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-400 transition">
                  {t("footer.emergency")}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">{t("footer.company")}</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-red-400 transition">
                  {t("footer.aboutUs")}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-400 transition">
                  {t("footer.contact")}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-400 transition">
                  {t("footer.careers")}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">{t("footer.legal")}</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-red-400 transition">
                  {t("footer.privacy")}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-400 transition">
                  {t("footer.terms")}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
          <p>
            {t("footer.copyright")}
          </p>
        </div>
      </div>
    </footer>
  );
}
