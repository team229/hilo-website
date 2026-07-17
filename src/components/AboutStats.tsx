const stats = [
  { value: '10+', label: 'Years of Experience' },
  { value: '5K+', label: 'Satisfied Customers' },
  { value: '100%', label: 'Commitment to Quality' },
];

export default function AboutStats() {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 flex justify-center relative">
            <div className="relative w-full max-w-md rounded-2xl overflow-hidden shadow-2xl border-4 border-brand-blue/10">
              <img src="/images/hilo-hvac-services.jpg" alt="HiLo HVAC Experts Team" className="w-full h-auto block" width="911" height="463" loading="lazy" />
              <div className="absolute bottom-8 left-8 right-8 bg-white border border-brand-blue/10 rounded-xl p-5 shadow-lg flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-brand-red flex items-center justify-center text-white font-black text-lg shadow-md flex-shrink-0 animate-pulse">OK</div>
                <div>
                  <p className="text-xs font-black uppercase text-brand-red tracking-wider">Approved Partner</p>
                  <span className="text-[10px] text-brand-blue font-semibold block mt-0.5">Top-rated home comfort provider in Southern California.</span>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="text-xs font-bold text-brand-red uppercase tracking-wider block mb-1">About Us</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-blue leading-tight uppercase">
                Expert Solutions.<br />
                <span className="text-brand-red">Year After Year.</span>
              </h2>
            </div>
            <div className="w-16 h-1 bg-brand-red rounded"></div>
            <p className="text-sm text-slate-600 font-medium leading-relaxed">
              With over a decade of hands-on expertise, our team provides seamless system updates, prompt repairs, and verified cooling operations designed to withstand the hottest summer months.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              {stats.map((s) => (
                <div key={s.label} className="bg-brand-blue/5 border border-brand-blue/10 rounded-xl p-4 text-center flex flex-col items-center justify-center">
                  <div className="text-2xl font-extrabold text-brand-red">{s.value}</div>
                  <div className="text-[10px] font-bold text-slate-600 uppercase tracking-widest mt-1">{s.label}</div>
                </div>
              ))}
            </div>
            <div className="bg-white border-2 border-brand-blue/10 text-brand-blue p-5 rounded-xl shadow-lg flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-brand-red">2026 Milestone</span>
                <p className="text-lg font-bold leading-tight">Another Great Year!</p>
                <p className="text-xs text-slate-600 font-medium mt-0.5">Voted the best customer-centric service team.</p>
              </div>
              <a href="#schedule-service" className="bg-brand-red text-white text-xs font-extrabold px-6 py-4 rounded-lg uppercase tracking-wider shadow-lg hover:bg-brand-blue transition-colors flex-shrink-0">Book Us Now</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
