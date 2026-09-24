import Link from "next/link";
import { Circles, Photo } from "@/components/Art";
import { Header } from "@/components/Header";
import { SignupForm } from "@/components/SignupForm";
import {
  after,
  contact,
  cta,
  event,
  faq,
  footer,
  hero,
  idea,
  images,
  insight,
  partners,
  people,
  pricing,
  science,
  signup,
  weekend,
} from "@/content/site";

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <Idea />
        <Science />
        <Weekend />
        <Insight />
        <People />
        <After />
        <Faq />
        <Signup />
      </main>
      <Footer />
    </>
  );
}

function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="wrap">
        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">
              {event.dates.eyebrow} · {event.venue.short.toUpperCase()}
            </p>
            <h1 id="hero-title">{hero.headline}</h1>
            <p className="hero-lede">{hero.lede}</p>
            <div className="hero-actions">
              <a className="btn" href="#priority-list">
                {cta.primary} <span className="arrow" aria-hidden>→</span>
              </a>
              <a className="btn btn-ghost" href="#programme">
                {cta.secondary}
              </a>
            </div>
            <p className="hero-note">{cta.note}</p>
          </div>
          <Photo slot={images.hero} variant="hero" className="hero-art" sizes="(max-width: 900px) 100vw, 45vw" priority />
        </div>
        <p className="partner-line">
          <span>
            {partners.organiser.role} <strong>{partners.organiser.name}</strong>
          </span>
          <span>
            {partners.hospitality.role} <strong>{partners.hospitality.name}</strong>
          </span>
          <span>
            {partners.brainHealth.role} <strong>{partners.brainHealth.name}</strong>
          </span>
        </p>
      </div>
    </section>
  );
}

