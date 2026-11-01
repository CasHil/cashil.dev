export default function FlowRibbonConduit({ className = "" }: { className?: string }) {
  return (
    <div className={`relative w-full h-8 overflow-visible pointer-events-none select-none ${className}`} aria-hidden="true">
      <svg
        viewBox="0 0 800 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full text-emerald-600 dark:text-emerald-400 overflow-visible"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="flowConduitGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="currentColor" stopOpacity="0.25" />
            <stop offset="25%" stopColor="currentColor" stopOpacity="0.8" />
            <stop offset="50%" stopColor="currentColor" stopOpacity="0.6" />
            <stop offset="75%" stopColor="currentColor" stopOpacity="0.8" />
            <stop offset="100%" stopColor="currentColor" stopOpacity="0.3" />
          </linearGradient>
          <radialGradient id="pulseGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="currentColor" stopOpacity="0.6" />
            <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Ambient Organic Flow Wave */}
        <path
          d="M 10 16 C 140 4, 260 28, 400 16 C 540 4, 660 28, 790 16"
          stroke="url(#flowConduitGrad)"
          strokeWidth="1.75"
          fill="none"
        />

        {/* Soft Dashed Trailing Vector */}
        <path
          d="M 10 16 C 140 4, 260 28, 400 16 C 540 4, 660 28, 790 16"
          stroke="currentColor"
          strokeWidth="1"
          strokeDasharray="4 6"
          strokeOpacity="0.35"
          fill="none"
        />

        {/* 4 Pulse Coordinates for the 4 Stages */}
        <g>
          {/* Stage 01 Node */}
          <circle cx="100" cy="14" r="7" fill="url(#pulseGlow)" />
          <circle cx="100" cy="14" r="3" fill="currentColor" />

          {/* Stage 02 Node */}
          <circle cx="300" cy="18" r="7" fill="url(#pulseGlow)" />
          <circle cx="300" cy="18" r="3" fill="currentColor" />

          {/* Stage 03 Node */}
          <circle cx="500" cy="14" r="7" fill="url(#pulseGlow)" />
          <circle cx="500" cy="14" r="3" fill="currentColor" />

          {/* Stage 04 Node */}
          <circle cx="700" cy="18" r="7" fill="url(#pulseGlow)" />
          <circle cx="700" cy="18" r="3" fill="currentColor" />
        </g>
      </svg>
    </div>
  );
}
