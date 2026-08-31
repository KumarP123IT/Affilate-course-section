"use client";

/**
 * AITrainingPartnerSection.tsx
 *
 * Drop-in, self-contained homepage section. Paste this file anywhere in
 * your Next.js/React + Tailwind project and render <AITrainingPartnerSection />
 * on your homepage where you want it to appear on scroll.
 *
 * Self-contained on purpose:
 * - Colors are inline Tailwind arbitrary values, all drawn from one ash/
 *   obsidian/brass token set (see comment below), so it doesn't depend on
 *   any theme tokens already defined in your project.
 * - Analytics is a tiny local gtag wrapper — if window.gtag already exists
 *   on your site (Google Analytics 4), events fire automatically. If not,
 *   calls are silent no-ops. No extra imports required.
 * - Needs only `lucide-react` as a dependency (npm i lucide-react if you
 *   don't already have it). The display typeface (Fraunces) is loaded via
 *   a scoped @import, so no next/font setup is required either.
 *
 * ---------------------------------------------------------------------
 * Design tokens (for reference — used as literal hex values below)
 * ---------------------------------------------------------------------
 * obsidian (page bg)       #0a0a0b
 * panel (surface)          #121214
 * panel-raised (stub)      #17171a
 * line (hairline border)   #27272b
 * ash-100 (headline)       #eeece7
 * ash-300 (body)           #c3c1ba
 * ash-500 (meta/kicker)    #8a8883
 * ash-700 (ghost mark)     #1c1c1f
 * brass (offer accent)     #b7986a
 *
 * Edit the PARTNER object below with your real content before shipping.
 */

import { useState } from "react";
import { ArrowUpRight, Check, Copy, Tag } from "lucide-react";

// ---------------------------------------------------------------------------
// Content — edit these fields with your real partner details.
// ---------------------------------------------------------------------------
const PARTNER = {
  id: "omkar-ai-innovation",
  name: "Omkar AI Innovation",
  tagline: "Official training partner",
  logo: "/partners/omkar-ai-innovation.svg", // path to the real logo under /public
  description:
    "Omkar AI Innovation offers practical, hands-on training in AI, automation, and modern web development — ideal for students and professionals looking to break into AI-driven roles.",
  website: "https://www.omkaraiinnovation.com/courses",
  highlights: [
    "Practical, project-based curriculum in AI, automation & web development",
    "Hands-on assignments using real tools and workflows",
    "Certificate of completion recognized by the partner institute",
  ],
  promoCode: "EDITME20",
  promoDescription: "Use this code to get an exclusive discount on any Omkar AI Innovation course.",
};

// ---------------------------------------------------------------------------
// Tiny local analytics wrapper — no external file needed.
// ---------------------------------------------------------------------------
declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

function track(eventName: string, params: Record<string, string> = {}) {
  try {
    if (typeof window !== "undefined" && typeof window.gtag === "function") {
      window.gtag("event", eventName, params);
    }
  } catch {
    // Analytics must never break the page.
  }
}

// ---------------------------------------------------------------------------
// Section
// ---------------------------------------------------------------------------
export default function AITrainingPartnerSection() {
  return (
    <section
      id="ai-learning-partner"
      aria-labelledby="ai-learning-partner-heading"
      className="relative overflow-hidden bg-[#0a0a0b] py-28"
    >
      <FontImport />
      <SectionTexture />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="max-w-xl">
          <p className="text-sm text-[#8a8883]">Training partner</p>

          <h2
            id="ai-learning-partner-heading"
            className="mt-5 text-4xl font-normal leading-[1.15] tracking-tight text-[#eeece7] sm:text-[2.75rem]"
            style={{ fontFamily: "'Fraunces', ui-serif, Georgia, serif" }}
          >
            Learn the AI skills teams are hiring for
          </h2>

          <p className="mt-5 text-[17px] leading-relaxed text-[#8a8883]">
            We&apos;ve partnered with {PARTNER.name} to bring you a focused, practical path into
            applied AI, plus an exclusive discount for our visitors.
          </p>
        </div>

        <div className="mt-14">
          <PartnerPanel />
        </div>
      </div>
    </section>
  );
}

