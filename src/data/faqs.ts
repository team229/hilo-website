export interface Faq {
  q: string;
  a: string;
}

export interface FaqEntry {
  faqs: Faq[];
  faqSchema: Record<string, unknown>;
}

function buildFaqSchema(faqs: Faq[]): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.a,
      },
    })),
  };
}

function entry(faqs: Faq[]): FaqEntry {
  return { faqs, faqSchema: buildFaqSchema(faqs) };
}

export const faqs: Record<string, FaqEntry> = {
  home: entry([
    {
      q: 'Does HiLo Heating & Air Conditioning offer same-day AC repair services in Anaheim, CA?',
      a: 'HiLo Heating & Air Conditioning provides same-day AC repair throughout Anaheim with certified technicians dispatched quickly to restore your comfort fast.',
    },
    {
      q: 'Does HiLo Heating & Air Conditioning provide furnace repair services in Irvine and Newport Beach, California?',
      a: 'HiLo Heating & Air Conditioning services furnaces throughout Irvine and Newport Beach, delivering reliable same-day heating repair with upfront pricing and no hidden fees.',
    },
    {
      q: 'Does HiLo Heating & Air Conditioning offer furnace installation services in Laguna Hills and Santa Ana?',
      a: 'HiLo Heating & Air Conditioning provides professional furnace installation in Laguna Hills, Santa Ana, and throughout Orange County with financing available and free estimates provided.',
    },
    {
      q: 'How much does mini split installation cost with HiLo Heating & Air Conditioning in Orange County?',
      a: 'Mini split installation costs vary by system size and complexity. HiLo Heating & Air Conditioning provides free estimates, upfront pricing, and flexible financing options with no hidden fees.',
    },
    {
      q: 'Can HiLo Heating & Air Conditioning handle emergency HVAC repairs in Orange County and surrounding areas?',
      a: 'Absolutely. HiLo Heating & Air Conditioning offers 24/7 emergency HVAC repair across Orange County, including Irvine, Santa Ana, Fullerton, and Garden Grove with rapid dispatch.',
    },
    {
      q: 'Is HiLo Heating & Air Conditioning available for air conditioning repair in Los Angeles and Costa Mesa?',
      a: 'HiLo Heating & Air Conditioning dispatches certified HVAC technicians to Los Angeles, Costa Mesa, and surrounding areas for fast, professional air conditioning repair and installation.',
    },
    {
      q: 'What HVAC maintenance services does HiLo Heating & Air Conditioning offer to Orange County homeowners?',
      a: 'HiLo Heating & Air Conditioning offers seasonal HVAC tune-ups, system inspections, filter replacements, and preventative maintenance plans designed to extend equipment life and maximize energy efficiency.',
    },
  ]),

  'services': entry([
    {
      q: 'Does HiLo offer same-day AC repair services in Anaheim?',
      a: 'HiLo Heating & Air Conditioning provides same-day AC repair throughout Anaheim with certified technicians dispatched quickly to restore your comfort fast.',
    },
    {
      q: 'Do you offer 24/7 emergency HVAC service?',
      a: 'Absolutely. HiLo Heating & Air Conditioning offers 24/7 emergency HVAC repair across Orange County, including Irvine, Santa Ana, Fullerton, and Garden Grove with rapid dispatch.',
    },
    {
      q: 'What heating services do you provide?',
      a: 'HiLo Heating & Air Conditioning services furnaces throughout Irvine and Newport Beach, delivering reliable same-day heating repair with upfront pricing and no hidden fees.',
    },
    {
      q: 'What areas do you serve?',
      a: 'HiLo Heating & Air Conditioning dispatches certified HVAC technicians to Los Angeles, Costa Mesa, and surrounding areas for fast, professional air conditioning repair and installation.',
    },
    {
      q: 'Do you offer financing for HVAC installations?',
      a: 'HiLo Heating & Air Conditioning provides professional furnace installation in Laguna Hills, Santa Ana, and throughout Orange County with financing available and free estimates provided.',
    },
    {
      q: 'What is included in your maintenance plans?',
      a: 'HiLo Heating & Air Conditioning offers seasonal HVAC tune-ups, system inspections, filter replacements, and preventative maintenance plans designed to extend equipment life and maximize year-round energy efficiency.',
    },
    {
      q: 'How much does mini split installation cost?',
      a: 'Mini split installation costs vary by system size and complexity. HiLo Heating & Air Conditioning provides free estimates, upfront pricing, and flexible financing options with no hidden fees or surprises.',
    },
    {
      q: 'Do you install air purification systems?',
      a: 'HiLo Heating & Air Conditioning installs air purifiers, humidifiers, filtration systems, and complete ductwork to improve indoor air quality and create healthier, more comfortable home environments year-round.',
    },
    {
      q: 'Do you offer free diagnostics?',
      a: 'HiLo Heating & Air Conditioning completely waives the standard diagnostic fee when you approve any repair, making it easier and more affordable to restore your HVAC system fast.',
    },
  ]),

  'services-air-conditioning': entry([
    {
      q: 'How much does AC repair cost in Anaheim?',
      a: "Cost depends on the issue — a bad capacitor, refrigerant top-off, or clogged drain line is typically an inexpensive fix, while compressor or major component repairs cost more. HiLo Heating & Air Conditioning provides upfront pricing before any work begins, so there are no surprises on the bill.",
    },
    {
      q: 'What are the signs my AC needs repair?',
      a: 'Common warning signs include warm or lukewarm air from the vents, unusual noises like banging or grinding, the system cycling on and off frequently, a sudden spike in your electricity bill, moisture pooling near the unit, rooms that won’t cool down, or musty or burnt smells when the system runs. Catching these early usually means a simpler, less costly repair.',
    },
    {
      q: 'Do you offer same-day AC repair in Anaheim?',
      a: 'Yes, HiLo Heating & Air Conditioning offers same-day service for AC repairs in Anaheim, with technicians typically arriving equipped to complete most repairs in a single visit.',
    },
    {
      q: 'What brands and types of AC systems do you repair?',
      a: "HiLo's technicians work on all major HVAC brands, including Carrier, Trane, Lennox, Goodman, Rheem, and York, and handle a wide range of issues such as refrigerant leaks, compressor problems, capacitor and contactor replacements, fan motor repairs, frozen evaporator coils, thermostat issues, and duct or drainage problems.",
    },
    {
      q: 'Do you offer free diagnostics?',
      a: 'Yes, HiLo Heating & Air Conditioning provides free diagnostics when you move forward with the repair.',
    },
    {
      q: 'Will you try to sell me a new system instead of repairing mine?',
      a: "No — HiLo's approach is to repair a system whenever possible rather than push an unnecessary replacement. If your unit can be fixed, that's the recommendation you'll get.",
    },
    {
      q: 'How long has HiLo been repairing ACs in Anaheim?',
      a: 'HiLo Heating & Air Conditioning has been serving Anaheim homeowners since 2000, with over two decades of experience across all types of residential AC systems.',
    },
    {
      q: 'Do repairs come with a warranty?',
      a: "Yes, HiLo backs its repair work with warranties, so if an issue isn't fully resolved, they'll make it right.",
    },
  ]),

  'services-air-conditioning-emergency-ac-repair': entry([
    {
      q: 'What counts as an AC emergency versus something that can wait?',
      a: "Signs it can't wait include a burning smell, breakers tripping repeatedly, water pooling under the unit, or no air at all during extreme heat. These situations call for immediate attention rather than scheduling a routine appointment for later in the week.",
    },
    {
      q: 'Do you offer 24/7 emergency AC repair in Stanton?',
      a: 'Yes, HiLo Heating and Air answers the phone for emergency AC repair calls in Stanton — day or night — rather than routing you to voicemail or a callback queue.',
    },
    {
      q: 'Can you fix my AC the same day it breaks down?',
      a: "In most cases, yes. HiLo's trucks are stocked with the parts techs commonly need, so most emergency repairs are completed in a single visit rather than requiring a follow-up appointment.",
    },
    {
      q: 'Will I be charged extra for an emergency or same-day repair?',
      a: 'No — HiLo provides a full diagnosis and upfront pricing before any work begins, without adding extra charges just because the repair is urgent.',
    },
    {
      q: 'What kinds of AC emergencies do you handle?',
      a: "HiLo's technicians handle a wide range of urgent issues, including bad compressors, refrigerant leaks, electrical shorts, and units that won't turn on at all.",
    },
    {
      q: 'Why is a broken AC dangerous, not just inconvenient?',
      a: 'During a heat wave, a dead AC can pose real health risks for older adults, babies, and anyone with underlying health conditions, which is part of why prompt emergency repair matters.',
    },
    {
      q: 'Are your technicians licensed and insured?',
      a: 'Yes, HiLo Heating and Air is a licensed California C-20 HVAC contractor, fully insured, bonded, and EPA certified.',
    },
    {
      q: 'How do I schedule emergency service?',
      a: 'Fill out the request form on HiLo’s site and a team member will call you back within 15 minutes, or call directly to reach a real person for immediate assistance.',
    },
  ]),

  'services-air-conditioning-installation': entry([
    {
      q: 'How do I know what size AC unit I need?',
      a: "HiLo evaluates your home's square footage, insulation, window placement, and ductwork before recommending a unit. Sizing matters — an oversized system short-cycles and doesn't properly remove humidity, while an undersized one runs nonstop and still can't keep up. The right size is based on your actual home, not a generic estimate.",
    },
    {
      q: 'What does the AC installation process look like?',
      a: "The process starts with a home assessment and an honest recommendation, followed by a written quote so pricing doesn't change later. On install day, the old unit is removed, the new one is installed, and everything is connected and tested before the technician leaves. Before wrapping up, they'll walk you through the thermostat and basic maintenance expectations.",
    },
    {
      q: 'Does the brand of AC unit matter more than the installer?',
      a: 'Not really — a high-quality unit installed incorrectly (wrong sizing, poor ductwork connections, an improper refrigerant charge) can still perform poorly and drive up energy bills. Correct installation matters just as much as, if not more than, the equipment itself.',
    },
    {
      q: 'What brands of AC units do you install?',
      a: "HiLo works with pretty much every major HVAC brand, so you're not limited to whatever happens to be in stock.",
    },
    {
      q: 'How much does AC installation cost in Los Angeles?',
      a: "Cost varies based on your home's size, existing ductwork, and the unit selected. HiLo provides a written quote upfront after assessing your home, so there are no surprise costs later.",
    },
    {
      q: 'Do you offer same-day service for AC installation?',
      a: 'Same-day service is available for many requests — fill out a request form or call, and HiLo will follow up within about 15 minutes to discuss scheduling.',
    },
    {
      q: 'Are your technicians licensed and insured?',
      a: 'Yes, HiLo Heating and Air is a licensed California C-20 HVAC contractor, fully insured, bonded, and EPA certified.',
    },
    {
      q: 'What happens after the new AC unit is installed?',
      a: 'Before leaving, the technician walks you through how the thermostat works, what routine maintenance to expect, and when to schedule your first tune-up, so you understand the system running in your home.',
    },
  ]),

  'services-air-conditioning-ac-maintenance': entry([
    {
      q: 'Why does AC maintenance matter if my system seems to be working fine?',
      a: "Routine maintenance catches small, inexpensive problems — like a leaking refrigerant line or a failing capacitor — before they turn into major repairs. By the time something is obviously broken, you've usually missed the cheaper fix. Regular maintenance is what keeps small issues small.",
    },
    {
      q: 'What does an AC maintenance visit actually check?',
      a: "A maintenance visit covers coils, refrigerant pressure, wiring, thermostat accuracy, and ductwork for leaks that aren't visible to homeowners. It's not glamorous work, but it's a major factor in whether a system lasts eight years or fifteen.",
    },
    {
      q: 'When is the best time to schedule AC maintenance?',
      a: 'Spring, before your system is working hard through summer, rather than waiting until a breakdown forces a panicked call in the middle of a heat wave. Scheduling ahead of the season also means problems surface while it’s still mild outside, not during a 105-degree afternoon.',
    },
    {
      q: "What happens if the technician doesn't find any problems?",
      a: "If the system checks out fine, that's exactly what you'll be told — no manufactured issues to justify the visit. If something looks borderline, it gets flagged so you can decide on your own timeline whether to address it.",
    },
    {
      q: 'How often should I have my AC serviced?',
      a: 'A seasonal check, typically once a year ahead of summer, is generally enough to catch developing issues before they become emergency repairs. Units serviced regularly are far less likely to end up as emergency calls.',
    },
    {
      q: 'Do you offer maintenance plans or just one-time visits?',
      a: 'Both. Whether you book a single maintenance visit or a standing plan, your system is serviced with the same level of thoroughness.',
    },
    {
      q: 'Are your technicians licensed and insured?',
      a: 'Yes, HiLo Heating and Air is licensed and insured, with technicians trained to catch issues most homeowners would miss.',
    },
    {
      q: 'How do I schedule AC maintenance in Stanton?',
      a: 'Fill out a service request form or call HiLo directly, and a team member will follow up to schedule your visit.',
    },
  ]),

  'services-air-conditioning-mini-split': entry([
    {
      q: 'How much does mini split installation cost?',
      a: 'Cost varies based on the number of zones needed, the unit’s capacity, and how complex the installation is. Factors like line set length, electrical work, wall or ceiling type, and whether you’re installing one zone or several all affect the final price. HiLo evaluates your specific space and provides a real number upfront rather than a generic estimate.',
    },
    {
      q: 'Why choose a mini split instead of central air?',
      a: 'Mini splits skip ductwork entirely — the indoor unit mounts on a wall or ceiling and connects through a small hole to an outdoor compressor. This makes them a clean solution for older homes without existing ducts, additions that were never connected to central air, or a single room that runs too hot or too cold compared to the rest of the house.',
    },
    {
      q: 'How do you determine what size mini split I need?',
      a: 'HiLo measures your space and calculates the correct BTU rating before installation. An oversized unit short-cycles and wastes energy, while an undersized one runs constantly and still underperforms — proper sizing is essential to getting the efficiency and comfort a mini split is supposed to deliver.',
    },
    {
      q: 'Does it matter who installs my mini split?',
      a: 'Yes — mini splits require precise installation, including a proper vacuum seal on refrigerant lines, exact electrical connections, and a secure mount to avoid long-term vibration noise. A rushed or careless installation can get the unit running, but not running quietly or efficiently for the long haul.',
    },
    {
      q: 'What types of spaces are mini splits good for?',
      a: 'HiLo has installed mini splits in garages, home additions, ADUs, and older houses without existing ductwork throughout Stanton — essentially any space that’s difficult or impractical to connect to a central ducted system.',
    },
    {
      q: 'Can a mini split handle more than one room?',
      a: 'Yes, multi-zone mini split systems can cover multiple rooms, such as several bedrooms, from a single outdoor compressor unit, while single-zone setups are typically used for one room or space like a converted garage.',
    },
    {
      q: 'Are your technicians licensed and insured?',
      a: 'Yes, HiLo Heating and Air is licensed and insured for mini split and HVAC installation work.',
    },
    {
      q: 'How do I get a quote for mini split installation?',
      a: 'HiLo walks through your space first to assess zone count, electrical needs, and installation complexity before providing a firm quote — so there are no surprises on the final invoice.',
    },
  ]),

  'services-commercial-hvac': entry([
    {
      q: 'How is commercial HVAC different from residential HVAC?',
      a: 'Commercial systems use different equipment entirely, such as rooftop units, multi-zone setups, and sometimes separate systems for different parts of one building. Different property types also have different needs — a restaurant kitchen requires ventilation a retail store never will, and a server room needs tighter temperature control than an open office floor.',
    },
    {
      q: 'What types of businesses do you service?',
      a: 'HiLo provides commercial HVAC services for offices, retail spaces, restaurants, warehouses, and medical facilities across Orange County, treating each property type according to its specific requirements rather than a one-size-fits-all checklist.',
    },
    {
      q: 'What commercial HVAC services do you offer?',
      a: 'Services include installation, ongoing maintenance contracts, emergency repairs, and full system replacements. HiLo also handles ductwork, since many commercial cooling complaints actually trace back to leaky ducts rather than the unit itself.',
    },
    {
      q: 'Can you schedule maintenance around our business hours?',
      a: 'Yes, HiLo builds maintenance schedules around your operating hours, performing service before you open or after you close rather than during your busiest periods.',
    },
    {
      q: 'How quickly can you respond to a commercial HVAC emergency?',
      a: 'Commercial emergencies are prioritized given the financial impact of downtime — a broken AC during a restaurant’s lunch rush or a hot office in July isn’t just an inconvenience, it can mean lost revenue or productivity. HiLo treats these situations with that urgency in mind.',
    },
    {
      q: 'Why do rooftop units need regular checkups?',
      a: 'Rooftop units tend to fail quietly until they stop working entirely, which is exactly why routine inspections matter more for commercial systems than many business owners realize.',
    },
    {
      q: 'Are your technicians licensed and insured for commercial work?',
      a: 'Yes, HiLo Heating and Air is licensed and insured, with experience handling more complex commercial jobs, not just straightforward residential calls.',
    },
    {
      q: 'How do I get started with commercial HVAC service?',
      a: 'HiLo discusses your business’s specific setup — hours, system age, and past issues — before recommending a service plan, so the approach fits your actual operation rather than a generic package.',
    },
  ]),

  'services-heating': entry([
    {
      q: 'How do I know if my furnace needs repair?',
      a: 'Common warning signs include your home taking longer than usual to heat up, the furnace cycling on and off in short bursts, banging or squealing noises, uneven heating between rooms, a burning smell when the heat kicks on, a rising energy bill with no change in usage, or a pilot light that keeps going out or burns yellow instead of blue.',
    },
    {
      q: 'What causes these furnace problems?',
      a: "These symptoms can point to a faulty igniter, a dirty flame sensor, a blower motor issue, a cracked heat exchanger, or airflow problems from a clogged filter. HiLo's technicians diagnose the actual cause rather than guessing or replacing parts unnecessarily.",
    },
    {
      q: 'What furnace issues do you repair?',
      a: 'HiLo handles ignition system failures, gas valve problems, heat exchanger inspections, thermostat calibration, blower motor repairs, control board issues, and duct-related airflow problems.',
    },
    {
      q: 'What furnace brands do you work on?',
      a: "HiLo's technicians work on all major brands, including Carrier, Trane, Lennox, Goodman, Rheem, and York.",
    },
    {
      q: 'Can most furnace repairs be completed in one visit?',
      a: "Yes — HiLo's trucks are stocked with commonly needed parts, so most repairs are completed in a single visit rather than requiring a follow-up appointment.",
    },
    {
      q: 'Will you push me toward a full furnace replacement instead of a repair?',
      a: "No. If a repair is the more reliable and cost-effective option, that's what HiLo recommends. If replacement genuinely makes more sense — due to the furnace's age, a cracked heat exchanger, or the repair cost — you'll be told that honestly and walked through your options.",
    },
    {
      q: 'How long has HiLo been repairing furnaces in Orange County?',
      a: 'HiLo Heating & Air Conditioning has been serving Orange County homeowners since 2000.',
    },
    {
      q: 'Do furnace repairs come with a warranty?',
      a: 'Yes, every repair is backed by a warranty. If something isn’t right after a visit, HiLo returns to make it right.',
    },
  ]),

  'services-heating-repair': entry([
    {
      q: 'What counts as an emergency heating repair versus something that can wait?',
      a: "Signs it can't wait include no heat at all, a burning smell when the furnace kicks on, strange clicking or banging noises, or a pilot light that won't stay lit. These situations call for immediate attention rather than scheduling routine service for later in the week.",
    },
    {
      q: 'Do you offer 24/7 emergency heating repair?',
      a: "Yes — HiLo's emergency heating repair line is answered by a real person, not routed to voicemail with a promised callback the next day.",
    },
    {
      q: 'What are the most common causes of a furnace losing heat entirely?',
      a: "Furnaces typically fail due to ignition problems, a clogged filter restricting airflow, a faulty thermostat, or a cracked heat exchanger — the last of which is especially important to catch quickly for safety reasons.",
    },
    {
      q: 'How do you diagnose a furnace problem?',
      a: "HiLo's technicians check the ignition system, heat exchanger, blower motor, electrical connections, and thermostat before recommending any repair, rather than guessing or replacing parts that aren't actually broken.",
    },
    {
      q: 'Will I be pushed toward a full furnace replacement?',
      a: "No — if the fix is something simple and inexpensive, that's what you'll be told. Repairs are recommended based on what the furnace actually needs, not on which option is the bigger sale.",
    },
    {
      q: 'Can most heating repairs be completed the same day?',
      a: "In most cases, yes. HiLo's trucks are stocked with the parts techs commonly need, reducing the chance you'll be stuck waiting on a part to ship in while your house stays cold.",
    },
    {
      q: 'Why does a cold house matter more for some households than others?',
      a: 'For older adults, young children, or anyone with health conditions, a cold house isn’t just uncomfortable — it can pose a real safety risk, which is part of why fast emergency response matters.',
    },
    {
      q: 'What should I expect when I call for emergency heating repair?',
      a: 'You’ll be asked a few quick questions to understand the issue and given a real timeframe for arrival. Once a technician is on-site, you’ll get a clear explanation of the problem and the cost before any work begins — with no surprise charges on the final bill.',
    },
  ]),

  'services-heating-maintenance': entry([
    {
      q: 'Why does heating maintenance matter if my furnace seems to be working fine?',
      a: "Routine maintenance catches small, inexpensive problems — like a worn igniter, a dirty filter, or corroding electrical connections — before they become expensive failures. By the time a furnace obviously breaks down, you've usually missed the cheaper fix.",
    },
    {
      q: 'What does a heating maintenance visit include?',
      a: "A typical visit covers ignition system testing, heat exchanger inspection for cracks (a safety issue, not just an efficiency one), thermostat accuracy checks, component cleaning, and a review of ductwork for leaks. It's routine work, but it's a major factor in whether a furnace lasts fifteen years or only makes it to year eight.",
    },
    {
      q: 'When is the best time to schedule heating maintenance?',
      a: 'Fall, before cold weather sets in, rather than waiting for a scramble in December when HVAC companies across Orange County already have waitlists. Scheduling ahead of the season also means problems surface while it’s still mild outside, not during a freeze.',
    },
    {
      q: "What happens if the technician doesn't find any problems?",
      a: "If the system checks out fine, that's exactly what you'll be told — no manufactured issues to justify the visit. If something is worth watching but doesn't need immediate fixing, it gets flagged so you can decide on your own timeline.",
    },
    {
      q: 'How often should I have my furnace serviced?',
      a: 'A seasonal check, generally once a year ahead of winter, is typically enough to catch developing issues before they turn into a no-heat emergency. Systems serviced regularly are far less likely to become panic calls in the middle of winter.',
    },
    {
      q: 'Do you offer maintenance plans or just one-time visits?',
      a: 'Both. Whether you book a single maintenance visit or a standing plan, your system is serviced with the same level of thoroughness.',
    },
    {
      q: 'Are your technicians licensed and insured?',
      a: "Yes, HiLo Heating and Air's technicians are licensed, insured, and trained to catch issues most homeowners would never notice on their own.",
    },
    {
      q: 'How do I schedule heating maintenance in Stanton?',
      a: 'Fill out a service request form or call HiLo directly, and a team member will follow up to schedule your visit.',
    },
  ]),

  'services-heating-installation': entry([
    {
      q: 'How do I know if I need a new furnace instead of another repair?',
      a: "If your furnace is past ten or fifteen years old, needs frequent repairs, or your energy bills keep climbing without an obvious cause, replacement often ends up cheaper than continuing to patch an aging system. HiLo will tell you honestly if a repair still makes sense rather than pushing a replacement you don't need.",
    },
    {
      q: 'How is a new furnace sized for my home?',
      a: "HiLo evaluates your home's square footage, insulation, ductwork condition, and layout before recommending a unit. An oversized furnace short-cycles and wears out faster, while an undersized one runs constantly without keeping up — getting the sizing right is essential for performance and efficiency.",
    },
    {
      q: 'What does the furnace installation process involve?',
      a: 'The process starts with a full home evaluation, followed by a written quote with no surprise add-ons. On installation day, the old unit is removed, the new one is set and connected, and everything is tested before the job is considered complete. HiLo also checks ductwork integrity, venting, and electrical requirements to make sure your home can properly support the new system.',
    },
    {
      q: 'Does it matter who installs my furnace, or just which brand I choose?',
      a: 'It matters quite a bit — a high-quality furnace installed poorly (improper venting, a bad gas connection, incorrect sizing) can still perform badly and drive up energy bills regardless of the brand. Correct installation is often the bigger factor in how well a system actually performs.',
    },
    {
      q: 'What furnace brands do you install?',
      a: "HiLo works with most major furnace brands, so you're not limited to whatever happens to be in stock.",
    },
    {
      q: 'What happens after the new furnace is installed?',
      a: 'The technician walks you through the basics, including how to use your new thermostat and when to schedule your first maintenance check, so you know what to expect from the new system.',
    },
    {
      q: 'Are your technicians licensed and insured?',
      a: 'Yes, HiLo Heating and Air is licensed and insured for furnace installation and HVAC work.',
    },
    {
      q: 'How do I get a quote for furnace installation?',
      a: 'HiLo evaluates your home first, then provides a clear written quote before any work begins, so there are no surprise costs later.',
    },
  ]),

  'services-hvac': entry([
    {
      q: 'What HVAC services do you offer in Stanton?',
      a: 'HiLo provides a full range of heating and cooling services, including maintenance, system inspections, repairs, and complete new HVAC system installation — covering both heating and cooling equipment.',
    },
    {
      q: 'What does HVAC maintenance service include?',
      a: "A maintenance visit typically covers cleaning coils, checking refrigerant, inspecting wiring, and testing the thermostat. It's routine work, but it's what allows a system to run for around fifteen years instead of breaking down closer to year eight.",
    },
    {
      q: 'What happens during an HVAC system inspection?',
      a: 'An inspection covers airflow, ductwork, and safety switches — essentially a full review of the system — to identify what’s actually wrong rather than assuming the worst. It’s a good option if something feels off but you can’t pinpoint the issue, or if you’re buying a home, selling one, or haven’t had your system checked in a few years.',
    },
    {
      q: 'Will you always recommend a repair over a full system replacement?',
      a: 'When a repair genuinely makes more sense, that’s what you’ll be told, even if it means a smaller invoice. HiLo has turned away replacement recommendations in cases where a relatively small fix solved the problem.',
    },
    {
      q: 'How do you size a new HVAC system for my home?',
      a: "Proper sizing is based on your home's specific needs rather than guesswork. Getting the size wrong is one of the most common industry mistakes, leading to higher bills and a system that struggles year-round regardless of how new it is.",
    },
    {
      q: 'What does the new system installation process look like?',
      a: 'The process includes sizing the unit correctly for your home, removing the old system, installing the new one, and testing everything before the job is considered complete.',
    },
    {
      q: 'How does pricing work for HVAC service calls?',
      a: 'You’ll know the cost of any work before it starts, with no add-ons introduced partway through the job.',
    },
    {
      q: 'How do I schedule HVAC service in Stanton?',
      a: 'Call HiLo directly or submit a service request, and you’ll be given a real timeframe for when a technician will arrive rather than a vague estimate.',
    },
  ]),

  'services-hvac-replacement': entry([
    {
      q: 'How do I know if I need a full HVAC replacement instead of another repair?',
      a: 'Signs it may be time to replace include frequent repairs, a system pushing fifteen years old, and energy bills that keep climbing no matter what gets fixed. At a certain point, replacing the whole system costs less than continuing to patch an aging one.',
    },
    {
      q: 'How do you determine whether replacement is actually necessary?',
      a: "The process starts with a thorough HVAC system inspection covering the unit's age, refrigerant type, ductwork condition, and whether components like the compressor are failing or just need a repair. Replacing a system that doesn't actually need it isn't something HiLo recommends.",
    },
    {
      q: 'Can an inspection reveal problems beyond just an aging unit?',
      a: 'Yes — many older systems were sized by guesswork rather than calculation, and that mismatch alone can cause uneven temperatures or high bills that a repair would never fix. In those cases, replacement is about correcting the sizing, not just the system’s age.',
    },
    {
      q: 'How is a new HVAC system sized for my home?',
      a: 'Sizing is based on your home’s square footage, insulation, and layout rather than a generic chart. An oversized system short-cycles and wastes energy, while an undersized one runs constantly and still can’t keep up — getting this right matters more than which brand is chosen.',
    },
    {
      q: 'What does the replacement process involve?',
      a: 'The old equipment is removed, the new system is installed, all connections are tested, and a final walkthrough covers how to use your new thermostat and what maintenance to expect. Ductwork is also checked, since a new system connected to leaky old ducts won’t perform as it should.',
    },
    {
      q: 'Will you try to sell me a replacement if a repair would work?',
      a: 'No — every replacement conversation starts with an actual inspection of your equipment. If your system still has life left, you’ll be told that. If it’s genuinely time to replace it, you’ll get a clear explanation of why.',
    },
    {
      q: 'What HVAC brands do you install?',
      a: "HiLo works with most major HVAC brands, so you're not limited to whatever happens to be in stock.",
    },
    {
      q: 'Are your technicians licensed and insured?',
      a: 'Yes, HiLo Heating and Air is licensed and insured for HVAC replacement and installation work.',
    },
  ]),

  'services-hvac-emergency': entry([
    {
      q: 'What counts as an HVAC emergency versus something that can wait?',
      a: "Signs it can't wait include no heat or cooling at all, a burning smell from the unit, water pooling near the system, breakers tripping repeatedly, or new noises that weren't there the day before. These call for immediate attention rather than a scheduled appointment later in the week.",
    },
    {
      q: 'Do you handle both heating and cooling emergencies?',
      a: "Yes — HiLo's emergency services cover full HVAC systems, not just one side of it. Some companies only handle AC or only handle heating, which isn't much help if the other system fails. HiLo diagnoses and, in most cases, fixes whatever broke in the same visit.",
    },
    {
      q: 'Do you offer 24/7 emergency HVAC service in Stanton?',
      a: "Yes, HiLo's emergency line is answered by a real person, not a callback queue that takes hours to respond.",
    },
    {
      q: 'Will I be charged extra for emergency or after-hours service?',
      a: 'No hidden “after-hours fee” gets added to the invoice. HiLo diagnoses the problem first, explains it in plain terms, and provides a quote before any work begins — urgency doesn’t mean inflated pricing.',
    },
    {
      q: 'Can most HVAC emergencies be fixed in one visit?',
      a: "In most cases, yes. HiLo's trucks are stocked with parts needed for common failures like compressor issues, refrigerant leaks, ignition problems, and electrical faults, reducing the chance you'll be waiting on a shipped part.",
    },
    {
      q: 'Why is a broken HVAC system more than just an inconvenience?',
      a: 'For households with young kids, older relatives, or anyone managing a health condition, losing heat or cooling during extreme weather can pose a real safety risk, which is part of why fast emergency response matters.',
    },
    {
      q: 'Do you still run a full diagnostic on urgent calls, or just a quick patch?',
      a: 'Even on emergency calls, HiLo runs a full diagnostic rather than applying a quick fix that’s likely to fail again soon. Doing it right the first time tends to save money in the long run.',
    },
    {
      q: 'Are your technicians licensed and insured?',
      a: 'Yes, HiLo Heating and Air is licensed and insured for emergency HVAC repair work.',
    },
  ]),

  'services-hvac-installation': entry([
    {
      q: 'What types of HVAC systems do you install?',
      a: 'HiLo installs central air conditioners, furnaces, heat pumps, and ductless mini-splits, working with equipment from major manufacturers so the system fits both your home and your budget.',
    },
    {
      q: 'How do you determine what size and type of system I need?',
      a: 'HiLo walks through your property to check ductwork condition, electrical capacity, and airflow before recommending a system size — a step that’s often skipped by other companies and is usually why homeowners end up with units that are too big, too small, or inefficient.',
    },
    {
      q: 'What does the installation process include?',
      a: 'The process covers removing the old system, adjusting ductwork where needed, wiring the new unit properly, and running a full test before the job is complete. The technician also walks you through how your new thermostat works.',
    },
    {
      q: 'Why does professional installation matter for my equipment warranty?',
      a: "Manufacturers can void coverage if a system wasn't installed to spec, which happens more often than people expect with rushed or unlicensed installs. HiLo's technicians follow both code requirements and manufacturer guidelines on every job.",
    },
    {
      q: 'What benefits come from a properly installed HVAC system?',
      a: 'A correctly installed system typically means lower energy bills, quieter operation, and better indoor air quality, in addition to keeping your manufacturer’s warranty intact.',
    },
    {
      q: 'Will the price change after the quote?',
      a: 'No — HiLo provides upfront pricing, so what’s quoted is what you pay, with no surprise charges added afterward.',
    },
    {
      q: 'Do you install HVAC systems for new construction as well as replacements?',
      a: 'Yes, HiLo handles new HVAC system installation for both existing homes replacing an old system and new construction projects.',
    },
    {
      q: 'Do you serve businesses as well as homeowners?',
      a: 'Yes, HiLo installs HVAC systems for both homes and businesses throughout Stanton and the wider Orange County area.',
    },
  ]),

  'services-iaq': entry([
    {
      q: 'Why does indoor air quality matter?',
      a: 'Indoor air can be two to five times more polluted than outdoor air, with dust, allergens, mold spores, pet dander, and chemical pollutants circulating through your HVAC system daily. For families with allergies, asthma, or respiratory sensitivities, addressing this can make a significant difference in comfort and long-term health.',
    },
    {
      q: 'What indoor air quality services do you offer?',
      a: 'HiLo installs whole-home air purifiers, humidifiers, high-efficiency filtration systems, and provides professional duct cleaning to improve air quality throughout the home.',
    },
    {
      q: 'How do whole-home air purifiers work?',
      a: 'Whole-home air purifiers integrate with your existing HVAC system to filter air throughout every room, removing allergens, bacteria, and other pollutants as air circulates through the system.',
    },
    {
      q: 'Do I need a humidifier for my home?',
      a: 'A humidifier may help if you’re dealing with dry air issues like respiratory irritation, static electricity, or damage to wood furniture. HiLo installs and maintains whole-home humidifiers that integrate with your heating system to maintain optimal humidity levels.',
    },
    {
      q: 'What MERV rating filter do I need?',
      a: 'The right MERV rating depends on your system and household needs — HiLo helps you choose a filtration system that effectively traps dust, pollen, and pet dander without restricting airflow more than your system can handle.',
    },
    {
      q: 'How often should I have my ducts cleaned?',
      a: 'Duct cleaning needs vary by household, but visible dust buildup, reduced airflow, or ongoing allergy symptoms are signs it may be time. Professional duct cleaning removes accumulated debris and contaminants, improving both air quality and system efficiency.',
    },
    {
      q: 'How do you decide which indoor air quality solution is right for my home?',
      a: 'HiLo starts by assessing your current air quality and identifying problem areas, then walks you through options — from a simple filter upgrade to a complete air purification system — so you can choose what fits your budget and needs.',
    },
  ]),

  'services-iaq-humidifiers': entry([
    {
      q: 'How do I know if my house has a dry air problem?',
      a: 'Common signs include itchy skin, a stuffy nose that clears up when you leave the house, static shocks when touching doorknobs, gaps appearing between hardwood floorboards, and cracking furniture — especially once winter heating season kicks in.',
    },
    {
      q: 'How is a whole-home humidifier different from a portable one?',
      a: 'A whole-home humidifier installs directly into your existing ductwork, so moisture is distributed evenly through the same system that heats and cools your house. Portable units only cover the room they’re in and need constant refilling.',
    },
    {
      q: 'What happens during an HVAC humidifier installation?',
      a: 'HiLo Heating and Air starts by inspecting your furnace or air handler, ductwork, and current humidity levels to determine whether a bypass, fan-powered, or steam unit is the right fit. The crew then mounts the unit, connects the water line and ductwork, wires it into your existing controls, and tests everything before finishing the job.',
    },
    {
      q: 'Can a humidifier actually cause problems if it’s installed wrong?',
      a: 'Yes — a poorly sized or badly placed humidifier can lead to window condensation or hidden mold growth. That’s why HiLo evaluates your home’s ductwork and HVAC setup before recommending equipment.',
    },
    {
      q: 'Will a humidifier work with an older home’s ductwork?',
      a: 'HiLo has installed humidifiers in homes ranging from 1960s builds with original ductwork to brand-new construction, adapting the approach to each system’s specific setup.',
    },
    {
      q: 'Does a whole-home humidifier actually save money on heating?',
      a: 'Yes — properly humidified air feels warmer at the same temperature, which lets you run your thermostat a bit lower without sacrificing comfort, reducing heating costs over the winter.',
    },
    {
      q: 'Do I need to adjust the humidifier throughout the year?',
      a: 'Yes. The humidistat setting that works well in January isn’t right for July, so HiLo walks homeowners through adjusting it seasonally as part of the installation.',
    },
  ]),

  'services-iaq-duct-installation': entry([
    {
      q: 'Why does one room stay hotter or colder than the rest of the house?',
      a: 'Uneven temperatures are usually caused by the ductwork, not the HVAC unit itself — leaky ducts, undersized runs, or a layout that was never properly planned can all keep air from reaching certain rooms.',
    },
    {
      q: 'Can new ductwork make a difference even if my HVAC unit is fine?',
      a: 'Yes. Even a high-quality HVAC system can’t perform well if it’s pushing air through leaky, undersized, or poorly laid-out ducts — the ductwork determines whether the system actually does its job.',
    },
    {
      q: 'What problems do you commonly find with old duct installations?',
      a: 'Frequent issues include duct runs that are too long, sharp bends that restrict airflow, and seams sealed with regular tape instead of mastic sealant, which tends to fail over time.',
    },
    {
      q: 'How do you plan a new duct installation?',
      a: 'HiLo Heating and Air maps out the home, checks proper sizing room by room, and designs a layout that balances airflow — factoring in square footage, room layout, and existing equipment — while keeping bends and duct length to a minimum.',
    },
    {
      q: 'What does the actual installation process involve?',
      a: 'The process includes running the ducts, sealing every joint, insulating where needed, and testing for leaks and airflow before the job is considered complete.',
    },
    {
      q: 'What are the benefits of a properly done duct installation?',
      a: 'Benefits include more even room temperatures, lower energy bills from reduced air loss, cleaner indoor air since damaged ducts pull in more dust and allergens, and longer equipment life since the system isn’t working against bad ductwork.',
    },
    {
      q: 'Do you install ducts in tight or hard-to-reach spaces?',
      a: 'Yes — HiLo has worked in attics, crawlspaces, and tight closets, adapting the duct layout to wherever it needs to go.',
    },
  ]),

  'services-iaq-duct-repair': entry([
    {
      q: 'What are the signs my ductwork needs repair?',
      a: 'Common signs include uneven temperatures between rooms, whistling sounds near vents, and a sudden jump in energy bills — these usually point to a duct problem rather than an equipment issue.',
    },
    {
      q: 'How does duct damage happen over time?',
      a: 'Duct damage is usually gradual — a seam loosens, a section gets crushed in the attic, or rodents chew through insulation — slowly reducing system efficiency before it’s noticeable.',
    },
    {
      q: 'What does HVAC duct repair typically involve?',
      a: 'Duct repair usually involves patching leaks, resealing joints with proper mastic, and fixing crushed or disconnected sections before the problem spreads further through the system.',
    },
    {
      q: 'When is duct replacement necessary instead of repair?',
      a: 'Replacement becomes the better option when ducts are too damaged, too old, brittle, undersized, or sized wrong for your current HVAC system — repair alone won’t hold up in these cases.',
    },
    {
      q: 'How do you decide between duct repair and duct replacement?',
      a: 'HiLo starts with an inspection, checking accessible ductwork and testing for leaks with smoke or pressure testing where needed, then recommends repair or replacement based on what’s actually found — not based on which job is bigger.',
    },
    {
      q: 'How much air can leaky or damaged ducts actually waste?',
      a: 'Leaky or damaged ducts can waste an estimated 20-30% of conditioned air before it ever reaches your vents, driving up energy costs.',
    },
    {
      q: 'Can damaged ductwork affect indoor air quality, not just temperature?',
      a: 'Yes — damaged ductwork can pull dust, allergens, and even pests into your air supply, affecting the air quality throughout the home.',
    },
  ]),

  'services-iaq-duct-sealing': entry([
    {
      q: 'How do I know if my ducts are leaking air?',
      a: 'Common signs include one room not cooling as well as the rest of the house, a creeping increase in energy bills, and an AC that runs constantly without the house feeling right — these often point to air escaping through duct gaps before it reaches your vents.',
    },
    {
      q: 'How do duct leaks develop over time?',
      a: 'Leaks usually form gradually as seams loosen, connections shift, or sections separate slightly in attics or crawlspaces, often going unnoticed until temperature or bill issues show up.',
    },
    {
      q: 'Why do so many homes have leaky ducts?',
      a: 'Many older homes had ductwork that was never properly sealed, or was sealed with tape that dries out and peels away over time. Even new construction can have gaps from rushed installs.',
    },
    {
      q: 'How do you find duct leaks before sealing them?',
      a: 'HiLo uses pressure testing and visual inspection to trace duct runs and pinpoint exactly where air is escaping, rather than guessing at problem areas.',
    },
    {
      q: 'What’s used to seal ducts properly?',
      a: 'Ducts are sealed with proper mastic rather than tape, since tape is one of the most common materials that fails over time. Damaged or compressed insulation is also addressed as part of the process.',
    },
    {
      q: 'Is duct sealing cheaper than replacing ductwork?',
      a: 'Yes — sealing is often the most cost-effective fix for closing up small leaks, especially compared to replacing entire duct runs.',
    },
    {
      q: 'Does duct sealing help with more than just energy bills?',
      a: 'Yes — beyond lowering energy costs and improving room-to-room temperature consistency, sealing reduces strain on HVAC equipment and helps prevent dust, insulation particles, and outside air from entering the system.',
    },
  ]),

  'services-iaq-dryer-vent': entry([
    {
      q: 'How do I know if my dryer vent needs cleaning?',
      a: 'Warning signs include clothes needing two or three cycles to fully dry, the dryer feeling hot to the touch on the outside, a burning smell during a cycle, and more lint than usual collecting around the door.',
    },
    {
      q: 'Is a clogged dryer vent actually dangerous?',
      a: 'Yes — clogged dryer vents are one of the more common causes of house fires, which is why cleaning shouldn’t be put off even if the dryer still seems to run fine.',
    },
    {
      q: 'Why does lint build up in the vent if I clean the lint trap regularly?',
      a: 'The lint trap only catches some of the lint — a portion still makes it past and collects further down the vent line over months and years, eventually causing a blockage.',
    },
    {
      q: 'Do certain vent setups clog faster than others?',
      a: 'Yes — longer vent runs, sharp bends, and vents that exit through the roof instead of a side wall tend to clog faster than a simple, straight vent path.',
    },
    {
      q: 'What does a dryer vent cleaning actually involve?',
      a: 'HiLo clears vent lines of any length, including roof exits and runs with multiple bends, using tools that reach deep into the line rather than just a shop vac near the opening. The service also includes checking the vent cap and exit point outside, inspecting the connection between the dryer and vent, and finishing with a test run to confirm improved airflow.',
    },
    {
      q: 'What are the benefits of regular dryer vent cleaning besides fire prevention?',
      a: 'Beyond reducing fire risk, regular cleaning leads to shorter drying cycles, lower energy bills, and less strain on the dryer since it isn’t working against blocked airflow.',
    },
    {
      q: 'Do you clean the full vent line or just the easy-to-reach sections?',
      a: 'HiLo clears the entire line, not just the accessible parts, and will let you know if an issue beyond the vent itself needs attention.',
    },
  ]),

  'services-iaq-air-balancing': entry([
    {
      q: 'Why does one room in my house always feel too hot or too cold?',
      a: 'This is usually an airflow distribution problem rather than an issue with the HVAC system itself — even a properly sized system can leave certain rooms uneven if airflow isn’t balanced across the ductwork.',
    },
    {
      q: 'What is air balancing?',
      a: 'Air balancing involves adjusting dampers, registers, and airflow throughout the ductwork so every room receives its fair share of conditioned air, rather than favoring rooms closest to the unit.',
    },
    {
      q: 'Is air balancing the same as duct repair?',
      a: 'No — the ductwork can be in perfect condition while airflow is still unbalanced. Air balancing is about calibrating how much air reaches each vent based on a room’s size and exposure, not fixing physical duct damage.',
    },
    {
      q: 'Why does an HVAC system inspection come before air balancing?',
      a: 'An inspection measures airflow at each register and evaluates duct sizing and layout to identify where imbalances are actually coming from, since balancing can’t be done accurately without that information first.',
    },
    {
      q: 'What happens during an HVAC system inspection?',
      a: 'The process includes a walkthrough of thermostat zones and existing ductwork, measuring airflow at supply and return vents, noting temperature differences between rooms, and checking whether dampers are present and functional.',
    },
    {
      q: 'Can an inspection reveal issues beyond what air balancing can fix?',
      a: 'Yes — sometimes an inspection uncovers undersized ducts, blocked returns, or a system poorly matched to the home’s layout, in which case balancing alone won’t resolve the problem.',
    },
    {
      q: 'What are the benefits of a properly balanced HVAC system?',
      a: 'Benefits include consistent comfort throughout the home, less need to constantly adjust the thermostat, and reduced strain on the HVAC equipment since it isn’t running longer cycles to compensate for poor airflow distribution.',
    },
  ]),

  'service-areas-anaheim': entry([
    {
      q: 'My AC runs constantly but the house stays warm. Is that an AC repair Anaheim CA situation or a replacement?',
      a: "Almost always repairable. A system that runs but doesn't cool is usually dealing with low refrigerant, a dirty coil, or an airflow blockage. These issues typically do not require a new unit. We'll inspect the system and explain exactly what we find.",
    },
    {
      q: "What's a ballpark cost for AC repair in Anaheim?",
      a: 'The cost depends on the problem. Smaller repairs, such as a capacitor or thermostat replacement, are generally less expensive. More involved repairs, such as compressor work, cost more. We provide an upfront quote so you know the price before work begins.',
    },
    {
      q: 'How fast do you respond?',
      a: 'We provide same-day service in most cases, especially during the summer when AC problems are urgent. Call (714) 853-5534 to find out when we can arrive.',
    },
    {
      q: 'My system is 10 years old. Worth repairing or time to replace?',
      a: 'Ten years is not necessarily too old for an AC system. Whether repair or replacement makes more sense depends on the problem, repair cost, system condition, and expected remaining service life. We’ll explain your options so you can make an informed decision.',
    },
    {
      q: 'Do you work on all AC brands?',
      a: 'Yes. We work on many major AC brands, including Carrier, Trane, Lennox, Goodman, Rheem, York, and others. If you have a less common brand, contact us to confirm service availability.',
    },
    {
      q: "I tried fixing it myself and now it's worse. Can you still help?",
      a: 'Absolutely. We’ll assess the system and determine what went wrong. Electrical components and refrigerant systems can be complicated, so a professional inspection can help identify the issue and determine the appropriate repair.',
    },
    {
      q: 'Why does my AC smell weird when it turns on?',
      a: 'A musty smell can indicate mold or mildew in the system or ductwork. Burning smells may indicate an electrical problem. These odors should not be ignored. An AC inspection can help identify and address the source.',
    },
    {
      q: 'How do I keep from needing repairs so often?',
      a: 'Annual AC maintenance can help reduce unexpected repairs. Scheduling a tune-up in spring can help identify smaller problems before they develop into major breakdowns during the summer.',
    },
    {
      q: 'What areas do you cover near Anaheim?',
      a: 'We serve most of Orange County, including Fullerton, Garden Grove, Orange, Santa Ana, Buena Park, Placentia, and nearby communities. Contact us to confirm service availability in your area.',
    },
    {
      q: 'How do I schedule AC repair in Anaheim with HiLo?',
      a: 'Call (714) 853-5534 or visit hiloheatingandair.com to schedule AC repair in Anaheim. We’ll arrange a convenient service time, diagnose the problem, and explain the recommended repair before beginning work.',
    },
  ]),

  'service-areas-orange': entry([
    {
      q: "My furnace is running but the house isn't warming up. What's going on?",
      a: 'That’s one of the more common calls we get for furnace repair Orange. The system may run but produce little or no heat. Common causes include a failed igniter, dirty flame sensor, gas supply issue, or restricted airflow from a clogged filter. These problems can often be repaired without replacing the entire furnace.',
    },
    {
      q: 'How much does furnace repair in Orange typically cost?',
      a: 'The cost depends on the specific problem. Smaller repairs, such as flame sensor cleaning or a capacitor replacement, are generally less expensive. Blower motor or control board repairs are more involved. We provide an exact quote before starting any work.',
    },
    {
      q: 'Is it safe to run my furnace if it’s making a banging noise?',
      a: 'A banging noise should not be ignored. It may be caused by something loose inside the furnace, such as a panel or fan blade, or it could indicate delayed ignition. Delayed ignition can allow gas to accumulate before ignition and should be inspected promptly by a qualified HVAC professional.',
    },
    {
      q: 'My furnace is 14 years old. Should I repair it or just replace it?',
      a: 'A 14-year-old furnace is getting older, but age alone does not necessarily mean replacement is required. The decision depends on the repair needed, the overall condition of the system, and the cost of repair compared with replacement. We can evaluate the system and explain the available options.',
    },
    {
      q: 'How fast can you get to my home in Orange?',
      a: 'We prioritize same-day and next-day appointments whenever possible, especially when customers are without heat. Call (714) 853-5534 to find out when we can have someone at your home.',
    },
    {
      q: 'Do you work on all furnace brands?',
      a: 'Yes. We service major furnace brands including Carrier, Trane, Lennox, Goodman, Rheem, York, and others.',
    },
    {
      q: "What's the yellow pilot light thing about?",
      a: 'A yellow or orange pilot flame can indicate incomplete combustion. Possible causes include a dirty burner or another combustion problem. A properly operating gas furnace generally has a blue flame. If your pilot light is yellow or orange, schedule a professional furnace inspection promptly.',
    },
    {
      q: 'Do you offer maintenance plans?',
      a: 'Yes. Annual furnace tune-ups can help identify smaller problems before they develop into unexpected heating emergencies. Ask about available maintenance options when you call.',
    },
  ]),

  'service-areas-garden-grove': entry([
    {
      q: 'How quickly can someone get to my house?',
      a: "Usually same-day. If it's urgent, we'll often have a technician there within a few hours.",
    },
    {
      q: 'How do I know if my AC actually needs repair?',
      a: 'Warm air blowing instead of cold, strange rattling or grinding noises, frequent cycling, or an unexplained increase in your energy bill can all indicate that your AC needs to be inspected.',
    },
    {
      q: 'Can you come out on weekends or evenings?',
      a: 'Yes. We offer emergency repair appointments outside normal business hours, including weekends and evenings.',
    },
    {
      q: "What's this going to cost me?",
      a: 'The cost depends on the specific problem. You’ll receive a clear price before any repair work begins, so there are no surprise charges later.',
    },
    {
      q: 'Do you work on every brand?',
      a: 'We service most major AC brands, including Carrier, Trane, Lennox, Goodman, Rheem, and many others commonly found in Garden Grove homes.',
    },
    {
      q: 'Should I just replace my unit instead of repairing it?',
      a: "Sometimes replacement makes more sense, but we don't recommend it unless it is appropriate based on the unit's age, condition, repair needs, and overall value.",
    },
    {
      q: 'Got any maintenance plans?',
      a: 'Yes. We offer seasonal maintenance plans designed to identify small problems before they develop into more expensive AC repairs.',
    },
    {
      q: 'Are your techs actually licensed?',
      a: 'Yes. Our technicians are licensed, insured, and background-checked.',
    },
  ]),

  'service-areas-santa-ana': entry([
    {
      q: 'How fast can you get to my house?',
      a: 'Usually same-day, and often within a couple hours if it’s urgent.',
    },
    {
      q: 'How do I know my furnace needs repair?',
      a: 'Cold air instead of warm air, odd banging or clicking sounds, frequent cycling, or a gas bill that is suddenly higher than usual can indicate that your furnace needs repair.',
    },
    {
      q: 'Do you do emergency calls after hours?',
      a: 'Yes. We offer emergency repair calls during evenings and weekends for both AC and furnace issues.',
    },
    {
      q: "What's a repair going to cost?",
      a: 'The cost depends on the specific problem. You’ll know the price before any repair work begins, with no surprise charges later.',
    },
    {
      q: 'Do you handle every brand?',
      a: 'Yes. We service major HVAC brands including Carrier, Trane, Lennox, Goodman, Rheem, and most other major brands.',
    },
    {
      q: 'Should I just replace my system instead of fixing it?',
      a: 'Replacement is recommended only when it makes sense based on the system’s age, condition, repair needs, and overall value. We’ll provide an honest recommendation without pushing an unnecessary replacement.',
    },
    {
      q: 'Any maintenance plans?',
      a: 'Yes. We offer seasonal maintenance plans designed to catch smaller problems before they develop into larger and more expensive repairs.',
    },
    {
      q: 'Are your techs licensed?',
      a: 'Yes. Every technician is licensed, insured, and background-checked.',
    },
  ]),

  'service-areas-costa-mesa': entry([
    {
      q: 'How fast can someone get to my house?',
      a: 'Usually same-day, sometimes next-day if it’s a particularly busy week. Summer can be especially busy due to increased demand for AC service.',
    },
    {
      q: 'My AC is running but not cooling. Is that a repair or a whole new system?',
      a: 'Most of the time, the issue can be repaired. Common causes include low refrigerant, a dirty coil, or a failing component. We’ll diagnose the system on-site before discussing replacement options.',
    },
    {
      q: 'Do you only work on certain brands?',
      a: 'No. We service central air conditioning systems, mini-splits, heat pumps, and most major HVAC brands. If you have an AC system installed in a Costa Mesa home, there’s a good chance we’ve worked on a similar system.',
    },
    {
      q: 'Will I know the cost before you start?',
      a: 'Yes. You’ll receive a clear price before any repair work begins, so there are no unexpected charges on the final invoice.',
    },
    {
      q: 'How often should I get the system checked?',
      a: 'We recommend having your AC system checked once a year, ideally before the hot weather begins. Regular maintenance can help identify smaller problems before they become emergency repairs.',
    },
    {
      q: 'Are your guys actually licensed?',
      a: 'Yes. Every technician is licensed and insured.',
    },
    {
      q: 'Do you cover areas outside Costa Mesa too?',
      a: 'Yes. We serve a large portion of Orange County. Contact us to confirm whether your neighborhood is within our service area.',
    },
    {
      q: 'What if the same problem comes back?',
      a: 'Our repairs are backed by a guarantee. If the same problem returns within the applicable coverage period, contact us so we can address the issue.',
    },
  ]),

  'service-areas-irvine': entry([
    {
      q: 'How soon can you come out for an AC issue?',
      a: 'Same-day service is available most of the time, with next-day appointments available during busy periods.',
    },
    {
      q: 'Do you actually do furnace work, or mostly AC?',
      a: 'We handle both heating and cooling services. Our technicians work on both AC systems and furnaces, so you do not need to contact separate companies.',
    },
    {
      q: 'My furnace smells strange when it kicks on. Is that serious?',
      a: 'A strange furnace smell should be inspected. Possible causes can include mechanical or combustion problems, including a damaged heat exchanger. Contact a qualified HVAC professional rather than continuing to operate a furnace that produces unusual odors.',
    },
    {
      q: 'Will I get a price before any work starts?',
      a: 'Yes. You’ll receive the repair cost upfront before any work begins, so there are no unexpected charges on the final bill.',
    },
    {
      q: 'How often should the AC or furnace get inspected?',
      a: 'We recommend having your AC and furnace inspected once a year, ideally before their respective seasons begin. Regular inspections can help identify smaller issues before they become emergencies.',
    },
    {
      q: 'What brands or systems do you work on?',
      a: 'We work on central air conditioning systems, mini-splits, heat pumps, standard furnaces, and most major HVAC brands found in Irvine homes.',
    },
    {
      q: 'Are technicians licensed?',
      a: 'Yes. Every technician is fully licensed and insured.',
    },
    {
      q: 'What happens if the issue comes back after a repair?',
      a: 'Repairs are covered under our guarantee. If the issue returns within the applicable coverage period, contact us and we’ll help address the problem.',
    },
  ]),

  'service-areas-newport-beach': entry([
    {
      q: 'Why does my AC seem to break down more often living near the beach?',
      a: 'Salt air can accelerate corrosion on outdoor AC components, including coils and electrical connections. Regular maintenance and inspections can help identify corrosion and other coastal-environment issues before they lead to system problems.',
    },
    {
      q: 'How fast can someone come out?',
      a: 'We usually provide same-day service, with next-day appointments available during busier periods.',
    },
    {
      q: 'Is it actually a repair, or do I need a new system?',
      a: 'Many AC problems are repairable. We’ll diagnose the system on-site and explain the repair options before discussing whether replacement is necessary.',
    },
    {
      q: 'Will I know the price before work starts?',
      a: 'Yes. You’ll receive a quote upfront before any repair work begins, so there are no unexpected charges on the invoice.',
    },
    {
      q: 'How often should coastal homes get their AC inspected?',
      a: 'We recommend considering AC inspections twice a year for coastal homes because salt air can increase corrosion risk. One inspection before summer and another during the cooling season can help identify developing issues.',
    },
    {
      q: 'Do you work on all brands?',
      a: 'Yes. We service central air conditioning systems, ductless mini-splits, heat pumps, and most major HVAC brands commonly found in Newport Beach homes.',
    },
    {
      q: 'Are your technicians licensed and insured?',
      a: 'Yes. Every technician is fully licensed and insured.',
    },
    {
      q: 'What if the problem comes back after a repair?',
      a: 'Repairs are covered under our guarantee. If the problem returns within the applicable coverage period, contact us and we’ll take care of the issue.',
    },
  ]),

  'service-areas-laguna-hills': entry([
    {
      q: 'How do I know if I need a new furnace or just a repair?',
      a: 'The age of the furnace, frequency of repairs, and rising energy bills can help indicate whether replacement may make more sense than repair. We’ll inspect your system and provide an honest recommendation before suggesting replacement.',
    },
    {
      q: 'How long does a typical installation take?',
      a: 'Most furnace installation jobs can be completed in a single day. The installation may take longer if additional ductwork or other system modifications are required.',
    },
    {
      q: 'Will you help me pick the right size furnace?',
      a: 'Yes. We perform a proper load calculation based on factors such as your home’s size and layout rather than simply matching the existing furnace. This helps determine the appropriate furnace size for your home.',
    },
    {
      q: 'Is the new furnace covered under warranty?',
      a: 'Yes. Both labor and equipment are covered under the applicable warranty terms.',
    },
    {
      q: 'Do I need a permit for furnace installation?',
      a: 'A permit is usually required for furnace installation, depending on local requirements. We handle the permitting process as part of the installation.',
    },
    {
      q: 'What brands do you install?',
      a: 'We install most major furnace brands and can recommend suitable options based on your home’s requirements and your budget.',
    },
    {
      q: 'Are your installers licensed?',
      a: 'Yes. Every technician is fully licensed and insured.',
    },
    {
      q: 'What if something feels off after installation?',
      a: 'Contact us if you notice an issue after installation. We’ll return to inspect the system and address covered installation or equipment concerns according to the applicable warranty terms.',
    },
  ]),

  'service-areas-rancho-santa-margarita': entry([
    {
      q: 'There’s a faint burnt smell when my furnace starts. Worth worrying about?',
      a: 'Yes. A faint burnt smell can sometimes be caused by dust burning off, but it can also indicate a more serious furnace problem. Having the system inspected is recommended rather than trying to determine the cause yourself.',
    },
    {
      q: 'How fast can you get out here?',
      a: 'We provide same-day service most of the time. During busy periods, a next-morning appointment may be available.',
    },
    {
      q: 'Repair or replace — how do I know which makes sense?',
      a: 'The right choice depends on the furnace’s age, condition, repair requirements, and overall cost. We’ll evaluate the system and provide an honest recommendation rather than pushing an unnecessary replacement.',
    },
    {
      q: 'Do you give a price before starting?',
      a: 'Yes. You’ll receive the repair price before work begins. No work is started until you know the cost.',
    },
    {
      q: 'How often should the furnace get checked?',
      a: 'We recommend having your furnace inspected once a year, ideally before the heating season begins. Regular inspections can help identify problems before they become no-heat emergencies.',
    },
    {
      q: 'What brands do you service?',
      a: 'We service most major furnace brands and a wide range of furnace systems and ages.',
    },
    {
      q: 'Are the technicians licensed?',
      a: 'Yes. Every technician is fully licensed and insured.',
    },
    {
      q: 'What happens if the issue comes back?',
      a: 'Repairs are covered under our guarantee. If the issue returns within the applicable coverage period, contact us and we’ll address the problem.',
    },
  ]),

  'service-areas-los-angeles': entry([
    {
      q: 'Do you handle both AC and furnace work, or just one?',
      a: 'We handle both AC and furnace work. Our technicians provide both cooling and heating services, allowing you to use one company for HVAC service throughout the year.',
    },
    {
      q: 'How fast can someone come out for AC repair?',
      a: 'We usually provide same-day AC repair service, with next-day appointments available during busy periods.',
    },
    {
      q: 'My AC’s old and keeps breaking. Repair again or replace?',
      a: 'The right choice depends on the system’s age, condition, repair history, and the cost of the needed repair. We’ll evaluate the system and provide an honest recommendation before discussing replacement or installation.',
    },
    {
      q: 'Will I get a price before any work starts?',
      a: 'Yes. You’ll receive the price upfront before any work begins, so there are no unexpected charges on the final invoice.',
    },
    {
      q: 'Is a permit needed for new AC installation?',
      a: 'A permit is usually required for new AC installation, depending on local requirements. We handle the permitting process as part of the installation.',
    },
    {
      q: 'My furnace smells off when it starts. Serious?',
      a: 'An unusual furnace smell is worth having checked promptly. It can sometimes be caused by dust, but it may also indicate a more serious problem, such as a heat exchanger issue. A professional inspection can help identify the cause.',
    },
    {
      q: 'How often should systems get inspected?',
      a: 'We recommend having each system inspected once a year, ideally before its relevant heating or cooling season begins. Regular inspections can help identify issues before they become emergencies.',
    },
    {
      q: 'Are technicians licensed and insured?',
      a: 'Yes. Every technician is fully licensed and insured.',
    },
  ]),

  'service-areas-orange-county': entry([
    {
      q: 'What cities in Orange County do you actually cover?',
      a: 'We serve a wide range of Orange County communities, including Costa Mesa, Irvine, Newport Beach, Rancho Santa Margarita, Laguna Hills, and more. Contact us to confirm whether your area is within our service territory.',
    },
    {
      q: 'How fast can someone come out?',
      a: 'We usually provide same-day service, with next-day appointments available during busier periods.',
    },
    {
      q: 'Does location within the county change what’s usually wrong with the AC?',
      a: 'It can. Coastal homes may experience more corrosion due to exposure to salt air, while inland homes can experience more general system wear from higher temperatures. We consider local environmental conditions during the diagnostic process.',
    },
    {
      q: 'Will I get pricing before work starts?',
      a: 'Yes. You’ll receive pricing upfront before any work begins, with no unexpected charges on the final bill.',
    },
    {
      q: 'How often should the AC get inspected?',
      a: 'We recommend having your AC system inspected once a year, ideally before the summer cooling season begins.',
    },
    {
      q: 'Do you work on all brands and system types?',
      a: 'Yes. We service central air conditioning systems, mini-splits, heat pumps, and most major HVAC brands.',
    },
    {
      q: 'Are your technicians licensed and insured?',
      a: 'Yes. Every technician is fully licensed and insured.',
    },
    {
      q: 'What if the problem comes back after a repair?',
      a: 'Repairs are covered under our guarantee. If the problem returns within the applicable coverage period, contact us and we’ll address the issue.',
    },
  ]),
};
