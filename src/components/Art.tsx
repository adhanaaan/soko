import Image from "next/image";
import type { ImageSlot, Pillar } from "@/content/site";

const showNotes = process.env.NODE_ENV === "development";

const C = { forest: "#263B34", moss: "#506C50", leaf: "#9CAF79", clay: "#BF765A", ink3: "#5D6964", line: "rgba(20,32,27,0.14)" };

/** Soko's connected-circles mark, drawn as a compact logo glyph. */
export function Mark({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden>
      <circle cx="9" cy="9" r="6" fill={C.moss} />
      <circle cx="15" cy="10" r="6" fill={C.clay} fillOpacity="0.9" />
      <circle cx="12" cy="15" r="6" fill={C.leaf} fillOpacity="0.95" />
      <circle cx="12" cy="12" r="2" fill="#FBFBF8" />
    </svg>
  );
}

/**
 * Hero figure: the four programme domains arranged around a personal
 * baseline. A schematic of the weekend's structure, not data.
 */
export function DomainDiagram({ pillars }: { pillars: Pillar[] }) {
  const colours = [C.moss, C.clay, C.forest, C.leaf];
  const pos = [
    { x: 126, y: 126, ly: -30 },
    { x: 374, y: 126, ly: -30 },
    { x: 374, y: 374, ly: 44 },
    { x: 126, y: 374, ly: 44 },
  ];
  const ticks = Array.from({ length: 72 }, (_, i) => i * 5);
  return (
    <svg className="diagram" viewBox="0 0 500 500" role="img" aria-labelledby="diagram-title diagram-desc">
      <title id="diagram-title">The four domains of the Clarity weekend</title>
      <desc id="diagram-desc">
        {pillars.map((p) => p.title).join(", ")}, arranged around your private baseline.
      </desc>

      {/* scale ring */}
      <g stroke={C.ink3} strokeOpacity="0.45">
        {ticks.map((deg) => {
          const long = deg % 45 === 0;
          const r1 = long ? 222 : 228;
          const a = (deg * Math.PI) / 180;
          return (
            <line
              key={deg}
              x1={250 + r1 * Math.cos(a)}
              y1={250 + r1 * Math.sin(a)}
              x2={250 + 234 * Math.cos(a)}
              y2={250 + 234 * Math.sin(a)}
              strokeWidth={long ? 1.2 : 0.8}
            />
          );
        })}
      </g>

      <circle cx="250" cy="250" r="175" fill="none" stroke={C.line} />
      <circle cx="250" cy="250" r="100" fill="none" stroke={C.line} strokeDasharray="2 5" />
      <line x1="250" y1="40" x2="250" y2="460" stroke={C.line} />
      <line x1="40" y1="250" x2="460" y2="250" stroke={C.line} />

      {/* orbiting marker */}
      <g className="orbit">
        <circle cx="425" cy="250" r="3.5" fill={C.clay} />
      </g>

      {/* spokes */}
      {pos.map((p, i) => (
        <line key={i} x1="250" y1="250" x2={p.x} y2={p.y} stroke={colours[i]} strokeOpacity="0.55" strokeWidth="1.2" />
      ))}

      {/* centre: you */}
      <circle className="pulse" cx="250" cy="250" r="58" fill="none" stroke={C.moss} strokeWidth="1.5" />
      <circle cx="250" cy="250" r="52" fill={C.forest} />
      <text x="250" y="246" textAnchor="middle" style={{ fill: "#F4F6F1", fontSize: 12 }}>
        YOU
      </text>
      <text x="250" y="263" textAnchor="middle" style={{ fill: "#9CAF79", fontSize: 9.5 }}>
        BASELINE
      </text>

      {/* nodes */}
      {pillars.slice(0, 4).map((p, i) => (
        <g key={p.key}>
          <circle cx={pos[i].x} cy={pos[i].y} r="16" fill="#FBFBF8" stroke={colours[i]} strokeWidth="1.5" />
          <circle cx={pos[i].x} cy={pos[i].y} r="7" fill={colours[i]} />
          <text x={pos[i].x} y={pos[i].y + pos[i].ly - 14} textAnchor="middle">
            {p.code}
          </text>
          <text className="node-title" x={pos[i].x} y={pos[i].y + pos[i].ly + 4} textAnchor="middle">
            {p.title}
          </text>
        </g>
      ))}

      <text x="250" y="498" textAnchor="middle" style={{ fontSize: 10, fill: C.ink3 }}>
        FIG. 01 · FOUR DOMAINS, ONE WEEKEND
      </text>
    </svg>
  );
}

