import { useState, useEffect } from 'react';

const issues = [
  { value: 'AC not cooling', label: '❄️ AC not cooling' },
  { value: 'AC not turning on', label: '❄️ AC not turning on' },
  { value: 'Heating not working', label: '🔥 Heating not working' },
  { value: 'No air flow', label: '💨 No air flow' },
  { value: 'Strange noises', label: '🔊 Strange noises' },
  { value: 'Thermostat issue', label: '🌡️ Thermostat issue' },
  { value: 'New installation', label: '🏗️ New installation' },
  { value: 'Maintenance / tune-up', label: '🔧 Maintenance / tune-up' },
  { value: 'Other', label: 'Other issue' },
];

function getUtmParams() {
  if (typeof window === 'undefined') return {};
  const params = new URLSearchParams(window.location.search);
  return {
    utm_source: params.get('utm_source') || '',
    utm_medium: params.get('utm_medium') || '',
    utm_campaign: params.get('utm_campaign') || '',
    utm_content: params.get('utm_content') || '',
    utm_term: params.get('utm_term') || '',
    gclid: params.get('gclid') || '',
  };
}

export default function LandingForm() {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', issue: '' });
  const [captcha, setCaptcha] = useState({ num1: 0, num2: 0, answer: 0, input: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [captchaError, setCaptchaError] = useState(false);
  const [utm, setUtm] = useState<Record<string, string>>({});

  const generateCaptcha = () => {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    setCaptcha({ num1, num2, answer: num1 + num2, input: '' });
    setCaptchaError(false);
  };

  useEffect(() => {
    generateCaptcha();
    setUtm(getUtmParams());
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (parseInt(captcha.input) !== captcha.answer) {
      setCaptchaError(true);
      return;
    }
    setStatus('loading');
    try {
      const utmTags = Object.entries(utm).filter(([, v]) => v).map(([k, v]) => `${k}: ${v}`).join('\n');
      const res = await fetch('https://api-inform.bythub.in/?formId=kS72mkXRXs3ieQIUQWR6', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: `Phone: ${formData.phone}\n\nIssue: ${formData.issue}${utmTags ? `\n\n---\n${utmTags}` : ''}`,
        }),
      });
      if (res.ok) window.location.href = '/thank-you/';
      else setStatus('error');
    } catch {
      setStatus('error');
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-2xl shadow-black/15 p-6 sm:p-8 relative border border-white/20">
      <div className="flex items-center gap-3 mb-6 pb-5 border-b border-slate-100">
        <div className="w-10 h-10 rounded-xl bg-brand-red flex items-center justify-center text-white shadow-lg shadow-brand-red/30">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" /></svg>
        </div>
        <div>
          <div className="text-sm font-bold text-brand-blue">Fast Response — Guaranteed</div>
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
            <span className="text-xs font-semibold text-green-600">Dispatcher calls within 15 min</span>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-3.5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          <div>
            <label className="sr-only">Full Name</label>
            <input type="text" name="name" required placeholder="Full Name"
              className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-brand-blue focus:bg-white transition-all text-brand-blue placeholder:text-slate-400"
              value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} />
          </div>
          <div>
            <label className="sr-only">Phone Number</label>
            <input type="tel" name="phone" required placeholder="Phone Number"
              className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-brand-blue focus:bg-white transition-all text-brand-blue placeholder:text-slate-400"
              value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} />
          </div>
        </div>

        <div>
          <label className="sr-only">Email Address</label>
          <input type="email" name="email" placeholder="Email Address (optional)"
            className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-brand-blue focus:bg-white transition-all text-brand-blue placeholder:text-slate-400"
            value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} />
        </div>

        <div>
          <label className="sr-only">What's the Issue?</label>
          <select name="issue" required
            className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-brand-blue focus:bg-white transition-all text-brand-blue appearance-none"
            value={formData.issue} onChange={(e) => setFormData({...formData, issue: e.target.value})}>
            <option value="" disabled>What's the issue?</option>
            {issues.map((i) => (
              <option key={i.value} value={i.value}>{i.label}</option>
            ))}
          </select>
        </div>

        <div className="flex items-center gap-3 bg-brand-blue/[0.04] p-3 rounded-xl border border-brand-blue/10">
          <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-brand-blue/10 flex items-center justify-center text-brand-blue">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" /></svg>
          </div>
          <div className="flex-1 flex items-center gap-2 flex-wrap">
            <span className="text-xs font-bold text-slate-500">Verify:</span>
            <span className="text-sm font-extrabold text-brand-blue bg-white px-3 py-1 rounded-lg border border-brand-blue/20">{captcha.num1} + {captcha.num2} = ?</span>
            <input type="number" placeholder="?" required
              className={`w-16 px-2 py-1.5 rounded-lg border text-sm font-extrabold text-center focus:outline-none focus:ring-2 focus:ring-brand-blue text-brand-blue ${captchaError ? 'border-brand-red bg-brand-red/5' : 'border-slate-200 bg-white'}`}
              value={captcha.input} onChange={(e) => { setCaptcha({...captcha, input: e.target.value}); setCaptchaError(false); }} />
            <button type="button" onClick={generateCaptcha} className="text-slate-400 hover:text-brand-blue transition-colors p-1" title="New challenge">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182" /></svg>
            </button>
          </div>
        </div>
        {captchaError && <p className="text-xs font-bold text-brand-red -mt-1">Incorrect answer. Try again.</p>}

        <button type="submit" disabled={status === 'loading'}
          className="w-full bg-brand-red text-white font-extrabold py-4 rounded-xl shadow-lg shadow-brand-red/30 hover:bg-brand-blue hover:shadow-brand-blue/30 transition-all duration-300 text-sm flex items-center justify-center gap-2.5 disabled:opacity-50 active:scale-[0.98]">
          {status === 'loading' ? (
            <svg className="w-5 h-5 animate-spin" viewBox="0 0 24 24" fill="none"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/></svg>
          ) : (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          )}
          <span>{status === 'loading' ? 'Sending...' : 'Send Request'}</span>
        </button>
      </form>

      <div className="flex items-center justify-center gap-2 mt-5 pt-4 border-t border-slate-100">
        <svg className="w-3.5 h-3.5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
        <span className="text-xs text-slate-400 font-medium">Your info stays private. No spam. Ever.</span>
      </div>

      {status === 'success' && (
        <div className="absolute inset-0 bg-white rounded-2xl flex flex-col items-center justify-center text-center p-8 z-10 animate-fade-in">
          <div className="w-20 h-20 rounded-2xl bg-green-50 flex items-center justify-center text-green-600 mb-5">
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          </div>
          <h3 className="text-2xl font-extrabold text-brand-blue mb-2">You're All Set!</h3>
          <p className="text-sm text-slate-600 max-w-xs font-medium mb-2">A dispatcher is reviewing your request and will call you within 15 minutes.</p>
          <p className="text-xs text-slate-400 font-semibold">Keep your phone nearby!</p>
          <button onClick={() => { setStatus('idle'); generateCaptcha(); setFormData({ name: '', phone: '', email: '', issue: '' }); }}
            className="mt-6 text-xs font-extrabold text-brand-red uppercase tracking-wider hover:underline">Submit another request</button>
        </div>
      )}

      {status === 'error' && (
        <div className="absolute inset-0 bg-white rounded-2xl flex flex-col items-center justify-center text-center p-8 z-10 animate-fade-in">
          <div className="w-20 h-20 rounded-2xl bg-red-50 flex items-center justify-center text-brand-red mb-5">
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" /></svg>
          </div>
          <h3 className="text-xl font-extrabold text-brand-blue mb-2">Something went wrong</h3>
          <p className="text-sm text-slate-600 max-w-xs font-medium mb-4">Please try again or call us directly at (714) 853-5534.</p>
          <button onClick={() => setStatus('idle')}
            className="text-xs font-extrabold text-brand-red uppercase tracking-wider hover:underline">Try again</button>
        </div>
      )}
    </div>
  );
}
