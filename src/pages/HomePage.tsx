import { Hero } from '@/components/home/Hero';
import { LiveSection } from '@/components/home/LiveSection';
import { CategoryStrip } from '@/components/home/CategoryStrip';
import { LatestNews } from '@/components/home/LatestNews';
import { Seo } from '@/components/shared/Seo';

export function HomePage() {
  return (
    <>
      <Seo
        title="RTD — Radio Télévision Djibouti"
        description="Le portail d'information officiel de Djibouti : actualités, direct TV et radio, émissions, vidéothèque et podcasts."
      />
      <Hero />
      <LiveSection />
      <CategoryStrip />
      <LatestNews />
    </>
  );
}
