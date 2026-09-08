import { useState, useEffect, useRef } from 'react';

// Google Ads conversion label for FORM SUBMISSIONS (create one in Ads -> Conversions -> Website).
// Format: 'AW-18314297181/XXXXXXXXXXX-XXXXXXXXXX'. Leave '' to only fire GA4/dataLayer events.
const GOOGLE_ADS_FORM_CONVERSION = '';

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

const cities = [
  'Anaheim',
  'Fullerton',
  'Orange',
  'Irvine',
  'Santa Ana',
  'Costa Mesa',
  'Newport Beach',
  'Garden Grove',
  'Laguna Hills',
  'Stanton',
  'Rancho Santa Margarita',
  'Los Angeles',
  'Other / not sure',
];

const MIN_TYPING_TIME_MS = 3000;
const PHONE_HREF = 'tel:+17148535534';

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

function trackLead({ city, issue, utm }: { city: string; issue: string; utm: Record<string, string> }) {
  const w = window as any;
  w.dataLayer = w.dataLayer || [];
  const payload = {
    event: 'generate_lead',
    postType: 'Lead',
    leadForm: 'landing',
    city,
    issue,
    utmSource: utm.utm_source,
    utmCampaign: utm.utm_campaign,
    utmMedium: utm.utm_medium,
    gclid: utm.gclid,
  };
  w.dataLayer.push(payload);
  w.dataLayer.push({ event: 'landing_form_submission', ...payload });

  document.dispatchEvent(new CustomEvent('leadSubmitted', { detail: payload }));

  if (typeof (w as any).gtag === 'function') {
    (w as any).gtag('event', 'generate_lead', {
      form_name: 'landing',
      lead_type: 'form',
      value: 150,
      currency: 'USD',
    });
    if (GOOGLE_ADS_FORM_CONVERSION) {
      (w as any).gtag('event', 'conversion', { send_to: GOOGLE_ADS_FORM_CONVERSION });
    }
  }
}

function trackError(msg: string) {
  const w = window as any;
  w.dataLayer = w.dataLayer || [];
  w.dataLayer.push({ event: 'landing_form_error', error: msg });
}

