"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, X, Languages } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();

  return (
    <header className="bg-white dark:bg-gray-800 border-b border-gray-100 dark:border-gray-700 sticky top-0 z-30">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/500px-Coat_of_arms_of_Malaysia.svg.png"
            alt="Malaysia Coat of Arms"
            width={50}
            height={50}
            className="object-contain"
          />
          <Image
            src="/images/Logo_Hospital_Tenku_Ampuan_Rahimah.png"
            alt="Hospital Tengku Ampuan Rahimah Logo"
            width={50}
            height={50}
            className="object-contain"
          />
          <div className="hidden md:block">
            <h1 className="text-lg font-bold text-gray-900 dark:text-gray-100 leading-tight">
              Hospital Tengku
            </h1>
            <h1 className="text-lg font-bold text-gray-900 dark:text-gray-100 leading-tight">
              Ampuan Rahimah
            </h1>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center">
          <Link href="#services" className="text-gray-700 dark:text-gray-300 hover:text-sky-600 dark:hover:text-sky-400 transition">
            {t("header.services")}
          </Link>
          <Link href="#about" className="text-gray-700 dark:text-gray-300 hover:text-sky-600 dark:hover:text-sky-400 transition">
            {t("header.about")}
          </Link>
          <Link href="#contact" className="text-gray-700 dark:text-gray-300 hover:text-sky-600 dark:hover:text-sky-400 transition">
            {t("header.contact")}
          </Link>
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-sky-600 dark:hover:text-sky-400 transition"
            aria-label="Toggle language"
          >
            <Languages size={20} />
            <span className="text-sm font-medium">{language === "en" ? "BM" : "EN"}</span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-700 dark:text-gray-300"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-16 left-0 right-0 bg-white dark:bg-gray-800 border-b border-gray-100 dark:border-gray-700 p-6 md:hidden">
            <div className="flex flex-col gap-4">
              <Link
                href="#services"
                className="text-gray-700 dark:text-gray-300 hover:text-sky-600 dark:hover:text-sky-400"
              >
                {t("header.services")}
              </Link>
              <Link
                href="#about"
                className="text-gray-700 dark:text-gray-300 hover:text-sky-600 dark:hover:text-sky-400"
              >
                {t("header.about")}
              </Link>
              <Link
                href="#contact"
                className="text-gray-700 dark:text-gray-300 hover:text-sky-600 dark:hover:text-sky-400"
              >
                {t("header.contact")}
              </Link>
              <button
                onClick={toggleLanguage}
                className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-sky-600 dark:hover:text-sky-400 transition"
              >
                <Languages size={20} />
                <span className="font-medium">{language === "en" ? "Bahasa Malaysia" : "English"}</span>
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
