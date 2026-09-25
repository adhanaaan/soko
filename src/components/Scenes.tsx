/**
 * Illustrated, photo-like scenes used until licensed photography arrives.
 * Each accepts nothing but a variant; swap in real images via the content file.
 */

function Grain({ id, opacity = 0.09 }: { id: string; opacity?: number }) {
  return (
    <>
      <filter id={id} x="0" y="0" width="100%" height="100%">
        <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2" stitchTiles="stitch" />
        <feColorMatrix type="matrix" values={`0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 ${opacity} 0`} />
      </filter>
    </>
  );
}

/** Dawn over the sea off Nongsa: the hero image. */
export function HeroScene() {
  // Deterministic reflection strokes on the water.
  const strokes = Array.from({ length: 26 }, (_, i) => {
    const y = 612 + i * 11 + (i % 3) * 2;
    const spread = 190 - i * 5.5 + ((i * 37) % 23);
    const x = 900 + (((i * 53) % 31) - 15);
    return { y, x1: x - spread, x2: x + spread, o: Math.max(0.08, 0.75 - i * 0.026) };
  });
  return (
    <svg className="scene" viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice" aria-hidden>
      <defs>
        <linearGradient id="hs-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#1B2B25" />
          <stop offset="0.38" stopColor="#3E5A4B" />
          <stop offset="0.58" stopColor="#9C8A6E" />
          <stop offset="0.67" stopColor="#E0AE86" />
        </linearGradient>
        <radialGradient id="hs-glow" cx="900" cy="600" r="620" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#F7D2B0" stopOpacity="0.95" />
          <stop offset="0.25" stopColor="#E9B08B" stopOpacity="0.55" />
          <stop offset="0.6" stopColor="#BF765A" stopOpacity="0.15" />
          <stop offset="1" stopColor="#BF765A" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="hs-sea" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#4B5E50" />
          <stop offset="0.4" stopColor="#2A3F36" />
          <stop offset="1" stopColor="#142019" />
        </linearGradient>
        <filter id="hs-blur" x="-20%" y="-50%" width="140%" height="200%">
          <feGaussianBlur stdDeviation="22" />
        </filter>
        <Grain id="hs-grain" />
      </defs>
      <rect width="1600" height="610" fill="url(#hs-sky)" />
      <rect width="1600" height="900" fill="url(#hs-glow)" />
      {/* soft cloud bands */}
      <g filter="url(#hs-blur)" opacity="0.5">
        <ellipse cx="420" cy="300" rx="420" ry="26" fill="#C9A27E" />
        <ellipse cx="1250" cy="380" rx="360" ry="20" fill="#F2C8A5" />
        <ellipse cx="760" cy="470" rx="520" ry="18" fill="#E2B08C" />
      </g>
      {/* sun */}
      <circle cx="900" cy="604" r="92" fill="#F9DCC0" />
      <circle cx="900" cy="604" r="92" fill="#F4C9A4" opacity="0.6" />
      {/* far coastline */}
      <path d="M1380 606 C 1440 598, 1500 596, 1600 600 L 1600 612 L 1380 612 Z" fill="#1F332C" opacity="0.7" />
      {/* sea */}
      <rect y="608" width="1600" height="292" fill="url(#hs-sea)" />
      <rect y="606" width="1600" height="3" fill="#F4C9A4" opacity="0.55" />
      <g strokeLinecap="round">
        {strokes.map((s) => (
          <line key={s.y} x1={s.x1} y1={s.y} x2={s.x2} y2={s.y} stroke="#F4C9A4" strokeOpacity={s.o} strokeWidth="3" />
        ))}
      </g>
      <g stroke="#F7F3E9" strokeOpacity="0.07" strokeWidth="2" strokeLinecap="round">
        <line x1="80" y1="680" x2="420" y2="680" />
        <line x1="200" y1="740" x2="620" y2="740" />
        <line x1="40" y1="820" x2="380" y2="820" />
        <line x1="1400" y1="700" x2="1580" y2="700" />
      </g>
      <rect width="1600" height="900" filter="url(#hs-grain)" />
    </svg>
  );
}

const tileBg: Record<string, [string, string]> = {
  move: ["#6E8A62", "#263B34"],
  eat: ["#E3A488", "#9E5A40"],
  think: ["#2F4A40", "#14201B"],
  risks: ["#EBD7C0", "#C98E70"],
};

const blobs: Record<string, [string, number, number, number][]> = {
  move: [["#9CAF79", 120, 140, 170], ["#E9C9AE", 300, 110, 110], ["#3E5A4B", 260, 380, 200], ["#F4C9A4", 90, 420, 90]],
  eat: [["#F4C9A4", 110, 150, 150], ["#9CAF79", 300, 220, 130], ["#9E5A40", 170, 400, 190], ["#FBF1E8", 320, 420, 80]],
  think: [["#506C50", 130, 160, 180], ["#9CAF79", 290, 280, 120], ["#E5D5BC", 180, 420, 90], ["#1B2B25", 330, 90, 150]],
  risks: [["#BF765A", 150, 170, 150], ["#F7E1CC", 300, 300, 170], ["#E9C9AE", 90, 410, 120], ["#9E5A40", 320, 90, 70]],
};

/** Soft, out-of-focus light for the four FINGER tiles, until photos arrive. */
export function AreaScene({ area }: { area: string }) {
  const [a, b] = tileBg[area] ?? tileBg.move;
  const id = `as-${area}`;
  return (
    <svg className="scene" viewBox="0 0 400 500" preserveAspectRatio="xMidYMid slice" aria-hidden>
      <defs>
        <linearGradient id={`${id}-bg`} x1="0" y1="0" x2="0.4" y2="1">
          <stop offset="0" stopColor={a} />
          <stop offset="1" stopColor={b} />
        </linearGradient>
        <filter id={`${id}-soft`} x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="46" />
        </filter>
        <Grain id={`${id}-grain`} opacity={0.14} />
      </defs>
      <rect width="400" height="500" fill={`url(#${id}-bg)`} />
      <g filter={`url(#${id}-soft)`}>
        {(blobs[area] ?? blobs.move).map(([c, x, y, r], i) => (
          <circle key={i} cx={x} cy={y} r={r} fill={c} opacity="0.85" />
        ))}
      </g>
      <rect width="400" height="500" filter={`url(#${id}-grain)`} />
    </svg>
  );
}
