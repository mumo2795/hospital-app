import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900">
      <Navigation />
      <main className="flex-1">
      <Hero />
      <Services />
      <About />
      <Contact />
      </main>
      <Footer />
    </div>
  );
}
