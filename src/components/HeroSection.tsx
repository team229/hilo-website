import { useState, useEffect } from 'react';

export default function HeroSection() {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', message: '' });
  const [captcha, setCaptcha] = useState({ num1: 0, num2: 0, answer: 0, input: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [captchaError, setCaptchaError] = useState(false);
  const [mounted, setMounted] = useState(false);

  const generateCaptcha = () => {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    setCaptcha({ num1, num2, answer: num1 + num2, input: '' });
    setCaptchaError(false);
  };

  useEffect(() => {
    setMounted(true);
    generateCaptcha();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (parseInt(captcha.input) !== captcha.answer) {
      setCaptchaError(true);
      return;
    }
    setStatus('loading');
    try {
      const res = await fetch('https://api-inform.bythub.in/?formId=Z6R2t7vXQWrhIa1fzvv6', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: `Phone: ${formData.phone}\n\n${formData.message}`,
        }),
      });
      if (res.ok) {
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  const features = [
    { icon: '⚡', text: 'Same-Day Service' },
    { icon: '🔧', text: 'Emergency Repair' },
    { icon: '✅', text: 'EPA Certified' },
    { icon: '💰', text: 'Financing Available' },
    { icon: '🕐', text: '24/7 Emergency Service' },
    { icon: '🏠', text: 'Respect for your Home' },
  ];

  return (
    <section className="relative bg-gradient-to-br from-white via-brand-blue/5 to-white py-12 sm:py-20 lg:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          
          {/* Left Content */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            <div className="inline-flex items-center gap-2 bg-brand-red/10 border border-brand-red/20 px-3.5 py-1.5 rounded-full">
              <span className="w-2 h-2 rounded-full bg-brand-red animate-pulse"></span>
              <span className="text-brand-red text-xs sm:text-sm font-bold tracking-wide uppercase">Trusted Local HVAC Company</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-brand-blue">
              Orange County HVAC<br className="hidden sm:inline" />
              <span className="text-brand-red">Service You Can Trust</span>
            </h1>
            
            <p className="text-base sm:text-lg text-slate-600 max-w-xl font-medium leading-relaxed">
              Family owned &amp; operated HVAC company providing same-day AC repair, heating service, mini split installation, and emergency HVAC repairs.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 w-full max-w-xl">
              {features.map((f) => (
                <div key={f.text} className="bg-white border border-brand-blue/10 rounded-lg p-3.5 shadow-sm flex items-center gap-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-brand-red flex-shrink-0"></span>
                  <span className="font-bold text-sm text-brand-blue">{f.text}</span>
                </div>
              ))}
            </div>

            <div className="w-full sm:w-auto pt-2">
              <a href="tel:+17148535534" className="block w-full sm:inline-block text-center bg-brand-red text-white text-base font-extrabold px-8 py-4 rounded-lg shadow-lg shadow-brand-red/30 hover:bg-brand-blue hover:shadow-brand-blue/30 transition-all duration-300 transform hover:-translate-y-0.5">
                Call For Same Day Service
              </a>
            </div>

            {/* License Card */}
            <div className="bg-white border-2 border-brand-blue/10 rounded-2xl p-6 w-full max-w-xl shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-brand-blue/10 flex items-center justify-center text-brand-blue">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" /></svg>
                </div>
                <div>
                  <div className="font-extrabold uppercase tracking-wider text-brand-red text-sm">Licensed • Bonded • Insured</div>
                  <div className="text-xs text-slate-600 font-semibold">California C-20 HVAC Contractor</div>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-3">
                <div className="bg-brand-blue/5 rounded-xl p-3 text-center">
                  <div className="text-[10px] font-bold text-brand-blue uppercase tracking-wider mb-1">License #</div>
                  <div className="text-xs font-extrabold text-brand-blue">1155955</div>
                </div>
                <div className="bg-brand-blue/5 rounded-xl p-3 text-center">
                  <div className="text-[10px] font-bold text-brand-blue uppercase tracking-wider">Fully</div>
                  <div className="text-xs font-extrabold text-brand-blue">Insured</div>
                </div>
                <div className="bg-brand-blue/5 rounded-xl p-3 text-center">
                  <div className="text-[10px] font-bold text-brand-blue uppercase tracking-wider">EPA</div>
                  <div className="text-xs font-extrabold text-brand-blue">Certified</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="lg:col-span-5 flex flex-col space-y-6">
            {/* Fleet Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-xl border-4 border-white aspect-[16/9] group">
              <img src="/images/team.jpg" alt="HiLo HVAC Fleet" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex flex-col justify-end p-6">
                <p className="text-lg text-white font-bold">Orange County HVAC Fleet Ready to Roll</p>
                <p className="text-xs text-white/90">Fully loaded trucks dispatched within minutes of your call.</p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white border-2 border-brand-blue/10 rounded-2xl shadow-xl p-5 sm:p-6 relative">
              <h2 className="text-2xl font-bold text-brand-blue mb-1">Schedule Service</h2>
              <p className="text-xs text-slate-600 font-medium mb-4">Fast response for repairs, installations, and emergency service.</p>
              
              <form id="hero-schedule-form" onSubmit={handleSubmit} className="space-y-3">
                <div>
                  <label className="sr-only">Full Name</label>
                  <input type="text" name="name" required placeholder="Full Name"
                    className="w-full px-4 py-2.5 rounded-lg border border-brand-blue/15 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent text-brand-blue placeholder:text-brand-blue/40"
                    value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} />
                </div>
                <div>
                  <label className="sr-only">Phone Number</label>
                  <input type="tel" name="phone" required placeholder="Phone Number"
                    className="w-full px-4 py-2.5 rounded-lg border border-brand-blue/15 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent text-brand-blue placeholder:text-brand-blue/40"
                    value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} />
                </div>
                <div>
                  <label className="sr-only">Email Address</label>
                  <input type="email" name="email" placeholder="Email Address"
                    className="w-full px-4 py-2.5 rounded-lg border border-brand-blue/15 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent text-brand-blue placeholder:text-brand-blue/40"
                    value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} />
                </div>
                <div>
                  <label className="sr-only">HVAC Issue Details</label>
                  <textarea name="message" rows={2} required placeholder="Tell us about your HVAC issue..."
                    className="w-full px-4 py-2.5 rounded-lg border border-brand-blue/15 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent text-brand-blue placeholder:text-brand-blue/40 resize-none"
                    value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})}></textarea>
                </div>
                
                {/* Captcha */}
                <div className="flex items-center gap-3 bg-brand-blue/5 p-2.5 rounded-lg border border-brand-blue/10">
                  <div className="flex-shrink-0 w-10 h-10 bg-brand-red/10 rounded-lg flex items-center justify-center text-brand-red">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" /></svg>
                  </div>
                  <div className="flex-1">
                    <div className="text-xs font-bold text-slate-600 uppercase tracking-wider mb-1">Security Check</div>
                    <div className="flex items-center gap-3 flex-wrap">
                      <span className="text-base font-bold text-brand-blue bg-white px-3 py-1.5 rounded border border-brand-blue/20">{captcha.num1} + {captcha.num2} = ?</span>
                      <input type="number" placeholder="Enter answer" required
                        className={`px-3 py-1.5 w-28 rounded-lg border text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-brand-blue text-brand-blue ${captchaError ? 'border-brand-red bg-brand-red/5' : 'border-brand-blue/15'}`}
                        value={captcha.input} onChange={(e) => { setCaptcha({...captcha, input: e.target.value}); setCaptchaError(false); }} />
                      <button type="button" onClick={generateCaptcha} className="text-brand-red hover:text-brand-blue transition-colors" title="New challenge">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182" /></svg>
                      </button>
                    </div>
                    {captchaError && <div className="text-xs text-brand-red mt-1 font-semibold">Incorrect answer. Please try again.</div>}
                  </div>
                </div>

                <button type="submit" className="w-full bg-brand-red text-white font-extrabold py-3 rounded-lg shadow-md hover:bg-brand-blue transition-colors duration-300 uppercase tracking-wider text-sm flex items-center justify-center gap-2 disabled:opacity-50" disabled={status === 'loading'}>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  <span>{status === 'loading' ? 'Submitting...' : 'Request Service'}</span>
                </button>
              </form>

              {status === 'success' && (
                <div className="absolute inset-0 bg-white rounded-2xl flex flex-col items-center justify-center text-center p-6 space-y-4 z-10">
                  <div className="w-16 h-16 rounded-full bg-brand-blue/10 flex items-center justify-center text-brand-blue">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  </div>
                  <h3 className="text-xl font-bold text-brand-blue">Request Received!</h3>
                  <p className="text-sm text-slate-600 max-w-xs font-semibold">Our dispatcher is matching you with a certified mechanic. We will call you within 15 minutes.</p>
                  <button onClick={() => { setStatus('idle'); generateCaptcha(); setFormData({ name: '', phone: '', email: '', message: '' }); }} className="text-xs font-extrabold text-brand-red uppercase tracking-wider hover:underline">Submit another request</button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
