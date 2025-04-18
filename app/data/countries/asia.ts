import { createCategorizedCountry } from "./country-utils"

// Hilfsfunktion für ASEAN-Länder
function createASEANCountry(code: string, name: string, additionalNotes?: string, extraDeviations = {}) {
  return createCategorizedCountry(code, name, "Asien", "direct", {
    additionalNotes: additionalNotes || "Mitglied der ASEAN (Verband Südostasiatischer Nationen).",
    ...extraDeviations,
  })
}

// Hilfsfunktion für ostasiatische Länder mit strengen Prüfungsverfahren
function createEastAsianCountry(code: string, name: string, additionalNotes?: string, extraDeviations = {}) {
  return createCategorizedCountry(code, name, "Asien", "direct", {
    additionalNotes: additionalNotes || "Strenges Prüfungsverfahren für Markenanmeldungen.",
    mitgliedschaften: ["WIPO", "Pariser Übereinkunft", "TRIPS", "Madrid-Protokoll"],
    ...extraDeviations,
  })
}

// Hilfsfunktion für zentralasiatische Länder
function createCentralAsianCountry(code: string, name: string, additionalNotes?: string, extraDeviations = {}) {
  return createCategorizedCountry(code, name, "Asien", "direct", {
    additionalNotes: additionalNotes || "Zentralasiatisches Land mit strengen Vollmachtsanforderungen.",
    ...extraDeviations,
  })
}

