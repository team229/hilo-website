import { Stethoscope, CalendarCheck, DollarSign, ShieldCheck, CheckCircle2, Clock, MapPin } from 'lucide-react';

export default function HeroSection() {
  const features = [
    {
      icon: <Stethoscope className="w-5 h-5" />,
      title: 'Free Diagnostic with Repair',
      description: 'We waive our regular diagnostic service fee entirely when you approve any system repair.',
      hasBadge: true,
    },
    {
      icon: <CalendarCheck className="w-5 h-5" />,
      title: 'Fast Service Scheduling',
      description: 'Book appointments effortlessly with fast, flexible windows built directly around your busy timeline.',
      hasBadge: false,
    },
    {
      icon: <DollarSign className="w-5 h-5" />,
      title: 'Clear Upfront Pricing',
      description: 'No hidden fees, surprises, or confusing upcharges. Know your exact quotes before any work begins.',
      hasBadge: false,
    },
    {
      icon: <ShieldCheck className="w-5 h-5" />,
      title: 'Reliable System Repairs',
      description: 'Expert execution and rigorous technical testing procedures that protect long-term equipment function.',
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
                src="/images/hero-technician.png" 
                alt="HiLo HVAC Technician" 
                className="w-full h-auto object-cover aspect-[4/5] lg:aspect-[3/4]" 
              />
            </div>

            {/* Floating CTA Box */}
            <div className="absolute bottom-2 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 lg:bottom-4 lg:right-4 lg:left-auto lg:w-[calc(100%-2rem)] bg-white rounded-xl shadow-[0_8px_30px_rgba(0,0,0,0.12)] p-4 sm:p-5">
              <span className="text-brand-red text-[10px] font-bold tracking-wider uppercase block mb-0.5">
                Need Rapid Dispatch?
              </span>
              <h2 className="text-lg sm:text-xl font-bold text-[#1a2332] mb-3">
                Same-Day Fast Repair
              </h2>
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  <div className="flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-brand-red flex-shrink-0" />
                    <span className="text-[11px] sm:text-xs font-medium text-gray-700">Quick Response</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-brand-red flex-shrink-0" />
                    <span className="text-[11px] sm:text-xs font-medium text-gray-700">Skilled Technicians</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-brand-red flex-shrink-0" />
                    <span className="text-[11px] sm:text-xs font-medium text-gray-700">Local & Reliable</span>
                  </div>
                </div>
                <a 
                  href="tel:+17148535534" 
                  className="inline-block bg-brand-red text-white font-bold px-5 py-2 rounded-lg text-xs sm:text-sm hover:bg-red-700 transition-colors duration-200"
                >
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
