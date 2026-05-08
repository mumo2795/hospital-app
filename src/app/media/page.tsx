"use client";

import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const mediaItems = [
  {
    id: 1,
    src: "/images/Media hosp app/fa_20131012_1141150899.jpg",
    title: "Hospital Facility",
    category: "Infrastructure",
  },
  {
    id: 2,
    src: "/images/Media hosp app/fa_20131012_1338616766.jpg",
    title: "Medical Equipment",
    category: "Facilities",
  },
  {
    id: 3,
    src: "/images/Media hosp app/fa_20131012_1382202935.jpg",
    title: "Patient Care",
    category: "Services",
  },
  {
    id: 4,
    src: "/images/Media hosp app/fa_20131012_1384565841.jpg",
    title: "Hospital Ward",
    category: "Infrastructure",
  },
  {
    id: 5,
    src: "/images/Media hosp app/fa_20131012_1820143666.jpg",
    title: "Medical Laboratory",
    category: "Facilities",
  },
  {
    id: 6,
    src: "/images/Media hosp app/fa_20131012_2073133565.jpg",
    title: "Healthcare Services",
    category: "Services",
  },
  {
    id: 7,
    src: "/images/Media hosp app/fasiliti_baru_1_20180122_1586292487.jpg",
    title: "New Facility Wing",
    category: "Infrastructure",
  },
  {
    id: 8,
    src: "/images/Media hosp app/fasiliti_baru_1_20180122_1861093415.jpg",
    title: "Modern Medical Center",
    category: "Facilities",
  },
  {
    id: 9,
    src: "/images/Media hosp app/fasiliti_baru_3_20180122_1729166115.jpg",
    title: "Advanced Technology",
    category: "Technology",
  },
  {
    id: 10,
    src: "/images/Media hosp app/fasiliti_baru_4_20180122_2023069180.jpg",
    title: "Patient Comfort",
    category: "Services",
  },
];

const categories = ["All", "Infrastructure", "Facilities", "Services", "Technology"];

export default function MediaPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const filteredItems =
    selectedCategory === "All"
      ? mediaItems
      : mediaItems.filter((item) => item.category === selectedCategory);

  const handleKeyDown = (e: KeyboardEvent) => {
    if (selectedImage !== null) {
      if (e.key === "ArrowLeft") {
        setSelectedImage((prev) => {
          if (prev === null) return null;
          return prev === 0 ? filteredItems.length - 1 : prev - 1;
        });
      } else if (e.key === "ArrowRight") {
        setSelectedImage((prev) => {
          if (prev === null) return null;
          return prev === filteredItems.length - 1 ? 0 : prev + 1;
        });
      } else if (e.key === "Escape") {
        setSelectedImage(null);
      }
    }
  };

  const openLightbox = (index: number) => {
    setSelectedImage(index);
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.removeEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "unset";
  };

  const goToPrevious = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? filteredItems.length - 1 : selectedImage - 1);
    }
  };

  const goToNext = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === filteredItems.length - 1 ? 0 : selectedImage + 1);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900">
      <Navigation />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-r from-red-50 via-white to-red-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h1 className="text-5xl font-bold mb-4 text-gray-900 dark:text-gray-100">
              Media Gallery
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Explore our hospital's facilities, advanced medical equipment, and commitment to
              exceptional healthcare through our photo collection.
            </p>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 bg-white dark:bg-gray-900 sticky top-[73px] z-40 border-b border-gray-200 dark:border-gray-700">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                    selectedCategory === category
                      ? "bg-red-600 text-white shadow-lg transform scale-105"
                      : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-16 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredItems.map((item, index) => (
                <div
                  key={item.id}
                  className="group relative overflow-hidden rounded-xl shadow-lg cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                  onClick={() => openLightbox(index)}
                >
                  <div className="aspect-square relative">
                    <Image
                      src={item.src}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <p className="text-white font-semibold text-lg">{item.title}</p>
                      <p className="text-gray-300 text-sm">{item.category}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredItems.length === 0 && (
              <div className="text-center py-20">
                <p className="text-gray-600 dark:text-gray-400 text-xl">
                  No media found in this category.
                </p>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-white hover:text-gray-300 transition z-50"
          >
            <X size={40} />
          </button>

          {/* Navigation Arrows */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              goToPrevious();
            }}
            className="absolute left-6 text-white hover:text-gray-300 transition z-50"
          >
            <ChevronLeft size={40} />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              goToNext();
            }}
            className="absolute right-6 text-white hover:text-gray-300 transition z-50"
          >
            <ChevronRight size={40} />
          </button>

          {/* Image Container */}
          <div
            className="relative max-w-5xl max-h-[90vh] mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={filteredItems[selectedImage].src}
              alt={filteredItems[selectedImage].title}
              width={1200}
              height={800}
              className="max-w-full max-h-[80vh] object-contain rounded-lg"
            />
            <div className="text-center mt-4">
              <h3 className="text-white text-2xl font-bold">
                {filteredItems[selectedImage].title}
              </h3>
              <p className="text-gray-400 mt-2">
                {selectedImage + 1} / {filteredItems.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}