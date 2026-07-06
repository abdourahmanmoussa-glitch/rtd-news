import { Link } from 'react-router-dom';
import { RtdWordmark } from '@/components/ui/Logo';
import { Globe, AtSign, MessageCircle, Share2, Send } from 'lucide-react';

const columns = [
  {
    title: 'RTD',
    links: [
      { label: 'À propos', to: '/a-propos' },
      { label: 'Historique', to: '/a-propos#histoire' },
      { label: 'Nos chaînes', to: '/direct' },
      { label: 'Nos émissions', to: '/emissions' },
      { label: 'Contact', to: '/contact' },
    ],
  },
  {
    title: 'Rubriques',
    links: [
      { label: 'Politique', to: '/rubrique/politique' },
      { label: 'Économie', to: '/rubrique/economie' },
      { label: 'Société', to: '/rubrique/societe' },
      { label: 'Sports', to: '/rubrique/sports' },
      { label: 'International', to: '/rubrique/international' },
    ],
  },
  {
    title: 'Ressources',
    links: [
      { label: 'Applications mobiles', to: '/applications' },
      { label: 'Plan du site', to: '/plan-du-site' },
      { label: 'Mentions légales', to: '/mentions-legales' },
      { label: 'Politique de confidentialité', to: '/confidentialite' },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-marine-950 text-white/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 xl:px-10 py-14">
        <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr_1fr_1fr] gap-10">
          <div>
            <div className="[&_.font-display]:text-white [&_div]:text-white/60">
              <RtdWordmark />
            </div>
            <p className="text-sm text-white/60 mt-4 max-w-xs leading-relaxed">
              Le média officiel de la République de Djibouti — actualités, télévision et radio en direct.
            </p>
            <div className="flex items-center gap-3 mt-5">
              {[Globe, AtSign, MessageCircle, Share2].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="text-xs font-semibold uppercase tracking-[0.1em] text-white/40 mb-4">
                {col.title}
              </h4>
              <ul className="space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link to={l.to} className="text-sm text-white/70 hover:text-white transition-colors">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h4 className="text-sm font-semibold text-white mb-1">Recevez l'essentiel de l'actualité</h4>
            <p className="text-xs text-white/50">Une sélection quotidienne, directement par email.</p>
          </div>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex items-center gap-2 w-full md:w-auto"
          >
            <input
              type="email"
              required
              placeholder="Votre adresse email"
              className="flex-1 md:w-64 bg-white/10 border border-white/15 rounded-full px-4 py-2.5 text-sm text-white placeholder:text-white/40 outline-none focus-visible:border-white/40"
            />
            <button
              type="submit"
              className="shrink-0 inline-flex items-center gap-2 bg-signal-600 hover:bg-signal-500 transition-colors text-white text-sm font-semibold px-4 py-2.5 rounded-full"
            >
              <Send className="w-3.5 h-3.5" />
              S'abonner
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 xl:px-10 py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-white/40">
          <span>© {new Date().getFullYear()} Radio Télévision Djibouti. Tous droits réservés.</span>
          <span>Un média de la République de Djibouti</span>
        </div>
      </div>
    </footer>
  );
}
