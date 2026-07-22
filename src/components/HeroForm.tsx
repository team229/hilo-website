import { useState, useEffect } from 'react';

export default function HeroForm() {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', message: '' });
  const [captcha, setCaptcha] = useState({ num1: 0, num2: 0, answer: 0, input: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [captchaError, setCaptchaError] = useState(false);

  const generateCaptcha = () => {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    setCaptcha({ num1, num2, answer: num1 + num2, input: '' });
    setCaptchaError(false);
  };

  useEffect(() => {
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
      const res = await fetch('https://api-inform.bythub.in/?formId=kS72mkXRXs3ieQIUQWR6', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: `Phone: ${formData.phone}\n\n${formData.message}`,
        }),
      });
      if (res.ok) {
        window.location.href = '/thank-you/';
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <section className="bg-gray-50 py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 border border-gray-100">
            <div className="text-center mb-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1a2332] mb-2">Schedule Service</h2>
              <p className="text-sm text-gray-500">Fast response for repairs, installations, and emergency service.</p>
            </div>
            
            <form id="hero-schedule-form" onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="sr-only">Full Name</label>
                  <input 
                    type="text" 
                    name="name" 
                    required 
                    placeholder="Full Name"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent text-[#1a2332] placeholder:text-gray-400"
                    value={formData.name} 
                    onChange={(e) => setFormData({...formData, name: e.target.value})} 
                  />
                </div>
                <div>
                  <label className="sr-only">Phone Number</label>
                  <input 
                    type="tel" 
                    name="phone" 
                    required 
                    placeholder="Phone Number"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent text-[#1a2332] placeholder:text-gray-400"
                    value={formData.phone} 
                    onChange={(e) => setFormData({...formData, phone: e.target.value})} 
                  />
                </div>
              </div>
              
              <div>
                <label className="sr-only">Email Address</label>
                <input 
                  type="email" 
                  name="email" 
                  placeholder="Email Address (Optional)"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent text-[#1a2332] placeholder:text-gray-400"
                  value={formData.email} 
                  onChange={(e) => setFormData({...formData, email: e.target.value})} 
                />
              </div>
              
              <div>
                <label className="sr-only">HVAC Issue Details</label>
                <textarea 
                  name="message" 
                  rows={3} 
                  required 
                  placeholder="Tell us about your HVAC issue..."
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent text-[#1a2332] placeholder:text-gray-400 resize-none"
                  value={formData.message} 
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                ></textarea>
              </div>
              
              {/* Captcha */}
              <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg border border-gray-100">
                <div className="flex-shrink-0 w-10 h-10 bg-brand-red/10 rounded-lg flex items-center justify-center text-brand-red">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <div className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Security Check</div>
                  <div className="flex items-center gap-3 flex-wrap">
                    <span className="text-base font-bold text-[#1a2332] bg-white px-3 py-1.5 rounded border border-gray-200">
                      {captcha.num1} + {captcha.num2} = ?
                    </span>
                    <input 
                      type="number" 
                      placeholder="Enter answer" 
                      required
                      className={`px-3 py-1.5 w-28 rounded-lg border text-sm font-medium focus:outline-none focus:ring-2 focus:ring-brand-blue text-[#1a2332] ${captchaError ? 'border-brand-red bg-brand-red/5' : 'border-gray-200'}`}
                      value={captcha.input} 
                      onChange={(e) => { setCaptcha({...captcha, input: e.target.value}); setCaptchaError(false); }} 
                    />
                    <button 
                      type="button" 
                      onClick={generateCaptcha} 
                      className="text-brand-red hover:text-brand-blue transition-colors" 
                      title="New challenge"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182" />
                      </svg>
                    </button>
                  </div>
                  {captchaError && (
                    <div className="text-xs text-brand-red mt-1 font-semibold">
                      Incorrect answer. Please try again.
                    </div>
                  )}
                </div>
              </div>

              <button 
                type="submit" 
                className="w-full bg-brand-red text-white font-bold py-3.5 rounded-lg shadow-md hover:bg-red-700 transition-colors duration-200 uppercase tracking-wider text-sm flex items-center justify-center gap-2 disabled:opacity-50"
                disabled={status === 'loading'}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>{status === 'loading' ? 'Submitting...' : 'Request Service'}</span>
              </button>
            </form>

            {status === 'success' && (
              <div className="absolute inset-0 bg-white rounded-2xl flex flex-col items-center justify-center text-center p-6 space-y-4 z-10">
                <div className="w-16 h-16 rounded-full bg-brand-blue/10 flex items-center justify-center text-brand-blue">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#1a2332]">Request Received!</h3>
                <p className="text-sm text-gray-500 max-w-xs font-medium">
                  Our dispatcher is matching you with a certified mechanic. We will call you within 15 minutes.
                </p>
                <button 
                  onClick={() => { 
                    setStatus('idle'); 
                    generateCaptcha(); 
                    setFormData({ name: '', phone: '', email: '', message: '' }); 
                  }} 
                  className="text-xs font-bold text-brand-red uppercase tracking-wider hover:underline"
                >
                  Submit another request
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
