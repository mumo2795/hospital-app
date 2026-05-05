"use client";

import { Heart, Stethoscope, Brain, Eye, Zap, Pill } from "lucide-react";

const services = [
  {
    icon: Stethoscope,
    title: "General Practice",
    description:
      "Comprehensive healthcare services for all ages with experienced medical professionals.",
  },
  {
    icon: Heart,
    title: "Cardiology",
    description:
      "Specialized heart and cardiovascular disease treatment and prevention.",
  },
  {
    icon: Brain,
    title: "Neurology",
    description:
      "Expert diagnosis and treatment of neurological disorders and conditions.",
  },
  {
    icon: Eye,
    title: "Ophthalmology",
    description: "Complete eye care services including surgery and diagnostics.",
  },
  {
    icon: Zap,
    title: "Emergency Services",
    description: "24/7 emergency response team ready for urgent medical needs.",
  },
  {
    icon: Pill,
    title: "Pharmacy",
    description:
      "Full-service pharmacy with prescription fulfillment and health consultation.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">
          Our Services
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          We provide a wide range of medical services to meet all your
          healthcare needs.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition duration-300"
              >
                <Icon className="text-blue-600 mb-4" size={40} />
                <h3 className="text-xl font-semibold mb-2 text-gray-900">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
