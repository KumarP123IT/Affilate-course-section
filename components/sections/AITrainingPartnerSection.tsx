"use client";

/**
 * AITrainingPartnerSection.tsx
 *
 * Drop-in, self-contained homepage section. Paste this file anywhere in
 * your Next.js/React + Tailwind project and render <AITrainingPartnerSection />
 * on your homepage where you want it to appear on scroll.
 *
 * Self-contained on purpose:
 * - Colors are inline Tailwind arbitrary values (ash/graphite/obsidian +
 *   gold for the offer only) so it doesn't depend on any theme tokens
 *   already defined in your project.
 * - Analytics is a tiny local gtag wrapper — if window.gtag already exists
 *   on your site (Google Analytics 4), events fire automatically. If not,
 *   calls are silent no-ops. No extra imports required.
 * - Needs only `lucide-react` as a dependency (npm i lucide-react if you
 *   don't already have it).
 *
 * Edit the PARTNER object below with your real content before shipping.
 */

import { useState } from "react";
import {
  ArrowUpRight,
  BadgeCheck,
  Bot,
  Check,
  Copy,
  Cpu,
  Network,
  Sparkles,
  Tag,
  Zap,
  type LucideIcon,
} from "lucide-react";

// ---------------------------------------------------------------------------
// Content — edit these fields with your real partner details.
// ---------------------------------------------------------------------------
const PARTNER = {
  id: "omkar-ai-innovation",
  name: "Omkar AI Innovation",
  tagline: "Our official AI training partner",
  logo: "/partners/omkar-ai-innovation.svg", // EDIT ME — path to the real logo under /public
  description:
    "EDIT ME — 2–3 sentences: the AI courses they run, their teaching format (live/self-paced, cohort size), and who the courses are best suited for.",
  website: "https://www.omkaraiinnovation.com/courses",
  highlights: [
    "EDIT ME — e.g. Live, instructor-led AI cohorts",
    "EDIT ME — e.g. Hands-on projects with real datasets",
    "EDIT ME — e.g. Certificate on completion",
  ],
  promoCode: "EDITME20",
  promoDescription: "EDIT ME — describe the discount this code unlocks, and how long it's valid.",
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
      className="relative overflow-hidden bg-[#0a0a0b] py-24"
    >
      <SectionBackground />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#3a3a3e] bg-[#151517] px-3 py-1 text-xs font-medium text-[#c9c9c4]">
            <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
            AI learning partner program
          </span>

          <h2
            id="ai-learning-partner-heading"
            className="mt-6 text-3xl font-semibold tracking-tight text-[#f2f2ef] sm:text-4xl"
          >
            Learn the AI skills teams are hiring for
          </h2>

          <p className="mt-4 text-lg leading-relaxed text-[#9a9a96]">
            We&apos;ve partnered with {PARTNER.name} to bring you a focused, practical path into
            applied AI — one vetted program, plus an exclusive discount for our visitors.
          </p>
        </div>

        <div className="mt-12">
          <PartnerCard />
        </div>
      </div>
    </section>
  );
}

