import { Link } from 'react-router-dom';
import { categories } from '@/data/articles';
import { mediaNav } from '@/data/navigation';
import { Smartphone, Apple } from 'lucide-react';

function LegalShell({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 xl:px-10 py-16">
      <h1 className="font-display text-3xl font-medium text-marine-900 mb-6">{title}</h1>
      <div className="prose prose-slate max-w-none [&>p]:text-ink-700 [&>p]:leading-relaxed [&>p]:mb-4 text-sm">
        {children}
      </div>
    </div>
  );
}

export function MentionsLegalesPage() {
  return (
    <LegalShell title="Mentions légales">
      <p>
        Ce site est édité par Radio Télévision Djibouti (RTD), média national de la République
        de Djibouti. Directeur de la publication : la Direction générale de RTD.
      </p>
      <p>
        L'ensemble des contenus (textes, images, vidéos, sons) publiés sur ce site est protégé
        par le droit d'auteur et ne peut être reproduit sans autorisation préalable.
      </p>
      <p>
        Pour toute question relative à ce site, vous pouvez nous contacter via la page{' '}
        <Link to="/contact" className="text-marine-700 font-medium hover:underline">Contact</Link>.
      </p>
    </LegalShell>
  );
}

export function ConfidentialitePage() {
  return (
    <LegalShell title="Politique de confidentialité">
      <p>
        RTD attache une grande importance à la protection des données personnelles de ses
        utilisateurs. Cette page décrit, de manière générale, les principes appliqués lors de la
        collecte et du traitement des données sur ce site.
      </p>
      <p>
        Les données transmises via le formulaire de contact ou l'inscription à la newsletter sont
        utilisées exclusivement pour répondre aux demandes des utilisateurs ou leur adresser les
        contenus auxquels ils se sont abonnés.
      </p>
      <p>
        Vous disposez d'un droit d'accès, de rectification et de suppression de vos données,
        que vous pouvez exercer en nous contactant directement.
      </p>
    </LegalShell>
  );
}

export function PlanDuSitePage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 xl:px-10 py-16">
      <h1 className="font-display text-3xl font-medium text-marine-900 mb-8">Plan du site</h1>
      <div className="grid sm:grid-cols-3 gap-10">
        <div>
          <h2 className="text-xs font-semibold uppercase tracking-wide text-ink-500 mb-3">Rubriques</h2>
          <ul className="flex flex-col gap-2">
            {categories.map((c) => (
              <li key={c.slug}>
                <Link to={`/rubrique/${c.slug}`} className="text-sm text-ink-700 hover:text-marine-800">{c.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-xs font-semibold uppercase tracking-wide text-ink-500 mb-3">Médias</h2>
          <ul className="flex flex-col gap-2">
            {mediaNav.map((m) => (
              <li key={m.slug}>
                <Link to={`/${m.slug}`} className="text-sm text-ink-700 hover:text-marine-800">{m.label}</Link>
              </li>
            ))}
            <li><Link to="/direct" className="text-sm text-ink-700 hover:text-marine-800">TV & Radio en direct</Link></li>
          </ul>
        </div>
        <div>
          <h2 className="text-xs font-semibold uppercase tracking-wide text-ink-500 mb-3">Institutionnel</h2>
          <ul className="flex flex-col gap-2">
            <li><Link to="/a-propos" className="text-sm text-ink-700 hover:text-marine-800">À propos</Link></li>
            <li><Link to="/contact" className="text-sm text-ink-700 hover:text-marine-800">Contact</Link></li>
            <li><Link to="/mentions-legales" className="text-sm text-ink-700 hover:text-marine-800">Mentions légales</Link></li>
            <li><Link to="/confidentialite" className="text-sm text-ink-700 hover:text-marine-800">Politique de confidentialité</Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export function ApplicationsPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 xl:px-10 py-16 text-center">
      <h1 className="font-display text-3xl font-medium text-marine-900 mb-4">Applications mobiles</h1>
      <p className="text-ink-500 max-w-xl mx-auto leading-relaxed mb-10">
        Retrouvez l'actualité, la télévision et la radio de RTD directement sur votre téléphone
        avec l'application RTD Connect.
      </p>
      <div className="flex items-center justify-center gap-4">
        <a href="#" className="inline-flex items-center gap-2 bg-marine-900 text-white rounded-xl px-5 py-3 text-sm font-semibold hover:bg-marine-800 transition-colors">
          <Apple className="w-4 h-4" /> App Store
        </a>
        <a href="#" className="inline-flex items-center gap-2 bg-marine-900 text-white rounded-xl px-5 py-3 text-sm font-semibold hover:bg-marine-800 transition-colors">
          <Smartphone className="w-4 h-4" /> Google Play
        </a>
      </div>
    </div>
  );
}
