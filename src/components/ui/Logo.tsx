export function RtdMark({ className = 'h-9 w-9' }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <circle cx="24" cy="24" r="22" fill="var(--color-marine-900)" />
      <path
        d="M24 4a20 20 0 0 1 19.5 15.6C38 22 32 30 24 36c-6 4.5-13 6-18.5 4A20 20 0 0 1 24 4Z"
        fill="var(--color-marine-700)"
        opacity="0.55"
      />
      <path
        d="M40 30c-4 6-11 11-19 12 4-6 9-9 13-14 3-3.6 4.4-7 4.7-11.4C41.5 20.2 42 25.4 40 30Z"
        fill="var(--color-signal-500)"
      />
      <text
        x="24"
        y="30"
        textAnchor="middle"
        fontFamily="var(--font-display)"
        fontSize="20"
        fontWeight="600"
        fill="white"
      >
        R
      </text>
    </svg>
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
