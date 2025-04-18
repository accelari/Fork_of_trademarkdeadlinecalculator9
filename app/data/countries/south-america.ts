import { createCategorizedCountry } from "./country-utils"
import {
  notarizationAndApostilleDeviations,
  threeYearUsageProofDeviations,
  combineDeviations,
} from "./common-deviations"

// Hilfsfunktion für Andenpakt-Länder
function createAndeanCountry(code: string, name: string, additionalNotes?: string, extraDeviations = {}) {
  return createCategorizedCountry(
    code,
    name,
    "Südamerika",
    "direct",
    combineDeviations(threeYearUsageProofDeviations, notarizationAndApostilleDeviations, {
      calculationBasis: "registration",
      protectionPeriod: 10,
      renewalStartMonths: 6,
      renewalDeadlineMonths: 0,
      lateRenewalMonths: 6,
      vertreterRequired: "Ja",
      prufungsumfang: "Umfassend",
      widerspruch: "Ja",
      mitgliedschaften: ["WIPO", "Pariser Übereinkunft", "TRIPS", "Andenpakt"],
      additionalNotes: additionalNotes || "Mitglied des Andenabkommens (Andenpakt).",
      ...extraDeviations,
    }),
  )
}

// Hilfsfunktion für Mercosur-Länder
function createMercosurCountry(code: string, name: string, additionalNotes?: string, extraDeviations = {}) {
  return createCategorizedCountry(
    code,
    name,
    "Südamerika",
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
      mitgliedschaften: ["WIPO", "Pariser Übereinkunft", "TRIPS", "Mercosur"],
      additionalNotes: additionalNotes || "Mitglied des Mercosur.",
      ...extraDeviations,
    }),
  )
}

