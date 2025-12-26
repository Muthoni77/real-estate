// -----------------------------
// Types
// -----------------------------

export type City = "Media City" | "Academic City";

export type University = {
  id: string;
  name: string;        // canonical name (single source of truth)
  aliases?: string[];  // alternative names / abbreviations
  city: City;
};

// -----------------------------
// Universities (single source of truth)
// -----------------------------

export const UNIVERSITIES: University[] = [
  {
    id: "amity",
    name: "Amity University Dubai",
    city: "Academic City",
  },
  {
    id: "aud",
    name: "American University in Dubai",
    aliases: ["AUD"],
    city: "Media City",
  },
  {
    id: "aue",
    name: "American University in the Emirates",
    city: "Academic City",
  },
  {
    id: "birmingham",
    name: "University of Birmingham Dubai",
    city: "Academic City",
  },
  {
    id: "buid",
    name: "The British University in Dubai",
    aliases: ["BUiD", "British University in Dubai"],
    city: "Media City",
  },
  {
    id: "canadian",
    name: "Canadian University Dubai",
    city: "Media City",
  },
  {
    id: "curtin",
    name: "Curtin University Dubai",
    city: "Academic City",
  },
  {
    id: "dct",
    name: "Dubai College of Tourism",
    city: "Media City",
  },
  {
    id: "hamdan",
    name: "Hamdan Bin Mohammed Smart University",
    city: "Academic City",
  },
  {
    id: "heriottwatt",
    name: "Heriot-Watt University Dubai",
    city: "Media City",
  },
  {
    id: "hct",
    name: "Higher Colleges of Technology – Academic City",
    city: "Academic City",
  },
  {
    id: "imtd",
    name: "Institute of Management Technology Dubai",
    city: "Academic City",
  },
  {
    id: "manipal",
    name: "Manipal Academy of Higher Education – Dubai",
    city: "Academic City",
  },
  {
    id: "middlesex",
    name: "Middlesex University Dubai",
    city: "Academic City",
  },
  {
    id: "murdoch",
    name: "Murdoch University Dubai",
    city: "Academic City",
  },
  {
    id: "rit",
    name: "Rochester Institute of Technology Dubai",
    aliases: ["RIT Dubai"],
    city: "Academic City",
  },
  {
    id: "sae",
    name: "SAE Institute Dubai",
    city: "Media City",
  },
  {
    id: "spjain",
    name: "SP Jain School of Global Management – Dubai",
    city: "Academic City",
  },
  {
    id: "uowd",
    name: "University of Wollongong in Dubai",
    aliases: ["UOWD"],
    city: "Academic City",
  },
  {
    id: "zayed",
    name: "Zayed University Dubai",
    city: "Academic City",
  },

  // ---- Training & Language Institutes (Media City) ----
  {
    id: "astrolabs",
    name: "AstroLabs Academy",
    city: "Media City",
  },
  {
    id: "britishcouncil",
    name: "British Council Dubai",
    city: "Media City",
  },
  {
    id: "eton",
    name: "Eton Institute",
    city: "Media City",
  },
  {
    id: "ga",
    name: "General Assembly Dubai",
    city: "Media City",
  },
  {
    id: "kaplan",
    name: "Kaplan International Languages Dubai",
    city: "Media City",
  },
  // ---- Universities & Colleges ----

{
  id: "manchester",
  name: "University of Manchester Dubai",
  aliases: ["University of Manchester – Dubai", "Manchester Dubai", "UoM Dubai"],
  city: "Media City",
},
{
  id: "skyline",
  name: "Skyline University College",
  city: "Media City",
},
{
  id: "uopeople",
  name: "University of the People – Dubai",
  aliases: ["University of the People Dubai"],
  city: "Media City",
},
{
  id: "alghurair",
  name: "Al Ghurair University",
  city: "Academic City",
},
{
  id: "unidubai",
  name: "University of Dubai",
  city: "Academic City",
},
{
  id: "stjoseph",
  name: "Saint Joseph University Dubai",
  city: "Academic City",
},
{
  id: "bits",
  name: "Birla Institute of Technology and Science, Pilani – Dubai",
  aliases: ["BITS Pilani Dubai", "BITS Dubai"],
  city: "Academic City",
},
{
  id: "ukcbc",
  name: "UK College of Business and Computing",
  city: "Academic City",
},
{
  id: "demont",
  name: "DeMont Institute of Management and Technology",
  city: "Academic City",
},
{
  id: "studyworld",
  name: "Study World Campus",
  city: "Academic City",
},

// ---- Training & Professional Institutes ----

{
  id: "informa",
  name: "Informa Middle East Training",
  city: "Media City",
},
{
  id: "meirc",
  name: "Meirc Training & Consulting",
  city: "Media City",
},
{
  id: "learnerspoint",
  name: "Learners Point Academy",
  city: "Media City",
},
{
  id: "morgan",
  name: "Morgan International",
  city: "Media City",
},
{
  id: "time",
  name: "Time Training Center",
  city: "Media City",
},
{
  id: "lbtc",
  name: "London Business Training & Consulting",
  city: "Media City",
},
{
  id: "dmi",
  name: "Digital Marketing Institute – Dubai",
  aliases: ["DMI Dubai"],
  city: "Media City",
},
{
  id: "udemy",
  name: "Udemy Business – Dubai",
  city: "Media City",
},
{
  id: "berlitz",
  name: "Berlitz Language Center Dubai",
  city: "Media City",
},
{
  id: "speakenglish",
  name: "Speak English Institute Dubai",
  city: "Media City",
},
{
  id: "esdubai",
  name: "ES Dubai (English Studies Dubai)",
  aliases: ["English Studies Dubai", "ES Dubai"],
  city: "Media City",
},

];

// -----------------------------
// Utilities
// -----------------------------

/** Sort universities A–Z by name */
export const sortUniversitiesAZ = (list: University[]) =>
  [...list].sort((a, b) => a.name.localeCompare(b.name));

/** Group universities by city */
export const groupUniversitiesByCity = (list: University[]) => {
  return list.reduce<Record<City, University[]>>((acc, uni) => {
    acc[uni.city] = acc[uni.city] || [];
    acc[uni.city].push(uni);
    return acc;
  }, {} as Record<City, University[]>);
};

/** Search by name or alias */
export const searchUniversities = (query: string) => {
  const q = query.toLowerCase();

  return UNIVERSITIES.filter((u) =>
    u.name.toLowerCase().includes(q) ||
    u.aliases?.some((a) => a.toLowerCase().includes(q))
  );
};

// -----------------------------
// Ready-to-use exports
// -----------------------------

export const ALL_UNIVERSITIES_SORTED = sortUniversitiesAZ(UNIVERSITIES);

export const UNIVERSITIES_BY_CITY = groupUniversitiesByCity(
  ALL_UNIVERSITIES_SORTED
);

export const UNIVERSITY_DROPDOWN_OPTIONS = [
  { label: "All Universities & Colleges", value: "all" },
  ...ALL_UNIVERSITIES_SORTED.map((u) => ({
    label: u.name,
    value: u.id,
  })),
    { label: "Other (not listed)", value: "other" },
];


