import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Users,
  Heart,
  Leaf,
  RefreshCw,
  Plus,
  Stethoscope,
  Microscope,
  HandHeart,
  Building2,
  Coins,
  Scale,
  CircleCheck,
  ArrowRight,
} from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import phase01 from "@/assets/phase-01-oneness-oasis.png.asset.json";
import masterVisionPlan from "@/assets/master-vision-plan.jpeg.asset.json";
import phase02 from "@/assets/phase-02-seva-bhavana.png.asset.json";
import phase02Diagram from "@/assets/phase-02-seva-bhavana-diagram.jpeg.asset.json";
import phase03 from "@/assets/phase-03-ashraya.jpeg.asset.json";
import phase04 from "@/assets/phase-04-sahavas-mandala.jpeg.asset.json";
import phase05 from "@/assets/phase-05-soham-alaya.png.asset.json";
import phase06 from "@/assets/phase-06-circle-of-coexistence.png.asset.json";
import phase07 from "@/assets/phase-07-vision-realised.jpeg.asset.json";
import sysMohalla from "@/assets/system-mohalla-circles.png.asset.json";
import sysHub from "@/assets/system-central-hub.png.asset.json";
import sysRevenue from "@/assets/system-sustainable-revenue.png.asset.json";
import sysLegal from "@/assets/system-legal-civic.png.asset.json";
import sevaBhavanaHospital from "@/assets/seva-bhavana-hospital.png.asset.json";
import buildingFirstHospital from "@/assets/building-first-hospital.png.asset.json";
import phase1Financials from "@/assets/phase1-financials.png.asset.json";
import phase1KeyFacilities from "@/assets/phase1-key-facilities.png.asset.json";
import phase1Inside1 from "@/assets/phase1-inside-1.png.asset.json";
import phase1Inside2 from "@/assets/phase1-inside-2.png.asset.json";
import { Home as HomeIcon, PawPrint, IndianRupee } from "lucide-react";



export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mohalle Mastane — Phase-wise Funding Roadmap" },
      {
        name: "description",
        content:
          "Phase 01 — Oneness Oasis: a living sanctuary where humans, animals and nature coexist in harmony.",
      },
      { property: "og:title", content: "Mohalle Mastane — Phase-wise Funding Roadmap" },
      {
        property: "og:description",
        content:
          "Phase 01 — Oneness Oasis: a living sanctuary where humans, animals and nature coexist in harmony.",
      },
      { property: "og:image", content: phase01.url },
      { name: "twitter:image", content: phase01.url },
    ],
  }),
  component: Index,
});

const pillars = [
  { Icon: Users, title: "Coexistence", text: "Living together with respect and empathy" },
  { Icon: Heart, title: "Compassion", text: "Healing every life with care" },
  { Icon: Leaf, title: "Togetherness", text: "A community bound by purpose and love" },
  { Icon: RefreshCw, title: "Sustainability", text: "In harmony with nature, for the future" },
];

const phaseNav = [
  { id: "phase-01", n: "01", name: "Oneness Oasis" },
  { id: "overview", n: "—", name: "Overview" },
  { id: "phase-02", n: "02", name: "Seva Bhavana" },
  { id: "phase-03", n: "03", name: "Ashraya" },
  { id: "phase-04", n: "04", name: "Sahavas Mandala" },
  { id: "phase-05", n: "05", name: "Soham Alaya" },
  { id: "phase-06", n: "06", name: "Circle of Coexistence" },
  { id: "phase-07", n: "07", name: "Vision Realised" },
  { id: "phase-1-funding", n: "₹", name: "Phase 1 Funding" },
  { id: "the-system", n: "✦", name: "The System" },
];

const sevaFeatures = [
  { Icon: Plus, title: "Advanced Care", text: "Equipped for critical and specialised treatment." },
  { Icon: Stethoscope, title: "Compassionate Spaces", text: "Designed for comfort, recovery and dignity." },
  { Icon: Microscope, title: "Scientific Excellence", text: "Diagnostics, surgery and monitoring under one roof." },
  { Icon: HandHeart, title: "Community Impact", text: "Guiding decentralised units across the city." },
];

const sevaFloors = [
  { title: "Staff Accommodation", text: "Resting spaces for the caregivers who heal." },
  { title: "Recovery Wards", text: "Post-operative and in-patient care." },
  { title: "Operation Theatre & Sterilization Unit", text: "Safe, modern and well-equipped." },
  { title: "X-Ray & Diagnostic Laboratory", text: "Accurate diagnosis, better treatment." },
  { title: "Emergency & OPD", text: "First response. Every life matters." },
  { title: "Service Yard & Support", text: "Cattle treatment zone, quarantine, pharmacy, storage and utilities." },
];

const systemPillars = [
  {
    Icon: Users,
    n: "01",
    title: "Mohalla Circles",
    sub: "Community First Response",
    text: "Neighbourhood volunteers coordinate feeding, first-aid and local monitoring.",
    image: sysMohalla.url,
    details: {
      heading: "Community First Response",
      body: "Mohalla Circles are the heartbeat of the system — neighbourhood-based responders who feed, monitor and support animals before escalation is needed.",
      bullets: [
        "Trained volunteer teams in every locality",
        "Daily feeding and welfare rounds",
        "On-the-ground first response & triage",
        "Local data feeding into the Central Hub",
      ],
    },
  },
  {
    Icon: Building2,
    n: "02",
    title: "Central Hub",
    sub: "Advanced Wards & Public Interaction",
    text: "A city hub combines advanced care, recovery and public engagement.",
    image: sysHub.url,
    details: {
      heading: "Advanced Wards & Public Interaction",
      body: "The Central Hub brings critical care, diagnostics, recovery and public engagement together under one roof.",
      bullets: [
        "OT, ICU, recovery wards and diagnostics",
        "Adoption & community-interaction zones",
        "Coordination hub for all Mohalla units",
        "Public learning, tours and outreach",
      ],
    },
  },
  {
    Icon: Coins,
    n: "03",
    title: "Sustainable Revenue",
    sub: "Funding the Compassion",
    text: "Programs, events and public spaces keep care sustainably funded.",
    image: sysRevenue.url,
    details: {
      heading: "Funding the Compassion",
      body: "Sustainable Revenue ensures compassion can scale through recurring community-backed income streams.",
      bullets: [
        "Compassion Café & retail spaces",
        "Art-for-Animals & cultural events",
        "Workshops, memberships & community programs",
        "Transparent reinvestment into animal care",
      ],
    },
  },
  {
    Icon: Scale,
    n: "04",
    title: "Legal & Civic Integration",
    sub: "Standard Framework",
    text: "A civic framework aligns operations with animal welfare law and policy.",
    image: sysLegal.url,
    details: {
      heading: "Standard Framework",
      body: "Legal & Civic Integration creates trust, accountability and a repeatable model aligned with policy and municipal collaboration.",
      bullets: [
        "PCA Act 1960 Compliance",
        "ABC Rules 2023",
        "AWBI Guidelines",
        "Municipality Collaboration",
        "Policy Integration",
      ],
    },
  },
];