function Idea() {
  const [a, b, c] = idea.line.split(". ").map((s) => s.replace(/\.$/, "") + ".");
  return (
    <section className="section idea" id="idea" aria-labelledby="idea-title">
      <div className="wrap idea-grid">
        <div className="reveal">
          <p className="kicker">{idea.kicker}</p>
          <h2 className="idea-line" id="idea-title">
            <span>{a}</span>
            <span>{b}</span>
            <span>{c}</span>
          </h2>
        </div>
        <div className="idea-body reveal">
          {idea.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
      </div>
    </section>
  );
}

const pillarColours: Record<string, string> = {
  move: "var(--moss)",
  eat: "var(--clay)",
  think: "var(--forest)",
  risks: "var(--leaf)",
};

function Science() {
  return (
    <section className="section" id="programme" aria-labelledby="science-title">
      <div className="wrap">
        <div className="section-head reveal">
          <p className="kicker">{science.kicker}</p>
          <h2 id="science-title">{science.heading}</h2>
          <p>{science.intro}</p>
        </div>
        <ul className="pillars">
          {science.pillars.map((p, i) => (
            <li className="pillar reveal" key={p.key}>
              <div className="pillar-top">
                <span className="pillar-num">0{i + 1}</span>
                <svg width="30" height="30" viewBox="0 0 30 30" aria-hidden>
                  <circle cx="15" cy="15" r="14" fill={pillarColours[p.key]} />
                </svg>
              </div>
              <h3>{p.title}</h3>
              <p className="pillar-summary">{p.summary}</p>
              <ul>
                {p.details.map((d) => (
                  <li key={d}>{d}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
        <div className="thread reveal">
          <svg width="64" height="28" viewBox="0 0 64 28" aria-hidden>
            <circle cx="14" cy="14" r="13" fill="none" stroke="#263B34" strokeWidth="1.5" />
            <circle cx="32" cy="14" r="13" fill="none" stroke="#263B34" strokeWidth="1.5" />
            <circle cx="50" cy="14" r="13" fill="none" stroke="#263B34" strokeWidth="1.5" />
          </svg>
          <div>
            <h3>{science.thread.title}</h3>
            <p>{science.thread.text}</p>
          </div>
        </div>
        <aside className="evidence" aria-label="About the evidence">
          <span className="evidence-mark" aria-hidden>
            ※
          </span>
          <p>
            {science.evidence.text}
            <br />
            <a href={science.evidence.href} target="_blank" rel="noopener noreferrer">
              {science.evidence.linkLabel}
              <span className="visually-hidden"> (opens in a new tab)</span> ↗
            </a>
          </p>
        </aside>
      </div>
    </section>
  );
}

function Weekend() {
  return (
    <section className="section weekend" id="weekend" aria-labelledby="weekend-title">
      <div className="wrap">
        <div className="section-head reveal">
          <p className="kicker">{weekend.kicker}</p>
          <h2 id="weekend-title">{weekend.heading}</h2>
          <p className="status-pill">{weekend.status}</p>
        </div>
        <div className="timeline-wrap">
          <span className="timeline-path" aria-hidden />
          <ol className="timeline">
          {weekend.days.map((d) => (
            <li className="day reveal" key={d.day}>
              <span className="day-marker" aria-hidden />
              <p className="day-when">
                <span>{d.day}</span>
                <span aria-hidden>·</span>
                <span>{d.date}</span>
              </p>
              <h3>{d.theme}</h3>
              <p className="day-summary">{d.summary}</p>
              <ul>
                {d.moments.map((m) => (
                  <li key={m}>{m}</li>
                ))}
              </ul>
            </li>
          ))}
          </ol>
        </div>
        <p className="leisure reveal">
          <Circles className="leisure-mark" />
          {weekend.leisureNote}
        </p>
      </div>
    </section>
  );
}

function Insight() {
  return (
    <section className="section dark" id="insight" aria-labelledby="insight-title">
      <div className="wrap">
        <div className="section-head reveal">
          <p className="kicker">{insight.kicker}</p>
          <h2 id="insight-title">{insight.heading}</h2>
        </div>
        <ul className="insight-grid">
          {insight.items.map((item) => (
            <li className="insight-item" key={item.title}>
              <span className="insight-dot" aria-hidden />
              <div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </li>
          ))}
        </ul>
        <p className="boundary">{insight.boundary}</p>
      </div>
    </section>
  );
}

function People() {
  return (
    <section className="section" id="people" aria-labelledby="people-title">
      <div className="wrap">
        <div className="section-head reveal">
          <p className="kicker">{people.kicker}</p>
          <h2 id="people-title">{people.heading}</h2>
          <p>
            {event.venue.name}, {event.venue.location}. {event.venue.travel}.
          </p>
        </div>
        <div className="people-grid">
          <div className="people-media reveal">
            <Photo slot={images.place} variant="place" sizes="(max-width: 900px) 60vw, 28vw" />
            <Photo slot={images.food} variant="food" sizes="(max-width: 900px) 40vw, 18vw" />
            <Photo slot={images.move} variant="move" sizes="(max-width: 900px) 40vw, 18vw" />
          </div>
          <ul className="roles">
            {people.roles.map((r) => (
              <li className="role reveal" key={r.name}>
                <p className="role-label">{r.role}</p>
                <h3>{r.name}</h3>
                <p>{r.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function After() {
  return (
    <section className="section after" id="after" aria-labelledby="after-title">
      <div className="wrap after-grid">
        <div className="section-head reveal">
          <p className="kicker">{after.kicker}</p>
          <h2 id="after-title">{after.heading}</h2>
          <p>{after.intro}</p>
        </div>
        <div className="reveal">
          <div className="days-track" aria-hidden>
            {Array.from({ length: event.followThroughDays }, (_, i) => (
              <span key={i} style={{ ["--i" as string]: i }} />
            ))}
          </div>
          <p className="days-caption">
            <span>Day 1 · home</span>
            <span>Day {event.followThroughDays}</span>
          </p>
          <ol className="steps">
            {after.steps.map((s) => (
              <li key={s.label}>
                <div>
                  <h3>{s.label}</h3>
                  <p>{s.text}</p>
                </div>
              </li>
            ))}
          </ol>
          <p className="channel-note">{after.channelNote}</p>
        </div>
      </div>
    </section>
  );
}

function Faq() {
  return (
    <section className="section" id="faq" aria-labelledby="faq-title">
      <div className="wrap faq-grid">
        <div className="section-head">
          <p className="kicker">Questions</p>
          <h2 id="faq-title">Good to know.</h2>
          <p>
            Anything else? Email <a href={`mailto:${contact.email}`}>{contact.email}</a>.
          </p>
        </div>
        <div className="faq-list">
          {faq.map((item) => (
            <details className="faq-item" key={item.q}>
              <summary>
                {item.q}
                <span className="faq-icon" aria-hidden />
              </summary>
              <p className="faq-answer">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  if (!pricing.showPricing) {
    return <p className="small">{pricing.hiddenMessage}</p>;
  }
  const fmt = (n: number) => `${pricing.currency}${n.toLocaleString("en-SG")}`;
  return (
    <div>
      <div className="pricing">
        <div className="price">
          <span>
            {pricing.founding.label} · first {pricing.founding.places} places
          </span>
          <strong>{fmt(pricing.founding.price)}</strong>
        </div>
        <div className="price">
          <span>{pricing.standard.label}</span>
          <strong>{fmt(pricing.standard.price)}</strong>
        </div>
      </div>
      <p className="small" style={{ marginTop: "0.6rem" }}>
        {pricing.basis}
      </p>
    </div>
  );
}

function Signup() {
  return (
    <section className="signup" id="priority-list" aria-labelledby="signup-title">
      <div className="wrap">
        <div className="signup-card">
          <Circles className="signup-art" />
          <div className="signup-copy">
            <p className="kicker">{signup.kicker}</p>
            <h2 id="signup-title">{signup.heading}</h2>
            <p>{signup.text}</p>
            <Pricing />
            <p className="small">
              {event.dates.display} · {event.venue.name} · {event.groupSize.min}–{event.groupSize.max} guests
            </p>
            <p className="small">{signup.disclaimer}</p>
          </div>
          <SignupForm />
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const year = new Date(event.dates.startISO).getFullYear();
  return (
    <footer className="site-footer dark">
      <div className="wrap">
        <div className="footer-top">
          <div className="footer-brand">
            <a className="wordmark" href="#top">
              {event.name}
            </a>
            <p>
              {event.tagline}. {event.dates.display}, {event.venue.name}.
            </p>
          </div>
          <div className="footer-col">
            <h2>Partners</h2>
            <ul>
              {[partners.organiser, partners.hospitality, partners.brainHealth].map((p) => (
                <li key={p.name}>
                  <span>{p.role}</span>
                  {"fullName" in p ? p.fullName : p.name}
                </li>
              ))}
            </ul>
          </div>
          <div className="footer-col">
            <h2>Contact</h2>
            <ul>
              <li>
                <a href={`mailto:${contact.email}`}>{contact.email}</a>
              </li>
              <li>
                <a href="#priority-list">{cta.primary}</a>
              </li>
              <li>
                <Link href="/privacy">Privacy notice</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>{footer.boundary}</p>
          <p>
            © {year} {partners.organiser.name}
          </p>
        </div>
      </div>
    </footer>
  );
}
