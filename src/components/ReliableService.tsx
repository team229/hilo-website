const features = [
  {
    title: 'Free Diagnostic with Repair',
    desc: 'We waive our regular diagnostic service fee entirely when you approve any system repair.',
    badge: 'Special Deal',
  },
  {
    title: 'Fast Service Scheduling',
    desc: 'Book appointments effortlessly with fast, flexible windows built directly around your busy timeline.',
  },
  {
    title: 'Clear Upfront Pricing',
    desc: 'No hidden fees, surprises, or confusing upcharges. Know your exact quotes before any work begins.',
  },
  {
    title: 'Reliable System Repairs',
    desc: 'Expert execution and rigorous technical testing procedures that protect long-term equipment function.',
  },
];

export default function ReliableService() {
  return (
    <section className="py-16 sm:py-24 bg-brand-blue/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="text-xs font-bold text-brand-red uppercase tracking-wider block mb-1">The Trusted Choice</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-blue leading-tight">Highly Reliable Heating &amp; Air Conditioning Service</h2>
            </div>
            <p className="text-sm text-brand-blue/85 font-medium max-w-xl">We're proud to serve our community and provide our clients with the most exceptional customer service.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {features.map((f) => (
                <div key={f.title} className="bg-white border border-brand-blue/10 rounded-xl p-5 shadow-sm space-y-2 relative overflow-hidden group">
                  {f.badge && (
                    <div className="absolute top-0 right-0 bg-brand-red text-white text-[9px] font-extrabold uppercase tracking-widest px-2.5 py-1 rounded-bl">{f.badge}</div>
                  )}
                  <h3 className="text-base font-bold text-brand-blue pt-1.5 group-hover:text-brand-red transition-colors">{f.title}</h3>
                  <p className="text-xs text-slate-600 font-semibold leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-5 flex flex-col space-y-6">
            <div className="relative bg-white border border-brand-blue/10 rounded-2xl overflow-hidden shadow-lg p-3">
              <div className="relative rounded-xl overflow-hidden aspect-[4/3] bg-brand-blue">
                <img src="/images/hilo-air-conditioning.jpg" alt="Indoor HVAC Service" className="object-cover w-full h-full opacity-90" />
                <div className="absolute top-4 left-4 bg-brand-blue text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded shadow-md flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-red"></span>Certified Mechanics
                </div>
              </div>
              <div className="pt-4 px-2 pb-2 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-t border-brand-blue/5 mt-3">
                <div>
                  <span className="text-[10px] font-bold text-brand-red uppercase tracking-wider block">Need Rapid Dispatch?</span>
                  <h4 className="text-sm font-extrabold text-brand-blue">Same-Day Fast Repair</h4>
                </div>
                <a href="tel:+17148535534" className="bg-brand-red text-white text-xs font-extrabold px-4 py-2.5 rounded shadow hover:bg-brand-blue transition-colors flex-shrink-0">Call Now</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
