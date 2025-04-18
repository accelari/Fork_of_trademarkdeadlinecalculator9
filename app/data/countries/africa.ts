import { createCategorizedCountry } from "./country-utils"
import { notarizationAndApostilleDeviations, combineDeviations } from "./common-deviations"

// Hilfsfunktion für ARIPO-Länder
function createARIPOCountry(code: string, name: string, additionalNotes?: string, extraDeviations = {}) {
  return createCategorizedCountry(
    code,
    name,
    "Afrika",
    "direct",
    combineDeviations({
      calculationBasis: "registration",
      protectionPeriod: 10,
      renewalStartMonths: 6,
      renewalDeadlineMonths: 0,
      lateRenewalMonths: 6,
      usageProofRequired: false,
      usageProofYears: 5,
      vertreterRequired: "Ja",
      prufungsumfang: "Umfassend",
      widerspruch: "Ja",
      mitgliedschaften: ["WIPO", "Pariser Übereinkunft", "TRIPS", "ARIPO"],
      additionalNotes:
        additionalNotes || "Mitglied der ARIPO (Afrikanische Regionale Organisation für geistiges Eigentum).",
      ...extraDeviations,
    }),
  )
}

// Hilfsfunktion für OAPI-Länder
function createOAPICountry(code: string, name: string, additionalNotes?: string, extraDeviations = {}) {
  return createCategorizedCountry(
    code,
    name,
    "Afrika",
    "direct",
    combineDeviations(notarizationAndApostilleDeviations, {
      calculationBasis: "registration",
      protectionPeriod: 10,
      renewalStartMonths: 6,
      renewalDeadlineMonths: 0,
      lateRenewalMonths: 6,
      usageProofRequired: true,
      usageProofYears: 5,
      vertreterRequired: "Ja",
      prufungsumfang: "Umfassend",
      widerspruch: "Ja",
      mitgliedschaften: ["WIPO", "Pariser Übereinkunft", "TRIPS", "OAPI"],
      additionalNotes: additionalNotes || "Mitglied der OAPI (Afrikanische Organisation für geistiges Eigentum).",
      ...extraDeviations,
    }),
  )
}

// Hilfsfunktion für nordafrikanische Länder
function createNorthAfricanCountry(code: string, name: string, additionalNotes?: string, extraDeviations = {}) {
  return createCategorizedCountry(
    code,
    name,
    "Afrika",
    "direct",
    combineDeviations(notarizationAndApostilleDeviations, {
      calculationBasis: "application",
      protectionPeriod: 10,
      renewalStartMonths: 6,
      renewalDeadlineMonths: 0,
      lateRenewalMonths: 6,
      usageProofRequired: true,
      usageProofYears: 5,
      vertreterRequired: "Ja",
      prufungsumfang: "Umfassend",
      widerspruch: "Ja",
      mitgliedschaften: ["WIPO", "Pariser Übereinkunft", "TRIPS"],
      additionalNotes: additionalNotes || "Nordafrikanisches Land mit französisch beeinflusstem Rechtssystem.",
      ...extraDeviations,
    }),
  )
}

export const africanCountries = [
  createCategorizedCountry("ZA", "Südafrika", "Afrika", "direct", {
    calculationBasis: "application",
    protectionPeriod: 10,
    renewalStartMonths: 12,
    renewalDeadlineMonths: 0,
    lateRenewalMonths: 6,
    usageProofRequired: false,
    usageProofYears: 5,
    poaVertreterRequired: "Ja",
    poaDigitalCopy: "Ja",
    poaOriginalRequired: "Nein", // Original nicht zwingend erforderlich
    poaDigitalSignature: "Ja", // Digitale Signatur wird akzeptiert
    poaNotarization: "Nein", // Keine notarielle Beglaubigung erforderlich
    poaApostille: "Nein", // Keine Apostille erforderlich
    poaHinweise:
      "Eine schriftliche Vollmacht ist für Markenanmeldungen nach südafrikanischem Recht nicht zwingend einzureichen – die Beauftragung wird vom Vertreter formlos angezeigt",
    mitgliedschaften: ["WIPO (seit 1975)", "Pariser Verbandsübereinkunft (seit 1947)", "WTO/TRIPS (seit 1995)"],
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
      mitgliedschaften: ["WIPO", "Pariser Übereinkunft", "TRIPS", "Madrid-Abkommen"],
    },
  ),

  createNorthAfricanCountry("EG", "Ägypten", "Ägypten ist seit 2009 Mitglied des Madrid-Protokolls.", {
    mitgliedschaften: ["WIPO", "Pariser Übereinkunft", "TRIPS", "Madrid-Protokoll"],
  }),

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

  // Weitere Länder können hier hinzugefügt werden...
]
