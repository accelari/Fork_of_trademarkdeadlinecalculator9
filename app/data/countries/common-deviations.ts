// app/data/countries/common-deviations.ts

// Gruppierte Abweichungen für häufige Muster

// Abweichungen für Länder mit notarieller Beglaubigung und Apostille
export const notarizationAndApostilleDeviations = {
  poaDigitalCopy: "Nein",
  poaOriginalRequired: "Ja",
  poaDigitalSignature: "Nein",
  poaNotarization: "Ja",
  poaApostille: "Ja",
  poaHinweise: "Notariell beglaubigte und legalisierte Vollmacht erforderlich.",
}

// Abweichungen für Länder mit 3-Jahres-Benutzungsnachweis
export const threeYearUsageProofDeviations = {
  usageProofRequired: true,
  usageProofYears: 3,
  usageProofType: "Ja",
  additionalNotes: "Die Marke kann nach 3 Jahren Nichtbenutzung angefochten werden.",
}

// Abweichungen für Länder mit 5-Jahres-Benutzungsnachweis
export const fiveYearUsageProofDeviations = {
  usageProofRequired: true,
  usageProofYears: 5,
  usageProofType: "Ja",
  additionalNotes: "Die Marke kann nach 5 Jahren Nichtbenutzung angefochten werden.",
}

// Abweichungen für US-ähnliche Länder
export const usStyleDeviations = {
  usageProofRequired: true,
  usageProofYears: 6,
  usageDeclarationRequired: true,
  usageDeclarationYears: [5, 10],
  lateFilingMonths: 6,
  filingPeriodStart: "Jederzeit",
  additionalNotes:
    "Eine Benutzungserklärung zwischen dem 5. und 6. Jahr nach der Registrierung und bei der Verlängerung erforderlich.",
}

// Abweichungen für Länder mit kurzer Nachfrist
export const shortLateRenewalDeviations = {
  lateRenewalMonths: 1,
  additionalNotes: "Kurze Nachfrist von nur einem Monat für verspätete Verlängerungen.",
}

// Abweichungen für Länder mit einfacher Vollmacht
export const simplePoaDeviations = {
  poaDigitalCopy: "Ja",
  poaOriginalRequired: "Nein",
  poaDigitalSignature: "Ja",
  poaNotarization: "Nein",
  poaApostille: "Nein",
  poaHinweise: "Einfach unterschriebene Vollmacht ist ausreichend.",
}

// Abweichungen für Länder mit Original-Vollmacht
export const originalPoaDeviations = {
  poaDigitalCopy: "Nein",
  poaOriginalRequired: "Ja",
  poaDigitalSignature: "Nein",
  poaNotarization: "Nein",
  poaApostille: "Nein",
  poaHinweise: "Original der Vollmacht erforderlich.",
}

// Hilfsfunktion zum Kombinieren von Abweichungen
export function combineDeviations(...deviationSets: Record<string, any>[]): Record<string, any> {
  return Object.assign({}, ...deviationSets)
}
