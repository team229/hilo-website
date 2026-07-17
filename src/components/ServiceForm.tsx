import { useState, useEffect } from 'react';

export default function ServiceForm() {
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

  return (
    <div className="bg-white border-2 border-brand-blue/10 rounded-2xl shadow-xl p-6 sm:p-8 relative">
      <h3 className="text-2xl font-bold text-brand-blue mb-1">Request Service</h3>
      <p className="text-sm text-slate-600 font-medium mb-6">We'll call you within 15 minutes.</p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="sr-only">Full Name</label>
          <input type="text" name="name" required placeholder="Full Name"
            className="w-full px-4 py-3 rounded-lg border border-brand-blue/15 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent text-brand-blue placeholder:text-brand-blue/40"
            value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} />
        </div>
        <div>
          <label className="sr-only">Phone Number</label>
          <input type="tel" name="phone" required placeholder="Phone Number"
            className="w-full px-4 py-3 rounded-lg border border-brand-blue/15 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent text-brand-blue placeholder:text-brand-blue/40"
            value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} />
        </div>
        <div>
          <label className="sr-only">Email Address</label>
          <input type="email" name="email" placeholder="Email Address"
            className="w-full px-4 py-3 rounded-lg border border-brand-blue/15 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent text-brand-blue placeholder:text-brand-blue/40"
            value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} />
        </div>
        <div>
          <label className="sr-only">HVAC Issue Details</label>
          <textarea name="message" rows={3} required placeholder="Tell us about your HVAC issue..."
            className="w-full px-4 py-3 rounded-lg border border-brand-blue/15 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent text-brand-blue placeholder:text-brand-blue/40 resize-none"
            value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})}></textarea>
        </div>

        <div className="flex items-center gap-3 bg-brand-blue/5 p-3 rounded-lg border border-brand-blue/10">
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

        <button type="submit" className="w-full bg-brand-red text-white font-extrabold py-3.5 rounded-lg shadow-md hover:bg-brand-blue transition-colors duration-300 uppercase tracking-wider text-sm flex items-center justify-center gap-2 disabled:opacity-50" disabled={status === 'loading'}>
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
  );
}
