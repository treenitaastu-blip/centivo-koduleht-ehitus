import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import heroImage from "@/assets/hero-painter.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Centivo Siseviimistlus — Krohvimine, Maalritööd, Fassaadid Tartus" },
      {
        name: "description",
        content:
          "Centivo Siseviimistlus pakub kvaliteetset krohvimist, maalritöid ja fassaaditöid Tartus ja Lõuna-Eestis. 20 aastat kogemust, paindlik etapiviisiline teostus. Küsi personaalset hinnapakkumist vastavalt objektile.",
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
};

const services: Service[] = [
  {
    id: "krohvimine",
    title: "Krohvimine",
    price: "Küsi hinnapakkumist",
    items: ["Kipskrohv (MP75)", "Tsementkrohv", "Masin- ja käsitsi krohvimine"],
  },
  {
    id: "maalritood",
    title: "Maalritööd",
    price: "Küsi hinnapakkumist",
    items: ["Pahteldamine", "Värvimine", "Dekoratiivviimistlus"],
  },
  {
    id: "fassaadid",
    title: "Fassaaditööd",
    price: "Küsi hinnapakkumist",
    items: ["Märgfassaadid", "Soojustamine", "Viimistluskrohv"],
  },
  {
    id: "lammutus",
    title: "Lammutustööd",
    price: "Küsi hinnapakkumist",
    items: ["Sisetööde lammutus", "Pinna ettevalmistus", "Ohutu teostus"],
  },
  {
    id: "prugi",
    title: "Ehitusprügi äravedu",
    price: "Küsi hinnapakkumist",
    items: ["Kiire utiliseerimine", "Konteinerid vastavalt vajadusele", "Hoiame objekti puhtana"],
  },
  {
    id: "ehitusjargne-koristus",
    title: "Ehitusjärgne koristus",
    price: "Küsi hinnapakkumist",
    items: [
      "Põhjalik koristus pärast ehitus- või remonditööd",
      "Ruumide ettevalmistus koheseks kasutuseks",
      "Sobib pärast viimistlus-, remondi- või ehitustöid",
    ],
  },
  {
    id: "noustamine",
    title: "Nõustamine & hindamine",
    price: "Küsi hinnapakkumist",
    items: ["Individuaalne hinnang", "Etapiviisiline plaan", "Materjalide soovitused"],
  },
];

const serviceIds = new Set(services.map((service) => service.id));

