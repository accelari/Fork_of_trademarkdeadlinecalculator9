import { createCategorizedCountry } from "./country-utils"

// Hilfsfunktion für ARIPO-Länder
function createARIPOCountry(code: string, name: string, additionalNotes?: string, extraDeviations = {}) {
  return createCategorizedCountry(code, name, "Afrika", "aripo", {
    additionalNotes:
      additionalNotes || "Mitglied der ARIPO (Afrikanische Regionale Organisation für geistiges Eigentum).",
    ...extraDeviations,
  })
}

// Hilfsfunktion für OAPI-Länder
function createOAPICountry(code: string, name: string, additionalNotes?: string, extraDeviations = {}) {
  return createCategorizedCountry(code, name, "Afrika", "oapi", {
    additionalNotes: additionalNotes || "Mitglied der OAPI (Afrikanische Organisation für geistiges Eigentum).",
    ...extraDeviations,
  })
}

// Hilfsfunktion für nordafrikanische Länder
function createNorthAfricanCountry(code: string, name: string, additionalNotes?: string, extraDeviations = {}) {
  return createCategorizedCountry(code, name, "Afrika", "direct", {
    additionalNotes: additionalNotes || "Nordafrikanisches Land mit französisch beeinflusstem Rechtssystem.",
    ...extraDeviations,
  })
}

export const africanCountries = [
  createCategorizedCountry("ZA", "Südafrika", "Afrika", "direct", {
    additionalNotes:
      "Südafrika ist kein Mitglied des Madrider Systems. Anmeldungen müssen direkt im Land erfolgen. Das Verfahren ist gerichtszentriert - Widersprüche werden vor dem High Court verhandelt.",
  }),

  // Nordafrikanische Länder
  createNorthAfricanCountry(
    "DZ",
    "Algerien",
    "Algerien ist eines der wenigen Länder, das aktiv Nachweise bei Verlängerung verlangt.",
    {
      usageDeclarationRequired: true,
      usageDeclarationYears: [10, 20, 30, 40],
      usageProofYears: 10,
      widerspruch: "Nein",
    },
  ),

  createNorthAfricanCountry("EG", "Ägypten", "Ägypten ist seit 2009 Mitglied des Madrid-Protokolls."),

  createNorthAfricanCountry("MA", "Marokko"),
  createNorthAfricanCountry("TN", "Tunesien"),

  // ARIPO-Länder
  createARIPOCountry("BW", "Botswana"),
  createARIPOCountry("GM", "Gambia"),
  createARIPOCountry("GH", "Ghana"),
  createARIPOCountry("KE", "Kenia"),
  createARIPOCountry("LS", "Lesotho"),
  createARIPOCountry("MW", "Malawi"),
  createARIPOCountry("NA", "Namibia"),
  createARIPOCountry("RW", "Ruanda"),
  createARIPOCountry("SL", "Sierra Leone"),
  createARIPOCountry("SO", "Somalia"),
  createARIPOCountry("SD", "Sudan"),
  createARIPOCountry("SZ", "Eswatini"),
  createARIPOCountry("TZ", "Tansania"),
  createARIPOCountry("UG", "Uganda"),
  createARIPOCountry("ZM", "Sambia"),
  createARIPOCountry("ZW", "Simbabwe"),

  // OAPI-Länder
  createOAPICountry("BJ", "Benin"),
  createOAPICountry("BF", "Burkina Faso"),
  createOAPICountry("CM", "Kamerun"),
  createOAPICountry("CF", "Zentralafrikanische Republik"),
  createOAPICountry("TD", "Tschad"),
  createOAPICountry("KM", "Komoren"),
  createOAPICountry("CG", "Republik Kongo"),
  createOAPICountry("CI", "Elfenbeinküste"),
  createOAPICountry("GA", "Gabun"),
  createOAPICountry("GN", "Guinea"),
  createOAPICountry("GW", "Guinea-Bissau"),
  createOAPICountry("ML", "Mali"),
  createOAPICountry("MR", "Mauretanien"),
  createOAPICountry("NE", "Niger"),
  createOAPICountry("SN", "Senegal"),
  createOAPICountry("TG", "Togo"),
]
