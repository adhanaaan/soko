import { ImageResponse } from "next/og";
import { event, hero, partners, seo } from "@/content/site";

// Placeholder share image generated from the content config.
// Replace with an approved photograph-led image before launch if preferred.
// Deliberately contains no pricing.

export const alt = seo.ogImageAlt;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", background: "#F7F3E9", color: "#263B34", fontFamily: "serif" }}>
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "64px 72px", width: 720 }}>
          <div style={{ fontSize: 22, letterSpacing: 4, color: "#506C50", fontFamily: "sans-serif", fontWeight: 700 }}>
            {`${event.dates.eyebrow} · ${event.venue.short.toUpperCase()}`}
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 40, color: "#506C50" }}>{event.name}</div>
            <div style={{ fontSize: 68, lineHeight: 1.05, marginTop: 12 }}>{hero.headline}</div>
          </div>
          <div style={{ fontSize: 20, color: "#4d5c55", fontFamily: "sans-serif" }}>
            {`Organised by ${partners.organiser.name} · ${partners.hospitality.name} · ${partners.brainHealth.name}`}
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", width: 480, height: "100%" }}>
          <div style={{ display: "flex", flex: 1, background: "#E5D5BC", alignItems: "flex-end", justifyContent: "center", overflow: "hidden" }}>
            <div style={{ width: 240, height: 240, borderRadius: 999, background: "#BF765A", marginBottom: -120 }} />
          </div>
          <div style={{ display: "flex", flex: 1, background: "#263B34", borderTop: "2px solid #F7F3E9" }} />
        </div>
      </div>
    ),
    size,
  );
}
