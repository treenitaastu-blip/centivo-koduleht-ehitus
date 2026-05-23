export type PostSection = {
  title: string;
  paragraphs: string[];
};

export type Post = {
  title: string;
  slug: string;
  category: string;
  excerpt: string;
  date: string;
  readTime: string;
  sections: PostSection[];
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
    sections: [
      {
        title: "Valik algab aluspinnast",
        paragraphs: [
          "Krohvimise ja pahteldamise vahel ei ole mõistlik valida ainult hinna või töö nimetuse järgi. Kõigepealt tuleb vaadata, milline on seina või lae tegelik seisukord. Oluline on pinna ebatasasus, varasem viimistlus, pragude ulatus, nurkade sirgus ja see, millist lõpptulemust soovitakse saavutada.",
          "Kui pind on üldjoontes sirge ja tugev, kuid vajab enne värvimist või tapeetimist väiksemaid parandusi, on tihti piisav pahteldamine. Kui sein on aga märgatavalt laineline, aluspind on ebaühtlane või vajab uus pind korralikku aluskihti, tuleb kaaluda krohvimist.",
        ],
      },
      {
        title: "Millal piisab pahteldamisest?",
        paragraphs: [
          "Pahteldus sobib olukorda, kus aluspind on juba enam-vähem korras, kuid vajab viimistluse jaoks siledamaks tegemist. Näiteks saab pahtliga parandada väiksemaid lohke, kriimustusi, kruviauke, vuugikohti ja muid pindmisi ebatasasusi.",
          "Pahteldus on tavaliselt viimistlusetapp, mitte suurema konstruktiivse korrigeerimise lahendus. Kui seina tasapind kõigub palju või vana pind on nõrk, ei pruugi ainult pahtel anda püsivat ja korrektset tulemust. Sellisel juhul võib töö alguses näida lihtne, kuid hiljem tuleb samu kohti uuesti parandada.",
        ],
      },
      {
        title: "Millal on vaja krohvimist?",
        paragraphs: [
          "Krohvimine on mõistlik siis, kui pinda tuleb olulisemalt tasandada või luua uus tugev aluskiht. Seda kasutatakse näiteks tellis-, plokk- või betoonpindadel, samuti olukordades, kus sein vajab suuremat sirgestamist enne edasist viimistlust.",
          "Siseruumides kasutatakse sageli kipskrohvi, mis sobib kuivadesse ruumidesse ja aitab suuremaid ebatasasusi korrigeerida. Tsementkrohv on asjakohane seal, kus aluspinnalt oodatakse suuremat niiskuskindlust või tugevust. Õige krohvitüübi valik sõltub ruumist, aluspinnast ja töö eesmärgist.",
        ],
      },
      {
        title: "Lõppviimistlus mõjutab otsust",
        paragraphs: [
          "Valikut mõjutab ka see, mis tuleb seinale pärast aluspinna ettevalmistust. Värvitud sein toob ebatasasused paremini esile kui mõni tekstuursem viimistlus. Hele valgus, suured aknad ja pikad seinapinnad muudavad pinna kvaliteedi eriti nähtavaks.",
          "Kui eesmärk on sile ja puhas värvipind, peab aluspind olema piisavalt sirge ja ühtlane juba enne lõppviimistlust. Mõnikord tähendab see korralikku pahteldust, mõnikord krohvimist ja sellele järgnevat pahteldamist. Üks töö ei asenda alati teist.",
        ],
      },
      {
        title: "Objektipõhine hinnang aitab vältida ületöötamist",
        paragraphs: [
          "Ei krohvimine ega pahteldamine ole automaatselt parem valik. Mõistlik lahendus sõltub objekti seisukorrast ja oodatavast tulemusest. Üleliigne krohvimine võib olla tarbetu kulu, kuid liiga vähene ettevalmistus võib lõpptulemuse ära rikkuda.",
          "Centivo lähtub sellistes töödes objekti tegelikust seisust. 20 aasta kogemus aitab hinnata, kas piisab pahteldusest, on vaja krohvimist või tasub töö jagada etappideks. Aus eelhinnang on siin tähtis, sest õige alus määrab suure osa lõpptulemusest.",
        ],
      },
    ],
  },
  {
    title: "Mida arvestada enne maalritööde tellimist?",
    slug: "mida-arvestada-enne-maalritoode-tellimist",
    category: "Maalritööd",
    excerpt:
      "Maalritöö ei alga värvipurgist. Enne tasub hinnata pinna seisukorda, vajalikku parandust, lihvimist ja kruntimist, sest ettevalmistus määrab suure osa lõpptulemusest.",
    date: "2025-01-10",
    readTime: "3 min",
    sections: [
      {
        title: "Maalritöö algab pinna hindamisest",
        paragraphs: [
          "Hea maalritöö ei tähenda ainult uue värvikihi seinale kandmist. Enne tööde alustamist tuleb aru saada, millises seisus on seinad ja laed praegu. Vana värv, praod, lahtine pahtel, niiskusjäljed, määrdunud pinnad ja varasemad parandused mõjutavad nii töömahtu kui ka lõpptulemust.",
          "Kui pind on ebatasane või nõrk, ei lahenda värv probleemi ära. Värv võib pinna värskendada, kuid see ei peida korralikult suuremaid lohke, pragusid ega halvasti tehtud aluspinda. Seetõttu tasub enne maalritööde tellimist keskenduda just ettevalmistusele.",
        ],
      },
      {
        title: "Ettevalmistus määrab tulemuse",
        paragraphs: [
          "Tüüpiline ettevalmistus võib sisaldada pinna puhastamist, pragude parandamist, pahteldamist, lihvimist ja kruntimist. Mõnes ruumis on vaja ainult väiksemaid parandusi, teises tuleb teha põhjalikum eeltöö. Töömaht selgub kõige paremini siis, kui pind on üle vaadatud.",
          "Kruntimine on samuti oluline etapp. See aitab ühtlustada pinna imavust ja parandada värvi nakkumist. Kui kruntimine vahele jätta olukorras, kus seda tegelikult vaja on, võib lõpptulemus jääda ebaühtlane või vajada rohkem värvikihte.",
        ],
      },
      {
        title: "Fotod aitavad, aga ei asenda objekti ülevaatust",
        paragraphs: [
          "Esmase töömahu hindamiseks on fotod väga kasulikud. Need aitavad aru saada ruumi suurusest, seinte seisukorrast, ligipääsust ja sellest, kas tegemist on värskendusremondi või põhjalikuma ettevalmistusega. Head fotod peaksid näitama nii üldvaadet kui ka probleemseid kohti lähemalt.",
          "Samas ei näita foto alati pinna tugevust, varjatud ebatasasusi ega seda, kuidas valgus seina peal liigub. Seetõttu on täpsemaks hinnanguks sageli vaja objekti üle vaadata. Eriti kehtib see suuremate pindade, lagede, vanemate hoonete ja korteriühistute ruumide puhul.",
        ],
      },
      {
        title: "Töömaht sõltub soovitud lõpptulemusest",
        paragraphs: [
          "Kõik maalritööd ei pea olema sama detailsusastmega. Tehnoruum, trepikoda, üürikorter ja kodu elutuba võivad vajada erinevat lähenemist. Mõnes kohas on eesmärk puhas ja vastupidav pind, teises kohas soovitakse väga siledat ja esinduslikku lõpptulemust.",
          "Seetõttu on enne tööde tellimist hea läbi mõelda, milline tulemus on päriselt vajalik. See aitab vältida nii üleliigset tööd kui ka olukorda, kus ootus on kõrgem kui tellitud ettevalmistuse maht.",
        ],
      },
      {
        title: "Selge info teeb hinnangu täpsemaks",
        paragraphs: [
          "Maalritööde päringus tasub kirjeldada, kas tegu on seinte, lagede või mõlemaga, kui suur on ligikaudne pind, milline on praegune seisukord ja kas ruum on möbleeritud. Samuti on oluline teada, kas on vaja ainult värvimist või ka pahteldamist ja parandusi.",
          "Centivo aitab hinnata tööde järjekorda ja vajalikke ettevalmistusi objekti põhjal. Praktiline eelhinnang annab parema pildi sellest, mida on mõistlik teha kohe ja millised tööd saab vajadusel jätta eraldi etapiks.",
        ],
      },
    ],
  },
  {
    title: "Märgfassaad - millal see on mõistlik lahendus?",
    slug: "margfassaad-millal-see-on-moistlik-lahendus",
    category: "Fassaaditööd",
    excerpt:
      "Märgfassaadi sobivus sõltub hoone seisukorrast, aluspinnast, soojustuse ja viimistluse vajadusest ning töötingimustest. Lõplik lahendus selgub objekti põhjal.",
    date: "2025-01-10",
    readTime: "5 min",
    sections: [
      {
        title: "Märgfassaad vajab terviklikku vaadet",
        paragraphs: [
          "Märgfassaad on levinud lahendus hoonete soojustamisel ja välisviimistlusel, kuid selle sobivust ei saa otsustada ainult ruutmeetrite järgi. Enne tööde planeerimist tuleb vaadata hoone seisukorda, aluspinna tugevust, olemasolevaid kahjustusi, sokli lahendust, avatäiteid ja seda, milline viimistlus on soovitud.",
          "Hea fassaaditöö algab küsimusest, mida hoone päriselt vajab. Mõnel objektil on eesmärk parandada välisilmet, teisel juhul lisandub soojustuse vajadus või varasemate vigade parandamine. Lahendus peab sobima konkreetse majaga, mitte ainult üldise tööliigiga.",
        ],
      },
      {
        title: "Aluspind ja hoone seisukord on esimesed kontrollkohad",
        paragraphs: [
          "Kui olemasolev aluspind on nõrk, lahtine või niiskuskahjustustega, ei ole mõistlik sellele uut kihti lihtsalt peale ehitada. Enne märgfassaadi tööde alustamist tuleb selgeks teha, kas aluspind kannab, kas on vaja eemaldada vanu kihte ja kuidas lahendada kohad, kus fassaad on juba kahjustunud.",
          "Korterelamute, eramute ja ettevõtete hoonete puhul võivad lähtekohad olla väga erinevad. Vanemal majal võib olla vaja rohkem ettevalmistust, uuemal hoonel võib põhirõhk olla viimistlusel või detailide korrigeerimisel. Seetõttu annab objekti ülevaatus palju täpsema info kui pelk pindala.",
        ],
      },
      {
        title: "Soojustus ja viimistlus peavad sobima eesmärgiga",
        paragraphs: [
          "Märgfassaadi puhul tuleb läbi mõelda, kas töö hõlmab ainult viimistlust või ka soojustamist. Soojustuse paksus, kinnitamine, armeerimine ja lõppviimistlus moodustavad ühe süsteemi, mille osad peavad omavahel sobima. Üksikute kihtide eraldi valimine ilma tervikuta võib hiljem probleeme tekitada.",
          "Viimistluse valikul mõjutavad otsust hoone kasutus, ümbrus, ilmastikukoormus ja soovitud välimus. Eesmärk ei ole kasutada igal objektil sama lahendust, vaid valida tööde järjekord ja materjalid hoone seisukorra järgi.",
        ],
      },
      {
        title: "Ilm ja töötingimused mõjutavad planeerimist",
        paragraphs: [
          "Fassaaditööd sõltuvad ilmast rohkem kui sisetööd. Temperatuur, sademed, tuul ja kuivamistingimused mõjutavad seda, millal tööd teha saab ja kuidas etappe planeerida. Seetõttu on fassaaditööde puhul oluline realistlik ajakava.",
          "Kiirustamine ei ole välitööde puhul hea lähtekoht. Kui tingimused ei sobi, tuleb tööde järjekord või aeg üle vaadata. See kehtib nii eramajade, korteriühistute kui ka äripindade puhul.",
        ],
      },
      {
        title: "Objektipõhine planeerimine annab parema tulemuse",
        paragraphs: [
          "Fassaaditöid tellides tasub kirjeldada hoone tüüpi, olemasolevat fassaadi, ligikaudset pinda, soovitud eesmärki ja võimalusel lisada fotod. Korteriühistutel aitab otsust teha ka see, kui probleemsed kohad on enne läbi kaardistatud.",
          "Centivo tegeleb fassaaditöödega peamiselt märgfassaadide suunal ning lähtub lahenduse pakkumisel konkreetsest objektist. Praktiline hinnang aitab otsustada, kas vaja on täielikku töömahtu, osalist parandust või tööde jagamist etappideks.",
        ],
      },
    ],
  },
  {
    title: "Kas ehitustöid saab tellida ka etappide kaupa?",
    slug: "kas-ehitustoid-saab-tellida-ka-etappide-kaupa",
    category: "Tööde planeerimine",
    excerpt:
      "Tööd saab vajadusel jagada etappideks: lammutus, krohvimine, maalritööd, fassaad või ehitusprügi äravedu. See aitab hoida töömahu ja eelarve paremini kontrolli all.",
    date: "2025-01-10",
    readTime: "3 min",
    sections: [
      {
        title: "Kõiki töid ei pea tellima korraga",
        paragraphs: [
          "Ehitus- ja viimistlustöid saab sageli tellida etappide kaupa. See tähendab, et klient ei pea kohe otsustama kogu töömahtu või tellima kõiki teenuseid korraga. Vajadusel saab alustada näiteks lammutusest, seejärel liikuda krohvimise või maalritöödeni ning eraldi lahendada ehitusprügi äraveo.",
          "Selline lähenemine sobib eriti hästi siis, kui objekti lõplik seisukord ei ole alguses selge. Pärast vana viimistluse eemaldamist või lammutust võib selguda, millises seisus on aluspind ja milliseid töid on päriselt vaja teha.",
        ],
      },
      {
        title: "Etapid aitavad eelarvet ja töömahtu juhtida",
        paragraphs: [
          "Etappideks jagamine aitab kulusid paremini planeerida. Kui kogu töömaht on suur, võib olla mõistlik alustada kõige kiirematest või vältimatutest töödest ning jätta osa viimistlusest hilisemaks. Nii saab klient otsustada järgmise sammu siis, kui eelmine töö on tehtud ja tegelik olukord nähtav.",
          "See ei tähenda, et töö peaks olema juhuslikult tükeldatud. Etapid peavad olema loogilises järjekorras. Näiteks ei ole mõistlik teha lõppviimistlust enne, kui aluspind on korras või suurem tolmune töö lõpetatud.",
        ],
      },
      {
        title: "Milliseid töid saab eraldi tellida?",
        paragraphs: [
          "Eraldi etapina saab tellida lammutust, krohvimist, maalritöid, fassaaditöid või ehitusprügi äravedu. Mõnikord vajab klient ainult ühte konkreetset tööd, näiteks ruumi värvimist või fassaadi parandust. Teinekord on vaja alustada ettevalmistusest ja otsustada järgmised sammud hiljem.",
          "Ehitusprügi äravedu on hea näide tööst, mis võib olla vajalik nii eraldi kui ka suurema töö osana. Kui vana materjal, krohvijäägid või lammutusprügi jäävad objektile ette, aeglustab see järgmisi töid ja muudab ruumi kasutamise ebamugavaks.",
        ],
      },
      {
        title: "Etapiline töö sobib eri tüüpi klientidele",
        paragraphs: [
          "Eramaja omanikul võib olla vaja teha üks ruum korraga, sest kodu on samal ajal kasutuses. Korteriühistu võib planeerida fassaadi või üldalade töid vastavalt eelarvele ja otsustele. Ettevõttel võib olla oluline, et tööd ei segaks kogu tegevust korraga.",
          "Sellistes olukordades on paindlik töökorraldus praktiline. Oluline on kokku leppida, milline etapp tehakse esimesena, milline peab sellele järgnema ja millised piirangud objektil on.",
        ],
      },
      {
        title: "Selge järjekord hoiab töö arusaadavana",
        paragraphs: [
          "Kui töö tellitakse etappide kaupa, tasub alguses paika panna vähemalt üldine järjestus. Näiteks lammutus ja prügi äravedu enne aluspinna parandust, krohvimine enne pahteldust ja värvimine alles siis, kui pind on valmis. Selline järjekord aitab vältida topelttööd.",
          "Centivo läheneb töödele objektipõhiselt ja paindlikult. Kui kogu maht ei ole kohe teada, saab alustada mõistlikust esimesest etapist ning järgmised sammud täpsustada pärast seda. See sobib hästi olukorda, kus klient vajab ausat hinnangut, mitte valmis paketti sõltumata objekti seisust.",
        ],
      },
    ],
  },
];

export function getPostBySlug(slug: string) {
  return posts.find((post) => post.slug === slug);
}
