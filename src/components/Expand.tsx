"use client";

import { useId, useState, type ReactNode } from "react";

/**
 * Progressive disclosure on small screens. On phones, list items marked
 * `.extra` stay hidden until the reader taps "See all". On larger screens
 * (and without JavaScript) everything is shown and the toggle is hidden.
 */
export function Expand({ more, hidden, children }: { more: string; hidden: number; children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const id = useId();
  // Hiding a single item isn't worth a tap; show everything instead.
  if (hidden < 2) return <div className="expand is-open">{children}</div>;
  return (
    <div className={`expand${open ? " is-open" : ""}`}>
      <div id={id}>{children}</div>
      <button type="button" className="expand-toggle" aria-expanded={open} aria-controls={id} onClick={() => setOpen((o) => !o)}>
        {open ? "Show less" : more}
        <span aria-hidden className="expand-chevron">
          ↓
        </span>
      </button>
    </div>
  );
}
