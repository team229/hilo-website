import { Clock, ShieldCheck, Banknote, Check, Phone } from 'lucide-react';

export default function HeroSection() {
  return (
    <section
      className="relative bg-[#1f2d3d] text-white min-h-screen overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: 'linear-gradient(to right, rgba(0, 0, 0, 0.85) 40%, rgba(0, 0, 0, 0.3) 100%), url(/images/hero-bg-hilo.jpg)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20 lg:pt-40 lg:pb-28">
        <div className="max-w-3xl">

          <div className="inline-flex items-center space-x-2 bg-[#cc0000] text-white px-4 py-2 rounded-md font-bold tracking-wider text-xs uppercase w-max mb-6 shadow-md">
            <ShieldCheck className="w-4 h-4" strokeWidth={2.5} />
            <span>Trusted Local HVAC Company</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.1] mb-6 tracking-tight">
            Orange County <br />
            HVAC Service <br />
            <span className="text-[#cc0000]">You Can Trust</span>
          </h1>

          <p className="text-base text-gray-200 max-w-xl mb-8 leading-relaxed font-medium">
            Family owned & operated HVAC company providing same-day AC repair, heating service, mini split installation, and emergency HVAC repairs.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl mb-8">
            {[
              { icon: <Clock className="w-5 h-5" strokeWidth={2.5} />, label: 'Same-Day Service' },
              { icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>, label: 'Emergency Repair' },
              { icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12a7.5 7.5 0 0015 0m-15 0a7.5 7.5 0 1115 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077l1.41-.513m14.095-5.128l1.41-.513M5.106 17.785l1.15-.827m11.379-8.16l1.15-.827M8.14 21.27l.707-.866m10.306-7.538l.707-.866M12 21v-1.5m0-13.5V3" /></svg>, label: 'EPA Certified' },
              { icon: <Banknote className="w-5 h-5" strokeWidth={2.5} />, label: 'Financing Available' },
              { icon: <Check className="w-5 h-5" strokeWidth={2.5} />, label: '24/7 Emergency Service' },
              { icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>, label: 'Respect for your Home' },
            ].map((tag, i) => (
              <div key={i} className="bg-white/95 text-gray-900 rounded-lg py-3 px-4 flex items-center space-x-3 shadow-md backdrop-blur-sm">
                <span className="text-[#cc0000] flex-shrink-0">{tag.icon}</span>
                <span className="font-bold text-sm sm:text-base tracking-wide">{tag.label}</span>
              </div>
            ))}
          </div>

          <div>
            <a href="tel:+17148535534" className="inline-flex items-center space-x-3 bg-[#cc0000] hover:bg-[#b30000] text-white font-extrabold px-8 py-4 rounded-xl transition duration-200 shadow-lg group">
              <Phone className="w-5 h-5 fill-current" />
              <span>Call For Same Day Service</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
