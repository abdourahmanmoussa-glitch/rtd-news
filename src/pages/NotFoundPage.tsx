import { Link } from 'react-router-dom';

export function NotFoundPage() {
  return (
    <div className="max-w-lg mx-auto px-4 py-32 text-center">
      <p className="font-display text-6xl font-medium text-marine-900 mb-4">404</p>
      <h1 className="text-lg font-medium text-ink-900 mb-2">Page introuvable</h1>
      <p className="text-sm text-ink-500 mb-8">La page que vous cherchez n'existe pas ou a été déplacée.</p>
      <Link to="/" className="inline-flex items-center gap-2 bg-marine-900 text-white font-semibold rounded-full px-6 py-3 text-sm hover:bg-marine-800 transition-colors">
        Retour à l'accueil
      </Link>
    </div>
  );
}
