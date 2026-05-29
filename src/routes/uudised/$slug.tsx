import { createFileRoute, notFound } from "@tanstack/react-router";
import { getPostBySlug } from "@/data/posts";

export const Route = createFileRoute("/uudised/$slug")({
  loader: ({ params }) => {
    const post = getPostBySlug(params.slug);

    if (!post) {
      throw notFound();
    }

    return { post };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.post.title ?? "Uudis"} | Centivo` },
      {
        name: "description",
        content:
          loaderData?.post.excerpt ??
          "Centivo nõuanded siseviimistluse, krohvimise, maalritööde ja fassaaditööde kohta.",
      },
    ],
  }),
  component: UudisDetail,
});

function UudisDetail() {
  const { post } = Route.useLoaderData();

  return (
    <main className="min-h-screen bg-background text-foreground px-6 py-24">
      <article className="mx-auto max-w-4xl">
        <header>
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-brand-orange/15 px-3 py-1 text-xs font-bold uppercase tracking-widest text-brand-dark">
              {post.category}
            </span>
            <time
              dateTime={post.date}
              className="text-xs font-bold uppercase tracking-widest text-muted-foreground"
            >
              {post.date}
            </time>
            <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
              {post.readTime}
            </span>
          </div>

          <h1 className="mt-8 font-display text-4xl font-bold tracking-tight text-brand-dark md:text-5xl">
            {post.title}
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            {post.excerpt}
          </p>
        </header>

        <div className="mt-12 space-y-10">
          {post.sections.map((section) => (
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
            href="/uudised"
            className="px-6 py-3 border border-dark-panel-muted/40 text-primary-foreground font-bold uppercase tracking-wider text-xs rounded-sm hover:bg-primary-foreground hover:text-brand-dark transition-colors"
          >
            Tagasi uudistesse
          </a>
        </div>
      </section>
    </main>
  );
}
