import { Mail, Phone, MapPin } from 'lucide-react';
import { Seo } from '@/components/shared/Seo';

export function ContactPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 xl:px-10 py-16">
      <Seo title="Contact" description="Contactez la rédaction de RTD." />
      <h1 className="font-display text-3xl sm:text-4xl font-medium text-marine-900">Contact</h1>
      <p className="text-ink-500 mt-3 max-w-xl">Une question, une information à nous transmettre ? Écrivez-nous.</p>

      <div className="grid md:grid-cols-2 gap-10 mt-10">
        <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-4">
          <input placeholder="Nom complet" className="border border-line rounded-xl px-4 py-3 text-sm outline-none focus-visible:border-marine-700" />
          <input placeholder="Adresse email" type="email" className="border border-line rounded-xl px-4 py-3 text-sm outline-none focus-visible:border-marine-700" />
          <input placeholder="Sujet" className="border border-line rounded-xl px-4 py-3 text-sm outline-none focus-visible:border-marine-700" />
          <textarea placeholder="Votre message" rows={5} className="border border-line rounded-xl px-4 py-3 text-sm outline-none focus-visible:border-marine-700 resize-none" />
          <button className="bg-marine-900 text-white font-semibold rounded-full px-6 py-3 text-sm hover:bg-marine-800 transition-colors self-start">
            Envoyer le message
          </button>
        </form>

        <div className="flex flex-col gap-5">
          <div className="flex items-start gap-3">
            <MapPin className="w-5 h-5 text-marine-700 mt-0.5" />
            <div>
              <p className="text-sm font-medium text-ink-900">Adresse</p>
              <p className="text-sm text-ink-500">Djibouti-ville, République de Djibouti</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Phone className="w-5 h-5 text-marine-700 mt-0.5" />
            <div>
              <p className="text-sm font-medium text-ink-900">Téléphone</p>
              <p className="text-sm text-ink-500">+253 21 XX XX XX</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Mail className="w-5 h-5 text-marine-700 mt-0.5" />
            <div>
              <p className="text-sm font-medium text-ink-900">Email</p>
              <p className="text-sm text-ink-500">contact@rtd.dj</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
