/**
 * Central internal linking data for hiloheatingandair.com
 * Single source of truth for service/area URLs, anchor text, and related-links mapping.
 * Used by RelatedServices, ServiceAreasLinks, Breadcrumbs, Footer, and blog components.
 */

export interface LinkItem {
  name: string;
  href: string;
  description?: string;
}

// ── Service Category Children ──
export const serviceCategories: LinkItem[] = [
  { name: 'Air Conditioning Services', href: '/services/air-conditioning-services/', description: 'Expert AC repair, installation & maintenance' },
  { name: 'Heating Services', href: '/services/heating-services/', description: 'Furnace repair, installation & maintenance' },
  { name: 'HVAC Services', href: '/services/hvac-services/', description: 'Complete HVAC installation, replacement & repair' },
  { name: 'Indoor Air Quality Solutions', href: '/services/indoor-air-quality-solutions/', description: 'Air purification, filtration & duct services' },
  { name: 'Commercial HVAC Services', href: '/services/commercial-hvac-services/', description: 'HVAC for offices, retail, restaurants & warehouses' },
];

// ── All leaf service pages (18) ──
export const allServices: LinkItem[] = [
  { name: 'AC Maintenance', href: '/services/air-conditioning-services/ac-maintenance/', description: 'Seasonal tune-ups & AC maintenance' },
  { name: 'AC Installation', href: '/services/air-conditioning-services/air-conditioning-installation/', description: 'Professional AC installation with proper sizing' },
  { name: 'Emergency AC Repair', href: '/services/air-conditioning-services/emergency-ac-repair/', description: '24/7 emergency AC repair & same-day service' },
  { name: 'Mini Split Installation', href: '/services/air-conditioning-services/mini-split-installation/', description: 'Ductless mini-split systems & multi-zone' },
  { name: 'Heating Repair', href: '/services/heating-services/heating-repair/', description: 'Emergency furnace & heating repair' },
  { name: 'Heating Maintenance', href: '/services/heating-services/heating-maintenance/', description: 'Seasonal furnace tune-ups & inspections' },
  { name: 'Heating Installation', href: '/services/heating-services/heating-installation/', description: 'Furnace & heating system installation' },
  { name: 'HVAC Installation', href: '/services/hvac-services/hvac-installation/', description: 'New HVAC system installation' },
  { name: 'HVAC Replacement', href: '/services/hvac-services/hvac-replacement/', description: 'Full HVAC system replacement & inspection' },
  { name: 'Emergency HVAC Repair', href: '/services/hvac-services/emergency-hvac-repair/', description: '24/7 emergency HVAC repair' },
  { name: 'HVAC Air Balancing', href: '/services/indoor-air-quality-solutions/hvac-air-balancing/', description: 'Fix uneven temperatures & airflow' },
  { name: 'HVAC Duct Repair', href: '/services/indoor-air-quality-solutions/hvac-duct-repair/', description: 'Professional duct repair & replacement' },
  { name: 'HVAC Duct Sealing', href: '/services/indoor-air-quality-solutions/hvac-duct-sealing/', description: 'Seal leaky ducts & improve efficiency' },
  { name: 'HVAC Humidifier Installation', href: '/services/indoor-air-quality-solutions/air-humidifiers/', description: 'Whole-home humidifier installation' },
  { name: 'Duct Installation', href: '/services/indoor-air-quality-solutions/duct-installation/', description: 'New ductwork for additions & replacements' },
  { name: 'Dryer Vent Cleaning', href: '/services/indoor-air-quality-solutions/dryer-vent-cleaning/', description: 'Dryer vent cleaning & fire prevention' },
  { name: 'Commercial HVAC', href: '/services/commercial-hvac-services/', description: 'Commercial HVAC installation & maintenance' },
  { name: 'Indoor Air Quality', href: '/services/indoor-air-quality-solutions/', description: 'Air purifiers, filtration & duct cleaning' },
];

