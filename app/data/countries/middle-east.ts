import { createCategorizedCountry } from "./country-utils"

// Hilfsfunktion für GCC-Länder (Gulf Cooperation Council)
function createGCCCountry(code: string, name: string, additionalNotes?: string, extraDeviations = {}) {
  return createCategorizedCountry(code, name, "Naher Osten", "direct", {
    calculationBasis: "application",
    renewalStartMonths: 12,
    additionalNotes: additionalNotes || "Mitglied des Golf-Kooperationsrats (GCC).",
    ...extraDeviations,
  })
}

// Hilfsfunktion für Länder im Nahen Osten mit strengen Vollmachtsanforderungen
function createMiddleEasternCountry(code: string, name: string, additionalNotes?: string, extraDeviations = {}) {
  return createCategorizedCountry(code, name, "Naher Osten", "direct", {
    additionalNotes: additionalNotes || "Land im Nahen Osten mit strengen Vollmachtsanforderungen.",
    ...extraDeviations,
  })
}

export const middleEastCountries = [
  createGCCCountry(
    "AE",
    "Vereinigte Arabische Emirate",
    "Marken mit alkoholbezogenen Waren/Dienstleistungen (z.B. Klasse 33, Bars) sind nicht zulässig. Bei Nichterwiderung eines Widerspruchs erfolgt Stattgabe standardmäßig.",
    {
      mitgliedschaften: ["WIPO", "Pariser Übereinkunft", "TRIPS", "Madrid-Protokoll"], // Madrid-Protokoll seit 28.12.2021
      poaHinweise: "Eine im Herkunftsland notarielle und konsularisch legalisierte Vollmacht ist erforderlich",
    },
  ),

  createGCCCountry(
    "SA",
    "Saudi-Arabien",
    "Saudi-Arabien erlaubt seit Umsetzung des GCC-Markengesetzes Mehrklassenanmeldungen. Alle Anmeldungen und Unterlagen müssen in Arabisch eingereicht werden.",
    {
      poaHinweise:
        "Die Vollmacht muss vom Markeninhaber unterschrieben, notariell beglaubigt und anschließend durch ein saudi-arabisches Konsulat legalisiert werden",
      mitgliedschaften: [
        "WIPO (seit 1982)",
        "Pariser Verbandsübereinkunft (seit 2004)",
        "WTO/TRIPS (seit 2005)",
        "Madrid-Protokoll (seit März 2022)",
        "Nizza-Klassifikation (seit 2021)",
      ],
    },
  ),

  createGCCCountry(
    "QA",
    "Katar",
    "Katar verlangt bei Marken in nicht-arabischer Sprache eine arabische Übersetzung/Transkription im Antrag anzugeben. Katar hat 2016 das einheitliche GCC-Markengesetz implementiert.",
    {
      renewalStartMonths: 6,
      lateRenewalMonths: 2, // Nur 60 Tage Nachfrist
      poaHinweise:
        "Die Vollmacht muss notariell beglaubigt und konsularisch legalisiert sein durch die Botschaft Katars",
      mitgliedschaften: [
        "Pariser Übereinkunft (seit 2000)",
        "Madrid-Protokoll (seit 2011)",
        "GCC-Markengesetz (seit 2016)",
      ],
    },
  ),

  createGCCCountry("BH", "Bahrain"),
  createGCCCountry("KW", "Kuwait"),
  createGCCCountry("OM", "Oman"),

  // Weitere Länder im Nahen Osten
  createMiddleEasternCountry("IQ", "Irak", "Alle Dokumente müssen ins Arabische übersetzt werden.", {
    lateRenewalMonths: 3,
  }),

  createMiddleEasternCountry("IR", "Iran", "Alle Dokumente müssen ins Persische übersetzt werden.", {
    usageProofYears: 3,
    mitgliedschaften: ["WIPO", "Pariser Übereinkunft", "Madrid-Abkommen", "Madrid-Protokoll"],
  }),

  createMiddleEasternCountry("JO", "Jordanien", "Alle Dokumente müssen ins Arabische übersetzt werden.", {
    lateRenewalMonths: 12,
    usageProofYears: 3,
    mitgliedschaften: ["WIPO", "Pariser Übereinkunft", "TRIPS", "Madrid-Protokoll"],
  }),

  createCategorizedCountry("IL", "Israel", "Naher Osten", "direct", {
    additionalNotes:
      "Israel ist seit 2010 Mitglied des Madrid-Protokolls. Israel hat ein modernes und effizientes Markensystem mit Online-Einreichungsmöglichkeiten.",
    mitgliedschaften: ["WIPO", "Pariser Übereinkunft", "TRIPS", "Madrid-Protokoll"],
  }),

  // Weitere Länder können hier hinzugefügt werden...
]