function PartnerPanel() {
  function handleVisit() {
    track("partner_website_click", {
      partner_id: PARTNER.id,
      partner_name: PARTNER.name,
      destination_url: PARTNER.website,
    });
  }

  const monogram = PARTNER.name.charAt(0);

  return (
    <div className="relative grid overflow-hidden rounded-[6px] border border-[#27272b] bg-[#121214] lg:grid-cols-5">
      {/* faint monogram watermark, grounded in the partner's own initial */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -right-6 -top-16 select-none text-[15rem] leading-none text-[#1c1c1f]"
        style={{ fontFamily: "'Fraunces', ui-serif, Georgia, serif" }}
      >
        {monogram}
      </span>

      <div className="relative flex flex-col justify-center px-7 py-10 sm:px-10 sm:py-12 lg:col-span-3">
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-[4px] border border-[#27272b] bg-[#eeece7]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={PARTNER.logo}
              alt=""
              aria-hidden="true"
              className="h-7 w-7 object-contain"
              loading="lazy"
            />
          </div>
          <div>
            <p className="text-[13px] text-[#8a8883]">{PARTNER.tagline}</p>
            <h3 className="text-xl font-medium text-[#eeece7]">{PARTNER.name}</h3>
          </div>
        </div>

        <p className="mt-7 max-w-md text-[15px] leading-relaxed text-[#c3c1ba]">
          {PARTNER.description}
        </p>

        <ul className="mt-7 flex flex-col">
          {PARTNER.highlights.map((point, i) => (
            <li
              key={point}
              className={`py-3 text-sm text-[#c3c1ba] ${i !== 0 ? "border-t border-[#1e1e21]" : ""}`}
            >
              {point}
            </li>
          ))}
        </ul>

        <a
          href={PARTNER.website}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleVisit}
          className="mt-9 inline-flex w-fit items-center gap-2 rounded-[4px] border border-[#3a3a3e] px-5 py-3 text-sm font-medium text-[#eeece7] transition-colors duration-200 hover:border-[#eeece7] hover:bg-[#eeece7] hover:text-[#0a0a0b] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#eeece7] focus-visible:ring-offset-2 focus-visible:ring-offset-[#121214]"
        >
          View courses on {PARTNER.name}
          <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          <span className="sr-only">(opens in a new tab)</span>
        </a>
      </div>

      <div className="relative border-t border-[#27272b] lg:col-span-2 lg:border-l lg:border-t-0">
        <Perforation />
        <div className="flex h-full flex-col justify-center bg-[#17171a] px-7 py-10 sm:px-10 sm:py-12">
          <PromoStub />
        </div>
      </div>
    </div>
  );
}

// Torn-ticket perforation between the panel and the promo stub — a small,
// deliberate nod to the "coupon" nature of the content it separates.
function Perforation() {
  return (
    <div
      aria-hidden="true"
      className="absolute -top-px left-0 hidden h-full w-px lg:block"
      style={{
        backgroundImage: "radial-gradient(circle at 50% 0, transparent 3px, #27272b 3.5px)",
        backgroundSize: "1px 18px",
        backgroundRepeat: "repeat-y",
      }}
    />
  );
}

function PromoStub() {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(PARTNER.promoCode);
    } catch {
      return;
    }
    setCopied(true);
    track("promo_code_copy", {
      partner_id: PARTNER.id,
      partner_name: PARTNER.name,
      promo_code: PARTNER.promoCode,
    });
    window.setTimeout(() => setCopied(false), 2500);
  }

  return (
    <div>
      <p className="flex items-center gap-1.5 text-[13px] text-[#8a8883]">
        <Tag className="h-3.5 w-3.5" aria-hidden="true" />
        Partner offer
      </p>

      <p className="mt-2 text-sm leading-relaxed text-[#c3c1ba]">{PARTNER.promoDescription}</p>

      <div className="mt-6 flex flex-wrap items-center gap-3">
        <code className="rounded-[4px] border border-[#3d3524] bg-[#0a0a0b] px-3 py-2 font-mono text-base tracking-wide text-[#b7986a]">
          {PARTNER.promoCode}
        </code>
        <button
          type="button"
          onClick={handleCopy}
          aria-label={copied ? "Promo code copied to clipboard" : `Copy promo code ${PARTNER.promoCode} to clipboard`}
          className="inline-flex items-center gap-1.5 rounded-[4px] border border-[#3d3524] bg-[rgba(183,152,106,0.08)] px-3 py-2 text-sm font-medium text-[#b7986a] transition-colors duration-200 hover:bg-[#b7986a] hover:text-[#0a0a0b] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#b7986a] focus-visible:ring-offset-2 focus-visible:ring-offset-[#17171a]"
        >
          {copied ? (
            <>
              <Check className="h-3.5 w-3.5" aria-hidden="true" />
              Copied
            </>
          ) : (
            <>
              <Copy className="h-3.5 w-3.5" aria-hidden="true" />
              Copy code
            </>
          )}
        </button>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Type — one serif display face loaded on demand, scoped to this section.
// ---------------------------------------------------------------------------
function FontImport() {
  return (
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,340..480&display=swap');
    `}</style>
  );
}

// ---------------------------------------------------------------------------
// Background texture — fine grain + soft vignette, no color, no motion.
// Deliberately quiet: the ticket perforation is the one bold move in this
// design, so everything around it stays still and out of the way.
// ---------------------------------------------------------------------------
function SectionTexture() {
  return (
    <div className="pointer-events-none absolute inset-0" aria-hidden="true">
      <svg className="absolute inset-0 h-full w-full opacity-[0.035]">
        <filter id="ai-partner-grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="2" stitchTiles="stitch" />
        </filter>
        <rect width="100%" height="100%" filter="url(#ai-partner-grain)" />
      </svg>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(238,236,231,0.05),transparent_60%)]" />
    </div>
  );
}
