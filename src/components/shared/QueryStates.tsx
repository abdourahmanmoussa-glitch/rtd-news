import { Loader2, AlertTriangle, Inbox } from 'lucide-react';

export function LoadingBlock({ label = 'Chargement…' }: { label?: string }) {
  return (
    <div className="flex items-center justify-center gap-2 py-16 text-ink-500 text-sm">
      <Loader2 className="w-4 h-4 animate-spin" />
      {label}
    </div>
  );
}

export function ErrorBlock({ message = "Une erreur est survenue lors du chargement." }: { message?: string }) {
  return (
    <div className="flex flex-col items-center justify-center gap-2 py-16 text-ink-500 text-sm text-center">
      <AlertTriangle className="w-5 h-5 text-signal-600" />
      {message}
    </div>
  );
}

export function EmptyBlock({ message = 'Aucun contenu disponible pour le moment.' }: { message?: string }) {
  return (
    <div className="flex flex-col items-center justify-center gap-2 py-16 text-ink-500 text-sm text-center">
      <Inbox className="w-5 h-5 text-ink-500/60" />
      {message}
    </div>
  );
}
