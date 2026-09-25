import Image from "next/image";
import Link from "next/link";
import { DomainDiagram, Mark, MomentArt } from "@/components/Art";
import { Header } from "@/components/Header";
import { SignupForm } from "@/components/SignupForm";
import {
  areas,
  contact,
  cta,
  event,
  faq,
  footer,
  guides,
  measures,
  hero,
  moments,
  offer,
  partners,
  pricing,
  problem,
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
        <Science />
        <Guides />
        <Problem />
        <Offer />
        <Measures />
        <Weekend />
        <Moments />
        <Faq />
        <Signup />
      </main>
      <Footer />
    </>
  );
}

/** Renders *emphasis* in content strings as a soft serif accent. */
function rich(text: string) {
  // *emphasis* -> serif accent; [placeholder] -> highlighted until replaced
  return text.split(/(\*.+?\*|\[.+?\])/g).map((part, i) => {
    if (part.startsWith("*") && part.endsWith("*")) return <em key={i}>{part.slice(1, -1)}</em>;
    if (part.startsWith("[") && part.endsWith("]"))
      return (
        <span key={i} className="ph" title="Placeholder: replace before launch">
          {part}
        </span>
      );
    return part;
  });
}

function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <h1 id="hero-title">{rich(hero.headline)}</h1>
          <p className="hero-lede">{hero.lede}</p>
          <div className="hero-actions">
            <a className="btn btn-accent" href="#priority-list">
              {cta.primary} <span className="arrow" aria-hidden>→</span>
            </a>
          </div>
          <p className="hero-note">{cta.note}</p>
          <a className="hero-badge" href="#science">
            <span className="hero-badge-dot" aria-hidden />
            {hero.badge} <span aria-hidden>↓</span>
          </a>
        </div>
        <div className="hero-visual">
          <DomainDiagram pillars={areas} />
        </div>
      </div>
    </section>
  );
}

