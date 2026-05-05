export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6 text-gray-900">
              About Hospital Tengku Ampuan Rahimah
            </h2>
            <p className="text-gray-600 mb-4">
              Founded with a commitment to excellence in healthcare, our hospital
              serves the community with state-of-the-art medical facilities and
              highly qualified healthcare professionals.
            </p>
            <p className="text-gray-600 mb-4">
              We prioritize patient safety, comfort, and optimal outcomes in every
              aspect of our services.
            </p>
            <p className="text-gray-600">
              Our mission is to provide accessible, affordable, and quality
              healthcare services to all patients.
            </p>
          </div>

          <div className="bg-blue-100 rounded-lg p-8 h-80 flex items-center justify-center">
            <div className="text-center">
              <h3 className="text-5xl font-bold text-blue-600 mb-2">25+</h3>
              <p className="text-gray-700 mb-8">Years of Service</p>
              <div className="grid grid-cols-2 gap-4 text-left">
                <div>
                  <p className="text-2xl font-bold text-blue-600">500+</p>
                  <p className="text-sm text-gray-600">Staff Members</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-blue-600">50K+</p>
                  <p className="text-sm text-gray-600">Happy Patients</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
