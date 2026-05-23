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
      "Selgitame lihtsalt, millal piisab pahteldamisest ja millal on mõistlik pind enne krohvida.",
    date: "2025-01-10",
    readTime: "4 min",
  },
  {
    title: "Mida arvestada enne maalritööde tellimist?",
    slug: "mida-arvestada-enne-maalritoode-tellimist",
    category: "Maalritööd",
    excerpt:
      "Hea lõpptulemus algab pinna seisukorrast, ettevalmistusest ja realistlikust töömahust.",
    date: "2025-01-10",
    readTime: "3 min",
  },
  {
    title: "Märgfassaad - millal see on mõistlik lahendus?",
    slug: "margfassaad-millal-see-on-moistlik-lahendus",
    category: "Fassaaditööd",
    excerpt:
      "Märgfassaadi sobivus sõltub hoone seisukorrast, aluspinnast ja soovitud lõpptulemusest.",
    date: "2025-01-10",
    readTime: "5 min",
  },
  {
    title: "Kas ehitustöid saab tellida ka etappide kaupa?",
    slug: "kas-ehitustoid-saab-tellida-ka-etappide-kaupa",
    category: "Tööde planeerimine",
    excerpt:
      "Kõiki töid ei pea tellima korraga. Sageli on mõistlik alustada ühest etapist ja liikuda edasi vastavalt vajadusele.",
    date: "2025-01-10",
    readTime: "3 min",
  },
];
