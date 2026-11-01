export default function SandboxCrucible({ className = "" }: { className?: string }) {
  return (
    <div className={`relative w-full overflow-visible pointer-events-none select-none ${className}`} aria-hidden="true">
      <svg
        viewBox="0 0 600 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-16 text-emerald-600 dark:text-emerald-400 overflow-visible"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="crucibleGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="currentColor" stopOpacity="0.1" />
            <stop offset="30%" stopColor="currentColor" stopOpacity="0.7" />
            <stop offset="70%" stopColor="currentColor" stopOpacity="0.7" />
            <stop offset="100%" stopColor="currentColor" stopOpacity="0.1" />
          </linearGradient>
        </defs>

        {/* Outer Host UI Thread Harmonic Boundary */}
        <path
          d="M 10 40 C 90 10, 210 70, 300 40 C 390 10, 510 70, 590 40"
          stroke="url(#crucibleGrad)"
          strokeWidth="1.5"
          fill="none"
        />

        {/* Inner Isolated Worker Execution Orbit */}
        <ellipse
          cx="300"
          cy="40"
          rx="140"
          ry="24"
          stroke="currentColor"
          strokeWidth="1"
          strokeDasharray="4 4"
          strokeOpacity="0.4"
          fill="none"
        />

        {/* Decoupled Isolation Anchor Nodes */}
        <circle cx="160" cy="40" r="3.5" fill="currentColor" />
        <circle cx="300" cy="40" r="4.5" fill="currentColor" />
        <circle cx="440" cy="40" r="3.5" fill="currentColor" />
      </svg>
    </div>
  );
}
