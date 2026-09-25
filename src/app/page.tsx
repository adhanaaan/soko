import Link from "next/link";
import { DomainDiagram, DomainGlyph, Mark, MomentArt, Photo } from "@/components/Art";
import { Expand } from "@/components/Expand";
import { Header } from "@/components/Header";
import { SignupForm } from "@/components/SignupForm";
import {
  moments,
  audience,
  included,
  contact,
  cta,
  event,
  faq,
  footer,
  hero,
  images,
  insight,
  partners,
  people,
  pricing,
  research,
  science,
  signup,
  specs,
  weekend,
  type Tag,
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
        <Audience />
        <Included />
        <Weekend />
        <Programme />
        <Moments />
        <Insight />
        <Research />
        <People />
        <Faq />
        <Signup />
      </main>
      <Footer />
    </>
  );
}

/** Renders *emphasis* in content strings as a soft serif accent. */
function rich(text: string) {
  return text.split(/\*(.+?)\*/g).map((part, i) => (i % 2 ? <em key={i}>{part}</em> : part));
}

function TagChip({ tag }: { tag: Tag }) {
  return (
    <span className="tag" data-tag={tag}>
      {tag}
    </span>
  );
}

function Index({ n, label }: { n: string; label: string }) {
  return (
    <p className="index mono">
      <b>[{n}]</b> {label}
    </p>
  );
}

function Hero() {
  return (
    <>
      <section className="hero" id="top" aria-labelledby="hero-title">
        <div className="wrap hero-grid">
          <div className="hero-copy">
            <h1 id="hero-title">{rich(hero.headline)}</h1>
            <p className="hero-lede">{hero.lede}</p>
            <div className="hero-actions">
              <a className="btn btn-accent" href="#priority-list">
                {cta.primary} <span className="arrow" aria-hidden>→</span>
              </a>
              <a className="btn btn-ghost hero-secondary" href="#included">
                {cta.secondary}
              </a>
            </div>
            <p className="hero-note">{cta.note}</p>
          </div>
          <div className="hero-visual">
            <DomainDiagram pillars={science.pillars} />
          </div>
        </div>
      </section>

      <section className="glance" aria-label="At a glance">
        <div className="wrap">
          <dl className="specs">
            {specs.map((s) => (
              <div className="spec" key={s.label}>
                <dt className="mono">{s.label}</dt>
                <dd>
                  {s.value}
                  <span>{s.detail}</span>
                </dd>
              </div>
            ))}
          </dl>
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
    </>
  );
}

