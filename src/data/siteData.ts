export type PageRoute =
  | 'home'
  | 'residential'
  | 'commercial'
  | 'post-construction'
  | 'chandelier'
  | 'pressure-washing'
  | 'approach'
  | 'reviews'
  | 'faqs'
  | 'consultation'
  | 'contact';

export type ProjectCategory = 'residential' | 'commercial';

export interface ServiceItem {
  id: 'residential' | 'commercial' | 'post-construction' | 'chandelier' | 'pressure-washing';
  route: PageRoute;
  number: string;
  title: string;
  subtitle: string;
  summary: string;
  editorialLead: string;
  ctaLabel: string;
  quoteCategory: ProjectCategory;
  quoteServiceOption: string;
  image: string;
  imageAlt: string;
  highlights: string[];
  limitationNote?: string;
  scopeDetails: {
    heading: string;
    description: string;
    points: string[];
  }[];
  idealFor: string[];
}

export interface DetailFocusArea {
  id: string;
  index: string;
  title: string;
  category: string;
  summary: string;
  inspectionPoints: string[];
  image: string;
  imageAlt: string;
}

export interface TestimonialItem {
  id: string;
  author: string;
  projectContext: string;
  quote: string;
  sourceLabel: string;
  sourceUrl: string;
}

export interface FaqItem {
  id: string;
  category: 'Policy & Scope' | 'Residential' | 'Commercial' | 'Specialty Services' | 'Pricing & Scheduling';
  question: string;
  answer: string;
}

export const IMAGES = {
  hero: '/images/hero-luxury-interior.webp',
  kitchen: '/images/residential-kitchen.webp',
  chandelier: '/images/chandelier-crystal.webp',
  commercial: '/images/commercial-lobby.webp',
  exterior: '/images/exterior-stonework.webp',
} as const;

export const COMPANY_INFO = {
  legalName: 'OKC Uptown Cleaning Services, LLC',
  shortName: 'OKC Uptown Cleaning',
  tagline: 'Every Detail. Exceptionally Considered.',
  location: 'Oklahoma City, Oklahoma',
  phoneDisplay: '(405) 882-2863',
  phoneHref: 'tel:4058822863',
  email: 'okcuptowncleaning@gmail.com',
  emailHref: 'mailto:okcuptowncleaning@gmail.com',
  hoursPrimary: 'Monday–Friday, 7:00 AM–6:00 PM',
  hoursClosed: 'Saturday & Sunday, Closed',
  officialWebsite: 'https://www.okcuptowncleaning.com/',
  serviceCommunities: ['Oklahoma City', 'Nichols Hills', 'Edmond', 'Moore', 'Norman'],
  credibilityClaims: [
    {
      label: 'Established Presence',
      value: 'Serving Since 2015',
      detail: 'Serving the Oklahoma City area since 2015 with dedicated local oversight.',
    },
    {
      label: 'Published Experience',
      value: '35+ Years Experience',
      detail: 'Drawing upon over 35 years of industry experience as stated by the company.',
    },
    {
      label: 'Credentials',
      value: 'Licensed, Insured & Bonded',
      detail: 'Operating as a licensed, insured, and bonded specialty cleaning provider.',
    },
    {
      label: 'Positioning',
      value: 'Detail-Focused Projects',
      detail: 'Built around customized, labor-intensive scopes rather than quick touch-ups.',
    },
  ],
} as const;

