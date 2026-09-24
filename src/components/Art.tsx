import Image from "next/image";
import type { ImageSlot } from "@/content/site";

const showNotes = process.env.NODE_ENV === "development";

/** Sunrise over the sea: the hero composition used until real photography arrives. */
export function HorizonArt({ title }: { title?: string }) {
  return (
    <svg className="art" viewBox="0 0 400 500" preserveAspectRatio="xMidYMid slice" role={title ? "img" : undefined} aria-hidden={title ? undefined : true} aria-label={title}>
      <defs>
        <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#E5D5BC" />
          <stop offset="0.75" stopColor="#EFDCC3" />
          <stop offset="1" stopColor="#E9C9AE" />
        </linearGradient>
        <linearGradient id="sea" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#506C50" />
          <stop offset="1" stopColor="#263B34" />
        </linearGradient>
        <clipPath id="above">
          <rect x="0" y="0" width="400" height="300" />
        </clipPath>
      </defs>
      <rect width="400" height="300" fill="url(#sky)" />
      <g clipPath="url(#above)">
        <circle cx="200" cy="290" r="150" fill="none" stroke="#BF765A" strokeOpacity="0.22" strokeWidth="1.5" />
        <circle cx="200" cy="290" r="112" fill="none" stroke="#BF765A" strokeOpacity="0.3" strokeWidth="1.5" />
        <g className="sun">
          <circle cx="200" cy="290" r="74" fill="#BF765A" />
          <circle cx="248" cy="262" r="36" fill="#9CAF79" opacity="0.9" />
          <circle cx="232" cy="248" r="10" fill="#F7F3E9" />
        </g>
      </g>
      <rect y="300" width="400" height="200" fill="url(#sea)" />
      <line x1="0" y1="300" x2="400" y2="300" stroke="#F7F3E9" strokeOpacity="0.55" strokeWidth="1.5" />
      <g stroke="#BF765A" strokeLinecap="round" strokeWidth="3">
        <line x1="150" y1="318" x2="250" y2="318" strokeOpacity="0.8" />
        <line x1="165" y1="334" x2="235" y2="334" strokeOpacity="0.65" />
        <line x1="176" y1="352" x2="224" y2="352" strokeOpacity="0.5" />
        <line x1="186" y1="372" x2="214" y2="372" strokeOpacity="0.38" />
        <line x1="194" y1="394" x2="206" y2="394" strokeOpacity="0.28" />
      </g>
      <g stroke="#F7F3E9" strokeOpacity="0.14" strokeWidth="1">
        <line x1="20" y1="336" x2="120" y2="336" />
        <line x1="290" y1="346" x2="380" y2="346" />
        <line x1="40" y1="382" x2="140" y2="382" />
        <line x1="260" y1="410" x2="360" y2="410" />
        <line x1="60" y1="440" x2="170" y2="440" />
      </g>
    </svg>
  );
}

function PlaceArt() {
  return (
    <svg className="art" viewBox="0 0 300 400" preserveAspectRatio="xMidYMid slice" aria-hidden>
      <rect width="300" height="400" fill="#506C50" />
      <circle cx="210" cy="90" r="120" fill="#9CAF79" opacity="0.35" />
      <circle cx="70" cy="140" r="90" fill="#263B34" opacity="0.35" />
      <path d="M0 260 Q150 215 300 260 L300 400 L0 400 Z" fill="#E5D5BC" />
      <path d="M48 262 L48 190 Q48 160 78 160 L132 160 Q162 160 162 190 L162 256" fill="#F7F3E9" />
      <path d="M178 254 L178 200 Q178 178 200 178 L236 178 Q258 178 258 200 L258 252" fill="#F7F3E9" opacity="0.85" />
      <rect x="72" y="190" width="66" height="66" rx="33" fill="#263B34" opacity="0.85" />
      <rect x="196" y="204" width="44" height="48" rx="22" fill="#263B34" opacity="0.7" />
      <rect x="0" y="318" width="300" height="82" fill="#9CAF79" opacity="0.5" />
      <line x1="30" y1="345" x2="270" y2="345" stroke="#F7F3E9" strokeOpacity="0.5" />
      <line x1="60" y1="365" x2="240" y2="365" stroke="#F7F3E9" strokeOpacity="0.35" />
    </svg>
  );
}

function FoodArt() {
  return (
    <svg className="art" viewBox="0 0 300 220" preserveAspectRatio="xMidYMid slice" aria-hidden>
      <rect width="300" height="220" fill="#BF765A" />
      <circle cx="80" cy="110" r="62" fill="#F7F3E9" />
      <circle cx="80" cy="110" r="44" fill="#9CAF79" />
      <circle cx="66" cy="98" r="14" fill="#506C50" />
      <circle cx="96" cy="124" r="10" fill="#E5D5BC" />
      <circle cx="205" cy="70" r="42" fill="#F7F3E9" />
      <circle cx="205" cy="70" r="28" fill="#E5D5BC" />
      <circle cx="232" cy="165" r="50" fill="#F7F3E9" />
      <circle cx="232" cy="165" r="34" fill="#506C50" />
      <circle cx="244" cy="156" r="11" fill="#9CAF79" />
    </svg>
  );
}

function MoveArt() {
  return (
    <svg className="art" viewBox="0 0 300 220" preserveAspectRatio="xMidYMid slice" aria-hidden>
      <rect width="300" height="220" fill="#E5D5BC" />
      <rect y="0" width="300" height="92" fill="#9CAF79" opacity="0.55" />
      <path d="M0 150 C80 120 140 170 300 120 L300 220 L0 220 Z" fill="#F7F3E9" />
      <path d="M-10 190 C70 150 160 200 310 150" fill="none" stroke="#263B34" strokeWidth="2" strokeDasharray="2 9" strokeLinecap="round" />
      <circle cx="120" cy="168" r="9" fill="#263B34" />
      <circle cx="148" cy="172" r="9" fill="#506C50" />
      <circle cx="176" cy="170" r="9" fill="#BF765A" />
      <circle cx="235" cy="52" r="24" fill="#BF765A" opacity="0.9" />
    </svg>
  );
}

const fallbacks = { place: PlaceArt, food: FoodArt, move: MoveArt, hero: HorizonArt } as const;

export function Photo({
  slot,
  variant,
  sizes,
  className,
  priority,
}: {
  slot: ImageSlot;
  variant: keyof typeof fallbacks;
  sizes: string;
  className?: string;
  priority?: boolean;
}) {
  const Fallback = fallbacks[variant];
  return (
    <figure className={`photo ${className ?? ""}`} style={{ margin: 0 }}>
      {slot.src ? (
        <Image src={slot.src} alt={slot.alt} fill sizes={sizes} priority={priority} />
      ) : (
        <>
          <Fallback />
          {showNotes && <figcaption className="photo-note">Photo needed: {slot.needed}</figcaption>}
        </>
      )}
    </figure>
  );
}

/** Soko's connected-circles motif. */
export function Circles({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 200 200" aria-hidden>
      <circle cx="80" cy="80" r="56" fill="#506C50" />
      <circle cx="126" cy="90" r="56" fill="#BF765A" opacity="0.92" />
      <circle cx="102" cy="132" r="54" fill="#9CAF79" opacity="0.95" />
      <circle cx="102" cy="112" r="17" fill="#F7F3E9" />
    </svg>
  );
}
