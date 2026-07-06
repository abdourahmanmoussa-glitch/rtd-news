export interface NavItem {
  label: string;
  slug: string;
}

export interface NavGroup {
  label: string;
  items: NavItem[];
}

// Grouped to power a mega-menu instead of one flat 25-item bar.
export const navGroups: NavGroup[] = [
  {
    label: 'Nation',
    items: [
      { label: 'Politique', slug: 'politique' },
      { label: 'Présidence', slug: 'presidence' },
      { label: 'Gouvernement', slug: 'gouvernement' },
      { label: 'Parlement', slug: 'parlement' },
      { label: 'Justice', slug: 'justice' },
      { label: 'Défense', slug: 'defense' },
    ],
  },
  {
    label: 'Économie',
    items: [
      { label: 'Économie', slug: 'economie' },
      { label: 'Développement', slug: 'developpement' },
      { label: 'Infrastructure', slug: 'infrastructure' },
      { label: 'Technologie', slug: 'technologie' },
      { label: 'Environnement', slug: 'environnement' },
    ],
  },
  {
    label: 'Société',
    items: [
      { label: 'Santé', slug: 'sante' },
      { label: 'Éducation', slug: 'education' },
      { label: 'Société', slug: 'societe' },
      { label: 'Religion', slug: 'religion' },
      { label: 'Culture', slug: 'culture' },
      { label: 'Sports', slug: 'sports' },
    ],
  },
  {
    label: 'Monde',
    items: [
      { label: 'International', slug: 'international' },
      { label: 'Afrique', slug: 'afrique' },
      { label: 'Monde', slug: 'monde' },
    ],
  },
];

export const topLevelNav: NavItem[] = [
  { label: 'Accueil', slug: '' },
  { label: 'Actualités', slug: 'actualites' },
];

export const mediaNav: NavItem[] = [
  { label: 'Émissions', slug: 'emissions' },
  { label: 'Galerie', slug: 'galerie' },
  { label: 'Vidéothèque', slug: 'videos' },
  { label: 'Podcasts', slug: 'podcasts' },
];

export const allCategorySlugsFlat: NavItem[] = navGroups.flatMap((g) => g.items);