export const SERVICES: ServiceItem[] = [
  {
    id: 'residential',
    route: 'residential',
    number: '01',
    title: 'Residential Deep Cleaning',
    subtitle: 'Comprehensive Interior Detailing & Move-Related Care',
    summary:
      'A comprehensive cleaning service focused on the architectural surfaces, fixtures, and concealed areas often overlooked during routine maintenance.',
    editorialLead:
      'Designed for residences that require patient, thorough attention—reaching light fixtures, cabinet tops, baseboards, and areas behind and beneath furniture.',
    ctaLabel: 'Request a Residential Deep Clean',
    quoteCategory: 'residential',
    quoteServiceOption: 'Deep Cleaning',
    image: IMAGES.kitchen,
    imageAlt:
      'Immaculate luxury residential kitchen with custom alabaster cabinetry, honed travertine marble waterfall island, and brushed bronze architectural hood',
    limitationNote:
      'Specializing in detailed cleaning projects, not standard recurring housekeeping.',
    highlights: [
      'Overhead light fixtures & ceiling fans',
      'Upper cabinet ledges & millwork tops',
      'Behind and beneath heavy furniture',
      'Detailed hardwood, tile & carpet floor care',
      'Baseboards, window sills & hard-to-reach corners',
      'Move-in and move-out property preparation',
    ],
    scopeDetails: [
      {
        heading: 'Kitchens, Cabinetry & Fine Surfaces',
        description:
          'Careful degreasing and detailing of cabinet exteriors, upper ledges, range hoods, backsplashes, appliances, and countertops using surface-appropriate care.',
        points: [
          'Upper cabinet tops, crown molding, and hardware detailing',
          'Countertop, backsplash, sink, and fixture polishing',
          'Interior and exterior appliance detailing as scoped',
        ],
      },
      {
        heading: 'Living Spaces, Millwork & Concealed Areas',
        description:
          'Attention extends well beyond eye level to baseboards, trim profiles, window tracks, and spaces behind or underneath furnishings.',
        points: [
          'Detailed floor care across hardwood, natural stone, tile, and carpeted rooms',
          'Baseboards, door frames, vents, and architectural trim wiping',
          'Move-in and move-out comprehensive empty-home resets',
        ],
      },
    ],
    idealFor: [
      'Homeowners preparing for seasonal resets or major gatherings',
      'Move-in and move-out transitions requiring top-to-bottom readiness',
      'Estates needing periodic, labor-intensive deep detailing rather than weekly visits',
    ],
  },
  {
    id: 'commercial',
    route: 'commercial',
    number: '02',
    title: 'Commercial Cleaning',
    subtitle: 'Executive Offices, Janitorial Care & Commercial Carpets',
    summary:
      'Professional cleaning services for commercial environments, encompassing executive office cleaning, tailored janitorial services, and commercial carpet care.',
    editorialLead:
      'Commercial environments reflect the standards of the organizations within them. We tailor cleaning scopes to lobbies, offices, fitness spaces, and client-facing venues.',
    ctaLabel: 'Explore Commercial Cleaning',
    quoteCategory: 'commercial',
    quoteServiceOption: 'Commercial Cleaning',
    image: IMAGES.commercial,
    imageAlt:
      'Clean contemporary commercial executive lobby with honed stone floors, walnut architectural slat paneling, and spotless glass conference partitions',
    highlights: [
      'Executive suites & professional office cleaning',
      'Tailored commercial janitorial programs',
      'Commercial carpet cleaning & floor maintenance',
      'Glass partitions, lobbies & reception detailing',
      'Restroom & breakroom sanitization',
      'Fitness centers & entertainment venues',
    ],
    scopeDetails: [
      {
        heading: 'Reception, Glass & Executive Workspaces',
        description:
          'Consistent upkeep for architectural lobbies, conference rooms, glass enclosures, and shared client spaces.',
        points: [
          'Smudge-free glass doors, partitions, and lobby mirrors',
          'Desk surfaces, conference tables, and high-touch architectural hardware',
          'Restroom fixture sanitation and supply replenishment coordination',
        ],
      },
      {
        heading: 'Commercial Flooring & Carpet Care',
        description:
          'Targeted maintenance for high-traffic corridors, stone lobbies, and carpeted suites.',
        points: [
          'Commercial carpet cleaning for offices and hospitality areas',
          'Hard-surface floor sweeping, mopping, and detail edging',
          'Customized scheduling tailored to business operations',
        ],
      },
    ],
    idealFor: [
      'Professional offices and executive suites in Oklahoma City',
      'Commercial property managers overseeing multi-tenant corridors',
      'Fitness studios, specialty venues, and client-facing facilities',
    ],
  },
  {
    id: 'post-construction',
    route: 'post-construction',
    number: '03',
    title: 'Post-Construction & Remodel Cleaning',
    subtitle: 'Finishing-Stage Dust, Paint & Residue Removal',
    summary:
      'Detailed cleaning following new construction and interior renovation projects, eliminating fine construction dust, paint splatter, and adhesive residue.',
    editorialLead:
      'Remodeling leaves behind fine airborne particulate that settles inside cabinetry, along trim, and across new glazing. We prepare renovated spaces for occupancy and furniture placement.',
    ctaLabel: 'Discuss Your Renovation Project',
    quoteCategory: 'residential',
    quoteServiceOption: 'Post-Construction Cleaning',
    image: IMAGES.hero,
    imageAlt:
      'Newly finished luxury open-concept living room and kitchen with stone fireplace wall, wide-plank oak flooring, and spotless travertine island',
    highlights: [
      'Fine sawdust & drywall dust extraction',
      'Window, mirror & glass paint-speck removal',
      'Adhesive, sticker & grout haze detailing',
      'Inside & outside cabinetry and drawer wiping',
      'New fixture, hardware & millwork polishing',
      'Pre-move-in sanitization of kitchens & baths',
    ],
    scopeDetails: [
      {
        heading: 'Airborne Dust & Architectural Surfaces',
        description:
          'Top-to-bottom dust removal from ceilings, vents, light fixtures, cabinetry, and walls before furnishings arrive.',
        points: [
          'Careful wiping of newly installed woodwork, shelving, and built-ins',
          'Removal of construction dust from closet rods, ledges, and baseboards',
          'Vacuuming and deep floor care across newly finished wood, stone, and carpet',
        ],
      },
      {
        heading: 'Residue, Glazing & Final Presentation',
        description:
          'Patient attention to the small traces left by trades so the finished craftsmanship stands out cleanly.',
        points: [
          'Safe removal of stickers, tape residue, and minor paint splatters on glass',
          'Detailing of newly installed plumbing fixtures, mirrors, and shower enclosures',
          'Ready-to-furnish presentation for homeowners, builders, and designers',
        ],
      },
    ],
    idealFor: [
      'Homeowners completing kitchen, bath, or whole-home renovations',
      'Interior designers preparing rooms for final reveal or photography',
      'Builders and remodel contractors delivering finished spaces',
    ],
  },
  {
    id: 'chandelier',
    route: 'chandelier',
    number: '04',
    title: 'Chandelier & Specialty Fixture Cleaning',
    subtitle: 'Dedicated Care for Crystal, Glass & Delicate Lighting',
    summary:
      'Meticulous, hand-detailed cleaning of crystal chandeliers, suspended glass fixtures, sconces, and architectural statement lighting.',
    editorialLead:
      'Statement chandeliers anchor a foyer or dining room, yet their intricate arms, prisms, and finishes collect airborne dust that dulls their brilliance. We treat each piece with patient, step-by-step care.',
    ctaLabel: 'Request Fixture Cleaning',
    quoteCategory: 'residential',
    quoteServiceOption: 'Chandelier Cleaning',
    image: IMAGES.chandelier,
    imageAlt:
      'Grand tiered crystal and antique brass chandelier sparkling in a high-ceiling architectural foyer with plaster walls and curved stone staircase',
    highlights: [
      'Four-step inspection and hand-detailing process',
      'Crystal prisms, beads & glass shades',
      'Delicate brass, bronze & plated metalwork',
      'High-foyer & staircase fixture access planning',
      'Streak-free optical clarity restoration',
      'Residential estates & commercial lobbies',
    ],
    scopeDetails: [
      {
        heading: 'A Four-Step Fixture Methodology',
        description:
          'Every fixture is assessed for material sensitivity, height, and wiring proximity before careful hand detailing begins.',
        points: [
          'Step 1 — Thorough fixture inspection of arms, drops, and mounting stability',
          'Step 2 — Protective preparation of surrounding flooring and delicate parts',
          'Step 3 — Hand cleaning of crystal, glass, and metal components for streak-free clarity',
          'Step 4 — Personalized follow-up care cadence based on room environment',
        ],
      },
      {
        heading: 'Architectural Lighting Environments',
        description:
          'Suitable for multi-story residential foyers, formal dining rooms, and refined commercial reception spaces.',
        points: [
          'Crystal, blown-glass, and tiered architectural chandeliers',
          'Wall sconces, lantern pendants, and decorative stairwell fixtures',
          'Coordinated scheduling with Oklahoma City homeowners and property teams',
        ],
      },
    ],
    idealFor: [
      'Multi-story foyers and formal dining spaces in Nichols Hills, Edmond, and OKC',
      'Luxury residences preparing for holidays or real estate presentation',
      'Commercial lobbies, clubs, and venues with architectural lighting',
    ],
  },
  {
    id: 'pressure-washing',
    route: 'pressure-washing',
    number: '05',
    title: 'Power & Pressure Washing',
    subtitle: 'Surface-Calibrated Exterior Restoration',
    summary:
      'Exterior pressure and power washing for residential and commercial stonework, walkways, driveways, patios, and building facades.',
    editorialLead:
      'Oklahoma red clay, seasonal pollen, and weather buildup quickly weather natural stone and concrete. We pair surface-appropriate pressure levels with dedicated solutions to refresh exterior architecture.',
    ctaLabel: 'Request an Exterior Cleaning Quote',
    quoteCategory: 'residential',
    quoteServiceOption: 'Pressure Washing',
    image: IMAGES.exterior,
    imageAlt:
      'Freshly washed pale natural limestone courtyard patio and walkway beside tailored greenery and stone residence architecture',
    highlights: [
      'Natural limestone walkways & courtyard patios',
      'Concrete driveways, aprons & entry steps',
      'Exterior siding, brick & architectural stone',
      'Commercial storefront sidewalks & entries',
      'Surface-calibrated pressure settings',
      'Oklahoma red clay & seasonal grime removal',
    ],
    scopeDetails: [
      {
        heading: 'Hardscapes, Walkways & Entry Courts',
        description:
          'Clearing embedded dirt, algae, leaf staining, and Oklahoma red clay from pedestrian and vehicular stone surfaces.',
        points: [
          'Consistent cleaning across limestone pavers, concrete drives, and brick walkways',
          'Careful attention near mortar joints, landscape borders, and entry thresholds',
          'Patios, pool surrounds, and outdoor entertaining areas',
        ],
      },
      {
        heading: 'Facades & Commercial Exteriors',
        description:
          'Restoring clean visual presentation to residential exteriors and commercial entryways.',
        points: [
          'Adjusted pressure calibration tailored to stone, brick, or siding material',
          'Commercial entry plazas, walkways, and storefront aprons',
          'Coordinated scheduling during dry weather windows',
        ],
      },
    ],
    idealFor: [
      'Residences with limestone patios, stone walkways, and long driveways',
      'Properties clearing spring pollen or storm-season residue',
      'Commercial buildings refreshing sidewalks and entranceways',
    ],
  },
];

