const reviews = [
  {
    name: 'Michael R.',
    initial: 'M',
    text: 'Fast response, honest pricing, and the technician fixed our AC the same day. Highly recommend.',
  },
  {
    name: 'Sarah T.',
    initial: 'S',
    text: 'Professional local HVAC company that actually repairs before trying to replace everything.',
  },
  {
    name: 'Daniel K.',
    initial: 'D',
    text: 'Very responsive during an emergency HVAC issue. Great communication and clean installation.',
  },
];

export default function Reviews() {
  return (
    <section id="reviews" className="py-16 sm:py-24 bg-brand-blue/5 border-t border-brand-blue/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs font-bold text-brand-red uppercase tracking-widest bg-brand-red/10 px-3.5 py-1 rounded-full">Customer Reviews</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold"><span className="text-brand-blue">Trusted By </span><span className="text-brand-red">Homeowners</span></h2>
          <div className="w-24 h-1.5 bg-brand-red rounded mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((r) => (
            <div key={r.name} className="bg-brand-blue text-white rounded-2xl p-6 sm:p-8 shadow-lg flex flex-col justify-between border-b-4 border-brand-red group">
              <div className="space-y-4">
                <div className="flex text-brand-red gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                  ))}
                </div>
                <p className="text-xs sm:text-sm font-medium italic leading-relaxed text-white/95">"{r.text}"</p>
              </div>
              <div className="flex items-center gap-3 mt-6 pt-4 border-t border-white/10">
                <div className="w-10 h-10 rounded-full bg-brand-red flex items-center justify-center font-extrabold text-sm text-white shadow">{r.initial}</div>
                <div>
                  <h4 className="text-xs font-bold text-white">{r.name}</h4>
                  <span className="text-[10px] text-white/85 font-semibold block">Verified Customer</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
