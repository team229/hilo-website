/**
 * UTM Attribution Persistence
 * ----------------------------
 * Captures UTM parameters on first visit and persists them in localStorage
 * so they survive across pages and are available at form submission time.
 *
 * Keys:
 *   hilo_utm   - full UTM object (utm_source, utm_medium, utm_campaign,
 *                utm_content, utm_term, gclid)
 *   hilo_utm_ts - timestamp of when UTM was captured
 */

const STORAGE_KEY = 'hilo_utm';
const STORAGE_TS_KEY = 'hilo_utm_ts';
const UTM_PARAMS = [
  'utm_source',
  'utm_medium',
  'utm_campaign',
  'utm_content',
  'utm_term',
  'gclid',
] as const;

export type UtmParams = Partial<Record<(typeof UTM_PARAMS)[number], string>>;

/** Read UTM params from current URL */
export function getUtmParamsFromUrl(): UtmParams {
  if (typeof window === 'undefined') return {};
  const params = new URLSearchParams(window.location.search);
  const result: UtmParams = {};
  UTM_PARAMS.forEach((key) => {
    const v = params.get(key);
    if (v) result[key] = v;
  });
  return result;
}

/** Save UTM params from URL to localStorage if present */
export function persistUtmParams(): UtmParams {
  if (typeof window === 'undefined' || typeof localStorage === 'undefined')
    return {};

  const fromUrl = getUtmParamsFromUrl();
  const hasAny = UTM_PARAMS.some((k) => Boolean(fromUrl[k]));

  if (hasAny) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(fromUrl));
    localStorage.setItem(STORAGE_TS_KEY, Date.now().toString());
    return fromUrl;
  }

  // Return stored UTM if available
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored) {
    try {
      return JSON.parse(stored) as UtmParams;
    } catch {
      return {};
    }
  }

  return {};
}

/** Get persisted UTM params (from localStorage) */
export function getPersistedUtmParams(): UtmParams {
  if (typeof window === 'undefined' || typeof localStorage === 'undefined')
    return {};
  const stored = localStorage.getItem(STORAGE_KEY);
  if (!stored) return {};
  try {
    return JSON.parse(stored) as UtmParams;
  } catch {
    return {};
  }
}

/** Clear persisted UTM params */
export function clearPersistedUtmParams(): void {
  if (typeof window === 'undefined' || typeof localStorage === 'undefined')
    return;
  localStorage.removeItem(STORAGE_KEY);
  localStorage.removeItem(STORAGE_TS_KEY);
}

/** Initialize UTM persistence - call once on app load */
export function initUtmPersistence(): UtmParams {
  const fromUrl = persistUtmParams();
  return Object.keys(fromUrl).length > 0 ? fromUrl : getPersistedUtmParams();
}