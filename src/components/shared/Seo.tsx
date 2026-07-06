import { Helmet } from 'react-helmet-async';

interface SeoProps {
  title: string;
  description?: string;
  image?: string;
  type?: 'website' | 'article';
}

const SITE_NAME = 'RTD — Radio Télévision Djibouti';
const DEFAULT_DESCRIPTION =
  "RTD, le portail d'information officiel de Djibouti : actualités nationales et internationales, télévision et radio en direct, émissions et vidéothèque.";

export function Seo({ title, description = DEFAULT_DESCRIPTION, image, type = 'website' }: SeoProps) {
  const fullTitle = title === SITE_NAME ? title : `${title} | RTD`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      {image && <meta property="og:image" content={image} />}
      <meta name="twitter:card" content={image ? 'summary_large_image' : 'summary'} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  );
}
