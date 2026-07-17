import { useState } from 'react';

const cities = [
  'Anaheim', 'Fullerton', 'Orange', 'Irvine', 'Santa Ana', 'Los Angeles',
];

const popularServices = [
  { name: 'Air Conditioning', href: '/service/air-conditioning/' },
  { name: 'Heating', href: '/service/heating/' },
  { name: 'HVAC Maintenance', href: '/service/hvac-services/' },
  { name: 'Indoor Air Quality', href: '/service/indoor-air-quality/' },
];

export default function ServiceAreas() {
  const [selectedCity, setSelectedCity] = useState<string | null>(null);

  return (
    <section id="service-areas" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="text-xs font-bold text-brand-red uppercase tracking-wider block mb-1">Local HVAC Company</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-blue leading-tight">Proudly Serving Orange County &amp; Los Angeles</h2>
            </div>
            <p className="text-sm text-slate-600 font-semibold max-w-xl">We dispatch technicians daily across our service area to ensure your emergency repair needs are met promptly.</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {cities.map((city) => (
                <button
                  key={city}
                  onClick={() => setSelectedCity(city)}
                  className={`border text-center py-4 px-3 rounded-lg font-bold text-sm transition-all shadow-sm ${
                    selectedCity === city
                      ? 'border-brand-red bg-brand-red/10 text-brand-red'
                      : 'border-brand-blue/15 hover:border-brand-blue text-brand-blue bg-white hover:bg-brand-blue/5'
                  }`}
                >
                  {city}
                </button>
              ))}
            </div>
            {selectedCity && (
              <div className="bg-brand-blue/5 border-l-4 border-brand-red p-4 rounded-r-lg animate-fade-in">
                <h4 className="text-sm font-extrabold text-brand-blue">{selectedCity} Dispatch Alert</h4>
                <p className="text-xs text-slate-600 font-medium mt-1">Excellent news! A certified HiLo technician is currently near {selectedCity}. Submit a request or call now to book your same-day repair with no extra travel fees.</p>
              </div>
            )}
          </div>
          <div className="lg:col-span-5">
            <div className="bg-white border-2 border-brand-blue/10 rounded-2xl p-6 sm:p-8 shadow-md">
              <h3 className="text-lg font-bold text-brand-blue mb-6 pb-3 border-b border-brand-blue/15">Popular Service Requests</h3>
              <div className="space-y-3.5">
                {popularServices.map((svc) => (
                  <a key={svc.name} href={svc.href} className="flex justify-between items-center bg-brand-blue/5 hover:bg-brand-blue/10 p-4 rounded-lg font-bold text-sm text-brand-blue transition-colors group">
                    <span>{svc.name}</span>
                    <svg className="w-4 h-4 text-brand-red group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
