import rtdLogo from '@/assets/rtd-logo.png';

export function RtdMark({ className = 'h-9 w-9' }: { className?: string }) {
  return (
    <img
      src={rtdLogo}
      alt="RTD — Radio Télévision Djibouti"
      className={`${className} object-contain shrink-0`}
    />
  );
}

export function RtdWordmark({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <RtdMark />
      <div className="leading-none">
        <div className="font-display font-semibold text-lg tracking-tight text-marine-900">RTD</div>
        <div className="text-[10px] font-medium uppercase tracking-[0.14em] text-ink-500 -mt-0.5">
          Radio Télévision Djibouti
        </div>
      </div>
    </div>
  );
}