export const DETAIL_FOCUS_AREAS: DetailFocusArea[] = [
  {
    id: 'fixtures',
    index: '01',
    title: 'Decorative Light Fixtures',
    category: 'Crystal & Metalwork',
    summary:
      'Dust settles along upper chandelier arms, sockets, and faceted crystal where standard dusters cannot reach cleanly. Each prism and glass globe is inspected and detailed individually.',
    inspectionPoints: [
      'Individual crystal prism and glass shade wiping',
      'Careful dusting around delicate finials and brass chains',
      'Surrounding floor and rug protection throughout service',
    ],
    image: IMAGES.chandelier,
    imageAlt: 'Close architectural view of a sparkling tiered crystal and brass chandelier',
  },
  {
    id: 'surfaces',
    index: '02',
    title: 'Fine Surfaces & Countertops',
    category: 'Stone, Brass & Wood',
    summary:
      'Natural stone, honed marble, unlacquered metals, and custom cabinetry require thoughtful cleaning methods rather than harsh, one-size-fits-all abrasives.',
    inspectionPoints: [
      'Honed travertine, marble, and granite surface care',
      'Polishing brushed bronze, brass, and stainless hardware',
      'Cabinet face and edge detailing without moisture saturation',
    ],
    image: IMAGES.kitchen,
    imageAlt: 'Honed travertine kitchen island and brushed bronze architectural range hood',
  },
  {
    id: 'trim',
    index: '03',
    title: 'Baseboards & Architectural Trim',
    category: 'Millwork & Edges',
    summary:
      'Window sills, wainscoting, crown ledges, and door casings frame every room. Detailed hand-wiping removes settled dust lines that dull crisp millwork.',
    inspectionPoints: [
      'Baseboard profiles, shoe molding, and room corners',
      'Window mullions, interior sills, and track channels',
      'Door panels, transoms, and upper cabinet trim ledges',
    ],
    image: IMAGES.hero,
    imageAlt: 'Architectural residential interior showing crisp crown molding, steel-framed windows, and oak flooring',
  },
  {
    id: 'kitchens',
    index: '04',
    title: 'Renovated Kitchens',
    category: 'Post-Remodel & Deep Clean',
    summary:
      'Whether following a cabinet remodel or a full residential deep clean, kitchens demand patience inside drawers, beneath range hoods, and across stone backsplashes.',
    inspectionPoints: [
      'Upper cabinetry ledges and range hood exteriors',
      'Drawer interiors and pantry shelving dust extraction',
      'Sink basins, bridge faucets, and appliance fronts',
    ],
    image: IMAGES.kitchen,
    imageAlt: 'Luxury renovated kitchen with custom cabinetry and clean travertine surfaces',
  },
  {
    id: 'commercial-floors',
    index: '05',
    title: 'Commercial Floors & Glass',
    category: 'Executive Environments',
    summary:
      'High-traffic lobbies, glass conference partitions, and commercial carpet suites maintain their architectural presence through disciplined floor and glazing care.',
    inspectionPoints: [
      'Floor-to-ceiling interior glass partition clarity',
      'Honed lobby stone and corridor edge detailing',
      'Commercial carpet extraction and spot attention',
    ],
    image: IMAGES.commercial,
    imageAlt: 'Spotless modern commercial office lobby with stone floor and glass partitions',
  },
  {
    id: 'stonework',
    index: '06',
    title: 'Exterior Stonework & Walkways',
    category: 'Power & Pressure Washing',
    summary:
      'Exterior limestone paths, driveways, and entry terraces contend with Oklahoma red clay and seasonal pollen. Calibrated washing restores crisp stone tone.',
    inspectionPoints: [
      'Calibrated pressure protecting stone and mortar joints',
      'Driveway, walkway, and patio surface uniformity',
      'Threshold and courtyard perimeter detailing',
    ],
    image: IMAGES.exterior,
    imageAlt: 'Clean natural limestone courtyard walkway and patio pavers in afternoon light',
  },
];

