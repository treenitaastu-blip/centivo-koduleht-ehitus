import { createFileRoute, Link } from "@tanstack/react-router";
import { projects } from "@/data/projects";

export const Route = createFileRoute("/tehtud-tood/")({
  head: () => ({
    meta: [
      { title: "Teenused | Centivo" },
      {
        name: "description",
        content:
          "Centivo teenused: krohvimine, maalritööd, märgfassaadid, lammutus ja ehitusprügi äravedu Tartus ning Lõuna-Eestis.",
      },
    ],
  }),
  component: TehtudTood,
});

function TehtudTood() {
  return (
    <main className="min-h-screen bg-background text-foreground px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="mb-4 text-xs font-bold uppercase tracking-widest text-brand-orange">
            Centivo teenused
          </p>
          <h1 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-brand-dark">
            Teenused
          </h1>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            Siit leiad ülevaate töödest ja teenustest, millega Centivo saab aidata.
            Teenuste kirjeldused aitavad paremini mõista tööde sisu, võimalikke
            etappe ja seda, millist infot on pakkumise küsimisel kasulik jagada.
          </p>
          <p className="mt-6 text-sm font-bold uppercase tracking-widest text-brand-dark">
            20 aastat kogemust | Tartu ja Lõuna-Eesti | Tööd etappide kaupa
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.slug}
              className="border border-border bg-surface p-8 shadow-sm"
            >
              <div className="mb-8 flex flex-wrap items-center justify-between gap-3">
                <span className="rounded-full bg-brand-orange/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-brand-orange">
                  {project.status}
                </span>
              </div>

              <p className="mb-3 text-xs font-bold uppercase tracking-widest text-muted-foreground">
                {project.category}
              </p>
              <h2 className="font-display text-2xl font-bold tracking-tight text-brand-dark">
                {project.title}
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {project.shortDescription}
              </p>

              <div className="mt-8">
                <p className="mb-3 text-xs font-bold uppercase tracking-widest text-brand-orange">
                  Teenused
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.services.map((service) => (
                    <span
                      key={service}
                      className="border border-border bg-background px-3 py-1 text-xs text-muted-foreground"
                    >
                      {service}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-8 border-t border-border pt-6">
                <Link
                  to="/tehtud-tood/$slug"
                  params={{ slug: project.slug }}
                  className="text-xs font-bold uppercase tracking-widest text-brand-dark transition-colors hover:text-brand-orange"
                >
                  Loe lähemalt
                </Link>
              </div>
            </article>
          ))}
        </div>

        <section className="mt-16 bg-brand-dark p-8 text-primary-foreground md:p-10">
          <div className="max-w-3xl">
            <h2 className="font-display text-3xl font-bold tracking-tight">
              Soovid teenuse kohta pakkumist?
            </h2>
            <p className="mt-4 text-[#E8E3DA] leading-relaxed">
              Kirjelda oma objekti ja aitame hinnata, milline tööde maht või etapp oleks
              mõistlik.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="/#paring"
              className="px-6 py-3 bg-brand-orange text-primary-foreground font-bold uppercase tracking-wider text-xs rounded-sm hover:bg-brand-copper-hover transition-colors"
            >
              Küsi pakkumist
            </a>
            <a
              href="/"
              className="px-6 py-3 border border-[#DED8CE]/40 text-primary-foreground font-bold uppercase tracking-wider text-xs rounded-sm hover:bg-primary-foreground hover:text-brand-dark transition-colors"
            >
              Tagasi avalehele
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
