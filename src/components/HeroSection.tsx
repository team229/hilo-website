export default function HeroSection() {
  const features = [
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.384 3.18A1 1 0 014.78 17.4V5.6a1 1 0 011.26-.95l5.384 3.18a1 1 0 010 1.74z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12c0 4.14-3.36 7.5-7.5 7.5S4.5 16.14 4.5 12 7.86 4.5 12 4.5" />
        </svg>
      ),
      title: 'Free Diagnostic with Repair',
      description: 'We waive our diagnostic fee when you approve any repair.',
      hasBadge: true,
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
        </svg>
      ),
      title: 'Fast Service Scheduling',
      description: 'Book appointments with flexible windows around your timeline.',
      hasBadge: false,
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Clear Upfront Pricing',
      description: 'No hidden fees. Know your exact quotes before work begins.',
      hasBadge: false,
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
        </svg>
      ),
      title: 'Reliable System Repairs',
      description: 'Expert execution protecting long-term equipment function.',
      hasBadge: false,
    },
  ];

  return (
    <section className="relative bg-white py-10 sm:py-14 lg:py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Content */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <span className="text-brand-red text-sm sm:text-base font-bold tracking-wider uppercase mb-4">
              The Trusted Choice
            </span>
            
            <h1 className="text-4xl sm:text-5xl lg:text-[3.25rem] font-bold tracking-tight leading-[1.15] text-[#1a2332] mb-5">
              Highly Reliable<br />
              Heating & Air<br />
              <span className="text-brand-red">Conditioning Service</span>
            </h1>
            
            <div className="w-12 h-[3px] bg-brand-red mb-6"></div>
            
            <p className="text-base sm:text-lg text-gray-600 max-w-xl leading-relaxed mb-8">
              We're proud to serve our community and provide our clients with the most exceptional customer service.
            </p>

            {/* Feature Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className="relative bg-white border border-gray-100 rounded-xl p-4 shadow-[0_2px_10px_rgba(0,0,0,0.05)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.08)] transition-shadow duration-300"
                >
                  {feature.hasBadge && (
                    <span className="absolute -top-2.5 right-3 bg-brand-red text-white text-[9px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide">
                      Special Deal
                    </span>
                  )}
                  
                  <div className="w-10 h-10 rounded-full bg-brand-red flex items-center justify-center text-white mb-3">
                    {feature.icon}
                  </div>
                  
                  <h3 className="text-sm font-bold text-[#1a2332] mb-1.5 leading-snug">
                    {feature.title}
                  </h3>
                  
                  <div className="w-6 h-[2px] bg-brand-red mb-2"></div>
                  
                  <p className="text-xs text-gray-500 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Image with Floating CTA */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="/images/team.jpg" 
                alt="HiLo HVAC Technician" 
                className="w-full h-auto object-cover aspect-[4/5] lg:aspect-[3/4]" 
              />
            </div>

            {/* Floating CTA Box */}
            <div className="absolute -bottom-6 left-4 right-4 sm:left-6 sm:right-6 lg:-bottom-8 lg:left-auto lg:right-6 lg:w-[calc(100%-3rem)] bg-white rounded-xl shadow-[0_8px_30px_rgba(0,0,0,0.12)] p-5 sm:p-6">
              <span className="text-brand-red text-xs font-bold tracking-wider uppercase block mb-1">
                Need Rapid Dispatch?
              </span>
              
              <h2 className="text-xl sm:text-2xl font-bold text-[#1a2332] mb-3">
                Same-Day Fast Repair
              </h2>
              
              <div className="w-10 h-[2px] bg-brand-red mb-4"></div>
              
              <div className="flex flex-wrap gap-4 sm:gap-6 mb-5">
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-brand-red flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span className="text-sm font-medium text-gray-700">Quick Response</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-brand-red flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span className="text-sm font-medium text-gray-700">Skilled Technicians</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-brand-red flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span className="text-sm font-medium text-gray-700">Local & Reliable</span>
                </div>
              </div>
              
              <a 
                href="tel:+17148535534" 
                className="inline-block bg-brand-red text-white font-bold px-6 py-2.5 rounded-lg text-sm hover:bg-red-700 transition-colors duration-200"
              >
                Call Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