function PartnerCard() {
  function handleVisit() {
    track("partner_website_click", {
      partner_id: PARTNER.id,
      partner_name: PARTNER.name,
      destination_url: PARTNER.website,
    });
  }

  return (
    <div className="grid overflow-hidden rounded-2xl border border-[#29292d] bg-[#131315] lg:grid-cols-5">
      <div className="flex flex-col justify-center px-6 py-8 sm:px-10 sm:py-10 lg:col-span-3">
        <div className="flex items-center gap-4">
          <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl border border-[#29292d] bg-[#1b1b1e]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={PARTNER.logo}
              alt=""
              aria-hidden="true"
              className="h-8 w-8 object-contain"
              loading="lazy"
            />
          </div>
          <div>
            <p className="flex items-center gap-1.5 text-sm font-medium text-[#c9c9c4]">
              <BadgeCheck className="h-4 w-4" aria-hidden="true" />
              {PARTNER.tagline}
            </p>
            <h3 className="text-2xl font-semibold text-[#f2f2ef]">{PARTNER.name}</h3>
          </div>
        </div>

        <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-[#9a9a96]">{PARTNER.description}</p>

        <ul className="mt-6 flex flex-col gap-2.5">
          {PARTNER.highlights.map((point) => (
            <li key={point} className="flex items-start gap-2.5 text-sm text-[#e5e5e1]">
              <span aria-hidden="true" className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#9a9a96]" />
              {point}
            </li>
          ))}
        </ul>

        <a
          href={PARTNER.website}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleVisit}
          className="mt-8 inline-flex w-fit items-center gap-2 rounded-lg bg-[#ededea] px-5 py-3 text-sm font-semibold text-[#0a0a0b] transition-colors hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ededea] focus-visible:ring-offset-2 focus-visible:ring-offset-[#131315]"
        >
          View courses on {PARTNER.name}
          <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          <span className="sr-only">(opens in a new tab)</span>
        </a>
      </div>

      <div className="flex flex-col justify-center border-t border-[#29292d] bg-[#1b1b1e] px-6 py-8 sm:px-10 sm:py-10 lg:col-span-2 lg:border-l lg:border-t-0">
        <PromoCode />
      </div>
    </div>
  );
}

function PromoCode() {
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
    <div className="rounded-xl border border-[#4a3f28] bg-gradient-to-b from-[#d8a94e]/10 to-transparent p-6 sm:p-8">
      <p className="flex items-center gap-1.5 text-sm font-medium text-[#e6c988]">
        <Tag className="h-3.5 w-3.5" aria-hidden="true" />
        Partner offer
      </p>

      <p className="mt-1.5 text-sm text-[#9a9a96]">{PARTNER.promoDescription}</p>

      <div className="mt-4 flex flex-wrap items-center gap-3">
        <code className="rounded-md border border-[#4a3f28] bg-[#0a0a0b] px-3 py-2 font-mono text-lg font-semibold tracking-wide text-[#e6c988]">
          {PARTNER.promoCode}
        </code>
        <button
          type="button"
          onClick={handleCopy}
          aria-label={copied ? "Promo code copied to clipboard" : `Copy promo code ${PARTNER.promoCode} to clipboard`}
          className="inline-flex items-center gap-1.5 rounded-md bg-[#d8a94e] px-3 py-2 text-sm font-semibold text-[#0a0a0b] transition-colors hover:bg-[#e6c988] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d8a94e] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1b1b1e]"
        >
          {copied ? (
            <>
              <Check className="h-4 w-4" aria-hidden="true" />
              Copied
            </>
          ) : (
            <>
              <Copy className="h-4 w-4" aria-hidden="true" />
              Copy code
            </>
          )}
        </button>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Decorative background — ash/graphite tones only, no blue. Pure CSS/SVG,
// no video file to host. Respects prefers-reduced-motion.
// ---------------------------------------------------------------------------
interface FloatingIcon {
  Icon: LucideIcon;
  label: string;
  className: string;
  animation: "ai-float-a" | "ai-float-b" | "ai-drift";
  delay: string;
}

const FLOATING_ICONS: FloatingIcon[] = [
  { Icon: Cpu, label: "Compute", className: "left-[6%] top-[16%]", animation: "ai-float-a", delay: "0s" },
  { Icon: Network, label: "Networks", className: "right-[10%] top-[12%]", animation: "ai-float-b", delay: "0.6s" },
  { Icon: Bot, label: "Agents", className: "right-[16%] bottom-[16%]", animation: "ai-float-a", delay: "1.4s" },
  { Icon: Zap, label: "Inference", className: "left-[10%] bottom-[20%]", animation: "ai-drift", delay: "1.8s" },
];

function SectionBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <style>{`
        @keyframes ai-float-a { 0%,100% { transform: translateY(0) rotate(0deg); } 50% { transform: translateY(-14px) rotate(3deg); } }
        @keyframes ai-float-b { 0%,100% { transform: translateY(0) rotate(0deg); } 50% { transform: translateY(12px) rotate(-4deg); } }
        @keyframes ai-drift { 0%,100% { transform: translateX(0); } 50% { transform: translateX(18px); } }
        @keyframes ai-glow { 0%,100% { opacity: 0.35; transform: scale(1); } 50% { opacity: 0.6; transform: scale(1.05); } }
        .ai-float-a { animation: ai-float-a 7s ease-in-out infinite; }
        .ai-float-b { animation: ai-float-b 8s ease-in-out infinite; }
        .ai-drift { animation: ai-drift 9s ease-in-out infinite; }
        .ai-glow { animation: ai-glow 7s ease-in-out infinite; }
        @media (prefers-reduced-motion: reduce) {
          .ai-float-a, .ai-float-b, .ai-drift, .ai-glow { animation: none !important; }
        }
      `}</style>

      {/* soft ash-white glow, like light through fog — no color, just tone */}
      <div className="ai-glow absolute -left-24 top-1/3 h-96 w-96 rounded-full bg-white/[0.04] blur-[110px]" />
      <div
        className="ai-glow absolute right-0 top-0 h-80 w-80 rounded-full bg-white/[0.03] blur-[100px]"
        style={{ animationDelay: "2.5s" }}
      />

      {/* faint dot grid */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: "radial-gradient(#2a2a2e 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* floating AI-domain icons, ash toned */}
      {FLOATING_ICONS.map(({ Icon, label, className, animation, delay }) => (
        <div
          key={label}
          className={`absolute hidden ${className} ${animation} md:flex`}
          style={{ animationDelay: delay }}
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#29292d] bg-[#131315]/80 shadow-sm backdrop-blur-sm">
            <Icon className="h-5 w-5 text-[#7a7a76]" />
          </div>
        </div>
      ))}

      {/* fade to solid obsidian at the edges so foreground content stays readable */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0b]/10 via-transparent to-[#0a0a0b]" />
    </div>
  );
}
