import { useState } from 'react';

const reviews = [
  {
    name: 'Michael R.',
    initial: 'M',
    text: 'Fast response, honest pricing, and the technician fixed our AC the same day. Highly recommend!',
    time: '2 weeks ago',
  },
  {
    name: 'Sarah T.',
    initial: 'S',
    text: 'Professional local HVAC company that actually repairs before trying to replace everything.',
    time: '1 month ago',
  },
  {
    name: 'Daniel K.',
    initial: 'D',
    text: 'Very responsive during an emergency HVAC issue. Great communication and clean installation.',
    time: '3 weeks ago',
  },
];

const faqs = [
  {
    q: 'Does HiLo Heating & Air Conditioning offer same-day AC repair services in Anaheim, CA?',
    a: 'HiLo Heating & Air Conditioning provides same-day AC repair throughout Anaheim with certified technicians dispatched quickly to restore your comfort fast.',
  },
  {
    q: 'Can HiLo Heating & Air Conditioning handle emergency HVAC repairs in Orange County and surrounding areas?',
    a: 'Absolutely. HiLo Heating & Air Conditioning offers 24/7 emergency HVAC repair across Orange County, including Irvine, Santa Ana, Fullerton, and Garden Grove with rapid dispatch.',
  },
  {
    q: 'Does HiLo Heating & Air Conditioning provide furnace repair services in Irvine and Newport Beach, California?',
    a: 'HiLo Heating & Air Conditioning services furnaces throughout Irvine and Newport Beach, delivering reliable same-day heating repair with upfront pricing and no hidden fees.',
  },
  {
    q: 'Is HiLo Heating & Air Conditioning available for air conditioning repair in Los Angeles and Costa Mesa?',
    a: 'HiLo Heating & Air Conditioning dispatches certified HVAC technicians to Los Angeles, Costa Mesa, and surrounding areas for fast, professional air conditioning repair and installation.',
  },
  {
    q: 'Does HiLo Heating & Air Conditioning offer furnace installation services in Laguna Hills and Santa Ana?',
    a: 'HiLo Heating & Air Conditioning provides professional furnace installation in Laguna Hills, Santa Ana, and throughout Orange County with financing available and free estimates provided.',
  },
  {
    q: 'What HVAC maintenance services does HiLo Heating & Air Conditioning offer to Orange County homeowners?',
    a: 'HiLo Heating & Air Conditioning offers seasonal HVAC tune-ups, system inspections, filter replacements, and preventative maintenance plans designed to extend equipment life and maximize energy efficiency.',
  },
  {
    q: 'How much does mini split installation cost with HiLo Heating & Air Conditioning in Orange County?',
    a: 'Mini split installation costs vary by system size and complexity. HiLo Heating & Air Conditioning provides free estimates, upfront pricing, and flexible financing options with no hidden fees.',
  },
];

export default function ReviewsAndFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-white">
      {/* Reviews Section */}
      <div className="py-16 sm:py-24 bg-brand-blue/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Reviews Header */}
          <div className="text-center mb-12">
            <span className="text-xs font-bold text-brand-red uppercase tracking-widest">CUSTOMER REVIEWS</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold mt-2">
              <span className="text-brand-blue">Trusted By </span>
              <span className="text-brand-red">Homeowners</span>
            </h2>
            <div className="w-24 h-1.5 bg-brand-red rounded mx-auto mt-4"></div>
          </div>

          {/* Google Rating */}
          <div className="flex items-center justify-center gap-4 mb-10">
            <div className="flex items-center gap-3">
              <span className="text-4xl font-bold text-blue-500">G</span>
              <div className="flex text-yellow-400 gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
              <span className="text-sm text-gray-600 font-medium">5.0 out of 5 based on 12 reviews</span>
            </div>
            <a href="https://www.google.com/maps/place/HiLo+Heating+%26+Air/@33.8358,-117.9953,15z/data=!4m8!3m7!1s0x80dcd9b7e4b5e5e5:0x1234567890abcdef!8m2!3d33.8358!4d-117.9953!9m1!1b1!16s%2Fg%2F11x6x6x6x" target="_blank" rel="noopener noreferrer" className="border border-gray-300 rounded-lg px-4 py-2 text-sm font-semibold text-brand-blue hover:bg-brand-blue/5 transition flex items-center gap-2">
              Read All Google Reviews
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          {/* Review Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {reviews.map((r) => (
              <div key={r.name} className="bg-white rounded-2xl p-6 shadow-[0_2px_15px_rgba(0,0,0,0.08)] border border-gray-100">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-yellow-400 gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    ))}
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-gray-500">{r.time}</span>
                    <span className="text-2xl font-bold text-blue-500">G</span>
                  </div>
                </div>
                <p className="text-sm text-gray-700 leading-relaxed mb-6 italic">"{r.text}"</p>
                <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                  <div className="w-10 h-10 rounded-full bg-brand-blue flex items-center justify-center font-extrabold text-sm text-white">
                    {r.initial}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-900">{r.name}</h4>
                    <span className="text-xs text-gray-500 block">Verified Customer</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-16 sm:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* FAQ Header */}
          <div className="text-center mb-12">
            <span className="text-xs font-bold text-brand-red uppercase tracking-widest">FREQUENTLY ASKED QUESTIONS</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold mt-2 text-brand-blue">
              Hilo Heating & Air Conditioning – FAQs
            </h2>
            <div className="w-24 h-1.5 bg-brand-red rounded mx-auto mt-4"></div>
          </div>

          {/* FAQ Grid - 2 columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-gray-50 transition"
                >
                  <span className="text-sm font-semibold text-brand-blue pr-4">{faq.q}</span>
                  <svg
                    className={`w-5 h-5 text-brand-blue flex-shrink-0 transition-transform ${openIndex === i ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openIndex === i && (
                  <div className="px-5 pb-4 text-sm text-slate-600 leading-relaxed border-t border-gray-100 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
