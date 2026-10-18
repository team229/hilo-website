export interface Author {
  name: string;
  role: string;
  bio: string;
  credentials: string[];
  image?: string;
  imageAlt?: string;
}

export const authors: Record<string, Author> = {
  Cody: {
    name: 'Cody',
    role: 'Lead HVAC Technician & Content Lead',
    bio: 'Cody is a lead technician at HiLo Heating & Air with over a decade of hands-on experience repairing, installing, and maintaining HVAC systems across Orange County. He holds EPA Section 608 certification and works under HiLo\u2019s California C-20 contractor license (#1155955). Cody writes HiLo\u2019s HVAC blog to help homeowners understand their systems, spot problems early, and make informed repair-versus-replace decisions.',
    credentials: [
      'EPA Section 608 Certified Technician',
      'California C-20 HVAC Contractor (under HiLo license #1155955)',
      '10+ years residential HVAC service in Orange County',
      'NATE-ready training in air conditioning and heat pumps',
    ],
    image: '/images/hvac-technician-at-work.webp',
    imageAlt: 'Cody, lead HVAC technician at HiLo Heating & Air',
  },
};

export function getAuthor(name: string): Author | undefined {
  return authors[name];
}