export const CLIENT_TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'mary-j',
    author: 'Mary J.',
    projectContext: 'Post-Renovation & Carpet Steam Clean',
    quote:
      'Jaynee and crew were great! We renovated a house and wanted it squeaky clean before we moved furniture back in. They touched every surface in the house- top to bottom. She also steam cleaned carpet in one room. I can definitely recommend them to anyone for a big job. The crew were so respectful of our property and sooooo polite. Very satisfied with the services!',
    sourceLabel: 'Published on okcuptowncleaning.com',
    sourceUrl: 'https://www.okcuptowncleaning.com/',
  },
  {
    id: 'melissa-m',
    author: 'Melissa M.',
    projectContext: 'Residential Deep Cleaning',
    quote:
      'Up town cleaning came and cleaned my home this last week and, they did an amazing job. They were very professional. For everything they did on a deep cleaning the price was way more then fair. I will be using them again.',
    sourceLabel: 'Published on okcuptowncleaning.com',
    sourceUrl: 'https://www.okcuptowncleaning.com/',
  },
  {
    id: 'jana-t',
    author: 'Jana T.',
    projectContext: 'Specialty Residential Care',
    quote:
      'OKC Uptown Cleaning Services is AWESOME!! They do a super-thorough job getting everything shining clean! I highly recommend them!',
    sourceLabel: 'Published on okcuptowncleaning.com',
    sourceUrl: 'https://www.okcuptowncleaning.com/',
  },
  {
    id: 'amber-d',
    author: 'Amber D.',
    projectContext: 'Detailed Home Cleaning',
    quote:
      'Not only did they get to my house quick and in a hurry but they got it shining again in no time at all while providing outstanding customer service in the process. Highly recommend this company and the quality of work they bring with them. Will be back.',
    sourceLabel: 'Published on okcuptowncleaning.com',
    sourceUrl: 'https://www.okcuptowncleaning.com/',
  },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'specialty-difference',
    category: 'Policy & Scope',
    question: 'What makes specialty cleaning different from a standard cleaning service?',
    answer:
      'Specialty cleaning focuses on labor-intensive, high-detail work that routine maintenance overlooks—such as upper cabinet ledges, light fixtures, baseboards, areas behind and beneath furniture, post-renovation dust extraction, crystal chandeliers, and exterior stonework. Every project is scoped around the materials, condition, and expectations of the property.',
  },
  {
    id: 'no-recurring-maid',
    category: 'Residential',
    question: 'Do you offer standard weekly or recurring residential housekeeping?',
    answer:
      'No. OKC Uptown Cleaning Services, LLC explicitly does not offer standard recurring home cleaning, basic touch-up visits, or budget maid service. Our teams focus on detailed residential deep cleaning, move-in/move-out resets, post-construction cleaning, chandelier care, and pressure washing. Homeowners may inquire about periodic deep-cleaning projects (such as seasonal or quarterly deep cleans), but routine weekly housekeeping is not offered.',
  },
  {
    id: 'exclusions',
    category: 'Policy & Scope',
    question: 'Are there services you do not perform?',
    answer:
      'In addition to not offering standard recurring residential housekeeping, we do not handle hoarder clean-outs, extreme decluttering, or junk removal. Our scope is centered on detailed cleaning and surface care for residential, post-renovation, and commercial properties.',
  },
  {
    id: 'how-quotes-work',
    category: 'Pricing & Scheduling',
    question: 'How are project quotes determined?',
    answer:
      'Every property and project scope is distinct, so we do not publish flat-rate or one-size-fits-all pricing. Quotes are tailored based on square footage, property condition, material types, ceiling or fixture height, and the level of detail required. Share your project details through our consultation form or by phone at (405) 882-2863 to arrange an estimate.',
  },
  {
    id: 'post-construction',
    category: 'Specialty Services',
    question: 'What is included in post-construction and remodel cleaning?',
    answer:
      'Post-construction and remodel cleaning removes fine sawdust and drywall dust from walls, floors, cabinets, fixtures, windows, and appliances; addresses paint splatters, stickers, and adhesive residues on glass and surfaces; and deeply cleans kitchens, baths, and living spaces so the property is ready for furniture and occupancy.',
  },
  {
    id: 'chandelier-care',
    category: 'Specialty Services',
    question: 'How do you handle delicate chandeliers and specialty light fixtures?',
    answer:
      'Chandelier and specialty fixture cleaning follows a careful, multi-step process: inspecting fixture components and stability, protecting surrounding surfaces, hand-cleaning crystal, glass, and metalwork with appropriate methods for streak-free clarity, and establishing a personalized care recommendation when appropriate.',
  },
  {
    id: 'pressure-washing',
    category: 'Specialty Services',
    question: 'What exterior surfaces can be pressure washed?',
    answer:
      'We provide residential and commercial power and pressure washing for appropriate exterior surfaces—including driveways, sidewalks, natural stone walkways, patios, siding, and commercial entryways—adjusting pressure settings to help remove dirt, Oklahoma red clay, and buildup while respecting surface integrity.',
  },
  {
    id: 'residential-vs-commercial',
    category: 'Commercial',
    question: 'Do you serve both residential homeowners and commercial businesses?',
    answer:
      'Yes. While our residential services center on one-time or periodic deep-cleaning projects, move-related cleans, renovations, chandeliers, and exterior washing, our commercial division also provides ongoing commercial office cleaning, janitorial services, commercial carpet cleaning, and specialty commercial care.',
  },
  {
    id: 'service-area',
    category: 'Pricing & Scheduling',
    question: 'Which Oklahoma communities do you serve?',
    answer:
      'Our primary service hub is Oklahoma City, with confirmed service availability in nearby communities including Nichols Hills and Edmond, as well as surrounding Greater Oklahoma City areas such as Moore and Norman. Include your city or ZIP code when requesting a consultation so we can confirm coverage for your project.',
  },
];