function Audience() {
  return (
    <section className="section" id="audience" aria-labelledby="audience-title">
      <div className="wrap">
        <div className="section-head">
          <Index n="01" label={audience.kicker} />
          <h2 id="audience-title">{rich(audience.heading)}</h2>
          <p>{audience.intro}</p>
        </div>
        <div className="fit-grid reveal">
          <div className="fit">
            <h3 className="mono">Clarity is for you if</h3>
            <ul>
              {audience.forYou.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </div>
          <div className="fit not">
            <h3 className="mono">It&apos;s probably not for you if</h3>
            <ul>
              {audience.notFor.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </div>
        </div>
        <p className="boundary fit-note">
          <span className="mono">Note</span>
          <span>{audience.note}</span>
        </p>
      </div>
    </section>
  );
}

function Programme() {
  const tags: Tag[] = ["Private", "Group", "Your choice", "Where suitable"];
  return (
    <section className="section" id="programme" aria-labelledby="programme-title">
      <div className="wrap">
        <div className="section-head">
          <Index n="04" label={science.kicker} />
          <h2 id="programme-title">{rich(science.heading)}</h2>
          <p>{science.intro}</p>
        </div>
        <ul className="domains reveal">
          {science.pillars.map((p) => (
            <li className="domain" key={p.key}>
              <div className="domain-top">
                <DomainGlyph domain={p.key} className="domain-glyph" />
                <span className="mono">{p.code} / 04</span>
              </div>
              <h3>{p.title}</h3>
              <p className="domain-domain mono">{p.domain}</p>
              <p className="domain-summary">{p.summary}</p>
              <Expand more="See details" hidden={p.details.length}>
              <ul>
                {p.details.map((d) => (
                  <li key={d.label} className="extra">
                    {d.tag && <TagChip tag={d.tag} />}
                    <span>{d.label}</span>
                  </li>
                ))}
              </ul>
              </Expand>
            </li>
          ))}
        </ul>
        <div className="legend mono" aria-label="Key">
          <span>Key</span>
          {tags.map((t) => (
            <TagChip key={t} tag={t} />
          ))}
        </div>
        <div className="thread reveal">
          <svg width="56" height="24" viewBox="0 0 56 24" aria-hidden>
            <circle cx="12" cy="12" r="11" fill="none" stroke="#263B34" strokeWidth="1.2" />
            <circle cx="28" cy="12" r="11" fill="none" stroke="#263B34" strokeWidth="1.2" />
            <circle cx="44" cy="12" r="11" fill="none" stroke="#263B34" strokeWidth="1.2" />
          </svg>
          <div>
            <h3>{science.thread.title}</h3>
            <p>{science.thread.text}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Research() {
  const { study } = research;
  return (
    <section className="section" id="research" aria-labelledby="research-title">
      <div className="wrap">
        <div className="section-head">
          <Index n="07" label={research.kicker} />
          <h2 id="research-title">{rich(research.heading)}</h2>
          <p>{research.intro}</p>
        </div>
        <div className="research-grid">
          <article className="study brackets reveal" aria-labelledby="study-name">
            <div className="study-head">
              <div>
                <p className="study-name" id="study-name">
                  {study.name}
                </p>
                <p className="study-full">{study.fullName}</p>
              </div>
              <span className="mono" style={{ color: "var(--ink-3)", textAlign: "right" }}>
                {study.citation}
              </span>
            </div>
            <dl className="facts">
              {study.facts.map((f) => (
                <div className="fact" key={f.label}>
                  <dt className="mono">{f.label}</dt>
                  <dd>{f.value}</dd>
                </div>
              ))}
            </dl>
            <a className="study-link" href={science.evidence.href} target="_blank" rel="noopener noreferrer">
              {science.evidence.linkLabel}
              <span className="visually-hidden"> (opens in a new tab)</span>
              <span aria-hidden>↗</span>
            </a>
          </article>
          <div className="boundaries reveal">
            <div className="boundary-card">
              <h3>What Clarity takes from it</h3>
              <ul>
                {research.takes.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </div>
            <div className="boundary-card not">
              <h3>What it does not claim</h3>
              <ul>
                {research.doesNot.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </div>
            <p className="small">{science.evidence.text}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Weekend() {
  return (
    <section className="section weekend" id="weekend" aria-labelledby="weekend-title">
      <div className="wrap">
        <div className="section-head">
          <Index n="03" label={weekend.kicker} />
          <h2 id="weekend-title">{rich(weekend.heading)}</h2>
          <p className="status-pill mono">{weekend.status}</p>
        </div>
        <ol className="days">
          {weekend.days.map((d, i) => (
            <li className="day reveal" key={d.day}>
              <p className="day-head mono">
                <b>{d.code}</b>
                <span>
                  {d.day} · {d.date}
                </span>
              </p>
              <div className="day-track" aria-hidden>
                <span style={{ ["--fill" as string]: `${((i + 1) / weekend.days.length) * 100}%` }} />
              </div>
              <h3>{d.theme}</h3>
              <p className="day-summary">{d.summary}</p>
              <Expand more={`See all ${d.moments.length} sessions`} hidden={d.moments.length - 3}>
                <ol>
                  {d.moments.map((m, j) => (
                    <li key={m.label} className={j >= 3 ? "extra" : undefined}>
                      <span>{m.label}</span>
                      {m.tag && <TagChip tag={m.tag} />}
                    </li>
                  ))}
                </ol>
              </Expand>
            </li>
          ))}
        </ol>
        <p className="leisure">
          <TagChip tag="Free time" />
          {weekend.leisureNote}
        </p>
      </div>
    </section>
  );
}

function Included() {
  return (
    <section className="section" id="included" aria-labelledby="included-title">
      <div className="wrap">
        <div className="section-head">
          <Index n="02" label={included.kicker} />
          <h2 id="included-title">{rich(included.heading)}</h2>
          <p className="status-pill mono">{included.status}</p>
        </div>
        <ol className="phases reveal">
          {included.phases.map((ph, i) => (
            <li className="phase" key={ph.when}>
              <p className="phase-when mono">
                <b>{String(i + 1).padStart(2, "0")}</b> {ph.when}
              </p>
              <h3>{ph.title}</h3>
              <Expand more={`See all ${ph.items.length}`} hidden={ph.items.length - 3}>
              <ul>
                {ph.items.map((it, j) => (
                  <li key={it.label} className={j >= 3 ? "extra" : undefined}>
                    <span className="check-mark" aria-hidden>
                      ✓
                    </span>
                    <span>{it.label}</span>
                    {it.tag && <TagChip tag={it.tag} />}
                  </li>
                ))}
              </ul>
              </Expand>
            </li>
          ))}
        </ol>
        <p className="to-confirm">
          <span className="mono">To be confirmed</span>
          {included.toConfirm.map((t) => (
            <span className="tag" key={t}>
              {t}
            </span>
          ))}
        </p>
      </div>
    </section>
  );
}

function Moments() {
  return (
    <section className="section moments" id="moments" aria-labelledby="moments-title">
      <div className="wrap">
        <div className="section-head">
          <Index n="05" label={moments.kicker} />
          <h2 id="moments-title">{rich(moments.heading)}</h2>
          <p>{moments.intro}</p>
        </div>
        <ul className="moment-grid">
          {moments.items.map((m) => (
            <li className="moment reveal" key={m.key} data-tone={m.tone}>
              <MomentArt tone={m.tone} src={m.src} alt={m.alt} />
              <div className="moment-label">
                <span className="moment-chip">{m.caption}</span>
                <p>{m.title}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Insight() {
  return (
    <section className="section dark" id="insight" aria-labelledby="insight-title">
      <div className="wrap">
        <div className="section-head">
          <Index n="06" label={insight.kicker} />
          <h2 id="insight-title">{rich(insight.heading)}</h2>
        </div>
        <ul className="insight-grid">
          {insight.items.map((item, i) => (
            <li className="insight-item reveal" key={item.title}>
              <span className="mono">
                {String(i + 1).padStart(2, "0")} · {item.label}
              </span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </li>
          ))}
        </ul>
        <p className="boundary">
          <span className="mono">Note</span>
          <span>{insight.boundary}</span>
        </p>
      </div>
    </section>
  );
}

function People() {
  const venueFacts = [
    { label: "Venue", value: event.venue.name },
    { label: "Location", value: event.venue.location },
    { label: "Getting there", value: event.venue.travel },
    { label: "Stay", value: event.accommodation },
  ];
  return (
    <section className="section" id="people" aria-labelledby="people-title">
      <div className="wrap">
        <div className="section-head">
          <Index n="08" label={people.kicker} />
          <h2 id="people-title">{rich(people.heading)}</h2>
        </div>
        <div className="people-grid">
          <div className="venue reveal">
            <Photo slot={images.place} sizes="(max-width: 900px) 100vw, 50vw" />
            <dl className="facts">
              {venueFacts.map((f) => (
                <div className="fact" key={f.label}>
                  <dt className="mono">{f.label}</dt>
                  <dd>{f.value}</dd>
                </div>
              ))}
            </dl>
          </div>
          <ul className="roles reveal">
            {people.roles.map((r, i) => (
              <li className="role" key={r.name}>
                <p className="role-top mono">
                  <span>{r.role}</span>
                  <span>0{i + 1}</span>
                </p>
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

function Faq() {
  return (
    <section className="section" id="faq" aria-labelledby="faq-title">
      <div className="wrap">
        <div className="section-head">
          <Index n="09" label="Questions" />
        </div>
        <div className="faq-grid">
          <div className="faq-side">
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
      <p className="small" style={{ marginTop: "0.6rem" }}>
        {pricing.basis}
      </p>
    </div>
  );
}

function Signup() {
  const facts = [
    { label: "Dates", value: event.dates.display },
    { label: "Venue", value: event.venue.name },
    { label: "Group", value: `${event.groupSize.min}–${event.groupSize.max} guests` },
  ];
  return (
    <section className="signup dark" id="priority-list" aria-labelledby="signup-title">
      <div className="wrap">
        <div className="section-head">
          <Index n="10" label={signup.kicker} />
        </div>
        <div className="signup-grid">
          <div className="signup-copy">
            <h2 id="signup-title">{rich(signup.heading)}</h2>
            <p>{signup.text}</p>
            <Pricing />
            <dl className="facts">
              {facts.map((f) => (
                <div className="fact" key={f.label}>
                  <dt className="mono">{f.label}</dt>
                  <dd>{f.value}</dd>
                </div>
              ))}
            </dl>
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
    <footer className="site-footer">
      <div className="wrap">
        <div className="footer-top">
          <div className="footer-brand">
            <a className="wordmark" href="#top">
              <Mark className="wordmark-mark" />
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
          <p className="mono">
            © {year} {partners.organiser.name}
          </p>
        </div>
      </div>
    </footer>
  );
}
