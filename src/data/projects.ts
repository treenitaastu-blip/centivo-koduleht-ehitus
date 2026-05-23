export type ProjectSection = {
  title: string;
  paragraphs: string[];
};

export type Project = {
  title: string;
  slug: string;
  category: string;
  location: string;
  shortDescription: string;
  services: string[];
  year: number;
  status: string;
  sections: ProjectSection[];
};

export const projects: Project[] = [
  {
    title: "Fassaaditööd Tartus",
    slug: "fassaaditood-tartus",
    category: "Fassaaditööd",
    location: "Tartu",
    shortDescription:
      "Fassaadipindade ettevalmistus ja viimistlus eramule või väiksemale objektile.",
    services: ["Märgfassaad", "ettevalmistus", "viimistlus"],
    year: 2025,
    status: "Tehtud töö",
    sections: [
      {
        title: "Töö iseloom",
        paragraphs: [
          "Fassaaditööde puhul algab mõistlik lahendus hoone seisukorra hindamisest. Enne tööde mahtu saab täpsemalt hinnata alles siis, kui on selge, milline on olemasolev aluspind, kas varasem viimistlus püsib ja millised kohad vajavad rohkem ettevalmistust.",
          "Märgfassaad on praktiline lahendus paljudel eramajadel ja väiksematel objektidel, kuid tööde järjekord sõltub alati konkreetsest hoonest. Oluline on vaadata nii fassaadipinda, soklit, avade ümbrust kui ka töötingimusi.",
        ],
      },
      {
        title: "Ettevalmistus ja aluspind",
        paragraphs: [
          "Enne viimistlust tuleb aluspind puhastada, kontrollida ja vajadusel parandada. Kui pind on nõrk või kahjustunud, ei ole mõistlik uut viimistluskihti lihtsalt peale kanda. Sellisel juhul tuleb probleemsed kohad esmalt korrastada.",
          "Töö võib sisaldada pindade ettevalmistust, armeerimist ja viimistlust, kuid täpne lahendus sõltub objekti seisukorrast. Lõplik töömaht ei selgu ainult ruutmeetrite järgi, vaid ka sellest, milline on hoone tegelik lähteolukord.",
        ],
      },
      {
        title: "Mida tellimisel läbi mõelda",
        paragraphs: [
          "Fassaaditöid planeerides tasub kirjeldada, kas soov on teha kogu fassaad, ainult osa pinnast või valmistada objekt ette järgmiseks etapiks. Samuti on oluline teada, kas eesmärk on viimistlus, soojustamine või olemasoleva lahenduse parandamine.",
          "Centivo lähtub fassaaditöödel objektipõhisest hinnangust. See aitab valida tööde järjekorra ja vältida olukorda, kus tehakse liiga vähe ettevalmistust või valitakse lahendus, mis ei sobi konkreetse hoone seisukorraga.",
        ],
      },
    ],
  },
  {
    title: "Maalritööd Haagel",
    slug: "maalritood-haagel",
    category: "Maalritööd",
    location: "Haage",
    shortDescription:
      "Siseviimistluse maalritööd koos pindade ettevalmistuse ja korrektse lõppviimistlusega.",
    services: ["Pahteldus", "kruntimine", "värvimine"],
    year: 2025,
    status: "Tehtud töö",
    sections: [
      {
        title: "Maalritöö ei alga värvimisest",
        paragraphs: [
          "Maalritööde lõpptulemus sõltub suuresti sellest, millises seisus on seinad ja laed enne värvimist. Kui aluspind on ebatasane, praguline või halvasti parandatud, ei tee ainult värv pinda korralikuks.",
          "Seetõttu tuleb enne värvimist hinnata paranduste, pahtelduse, lihvimise ja kruntimise vajadust. Mõnel objektil piisab väiksematest parandustest, teisel juhul on vaja põhjalikumat ettevalmistust.",
        ],
      },
      {
        title: "Pinna ettevalmistus",
        paragraphs: [
          "Tüüpiline töö võib sisaldada pindade puhastamist, väiksemate vigade parandamist, pahteldamist, lihvimist ja kruntimist. Need etapid aitavad luua ühtlasema aluse, millele värv saab paremini kinnituda.",
          "Lõplik töömaht sõltub olemasolevast seinte ja lagede seisukorrast. Vana viimistlus, varasemad parandused, valguse langemine ja soovitud lõpptulemus mõjutavad kõik seda, kui põhjalik ettevalmistus on mõistlik.",
        ],
      },
      {
        title: "Selge eesmärk aitab töömahtu hinnata",
        paragraphs: [
          "Tellimisel on kasulik läbi mõelda, kas eesmärk on kiire värskendus või põhjalikum siseviimistlus. Erinevad ruumid võivad vajada erinevat lähenemist, näiteks eluruum, trepikoda või tehniline pind ei pea alati olema sama detailsusastmega.",
          "Centivo aitab hinnata, millised ettevalmistused on vajalikud enne värvimist ja millist tööde järjekorda on mõistlik kasutada. Praktiline eelhinnang aitab vältida ületöötamist, aga ka liiga vähest ettevalmistust.",
        ],
      },
    ],
  },
  {
    title: "Krohvimistööd Tartumaal",
    slug: "krohvimistood-tartumaal",
    category: "Krohvimine",
    location: "Tartumaa",
    shortDescription:
      "Krohvimistööd ja aluspindade ettevalmistus enne järgmist siseviimistluse etappi.",
    services: ["Kipskrohv", "pindade ettevalmistus"],
    year: 2025,
    status: "Tehtud töö",
    sections: [
      {
        title: "Krohvimine loob aluse järgmistele töödele",
        paragraphs: [
          "Krohvimistööd on sageli vajalikud siis, kui pind vajab suuremat tasandamist või tugevamat aluskihti enne järgmist siseviimistluse etappi. Krohvimine aitab korrigeerida ebatasasusi ja valmistada seina ette pahtelduseks, värvimiseks või muuks viimistluseks.",
          "Kõik pinnad ei vaja sama lahendust. Mõnel juhul piisab väiksemast parandusest, kuid märgatavalt ebaühtlase või uue aluspinna puhul võib krohvimine olla mõistlikum esimene samm.",
        ],
      },
      {
        title: "Kipskrohv või tsementkrohv",
        paragraphs: [
          "Kipskrohvi ja tsementkrohvi valik sõltub ruumist, aluspinnast ja soovitud tulemusest. Kipskrohv sobib sageli kuivadesse siseruumidesse, kus on vaja saavutada ühtlane aluspind edasiseks viimistluseks.",
          "Tsementkrohv võib olla asjakohane seal, kus aluspinnalt oodatakse suuremat tugevust või niiskuskindlust. Üks materjal ei ole alati teisest parem, sest õige valik tuleb teha konkreetse pinna ja kasutusolukorra põhjal.",
        ],
      },
      {
        title: "Tööde järjekord",
        paragraphs: [
          "Krohvimise puhul on tähtis hinnata, mis tuleb enne ja mis pärast. Enne töö alustamist tuleb vaadata aluspinna kandevõimet, puhtust ja seda, kas pind vajab täiendavat ettevalmistust.",
          "Centivo saab krohvimistöid teha eraldi etapina või osana laiemast siseviimistlusest. Selline lähenemine sobib hästi olukorras, kus klient soovib kõigepealt korrastada aluspinna ja otsustada järgmised viimistlustööd pärast seda.",
        ],
      },
    ],
  },
  {
    title: "Lammutus ja ehitusprügi äravedu",
    slug: "lammutus-ja-ehitusprugi-aravedu",
    category: "Lammutus",
    location: "Lõuna-Eesti",
    shortDescription:
      "Objekti ettevalmistus järgmiseks tööetapiks koos lammutuse, koristuse ja prügi äraveoga.",
    services: ["Lammutus", "koristus", "ehitusprügi äravedu"],
    year: 2025,
    status: "Tehtud töö",
    sections: [
      {
        title: "Ettevalmistus järgmisteks töödeks",
        paragraphs: [
          "Lammutus ja ehitusprügi äravedu on sageli esimene etapp enne krohvimist, maalritöid või muud viimistlust. Vana materjali eemaldamine aitab näha, millises seisus on aluspind ja milliseid parandusi tuleb enne järgmisi töid teha.",
          "Sellist tööd saab tellida eraldi etapina või koos edasiste viimistlustöödega. Etapiline lähenemine on kasulik siis, kui kogu töömaht ei ole alguses veel selge.",
        ],
      },
      {
        title: "Materjalide eemaldamine ja tööala korrastamine",
        paragraphs: [
          "Töö võib sisaldada vana viimistluse, kergemate konstruktsioonide või muude eemaldamist vajavate materjalide lahtivõtmist. Pärast seda tuleb tööala korrastada nii, et järgmise etapi tegijatel oleks võimalik liikuda edasi arusaadava ja puhtama lähteolukorraga.",
          "Ehitusprügi puhul on oluline mõelda ka sorteerimisele ja äraveole. Täpne korraldus sõltub objekti asukohast, ligipääsust, materjalide mahust ja sellest, milliseid töid samal objektil veel tehakse.",
        ],
      },
      {
        title: "Paindlik töö etappide kaupa",
        paragraphs: [
          "Kõiki ehitus- ja viimistlustöid ei pea tellima korraga. Mõnikord on mõistlik alustada lammutuse ja koristusega, seejärel hinnata aluspindu ning otsustada, kas järgmisena on vaja krohvimist, pahteldust, värvimist või fassaaditöid.",
          "Centivo aitab sellise töö puhul hinnata praktilist järjekorda. Eesmärk on hoida töömaht arusaadav ja liikuda edasi nii, et järgmine etapp ei peaks parandama eelmise etapi tegemata jätmisi.",
        ],
      },
    ],
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
