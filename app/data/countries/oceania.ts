import { createCategorizedCountry } from "./country-utils"
import { simplePoaDeviations, combineDeviations } from "./common-deviations"

// Hilfsfunktion für pazifische Inselstaaten mit einfachen Vollmachtsregeln
function createPacificIslandCountry(code: string, name: string, additionalNotes?: string, extraDeviations = {}) {
  return createCategorizedCountry(
    code,
    name,
    "Ozeanien",
    "direct",
    combineDeviations(simplePoaDeviations, {
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
      mitgliedschaften: ["WIPO", "Pariser Übereinkunft", "TRIPS"],
      additionalNotes: additionalNotes || "Pazifischer Inselstaat mit einfachen Vollmachtsregeln.",
      ...extraDeviations,
    }),
  )
}

function createUSStyleCountry(code: string, name: string, additionalNotes?: string, extraDeviations = {}) {
  return createCategorizedCountry(code, name, "Ozeanien", "direct", {
    calculationBasis: "registration",
    protectionPeriod: 10,
    renewalStartMonths: 6,
    renewalDeadlineMonths: 0,
    lateRenewalMonths: 6,
    usageProofRequired: true,
    usageProofYears: 5,
    vertreterRequired: "Nein",
    prufungsumfang: "Umfassend",
    widerspruch: "Ja",
    mitgliedschaften: ["WIPO", "Pariser Übereinkunft", "TRIPS"],
    additionalNotes: additionalNotes || "Anlehnung an US-amerikanisches Rechtssystem.",
    ...extraDeviations,
  })
}