// ── Grouped by category for RelatedServices cards ──
export const servicesByCategory: Record<string, LinkItem[]> = {
  'air-conditioning': [
    { name: 'AC Maintenance', href: '/services/air-conditioning-services/ac-maintenance/', description: 'Keep your AC efficient with seasonal tune-ups' },
    { name: 'AC Installation', href: '/services/air-conditioning-services/air-conditioning-installation/', description: 'Professional sizing & expert installation' },
    { name: 'Emergency AC Repair', href: '/services/air-conditioning-services/emergency-ac-repair/', description: '24/7 emergency & same-day AC repair' },
    { name: 'Mini Split Installation', href: '/services/air-conditioning-services/mini-split-installation/', description: 'Ductless cooling for additions & garages' },
  ],
  'heating': [
    { name: 'Heating Repair', href: '/services/heating-services/heating-repair/', description: 'Fast furnace & heater repair, same-day service' },
    { name: 'Heating Maintenance', href: '/services/heating-services/heating-maintenance/', description: 'Fall tune-ups to prevent winter breakdowns' },
    { name: 'Heating Installation', href: '/services/heating-services/heating-installation/', description: 'Furnace sizing & installation done right' },
  ],
  'hvac': [
    { name: 'HVAC Installation', href: '/services/hvac-services/hvac-installation/', description: 'New system installation with proper sizing' },
    { name: 'HVAC Replacement', href: '/services/hvac-services/hvac-replacement/', description: 'Honest replacement after thorough inspection' },
    { name: 'Emergency HVAC Repair', href: '/services/hvac-services/emergency-hvac-repair/', description: '24/7 emergency heating & cooling repair' },
  ],
  'iaq': [
    { name: 'Duct Installation', href: '/services/indoor-air-quality-solutions/duct-installation/', description: 'New ductwork for better airflow' },
    { name: 'Duct Repair', href: '/services/indoor-air-quality-solutions/hvac-duct-repair/', description: 'Patch leaks & fix crushed ducts' },
    { name: 'Duct Sealing', href: '/services/indoor-air-quality-solutions/hvac-duct-sealing/', description: 'Seal gaps with mastic to save energy' },
    { name: 'Humidifier Installation', href: '/services/indoor-air-quality-solutions/air-humidifiers/', description: 'Whole-home humidity control' },
    { name: 'Air Balancing', href: '/services/indoor-air-quality-solutions/hvac-air-balancing/', description: 'Even temperatures in every room' },
    { name: 'Dryer Vent Cleaning', href: '/services/indoor-air-quality-solutions/dryer-vent-cleaning/', description: 'Prevent fires & improve dryer efficiency' },
  ],
  'commercial': [
    { name: 'Commercial HVAC Services', href: '/services/commercial-hvac-services/', description: 'Rooftop units, multi-zone & maintenance plans' },
  ],
};

// ── Service Areas (12) ──
export const serviceAreas: LinkItem[] = [
  { name: 'Anaheim', href: '/service-areas/anaheim/', description: 'AC repair & HVAC services in Anaheim' },
  { name: 'Costa Mesa', href: '/service-areas/costa-mesa/', description: 'HVAC repair & installation in Costa Mesa' },
  { name: 'Garden Grove', href: '/service-areas/garden-grove/', description: 'AC & heating services in Garden Grove' },
  { name: 'Irvine', href: '/service-areas/irvine/', description: 'Heating & cooling services in Irvine' },
  { name: 'Laguna Hills', href: '/service-areas/laguna-hills/', description: 'HVAC solutions in Laguna Hills' },
  { name: 'Los Angeles', href: '/service-areas/los-angeles/', description: 'AC & furnace services in Los Angeles' },
  { name: 'Newport Beach', href: '/service-areas/newport-beach/', description: 'Coastal HVAC services in Newport Beach' },
  { name: 'Orange', href: '/service-areas/orange/', description: 'Heating & AC services in Orange' },
  { name: 'Orange County', href: '/service-areas/orange-county/', description: 'Complete HVAC solutions across Orange County' },
  { name: 'Rancho Santa Margarita', href: '/service-areas/rancho-santa-margarita/', description: 'HVAC services in Rancho Santa Margarita' },
  { name: 'Santa Ana', href: '/service-areas/santa-ana/', description: 'HVAC repair & maintenance in Santa Ana' },
  { name: 'Stanton', href: '/service-areas/stanton/', description: 'Local HVAC in Stanton — our HQ city' },
];

// ── Hub pages (for contextual linking) ──
export const hubPages: LinkItem[] = [
  { name: 'All Services', href: '/services/', description: 'Explore all HVAC services' },
  { name: 'Service Areas', href: '/service-areas/', description: 'See all cities we serve' },
  { name: 'Blogs', href: '/blogs/', description: 'HVAC tips & guides' },
  { name: 'About Us', href: '/about-us/', description: 'Our story & team' },
  { name: 'Contact Us', href: '/contact-us/', description: 'Free estimate & scheduling' },
];

