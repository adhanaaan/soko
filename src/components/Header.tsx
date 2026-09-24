"use client";

import { useEffect, useState } from "react";
import { Mark } from "@/components/Art";
import { cta, event, nav } from "@/content/site";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="site-header" data-scrolled={scrolled}>
      <div className="wrap">
        <a className="wordmark" href="#top" aria-label={`${event.name}, back to top`}>
          <Mark className="wordmark-mark" />
          {event.name}
          <small>on Soko</small>
        </a>
        <nav className="site-nav" aria-label="Sections">
          <ul>
            {nav.map((item) => (
              <li key={item.href}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>
        <a className="btn btn-small btn-accent" href="#priority-list">
          {cta.primary}
        </a>
      </div>
    </header>
  );
}
