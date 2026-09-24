import Link from "next/link";
import type { Metadata } from "next";
import { contact, event, partners } from "@/content/site";

export const metadata: Metadata = {
  title: `Privacy notice · ${event.name}`,
  description: `How ${partners.organiser.name} handles priority-list details for ${event.name}.`,
};

export default function PrivacyPage() {
  return (
    <main className="section">
      <div className="wrap prose">
        <p>
          <Link href="/">← Back to {event.name}</Link>
        </p>
        <p className="draft-banner">
          Draft notice — to be reviewed before launch (including against Singapore&apos;s PDPA).
        </p>
        <h1>Privacy notice</h1>
        <p>
          This notice explains how {partners.organiser.name} handles the details you give us when you join the{" "}
          {event.name} priority list.
        </p>
        <h2>What we collect</h2>
        <ul>
          <li>Your name and email address.</li>
          <li>The date and time you joined, and your agreement to be contacted.</li>
        </ul>
        <p>
          We do not collect medical history, health data or cognitive data through this website. Any health
          information for the retreat itself would be collected separately, with its own consent, if you book.
        </p>
        <h2>How we use it</h2>
        <p>
          Only to contact you about {event.name}: when bookings open, and with confirmed details about dates,
          programme and pricing. We will not sell your details.
        </p>
        <h2>Who can see it</h2>
        <p>
          The {partners.organiser.name} team. We may share your name with {partners.hospitality.name} or{" "}
          {partners.brainHealth.name} only if you go on to book, and only what they need to host you.
        </p>
        <h2>How long we keep it</h2>
        <p>Until the retreat has taken place, or until you ask us to remove you — whichever comes first.</p>
        <h2>Your choices</h2>
        <p>
          You can ask to see, correct or delete your details at any time by emailing{" "}
          <a href={`mailto:${contact.email}`}>{contact.email}</a>.
        </p>
      </div>
    </main>
  );
}