export const oceaniaCountries = [
  // Australien
  createCategorizedCountry("AU", "Australien", "Ozeanien", "direct", {
    // Nur spezifische Abweichungen von den Standardregeln
    usageProofYears: 3,
    additionalNotes:
      "Allerdings muss für die Korrespondenz eine australische Zustelladresse angegeben werden. Kollisionshindernisse können durch Vorlage von Consent Letters überwunden werden.",
    mitgliedschaften: [
      "WIPO (seit 1972)",
      "Pariser Verbandsübereinkunft (seit 1925)",
      "WTO-Mitglied seit 1995",
      "Nizza-Klassifikation (seit 2007)",
      "Madrid-Protokoll (seit 2001)",
    ],
  }),

  // Neuseeland
  createCategorizedCountry("NZ", "Neuseeland", "Ozeanien", "direct", {
    usageProofYears: 3,
    mitgliedschaften: ["WIPO", "Pariser Übereinkunft", "TRIPS", "Madrid-Protokoll"],
    additionalNotes:
      "Markenregistrierungen in Neuseeland sind für 10 Jahre gültig und können für weitere 10-Jahres-Perioden verlängert werden.",
  }),

  // Cookinseln - Sonderfall ohne formales Markeneintragungsverfahren
  createCategorizedCountry("CK", "Cookinseln", "Ozeanien", "direct", {
    calculationBasis: "none",
    protectionPeriod: 0,
    renewalStartMonths: 0,
    renewalDeadlineMonths: 0,
    lateRenewalMonths: 0,
    prufungsumfang: "Formal",
    widerspruch: "Nein",
    mitgliedschaften: ["WIPO"],
    priorityDeadlineMonths: 0,
    priorityDocumentDeadlineMonths: 0,
    additionalNotes:
      "In den Cook-Inseln existiert derzeit noch kein nationales Markenregister. Markenschutz beruht auf Gewohnheitsrecht (Common Law).",
  }),

  // Fidschi
  createCategorizedCountry("FJ", "Fidschi", "Ozeanien", "direct", {
    usageProofYears: 5,
    mitgliedschaften: ["WIPO", "Pariser Übereinkunft", "TRIPS"],
    additionalNotes:
      "Markenregistrierungen in Fidschi sind für 10 Jahre gültig und können für weitere 10-Jahres-Perioden verlängert werden.",
  }),

  // Französisch-Polynesien
  createCategorizedCountry("PF", "Französisch-Polynesien", "Ozeanien", "direct", {
    usageProofYears: 5,
    prufungsumfang: "Formal",
    mitgliedschaften: ["WIPO", "Pariser Übereinkunft (über Frankreich)", "TRIPS"],
    additionalNotes:
      "Französisch-Polynesien ist ein französisches Überseegebiet und wird von der französischen Markenregistrierung abgedeckt.",
  }),

  // Guam
  createUSStyleCountry("GU", "Guam", "Guam ist ein nicht inkorporiertes Territorium der Vereinigten Staaten."),

  // Kiribati
  createPacificIslandCountry("KI", "Kiribati", "Kiribati hat ein auf Common Law basierendes Markenschutzsystem.", {
    protectionPeriod: 7,
    prufungsumfang: "Beschränkt",
    poaNotarization: "Ja",
    poaApostille: "Ja",
  }),

  // Weitere Länder Ozeaniens mit ähnlichem Muster...
  createPacificIslandCountry("MH", "Marshallinseln", undefined, {
    prufungsumfang: "Beschränkt",
    poaNotarization: "Ja",
    poaApostille: "Ja",
  }),

  createPacificIslandCountry("FM", "Mikronesien", undefined, {
    prufungsumfang: "Beschränkt",
    poaNotarization: "Ja",
    poaApostille: "Ja",
  }),

  createPacificIslandCountry("NR", "Nauru", undefined, {
    protectionPeriod: 7,
    prufungsumfang: "Beschränkt",
    poaNotarization: "Ja",
    poaApostille: "Ja",
  }),

  createCategorizedCountry("NC", "Neukaledonien", "Ozeanien", "direct", {
    usageProofYears: 5,
    prufungsumfang: "Formal",
    mitgliedschaften: ["WIPO", "Pariser Übereinkunft (über Frankreich)", "TRIPS"],
    additionalNotes:
      "Neukaledonien ist ein französisches Überseegebiet mit besonderem Status und wird von der französischen Markenregistrierung abgedeckt.",
  }),

  createPacificIslandCountry("NU", "Niue", undefined, {
    protectionPeriod: 7,
    prufungsumfang: "Beschränkt",
    poaNotarization: "Ja",
    poaApostille: "Ja",
  }),

  createPacificIslandCountry("PW", "Palau", undefined, {
    prufungsumfang: "Beschränkt",
    poaNotarization: "Ja",
    poaApostille: "Ja",
  }),

  createPacificIslandCountry("PG", "Papua-Neuguinea", undefined, {
    poaNotarization: "Ja",
    poaApostille: "Ja",
  }),

  createPacificIslandCountry("PN", "Pitcairninseln", undefined, {
    prufungsumfang: "Beschränkt",
    poaNotarization: "Ja",
    poaApostille: "Ja",
    mitgliedschaften: ["WIPO", "Pariser Übereinkunft (über UK)"],
    additionalNotes:
      "Die Pitcairninseln sind ein britisches Überseegebiet. UK-Registrierungen können ausgedehnt werden, oder es können direkte Anmeldungen erfolgen.",
  }),

  createPacificIslandCountry("WS", "Samoa", undefined, {
    usageProofYears: 3,
    poaNotarization: "Ja",
    poaApostille: "Ja",
    mitgliedschaften: ["WIPO", "Pariser Übereinkunft", "TRIPS", "Madrid-Protokoll"],
    additionalNotes:
      "Samoa ist seit 2019 Mitglied des Madrid-Protokolls. Das neue Markengesetz von 2018 hat das System modernisiert.",
  }),

  createPacificIslandCountry("SB", "Salomonen", undefined, {
    protectionPeriod: 7,
    prufungsumfang: "Beschränkt",
    poaNotarization: "Ja",
    poaApostille: "Ja",
    mitgliedschaften: ["WIPO", "TRIPS"],
  }),

  createPacificIslandCountry("TO", "Tonga", undefined, {
    poaNotarization: "Ja",
    poaApostille: "Ja",
    mitgliedschaften: ["WIPO", "Pariser Übereinkunft", "TRIPS"],
    additionalNotes: "Tonga hat ein modernes Markengesetz (Industrial Property Act von 2002).",
  }),

  createPacificIslandCountry("TV", "Tuvalu", undefined, {
    protectionPeriod: 7,
    prufungsumfang: "Beschränkt",
    poaNotarization: "Ja",
    poaApostille: "Ja",
    mitgliedschaften: ["WIPO"],
  }),

  createPacificIslandCountry("VU", "Vanuatu", undefined, {
    usageProofYears: 3,
    poaNotarization: "Ja",
    poaApostille: "Ja",
    mitgliedschaften: ["WIPO", "Pariser Übereinkunft", "TRIPS"],
    additionalNotes: "Vanuatu hat ein modernes Markengesetz (Trademarks Act No. 1 von 2003).",
  }),

  createCategorizedCountry("WF", "Wallis und Futuna", "Ozeanien", "direct", {
    usageProofYears: 5,
    prufungsumfang: "Formal",
    mitgliedschaften: ["WIPO", "Pariser Übereinkunft (über Frankreich)", "TRIPS"],
    additionalNotes:
      "Wallis und Futuna ist ein französisches Überseegebiet und wird von der französischen Markenregistrierung abgedeckt.",
  }),
]
