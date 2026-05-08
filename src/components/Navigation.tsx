"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, X, Languages, ChevronDown, Moon, Sun } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useFontSize, MIN_FONT_SIZE, MAX_FONT_SIZE } from "@/contexts/FontSizeContext";
import { useDarkMode } from "@/contexts/DarkModeContext";

interface SubMenuItem {
  label: string;
  labelMs: string;
  href: string;
}

interface MenuItem {
  label: string;
  labelMs: string;
  href: string;
  submenu?: SubMenuItem[];
}

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const { language, toggleLanguage } = useLanguage();
  const { fontSize, increaseFontSize, decreaseFontSize, resetFontSize } = useFontSize();
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  const menuItems: MenuItem[] = [
    {
      label: "Home",
      labelMs: "Utama",
      href: "/",
    },
    {
      label: "About Us",
      labelMs: "Mengenai Kami",
      href: "#about",
      submenu: [
        { label: "Introduction", labelMs: "Pengenalan", href: "/introduction" },
        { label: "Vision, Mission & Objectives", labelMs: "Objektif, Misi dan Visi", href: "/vision" },
        { label: "Customer Charter", labelMs: "Piagam Pelanggan", href: "/charter" },
        { label: "Organization Chart", labelMs: "Carta Organisasi", href: "/org-chart" },
      ],
    },
    {
      label: "Main Services",
      labelMs: "Perkhidmatan Utama",
      href: "#services",
      submenu: [
        { label: "Clinical Services", labelMs: "Perkhidmatan Klinikal", href: "/clinical" },
        { label: "Support Services", labelMs: "Perkhidmatan Sokongan", href: "/support" },
        { label: "Management", labelMs: "Pengurusan", href: "/management" },
      ],
    },
    {
      label: "Media",
      labelMs: "Media",
      href: "/media",
    },
    {
      label: "FAQ",
      labelMs: "Soalan Lazim",
      href: "/faq",
    },
    {
      label: "Contact Us",
      labelMs: "Hubungi Kami",
      href: "#contact",
    },
  ];

  const toggleDropdown = (label: string) => {
    setOpenDropdown(openDropdown === label ? null : label);
  };

  return (
    <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50 shadow-md">
      <nav className="max-w-7xl mx-auto px-6">
        {/* Top Row: Logo and Language Toggle */}
        <div className="flex items-center justify-between py-4">
          <Link href="/" className="flex items-center gap-3 transition-transform hover:scale-105 duration-300">
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

          <div className="flex items-center gap-4">
            {/* Font Size Adjuster */}
            <div className="hidden md:flex items-center gap-1 border border-gray-300 dark:border-gray-600 rounded-lg p-1">
              <button
                onClick={decreaseFontSize}
                disabled={fontSize <= MIN_FONT_SIZE}
                className="px-3 py-1 text-sm font-bold text-gray-700 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400 hover:bg-red-50 dark:hover:bg-gray-700 rounded transition-all duration-300 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:text-gray-700 dark:disabled:hover:text-gray-300"
                aria-label="Decrease font size"
              >
                A-
              </button>
              <button
                onClick={resetFontSize}
                className="px-3 py-1 text-sm font-bold text-gray-700 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400 hover:bg-red-50 dark:hover:bg-gray-700 rounded transition-all duration-300"
                aria-label="Reset font size"
              >
                A
              </button>
              <button
                onClick={increaseFontSize}
                disabled={fontSize >= MAX_FONT_SIZE}
                className="px-3 py-1 text-sm font-bold text-gray-700 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400 hover:bg-red-50 dark:hover:bg-gray-700 rounded transition-all duration-300 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:text-gray-700 dark:disabled:hover:text-gray-300"
                aria-label="Increase font size"
              >
                A+
              </button>
            </div>

            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className="hidden md:flex items-center gap-2 px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400 hover:bg-red-50 dark:hover:bg-gray-700 rounded-lg transition-all duration-300"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400 hover:bg-red-50 dark:hover:bg-gray-700 rounded-lg transition-all duration-300"
              aria-label="Toggle language"
            >
              <Languages size={20} />
              <span className="text-sm font-medium">{language === "en" ? "BM" : "EN"}</span>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden text-gray-700 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400 transition-colors duration-300"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Desktop Menu - Horizontal Container */}
        <div className="hidden lg:block border-t border-gray-200 dark:border-gray-700">
          <div className="bg-gradient-to-r from-red-50 via-white to-red-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800">
            <div className="flex items-center justify-center gap-2 py-3">
              {menuItems.map((item, index) => (
                <div key={item.label} className="relative group">
                  {item.submenu ? (
                    <>
                      <button
                        className="flex items-center gap-1 px-5 py-2.5 text-[15px] font-bold text-gray-800 dark:text-gray-200 hover:text-red-600 dark:hover:text-red-400 hover:bg-white dark:hover:bg-gray-700 rounded-lg transition-all duration-300 transform hover:scale-105"
                        onMouseEnter={() => setOpenDropdown(item.label)}
                      >
                        {language === "en" ? item.label : item.labelMs}
                        <ChevronDown
                          size={18}
                          className={`transition-transform duration-300 ${
                            openDropdown === item.label ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      {openDropdown === item.label && (
                        <div
                          className="absolute top-full left-0 mt-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-xl min-w-[240px] py-2 animate-fadeIn"
                          onMouseLeave={() => setOpenDropdown(null)}
                          style={{
                            animation: "fadeIn 0.2s ease-out"
                          }}
                        >
                          {item.submenu.map((subItem, subIndex) => (
                            <Link
                              key={subItem.label}
                              href={subItem.href}
                              className="block px-4 py-2.5 text-sm font-semibold text-gray-700 dark:text-gray-300 hover:bg-red-50 dark:hover:bg-gray-700 hover:text-red-600 dark:hover:text-red-400 transition-all duration-200 hover:pl-6"
                              style={{
                                animation: `slideIn 0.3s ease-out ${subIndex * 0.05}s both`
                              }}
                            >
                              {language === "en" ? subItem.label : subItem.labelMs}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className="block px-5 py-2.5 text-[15px] font-bold text-gray-800 dark:text-gray-200 hover:text-red-600 dark:hover:text-red-400 hover:bg-white dark:hover:bg-gray-700 rounded-lg transition-all duration-300 transform hover:scale-105"
                    >
                      {language === "en" ? item.label : item.labelMs}
                    </Link>
                  )}
                  {index < menuItems.length - 1 && (
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-px h-4 bg-gray-300 dark:bg-gray-600"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? "max-h-[800px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="py-4 border-t border-gray-200 dark:border-gray-700">
            <div className="flex flex-col gap-1">
              {menuItems.map((item) => (
                <div key={item.label}>
                  {item.submenu ? (
                    <>
                      <button
                        onClick={() => toggleDropdown(item.label)}
                        className="flex items-center justify-between w-full px-4 py-3 text-gray-700 dark:text-gray-300 hover:bg-red-50 dark:hover:bg-gray-700 hover:text-red-600 dark:hover:text-red-400 rounded-lg transition-all duration-300"
                      >
                        <span className="font-medium">{language === "en" ? item.label : item.labelMs}</span>
                        <ChevronDown
                          size={16}
                          className={`transform transition-transform duration-300 ${
                            openDropdown === item.label ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      <div
                        className={`overflow-hidden transition-all duration-300 ease-in-out ${
                          openDropdown === item.label ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
                        }`}
                      >
                        <div className="ml-4 mt-1 flex flex-col gap-1">
                          {item.submenu.map((subItem) => (
                            <Link
                              key={subItem.label}
                              href={subItem.href}
                              className="block px-4 py-2.5 text-sm text-gray-600 dark:text-gray-400 hover:bg-red-50 dark:hover:bg-gray-700 hover:text-red-600 dark:hover:text-red-400 rounded-lg transition-all duration-200 hover:pl-6"
                              onClick={() => setIsOpen(false)}
                            >
                              {language === "en" ? subItem.label : subItem.labelMs}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className="block px-4 py-3 font-medium text-gray-700 dark:text-gray-300 hover:bg-red-50 dark:hover:bg-gray-700 hover:text-red-600 dark:hover:text-red-400 rounded-lg transition-all duration-300"
                      onClick={() => setIsOpen(false)}
                    >
                      {language === "en" ? item.label : item.labelMs}
                    </Link>
                  )}
                </div>
              ))}

              {/* Font Size Adjuster - Mobile */}
              <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                <div className="px-4 mb-2">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Font Size</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <button
                    onClick={decreaseFontSize}
                    disabled={fontSize <= MIN_FONT_SIZE}
                    className="flex-1 px-4 py-3 text-sm font-bold text-gray-700 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400 hover:bg-red-50 dark:hover:bg-gray-700 rounded-lg transition-all duration-300 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:text-gray-700 dark:disabled:hover:text-gray-300"
                    aria-label="Decrease font size"
                  >
                    A-
                  </button>
                  <button
                    onClick={resetFontSize}
                    className="flex-1 px-4 py-3 text-sm font-bold text-gray-700 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400 hover:bg-red-50 dark:hover:bg-gray-700 rounded-lg transition-all duration-300"
                    aria-label="Reset font size"
                  >
                    A
                  </button>
                  <button
                    onClick={increaseFontSize}
                    disabled={fontSize >= MAX_FONT_SIZE}
                    className="flex-1 px-4 py-3 text-sm font-bold text-gray-700 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400 hover:bg-red-50 dark:hover:bg-gray-700 rounded-lg transition-all duration-300 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:text-gray-700 dark:disabled:hover:text-gray-300"
                    aria-label="Increase font size"
                  >
                    A+
                  </button>
                </div>
              </div>

              {/* Dark Mode Toggle - Mobile */}
              <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                <button
                  onClick={toggleDarkMode}
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 text-gray-700 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400 hover:bg-red-50 dark:hover:bg-gray-700 rounded-lg transition-all duration-300"
                  aria-label="Toggle dark mode"
                >
                  {isDarkMode ? (
                    <>
                      <Sun size={20} />
                      <span className="font-medium">Light Mode</span>
                    </>
                  ) : (
                    <>
                      <Moon size={20} />
                      <span className="font-medium">Dark Mode</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-10px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </header>
  );
}
