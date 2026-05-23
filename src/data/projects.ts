export type Project = {
  title: string;
  slug: string;
  category: string;
  location: string;
  shortDescription: string;
  services: string[];
  year: number;
  status: string;
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
  },
];
