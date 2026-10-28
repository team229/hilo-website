// Shared lead-submission handshake between the forms and /thank-you/.
//
// The Ads conversion fires once, on /thank-you/, and only when this flag is
// present. That prevents double counting (form submit + page view) and stops
// direct/bookmarked visits to /thank-you/ from being recorded as leads.
//
// NOTE: the inline scripts in BaseLayout.astro and thank-you.astro use the same
// literal key because Astro inline scripts cannot import modules. Keep in sync.

export const LEAD_FLAG = 'hilo_lead_submitted';

export function markLeadSubmitted(): void {
  try {
    sessionStorage.setItem(LEAD_FLAG, String(Date.now()));
  } catch {
    // Private mode / storage disabled: conversion still fires from the form.
  }
}

export function consumeLeadSubmission(): boolean {
  try {
    const value = sessionStorage.getItem(LEAD_FLAG);
    if (!value) return false;
    sessionStorage.removeItem(LEAD_FLAG);
    return true;
  } catch {
    return false;
  }
}
