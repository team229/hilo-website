export default function CTASection() {
  return (
    <section className="py-16 sm:py-20 bg-gradient-to-r from-brand-red to-red-700 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border-2 border-white rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 border-2 border-white rounded-full"></div>
      </div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Ready to Get Started?</h2>
        <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
          Contact us today for a free estimate. Our certified technicians are ready to help with all your HVAC needs.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="tel:+17148535534" className="inline-block bg-white text-brand-red font-bold px-8 py-4 rounded-xl text-lg hover:bg-gray-100 transition shadow-xl">
            📞 (714) 853-5534
          </a>
          <a href="/contact-us/" className="inline-block bg-transparent border-2 border-white text-white font-bold px-8 py-4 rounded-xl text-lg hover:bg-white/10 transition">
            📅 Schedule Service
          </a>
        </div>
      </div>
    </section>
  );
}
