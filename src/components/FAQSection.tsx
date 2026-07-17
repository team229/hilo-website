import { useState } from 'react';

const faqs = [
  {
    q: 'Does HiLo offer same-day AC repair services in Anaheim?',
    a: 'HiLo Heating & Air Conditioning provides same-day AC repair throughout Anaheim with certified technicians dispatched quickly to restore your comfort fast.',
  },
  {
    q: 'Do you offer 24/7 emergency HVAC service?',
    a: 'Absolutely. HiLo Heating & Air Conditioning offers 24/7 emergency HVAC repair across Orange County, including Irvine, Santa Ana, Fullerton, and Garden Grove with rapid dispatch.',
  },
  {
    q: 'What heating services do you provide?',
    a: 'HiLo Heating & Air Conditioning services furnaces throughout Irvine and Newport Beach, delivering reliable same-day heating repair with upfront pricing and no hidden fees.',
  },
  {
    q: 'What areas do you serve?',
    a: 'HiLo Heating & Air Conditioning dispatches certified HVAC technicians to Los Angeles, Costa Mesa, and surrounding areas for fast, professional air conditioning repair and installation.',
  },
  {
    q: 'Do you offer financing for HVAC installations?',
    a: 'HiLo Heating & Air Conditioning provides professional furnace installation in Laguna Hills, Santa Ana, and throughout Orange County with financing available and free estimates provided.',
  },
  {
    q: 'What is included in your maintenance plans?',
    a: 'HiLo Heating & Air Conditioning offers seasonal HVAC tune-ups, system inspections, filter replacements, and preventative maintenance plans designed to extend equipment life and maximize year-round energy efficiency.',
  },
  {
    q: 'How much does mini split installation cost?',
    a: 'Mini split installation costs vary by system size and complexity. HiLo Heating & Air Conditioning provides free estimates, upfront pricing, and flexible financing options with no hidden fees or surprises.',
  },
  {
    q: 'Do you install air purification systems?',
    a: 'HiLo Heating & Air Conditioning installs air purifiers, humidifiers, filtration systems, and complete ductwork to improve indoor air quality and create healthier, more comfortable home environments year-round.',
  },
  {
    q: 'Do you offer free diagnostics?',
    a: 'HiLo Heating & Air Conditioning completely waives the standard diagnostic fee when you approve any repair, making it easier and more affordable to restore your HVAC system fast.',
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block bg-brand-blue/10 text-brand-blue text-sm font-semibold px-4 py-1.5 rounded-full mb-4">FAQ</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-brand-blue mb-4">Frequently Asked Questions</h2>
          <p className="text-slate-600">Get answers to common questions about our HVAC services.</p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-brand-blue/10 rounded-xl overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between px-5 py-4 text-left bg-white hover:bg-brand-blue/5 transition"
              >
                <span className="text-sm font-semibold text-brand-blue pr-4">{faq.q}</span>
                <svg className={`w-5 h-5 text-brand-blue flex-shrink-0 transition-transform ${openIndex === i ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openIndex === i && (
                <div className="px-5 pb-4 text-sm text-slate-600 leading-relaxed border-t border-brand-blue/10 pt-3">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