/** Line glyphs for each domain. */
export function DomainGlyph({ domain, className }: { domain: string; className?: string }) {
  const common = { fill: "none", stroke: C.forest, strokeWidth: 1.4, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  return (
    <svg className={className} viewBox="0 0 36 36" aria-hidden>
      <rect x="0.5" y="0.5" width="35" height="35" rx="8" fill="#EEF2E8" stroke="rgba(20,32,27,0.12)" />
      {domain === "move" && <path d="M7 22c3-6 6-6 9 0s6 6 9 0 3-3 4-4" {...common} stroke={C.moss} />}
      {domain === "eat" && (
        <>
          <circle cx="18" cy="18" r="9" {...common} stroke={C.clay} />
          <path d="M14 20c1-4 4-6 8-6-1 4-4 6-8 6z" {...common} stroke={C.moss} />
        </>
      )}
      {domain === "think" && (
        <>
          <path d="M11 12l7 5 7-5M18 17v8M11 12v10M25 12v10" {...common} />
          {[
            [11, 12],
            [25, 12],
            [18, 17],
            [18, 25],
            [11, 22],
            [25, 22],
          ].map(([x, y]) => (
            <circle key={`${x}-${y}`} cx={x} cy={y} r="2" fill={C.forest} />
          ))}
        </>
      )}
      {domain === "risks" && <path d="M6 19h6l2-5 4 10 3-7 2 2h7" {...common} stroke={C.forest} />}
    </svg>
  );
}

/** Line-art stand-in for venue photography. */
function VenueArt() {
  return (
    <svg viewBox="0 0 600 340" preserveAspectRatio="xMidYMid slice" aria-hidden style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}>
      <defs>
        <pattern id="venue-grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M40 0H0V40" fill="none" stroke="rgba(20,32,27,0.07)" />
        </pattern>
      </defs>
      <rect width="600" height="340" fill="#EEF2E8" />
      <rect width="600" height="340" fill="url(#venue-grid)" />
      <circle cx="300" cy="210" r="70" fill="none" stroke={C.clay} strokeWidth="1.5" />
      <circle cx="300" cy="210" r="110" fill="none" stroke={C.clay} strokeOpacity="0.35" strokeDasharray="2 6" />
      <rect x="0" y="210" width="600" height="130" fill="#FBFBF8" fillOpacity="0.6" />
      <line x1="0" y1="210" x2="600" y2="210" stroke={C.forest} strokeWidth="1.2" />
      {[228, 246, 266, 290].map((y, i) => (
        <line key={y} x1={300 - 60 + i * 14} y1={y} x2={300 + 60 - i * 14} y2={y} stroke={C.clay} strokeOpacity={0.7 - i * 0.14} strokeWidth="1.5" />
      ))}
    </svg>
  );
}

export function Photo({ slot, sizes, className }: { slot: ImageSlot; sizes: string; className?: string }) {
  return (
    <figure className={`photo ${className ?? ""}`}>
      {slot.src ? (
        <Image src={slot.src} alt={slot.alt} fill sizes={sizes} />
      ) : (
        <>
          <VenueArt />
          {showNotes && <figcaption className="photo-note mono">Photo needed: {slot.needed}</figcaption>}
        </>
      )}
    </figure>
  );
}
