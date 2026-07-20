export default function ReliableService() {
  return (
    <section className="py-16 sm:py-24 bg-brand-blue/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="text-xs font-bold text-brand-red uppercase tracking-wider block mb-1">Why HiLo Heating & Air</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-blue leading-tight">Reliable Service When You Need It Most</h2>
            </div>
            <p className="text-sm text-brand-blue/85 font-medium max-w-xl">Since 2000, we've been providing honest, upfront HVAC services to homeowners across Orange County. No pressure, no hidden fees — just reliable workmanship.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {[
                { title: 'Licensed & Insured', desc: 'Fully licensed and insured for your protection. Our technicians are EPA certified and background checked.' },
                { title: 'Same-Day Service', desc: 'Most calls get a technician out the same day. We carry common parts so most repairs are handled in one visit.' },
                { title: 'Upfront Pricing', desc: 'Know the cost before any work begins. No surprise charges, no hidden fees, no emergency markups.' },
                { title: 'Satisfaction Guaranteed', desc: 'Every repair and installation is backed by our warranty. If it is not right, we make it right.' },
              ].map((f) => (
                <div key={f.title} className="bg-white border border-brand-blue/10 rounded-xl p-5 shadow-sm space-y-2 relative overflow-hidden group">
                  <h3 className="text-base font-bold text-brand-blue pt-1.5 group-hover:text-brand-red transition-colors">{f.title}</h3>
                  <p className="text-xs text-slate-600 font-semibold leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-5 flex flex-col space-y-6">
            <div className="relative bg-white border border-brand-blue/10 rounded-2xl overflow-hidden shadow-lg p-3">
              <div className="relative rounded-xl overflow-hidden aspect-[4/3] bg-brand-blue">
                <img src="/images/hilo-air-conditioning.jpg" alt="HVAC Service" className="object-cover w-full h-full opacity-90" />
                <div className="absolute top-4 left-4 bg-brand-blue text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded shadow-md flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-red"></span>Certified Mechanics
                </div>
              </div>
              <div className="pt-4 px-2 pb-2 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-t border-brand-blue/5 mt-3">
                <div>
                  <span className="text-[10px] font-bold text-brand-red uppercase tracking-wider block">Need Help Now?</span>
                  <h4 className="text-sm font-extrabold text-brand-blue">Same-Day Dispatch Available</h4>
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