const roadmapPhases = [
  {
    tag: "Phase 1 · Now",
    title: "Build the Central Animal Hospital",
    items: [
      "Community network already established",
      "Volunteer base already active",
      "Street animal care system in place",
      "Initial operations self-funded through community support",
    ],
    focus: {
      label: "Our Current Focus",
      text: "Raise funds and resources to construct the Central Animal Hospital — the healing backbone.",
    },
    goal: "Construct and operationalize the first fully equipped animal hospital in Rourkela.",
    accent: true,
  },
  {
    tag: "Phase 2 · Near Term",
    title: "Launch Decentralized Mohalla Units",
    items: [
      "Set up Mohalla-level animal care units",
      "Train more local volunteers",
      "Strengthen first-response care in every neighborhood",
      "Ensure faster emergency response and less crowding at the hub",
    ],
    goal: "Create a city-wide network of compassionate care.",
    accent: false,
  },
  {
    tag: "Phase 3 · Long Term",
    title: "Scale, Integrate & Replicate",
    items: [
      "Refine the operational & financial blueprint",
      "Roll out community software and data systems",
      "Replicate the model across India",
      "Build a self-sustaining ecosystem for generations",
    ],
    goal: "Build a replicable model of coexistence for a humane India.",
    accent: false,
  },
];

function useActiveSection(ids: string[]) {
  const [activeId, setActiveId] = useState<string>(ids[0] ?? "");

  useEffect(() => {
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    if (elements.length === 0) return;

    const visible = new Map<string, number>();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            visible.set(entry.target.id, entry.intersectionRatio);
          } else {
            visible.delete(entry.target.id);
          }
        }
        if (visible.size > 0) {
          // Pick the section with the highest visible ratio, breaking ties by source order.
          let best = "";
          let bestRatio = -1;
          for (const id of ids) {
            const r = visible.get(id);
            if (r !== undefined && r > bestRatio) {
              best = id;
              bestRatio = r;
            }
          }
          if (best) setActiveId(best);
        }
      },
      {
        // Trigger when a section enters the band just below the sticky header.
        rootMargin: "-30% 0px -55% 0px",
        threshold: [0, 0.1, 0.25, 0.5, 0.75, 1],
      },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ids.join("|")]);

  return activeId;
}

