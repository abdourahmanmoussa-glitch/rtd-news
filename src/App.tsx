import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { HelmetProvider } from 'react-helmet-async';
import { Layout } from '@/components/layout/Layout';
import { HomePage } from '@/pages/HomePage';
import { ActualitesPage } from '@/pages/ActualitesPage';
import { CategoryPage } from '@/pages/CategoryPage';
import { ArticlePage } from '@/pages/ArticlePage';
import { LivePage } from '@/pages/LivePage';
import { EmissionsPage } from '@/pages/EmissionsPage';
import { GaleriePage } from '@/pages/GaleriePage';
import { VideothequePage } from '@/pages/VideothequePage';
import { PodcastsPage } from '@/pages/PodcastsPage';
import { ContactPage } from '@/pages/ContactPage';
import { RecherchePage } from '@/pages/RecherchePage';
import { AProposPage } from '@/pages/AProposPage';
import { MentionsLegalesPage, ConfidentialitePage, PlanDuSitePage, ApplicationsPage } from '@/pages/StaticPages';
import { NotFoundPage } from '@/pages/NotFoundPage';

const queryClient = new QueryClient();

export default function App() {
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route element={<Layout />}>
              <Route index element={<HomePage />} />
              <Route path="actualites" element={<ActualitesPage />} />
              <Route path="rubrique/:slug" element={<CategoryPage />} />
              <Route path="article/:slug" element={<ArticlePage />} />
              <Route path="direct" element={<LivePage />} />
              <Route path="emissions" element={<EmissionsPage />} />
              <Route path="galerie" element={<GaleriePage />} />
              <Route path="videos" element={<VideothequePage />} />
              <Route path="podcasts" element={<PodcastsPage />} />
              <Route path="contact" element={<ContactPage />} />
              <Route path="recherche" element={<RecherchePage />} />
              <Route path="a-propos" element={<AProposPage />} />
              <Route path="mentions-legales" element={<MentionsLegalesPage />} />
              <Route path="confidentialite" element={<ConfidentialitePage />} />
              <Route path="plan-du-site" element={<PlanDuSitePage />} />
              <Route path="applications" element={<ApplicationsPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </HelmetProvider>
  );
}