function Index() {
  const [selected, setSelected] = useState<string[]>([]);

  useEffect(() => {
    const requestedServiceIds = new URLSearchParams(window.location.search).getAll("teenus");
    const validServiceIds = requestedServiceIds.filter(
      (serviceId, index) =>
        serviceIds.has(serviceId) && requestedServiceIds.indexOf(serviceId) === index,
    );

    if (validServiceIds.length > 0) {
      setSelected(validServiceIds);
    }
  }, []);

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
              EHITUSTÖÖD <br />
              <span className="text-brand-orange">TARTUMAAL</span>
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
              <div className="text-sm font-bold uppercase tracking-widest text-brand-orange">
                Küsi hinnapakkumist
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="w-full aspect-[4/5] overflow-hidden rounded-sm outline-1 -outline-offset-1 outline-border">
              <img
                src={heroImage}
                alt="Töömees teostab siseviimistluse käigus krohvimistöid"
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
                Märgi teenused, mida vajad — koostame personaalse hinnapakkumise vastavalt
                objektile.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => {
              const active = selected.includes(s.id);
              return (
                <article
                  key={s.id}
                  className={`bg-surface p-8 border transition-all ${
                    active
                      ? "border-brand-orange ring-2 ring-brand-orange/30"
                      : "border-border hover:border-brand-orange/60"
                  }`}
                >
                  <div className="mb-6 flex items-start justify-between gap-4">
                    <div>
                      <div className="mb-4 h-0.5 w-10 bg-brand-orange/40" />
                      <h3 className="text-xl font-bold uppercase tracking-tight font-display">
                        {s.title}
                      </h3>
                    </div>
                    <div className="text-right">
                      <span className="text-xl font-display font-bold text-brand-orange">
                        {s.price}
                      </span>
                    </div>
                  </div>
                  <ul className="text-sm text-muted-foreground space-y-2 mb-8">
                    {s.items.map((it) => (
                      <li key={it}>• {it}</li>
                    ))}
                  </ul>
                  <div className="mt-8">
                    <button
                      type="button"
                      onClick={() => toggle(s.id)}
                      className={`w-full py-3 border text-center font-bold text-xs uppercase tracking-widest transition-all ${
                        active
                          ? "bg-brand-orange text-primary-foreground border-brand-orange"
                          : "border-brand-dark text-brand-dark hover:bg-brand-dark hover:text-primary-foreground hover:border-brand-dark"
                      }`}
                    >
                      {active ? "✓ Valitud" : "Vali"}
                    </button>
                  </div>
                </article>
              );
            })}
          </div>

          <p className="text-xs text-muted-foreground mt-8 max-w-3xl">
            Hinnapakkumine sõltub töö mahust, objektist ja tingimustest.
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
                siseviimistluse valdkonnas. Pakume läbimõeldud ja kvaliteetseid lahendusi, lähtudes
                iga kliendi soovidest.
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
                    Eraisikud, ettevõtted ja korteriühistud — leiame kõigi jaoks sobiva lahenduse.
                  </p>
                </div>
                <div className="p-6 bg-surface-muted border border-border">
                  <h4 className="font-bold mb-2 uppercase text-xs tracking-widest text-brand-orange">
                    Tartu & Lõuna-Eesti
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Peamine tööpiirkond. Vajadusel teostame töid ka kaugemal — võta ühendust.
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
                  href="mailto:centivoehitus@gmail.com"
                  className="text-2xl font-display font-bold hover:text-brand-orange transition-colors"
                >
                  centivoehitus@gmail.com
                </a>
              </div>
              <div>
                <span className="block text-xs uppercase tracking-widest text-muted-foreground font-bold mb-1">
                  Piirkond
                </span>
                <span className="text-lg">Tartu, Tartumaa & Lõuna-Eesti</span>
              </div>
            </div>
          </div>

          <form
            id="paring"
            className="scroll-mt-28 bg-brand-dark text-primary-foreground p-10 space-y-4"
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
              window.location.href = `mailto:centivoehitus@gmail.com?subject=${subject}&body=${body}`;
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
      <footer className="bg-brand-dark text-primary-foreground py-14 border-t border-brand-dark">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-10 border-b border-[#DED8CE]/20 pb-12 md:grid-cols-2 lg:grid-cols-4">
            <div className="lg:col-span-1">
              <div className="flex items-center gap-2 mb-3">
                <div className="size-6 bg-brand-orange rounded-sm" />
                <span className="font-display text-lg font-bold tracking-tight uppercase">
                  Centivo OÜ
                </span>
              </div>
              <p className="text-sm leading-relaxed text-[#E8E3DA]">
                Ehitustööd, krohvimine, maalritööd ja märgfassaadi tööd Tartus,
                Tartumaal ja Lõuna-Eestis.
              </p>
              <p className="mt-4 text-xs font-bold uppercase tracking-widest text-[#E8E3DA]">
                Registrikood: 17512951
              </p>
            </div>

            <div>
              <h2 className="mb-4 text-xs font-bold uppercase tracking-widest text-brand-orange">
                Kontakt
              </h2>
              <div className="space-y-3 text-sm text-[#E8E3DA]">
                <p>
                  Telefon:{" "}
                  <a
                    href="tel:+37258299962"
                    className="font-semibold text-primary-foreground transition-colors hover:text-brand-orange"
                  >
                    +372 58299962
                  </a>
                </p>
                <p>
                  Email:{" "}
                  <a
                    href="mailto:centivoehitus@gmail.com"
                    className="font-semibold text-primary-foreground transition-colors hover:text-brand-orange"
                  >
                    centivoehitus@gmail.com
                  </a>
                </p>
                <p>Piirkond: Tartu, Tartumaa ja Lõuna-Eesti</p>
              </div>
            </div>

            <div>
              <h2 className="mb-4 text-xs font-bold uppercase tracking-widest text-brand-orange">
                Teenused
              </h2>
              <ul className="space-y-2 text-sm text-[#E8E3DA]">
                <li>Krohvimine</li>
                <li>Maalritööd</li>
                <li>Märgfassaadi tööd</li>
                <li>Lammutus</li>
                <li>Ehitusprügi äravedu</li>
                <li>Ehitusjärgne koristus</li>
              </ul>
            </div>

            <div>
              <h2 className="mb-4 text-xs font-bold uppercase tracking-widest text-brand-orange">
                Lingid
              </h2>
              <nav className="flex flex-col gap-2 text-sm">
                <a href="/" className="text-[#E8E3DA] transition-colors hover:text-brand-orange">
                  Avaleht
                </a>
                <a
                  href="/tehtud-tood"
                  className="text-[#E8E3DA] transition-colors hover:text-brand-orange"
                >
                  Teenused
                </a>
                <a
                  href="/uudised"
                  className="text-[#E8E3DA] transition-colors hover:text-brand-orange"
                >
                  Uudised
                </a>
                <a
                  href="/#kontakt"
                  className="text-[#E8E3DA] transition-colors hover:text-brand-orange"
                >
                  Kontakt
                </a>
                <a
                  href="https://www.instagram.com/centivoest/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pt-2 font-bold uppercase tracking-widest text-brand-orange transition-colors hover:text-primary-foreground"
                >
                  @centivoest
                </a>
                <a
                  href="https://www.facebook.com/CentivoEhitus"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold uppercase tracking-widest text-brand-orange transition-colors hover:text-primary-foreground"
                >
                  Facebook
                </a>
              </nav>
            </div>
          </div>
          <div className="pt-8 flex flex-col md:flex-row justify-between gap-4 text-[10px] text-[#E8E3DA] uppercase tracking-widest font-bold">
            <span>© {new Date().getFullYear()} Centivo OÜ</span>
            <a href="/#paring" className="transition-colors hover:text-brand-orange">
              Küsi pakkumist
            </a>
          </div>
        </div>
      </footer>

      {selectedServices.length > 0 && (
        <div className="fixed inset-x-0 bottom-4 z-40 px-4">
          <div className="mx-auto flex max-w-xl items-center justify-between gap-4 rounded-full border border-border bg-surface/95 px-4 py-3 backdrop-blur-md">
            <span className="text-sm font-bold text-brand-dark">
              {selectedServices.length === 1
                ? "1 teenus valitud"
                : `${selectedServices.length} teenust valitud`}
            </span>
            <a
              href="#paring"
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
