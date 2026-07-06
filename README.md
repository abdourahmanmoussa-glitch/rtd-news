# RTD — Radio Télévision Djibouti

Portail d'information officiel de la Radio Télévision Djibouti (RTD) : actualités, direct TV/radio, émissions, vidéothèque et podcasts.

## Stack

- Vite + React 19 + TypeScript
- Tailwind CSS v4
- React Router
- TanStack Query
- react-helmet-async (SEO)
- Lucide icons

## Développement

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Données

Le contenu (articles, rubriques) est actuellement servi depuis `src/data/articles.ts` avec des données de démonstration, structurées pour être facilement remplacées par de vraies requêtes Supabase (même schéma que `rtd-cms-admin`).
