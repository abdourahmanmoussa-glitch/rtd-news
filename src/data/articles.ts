import type { Category, Article } from '@/types/content';

export const categories: Category[] = [
  { id: 'c1', slug: 'politique', name: 'Politique', group: 'national', description: "L'actualité institutionnelle et politique nationale." },
  { id: 'c2', slug: 'presidence', name: 'Présidence', group: 'national', description: "Les activités de la Présidence de la République." },
  { id: 'c3', slug: 'gouvernement', name: 'Gouvernement', group: 'national', description: "Décisions et actions du Gouvernement." },
  { id: 'c4', slug: 'parlement', name: 'Parlement', group: 'national', description: "Travaux et débats de l'Assemblée nationale." },
  { id: 'c5', slug: 'economie', name: 'Économie', group: 'national', description: "Économie, commerce et finances." },
  { id: 'c6', slug: 'developpement', name: 'Développement', group: 'national', description: "Grands projets de développement national." },
  { id: 'c7', slug: 'infrastructure', name: 'Infrastructure', group: 'national', description: "Ports, routes, chemin de fer et énergie." },
  { id: 'c8', slug: 'sante', name: 'Santé', group: 'societe', description: "Santé publique et système de soins." },
  { id: 'c9', slug: 'education', name: 'Éducation', group: 'societe', description: "École, université et formation." },
  { id: 'c10', slug: 'justice', name: 'Justice', group: 'national', description: "Actualité judiciaire." },
  { id: 'c11', slug: 'defense', name: 'Défense', group: 'national', description: "Forces armées et sécurité nationale." },
  { id: 'c12', slug: 'culture', name: 'Culture', group: 'societe', description: "Arts, patrimoine et vie culturelle." },
  { id: 'c13', slug: 'religion', name: 'Religion', group: 'societe', description: "Vie religieuse et affaires islamiques." },
  { id: 'c14', slug: 'societe', name: 'Société', group: 'societe', description: "Vie quotidienne et faits de société." },
  { id: 'c15', slug: 'sports', name: 'Sports', group: 'societe', description: "Sport national et international." },
  { id: 'c16', slug: 'international', name: 'International', group: 'international', description: "Actualité internationale." },
  { id: 'c17', slug: 'afrique', name: 'Afrique', group: 'international', description: "Actualité du continent africain." },
  { id: 'c18', slug: 'monde', name: 'Monde', group: 'international', description: "Actualité mondiale." },
  { id: 'c19', slug: 'environnement', name: 'Environnement', group: 'national', description: "Climat, littoral et biodiversité." },
  { id: 'c20', slug: 'technologie', name: 'Technologie', group: 'national', description: "Numérique et innovation." },
];

const authors = [
  { id: 'a1', name: 'Amina Houssein', role: 'Rédactrice en chef' },
  { id: 'a2', name: 'Omar Farah', role: 'Journaliste politique' },
  { id: 'a3', name: 'Fatouma Ali', role: 'Journaliste économie' },
  { id: 'a4', name: 'Ibrahim Waberi', role: 'Correspondant international' },
  { id: 'a5', name: 'Sagal Robleh', role: 'Journaliste société' },
];

function img(seed: string, w = 1200, h = 800) {
  return `https://picsum.photos/seed/${seed}/${w}/${h}`;
}

function daysAgo(n: number, hour = 9) {
  const d = new Date();
  d.setDate(d.getDate() - n);
  d.setHours(hour, 0, 0, 0);
  return d.toISOString();
}

