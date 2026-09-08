import { useState, useEffect, useCallback, useRef } from 'react';

const fleetImages = [
  { src: 'https://i.ibb.co/Q7mzQv3G/1112.png', alt: 'HiLo Heating & Air HVAC service fleet heading out for same-day dispatch in Orange County' },
  { src: 'https://i.ibb.co/svQ852CK/112.png', alt: 'Fully loaded HiLo Heating & Air service truck ready for HVAC repair in Orange County' },
  { src: 'https://i.ibb.co/zVGs0xkZ/12.png', alt: 'HiLo HVAC truck stocked with parts for same-day AC repair and heating service' },
  { src: 'https://i.ibb.co/sJqb23V3/6666.png', alt: 'HiLo Heating & Air dispatch fleet ready to service Orange County & LA' },
];

const AUTO_ADVANCE_MS = 4500;

export default function FleetSlider() {
  const [index, setIndex] = useState(0);
  const timer = useRef<number | null>(null);

  const go = useCallback((next: number) => {
    setIndex((next + fleetImages.length) % fleetImages.length);
  }, []);

  const resetTimer = useCallback(() => {
    if (timer.current) window.clearInterval(timer.current);
    timer.current = window.setInterval(() => {
      setIndex((i) => (i + 1) % fleetImages.length);
    }, AUTO_ADVANCE_MS);
  }, []);

  useEffect(() => {
    resetTimer();
    return () => {
      if (timer.current) window.clearInterval(timer.current);
    };
  }, [resetTimer]);

  return (
    <div
      className="relative w-full h-[300px] sm:h-[400px] rounded-2xl overflow-hidden shadow-xl border border-slate-100 group"
      onMouseEnter={() => { if (timer.current) window.clearInterval(timer.current); }}
      onMouseLeave={resetTimer}
    >
      {fleetImages.map((img, i) => (
        <img
          key={img.src}
          src={img.src}
          alt={img.alt}
          loading={i === 0 ? 'eager' : 'lazy'}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${i === index ? 'opacity-100' : 'opacity-0'} ${i === 0 ? 'scale-105' : ''}`}
        />
      ))}

      <button
        type="button"
        aria-label="Previous image"
        onClick={() => { resetTimer(); go(index - 1); }}
        className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-black/40 backdrop-blur-sm text-white flex items-center justify-center hover:bg-brand-red transition-all opacity-70 sm:opacity-0 sm:group-hover:opacity-100"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" /></svg>
      </button>
      <button
        type="button"
        aria-label="Next image"
        onClick={() => { resetTimer(); go(index + 1); }}
        className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-black/40 backdrop-blur-sm text-white flex items-center justify-center hover:bg-brand-red transition-all opacity-70 sm:opacity-0 sm:group-hover:opacity-100"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" /></svg>
      </button>

      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-10 flex items-center gap-2">
        {fleetImages.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => { resetTimer(); setIndex(i); }}
            className={`h-2 rounded-full transition-all duration-300 ${i === index ? 'w-7 bg-brand-red' : 'w-2 bg-white/70 hover:bg-white'}`}
          />
        ))}
      </div>
    </div>
  );
}