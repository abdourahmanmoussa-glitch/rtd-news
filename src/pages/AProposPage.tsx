export function AProposPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 xl:px-10 py-16">
      <h1 className="font-display text-3xl sm:text-4xl font-medium text-marine-900">À propos de RTD</h1>
      <p className="text-ink-500 mt-4 leading-relaxed max-w-2xl">
        Radio Télévision Djibouti est le média national de la République de Djibouti, chargé
        d'informer, d'éduquer et de divertir l'ensemble de la population, en français comme dans
        les langues nationales.
      </p>

      <h2 id="histoire" className="font-display text-2xl font-medium text-marine-900 mt-12 mb-4">
        Historique
      </h2>
      <div className="flex flex-col gap-6 border-l-2 border-line pl-6">
        {[
          { year: '1960', text: "Débuts de la radiodiffusion nationale, aux prémices de l'histoire médiatique du pays." },
          { year: '1977', text: "Naissance de RTD au moment de l'indépendance, avec pour mission de porter la voix de la nation." },
          { year: '2000s', text: 'Modernisation progressive des infrastructures de diffusion, télévisuelles et radiophoniques.' },
          { year: 'Aujourd\u2019hui', text: "RTD poursuit sa transformation numérique avec de nouvelles plateformes de diffusion en ligne." },
        ].map((item) => (
          <div key={item.year} className="relative">
            <span className="absolute -left-[1.95rem] top-1 w-3 h-3 rounded-full bg-marine-800" />
            <p className="text-sm font-semibold text-marine-800">{item.year}</p>
            <p className="text-ink-700 mt-1 leading-relaxed">{item.text}</p>
          </div>
        ))}
      </div>

      <h2 className="font-display text-2xl font-medium text-marine-900 mt-12 mb-4">
        Nos missions
      </h2>
      <ul className="grid sm:grid-cols-2 gap-4">
        {[
          "Informer le public de manière fiable et indépendante",
          "Valoriser le patrimoine culturel et linguistique national",
          "Accompagner l'éducation et la sensibilisation citoyenne",
          'Couvrir la vie institutionnelle et le développement du pays',
        ].map((m) => (
          <li key={m} className="bg-sand-100 rounded-xl p-4 text-sm text-ink-700 leading-relaxed">
            {m}
          </li>
        ))}
      </ul>
    </div>
  );
}
