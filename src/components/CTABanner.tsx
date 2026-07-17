export default function CTABanner() {
  return (
    <section className="bg-white text-brand-blue py-12 relative overflow-hidden border-y border-brand-blue/10">
      <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-brand-red/5 -skew-x-12 transform origin-top-right"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
          <div className="max-w-2xl text-center lg:text-left space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-blue">Need Fast HVAC Service?</h2>
            <p className="text-sm text-slate-600 font-medium">Call now for same-day HVAC repair, emergency service, free estimates, and fast dispatch throughout our coverage areas.</p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <a href="tel:7148535534" className="w-full sm:w-auto text-center bg-brand-red text-white font-extrabold px-6 py-4 rounded-lg shadow-lg hover:bg-brand-blue transition-all duration-300">Call (714) 853-5534</a>
            <a href="#schedule-service" className="w-full sm:w-auto text-center bg-brand-red text-white font-extrabold px-6 py-3.5 rounded-lg shadow-lg hover:bg-brand-blue transition-all duration-300">Request Free Estimate</a>
          </div>
        </div>
      </div>
    </section>
  );
}
