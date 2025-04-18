// app/data/countries/country.ts
// This file contains the base function for creating country objects

export const createExtendedCountry = (
  code: string,
  country: string,
  region: string,
  registrationType: "direct" | "wipo" | "euipo" | "aripo" | "oapi" | "boip" | "gcc" = "direct",
  additionalProps: Partial<{
    calculationBasis: "application" | "registration" | "none"
    protectionPeriod: number
    renewalPeriod: number
    renewalStartMonths: number
    renewalDeadlineMonths: number
    lateRenewalMonths: number
    usageProofRequired: boolean
    usageProofYears: number
    usageDeclarationRequired: boolean
    usageDeclarationYears?: number[]
    isTerritory: boolean
    memberOf: string[]
    // Felder aus der ersten Tabelle
    vertreterRequired: "Ja" | "Nein" | "Ausländer" | "Basis" | "Territorial"
    prufungsumfang: "Formal" | "Formal/Absolut" | "Umfassend" | "Beschränkt" | "Territorial"
    widerspruch: "Ja" | "Nein" | "Territorial"
    poaVertreterRequired: "Ja" | "Nein"
    poaDigitalCopy: "Ja" | "Nein"
    poaOriginalRequired: "Ja" | "Nein"
    poaDigitalSignature: "Ja" | "Nein"
    poaNotarization: "Ja" | "Nein"
    poaApostille: "Ja" | "Nein"
    poaHinweise: string
    mitgliedschaften: string[]
    // Neue Felder aus der zweiten Tabelle
    priorityDeadlineMonths: number
    priorityDocumentDeadlineMonths: number
    representativeRequired: "Ja" | "Nein" | "Ausländer" | "Basis" | "k.A."
    digitalCopyPOA: "Ja" | "Nein" | "k.A."
    originalPOA: "Ja" | "Nein" | "k.A."
    digitalSignaturePOA: "Ja" | "Nein" | "k.A."
    notarizationPOA: "Ja" | "Nein" | "k.A."
    apostillePOA: "Ja" | "Nein" | "k.A."
    // Neue Felder aus der Benutzungsnachweise-Tabelle
    usageProofType: "Ja" | "Nein" | "Nur bei Anfechtung" | "Nach Landesrecht" | "Nach behördlicher Anforderung"
    usageDeclarationType: "Ja" | "Nein" | "Nach Landesrecht"
    usageProofDeadlineYears: number | "Keine regelmäßige Frist" | "Nach behördlicher Anforderung"
    usageDeclarationDeadlineYears: number | null
    lateFilingMonths: number
    filingPeriodStart: "Jederzeit" | string
    additionalNotes: string
  }> = {},
) => {
  return {
    code: code,
    country,
    calculationBasis: "application",
    protectionPeriod: 10,
    renewalPeriod: 10,
    renewalStartMonths: 6,
    renewalDeadlineMonths: 0,
    lateRenewalMonths: 6,
    usageProofRequired: false,
    usageProofYears: 0,
    usageDeclarationRequired: false,
    region,
    registrationType,
    isTerritory: false,
    // Standardwerte für Felder aus der ersten Tabelle
    vertreterRequired: "Nein",
    prufungsumfang: "Formal/Absolut",
    widerspruch: "Ja",
    poaVertreterRequired: "Nein",
    poaDigitalCopy: "Ja",
    poaOriginalRequired: "Nein",
    poaDigitalSignature: "Ja",
    poaNotarization: "Nein",
    poaApostille: "Nein",
    poaHinweise: "",
    mitgliedschaften: [],
    // Standardwerte für neue Felder aus der zweiten Tabelle
    priorityDeadlineMonths: 6,
    priorityDocumentDeadlineMonths: 3,
    representativeRequired: "Nein",
    digitalCopyPOA: "Ja",
    originalPOA: "Nein",
    digitalSignaturePOA: "Ja",
    notarizationPOA: "Nein",
    apostillePOA: "Nein",
    // Standardwerte für Benutzungsnachweise-Tabelle
    usageProofType: "Nur bei Anfechtung",
    usageDeclarationType: "Nein",
    usageProofDeadlineYears: "Keine regelmäßige Frist",
    usageDeclarationDeadlineYears: null,
    lateFilingMonths: 6,
    filingPeriodStart: "Jederzeit",
    additionalNotes: "",
    ...additionalProps,
  }
}
