export default function TopographicAura({ className = "" }: { className?: string }) {
  return (
    <div
      className={`absolute inset-0 -z-10 overflow-hidden pointer-events-none select-none ${className}`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1000 480"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full object-cover text-emerald-950 dark:text-emerald-400"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="topoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="currentColor" stopOpacity="0.08" />
            <stop offset="50%" stopColor="currentColor" stopOpacity="0.04" />
            <stop offset="100%" stopColor="currentColor" stopOpacity="0.01" />
          </linearGradient>
        </defs>

        {/* Harmonic Wave Ribbon 1 */}
        <path
          d="M -60 140 C 180 60, 420 220, 680 120 C 860 50, 980 170, 1080 150"
          stroke="url(#topoGradient)"
          strokeWidth="1.5"
          vectorEffect="non-scaling-stroke"
        />

        {/* Harmonic Wave Ribbon 2 */}
        <path
          d="M -40 200 C 200 120, 440 280, 700 180 C 880 110, 1000 230, 1100 210"
          stroke="url(#topoGradient)"
          strokeWidth="1.2"
          vectorEffect="non-scaling-stroke"
        />

        {/* Harmonic Wave Ribbon 3 */}
        <path
          d="M -20 260 C 220 180, 460 340, 720 240 C 900 170, 1020 290, 1120 270"
          stroke="url(#topoGradient)"
          strokeWidth="1"
          vectorEffect="non-scaling-stroke"
        />

        {/* Harmonic Wave Ribbon 4 (Soft Counter-Curve) */}
        <path
          d="M -50 340 C 240 380, 520 200, 780 310 C 940 380, 1040 270, 1100 320"
          stroke="url(#topoGradient)"
          strokeWidth="0.8"
          strokeDasharray="6 8"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
    </div>
  );
}
