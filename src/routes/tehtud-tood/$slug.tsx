import { createFileRoute, notFound } from "@tanstack/react-router";
import { getProjectBySlug } from "@/data/projects";

export const Route = createFileRoute("/tehtud-tood/$slug")({
  loader: ({ params }) => {
    const project = getProjectBySlug(params.slug);

    if (!project) {
      throw notFound();
    }

    return { project };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.project.title ?? "Teenus"} | Centivo` },
      {
        name: "description",
        content:
          loaderData?.project.shortDescription ??
          "Centivo teenuste kirjeldused ja töömahu selgitused Tartus ning Lõuna-Eestis.",
      },
    ],
  }),
  component: TehtudTooDetail,
});

function TehtudTooDetail() {
  const { project } = Route.useLoaderData();
  const inquiryParams = new URLSearchParams();

  project.inquiryServiceIds.forEach((serviceId) => {
    inquiryParams.append("teenus", serviceId);
  });

  const inquiryHref = `/?${inquiryParams.toString()}#paring`;

  return (
    <main className="min-h-screen bg-background text-foreground px-6 py-24">
      <article className="mx-auto max-w-4xl">
        <header>
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-brand-orange/15 px-3 py-1 text-xs font-bold uppercase tracking-widest text-brand-dark">
              {project.status}
            </span>
            <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
              {project.category}
            </span>
          </div>

          <h1 className="mt-8 font-display text-4xl font-bold tracking-tight text-brand-dark md:text-5xl">
            {project.title}
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            {project.shortDescription}
          </p>

          <div className="mt-8">
            <p className="mb-3 text-xs font-bold uppercase tracking-widest text-brand-dark">
              Teenused
            </p>
            <div className="flex flex-wrap gap-2">
              {project.services.map((service) => (
                <span
                  key={service}
                  className="border border-border bg-surface px-3 py-1 text-xs text-muted-foreground"
                >
                  {service}
                </span>
              ))}
            </div>
          </div>
        </header>

        <div className="mt-12 space-y-10">
          {project.sections.map((section) => (
            <section key={section.title}>
              <h2 className="font-display text-2xl font-bold tracking-tight text-brand-dark">
                {section.title}
              </h2>
              <div className="mt-4 space-y-4">
                {section.paragraphs.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="leading-relaxed text-muted-foreground"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </section>
          ))}
        </div>
      </article>

      <section className="mx-auto mt-16 max-w-4xl bg-brand-dark p-8 text-primary-foreground md:p-10">
        <div className="max-w-3xl">
          <h2 className="font-display text-3xl font-bold tracking-tight">
            Soovid seda teenust tellida?
          </h2>
          <p className="mt-4 text-dark-panel-muted leading-relaxed">
            Kirjelda oma objekti ja aitame hinnata, milline tööde maht või etapp oleks
            mõistlik.
          </p>
        </div>
        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href={inquiryHref}
            className="px-6 py-3 bg-brand-orange text-brand-zinc font-bold uppercase tracking-wider text-xs rounded-sm hover:bg-brand-copper-hover transition-colors"
          >
            Küsi pakkumist
          </a>
          <a
            href="/tehtud-tood"
            className="px-6 py-3 border border-dark-panel-muted/40 text-primary-foreground font-bold uppercase tracking-wider text-xs rounded-sm hover:bg-primary-foreground hover:text-brand-dark transition-colors"
          >
            Tagasi teenuste juurde
          </a>
        </div>
      </section>
    </main>
  );
}
