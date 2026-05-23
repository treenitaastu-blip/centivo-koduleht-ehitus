import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import heroImage from "@/assets/hero-painter.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Centivo Siseviimistlus — Krohvimine, Maalritööd, Fassaadid Tartus" },
      {
        name: "description",
        content:
          "Centivo Siseviimistlus pakub kvaliteetset krohvimist, maalritöid ja fassaaditöid Tartus ja Lõuna-Eestis. 20 aastat kogemust, paindlik etapiviisiline teostus. Hinnad alates 25€/h.",
      },
      { property: "og:title", content: "Centivo Siseviimistlus — Tartu" },
      {
        property: "og:description",
        content:
          "Krohvimine, maalritööd, fassaadid, lammutus ja ehitusprügi äravedu. Paindlik partner eraisikutele, ettevõtetele ja korteriühistutele.",
      },
      { property: "og:type", content: "website" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600;700&family=Inter:wght@400;500;600&display=swap",
      },
    ],
  }),
  component: Index,
});

type Service = {
  id: string;
  title: string;
  price: string;
  items: string[];
  iconVariant: "outline" | "circle" | "solid";
};

const services: Service[] = [
  {
    id: "krohvimine",
    title: "Krohvimine",
    price: "25€/h*",
    items: ["Kipskrohv (MP75)", "Tsementkrohv", "Masin- ja käsitsi krohvimine"],
    iconVariant: "outline",
  },
  {
    id: "maalritood",
    title: "Maalritööd",
    price: "25€/h*",
    items: ["Pahteldamine", "Värvimine", "Dekoratiivviimistlus"],
    iconVariant: "solid",
  },
  {
    id: "fassaadid",
    title: "Fassaaditööd",
    price: "Kokkuleppel",
    items: ["Märgfassaadid", "Soojustamine", "Viimistluskrohv"],
    iconVariant: "circle",
  },
  {
    id: "lammutus",
    title: "Lammutustööd",
    price: "25€/h*",
    items: ["Sisetööde lammutus", "Pinna ettevalmistus", "Ohutu teostus"],
    iconVariant: "outline",
  },
  {
    id: "prugi",
    title: "Ehitusprügi äravedu",
    price: "Objektipõhine",
    items: ["Kiire utiliseerimine", "Konteinerid kokkuleppel", "Hoiame objekti puhtana"],
    iconVariant: "solid",
  },
  {
    id: "noustamine",
    title: "Nõustamine & hindamine",
    price: "Tasuta päring",
    items: ["Individuaalne hinnang", "Etapiviisiline plaan", "Materjalide soovitused"],
    iconVariant: "circle",
  },
];

function ServiceIcon({ variant }: { variant: Service["iconVariant"] }) {
  if (variant === "outline") return <div className="size-6 border-2 border-brand-orange" />;
  if (variant === "circle") return <div className="size-6 bg-brand-orange/40 rounded-full" />;
  return <div className="size-6 bg-brand-dark" />;
}