// ── Recommended internal links per service page (curated for topical relevance) ──
export const relatedMap: Record<string, LinkItem[]> = {
  'ac-maintenance': [
    { name: 'Emergency AC Repair', href: '/services/air-conditioning-services/emergency-ac-repair/' },
    { name: 'AC Installation', href: '/services/air-conditioning-services/air-conditioning-installation/' },
    { name: 'HVAC Duct Sealing', href: '/services/indoor-air-quality-solutions/hvac-duct-sealing/' },
    { name: 'Heating Maintenance', href: '/services/heating-services/heating-maintenance/' },
  ],
  'ac-installation': [
    { name: 'AC Maintenance', href: '/services/air-conditioning-services/ac-maintenance/' },
    { name: 'Mini Split Installation', href: '/services/air-conditioning-services/mini-split-installation/' },
    { name: 'HVAC Installation', href: '/services/hvac-services/hvac-installation/' },
    { name: 'Duct Installation', href: '/services/indoor-air-quality-solutions/duct-installation/' },
  ],
  'emergency-ac-repair': [
    { name: 'AC Maintenance', href: '/services/air-conditioning-services/ac-maintenance/' },
    { name: 'AC Installation', href: '/services/air-conditioning-services/air-conditioning-installation/' },
    { name: 'Emergency HVAC Repair', href: '/services/hvac-services/emergency-hvac-repair/' },
    { name: 'Heating Repair', href: '/services/heating-services/heating-repair/' },
  ],
  'mini-split-installation': [
    { name: 'AC Installation', href: '/services/air-conditioning-services/air-conditioning-installation/' },
    { name: 'HVAC Installation', href: '/services/hvac-services/hvac-installation/' },
    { name: 'AC Maintenance', href: '/services/air-conditioning-services/ac-maintenance/' },
    { name: 'Commercial HVAC', href: '/services/commercial-hvac-services/' },
  ],
  'heating-repair': [
    { name: 'Heating Maintenance', href: '/services/heating-services/heating-maintenance/' },
    { name: 'Heating Installation', href: '/services/heating-services/heating-installation/' },
    { name: 'Emergency HVAC Repair', href: '/services/hvac-services/emergency-hvac-repair/' },
    { name: 'AC Maintenance', href: '/services/air-conditioning-services/ac-maintenance/' },
  ],
  'heating-maintenance': [
    { name: 'Heating Repair', href: '/services/heating-services/heating-repair/' },
    { name: 'Heating Installation', href: '/services/heating-services/heating-installation/' },
    { name: 'AC Maintenance', href: '/services/air-conditioning-services/ac-maintenance/' },
    { name: 'HVAC Duct Sealing', href: '/services/indoor-air-quality-solutions/hvac-duct-sealing/' },
  ],
  'heating-installation': [
    { name: 'Heating Repair', href: '/services/heating-services/heating-repair/' },
    { name: 'HVAC Installation', href: '/services/hvac-services/hvac-installation/' },
    { name: 'Heating Maintenance', href: '/services/heating-services/heating-maintenance/' },
    { name: 'HVAC Replacement', href: '/services/hvac-services/hvac-replacement/' },
  ],
  'hvac-installation': [
    { name: 'HVAC Replacement', href: '/services/hvac-services/hvac-replacement/' },
    { name: 'AC Installation', href: '/services/air-conditioning-services/air-conditioning-installation/' },
    { name: 'Heating Installation', href: '/services/heating-services/heating-installation/' },
    { name: 'Duct Installation', href: '/services/indoor-air-quality-solutions/duct-installation/' },
  ],
  'hvac-replacement': [
    { name: 'HVAC Installation', href: '/services/hvac-services/hvac-installation/' },
    { name: 'Heating Installation', href: '/services/heating-services/heating-installation/' },
    { name: 'AC Installation', href: '/services/air-conditioning-services/air-conditioning-installation/' },
    { name: 'HVAC Duct Repair', href: '/services/indoor-air-quality-solutions/hvac-duct-repair/' },
  ],
  'emergency-hvac-repair': [
    { name: 'Emergency AC Repair', href: '/services/air-conditioning-services/emergency-ac-repair/' },
    { name: 'Heating Repair', href: '/services/heating-services/heating-repair/' },
    { name: 'HVAC Installation', href: '/services/hvac-services/hvac-installation/' },
    { name: 'HVAC Replacement', href: '/services/hvac-services/hvac-replacement/' },
  ],
  'hvac-air-balancing': [
    { name: 'HVAC Duct Sealing', href: '/services/indoor-air-quality-solutions/hvac-duct-sealing/' },
    { name: 'HVAC Duct Repair', href: '/services/indoor-air-quality-solutions/hvac-duct-repair/' },
    { name: 'Duct Installation', href: '/services/indoor-air-quality-solutions/duct-installation/' },
    { name: 'AC Maintenance', href: '/services/air-conditioning-services/ac-maintenance/' },
  ],
  'hvac-duct-repair': [
    { name: 'HVAC Duct Sealing', href: '/services/indoor-air-quality-solutions/hvac-duct-sealing/' },
    { name: 'Duct Installation', href: '/services/indoor-air-quality-solutions/duct-installation/' },
    { name: 'HVAC Air Balancing', href: '/services/indoor-air-quality-solutions/hvac-air-balancing/' },
    { name: 'Indoor Air Quality', href: '/services/indoor-air-quality-solutions/' },
  ],
  'hvac-duct-sealing': [
    { name: 'HVAC Duct Repair', href: '/services/indoor-air-quality-solutions/hvac-duct-repair/' },
    { name: 'Duct Installation', href: '/services/indoor-air-quality-solutions/duct-installation/' },
    { name: 'HVAC Air Balancing', href: '/services/indoor-air-quality-solutions/hvac-air-balancing/' },
    { name: 'AC Maintenance', href: '/services/air-conditioning-services/ac-maintenance/' },
  ],
  'air-humidifiers': [
    { name: 'Indoor Air Quality', href: '/services/indoor-air-quality-solutions/' },
    { name: 'HVAC Duct Sealing', href: '/services/indoor-air-quality-solutions/hvac-duct-sealing/' },
    { name: 'Duct Installation', href: '/services/indoor-air-quality-solutions/duct-installation/' },
    { name: 'Heating Maintenance', href: '/services/heating-services/heating-maintenance/' },
  ],
  'duct-installation': [
    { name: 'HVAC Duct Repair', href: '/services/indoor-air-quality-solutions/hvac-duct-repair/' },
    { name: 'HVAC Duct Sealing', href: '/services/indoor-air-quality-solutions/hvac-duct-sealing/' },
    { name: 'HVAC Air Balancing', href: '/services/indoor-air-quality-solutions/hvac-air-balancing/' },
    { name: 'HVAC Installation', href: '/services/hvac-services/hvac-installation/' },
  ],
  'dryer-vent-cleaning': [
    { name: 'Indoor Air Quality', href: '/services/indoor-air-quality-solutions/' },
    { name: 'HVAC Duct Repair', href: '/services/indoor-air-quality-solutions/hvac-duct-repair/' },
    { name: 'Duct Installation', href: '/services/indoor-air-quality-solutions/duct-installation/' },
    { name: 'AC Maintenance', href: '/services/air-conditioning-services/ac-maintenance/' },
  ],
  'commercial-hvac': [
    { name: 'HVAC Installation', href: '/services/hvac-services/hvac-installation/' },
    { name: 'HVAC Replacement', href: '/services/hvac-services/hvac-replacement/' },
    { name: 'Duct Installation', href: '/services/indoor-air-quality-solutions/duct-installation/' },
    { name: 'Emergency HVAC Repair', href: '/services/hvac-services/emergency-hvac-repair/' },
  ],
};

