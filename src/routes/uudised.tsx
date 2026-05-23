import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/uudised")({
  head: () => ({
    meta: [
      { title: "Uudised | Centivo" },
      {
        name: "description",
        content:
          "Centivo nõuanded, objektide ülevaated ja kasulikud artiklid siseviimistluse, krohvimise, maalritööde ja fassaaditööde kohta.",
      },
    ],
  }),
  component: Uudised,
});

function Uudised() {
  return (
    <main className="min-h-screen bg-background text-foreground px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <p className="mb-4 text-xs font-bold uppercase tracking-widest text-brand-orange">
          Centivo
        </p>
        <h1 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-brand-dark">
          Uudised
        </h1>
        <p className="mt-6 text-muted-foreground leading-relaxed">
          Siia lisame peagi nõuanded, objektide ülevaated ja kasulikud artiklid
          siseviimistluse, krohvimise, maalritööde ja fassaaditööde kohta.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="/#kontakt"
            className="px-6 py-3 bg-brand-orange text-primary-foreground font-bold uppercase tracking-wider text-xs rounded-sm hover:bg-brand-copper-hover transition-colors"
          >
            Küsi pakkumist
          </a>
          <a
            href="/"
            className="px-6 py-3 border border-brand-dark text-brand-dark font-bold uppercase tracking-wider text-xs rounded-sm hover:bg-brand-dark hover:text-primary-foreground transition-colors"
          >
            Tagasi avalehele
          </a>
        </div>
      </div>
    </main>
  );
}
