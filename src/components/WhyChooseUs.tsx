const reasons = [
  { icon: '⚡', title: 'Same-Day Service', desc: 'Fast dispatch for all HVAC repairs and installations.' },
  { icon: '🔧', title: 'Expert Technicians', desc: 'EPA-certified, fully insured professionals.' },
  { icon: '💰', title: 'Free Diagnostics', desc: 'Diagnostic fee waived with approved repair.' },
  { icon: '🏠', title: 'Respect for Your Home', desc: 'Clean, professional service every time.' },
  { icon: '📞', title: '24/7 Emergency', desc: 'Round-the-clock emergency HVAC service.' },
  { icon: '💳', title: 'Financing Available', desc: 'Flexible payment options for every budget.' },
];

export default function WhyChooseUs() {
  return (
    <section className="py-16 sm:py-24 bg-brand-blue relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/2 translate-y-1/2"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <span className="inline-block bg-white/10 text-white text-sm font-semibold px-4 py-1.5 rounded-full mb-4">Why Choose Us</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">The HiLo Difference</h2>
          <p className="text-white/80 max-w-2xl mx-auto">Family owned and operated, we treat your home like our own. Quality HVAC service with upfront pricing and no hidden fees.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((r) => (
            <div key={r.title} className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/15 transition-all">
              <div className="text-3xl mb-4">{r.icon}</div>
              <h3 className="text-lg font-bold text-white mb-2">{r.title}</h3>
              <p className="text-sm text-white/75">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
