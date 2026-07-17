const cities = [
  { name: 'Anaheim', slug: 'anaheim' },
  { name: 'Costa Mesa', slug: 'costa-mesa' },
  { name: 'Fullerton', slug: 'fullerton' },
  { name: 'Garden Grove', slug: 'garden-grove' },
  { name: 'Irvine', slug: 'irvine' },
  { name: 'Laguna Hills', slug: 'laguna-hills' },
  { name: 'Los Angeles', slug: 'los-angeles' },
  { name: 'Newport Beach', slug: 'newport-beach' },
  { name: 'Orange', slug: 'orange' },
  { name: 'Orange County', slug: 'orange-county' },
  { name: 'Rancho Santa Margarita', slug: 'rancho-santa-margarita' },
  { name: 'Santa Ana', slug: 'santa-ana' },
  { name: 'Stanton', slug: 'stanton' },
];

const popularServices = [
  { name: 'Air Conditioning', href: '/service/air-conditioning/' },
  { name: 'Heating', href: '/service/heating/' },
  { name: 'HVAC Maintenance', href: '/service/hvac-services/' },
  { name: 'Indoor Air Quality', href: '/service/indoor-air-quality/' },
];

export default function ServiceAreas() {
  return (
    <section id="service-areas" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="text-xs font-bold text-brand-red uppercase tracking-wider block mb-1">Local HVAC Company</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-blue leading-tight">Proudly Serving Orange County &amp; Los Angeles</h2>
            </div>
            <p className="text-sm text-slate-600 font-semibold max-w-xl">We dispatch technicians daily across our service area. Click your city for dedicated HVAC services.</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {cities.map((city) => (
                <a
                  key={city.slug}
                  href={`/service-areas/${city.slug}/`}
                  className="border border-brand-blue/15 text-center py-4 px-3 rounded-lg font-bold text-sm transition-all shadow-sm hover:border-brand-blue hover:bg-brand-blue/5 text-brand-blue bg-white hover:shadow-md hover:-translate-y-0.5"
                >
                  {city.name}
                </a>
              ))}
            </div>
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
