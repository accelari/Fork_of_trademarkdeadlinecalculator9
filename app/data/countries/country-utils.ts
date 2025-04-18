// This file is a utility file for country-related functions
// It should be imported in the country files
import { createExtendedCountry } from "./country"
import {
  getCalculationBasis,
  getProtectionPeriod,
  getRepresentativeRequired,
  getPrufungsumfang,
  getWiderspruch,
  getPoaRequirements,
  getRenewalPeriods,
  getUsageProofDetails,
  getUsageDeclarationDetails,
  getMitgliedschaften,
} from "./common-rules"

// Hilfsfunktion zum Extrahieren des Basiscodes aus einem Ländercode
export const getBaseCountryCode = (countryCode: string): string => {
  // Entferne alle Suffixe nach dem ersten Unterstrich
  const baseCode = countryCode.split("_")[0]

  // Spezielle Fälle für internationale Organisationen
  switch (baseCode) {
    case "EM":
      return "EU" // EUIPO
    case "OA":
      return "OAPI" // Organisation Africaine de la Propriété Intellectuelle
    case "AP":
      return "ARIPO" // African Regional Intellectual Property Organization
    case "BX":
      return "BOIP" // Benelux-Markenamt
    case "GC":
      return "GCC" // Golf-Kooperationsrat
    case "WO":
    case "IB":
      return "WIPO" // World Intellectual Property Organization
    default:
      return baseCode
  }
}

// Exportiere die createExtendedCountry-Funktion aus der country.ts-Datei
export { createExtendedCountry }

// Implementiere die createCategorizedCountry-Funktion
export function createCategorizedCountry(
  code: string,
  name: string,
  region: string,
  registrationType: "direct" | "wipo" | "euipo" | "aripo" | "oapi" | "boip" | "gcc" = "direct",
  additionalProps: Record<string, any> = {},
) {
  // Bestimme die Standardeigenschaften basierend auf den Ländergruppen
  const calculationBasis = additionalProps.calculationBasis || getCalculationBasis(code)
  const protectionPeriod = additionalProps.protectionPeriod || getProtectionPeriod(code)
  const vertreterRequired = additionalProps.vertreterRequired || getRepresentativeRequired(code)
  const prufungsumfang = additionalProps.prufungsumfang || getPrufungsumfang(code)
  const widerspruch = additionalProps.widerspruch || getWiderspruch(code)
  const poaRequirements = getPoaRequirements(code)
  const renewalPeriods = getRenewalPeriods(code)
  const usageProofDetails = getUsageProofDetails(code)
  const usageDeclarationDetails = getUsageDeclarationDetails(code)
  const mitgliedschaften = additionalProps.mitgliedschaften || getMitgliedschaften(code)

  // Erstelle das Land mit den Standardeigenschaften und den zusätzlichen Eigenschaften
  return createExtendedCountry(code, name, region, registrationType, {
    calculationBasis,
    protectionPeriod,
    renewalPeriod: protectionPeriod, // Standardmäßig gleich der Schutzdauer
    ...renewalPeriods,
    usageProofRequired: usageProofDetails.required,
    usageProofYears: usageProofDetails.deadlineYears || 0,
    usageDeclarationRequired: usageDeclarationDetails.required,
    usageDeclarationYears: usageDeclarationDetails.deadlineYears || [],
    vertreterRequired,
    prufungsumfang,
    widerspruch,
    ...poaRequirements,
    mitgliedschaften,
    ...additionalProps,
  })
}
