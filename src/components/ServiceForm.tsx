import { useState, useEffect, useRef } from 'react';

const SERVICES = [
  'AC Repair',
  'Heating/Furnace Repair',
  'Maintenance / Tune-Up',
  'New AC / HVAC Installation',
  'Mini-Split',
  'Thermostat',
  'Indoor Air Quality',
  'Commercial HVAC',
  'Other',
] as const;

const PREFERRED_TIMES = [
  'Morning',
  'Afternoon',
  'Evening / Earliest Available',
] as const;

const emptyForm = {
  name: '',
  email: '',
  phone: '',
  city: '',
  issue: '',
  service: '',
  preferredDate: '',
  preferredTime: '',
  propertyType: '',
  notes: '',
};

const inputClass =
  'w-full px-4 py-3 rounded-lg border border-brand-blue/15 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent text-brand-blue placeholder:text-brand-blue/40';

const labelClass = 'block text-xs font-bold text-slate-600 uppercase tracking-wider mb-1.5';

type PhotoFile = { name: string; dataUrl: string };

export default function ServiceForm() {
  const [formData, setFormData] = useState(emptyForm);
  const [photos, setPhotos] = useState<PhotoFile[]>([]);
  const [captcha, setCaptcha] = useState({ num1: 0, num2: 0, answer: 0, input: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [captchaError, setCaptchaError] = useState(false);
  const [photoError, setPhotoError] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const generateCaptcha = () => {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    setCaptcha({ num1, num2, answer: num1 + num2, input: '' });
    setCaptchaError(false);
  };

  useEffect(() => {
    generateCaptcha();
  }, []);

  const update = (field: keyof typeof emptyForm, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handlePhotos = async (files: FileList | null) => {
    if (!files?.length) return;
    setPhotoError('');

    const remaining = 5 - photos.length;
    if (remaining <= 0) {
      setPhotoError('You can upload up to 5 photos.');
      return;
    }

    const selected = Array.from(files).slice(0, remaining);
    const next: PhotoFile[] = [];

    for (const file of selected) {
      if (!file.type.startsWith('image/')) {
        setPhotoError('Please upload image files only.');
        continue;
      }
      if (file.size > 4 * 1024 * 1024) {
        setPhotoError('Each photo must be under 4MB.');
        continue;
      }
      const dataUrl = await new Promise<string>((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(String(reader.result));
        reader.onerror = reject;
        reader.readAsDataURL(file);
      });
      next.push({ name: file.name, dataUrl });
    }

    if (next.length) setPhotos((prev) => [...prev, ...next]);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const removePhoto = (index: number) => {
    setPhotos((prev) => prev.filter((_, i) => i !== index));
    setPhotoError('');
  };

  const buildMessage = () => {
    const lines = [
      `Phone: ${formData.phone}`,
      `City: ${formData.city}`,
      `Service Needed: ${formData.service}`,
      `Preferred Service Date: ${formData.preferredDate}`,
      `Preferred Time: ${formData.preferredTime}`,
      formData.propertyType ? `Property Type: ${formData.propertyType}` : null,
      '',
      'Issue:',
      formData.issue,
      formData.notes ? `\nAdditional Notes:\n${formData.notes}` : null,
      photos.length ? `\nPhotos attached: ${photos.map((p) => p.name).join(', ')}` : null,
    ];
    return lines.filter((line) => line !== null).join('\n');
  };

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
          message: buildMessage(),
          phone: formData.phone,
          city: formData.city,
          issue: formData.issue,
          service: formData.service,
          preferredDate: formData.preferredDate,
          preferredTime: formData.preferredTime,
          propertyType: formData.propertyType || undefined,
          notes: formData.notes || undefined,
          photos: photos.length
            ? photos.map((p) => ({ name: p.name, data: p.dataUrl }))
            : undefined,
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

  const resetForm = () => {
    setStatus('idle');
    generateCaptcha();
    setFormData(emptyForm);
    setPhotos([]);
    setPhotoError('');
  };

  return (
    <div className="bg-white border-2 border-brand-blue/10 rounded-2xl shadow-xl p-6 sm:p-8 relative">
      <h3 className="text-2xl font-bold text-brand-blue mb-1">Request Service</h3>
      <p className="text-sm text-slate-600 font-medium mb-6">We'll call you within 15 minutes.</p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="sf-name" className={labelClass}>Full Name</label>
          <input id="sf-name" type="text" name="name" required placeholder="Full Name"
            className={inputClass}
            value={formData.name} onChange={(e) => update('name', e.target.value)} />
        </div>

        <div>
          <label htmlFor="sf-email" className={labelClass}>Email</label>
          <input id="sf-email" type="email" name="email" required placeholder="Email"
            className={inputClass}
            value={formData.email} onChange={(e) => update('email', e.target.value)} />
        </div>

        <div>
          <label htmlFor="sf-phone" className={labelClass}>Phone Number</label>
          <input id="sf-phone" type="tel" name="phone" required placeholder="Phone Number"
            className={inputClass}
            value={formData.phone} onChange={(e) => update('phone', e.target.value)} />
        </div>

        <div>
          <label htmlFor="sf-city" className={labelClass}>City</label>
          <input id="sf-city" type="text" name="city" required placeholder="City"
            className={inputClass}
            value={formData.city} onChange={(e) => update('city', e.target.value)} />
        </div>

        <div>
          <label htmlFor="sf-issue" className={labelClass}>What issue are you experiencing?</label>
          <textarea id="sf-issue" name="issue" rows={3} required
            placeholder="Short description of the issue..."
            className={`${inputClass} resize-none`}
            value={formData.issue} onChange={(e) => update('issue', e.target.value)} />
        </div>

        <div>
          <label htmlFor="sf-service" className={labelClass}>What service do you need?</label>
          <select id="sf-service" name="service" required
            className={`${inputClass} appearance-none bg-white`}
            value={formData.service} onChange={(e) => update('service', e.target.value)}>
            <option value="" disabled>Select a service</option>
            {SERVICES.map((service) => (
              <option key={service} value={service}>{service}</option>
            ))}
          </select>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="sf-date" className={labelClass}>Preferred Service Date</label>
            <input id="sf-date" type="date" name="preferredDate" required
              className={inputClass}
              value={formData.preferredDate} onChange={(e) => update('preferredDate', e.target.value)} />
          </div>
          <div>
            <label htmlFor="sf-time" className={labelClass}>Preferred Time</label>
            <select id="sf-time" name="preferredTime" required
              className={`${inputClass} appearance-none bg-white`}
              value={formData.preferredTime} onChange={(e) => update('preferredTime', e.target.value)}>
              <option value="" disabled>Select a time</option>
              {PREFERRED_TIMES.map((time) => (
                <option key={time} value={time}>{time}</option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="sf-property" className={labelClass}>
            Property Type <span className="normal-case font-medium text-slate-400">(optional)</span>
          </label>
          <select id="sf-property" name="propertyType"
            className={`${inputClass} appearance-none bg-white`}
            value={formData.propertyType} onChange={(e) => update('propertyType', e.target.value)}>
            <option value="">Select property type</option>
            <option value="Residential">Residential</option>
            <option value="Commercial">Commercial</option>
          </select>
        </div>

        <div>
          <label className={labelClass}>
            Upload Photos <span className="normal-case font-medium text-slate-400">(optional)</span>
          </label>
          <p className="text-xs text-slate-500 mb-2">
            Unit, thermostat, error code, leak, or anything that helps us diagnose faster.
          </p>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            multiple
            className="block w-full text-sm text-brand-blue file:mr-3 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-brand-blue/10 file:text-brand-blue file:font-bold file:text-xs hover:file:bg-brand-blue/15"
            onChange={(e) => handlePhotos(e.target.files)}
          />
          {photoError && <p className="text-xs text-brand-red mt-1.5 font-semibold">{photoError}</p>}
          {photos.length > 0 && (
            <ul className="mt-3 space-y-2">
              {photos.map((photo, index) => (
                <li key={`${photo.name}-${index}`} className="flex items-center gap-3 rounded-lg border border-brand-blue/10 bg-brand-blue/[0.03] p-2">
                  <img src={photo.dataUrl} alt="" className="h-12 w-12 rounded object-cover" />
                  <span className="flex-1 truncate text-xs font-semibold text-brand-blue">{photo.name}</span>
                  <button type="button" onClick={() => removePhoto(index)}
                    className="text-xs font-bold text-brand-red hover:underline">
                    Remove
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div>
          <label htmlFor="sf-notes" className={labelClass}>
            Additional Notes <span className="normal-case font-medium text-slate-400">(optional)</span>
          </label>
          <textarea id="sf-notes" name="notes" rows={3}
            placeholder="Gate code, access info, anything else we should know..."
            className={`${inputClass} resize-none`}
            value={formData.notes} onChange={(e) => update('notes', e.target.value)} />
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

        {status === 'error' && (
          <p className="text-sm font-semibold text-brand-red text-center">
            Something went wrong. Please try again or call (714) 853-5534.
          </p>
        )}
      </form>

      {status === 'success' && (
        <div className="absolute inset-0 bg-white rounded-2xl flex flex-col items-center justify-center text-center p-6 space-y-4 z-10">
          <div className="w-16 h-16 rounded-full bg-brand-blue/10 flex items-center justify-center text-brand-blue">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          </div>
          <h3 className="text-xl font-bold text-brand-blue">Request Received!</h3>
          <p className="text-sm text-slate-600 max-w-xs font-semibold">Our dispatcher is matching you with a certified mechanic. We will call you within 15 minutes.</p>
          <button onClick={resetForm} className="text-xs font-extrabold text-brand-red uppercase tracking-wider hover:underline">Submit another request</button>
        </div>
      )}
    </div>
  );
}