function Problem() {
  return (
    <section className="section" id="audience" aria-labelledby="problem-title">
      <div className="wrap split">
        <div>
          <h2 id="problem-title">{rich(problem.heading)}</h2>
          <p className="for-who">{problem.forWho}</p>
        </div>
        <ul className="ticks">
          {problem.points.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Offer() {
  return (
    <section className="section" id="offer" aria-labelledby="offer-title">
      <div className="wrap">
        <h2 className="title" id="offer-title">
          {offer.heading}
        </h2>
        <ol className="stack">
          {offer.stack.map((o) => (
            <li key={o.name} className={"bonus" in o && o.bonus ? "is-bonus" : undefined}>
              <div>
                <h3>{o.name}</h3>
                <p>{o.text}</p>
              </div>
              <span className="stack-inc mono">{"bonus" in o && o.bonus ? "Bonus" : "Included"}</span>
            </li>
          ))}
        </ol>
        <ul className="promises">
          {offer.promises.map((p) => (
            <li key={p}>{p}</li>
          ))}
        </ul>
        <div className="guarantee">
          <span className="guarantee-seal" aria-hidden>
            ✓
          </span>
          <div>
            <h3>{offer.guarantee.title}</h3>
            <p>{rich(offer.guarantee.text)}</p>
          </div>
        </div>
        <div className="offer-cta">
          <a className="btn btn-accent" href="#priority-list">
            {cta.primary} <span className="arrow" aria-hidden>→</span>
          </a>
          <p>{rich(offer.scarcity)}</p>
        </div>
        <p className="fine">{offer.note}</p>
      </div>
    </section>
  );
}

function Weekend() {
  return (
    <section className="section" id="weekend" aria-labelledby="weekend-title">
      <div className="wrap">
        <h2 className="title title-tight" id="weekend-title">
          {weekend.heading}
        </h2>
        <p className="timing">{rich(weekend.timing)}</p>
        <ol className="days3">
          {weekend.days.map((d) => (
            <li key={d.day}>
              <span className="mono">{d.day}</span>
              <h3>{d.theme}</h3>
              <p>{d.line}</p>
            </li>
          ))}
        </ol>
        <details className="schedule">
          <summary>
            {weekend.more} <span aria-hidden>↓</span>
          </summary>
          <div className="schedule-grid">
            {weekend.days.map((d) => (
              <div key={d.day}>
                <p className="mono">
                  {d.day} · {d.theme}
                </p>
                <ul>
                  {d.sessions.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="fine">{weekend.note}</p>
        </details>
      </div>
    </section>
  );
}

function Moments() {
  return (
    <section className="section moments" id="moments" aria-labelledby="moments-title">
      <div className="wrap">
        <h2 className="title" id="moments-title">
          {rich(moments.heading)}
        </h2>
        <ul className="moment-grid">
          {moments.items.map((m) => (
            <li className="moment" key={m.key}>
              <MomentArt tone={m.tone} src={m.src} alt={m.alt} />
              <div className="moment-label">
                <p>{m.title}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Science() {
  return (
    <section className="section finger-section" id="science" aria-labelledby="science-title">
      <div className="wrap">
        <h2 className="title" id="science-title">
          {rich(science.heading)}
        </h2>
        <ol className="finger">
          {areas.map((a) => (
            <li key={a.key}>
              <p className="finger-area mono">
                <span>{a.code}</span> FINGER · {a.finger}
              </p>
              <h3>{a.title}</h3>
              <p>{a.what}</p>
            </li>
          ))}
        </ol>
        <div className="finger-foot">
          <p>
            {science.study}{" "}
            <a href={science.href} target="_blank" rel="noopener noreferrer">
              {science.linkLabel}
              <span className="visually-hidden"> (opens in a new tab)</span> <span aria-hidden>↗</span>
            </a>
          </p>
          <p className="fine">{science.note}</p>
          <p className="partners-row">
            <span>
              Science by <strong>{partners.brainHealth.name}</strong>
            </span>
            <span>
              Hosted at <strong>{partners.hospitality.fullName}</strong>
            </span>
            <span>
              Organised by <strong>{partners.organiser.name}</strong>
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}

function Guides() {
  return (
    <section className="section" id="guides" aria-labelledby="guides-title">
      <div className="wrap">
        <h2 className="title" id="guides-title">
          {guides.heading}
        </h2>
        <ul className="guides">
          {guides.people.map((g, i) => (
            <li key={i}>
              <div className="guide-photo">
                {g.photo ? (
                  <Image src={g.photo} alt={`Portrait of ${g.name}`} fill sizes="(max-width: 560px) 72vw, 33vw" />
                ) : (
                  <span aria-hidden>{g.initials}</span>
                )}
              </div>
              <h3>{rich(g.name)}</h3>
              <p className="guide-role">{rich(g.role)}</p>
              <p className="guide-bio">{rich(g.bio)}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Measures() {
  return (
    <section className="section" id="measures" aria-labelledby="measures-title">
      <div className="wrap split">
        <h2 id="measures-title">{measures.heading}</h2>
        <ul className="measures">
          {measures.items.map((m) => (
            <li key={m.name}>
              <div>
                <h3>{m.name}</h3>
                <p>{rich(m.what)}</p>
              </div>
              <span className="tag">{m.tag}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Faq() {
  return (
    <section className="section" id="faq" aria-labelledby="faq-title">
      <div className="wrap split">
        <h2 id="faq-title">Questions.</h2>
        <div className="faq-list">
          {faq.map((item) => (
            <details className="faq-item" key={item.q}>
              <summary>
                {item.q}
                <span className="faq-icon" aria-hidden />
              </summary>
              <p className="faq-answer">{rich(item.a)}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  if (!pricing.showPricing) return null;
  const fmt = (n: number) => `${pricing.currency}${n.toLocaleString("en-SG")}`;
  return (
    <div className="pricing">
      <div className="price">
        <span className="mono">
          {pricing.founding.label} · first {pricing.founding.places}
        </span>
        <strong>{fmt(pricing.founding.price)}</strong>
      </div>
      <div className="price">
        <span className="mono">{pricing.standard.label}</span>
        <strong>{fmt(pricing.standard.price)}</strong>
      </div>
    </div>
  );
}

function Signup() {
  return (
    <section className="signup dark" id="priority-list" aria-labelledby="signup-title">
      <div className="wrap signup-grid">
        <div className="signup-copy">
          <h2 id="signup-title">{signup.heading}</h2>
          <p>{signup.text}</p>
          <Pricing />
          <p className="small">{signup.disclaimer}</p>
          <p className="corporate">
            <a href={`mailto:${contact.email}?subject=Clarity%20group%20booking`}>{rich(signup.corporate)}</a>
          </p>
        </div>
        <SignupForm />
      </div>
    </section>
  );
}

function Footer() {
  const year = new Date(event.dates.startISO).getFullYear();
  return (
    <footer className="site-footer">
      <div className="wrap footer-min">
        <a className="wordmark" href="#top">
          <Mark className="wordmark-mark" />
          {event.name}
        </a>
        <p>
          <a href={`mailto:${contact.email}`}>{contact.email}</a> · <Link href="/privacy">Privacy</Link>
        </p>
        <p className="fine">
          {footer.boundary} © {year} {partners.organiser.name}
        </p>
      </div>
    </footer>
  );
}
