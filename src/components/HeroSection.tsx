import { Stethoscope, CalendarDays, DollarSign, ShieldCheck, Check, Clock, MapPin } from 'lucide-react';

export default function HeroSection() {
  const features = [
    {
      icon: <Stethoscope className="w-6 h-6" />,
      title: 'Free Diagnostic with Repair',
      description: 'We waive our regular diagnostic service fee entirely when you approve any system repair.',
      hasBadge: true,
      iconBg: 'bg-[#cc0000]',
    },
    {
      icon: <CalendarDays className="w-6 h-6" />,
      title: 'Fast Service Scheduling',
      description: 'Book appointments effortlessly with fast, flexible windows built directly around your busy timeline.',
      hasBadge: false,
      iconBg: 'bg-[#002d62]',
    },
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: 'Clear Upfront Pricing',
      description: 'No hidden fees, surprises, or confusing upcharges. Know your exact quotes before any work begins.',
      hasBadge: false,
      iconBg: 'bg-[#002d62]',
    },
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: 'Reliable System Repairs',
      description: 'Expert execution and rigorous technical testing procedures that protect long-term equipment function.',
      hasBadge: false,
      iconBg: 'bg-[#cc0000]',
    },
  ];

  return (
    <section className="relative bg-[#f3f7f9] text-[#1e293b] min-h-screen overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-24 lg:pt-20 lg:pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start relative z-10">

          {/* Left Column: Content and Cards */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <span className="text-[#cc0000] font-extrabold tracking-wider text-sm uppercase mb-3 block">
              THE TRUSTED CHOICE
            </span>

            <h1 className="text-4xl sm:text-5xl font-extrabold text-[#002d62] leading-[1.15] mb-6">
              Highly Reliable <br />
              <span className="text-[#002d62]">Heating & Air</span> <br />
              <span className="text-[#cc0000]">Conditioning Service</span>
            </h1>

            <div className="w-16 h-1 bg-[#cc0000] mb-6"></div>

            <p className="text-base text-gray-600 max-w-xl mb-12 font-medium leading-relaxed">
              We're proud to serve our community and provide our clients with the most exceptional customer service.
            </p>

            {/* 2x2 Feature Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`relative bg-white rounded-2xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 ${feature.hasBadge ? 'pt-8' : ''}`}
                >
                  {feature.hasBadge && (
                    <span className="absolute -top-3 left-6 bg-[#cc0000] text-white text-[10px] font-bold tracking-wider uppercase px-3 py-1 rounded-md shadow-sm">
                      SPECIAL DEAL
                    </span>
                  )}
                  <div className="flex items-start space-x-4">
                    <div className={`flex-shrink-0 w-12 h-12 ${feature.iconBg} rounded-full flex items-center justify-center text-white shadow-md`}>
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-[#002d62] leading-tight mb-2">{feature.title}</h3>
                      <p className="text-xs text-gray-500 leading-relaxed font-medium">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Floating CTA Box */}
          <div className="lg:col-span-5 flex flex-col gap-6 lg:pt-12">
            <div className="relative rounded-2xl overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.08)]">
              <img
                src="/images/hero-technician.png"
                alt="HiLo HVAC Technician"
                className="w-full h-auto object-cover aspect-[4/5] lg:aspect-[3/4]"
              />
              <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4">
                <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4 sm:p-5 shadow-lg">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                    <div>
                      <span className="text-[#cc0000] font-extrabold tracking-wider text-[10px] uppercase block mb-0.5">
                        NEED RAPID DISPATCH?
                      </span>
                      <h4 className="text-base sm:text-lg font-extrabold text-[#002d62] mb-2">
                        Same-Day Fast Repair
                      </h4>
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[10px] font-bold text-gray-600">
                        <span className="flex items-center">
                          <Check className="w-3.5 h-3.5 text-[#cc0000] mr-1" strokeWidth={2.5} />
                          Quick Response
                        </span>
                        <span className="inline-block text-gray-300">|</span>
                        <span className="flex items-center">
                          <Clock className="w-3.5 h-3.5 text-[#002d62] mr-1" strokeWidth={2.5} />
                          Skilled Technicians
                        </span>
                        <span className="inline-block text-gray-300">|</span>
                        <span className="flex items-center">
                          <MapPin className="w-3.5 h-3.5 text-[#cc0000] mr-1" strokeWidth={2.5} />
                          Local & Reliable
                        </span>
                      </div>
                    </div>
                    <a
                      href="tel:+17148535534"
                      className="inline-block bg-[#cc0000] hover:bg-[#b30000] text-white font-bold px-5 py-2.5 rounded-xl transition duration-200 shadow-md text-xs sm:text-sm whitespace-nowrap flex-shrink-0"
                    >
                      Call Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
