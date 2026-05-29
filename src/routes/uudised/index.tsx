import { createFileRoute, Link } from "@tanstack/react-router";
import { posts } from "@/data/posts";

export const Route = createFileRoute("/uudised/")({
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
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="mb-4 text-xs font-bold uppercase tracking-widest text-brand-dark">
            Centivo nõuanded
          </p>
          <h1 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-brand-dark">
            Uudised
          </h1>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            Loe Centivo nõuandeid ja ülevaateid siseviimistluse, krohvimise,
            maalritööde, fassaaditööde ja tööde planeerimise kohta.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="border border-border bg-surface p-8 shadow-sm"
            >
              <div className="mb-8 flex flex-wrap items-center justify-between gap-3">
                <span className="rounded-full bg-brand-orange/15 px-3 py-1 text-xs font-bold uppercase tracking-widest text-brand-dark">
                  {post.category}
                </span>
                <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                  {post.readTime}
                </span>
              </div>

              <h2 className="font-display text-2xl font-bold tracking-tight text-brand-dark">
                {post.title}
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {post.excerpt}
              </p>

              <div className="mt-8 flex flex-wrap items-center justify-between gap-3 border-t border-border pt-6">
                <time dateTime={post.date} className="text-xs text-muted-foreground">
                  {post.date}
                </time>
                <Link
                  to="/uudised/$slug"
                  params={{ slug: post.slug }}
                  className="text-xs font-bold uppercase tracking-widest text-brand-dark transition-colors hover:text-brand-orange"
                >
                  Loe artiklit
                </Link>
              </div>
            </article>
          ))}
        </div>

        <section className="mt-16 bg-brand-dark p-8 text-primary-foreground md:p-10">
          <div className="max-w-3xl">
            <h2 className="font-display text-3xl font-bold tracking-tight">
              Vajad nõu oma objekti osas?
            </h2>
            <p className="mt-4 text-dark-panel-muted leading-relaxed">
              Kirjelda oma olukorda ja aitame hinnata, milline töö või etapp oleks
              mõistlik esimesena ette võtta.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="/#paring"
              className="px-6 py-3 bg-brand-orange text-brand-zinc font-bold uppercase tracking-wider text-xs rounded-sm hover:bg-brand-copper-hover transition-colors"
            >
              Küsi pakkumist
            </a>
            <a
              href="/"
              className="px-6 py-3 border border-dark-panel-muted/40 text-primary-foreground font-bold uppercase tracking-wider text-xs rounded-sm hover:bg-primary-foreground hover:text-brand-dark transition-colors"
            >
              Tagasi avalehele
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