export const articles: Article[] = [
  {
    id: 'art-1',
    slug: 'port-de-djibouti-nouvelle-extension',
    title: "Le port de Djibouti annonce une nouvelle extension de ses capacités portuaires",
    excerpt: "Les autorités portuaires ont présenté un plan d'extension destiné à renforcer la position de Djibouti comme carrefour logistique régional.",
    body: [
      "Les autorités portuaires ont présenté ce jeudi un plan d'extension des terminaux à conteneurs, destiné à absorber la croissance du trafic maritime régional.",
      "Ce projet s'inscrit dans une stratégie de long terme visant à consolider la place de Djibouti comme point de passage incontournable entre l'Afrique de l'Est, la péninsule arabique et l'Asie.",
      "Les travaux devraient s'échelonner sur plusieurs années et mobiliser des investissements publics et privés, avec un accent particulier sur la modernisation des équipements de manutention.",
      "Des représentants du secteur logistique se sont félicités de cette annonce, qui devrait générer de nouveaux emplois qualifiés dans la région.",
    ],
    categorySlug: 'infrastructure',
    author: authors[2],
    publishedAt: daysAgo(0, 8),
    readingTimeMinutes: 4,
    imageUrl: img('port-djibouti'),
    imageAlt: 'Vue du port de Djibouti',
    featured: true,
    tags: ['Port', 'Logistique', 'Investissement'],
    views: 4210,
    commentsCount: 12,
  },
  {
    id: 'art-2',
    slug: 'sommet-regional-corne-afrique',
    title: "Un sommet régional sur la stabilité dans la Corne de l'Afrique s'ouvre à Djibouti",
    excerpt: "Des délégations de plusieurs pays de la région se réunissent pour évoquer la sécurité et la coopération économique.",
    body: [
      "Plusieurs délégations ministérielles sont arrivées ce mercredi pour participer à un sommet consacré à la stabilité régionale et à la coopération économique dans la Corne de l'Afrique.",
      "Les discussions porteront notamment sur la sécurité maritime, la lutte contre le terrorisme et l'intégration des infrastructures de transport entre les pays voisins.",
      "Djibouti, en tant qu'hôte, met en avant son rôle de plateforme de dialogue et de médiation dans une région marquée par plusieurs foyers de tension.",
    ],
    categorySlug: 'international',
    author: authors[3],
    publishedAt: daysAgo(0, 6),
    readingTimeMinutes: 5,
    imageUrl: img('sommet-corne-afrique'),
    imageAlt: 'Salle de conférence internationale',
    featured: true,
    breaking: true,
    tags: ['Diplomatie', 'Sécurité régionale'],
    views: 6890,
    commentsCount: 24,
  },
  {
    id: 'art-3',
    slug: 'reforme-systeme-educatif',
    title: "Éducation : une réforme du cursus secondaire présentée aux enseignants",
    excerpt: "Le ministère de l'Éducation a détaillé les grandes lignes d'une réforme visant à moderniser les programmes scolaires.",
    body: [
      "Le ministère de l'Éducation a organisé une session de présentation à destination des enseignants du secondaire, portant sur une réforme progressive des programmes.",
      "L'objectif affiché est de renforcer les compétences numériques et scientifiques des élèves tout en préservant l'enseignement des langues nationales.",
      "La réforme sera déployée par étapes sur les trois prochaines années scolaires, avec un accompagnement dédié à la formation continue des enseignants.",
    ],
    categorySlug: 'education',
    author: authors[4],
    publishedAt: daysAgo(1, 14),
    readingTimeMinutes: 3,
    imageUrl: img('education-djibouti'),
    imageAlt: 'Salle de classe',
    tags: ['École', 'Réforme'],
    views: 1560,
    commentsCount: 5,
  },
  {
    id: 'art-4',
    slug: 'campagne-vaccination-nationale',
    title: "Santé publique : lancement d'une nouvelle campagne de vaccination",
    excerpt: "Le ministère de la Santé lance une campagne à destination des zones rurales et périurbaines.",
    body: [
      "Une nouvelle campagne de vaccination a été lancée à l'échelle nationale, avec un accent particulier sur les zones rurales et périurbaines les moins couvertes.",
      "Des équipes mobiles seront déployées dans plusieurs régions pour faciliter l'accès aux soins des populations les plus éloignées des centres de santé.",
      "Les autorités sanitaires appellent les familles à se rapprocher des centres de santé de proximité pour bénéficier de cette campagne.",
    ],
    categorySlug: 'sante',
    author: authors[4],
    publishedAt: daysAgo(1, 10),
    readingTimeMinutes: 3,
    imageUrl: img('sante-djibouti'),
    imageAlt: 'Centre de santé',
    tags: ['Santé publique', 'Vaccination'],
    views: 2320,
    commentsCount: 8,
  },
  {
    id: 'art-5',
    slug: 'equipe-nationale-eliminatoires',
    title: "Football : l'équipe nationale se prépare pour les éliminatoires",
    excerpt: "La sélection nationale a entamé un stage de préparation avant les prochaines rencontres qualificatives.",
    body: [
      "La sélection nationale de football a entamé un stage de préparation intensif en vue des prochaines rencontres qualificatives.",
      "Le sélectionneur a convoqué plusieurs joueurs évoluant à l'étranger pour renforcer le groupe avant cette échéance importante.",
      "Les supporters sont invités à se mobiliser pour les prochains matchs à domicile, dont le calendrier sera communiqué prochainement.",
    ],
    categorySlug: 'sports',
    author: authors[1],
    publishedAt: daysAgo(2, 9),
    readingTimeMinutes: 2,
    imageUrl: img('football-djibouti'),
    imageAlt: 'Stade de football',
    tags: ['Football', 'Sélection nationale'],
    views: 3100,
    commentsCount: 15,
  },
  {
    id: 'art-6',
    slug: 'festival-culturel-patrimoine',
    title: "Un festival met à l'honneur le patrimoine culturel national",
    excerpt: "Musique, artisanat et poésie traditionnelle rassemblent les visiteurs pour une nouvelle édition du festival.",
    body: [
      "La nouvelle édition du festival culturel a rassemblé artisans, musiciens et poètes autour de la valorisation du patrimoine national.",
      "Des ateliers ont permis au jeune public de découvrir les techniques traditionnelles de tissage et de vannerie.",
      "Les organisateurs espèrent faire de cet événement un rendez-vous annuel incontournable pour la scène culturelle locale.",
    ],
    categorySlug: 'culture',
    author: authors[4],
    publishedAt: daysAgo(2, 16),
    readingTimeMinutes: 3,
    imageUrl: img('culture-festival'),
    imageAlt: 'Festival culturel',
    tags: ['Patrimoine', 'Festival'],
    views: 1890,
    commentsCount: 6,
  },
  {
    id: 'art-7',
    slug: 'croissance-secteur-numerique',
    title: 'Le secteur numérique enregistre une croissance soutenue',
    excerpt: "Un rapport souligne la progression des services numériques et des jeunes entreprises technologiques.",
    body: [
      "Un rapport présenté cette semaine souligne la progression continue des services numériques dans l'économie nationale.",
      "Plusieurs jeunes entreprises technologiques ont émergé ces dernières années, portées par des programmes d'accompagnement à l'entrepreneuriat.",
      "Les autorités entendent poursuivre les investissements dans la connectivité afin de soutenir cette dynamique.",
    ],
    categorySlug: 'technologie',
    author: authors[2],
    publishedAt: daysAgo(3, 11),
    readingTimeMinutes: 4,
    imageUrl: img('tech-djibouti'),
    imageAlt: 'Espace de coworking',
    tags: ['Numérique', 'Startups'],
    views: 2740,
    commentsCount: 9,
  },
  {
    id: 'art-8',
    slug: 'protection-littoral-environnement',
    title: 'Une initiative pour la protection du littoral prend forme',
    excerpt: "Des associations locales et les autorités environnementales unissent leurs efforts pour préserver les zones côtières.",
    body: [
      "Une initiative conjointe entre associations locales et autorités environnementales vise à mieux protéger les zones côtières fragiles.",
      "Des actions de sensibilisation seront menées auprès des pêcheurs et des communautés riveraines.",
      "Le projet prévoit également le suivi scientifique des écosystèmes marins les plus exposés.",
    ],
    categorySlug: 'environnement',
    author: authors[3],
    publishedAt: daysAgo(4, 8),
    readingTimeMinutes: 3,
    imageUrl: img('littoral-djibouti'),
    imageAlt: 'Littoral de Djibouti',
    tags: ['Environnement', 'Littoral'],
    views: 1420,
    commentsCount: 4,
  },
];

export function getArticleBySlug(slug: string) {
  return articles.find((a) => a.slug === slug);
}

export function getArticlesByCategory(categorySlug: string) {
  return articles.filter((a) => a.categorySlug === categorySlug);
}

export function getCategoryBySlug(slug: string) {
  return categories.find((c) => c.slug === slug);
}

export function getRelatedArticles(article: Article, count = 3) {
  return articles
    .filter((a) => a.id !== article.id && a.categorySlug === article.categorySlug)
    .slice(0, count);
}

export function getMostRead(count = 5) {
  return [...articles].sort((a, b) => b.views - a.views).slice(0, count);
}

export function getMostRecent(count = 5) {
  return [...articles].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  ).slice(0, count);
}

export function getMostCommented(count = 5) {
  return [...articles].sort((a, b) => b.commentsCount - a.commentsCount).slice(0, count);
}

export const breakingHeadlines = articles
  .filter((a) => a.breaking)
  .map((a) => a.title)
  .concat([
    'Météo : vigilance chaleur sur l\'ensemble du territoire ce week-end',
    'Le conseil des ministres se réunit ce mardi en session ordinaire',
    "Ouverture d'une nouvelle liaison aérienne régionale",
  ]);