function Index() {
  const [selected, setSelected] = useState<string[]>([]);
  const toggle = (id: string) =>
    setSelected((s) => (s.includes(id) ? s.filter((x) => x !== id) : [...s, id]));
  const selectedServices = services.filter((service) => selected.includes(service.id));

  return (
    <div className="min-h-screen bg-background text-foreground font-body">
      {/* Hero */}
      <header className="relative px-6 py-20 lg:py-32 overflow-hidden">
        <div className="mx-auto max-w-7xl grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-muted text-muted-foreground text-xs font-bold uppercase tracking-widest mb-6">
              <span className="size-2 bg-brand-orange rounded-full" />
              Tartu & Lõuna-Eesti
            </div>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-[0.95] tracking-tight mb-8 text-brand-dark">
              KVALITEETNE <br />
              <span className="text-brand-orange">SISEVIIMISTLUS</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-md mb-10 leading-relaxed">
              Krohvimine, maalritööd ja fassaadid. 20 aastat kogemust ning paindlik, etapiviisiline
              lähenemine igale objektile.
            </p>
            <div className="flex flex-wrap items-center gap-6">
              <a
                href="#teenused"
                className="px-8 py-4 bg-brand-orange text-primary-foreground font-bold rounded-sm hover:bg-brand-copper-hover transition-all uppercase tracking-wider text-sm"
              >
                Vaata teenuseid
              </a>
              <div className="flex flex-col">
                <span className="text-xs uppercase text-muted-foreground font-bold tracking-widest">
                  Alates
                </span>
                <span className="text-2xl font-display font-bold text-brand-orange">25€/h</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="w-full aspect-[4/5] overflow-hidden rounded-sm outline-1 -outline-offset-1 outline-border">
              <img
                src={heroImage}
                alt="Centivo maalrid teostavad siseviimistlust"
                width={1200}
                height={1408}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-surface p-8 shadow-2xl border border-border hidden md:block">
              <p className="text-4xl font-display font-bold leading-none mb-1">20+</p>
              <p className="text-xs uppercase tracking-widest text-muted-foreground font-bold">
                Aastat kogemust
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Services */}
      <section id="teenused" className="py-24 bg-surface-muted">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 tracking-tight text-brand-dark">
                Vali vajalik teenus
              </h2>
              <p className="text-muted-foreground max-w-xl">
                Hinnad on orienteeruvad ja sõltuvad objektist. Märgi teenused, mida vajad — koostame
                personaalse pakkumise.
              </p>
            </div>
            {selected.length > 0 && (
              <a
                href="#kontakt"
                className="px-6 py-3 bg-brand-orange text-accent-foreground font-bold uppercase tracking-wider text-xs rounded-sm hover:bg-brand-copper-hover transition-colors"
              >
                Küsi pakkumist ({selected.length})
              </a>
            )}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => {
              const active = selected.includes(s.id);
              return (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => toggle(s.id)}
                  className={`group text-left bg-surface p-8 border transition-all cursor-pointer ${
                    active
                      ? "border-brand-orange ring-2 ring-brand-orange/30"
                      : "border-border hover:border-brand-orange"
                  }`}
                >
                  <div className="flex justify-between items-start mb-6">
                    <div
                      className={`size-12 flex items-center justify-center transition-colors ${
                        active
                          ? "bg-brand-orange/10"
                          : "bg-surface-muted group-hover:bg-brand-orange/10"
                      }`}
                    >
                      <ServiceIcon variant={s.iconVariant} />
                    </div>
                    <span className="text-xl font-display font-bold text-brand-orange">
                      {s.price}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 uppercase tracking-tight font-display">
                    {s.title}
                  </h3>
                  <ul className="text-sm text-muted-foreground space-y-2 mb-8">
                    {s.items.map((it) => (
                      <li key={it}>• {it}</li>
                    ))}
                  </ul>
                  <div
                    className={`w-full py-3 border text-center font-bold text-xs uppercase tracking-widest transition-all ${
                      active
                        ? "bg-brand-orange text-primary-foreground border-brand-orange"
                        : "border-brand-dark text-brand-dark group-hover:bg-brand-dark group-hover:text-primary-foreground group-hover:border-brand-dark"
                    }`}
                  >
                    {active ? "✓ Valitud" : "Vali etapp"}
                  </div>
                </button>
              );
            })}
          </div>

          <p className="text-xs text-muted-foreground mt-8 max-w-3xl">
            * Orienteeruv miinimum tunnihind. Lõplik maksumus sõltub objektist, materjalidest ja
            töömahust. Suurematele objektidele teeme fikseeritud pakkumise.
          </p>
        </div>
      </section>

      {/* About / USP */}
      <section id="meist" className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid lg:grid-cols-2 gap-20">
            <div className="space-y-8">
              <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight tracking-tight text-brand-dark">
                Meie standard on <br />
                Sinu rahulolu.
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Centivo ei ole järjekordne ehitusbrigaad. Meie meeskonnal on 20 aastat kogemust
                siseviimistluse valdkonnas. Võtame vastu vaid tööd, mida oleme võimelised teostama
                kõrgeima standardiga — kuulame klienti ja pakume individuaalse lahenduse.
              </p>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="p-6 bg-surface-muted border border-border">
                  <h4 className="font-bold mb-2 uppercase text-xs tracking-widest text-brand-orange">
                    Paindlikkus
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Saab tellida etappide kaupa — tee täpselt nii palju kui vaja, oma ajakavas.
                  </p>
                </div>
                <div className="p-6 bg-surface-muted border border-border">
                  <h4 className="font-bold mb-2 uppercase text-xs tracking-widest text-brand-orange">
                    Täislahendus
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Lammutusest ja prügi äraveost krohvimise ja maalrtöödeni — kõik ühest kohast.
                  </p>
                </div>
                <div className="p-6 bg-surface-muted border border-border">
                  <h4 className="font-bold mb-2 uppercase text-xs tracking-widest text-brand-orange">
                    Kõigile klientidele
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Eraisikud, ettevõtted ja korteriühistud — leiame lahenduse pea kõigile.
                  </p>
                </div>
                <div className="p-6 bg-surface-muted border border-border">
                  <h4 className="font-bold mb-2 uppercase text-xs tracking-widest text-brand-orange">
                    Tartu & Lõuna-Eesti
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Peamine tööpiirkond. Kokkuleppel teostame töid ka kaugemal — võta ühendust.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-brand-dark text-primary-foreground p-12 relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="font-display text-3xl font-bold mb-6 tracking-tight">
                  Ei tea, kust alustada?
                </h3>
                <p className="text-[#E8E3DA] mb-8 leading-relaxed">
                  Pakume nõustamist ja hindamist. Kirjelda oma objekti — leiame just sulle sobiva
                  lahenduse ja anname ausa hinnangu.
                </p>
                <ul className="space-y-3 text-sm">
                  {[
                    "20 aastat kogemust meeskonnas",
                    "Individuaalne lähenemine, mitte üks hind kõigile",
                    "Paindlik etapiviisiline teostus",
                    "Standardkvaliteet — vastu võtame vaid tööd, mida suudame teha hästi",
                  ].map((t) => (
                    <li key={t} className="flex gap-3">
                      <span className="text-brand-orange font-bold">→</span>
                      <span className="text-[#F7F5F1]">{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="absolute -right-20 -bottom-20 size-64 bg-brand-orange/10 rounded-full blur-3xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="kontakt" className="py-24 bg-surface-muted">
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 tracking-tight text-brand-dark">
              Võta ühendust
            </h2>
            <p className="text-muted-foreground mb-10 max-w-md">
              Kirjuta oma objektist ja vajadustest — vastame 24 tunni jooksul ja leiame sulle parima
              lahenduse.
            </p>
            <div className="space-y-6">
              <div>
                <span className="block text-xs uppercase tracking-widest text-muted-foreground font-bold mb-1">
                  Telefon
                </span>
                <a
                  href="tel:+37258299962"
                  className="text-2xl font-display font-bold hover:text-brand-orange transition-colors"
                >
                  +372 58299962
                </a>
              </div>
              <div>
                <span className="block text-xs uppercase tracking-widest text-muted-foreground font-bold mb-1">
                  E-post
                </span>
                <a
                  href="mailto:info@centivo.ee"
                  className="text-2xl font-display font-bold hover:text-brand-orange transition-colors"
                >
                  info@centivo.ee
                </a>
              </div>
              <div>
                <span className="block text-xs uppercase tracking-widest text-muted-foreground font-bold mb-1">
                  Piirkond
                </span>
                <span className="text-lg">Tartu, Tartumaa & Lõuna-Eesti</span>
              </div>
              <div className="flex gap-4 pt-4">
                <a
                  href="#"
                  className="px-5 py-2.5 border border-brand-dark bg-transparent text-brand-dark font-bold text-xs uppercase tracking-widest hover:bg-brand-dark hover:text-primary-foreground transition-colors"
                >
                  Instagram
                </a>
                <a
                  href="#"
                  className="px-5 py-2.5 border border-brand-dark bg-transparent text-brand-dark font-bold text-xs uppercase tracking-widest hover:bg-brand-dark hover:text-primary-foreground transition-colors"
                >
                  Facebook
                </a>
              </div>
            </div>
          </div>

          <form
            className="bg-brand-dark text-primary-foreground p-10 space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              const form = e.currentTarget;
              const data = new FormData(form);
              const subject = encodeURIComponent("Päring Centivo kodulehelt");
              const body = encodeURIComponent(
                `Nimi: ${data.get("nimi")}\nKontakt: ${data.get("kontakt")}\n\nValitud teenused: ${
                  selectedServices.map((service) => service.title).join(", ") || "—"
                }\n\nSõnum:\n${data.get("sonum")}`,
              );
              window.location.href = `mailto:info@centivo.ee?subject=${subject}&body=${body}`;
            }}
          >
            <h3 className="font-display text-2xl font-bold mb-2">Saada päring</h3>
            <p className="text-[#E8E3DA] text-sm mb-6">
              {selected.length > 0
                ? `Valitud ${selected.length} teenust — lisame need automaatselt päringusse.`
                : "Vali eelnevalt teenused või kirjelda oma vajadust allpool."}
            </p>
            {selectedServices.length > 0 && (
              <div className="mb-6 rounded-sm border border-[#DED8CE]/20 bg-[#F7F5F1]/5 p-4">
                <p className="mb-3 text-[10px] font-bold uppercase tracking-widest text-brand-orange">
                  Valitud teenused
                </p>
                <div className="flex flex-wrap gap-2">
                  {selectedServices.map((service) => (
                    <span
                      key={service.id}
                      className="rounded-full border border-brand-orange/40 px-3 py-1 text-xs font-semibold text-[#F7F5F1]"
                    >
                      {service.title}
                    </span>
                  ))}
                </div>
                <p className="mt-3 text-sm text-[#E8E3DA]">
                  Need teenused lisatakse automaatselt päringusse.
                </p>
              </div>
            )}
            <input
              name="nimi"
              required
              placeholder="Sinu nimi"
              className="w-full bg-brand-zinc border-none p-4 text-sm text-primary-foreground focus:ring-2 focus:ring-brand-orange focus:outline-none placeholder:text-[#E8E3DA]/70"
            />
            <input
              name="kontakt"
              required
              placeholder="E-post või telefon"
              className="w-full bg-brand-zinc border-none p-4 text-sm text-primary-foreground focus:ring-2 focus:ring-brand-orange focus:outline-none placeholder:text-[#E8E3DA]/70"
            />
            <textarea
              name="sonum"
              rows={4}
              required
              placeholder="Kirjelda lühidalt oma objekti ja tööde mahtu"
              className="w-full bg-brand-zinc border-none p-4 text-sm text-primary-foreground focus:ring-2 focus:ring-brand-orange focus:outline-none placeholder:text-[#E8E3DA]/70 resize-none"
            />
            <button
              type="submit"
              className="w-full py-4 bg-brand-orange text-accent-foreground font-bold uppercase tracking-widest text-sm hover:bg-brand-copper-hover transition-all"
            >
              Saada päring
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brand-dark text-primary-foreground py-12 border-t border-brand-dark">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 border-b border-[#DED8CE]/20 pb-12">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="size-6 bg-brand-orange rounded-sm" />
                <span className="font-display text-lg font-bold tracking-tight uppercase">
                  Centivo
                </span>
              </div>
              <p className="text-[#E8E3DA] text-sm">
                Kvaliteetne siseviimistlus Tartus ja Lõuna-Eestis.
              </p>
            </div>
            <div className="flex gap-6">
              <a
                href="#"
                className="text-[#E8E3DA] hover:text-brand-orange transition-colors font-bold text-xs uppercase tracking-widest"
              >
                Instagram
              </a>
              <a
                href="#"
                className="text-[#E8E3DA] hover:text-brand-orange transition-colors font-bold text-xs uppercase tracking-widest"
              >
                Facebook
              </a>
            </div>
          </div>
          <div className="pt-8 flex flex-col md:flex-row justify-between gap-4 text-[10px] text-[#E8E3DA] uppercase tracking-widest font-bold">
            <span>© {new Date().getFullYear()} Centivo Siseviimistlus</span>
            <span>Tartu, Eesti</span>
          </div>
        </div>
      </footer>

      {selectedServices.length > 0 && (
        <div className="fixed inset-x-0 bottom-4 z-40 px-4">
          <div className="mx-auto flex max-w-xl items-center justify-between gap-4 rounded-full border border-border bg-surface/95 px-4 py-3 shadow-2xl backdrop-blur-md">
            <span className="text-sm font-bold text-brand-dark">
              {selectedServices.length === 1
                ? "1 teenus valitud"
                : `${selectedServices.length} teenust valitud`}
            </span>
            <a
              href="#kontakt"
              className="shrink-0 rounded-full bg-brand-orange px-4 py-2 text-xs font-bold uppercase tracking-wider text-primary-foreground transition-colors hover:bg-brand-copper-hover"
            >
              Jätka päringuga
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