export const southAmericanCountries = [
  createCategorizedCountry("AR", "Argentinien", "Südamerika", "direct", {
    calculationBasis: "registration",
    protectionPeriod: 10,
    renewalStartMonths: 6,
    renewalDeadlineMonths: 0,
    lateRenewalMonths: 6,
    usageProofRequired: true,
    usageProofYears: 5,
    usageDeclarationRequired: true,
    usageDeclarationYears: [5],
    poaDigitalCopy: "Ja",
    poaOriginalRequired: "Nein",
    poaDigitalSignature: "Ja",
    poaNotarization: "Nein",
    poaApostille: "Nein",
    poaHinweise:
      "Die Vollmacht kann formfrei (ohne Notar/Apostille) erteilt werden, doch kann das Amt im Einzelfall eine legalisierte Fassung verlangen",
    mitgliedschaften: [
      "WIPO (seit 1980)",
      "Pariser Verbandsübereinkunft (PVÜ, seit 1967)",
      "WTO/TRIPS (seit 1995)",
      "Madrid-System: kein Mitglied",
    ],
    usageProofType: "Nachweis nur auf Antrag Dritter erforderlich",
    usageDeclarationType: "Eidesstattliche Nutzungserklärung (Declaración de Uso)",
    usageProofDeadlineYears: 5,
    usageDeclarationDeadlineYears: 5,
    filingPeriodStart: "Zwischen dem 5. und 6. Jahr nach Eintragung",
    additionalNotes:
      "Unterbleibt die Nutzungserklärung, fällt eine zusätzliche Strafgebühr an und die Marke kann vor Verlängerung für verfallen erklärt werden.",
  }),

  createCategorizedCountry("BR", "Brasilien", "Südamerika", "direct", {
    calculationBasis: "registration",
    protectionPeriod: 10,
    renewalStartMonths: 12,
    renewalDeadlineMonths: 0,
    lateRenewalMonths: 6,
    usageProofRequired: false,
    usageProofYears: 5,
    poaDigitalCopy: "Ja",
    poaOriginalRequired: "Nein",
    poaDigitalSignature: "Ja",
    poaNotarization: "Nein",
    poaApostille: "Nein",
    poaHinweise:
      "Die Bestellung erfolgt durch schriftliche Vollmacht; diese kann formlos (einfache Unterzeichnung) erteilt werden.",
    mitgliedschaften: [
      "WIPO (seit 1974)",
      "Pariser Verbandsübereinkunft (seit 1884)",
      "WTO/TRIPS (seit 1995)",
      "Madrid-Protokoll (seit 02.10.2019)",
      "Nizza-Klassifikation (seit 1999)",
    ],
    additionalNotes:
      "Nach Art. 217 LPI führt das Fehlen eines in Brasilien ansässigen Bevollmächtigten zum Erlöschen der Registrierung. Mehrklassenanmeldungen sind nicht möglich (jede Klasse erfordert einen separaten Antrag).",
  }),

  createCategorizedCountry("CL", "Chile", "Südamerika", "direct", {
    calculationBasis: "registration",
    protectionPeriod: 10,
    renewalStartMonths: 6,
    renewalDeadlineMonths: 0,
    lateRenewalMonths: 6,
    usageProofRequired: false,
    usageProofYears: 5,
    prufungsumfang: "Beschränkt",
    poaDigitalCopy: "Ja",
    poaOriginalRequired: "Ja",
    poaDigitalSignature: "Ja",
    poaNotarization: "Nein",
    poaApostille: "Nein",
    poaHinweise:
      "Diese Vollmacht muss vom Markeninhaber unterzeichnet werden, bedarf aber keiner notariellen Beglaubigung oder Apostille",
    mitgliedschaften: [
      "WIPO (seit 1975)",
      "Pariser Verbandsübereinkunft (seit 1991)",
      "WTO/TRIPS (seit 1995)",
      "Madrid-Protokoll (seit 04.07.2022)",
    ],
    additionalNotes:
      "Für bereits bestehende Marken gilt eine Übergangsregel: Die 5-Jahres-Frist läuft ab dem nächsten Verlängerungsdatum. Chile hat im Zuge der IP-Law-Reform 2022 viele EU-Standards übernommen.",
  }),

  // Andenpakt-Länder
  createAndeanCountry("BO", "Bolivien"),
  createAndeanCountry("CO", "Kolumbien", "Kolumbien ist Teil der Andengemeinschaft CAN (Comunidad Andina).", {
    poaDigitalCopy: "Ja",
    poaOriginalRequired: "Nein",
    poaDigitalSignature: "Ja",
    poaNotarization: "Nein",
    mitgliedschaften: [
      "WIPO",
      "Pariser Übereinkunft",
      "TRIPS",
      "Madrid-Protokoll",
      "Nizza-Abkommen",
      "Singapur-Vertrag",
      "Andenpakt",
    ],
  }),
  createAndeanCountry("EC", "Ecuador"),
  createAndeanCountry("PE", "Peru", "Peru ist seit 2018 Mitglied des Madrid-Protokolls.", {
    mitgliedschaften: ["WIPO", "Pariser Übereinkunft", "TRIPS", "Andenpakt", "Madrid-Protokoll"],
  }),

  // Mercosur-Länder
  createMercosurCountry("PY", "Paraguay", "Paraguay ist Mitglied des Mercosur.", {
    usageProofYears: 3,
  }),
  createMercosurCountry("UY", "Uruguay"),

  // Sonderfälle
  createCategorizedCountry("VE", "Venezuela", "Südamerika", "direct", {
    calculationBasis: "registration",
    protectionPeriod: 15, // Abweichend: 15 Jahre statt 10
    renewalStartMonths: 6,
    renewalDeadlineMonths: 0,
    lateRenewalMonths: 6,
    usageProofRequired: true,
    usageProofYears: 3,
    vertreterRequired: "Ja",
    prufungsumfang: "Umfassend",
    widerspruch: "Ja",
    poaVertreterRequired: "Ja",
    poaDigitalCopy: "Nein",
    poaOriginalRequired: "Ja",
    poaDigitalSignature: "Nein",
    poaNotarization: "Ja",
    poaApostille: "Ja",
    poaHinweise: "Notariell beglaubigte und legalisierte Vollmacht erforderlich.",
    mitgliedschaften: ["WIPO", "Pariser Übereinkunft", "TRIPS"],
    additionalNotes:
      "Markenregistrierungen in Venezuela sind für 15 Jahre gültig. Hinweis: Venezuela ist 2006 aus dem Andenpakt ausgetreten.",
  }),
]