function Index() {
  const activeId = useActiveSection(phaseNav.map((p) => p.id));

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    e.preventDefault();
    el.scrollIntoView({ behavior: "smooth", block: "start" });
    history.replaceState(null, "", `#${id}`);
  };

  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Brand bar */}
      <header className="fixed inset-x-0 top-0 z-20 border-b border-border/40 bg-background/70 backdrop-blur-md">
        <div className="mx-auto flex max-w-[1600px] items-center justify-between gap-6 px-6 py-4 md:px-10">
          <a
            href="#phase-01"
            onClick={(e) => handleNavClick(e, "phase-01")}
            className="font-display text-lg tracking-wide text-foreground md:text-xl"
          >
            Mohalle Mastane
          </a>
          <nav className="hidden items-center gap-5 lg:flex">
            {phaseNav.map((p) => {
              const isActive = activeId === p.id;
              return (
                <a
                  key={p.id}
                  href={`#${p.id}`}
                  onClick={(e) => handleNavClick(e, p.id)}
                  aria-current={isActive ? "true" : undefined}
                  className={`relative pb-1 text-[10px] uppercase tracking-[0.22em] transition-colors ${
                    isActive
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <span className={`mr-1.5 ${isActive ? "text-foreground" : "text-foreground/50"}`}>
                    {p.n}
                  </span>
                  {p.name}
                  <span
                    className={`absolute inset-x-0 -bottom-px h-px bg-foreground transition-opacity ${
                      isActive ? "opacity-100" : "opacity-0"
                    }`}
                  />
                </a>
              );
            })}
          </nav>
          <div className="hidden text-[10px] uppercase tracking-[0.25em] text-muted-foreground md:block lg:hidden">
            Phase-wise Funding Roadmap
          </div>
        </div>
        {/* Mobile / tablet scrollable nav */}
        <nav className="flex gap-4 overflow-x-auto border-t border-border/40 px-6 py-2 lg:hidden">
          {phaseNav.map((p) => {
            const isActive = activeId === p.id;
            return (
              <a
                key={p.id}
                href={`#${p.id}`}
                onClick={(e) => handleNavClick(e, p.id)}
                aria-current={isActive ? "true" : undefined}
                className={`shrink-0 text-[10px] uppercase tracking-[0.22em] transition-colors ${
                  isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <span className={`mr-1 ${isActive ? "text-foreground" : "text-foreground/50"}`}>
                  {p.n}
                </span>
                {p.name}
              </a>
            );
          })}
        </nav>
      </header>

      {/* Phase 01 — Cover */}
      <section
        id="phase-01"
        className="relative grid min-h-screen grid-cols-1 pt-20 md:grid-cols-12 md:pt-0"
      >
        {/* Left column — text */}
        <div className="relative z-10 flex flex-col justify-center bg-background px-6 py-12 md:col-span-5 md:px-12 md:py-20 lg:col-span-4 lg:px-16">
          <div className="md:sticky md:top-24">
            <div className="font-display text-6xl leading-none text-foreground md:text-7xl">
              01
            </div>
            <h1 className="mt-3 font-display text-3xl leading-tight text-foreground md:text-5xl">
              Oneness Oasis
            </h1>
            <div className="mt-2 text-xs uppercase tracking-[0.3em] text-muted-foreground">
              Master Vision
            </div>

            <div className="my-6 h-px w-16 bg-foreground/40" />

            <div className="font-display text-xl text-foreground md:text-2xl">
              A Bhoomi of Oneness
            </div>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-foreground/80 md:text-base">
              A living sanctuary where all beings coexist in harmony.
              Architecture dissolves boundaries and becomes a bridge between
              humans, animals and nature.
            </p>

            {/* Pillars */}
            <ul className="mt-10 space-y-5">
              {pillars.map(({ Icon, title, text }) => (
                <li key={title} className="flex items-start gap-4">
                  <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-foreground/40 text-foreground">
                    <Icon className="h-4 w-4" strokeWidth={1.25} />
                  </span>
                  <div>
                    <div className="text-[11px] font-medium uppercase tracking-[0.18em] text-foreground">
                      {title}
                    </div>
                    <div className="mt-1 text-xs leading-relaxed text-muted-foreground md:text-sm">
                      {text}
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-12 text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
              Phase 01 of the Roadmap
            </div>
          </div>
        </div>

        {/* Right column — image */}
        <div className="relative md:col-span-7 lg:col-span-8">
          <div className="relative h-[60vh] w-full md:h-screen">
            <img
              src={phase01.url}
              alt="Oneness Oasis — aerial render of the circular sanctuary with surrounding water and residences"
              className="h-full w-full object-cover"
            />
            <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-24 bg-gradient-to-r from-background to-transparent md:block" />
          </div>
        </div>
      </section>

      {/* Overview — Full Planning */}
      <section
        id="overview"
        className="relative border-t border-border/60 bg-background px-6 py-20 md:px-12 md:py-28 lg:px-16"
      >
        <div className="mx-auto max-w-[1400px]">
          <div className="flex flex-col items-start gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                The Full Vision
              </div>
              <h2 className="mt-3 font-display text-3xl leading-tight text-foreground md:text-5xl">
                A Living Ecosystem of Compassion
              </h2>
            </div>
            <div className="max-w-sm text-sm leading-relaxed text-foreground/70 md:text-right">
              Seven interconnected spaces shaping Oneness Oasis — each a
              chapter in the larger story of coexistence.
            </div>
          </div>

          <ol className="mt-14 divide-y divide-foreground/25 border-y border-foreground/25">
            {[
              { id: "overview-01", n: "01", name: "Oneness Oasis", sub: "Master Vision", image: masterVisionPlan.url },
              { id: "overview-02", n: "02", name: "Seva Bhavana", sub: "Service House — Veterinary Care Hub", image: phase02.url },
              { id: "phase-03", n: "03", name: "Ashraya", sub: "Shelter & Stay", image: phase03.url },
              { id: "phase-04", n: "04", name: "Sahavas Mandala", sub: "Social & Interactive Heart", image: phase04.url },
              { id: "phase-05", n: "05", name: "Soham Alaya", sub: "Healing & Reflection Space", image: phase05.url },
              { id: "phase-06", n: "06", name: "Circle of Coexistence", sub: "Integrated Campus", image: phase06.url },
              { id: "phase-07", n: "07", name: "The Vision Realised", sub: "A Living Ecosystem of Compassion", image: phase07.url },
            ].map((p) => (
              <li
                key={p.n}
                id={p.id}
                className="group relative grid grid-cols-1 gap-6 py-10 md:grid-cols-2 md:gap-10 md:py-14"
              >
                <div className="flex flex-col justify-between">
                  <div className="font-display text-3xl text-foreground/60 md:text-4xl">
                    {p.n}
                  </div>
                  <div className="mt-10">
                    <div className="font-display text-2xl leading-tight text-foreground md:text-3xl">
                      {p.name}
                    </div>
                    <div className="mt-3 text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                      {p.sub}
                    </div>
                  </div>
                </div>
                {p.image && (
                  <div className="overflow-hidden">
                    <img
                      src={p.image}
                      alt={`${p.name} — ${p.sub}`}
                      className="h-56 w-full object-cover md:h-72"
                      loading="lazy"
                    />
                  </div>
                )}
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Phase 02 — Seva Bhavana detail */}
      <section
        id="phase-02"
        className="relative scroll-mt-32 border-t border-border/60 bg-[hsl(40_20%_94%)] px-6 py-20 md:px-12 md:py-28 lg:px-16"
      >
        <div className="mx-auto grid max-w-[1500px] grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left column — written content */}
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-32">
              <div className="font-display text-6xl leading-none text-foreground/90 md:text-7xl">
                02
              </div>
              <h2 className="mt-3 font-display text-3xl leading-tight text-foreground md:text-5xl">
                Seva Bhavana
              </h2>
              <div className="mt-2 text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
                Service House
              </div>
              <div className="mt-1 text-sm text-foreground/70">
                (Veterinary Care Hub)
              </div>

              <div className="my-6 h-px w-16 bg-foreground/40" />

              <p className="max-w-md text-sm leading-relaxed text-foreground/80 md:text-base">
                The healing backbone of Oneness Oasis. Where science,
                compassion and care come together to restore life.
              </p>

              <ul className="mt-10 space-y-5">
                {sevaFeatures.map(({ Icon, title, text }) => (
                  <li key={title} className="flex items-start gap-4">
                    <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-foreground/40 text-foreground">
                      <Icon className="h-4 w-4" strokeWidth={1.25} />
                    </span>
                    <div>
                      <div className="text-[11px] font-medium uppercase tracking-[0.18em] text-foreground">
                        {title}
                      </div>
                      <div className="mt-1 text-xs leading-relaxed text-muted-foreground md:text-sm">
                        {text}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right column — diagram + floor legend */}
          <div className="lg:col-span-8">
            <div className="overflow-hidden bg-background">
              <img
                src={phase02Diagram.url}
                alt="Seva Bhavana — exploded axonometric diagram of the Service House showing six functional floors from service yard to staff accommodation"
                className="h-auto w-full object-contain"
                loading="lazy"
              />
            </div>

            <div className="mt-10 grid grid-cols-1 gap-x-10 gap-y-6 sm:grid-cols-2">
              {sevaFloors.map((f, i) => (
                <div
                  key={f.title}
                  className="flex items-start gap-4 border-t border-foreground/20 pt-4"
                >
                  <div className="font-display text-sm tabular-nums text-foreground/50">
                    0{sevaFloors.length - i}
                  </div>
                  <div>
                    <div className="text-[11px] font-medium uppercase tracking-[0.18em] text-foreground">
                      {f.title}
                    </div>
                    <div className="mt-1 text-xs leading-relaxed text-muted-foreground md:text-sm">
                      {f.text}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Phase 1 — Building the First Hospital */}
      <section
        id="building-first-hospital"
        className="relative scroll-mt-32 border-t border-border/60 bg-[hsl(45_30%_95%)] px-6 py-20 md:px-12 md:py-28 lg:px-16"
      >
        <div className="mx-auto max-w-[1500px]">
          {/* Header */}
          <div className="flex flex-col gap-6 border-b border-foreground/15 pb-8 md:flex-row md:items-end md:justify-between md:pb-10">
            <div className="flex items-start gap-5">
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-md bg-[hsl(82_30%_18%)] font-display text-lg text-[hsl(45_30%_95%)] md:h-16 md:w-16 md:text-xl">
                04
              </span>
              <div>
                <h2 className="font-display text-3xl uppercase tracking-tight text-[hsl(82_30%_18%)] md:text-5xl">
                  Building the First Hospital
                </h2>
                <div className="mt-2 font-display text-base italic text-[hsl(38_30%_42%)] md:text-lg">
                  Phase 1: Our immediate goal.
                </div>
              </div>
            </div>
            <div className="flex items-start gap-3 md:max-w-xs">
              <Leaf className="mt-1 h-5 w-5 shrink-0 text-[hsl(82_30%_28%)]" strokeWidth={1.5} />
              <p className="font-display text-sm italic leading-relaxed text-foreground/80 md:text-base">
                A foundation for a city-wide animal care system.
              </p>
            </div>
          </div>

          {/* Hero image */}
          <div className="mt-10 overflow-hidden rounded-lg">
            <img
              src={buildingFirstHospital.url}
              alt="Rendering of the Mohalle Mastane Animal Care Centre — a contemplative courtyard hospital with caregivers attending to dogs"
              className="h-auto w-full object-cover"
              loading="lazy"
            />
          </div>

          {/* Banner row */}
          <div className="mt-6 grid grid-cols-1 gap-0 overflow-hidden rounded-lg md:grid-cols-12">
            <div className="bg-[hsl(82_30%_18%)] p-6 text-[hsl(45_30%_95%)] md:col-span-5 md:p-8">
              <div className="font-display text-xl uppercase leading-tight tracking-wide md:text-2xl">
                Veterinary Hospital &<br />Animal Care Centre
              </div>
            </div>
            <div className="flex items-center gap-6 bg-[hsl(82_30%_18%)] p-6 text-[hsl(45_30%_95%)] md:col-span-3 md:justify-center md:border-l md:border-[hsl(45_30%_95%)]/20 md:p-8">
              <div>
                <div className="font-display text-3xl md:text-4xl">₹50 Lakhs</div>
                <div className="mt-1 text-[10px] uppercase tracking-[0.32em] text-[hsl(38_40%_72%)]">
                  Immediate Goal
                </div>
              </div>
            </div>
            <div className="flex items-start gap-4 bg-[hsl(45_30%_92%)] p-6 md:col-span-4 md:p-8">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[hsl(82_30%_18%)]/10 text-[hsl(82_30%_18%)]">
                <PawPrint className="h-5 w-5" strokeWidth={1.5} />
              </span>
              <p className="font-display text-sm leading-relaxed text-foreground/85 md:text-base">
                Not just a hospital.<br />
                The foundation of a city-wide care system.
              </p>
            </div>
          </div>

          {/* Four pillars */}
          <ul className="mt-12 grid grid-cols-1 gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { Icon: Plus, title: "Advanced Care", text: "Modern treatment, diagnostics and surgery under one roof." },
              { Icon: Users, title: "Community Impact", text: "Support rescuers. Serve the voiceless. Build compassion." },
              { Icon: HandHeart, title: "Long-Term Vision", text: "The medical hub for a decentralised care network across Rourkela." },
              { Icon: HomeIcon, title: "A Legacy of Healing", text: "Where every life is valued and every being matters." },
            ].map(({ Icon, title, text }, i, arr) => (
              <li
                key={title}
                className={`flex items-start gap-4 ${
                  i < arr.length - 1 ? "lg:border-r lg:border-foreground/15 lg:pr-6" : ""
                }`}
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-foreground/20 bg-background text-[hsl(82_30%_22%)]">
                  <Icon className="h-5 w-5" strokeWidth={1.5} />
                </span>
                <div>
                  <div className="text-[11px] font-medium uppercase tracking-[0.22em] text-foreground">
                    {title}
                  </div>
                  <div className="mt-2 text-xs leading-relaxed text-muted-foreground md:text-sm">
                    {text}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Phase 1 Funding — Financials, Facilities, Inside the Hospital */}
      <Phase1FundingSection />

      {/* The System — collaborative framework */}
      <SystemSection />


      <footer className="border-t border-border/60 bg-background py-8 text-center text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
        Mohalle Mastane · Investor Roadmap · For Animals. For People. For The Planet.
      </footer>
    </main>
  );
}

function SystemSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [roadmapOpen, setRoadmapOpen] = useState(false);
  const active = openIndex !== null ? systemPillars[openIndex] : null;

  return (
    <section
      id="the-system"
      className="relative scroll-mt-32 overflow-hidden border-t border-border/60 bg-[hsl(82_18%_96%)] px-6 py-20 md:px-12 md:py-28 lg:px-16"
    >
      <div className="mx-auto max-w-[1400px]">
        {/* Header */}
        <div className="reveal flex flex-col items-start gap-4 border-b border-foreground/20 pb-10 md:flex-row md:items-end md:justify-between md:pb-12">
          <div>
            <div className="text-[10px] uppercase tracking-[0.32em] text-[hsl(82_30%_28%)]">
              Nexus of Coexistence
            </div>
            <h2 className="mt-3 font-display text-4xl leading-tight text-foreground md:text-6xl">
              The System
            </h2>
            <div className="mt-3 text-sm uppercase tracking-[0.22em] text-muted-foreground">
              A Collaborative Framework for Compassionate Change
            </div>
          </div>
          <div className="text-xs uppercase tracking-[0.28em] text-[hsl(82_30%_28%)] md:text-right">
            For Animals. <br className="hidden md:block" /> For People. For The Planet.
          </div>
        </div>

        {/* 2x2 interactive grid */}
        <ol className="mt-12 grid auto-rows-fr grid-cols-2 gap-3 md:gap-6">
          {systemPillars.map((pillar, i) => {
            const { Icon, n, title, sub, text, image } = pillar;
            return (
              <li key={n} className="reveal" style={{ animationDelay: `${i * 80}ms` }}>
                <button
                  type="button"
                  onClick={() => setOpenIndex(i)}
                  className="group flex h-full w-full flex-col rounded-2xl border border-foreground/15 bg-background p-4 text-left transition-all duration-500 hover:-translate-y-1 hover:border-foreground/30 hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(82_30%_22%)] md:rounded-[28px] md:p-7"
                >
                  <div className="flex items-start gap-2 md:gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[hsl(82_30%_22%)] font-display text-[11px] text-[hsl(60_30%_94%)] md:h-12 md:w-12 md:text-sm">
                      {n}
                    </span>
                    <div className="min-w-0 flex-1">
                      <div className="font-display text-base leading-tight text-foreground md:text-[1.75rem]">
                        {title}
                      </div>
                      <div className="mt-1 text-[9px] uppercase tracking-[0.22em] text-muted-foreground md:mt-1.5 md:text-[11px] md:tracking-[0.3em]">
                        {sub}
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 overflow-hidden rounded-xl bg-[hsl(82_30%_22%)]/5 md:mt-6 md:rounded-2xl">
                    <img
                      src={image}
                      alt={title}
                      loading="lazy"
                      className="aspect-[4/3] h-auto w-full object-cover"
                    />
                  </div>

                  <p className="mt-4 text-[11px] leading-relaxed text-foreground/75 md:mt-6 md:text-base md:leading-[1.55] md:text-foreground/80">
                    {text}
                  </p>

                  <div className="mt-auto flex items-center justify-between pt-4 md:pt-6">
                    <span className="hidden h-10 w-10 items-center justify-center rounded-full bg-[hsl(82_30%_22%)]/10 text-[hsl(82_30%_22%)] md:flex">
                      <Icon className="h-5 w-5" strokeWidth={1.6} />
                    </span>
                    <span className="ml-auto flex h-8 w-8 items-center justify-center rounded-full bg-[hsl(82_30%_22%)] text-[hsl(60_30%_94%)] transition-transform duration-500 group-hover:translate-x-1 md:h-10 md:w-10">
                      <ArrowRight className="h-3.5 w-3.5 md:h-4 md:w-4" strokeWidth={1.75} />
                    </span>
                  </div>
                </button>
              </li>
            );
          })}
        </ol>


        {/* Compact 3-step roadmap timeline */}
        <div className="reveal mt-10 rounded-2xl border border-foreground/15 bg-background p-6 md:p-9">
          <div className="flex flex-col items-start gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                The Journey
              </div>
              <h3 className="mt-2 font-display text-2xl leading-tight text-foreground md:text-3xl">
                The Roadmap
              </h3>
            </div>
            <button
              type="button"
              onClick={() => setRoadmapOpen(true)}
              className="group inline-flex items-center gap-2 rounded-full bg-[hsl(82_30%_22%)] px-5 py-2.5 text-[11px] uppercase tracking-[0.22em] text-[hsl(60_30%_94%)] transition-colors hover:bg-[hsl(82_30%_18%)]"
            >
              View Full Roadmap
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" strokeWidth={2} />
            </button>
          </div>

          <ol className="relative mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="pointer-events-none absolute left-0 right-0 top-4 hidden h-px bg-foreground/15 md:block" />
            {roadmapPhases.map((phase, i) => (
              <li
                key={phase.tag}
                className={`relative flex flex-col overflow-hidden rounded-xl ${
                  phase.accent
                    ? "border border-[hsl(82_30%_22%)]/30 bg-[hsl(82_30%_22%)]/5 ring-1 ring-[hsl(82_30%_22%)]/15"
                    : ""
                }`}
              >
                {phase.accent && (
                  <img
                    src={sevaBhavanaHospital.url}
                    alt="Seva Bhavana — the planned Central Animal Hospital entrance with caregivers and a rescued dog"
                    className="h-40 w-full object-cover md:h-44"
                    loading="lazy"
                  />
                )}
                <div className={`flex flex-1 flex-col gap-3 ${phase.accent ? "p-5" : ""}`}>
                  <div className="flex items-center gap-3">
                    <span
                      className={`relative z-10 flex h-9 w-9 items-center justify-center rounded-full font-display text-xs ${
                        phase.accent
                          ? "border border-[hsl(82_30%_22%)]/40 bg-[hsl(82_30%_22%)]/10 text-[hsl(82_30%_22%)]"
                          : "border border-foreground/25 bg-background text-foreground"
                      }`}
                    >
                      {i + 1}
                    </span>
                    <div
                      className={`text-[10px] uppercase tracking-[0.28em] ${
                        phase.accent ? "text-[hsl(82_30%_22%)]" : "text-muted-foreground"
                      }`}
                    >
                      {phase.tag}
                    </div>
                  </div>
                  <div className="font-display text-base leading-snug text-foreground md:text-lg">
                    {phase.title}
                  </div>
                  <p className="text-xs leading-relaxed text-foreground/70">
                    <span className="uppercase tracking-[0.18em] text-muted-foreground">Goal · </span>
                    {phase.goal}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        {/* Footer band */}
        <div className="reveal mt-12 flex flex-wrap items-center justify-between gap-4 rounded-sm bg-[hsl(82_30%_22%)] px-6 py-5 text-[hsl(60_30%_94%)] md:px-8">
          <div className="text-xs uppercase tracking-[0.28em]">
            Together, we build Oneness Oasis.
          </div>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[11px] uppercase tracking-[0.22em] text-[hsl(60_30%_94%)]/80">
            <span>For Animals.</span>
            <span>For People.</span>
            <span>For The Planet.</span>
          </div>
        </div>
      </div>

      {/* Card detail bottom sheet */}
      <Sheet open={openIndex !== null} onOpenChange={(o) => !o && setOpenIndex(null)}>
        <SheetContent
          side="bottom"
          className="max-h-[90vh] overflow-y-auto rounded-t-2xl border-foreground/15 bg-background p-0"
        >
          {active && (
            <div className="mx-auto max-w-3xl px-6 py-8 md:px-10 md:py-10">
              <SheetHeader className="space-y-4 text-left">
                <div className="flex items-center gap-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[hsl(82_30%_22%)] font-display text-sm text-[hsl(60_30%_94%)]">
                    {active.n}
                  </span>
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                      {active.sub}
                    </div>
                    <SheetTitle className="mt-2 font-display text-3xl leading-tight text-foreground md:text-4xl">
                      {active.title}
                    </SheetTitle>
                  </div>
                </div>
                <div className="overflow-hidden rounded-2xl bg-[hsl(82_30%_22%)]/5">
                  <img
                    src={active.image}
                    alt={active.title}
                    className="aspect-[16/10] h-auto w-full object-cover"
                  />
                </div>
                <SheetDescription className="text-base leading-relaxed text-foreground/75">
                  {active.details.body}
                </SheetDescription>
              </SheetHeader>

              <div className="mt-6 text-[10px] uppercase tracking-[0.28em] text-[hsl(82_30%_28%)]">
                {active.details.heading}
              </div>
              <ul className="mt-4 space-y-3">
                {active.details.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-sm leading-relaxed text-foreground/85">
                    <CircleCheck className="mt-0.5 h-4 w-4 shrink-0 text-[hsl(82_30%_28%)]" strokeWidth={1.5} />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </SheetContent>
      </Sheet>

      {/* Full roadmap bottom sheet */}
      <Sheet open={roadmapOpen} onOpenChange={setRoadmapOpen}>
        <SheetContent
          side="bottom"
          className="max-h-[92vh] overflow-y-auto rounded-t-2xl border-foreground/15 bg-background p-0"
        >
          <div className="mx-auto max-w-4xl px-6 py-8 md:px-10 md:py-10">
            <SheetHeader className="space-y-2 text-left">
              <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                The Journey
              </div>
              <SheetTitle className="font-display text-3xl leading-tight text-foreground md:text-4xl">
                The Full Roadmap
              </SheetTitle>
              <SheetDescription className="text-sm leading-relaxed text-foreground/75">
                Building a self-sustaining model of care, step by step — rooted in community, driven by compassion.
              </SheetDescription>
            </SheetHeader>

            <ol className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-3">
              {roadmapPhases.map((phase, i) => (
                <li
                  key={phase.tag}
                  className={`flex flex-col overflow-hidden rounded-xl border ${
                    phase.accent
                      ? "border-[hsl(82_30%_22%)]/40 bg-[hsl(82_30%_22%)]/5 text-foreground ring-1 ring-[hsl(82_30%_22%)]/20"
                      : "border-foreground/15 bg-background text-foreground"
                  }`}
                  style={{ animationDelay: `${i * 80}ms` }}
                >
                  {phase.accent && (
                    <img
                      src={sevaBhavanaHospital.url}
                      alt="Seva Bhavana — the planned Central Animal Hospital entrance with caregivers and a rescued dog"
                      className="h-44 w-full object-cover lg:h-48"
                      loading="lazy"
                    />
                  )}
                  <div className="flex flex-1 flex-col p-6">
                  <div
                    className={`text-[10px] uppercase tracking-[0.28em] ${
                      phase.accent ? "text-[hsl(82_30%_22%)]" : "text-muted-foreground"
                    }`}
                  >
                    {phase.tag}
                  </div>
                  <div
                    className="mt-3 font-display text-xl leading-tight text-foreground md:text-2xl"
                  >
                    {phase.title}
                  </div>

                  <ul className="mt-5 space-y-3">
                    {phase.items.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm leading-relaxed">
                        <CircleCheck
                          className="mt-0.5 h-4 w-4 shrink-0 text-[hsl(82_30%_28%)]"
                          strokeWidth={1.5}
                        />
                        <span className="text-foreground/80">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {phase.focus && (
                    <div className="mt-5 rounded-sm bg-[hsl(82_30%_22%)]/8 p-4 ring-1 ring-[hsl(82_30%_22%)]/20">
                      <div className="text-[10px] uppercase tracking-[0.22em] text-[hsl(82_30%_22%)]">
                        {phase.focus.label}
                      </div>
                      <p className="mt-1.5 text-xs leading-relaxed text-foreground/80">
                        {phase.focus.text}
                      </p>
                    </div>
                  )}

                  <div
                    className="mt-6 flex items-start gap-2 border-t border-foreground/15 pt-4 text-xs leading-relaxed text-foreground/70"
                  >
                    <ArrowRight className="mt-0.5 h-3.5 w-3.5 shrink-0" strokeWidth={1.75} />
                    <span>
                      <span className="uppercase tracking-[0.18em]">Goal · </span>
                      {phase.goal}
                    </span>
                  </div>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </SheetContent>
      </Sheet>
    </section>
  );
}

const fundingBreakdown = [
  {
    label: "Construction & Civil Works",
    pct: 30,
    amount: "₹15.00 L",
    swatch: "hsl(82 30% 22%)",
    detail: "Hospital structure, foundation, civil works, plumbing, electrical, sanitation and finishing.",
  },
  {
    label: "Medical Equipment",
    pct: 20,
    amount: "₹10.00 L",
    swatch: "hsl(82 22% 35%)",
    detail: "Surgical tools, anesthesia machines, monitors, OT lights, recovery beds and critical care kit.",
  },
  {
    label: "Diagnostics & Lab Setup",
    pct: 15,
    amount: "₹7.50 L",
    swatch: "hsl(45 20% 38%)",
    detail: "X-ray, ultrasound, blood analyzers, microscopes and laboratory consumables.",
  },
  {
    label: "Operations (1 Year)",
    pct: 15,
    amount: "₹7.50 L",
    swatch: "hsl(38 25% 55%)",
    detail: "Veterinarian and paramedic salaries, medicines, utilities and running costs for the first year.",
  },
  {
    label: "Ambulance & Rescue Van",
    pct: 10,
    amount: "₹5.00 L",
    swatch: "hsl(38 30% 65%)",
    detail: "Equipped mobile rescue vehicle with paramedic kit for citywide emergency response.",
  },
  {
    label: "Administrative & Misc.",
    pct: 10,
    amount: "₹5.00 L",
    swatch: "hsl(45 20% 78%)",
    detail: "Licenses, software, training, office setup and a small contingency reserve.",
  },
];

const keyFacilities = [
  { title: "OPD & Emergency Unit", text: "Immediate care for all emergencies and critical cases." },
  { title: "Surgery & OT", text: "State-of-the-art operation theatre and sterile surgical environment." },
  { title: "Diagnostics & Lab", text: "In-house X-ray, blood tests, ultrasound and laboratory diagnostics." },
  { title: "Recovery Wards", text: "Post-operative and critical care recovery wards." },
  { title: "Isolation Units", text: "Separate isolation for infectious diseases (Rabies, Parvo, Distemper)." },
  { title: "Mobile Rescue Support", text: "Equipped vehicle and paramedic team for emergency rescues." },
  { title: "Veterinary Accommodation", text: "On-call rooms and facilities for veterinary professionals." },
];

function Phase1FundingSection() {
  const [scopeOpen, setScopeOpen] = useState(false);
  const total = fundingBreakdown.reduce((s, x) => s + x.pct, 0); // 100

  return (
    <section
      id="phase-1-funding"
      className="relative scroll-mt-32 border-t border-border/60 bg-[hsl(45_28%_94%)] px-6 py-20 md:px-12 md:py-28 lg:px-16"
    >
      <div className="mx-auto max-w-[1500px]">
        {/* Header */}
        <div className="flex flex-col gap-6 border-b border-foreground/15 pb-10 md:flex-row md:items-end md:justify-between">
          <div className="flex items-start gap-5">
            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-md bg-[hsl(82_30%_18%)] text-[hsl(45_30%_95%)] md:h-16 md:w-16">
              <IndianRupee className="h-6 w-6 md:h-7 md:w-7" strokeWidth={1.5} />
            </span>
            <div>
              <div className="text-[10px] uppercase tracking-[0.32em] text-[hsl(82_30%_28%)]">
                Phase 1 · Funding Scope
              </div>
              <h2 className="mt-2 font-display text-3xl uppercase tracking-tight text-[hsl(82_30%_18%)] md:text-5xl">
                Financials & Facilities
              </h2>
              <div className="mt-2 font-display text-base italic text-[hsl(38_30%_42%)] md:text-lg">
                Transparent. Accountable. Purpose-Driven.
              </div>
            </div>
          </div>
          <p className="max-w-sm font-display text-sm italic leading-relaxed text-foreground/80 md:text-right md:text-base">
            Every rupee builds a future where animals heal, communities grow
            and compassion becomes a way of life.
          </p>
        </div>

        {/* Financials block */}
        <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            <div className="overflow-hidden rounded-lg border border-foreground/10 bg-background p-2 md:p-4">
              <img
                src={phase1Financials.url}
                alt="Phase 1 fund utilisation — ₹50 Lakhs broken down across construction, medical equipment, diagnostics, operations, ambulance and administrative spend"
                className="h-auto w-full object-contain"
                loading="lazy"
              />
            </div>
          </div>

          <div className="flex flex-col justify-between lg:col-span-5">
            <div>
              <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                Total Funding Required
              </div>
              <div className="mt-3 flex items-baseline gap-3">
                <div className="font-display text-6xl leading-none text-[hsl(82_30%_18%)] md:text-7xl">
                  ₹50
                </div>
                <div className="font-display text-xl text-foreground/70 md:text-2xl">Lakhs</div>
              </div>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-foreground/75 md:text-base">
                The immediate goal for Phase 1 — to construct and operationalise
                Rourkela&apos;s first fully equipped animal hospital, the
                healing backbone of the wider Mohalle Mastane system.
              </p>

              <ul className="mt-8 space-y-3">
                {fundingBreakdown.slice(0, 3).map((f) => (
                  <li key={f.label} className="flex items-center gap-3 text-sm">
                    <span
                      className="h-3 w-3 shrink-0 rounded-sm"
                      style={{ backgroundColor: f.swatch }}
                    />
                    <span className="flex-1 text-foreground/85">{f.label}</span>
                    <span className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                      {f.pct}%
                    </span>
                    <span className="w-16 text-right font-medium tabular-nums text-foreground">
                      {f.amount}
                    </span>
                  </li>
                ))}
                <li className="pt-1 text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                  + {fundingBreakdown.length - 3} more line items
                </li>
              </ul>
            </div>

            <button
              type="button"
              onClick={() => setScopeOpen(true)}
              className="group mt-8 inline-flex w-fit items-center gap-3 rounded-full bg-[hsl(82_30%_22%)] px-6 py-3 text-[11px] uppercase tracking-[0.22em] text-[hsl(60_30%_94%)] transition-colors hover:bg-[hsl(82_30%_18%)]"
            >
              View Full Funding Scope
              <ArrowRight
                className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5"
                strokeWidth={2}
              />
            </button>
            <div className="sr-only" aria-hidden="true">{total}% allocated</div>
          </div>
        </div>

        {/* Key Facilities */}
        <div className="mt-20 border-t border-foreground/15 pt-14">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="text-[10px] uppercase tracking-[0.3em] text-[hsl(82_30%_28%)]">
                Space Allocation
              </div>
              <h3 className="mt-3 font-display text-3xl leading-tight text-foreground md:text-4xl">
                Key Facilities
              </h3>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-foreground/70 md:text-right">
              Seven dedicated zones designed for compassionate, scientific and
              uninterrupted animal care.
            </p>
          </div>

          <div className="mt-10 overflow-hidden rounded-lg border border-foreground/10 bg-background p-2 md:p-4">
            <img
              src={phase1KeyFacilities.url}
              alt="Phase 1 key facilities — OPD, Surgery & OT, Diagnostics, Recovery Wards, Isolation Units, Mobile Rescue Support and Veterinary Accommodation"
              className="h-auto w-full object-contain"
              loading="lazy"
            />
          </div>

          <ul className="mt-10 grid grid-cols-1 gap-x-10 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
            {keyFacilities.map((f, i) => (
              <li
                key={f.title}
                className="flex items-start gap-4 border-t border-foreground/15 pt-4"
              >
                <div className="font-display text-sm tabular-nums text-[hsl(82_30%_28%)]">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div>
                  <div className="text-[11px] font-medium uppercase tracking-[0.2em] text-foreground">
                    {f.title}
                  </div>
                  <div className="mt-1.5 text-xs leading-relaxed text-muted-foreground md:text-sm">
                    {f.text}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Inside the Hospital */}
        <div className="mt-20 border-t border-foreground/15 pt-14">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="text-[10px] uppercase tracking-[0.3em] text-[hsl(82_30%_28%)]">
                A Look Inside
              </div>
              <h3 className="mt-3 font-display text-3xl leading-tight text-foreground md:text-4xl">
                Inside the Hospital
              </h3>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-foreground/70 md:text-right">
              Six core units working in concert — from first response and
              surgery to recovery, isolation and citywide rescue.
            </p>
          </div>

          <div className="mt-10 space-y-6">
            <div className="overflow-hidden rounded-lg border border-foreground/10 bg-background p-2 md:p-4">
              <img
                src={phase1Inside1.url}
                alt="Inside the hospital, part one — OPD & Emergency Unit, Surgery & OT, and Diagnostics & Lab"
                className="h-auto w-full object-contain"
                loading="lazy"
              />
            </div>
            <div className="overflow-hidden rounded-lg border border-foreground/10 bg-background p-2 md:p-4">
              <img
                src={phase1Inside2.url}
                alt="Inside the hospital, part two — Recovery Wards, Isolation Units, and Mobile Rescue Support"
                className="h-auto w-full object-contain"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Full Funding Scope sheet */}
      <Sheet open={scopeOpen} onOpenChange={setScopeOpen}>
        <SheetContent
          side="bottom"
          className="max-h-[92vh] overflow-y-auto rounded-t-2xl border-foreground/15 bg-background p-0"
        >
          <div className="mx-auto max-w-4xl px-6 py-8 md:px-10 md:py-10">
            <SheetHeader className="space-y-3 text-left">
              <div className="text-[10px] uppercase tracking-[0.3em] text-[hsl(82_30%_28%)]">
                Phase 1 · Full Funding Scope
              </div>
              <SheetTitle className="font-display text-3xl leading-tight text-foreground md:text-4xl">
                ₹50 Lakhs · Line-by-Line Allocation
              </SheetTitle>
              <SheetDescription className="text-sm leading-relaxed text-foreground/75">
                A transparent breakdown of how every rupee is allocated to
                build, equip and operate Rourkela&apos;s first fully equipped
                animal hospital.
              </SheetDescription>
            </SheetHeader>

            <div className="mt-8 overflow-hidden rounded-xl border border-foreground/15">
              <div className="grid grid-cols-12 gap-4 border-b border-foreground/15 bg-[hsl(82_30%_22%)]/5 px-5 py-3 text-[10px] uppercase tracking-[0.22em] text-[hsl(82_30%_22%)]">
                <div className="col-span-6">Line Item</div>
                <div className="col-span-2 text-right">Share</div>
                <div className="col-span-4 text-right">Amount</div>
              </div>
              <ul>
                {fundingBreakdown.map((f) => (
                  <li
                    key={f.label}
                    className="grid grid-cols-12 items-start gap-4 border-b border-foreground/10 px-5 py-5 last:border-b-0"
                  >
                    <div className="col-span-12 md:col-span-6">
                      <div className="flex items-center gap-3">
                        <span
                          className="h-3 w-3 shrink-0 rounded-sm"
                          style={{ backgroundColor: f.swatch }}
                        />
                        <div className="text-sm font-medium uppercase tracking-[0.12em] text-foreground">
                          {f.label}
                        </div>
                      </div>
                      <p className="mt-2 pl-6 text-xs leading-relaxed text-foreground/70 md:text-sm">
                        {f.detail}
                      </p>
                    </div>
                    <div className="col-span-6 text-left text-xs uppercase tracking-[0.18em] text-muted-foreground md:col-span-2 md:text-right">
                      {f.pct}%
                    </div>
                    <div className="col-span-6 text-right font-display text-lg tabular-nums text-foreground md:col-span-4 md:text-xl">
                      {f.amount}
                    </div>
                  </li>
                ))}
                <li className="grid grid-cols-12 items-center gap-4 bg-[hsl(82_30%_22%)] px-5 py-4 text-[hsl(60_30%_94%)]">
                  <div className="col-span-6 text-[11px] uppercase tracking-[0.22em]">
                    Total Funding Required
                  </div>
                  <div className="col-span-2 text-right text-[11px] uppercase tracking-[0.22em]">
                    100%
                  </div>
                  <div className="col-span-4 text-right font-display text-2xl">
                    ₹50.00 L
                  </div>
                </li>
              </ul>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
              <div className="rounded-xl border border-foreground/15 bg-[hsl(82_30%_22%)]/5 p-5">
                <div className="text-[10px] uppercase tracking-[0.28em] text-[hsl(82_30%_28%)]">
                  Timeline
                </div>
                <div className="mt-2 font-display text-xl text-foreground">12 Months</div>
                <p className="mt-1 text-xs leading-relaxed text-foreground/70">
                  Construction, equipping and first year of full operations.
                </p>
              </div>
              <div className="rounded-xl border border-foreground/15 bg-[hsl(82_30%_22%)]/5 p-5">
                <div className="text-[10px] uppercase tracking-[0.28em] text-[hsl(82_30%_28%)]">
                  Capacity
                </div>
                <div className="mt-2 font-display text-xl text-foreground">7 Facility Zones</div>
                <p className="mt-1 text-xs leading-relaxed text-foreground/70">
                  OPD, OT, Diagnostics, Recovery, Isolation, Rescue and Vet Stay.
                </p>
              </div>
              <div className="rounded-xl border border-foreground/15 bg-[hsl(82_30%_22%)]/5 p-5">
                <div className="text-[10px] uppercase tracking-[0.28em] text-[hsl(82_30%_28%)]">
                  Impact
                </div>
                <div className="mt-2 font-display text-xl text-foreground">Citywide</div>
                <p className="mt-1 text-xs leading-relaxed text-foreground/70">
                  The medical backbone for a decentralised care network across Rourkela.
                </p>
              </div>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </section>
  );
}



