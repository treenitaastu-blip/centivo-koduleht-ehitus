export type ProjectSection = {
  title: string;
  paragraphs: string[];
};

export type Project = {
  title: string;
  slug: string;
  category: string;
  shortDescription: string;
  services: string[];
  inquiryServiceIds: string[];
  status: string;
  sections: ProjectSection[];
};

export const projects: Project[] = [
  {
    title: "Märgfassaadi tööd",
    slug: "margfassaadi-tood",
    category: "Fassaaditööd",
    shortDescription:
      "Märgfassaadi tööde ülevaade: aluspinna hindamine, ettevalmistus, armeerimine ja viimistlus vastavalt hoone seisukorrale.",
    services: ["Märgfassaad", "ettevalmistus", "viimistlus"],
    inquiryServiceIds: ["fassaadid"],
    status: "Teenus",
    sections: [
      {
        title: "Teenuse iseloom",
        paragraphs: [
          "Märgfassaadi tööde puhul algab mõistlik lahendus hoone seisukorra hindamisest. Tööde mahtu saab täpsemalt hinnata alles siis, kui on selge, milline on olemasolev aluspind, kas varasem viimistlus püsib ja millised kohad vajavad rohkem ettevalmistust.",
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
          "Fassaaditöid planeerides tasub kirjeldada, kas vajadus on kogu fassaadi, ainult osa pinna või järgmise tööetapi ettevalmistuse järele. Samuti on oluline teada, kas eesmärk on viimistlus, soojustamine või olemasoleva lahenduse parandamine.",
          "Centivo lähtub fassaaditöödel objektipõhisest hinnangust. See aitab valida tööde järjekorra ja vältida olukorda, kus tehakse liiga vähe ettevalmistust või valitakse lahendus, mis ei sobi konkreetse hoone seisukorraga.",
        ],
      },
    ],
  },
  {
    title: "Maalritööd ja pindade ettevalmistus",
    slug: "maalritood-ja-pindade-ettevalmistus",
    category: "Maalritööd",
    shortDescription:
      "Maalritööde teenus koos pindade hindamise, paranduste, pahtelduse, lihvimise, kruntimise ja värvimisega.",
    services: ["Pahteldus", "kruntimine", "värvimine"],
    inquiryServiceIds: ["maalritood"],
    status: "Teenus",
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
    title: "Krohvimistööd siseviimistluses",
    slug: "krohvimistood-siseviimistluses",
    category: "Krohvimine",
    shortDescription:
      "Krohvimistööd aitavad luua sobiva aluspinna edasiseks siseviimistluseks, kui pind vajab suuremat tasandamist või tugevamat aluskihti.",
    services: ["Kipskrohv", "pindade ettevalmistus"],
    inquiryServiceIds: ["krohvimine"],
    status: "Teenus",
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
    shortDescription:
      "Lammutus ja ehitusprügi äravedu aitavad objekti ette valmistada järgmiseks tööetapiks või eraldi korrastustööks.",
    services: ["Lammutus", "koristus", "ehitusprügi äravedu"],
    inquiryServiceIds: ["lammutus", "prugi"],
    status: "Teenus",
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
  {
    title: "Ehitusjärgne koristus",
    slug: "ehitusjargne-koristus",
    category: "Koristus",
    shortDescription:
      "Põhjalik koristus pärast ehitus- või remonditööd, et ruumid oleks valmis koheseks kasutuseks.",
    services: ["Ehitusjärgne koristus", "Remondijärgne koristus", "Ruumide ettevalmistus"],
    inquiryServiceIds: ["ehitusjargne-koristus"],
    status: "Teenus",
    sections: [
      {
        title: "Millal on ehitusjärgne koristus vajalik?",
        paragraphs: [
          "Ehitusjärgne koristus on vajalik pärast ehitus-, remondi- või viimistlustöid, kui ruumidesse jääb tolmu, materjalijääke ja üldist ehitusmustust. Ka siis, kui põhitöö on valmis, vajavad pinnad sageli eraldi korrastamist enne ruumide kasutamist.",
          "Eesmärk on teha ruumid kasutamiseks valmis selge ja praktilise koristusetapiga. Töö täpne maht sõltub sellest, milliseid töid objektil tehti ja millises seisus ruumid pärast seda on.",
        ],
      },
      {
        title: "Mida töö võib sisaldada?",
        paragraphs: [
          "Töö võib sisaldada ehitustolmu eemaldamist pindadelt, põrandate ja nähtavate pindade puhastamist ning tööala korrastamist nii, et ruum oleks kasutatav. Vajadusel saab koristuse siduda viimistlus- või remonditööde viimase etapiga.",
          "Lõplik töömaht lepitakse kokku vastavalt objekti seisukorrale. Mõnel juhul piisab üldisest korrastamisest, teisel juhul on vaja põhjalikumat pindade puhastamist ja tööala ettevalmistamist kasutuseks.",
        ],
      },
      {
        title: "Kellele see teenus sobib?",
        paragraphs: [
          "Ehitusjärgne koristus sobib eraisikutele, ettevõtetele ja korteriühistutele, kelle ruumid vajavad korrastamist pärast remonti, viimistlust või ehitustöid. Teenust saab tellida ka eraldi viimase etapina, kui põhitööd on juba tehtud.",
          "Koristus võib olla vajalik pärast krohvimist, pahteldamist, värvimist, lammutust või muid siseviimistlustöid, kus siseruumidesse jääb tolmu ja tööjälgi. Vajaduse saab hinnata objekti kirjelduse või fotode põhjal.",
        ],
      },
      {
        title: "Kuidas pakkumist küsida?",
        paragraphs: [
          "Pakkumise küsimisel tasub kirjeldada objekti, milliseid töid seal tehti ja millises seisus ruumid praegu on. Kui võimalik, lisa info ruumide arvu, ligikaudse suuruse ja ligipääsu kohta.",
          "Lõplik pakkumine sõltub töö mahust, objekti seisukorrast ja kokkulepitud ootustest. Teenuse päringu nupp viib kontaktvormile, kus ehitusjärgne koristus lisatakse valitud teenusena päringusse.",
        ],
      },
    ],
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
