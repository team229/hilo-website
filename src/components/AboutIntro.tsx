export default function AboutIntro() {
  const checks = [
    '10+ years in business',
    'Same-Day service',
    'Family-owned values',
    '100% Satisfaction Focus',
  ];

  return (
    <section className="py-16 sm:py-24 bg-white border-y border-brand-blue/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-brand-blue leading-tight uppercase">
              Exceptional Air Conditioning<br className="hidden sm:inline" />
              &amp; Heating Service<br />
              <span className="text-brand-red">With Integrity</span>
            </h2>
            <div className="w-20 h-1.5 bg-brand-red rounded"></div>
            <p className="text-xs sm:text-sm font-extrabold tracking-widest text-brand-blue/60 uppercase">
              Serving Anaheim and Orange County, HiLo Heating &amp; Air offers repair, maintenance, and installation for home HVAC systems.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {checks.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-brand-red/10 flex items-center justify-center text-brand-red flex-shrink-0">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                  </span>
                  <span className="font-bold text-sm text-brand-blue">{item}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a href="/about-us/" className="bg-brand-red text-white text-center font-bold px-7 py-4 rounded hover:bg-brand-blue transition-colors uppercase tracking-wider text-xs">About Us</a>
              <a href="#reviews" className="border-2 border-brand-blue text-brand-blue text-center font-bold px-7 py-4 rounded hover:bg-brand-blue hover:text-white transition-all uppercase tracking-wider text-xs">Read Our Reviews</a>
            </div>
          </div>
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm aspect-square">
              <div className="absolute inset-0 bg-brand-red clip-hexagon transform scale-105"></div>
              <div className="absolute inset-0 bg-white clip-hexagon transform scale-[1.02]"></div>
              <div className="absolute inset-0 bg-brand-blue clip-hexagon overflow-hidden shadow-xl">
                <img src="/images/hvac-maintenance.jpg" alt="HiLo AC technician performing HVAC maintenance in Anaheim, CA" width="600" height="750" loading="lazy" className="object-cover w-full h-full brightness-95 hover:scale-110 transition-transform duration-500" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
