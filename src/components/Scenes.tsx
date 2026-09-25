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

/** Image-style tiles for the four FINGER areas. */
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
        <radialGradient id={`${id}-glow`} cx="0.7" cy="0.25" r="0.7">
          <stop offset="0" stopColor="#FFFFFF" stopOpacity="0.35" />
          <stop offset="1" stopColor="#FFFFFF" stopOpacity="0" />
        </radialGradient>
        <Grain id={`${id}-grain`} opacity={0.12} />
      </defs>
      <rect width="400" height="500" fill={`url(#${id}-bg)`} />
      <rect width="400" height="500" fill={`url(#${id}-glow)`} />

      {area === "move" && (
        <g fill="none" strokeLinecap="round">
          {Array.from({ length: 9 }, (_, i) => (
            <path
              key={i}
              d={`M -20 ${250 + i * 18} C 90 ${170 + i * 22}, 230 ${360 + i * 8}, 420 ${230 + i * 20}`}
              stroke="#E6EDD9"
              strokeOpacity={0.12 + i * 0.07}
              strokeWidth={1.5 + i * 0.35}
            />
          ))}
          <circle cx="300" cy="120" r="34" fill="#F4C9A4" fillOpacity="0.9" stroke="none" />
        </g>
      )}

      {area === "eat" && (
        <g>
          {[
            [130, 180, 78],
            [290, 150, 56],
            [260, 330, 84],
            [110, 380, 50],
          ].map(([x, y, r], i) => (
            <g key={i}>
              <circle cx={x} cy={y + 6} r={r} fill="#6B3A28" opacity="0.25" />
              <circle cx={x} cy={y} r={r} fill="#FBF1E8" />
              <circle cx={x} cy={y} r={r * 0.7} fill={["#9CAF79", "#E5D5BC", "#506C50", "#BF765A"][i]} />
              <circle cx={x - r * 0.2} cy={y - r * 0.15} r={r * 0.22} fill={["#506C50", "#BF765A", "#9CAF79", "#F4C9A4"][i]} />
              <circle cx={x + r * 0.25} cy={y + r * 0.2} r={r * 0.14} fill="#FBF1E8" opacity="0.8" />
            </g>
          ))}
        </g>
      )}

      {area === "think" && (
        <g>
          {(() => {
            const nodes = [
              [80, 120], [190, 90], [310, 140], [120, 230], [240, 210], [340, 270],
              [70, 350], [180, 320], [290, 380], [150, 440], [330, 450], [230, 470],
            ];
            const links = [
              [0, 1], [1, 2], [0, 3], [1, 4], [2, 4], [2, 5], [3, 4], [4, 5], [3, 6], [3, 7],
              [4, 7], [5, 8], [7, 8], [6, 9], [7, 9], [8, 10], [9, 11], [10, 11], [8, 11],
            ];
            return (
              <>
                {links.map(([p, q], i) => (
                  <line key={i} x1={nodes[p][0]} y1={nodes[p][1]} x2={nodes[q][0]} y2={nodes[q][1]} stroke="#9CAF79" strokeOpacity="0.45" strokeWidth="1.4" />
                ))}
                {nodes.map(([x, y], i) => (
                  <g key={i}>
                    <circle cx={x} cy={y} r={i % 4 === 0 ? 16 : 10} fill="#9CAF79" opacity="0.18" />
                    <circle cx={x} cy={y} r={i % 4 === 0 ? 6 : 4} fill={i % 5 === 0 ? "#F4C9A4" : "#E6EDD9"} />
                  </g>
                ))}
              </>
            );
          })()}
        </g>
      )}

      {area === "risks" && (
        <g fill="none">
          {[150, 115, 80, 45].map((r, i) => (
            <circle key={r} cx="200" cy="230" r={r} stroke="#9E5A40" strokeOpacity={0.18 + i * 0.12} strokeWidth="1.5" />
          ))}
          <circle cx="200" cy="230" r="22" fill="#9E5A40" fillOpacity="0.85" />
          <path d="M 20 380 H 130 L 150 350 L 175 420 L 200 300 L 225 410 L 245 380 H 380" stroke="#263B34" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      )}

      <rect width="400" height="500" filter={`url(#${id}-grain)`} />
    </svg>
  );
}