export const asianCountries = [
  createEastAsianCountry(
    "CN",
    "China",
    "China legt einen strengen Maßstab an Benutzungsnachweise an. China folgt dem 'First-to-file'-Prinzip, Marken entstehen also nur durch Registrierung.",
    {
      renewalStartMonths: 12,
      mitgliedschaften: [
        "WIPO (seit 1980)",
        "Paris Convention (seit 1985)",
        "WTO/TRIPS (seit 2001)",
        "Madrid-Abkommen (seit 1989)",
        "Madrid-Protokoll (seit 1995)",
        "Nizza-Klassifikation (seit 1994)",
      ],
    },
  ),

  createEastAsianCountry(
    "JP",
    "Japan",
    "Japan verfügt über ein strenges amtliches Prüfungsverfahren. Mehrklassenanmeldungen sind in Japan seit 1992 zulässig. Japan akzeptiert seit 2015 die Eintragung nicht-traditioneller Marken wie Klangmarken, Farbmarken und Bewegungsmarken, sofern sie grafisch darstellbar sind.",
    {
      poaHinweise:
        "Eine Vollmacht muss in Japan grundsätzlich nicht routinemäßig eingereicht werden, solange der Vertreter registriert ist",
      mitgliedschaften: [
        "WIPO (seit 1975)",
        "Pariser Verbandsübereinkunft (seit 1899)",
        "WTO/TRIPS (seit 1995)",
        "Madrider Protokoll (seit 2000)",
        "Nizza-Klassifikation (seit 1990)",
      ],
    },
  ),

  createEastAsianCountry(
    "KR",
    "Südkorea",
    "Südkorea hatte bis 2007 ein Widerspruchsverfahren nach Veröffentlichung der Registrierung. Mehrklassenanmeldungen sind in Korea bereits seit 1998 zulässig. Korea hat 2012 sein Markengesetz erweitert – seitdem sind auch Geruchsmarken und Klangmarken theoretisch eintragbar (sofern eine visuelle Darstellung möglich ist).",
    {
      renewalStartMonths: 12,
      poaHinweise:
        "Eine schriftliche Vollmacht muss seit 2015 grundsätzlich nicht mehr standardmäßig eingereicht werden; der Vertreter versichert mit der Einreichung implizit seine Bevollmächtigung",
      mitgliedschaften: [
        "WIPO (seit 1979)",
        "Pariser Verbandsübereinkunft (seit 1980)",
        "WTO/TRIPS",
        "Madrid-Protokoll (seit 2003)",
        "Nizza-Klassifikation (seit 1999)",
      ],
    },
  ),

  // ASEAN-Länder
  createASEANCountry(
    "SG",
    "Singapur",
    "Singapur hat ein modernes Markenrecht (Trade Marks Act 1998, in Kraft seit 2000) und schützt auch nicht-traditionelle Marken (3D-Formen, Farben, Geräusche etc.).",
    {
      calculationBasis: "application",
      usageProofYears: 5,
      poaHinweise:
        "Eine formelle Vollmacht ist für Singapur nicht erforderlich – die Bestellung des lokalen Agenten erfolgt durch Nennung in der Anmeldung",
      mitgliedschaften: ["Pariser Übereinkunft", "WTO/TRIPS", "Madrid-Protokoll (seit 2000)"],
    },
  ),

  createASEANCountry(
    "MY",
    "Malaysia",
    "Eine Besonderheit Malaysias ist die Einführung von nicht-traditionellen Marken im neuen Gesetz (Farben, Gerüche, Klang etc., sofern darstellbar).",
    {
      calculationBasis: "application",
      usageProofYears: 3,
      poaHinweise:
        "Eine schriftliche Vollmacht ist erforderlich, aber eine einfache unterschriebene POA reicht (keine Notarisierung)",
      mitgliedschaften: [
        "Madrid-Protokoll (seit 2019)",
        "Pariser Verbandsübereinkunft (seit 2012)",
        "WTO/TRIPS",
        "Nizza-Klassifikation",
      ],
    },
  ),

  createASEANCountry(
    "TH",
    "Thailand",
    "Seit einigen Jahren sind Multi-Class-Anmeldungen erlaubt (früher nur Einzelklassen). Ausländische Marken werden oft zusätzlich in Thai-Schrift transliteriert registriert, um umfassenden Schutz zu bieten.",
    {
      calculationBasis: "application",
      poaOriginalRequired: "Ja",
      poaDigitalSignature: "Nein",
      poaHinweise:
        "Vollmacht im Original einzureichen, kann innerhalb von 90 Tagen nachgereicht werden, notarielle Beglaubigung ist nicht erforderlich",
      mitgliedschaften: [
        "Madrid-Protokoll (seit 2017)",
        "Pariser Verbandsübereinkunft (seit 2008)",
        "WTO/TRIPS",
        "Nizza-Klassifikation (seit 2013)",
      ],
    },
  ),

  // Weitere ASEAN-Länder
  createASEANCountry(
    "VN",
    "Vietnam",
    "Vietnam verlangt zur Markeneintragung keine tatsächliche Nutzung (man kann auch defensiv anmelden).",
    {
      calculationBasis: "application",
    },
  ),

  createASEANCountry("BN", "Brunei"),

  // Zentralasiatische Länder
  createCentralAsianCountry("AZ", "Aserbaidschan"),
  createCentralAsianCountry("KG", "Kirgisistan"),
  createCentralAsianCountry("UZ", "Usbekistan"),
  createCentralAsianCountry("TJ", "Tadschikistan"),

  // Ostasiatische Länder
  createEastAsianCountry(
    "TW",
    "Taiwan",
    "Taiwan ist weder Mitglied der Pariser Konvention noch des Madrid-Systems (aus politischen Gründen).",
  ),
  createEastAsianCountry("MO", "Macau", "Eine chinesische Registrierung erstreckt sich nicht automatisch auf Macau.", {
    protectionPeriod: 7,
  }),

  // Südasiatische Länder
  createCategorizedCountry("IN", "Indien", "Asien", "direct", {
    calculationBasis: "application",
    usageProofYears: 5,
    mitgliedschaften: ["WIPO", "Pariser Übereinkunft", "TRIPS", "Madrid-Protokoll"],
    additionalNotes:
      "Indien ist seit 2013 Mitglied des Madrid-Protokolls. Das indische Markenrecht basiert auf dem britischen System.",
  }),

  // Weitere Länder können hier hinzugefügt werden...
]
