export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-white py-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
          Quality Healthcare.
        </h1>
        <h2 className="text-4xl md:text-5xl font-bold text-blue-600 mb-6">
          Personalized.
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
          Hospital Tengku Ampuan Rahimah provides comprehensive healthcare
          services with a commitment to excellence and patient-centered care.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition">
            Book Appointment
          </button>
          <button className="bg-white border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-lg font-semibold transition">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}