// Helper: get related links by key or fallback to generic 4
export function getRelated(key: string): LinkItem[] {
  return relatedMap[key] ?? allServices.slice(0, 4);
}

// ── Compatibility aliases (used by ServicePageLayout / Footer) ──
export const hubServices = serviceCategories;
export const serviceLinks = { hub: { name: 'All Services', href: '/services/' }, airConditioning: { name: 'Air Conditioning', href: '/services/air-conditioning-services/' }, acInstallation: { name: 'AC Installation', href: '/services/air-conditioning-services/air-conditioning-installation/' }, acMaintenance: { name: 'AC Maintenance', href: '/services/air-conditioning-services/ac-maintenance/' }, emergencyAc: { name: 'Emergency AC Repair', href: '/services/air-conditioning-services/emergency-ac-repair/' }, miniSplit: { name: 'Mini Split Installation', href: '/services/air-conditioning-services/mini-split-installation/' }, heating: { name: 'Heating Services', href: '/services/heating-services/' }, heatingRepair: { name: 'Heating Repair', href: '/services/heating-services/heating-repair/' }, heatingMaintenance: { name: 'Heating Maintenance', href: '/services/heating-services/heating-maintenance/' }, heatingInstallation: { name: 'Heating Installation', href: '/services/heating-services/heating-installation/' }, hvac: { name: 'HVAC Services', href: '/services/hvac-services/' }, hvacInstallation: { name: 'HVAC Installation', href: '/services/hvac-services/hvac-installation/' }, hvacReplacement: { name: 'HVAC Replacement', href: '/services/hvac-services/hvac-replacement/' }, emergencyHvac: { name: 'Emergency HVAC Repair', href: '/services/hvac-services/emergency-hvac-repair/' }, iaq: { name: 'Indoor Air Quality', href: '/services/indoor-air-quality-solutions/' }, airHumidifiers: { name: 'HVAC Humidifier', href: '/services/indoor-air-quality-solutions/air-humidifiers/' }, ductInstall: { name: 'Duct Installation', href: '/services/indoor-air-quality-solutions/duct-installation/' }, ductRepair: { name: 'Duct Repair', href: '/services/indoor-air-quality-solutions/hvac-duct-repair/' }, ductSealing: { name: 'Duct Sealing', href: '/services/indoor-air-quality-solutions/hvac-duct-sealing/' }, airBalancing: { name: 'Air Balancing', href: '/services/indoor-air-quality-solutions/hvac-air-balancing/' }, dryerVent: { name: 'Dryer Vent Cleaning', href: '/services/indoor-air-quality-solutions/dryer-vent-cleaning/' }, commercial: { name: 'Commercial HVAC', href: '/services/commercial-hvac-services/' } } as const;
export const areaLinks = serviceAreas;

