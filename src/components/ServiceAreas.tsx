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
  { name: 'Air Conditioning', href: '/service/air-conditioning/', icon: 'snow' },
  { name: 'Heating', href: '/service/heating/', icon: 'flame' },
  { name: 'HVAC Maintenance', href: '/service/hvac-services/', icon: 'wrench' },
  { name: 'Indoor Air Quality', href: '/service/indoor-air-quality/', icon: 'air' },
];

function ServiceIcon({ type }: { type: string }) {
  switch (type) {
    case 'snow':
      return (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18m-4.5-9h9M5.636 5.636l12.728 12.728M5.636 18.364L18.364 5.636" />
        </svg>
      );
    case 'flame':
      return (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 23c-4.97 0-9-3.58-9-8 0-3.19 2.13-6.12 4-8 0 0 .5 3.5 3 5 0-5 4-9 5-11 0 0 1 2 2 4 2-2 4-5 5-7 0 0 2 4 2 7 2-2 4-4 5-5 0 0 1 4-1 7 2 2 3 5 3 8 0 4.42-4.03 8-9 8z" />
        </svg>
      );
    case 'wrench':
      return (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.384 5.384a2.025 2.025 0 01-2.864-2.864l5.384-5.384m2.864 2.864L17 10.5m-5.58 4.67l-2.121 2.121m7.071-7.071a4.5 4.5 0 00-6.364 0L6.343 9.879a4.5 4.5 0 000 6.364l.707.707" />
        </svg>
      );
    case 'air':
      return (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      );
    default:
      return null;
  }
}

export default function ServiceAreas() {
  return (
    <section id="service-areas" className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="bg-brand-blue/5 border-y border-brand-blue/10 mb-12 sm:mb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-blue">Need Fast HVAC Service?</h2>
              <p className="text-sm text-slate-600 mt-1">Call now for same-day HVAC repair, emergency service, free estimates, and fast dispatch throughout our coverage areas.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <a href="tel:+17148535534" className="flex items-center gap-2 bg-brand-red text-white font-bold px-6 py-3 rounded-lg hover:bg-brand-red/90 transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" /></svg>
                Call (714) 853-5534
              </a>
              <a href="#contact" className="flex items-center gap-2 bg-brand-blue text-white font-bold px-6 py-3 rounded-lg hover:bg-brand-blue/90 transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" /></svg>
                Request Free Estimate
              </a>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="text-xs font-bold text-brand-red uppercase tracking-widest block mb-2">Local HVAC Company</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-blue leading-tight">
                Proudly Serving<br />Orange County &amp; <span className="text-brand-red">Los Angeles</span>
              </h2>
              <div className="w-16 h-1 bg-brand-red rounded mt-4"></div>
            </div>
            <p className="text-sm text-slate-600 font-medium max-w-md">We dispatch technicians daily across our service area to ensure your emergency repair needs are met promptly.</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {cities.map((city) => (
                <a
                  key={city.slug}
                  href={`/service-areas/${city.slug}/`}
                  className="flex items-center gap-2 border border-brand-blue/15 py-3 px-3 rounded-lg font-bold text-sm transition-all shadow-sm hover:border-brand-blue hover:bg-brand-blue/5 text-brand-blue bg-white hover:shadow-md hover:-translate-y-0.5"
                >
                  <svg className="w-4 h-4 text-brand-red shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" /></svg>
                  {city.name}
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl min-h-[400px] sm:min-h-[480px]">
              <img
                src="/images/team.jpg"
                alt="HiLo Heating & Air service van and technician"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-brand-blue/30 to-transparent"></div>
            </div>
            <div className="absolute right-0 top-1/2 -translate-y-1/2 bg-white rounded-2xl shadow-2xl p-6 sm:p-8 w-[260px] sm:w-[300px]">
              <h3 className="text-lg font-bold text-brand-blue mb-5 pb-3 border-b border-brand-blue/10">Popular Service Requests</h3>
              <div className="space-y-1">
                {popularServices.map((svc) => (
                  <a key={svc.name} href={svc.href} className="flex justify-between items-center py-3 px-2 rounded-lg font-bold text-sm text-brand-blue hover:bg-brand-blue/5 transition-colors group">
                    <div className="flex items-center gap-3">
                      <span className="text-brand-red"><ServiceIcon type={svc.icon} /></span>
                      <span>{svc.name}</span>
                    </div>
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