export default function LandingForm() {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', issue: '', city: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const [utm, setUtm] = useState<Record<string, string>>({});
  const [honeypot, setHoneypot] = useState('');
  const mountedAt = useRef(Date.now());

  useEffect(() => {
    setUtm(getUtmParams());
  }, []);

  const fakeSuccess = () => {
    window.location.href = '/thank-you/';
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (honeypot) return fakeSuccess();
    if (Date.now() - mountedAt.current < MIN_TYPING_TIME_MS) return fakeSuccess();

    const phoneDigits = formData.phone.replace(/\D/g, '').length;
    if (phoneDigits < 10) {
      setErrorMsg('Please enter a valid 10-digit phone number so we can call you back.');
      setStatus('error');
      return;
    }

    const utmTags = Object.entries(utm).filter(([, v]) => v).map(([k, v]) => `${k}: ${v}`).join('\n');
    setStatus('loading');
    try {
      const res = await fetch('https://api-inform.bythub.in/?formId=kS72mkXRXs3ieQIUQWR6', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: `Phone: ${formData.phone}\n\nArea/City: ${formData.city}\n\nIssue: ${formData.issue}${utmTags ? `\n\n---\n${utmTags}` : ''}`,
        }),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      trackLead({ city: formData.city, issue: formData.issue, utm });
      setTimeout(() => {
        window.location.href = '/thank-you/';
      }, 150);
    } catch (err) {
      const msg = err instanceof Error ? err.message : 'Request failed';
      trackError(msg);
      setErrorMsg("We couldn't submit your request right now. Please call us directly — we're dispatching today.");
      setStatus('error');
    }
  };

  const inputClass =
    'w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-brand-blue focus:bg-white transition-all text-brand-blue placeholder:text-slate-400';

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

      <form onSubmit={handleSubmit} className="space-y-3.5" autoComplete="off">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          <div>
            <label htmlFor="lf-name" className="sr-only">Full Name</label>
            <input id="lf-name" type="text" name="name" required placeholder="Full Name" autoComplete="name"
              className={inputClass}
              value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
          </div>
          <div>
            <label htmlFor="lf-phone" className="sr-only">Phone Number</label>
            <input id="lf-phone" type="tel" name="phone" required inputMode="tel" placeholder="Phone Number" autoComplete="tel"
              className={inputClass}
              value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} />
          </div>
        </div>

        <div>
          <label htmlFor="lf-city" className="block text-[11px] font-extrabold text-slate-400 uppercase tracking-wider mb-1.5">Your area <span className="text-brand-red">*</span></label>
          <select id="lf-city" name="city" required
            className={inputClass}
            value={formData.city} onChange={(e) => setFormData({ ...formData, city: e.target.value })}>
            <option value="" disabled>Choose your city / area</option>
            {cities.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="lf-issue" className="sr-only">What's the Issue?</label>
          <select id="lf-issue" name="issue" required
            className={inputClass}
            value={formData.issue} onChange={(e) => setFormData({ ...formData, issue: e.target.value })}>
            <option value="" disabled>What's the issue?</option>
            {issues.map((i) => (
              <option key={i.value} value={i.value}>{i.label}</option>
            ))}
          </select>
        </div>

        <div className="hidden">
          <label htmlFor="lf-company">Leave this field empty</label>
          <input id="lf-company" type="text" name="company" tabIndex={-1} autoComplete="off"
            value={honeypot} onChange={(e) => setHoneypot(e.target.value)} />
        </div>

        <button type="submit" disabled={status === 'loading'}
          className="w-full bg-brand-red text-white font-extrabold py-4 rounded-xl shadow-lg shadow-brand-red/30 hover:bg-brand-blue hover:shadow-brand-blue/30 transition-all duration-300 text-sm flex items-center justify-center gap-2.5 disabled:opacity-50 active:scale-[0.98]">
          {status === 'loading' ? (
            <svg className="w-5 h-5 animate-spin" viewBox="0 0 24 24" fill="none"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/></svg>
          ) : (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          )}
          <span>{status === 'loading' ? 'Sending...' : 'Get My Free Estimate'}</span>
        </button>

        <div className="flex items-center justify-center gap-2">
          <svg className="w-3.5 h-3.5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
          <span className="text-xs text-slate-400 font-medium">Your info stays private. No spam. Ever.</span>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2 pt-1 border-t border-slate-100">
          <span className="inline-flex items-center gap-1 text-[11px] font-bold text-green-700 bg-green-50 px-2.5 py-1 rounded-full border border-green-100">
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            Licensed & Bonded · C-20 #1155955
          </span>
          <span className="inline-flex items-center gap-1 text-[11px] font-bold text-brand-blue bg-brand-blue/5 px-2.5 py-1 rounded-full border border-brand-blue/10">
            <svg className="w-3 h-3 text-yellow-400" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
            5.0★ on Google
          </span>
        </div>
      </form>

      {status === 'success' && (
        <div className="absolute inset-0 bg-white rounded-2xl flex flex-col items-center justify-center text-center p-8 z-10 animate-fade-in">
          <div className="w-20 h-20 rounded-2xl bg-green-50 flex items-center justify-center text-green-600 mb-5">
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          </div>
          <h3 className="text-2xl font-extrabold text-brand-blue mb-2">You're All Set!</h3>
          <p className="text-sm text-slate-600 max-w-xs font-medium mb-2">A dispatcher is reviewing your request and will call you within 15 minutes.</p>
          <p className="text-xs text-slate-400 font-semibold">Keep your phone nearby!</p>
          <button onClick={() => { setStatus('idle'); setFormData({ name: '', phone: '', email: '', issue: '', city: '' }); }}
            className="mt-6 text-xs font-extrabold text-brand-red uppercase tracking-wider hover:underline">Submit another request</button>
        </div>
      )}

      {status === 'error' && (
        <div className="absolute inset-0 bg-white rounded-2xl flex flex-col items-center justify-center text-center p-8 z-10 animate-fade-in">
          <div className="w-20 h-20 rounded-2xl bg-red-50 flex items-center justify-center text-brand-red mb-5">
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" /></svg>
          </div>
          <h3 className="text-xl font-extrabold text-brand-blue mb-2">Let's get this sorted</h3>
          <p className="text-sm text-slate-600 max-w-xs font-medium mb-2">{errorMsg}</p>
          <a href={PHONE_HREF} className="inline-flex items-center gap-2 bg-brand-red text-white font-extrabold px-5 py-3 rounded-xl text-sm hover:brightness-110 transition-all">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
            Call (714) 853-5534
          </a>
          <button onClick={() => setStatus('idle')}
            className="mt-4 text-xs font-extrabold text-brand-red uppercase tracking-wider hover:underline">Try again</button>
        </div>
      )}
    </div>
  );
}