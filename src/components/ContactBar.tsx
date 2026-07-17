export default function ContactBar() {
  return (
    <section className="relative bg-brand-blue py-12 text-white border-t border-white/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center divide-y md:divide-y-0 md:divide-x divide-white/10">
          <div className="flex items-center gap-4 py-4 md:py-0 md:px-6 justify-center md:justify-start">
            <span className="w-12 h-12 rounded-full bg-brand-red flex items-center justify-center text-white shadow-md flex-shrink-0">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
            </span>
            <div>
              <span className="text-[10px] font-bold text-white/80 uppercase tracking-widest block">Write To Us</span>
              <a href="mailto:info@hiloheatingandair.com" className="text-sm font-bold text-white hover:text-brand-red transition-colors">info@hiloheatingandair.com</a>
            </div>
          </div>
          <div className="flex items-center gap-4 py-4 md:py-0 md:px-6 justify-center md:justify-start">
            <span className="w-12 h-12 rounded-full bg-brand-red flex items-center justify-center text-white shadow-md flex-shrink-0">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            </span>
            <div>
              <span className="text-[10px] font-bold text-white/80 uppercase tracking-widest block">Call Direct 24/7</span>
              <a href="tel:+17148535534" className="text-sm font-bold text-white hover:text-brand-red transition-colors">(714) 853-5534</a>
            </div>
          </div>
          <div className="flex items-center gap-4 py-4 md:py-0 md:px-6 justify-center md:justify-start">
            <span className="w-12 h-12 rounded-full bg-brand-red flex items-center justify-center text-white shadow-md flex-shrink-0">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
            </span>
            <div>
              <span className="text-[10px] font-bold text-white/80 uppercase tracking-widest block">Headquarters Office</span>
              <span className="text-sm font-bold text-white block leading-tight">8131 Electric Ave Stanton, CA 90680</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
