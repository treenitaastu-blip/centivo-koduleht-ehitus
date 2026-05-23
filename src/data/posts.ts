export type Post = {
  title: string;
  slug: string;
  category: string;
  excerpt: string;
  date: string;
  readTime: string;
};

export const posts: Post[] = [
  {
    title: "Kuidas valida krohvimise ja pahteldamise vahel?",
    slug: "kuidas-valida-krohvimise-ja-pahteldamise-vahel",
    category: "Krohvimine",
    excerpt:
      "Valik sõltub seina ebatasasusest, pinna seisukorrast ja soovitud lõppviimistlusest. Pahteldus sobib väiksemate paranduste jaoks, krohvimine suurema aluspinna korrigeerimiseks.",
    date: "2025-01-10",
    readTime: "4 min",
  },
  {
    title: "Mida arvestada enne maalritööde tellimist?",
    slug: "mida-arvestada-enne-maalritoode-tellimist",
    category: "Maalritööd",
    excerpt:
      "Maalritöö ei alga värvipurgist. Enne tasub hinnata pinna seisukorda, vajalikku parandust, lihvimist ja kruntimist, sest ettevalmistus määrab suure osa lõpptulemusest.",
    date: "2025-01-10",
    readTime: "3 min",
  },
  {
    title: "Märgfassaad - millal see on mõistlik lahendus?",
    slug: "margfassaad-millal-see-on-moistlik-lahendus",
    category: "Fassaaditööd",
    excerpt:
      "Märgfassaadi sobivus sõltub hoone seisukorrast, aluspinnast, soojustuse ja viimistluse vajadusest ning töötingimustest. Lõplik lahendus selgub objekti põhjal.",
    date: "2025-01-10",
    readTime: "5 min",
  },
  {
    title: "Kas ehitustöid saab tellida ka etappide kaupa?",
    slug: "kas-ehitustoid-saab-tellida-ka-etappide-kaupa",
    category: "Tööde planeerimine",
    excerpt:
      "Tööd saab vajadusel jagada etappideks: lammutus, krohvimine, maalritööd, fassaad või ehitusprügi äravedu. See aitab hoida töömahu ja eelarve paremini kontrolli all.",
    date: "2025-01-10",
    readTime: "3 min",
  },
];