export const QUOTE_OPTIONS = {
  residentialServices: [
    {
      value: 'Deep Cleaning',
      label: 'Deep Cleaning',
      description: 'Top-to-bottom interior detailing for residences (project-based, not weekly maid service).',
    },
    {
      value: 'Move-In / Move-Out Cleaning',
      label: 'Move-In / Move-Out Cleaning',
      description: 'Comprehensive preparation before moving in or after vacating a residence.',
    },
    {
      value: 'Post-Construction Cleaning',
      label: 'Post-Construction Cleaning',
      description: 'Fine dust, paint, and residue removal following new builds or renovations.',
    },
    {
      value: 'Chandelier Cleaning',
      label: 'Chandelier Cleaning',
      description: 'Hand-detailed care for crystal, glass, and decorative lighting fixtures.',
    },
    {
      value: 'Pressure Washing',
      label: 'Pressure Washing',
      description: 'Surface-appropriate exterior washing for stonework, walkways, patios, and driveways.',
    },
    {
      value: 'Other / Not Sure',
      label: 'Other / Not Sure',
      description: 'Describe your residential specialty cleaning project and we will advise on scope.',
    },
  ],
  commercialServices: [
    {
      value: 'Commercial Cleaning',
      label: 'Commercial Cleaning',
      description: 'Executive offices, reception lobbies, fitness centers, and client-facing venues.',
    },
    {
      value: 'Janitorial Services',
      label: 'Janitorial Services',
      description: 'Consistent facility upkeep, restroom sanitization, and shared workspace care.',
    },
    {
      value: 'Commercial Carpet Cleaning',
      label: 'Commercial Carpet Cleaning',
      description: 'Targeted carpet extraction and corridor maintenance for commercial suites.',
    },
    {
      value: 'Post-Construction Cleaning',
      label: 'Post-Construction Cleaning',
      description: 'Tenant build-out and commercial renovation finishing cleanup.',
    },
    {
      value: 'Specialty Fixture Cleaning',
      label: 'Specialty Fixture Cleaning',
      description: 'Architectural lighting, lobby chandeliers, and high glass detailing.',
    },
    {
      value: 'Pressure Washing',
      label: 'Pressure Washing',
      description: 'Storefront sidewalks, exterior stone, and commercial entranceways.',
    },
    {
      value: 'Other / Not Sure',
      label: 'Other / Not Sure',
      description: 'Outline your facility needs and our team will recommend the appropriate scope.',
    },
  ],
  residentialPropertyTypes: [
    'Single-Family Residence',
    'Estate / Multi-Story Home',
    'Condominium / Townhome',
    'Vacant / Move-Ready Property',
    'Newly Renovated Home',
  ],
  commercialPropertyTypes: [
    'Executive / Professional Office',
    'Multi-Tenant Commercial Building',
    'Fitness / Wellness Facility',
    'Entertainment / Hospitality Venue',
    'Retail / Showroom Space',
    'Commercial Build-Out / Renovation',
  ],
  commercialFrequencies: [
    'One-Time Project',
    'Weekly Commercial Service',
    'Multiple Times Per Week',
    'Bi-Weekly Commercial Service',
    'Monthly / Periodic Deep Care',
    'To Be Determined During Consultation',
  ],
} as const;