// Blog -> service mapping (for [...slug].astro)
export const blogServiceMap: Record<string, LinkItem[]> = {
  'anaheim-ac-repair-guide': [allServices[1], allServices[2], allServices[0]],
  'ac-repair-newport-beach-coastal': [allServices[0], allServices[12], allServices[11]],
  'ac-repair-orange-county-geography': [allServices[1], allServices[7], allServices[11]],
  'ac-repair-los-angeles-city-strain': [allServices[1], allServices[2], allServices[7]],
  'furnace-repair-rancho-santa-margarita': [allServices[4], allServices[5], allServices[0]],
  'furnace-repair-los-angeles-mild-climate': [allServices[4], allServices[6], allServices[7]],
  'furnace-installation-laguna-hills': [allServices[6], allServices[4], allServices[7]],
  'heating-repair-los-angeles-equipment-types': [allServices[4], allServices[5], allServices[16]],
  'ac-installation-los-angeles-planning': [allServices[1], allServices[7], allServices[3]],
  'ac-installation-los-angeles-guide': [allServices[1], allServices[7], allServices[0]],
  'heating-repairs-los-angeles-guide': [allServices[4], allServices[5], allServices[9]],
  'emergency-heating-repair': [allServices[9], allServices[4], allServices[7]],
  'heater-died-2am': [allServices[9], allServices[4], allServices[5]],
  'why-ac-dies-in-july': [allServices[2], allServices[0], allServices[8]],
  'ac-will-quit': [allServices[0], allServices[8], allServices[7]],
  'ac-just-died-what-to-do': [allServices[2], allServices[1], allServices[0]],
  'ac-blowing-warm-air': [allServices[1], allServices[0], allServices[11]],
  'beat-the-heat-ac-guide': [allServices[1], allServices[3], allServices[0]],
  'commercial-hvac-mistakes': [allServices[16], allServices[7], allServices[8]],
  'skipping-hvac-maintenance-costs-more': [allServices[0], allServices[5], allServices[7]],
  'seasonal-hvac-maintenance': [allServices[0], allServices[5], allServices[7]],
  'hvac-replacement': [allServices[8], allServices[7], allServices[1]],
  'set-it-and-forget-it-hvac': [allServices[0], allServices[5], allServices[17]],
  'home-comfort-habit': [allServices[17], allServices[12], allServices[13]],
  'split-system-installation': [allServices[3], allServices[1], allServices[7]],
};
