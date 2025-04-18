// app/data/countries/common-rules.ts

// Importieren der Ländergruppen
import {
  poaDigitalCopyAcceptedCountries,
  poaOriginalRequiredCountries,
  poaDigitalSignatureAcceptedCountries,
  usageDeclarationRequiredCountries,
  usageDeclarationYears5Countries,
  usageDeclarationYears3Countries,
  usageDeclarationYears6Countries,
  usageDeclarationYears10Countries,
  oneMonthLateRenewalCountries,
  twelveMonthLateRenewalCountries,
  comprehensiveExaminationCountries,
  limitedExaminationCountries,
  formalExaminationCountries,
  madridProtocolCountries,
  parisConventionCountries,
  tripsCountries,
  aripoCountries,
  oapiCountries,
  gccCountries,
  euCountries,
  aseanCountries,
  mercosurCountries,
  andeanPactCountries,
} from "./rule-groups"

// Grundlegende Regelsätze
export const defaultDirectRules = {
  vertreterRequired: "Ja",
  prufungsumfang: "Umfassend",
  widerspruch: "Ja",
  priorityDeadlineMonths: 6,
  priorityDocumentDeadlineMonths: 3,
  poaDigitalCopy: "Ja",
  poaOriginalRequired: "Nein",
  poaDigitalSignature: "Ja",
  poaNotarization: "Nein",
  poaApostille: "Nein",
}

export const euMemberRules = {
  vertreterRequired: "Nein",
  prufungsumfang: "Beschränkt",
  widerspruch: "Ja",
  priorityDeadlineMonths: 6,
  priorityDocumentDeadlineMonths: 3,
  poaDigitalCopy: "Ja",
  poaOriginalRequired: "Nein",
  poaDigitalSignature: "Ja",
  poaNotarization: "Nein",
  poaApostille: "Nein",
}

// Kategorisierung nach Berechnungsbasis
export const applicationBasedCountries = [
  "DE",
  "EM",
  "FR",
  "GB",
  "IT",
  "ES",
  "CH",
  "BE",
  "LU",
  "IE",
  "PT",
  "PL",
  "SE",
  "FI",
  "DK",
  "GR",
  "HR",
  "EE",
  "LV",
  "LT",
  "CZ",
  "SK",
  "SI",
  "BG",
  "RO",
  "CY",
  "MT",
  "IS",
  "LI",
  "MC",
  "AL",
  "BA",
  "MK",
  "ME",
  "RS",
  "AE",
  "TH",
  "VN",
  "MY",
  "ZA",
  "MX",
  "DO",
  "CV",
  "DJ",
  "ET",
]

export const registrationBasedCountries = [
  "JP",
  "CN",
  "KR",
  "CA",
  "US",
  "AU",
  "NZ",
  "BR",
  "AR",
  "CL",
  "CO",
  "PE",
  "VE",
  "IQ",
  "IR",
  "IL",
  "JO",
  "LB",
  "SY",
  "SA",
  "AZ",
  "BD",
  "BT",
  "BN",
  "GE",
  "KG",
  "KP",
  "LA",
  "MO",
  "MV",
  "MN",
  "MM",
  "NP",
  "PK",
  "PH",
  "SG",
  "TW",
  "UZ",
  "BH",
  "QA",
  "BO",
  "EC",
  "FK",
  "GF",
  "GY",
  "PY",
  "SR",
  "UY",
  "BW",
  "CD",
  "GQ",
  "GM",
  "GH",
  "GN",
  "NA",
  "NE",
  "RW",
  "ST",
  "SN",
  "SC",
  "SL",
  "SO",
  "SS",
  "SD",
  "TZ",
  "TG",
  "TN",
  "UG",
  "EH",
  "ZM",
  "ZW",
]

// Kategorisierung nach Markenlaufzeit
export const tenYearTermCountries = [
  "DE",
  "EM",
  "FR",
  "GB",
  "IT",
  "ES",
  "CH",
  "BE",
  "LU",
  "IE",
  "PT",
  "PL",
  "SE",
  "FI",
  "DK",
  "GR",
  "HR",
  "EE",
  "LV",
  "LT",
  "CZ",
  "SK",
  "SI",
  "BG",
  "RO",
  "CY",
  "MT",
  "IS",
  "LI",
  "MC",
  "AL",
  "BA",
  "MK",
  "ME",
  "RS",
  "JP",
  "CN",
  "KR",
  "CA",
  "US",
  "MX",
  "AU",
  "NZ",
  "BR",
  "AR",
  "CL",
  "CO",
  "PE",
  "IQ",
  "IR",
  "IL",
  "JO",
  "LB",
  "SY",
  "SA",
  "AE",
  "TH",
  "VN",
  "MY",
  "ZA",
  "AZ",
  "BT",
  "BN",
  "GE",
  "KG",
  "KP",
  "LA",
  "MO",
  "MV",
  "MN",
  "MM",
  "PK",
  "PH",
  "SG",
  "TW",
  "UZ",
  "BH",
  "QA",
  "BO",
  "EC",
  "GF",
  "PY",
  "SR",
  "UY",
  "BW",
  "CD",
  "GQ",
  "GM",
  "GH",
  "GN",
  "NA",
  "NE",
  "RW",
  "ST",
  "SN",
  "SC",
  "SO",
  "SS",
  "SD",
  "TZ",
  "TG",
  "TN",
  "UG",
  "EH",
  "ZM",
  "ZW",
]

export const sevenYearTermCountries = ["BM", "NP", "SL", "ZM", "KI", "NU"]

export const fifteenYearTermCountries = ["LB", "VE"]

// Kategorisierung nach Vollmachtserfordernis
export const representativeRequiredCountries = [
  "FR",
  "ES",
  "CH",
  "BE",
  "LU",
  "PT",
  "PL",
  "SE",
  "FI",
  "DK",
  "GR",
  "HR",
  "EE",
  "LV",
  "LT",
  "CZ",
  "SK",
  "SI",
  "BG",
  "RO",
  "CY",
  "MT",
  "IS",
  "LI",
  "MC",
  "AL",
  "BA",
  "MK",
  "ME",
  "RS",
  "JP",
  "CN",
  "KR",
  "MX",
  "US",
  "BR",
  "AR",
  "CL",
  "CO",
  "PE",
  "VE",
  "IQ",
  "IR",
  "IL",
  "JO",
  "LB",
  "SY",
  "SA",
  "AE",
  "TH",
  "VN",
  "MY",
  "ZA",
  "AZ",
  "BD",
  "BT",
  "BN",
  "GE",
  "KG",
  "KP",
  "LA",
  "MO",
  "MV",
  "MN",
  "MM",
  "NP",
  "PK",
  "PH",
  "SG",
  "TW",
  "UZ",
  "BH",
  "QA",
  "BO",
  "EC",
  "FK",
  "GF",
  "GY",
  "PY",
  "SR",
  "UY",
  "BW",
  "CD",
  "GQ",
  "GM",
  "GH",
  "GN",
  "NA",
  "NE",
  "RW",
  "ST",
  "SN",
  "SC",
  "SL",
  "SO",
  "SS",
  "SD",
  "TZ",
  "TG",
  "TN",
  "UG",
  "EH",
  "ZM",
  "ZW",
]

export const representativeNotRequiredCountries = ["DE", "EM", "GB", "IT", "IE", "AU", "NZ", "CA", "ER"]

// Kategorisierung nach Benutzungsnachweis
export const usageProofRequiredCountriesList = [
  "EM",
  "US",
  "MX",
  "PH",
  "AR",
  "DZ",
  "HT",
  "AE",
  "AF",
  "AZ",
  "KP",
  "LA",
  "MM",
  "UZ",
  "BH",
  "CD",
  "GQ",
  "GN",
  "TG",
  "TN",
]

// Kategorisierung nach Benutzungserklärung
export const usageDeclarationRequiredCountriesList = ["US", "MX", "PH", "AR", "HT", "CV"]

// Kategorisierung nach Prüfungsumfang
export const comprehensiveExaminationCountriesList = [
  "DE",
  "GB",
  "IE",
  "JP",
  "CN",
  "KR",
  "CA",
  "US",
  "MX",
  "AU",
  "NZ",
  "BR",
  "AR",
  "CL",
  "CO",
  "PE",
  "VE",
  "IQ",
  "IR",
  "IL",
  "JO",
  "LB",
  "SY",
  "SA",
  "AE",
  "TH",
  "VN",
  "MY",
  "ZA",
  "AZ",
  "BD",
  "BT",
  "BN",
  "GE",
  "KG",
  "KP",
  "LA",
  "MO",
  "MV",
  "MN",
  "MM",
  "NP",
  "PK",
  "PH",
  "SG",
  "TW",
  "UZ",
  "BH",
  "QA",
  "BO",
  "EC",
  "GY",
  "PY",
  "SR",
  "UY",
  "BW",
  "CD",
  "GQ",
  "GM",
  "GH",
  "GN",
  "NA",
  "NE",
  "RW",
  "SN",
  "SD",
  "TZ",
  "TG",
  "TN",
  "UG",
  "ZM",
  "ZW",
]

export const limitedExaminationCountriesList = [
  "EM",
  "FR",
  "IT",
  "ES",
  "CH",
  "BE",
  "LU",
  "PT",
  "PL",
  "SE",
  "FI",
  "DK",
  "GR",
  "HR",
  "EE",
  "LV",
  "LT",
  "CZ",
  "SK",
  "SI",
  "BG",
  "RO",
  "CY",
  "MT",
  "IS",
  "LI",
  "MC",
  "AL",
  "BA",
  "MK",
  "ME",
  "RS",
  "CV",
  "DJ",
  "FK",
  "GF",
  "SL",
  "SO",
  "SS",
  "EH",
  "KI",
  "NU",
  "ST",
  "SC",
]

// Kategorisierung nach Widerspruchsmöglichkeit
export const oppositionPossibleCountriesList = [
  "DE",
  "EM",
  "FR",
  "GB",
  "IT",
  "ES",
  "CH",
  "BE",
  "LU",
  "IE",
  "PT",
  "PL",
  "SE",
  "FI",
  "DK",
  "GR",
  "HR",
  "EE",
  "LV",
  "LT",
  "CZ",
  "SK",
  "SI",
  "BG",
  "RO",
  "CY",
  "MT",
  "IS",
  "LI",
  "MC",
  "AL",
  "BA",
  "MK",
  "ME",
  "RS",
  "JP",
  "CN",
  "KR",
  "CA",
  "US",
  "MX",
  "AU",
  "NZ",
  "BR",
  "AR",
  "CL",
  "CO",
  "PE",
  "VE",
  "IL",
  "JO",
  "LB",
  "SY",
  "SA",
  "AE",
  "TH",
  "VN",
  "MY",
  "ZA",
  "AZ",
  "BD",
  "BT",
  "BN",
  "GE",
  "KG",
  "KP",
  "LA",
  "MO",
  "MV",
  "MN",
  "MM",
  "PK",
  "PH",
  "SG",
  "TW",
  "UZ",
  "BH",
  "QA",
  "BO",
  "EC",
  "FK",
  "GY",
  "PY",
  "SR",
  "UY",
  "BW",
  "CD",
  "GQ",
  "GM",
  "GH",
  "GN",
  "NA",
  "RW",
  "ST",
  "SN",
  "SC",
  "SL",
  "SO",
  "SD",
  "TZ",
  "TG",
  "TN",
  "UG",
  "EH",
  "ZM",
  "ZW",
]

export const oppositionNotPossibleCountries = ["IQ", "IR", "NP", "DJ", "ER", "SS", "EH"]

// Kategorisierung nach Vollmachtsanforderungen
export const poaNotarizationRequiredCountries = [
  "AE",
  "AF",
  "AZ",
  "BD",
  "BT",
  "KG",
  "KP",
  "LA",
  "MO",
  "MV",
  "MN",
  "MM",
  "NP",
  "PK",
  "UZ",
  "BH",
  "IQ",
  "IR",
  "JO",
  "LB",
  "SY",
  "QA",
  "BO",
  "EC",
  "GY",
  "PY",
  "SR",
  "UY",
  "CD",
  "GQ",
  "GN",
  "RW",
  "ST",
  "SC",
  "SL",
  "SO",
  "SS",
  "SD",
  "TZ",
  "TG",
  "TN",
  "UG",
  "EH",
  "ZM",
  "ZW",
]

export const poaApostilleRequiredCountries = [
  "AE",
  "AF",
  "AZ",
  "BD",
  "BT",
  "KG",
  "KP",
  "LA",
  "MO",
  "MV",
  "MN",
  "MM",
  "NP",
  "PK",
  "UZ",
  "BH",
  "IQ",
  "IR",
  "JO",
  "LB",
  "SY",
  "QA",
  "BO",
  "EC",
  "GY",
  "PY",
  "SR",
  "UY",
  "CD",
  "GQ",
  "GN",
  "RW",
  "ST",
  "SC",
  "SL",
  "SO",
  "SS",
  "SD",
  "TZ",
  "TG",
  "TN",
  "UG",
  "EH",
  "ZM",
  "ZW",
]

// Kategorisierung nach Verlängerungsfristen
export const standardRenewalCountries = [
  "DE",
  "EM",
  "FR",
  "GB",
  "IT",
  "ES",
  "CH",
  "BE",
  "LU",
  "IE",
  "PT",
  "PL",
  "SE",
  "FI",
  "DK",
  "GR",
  "HR",
  "EE",
  "LV",
  "LT",
  "CZ",
  "SK",
  "SI",
  "BG",
  "RO",
  "CY",
  "MT",
  "IS",
  "LI",
  "MC",
  "AL",
  "BA",
  "MK",
  "ME",
  "RS",
  "US",
  "CA",
  "AU",
  "NZ",
  "BR",
  "AR",
  "CL",
  "CO",
  "PE",
  "VE",
  "IQ",
  "IR",
  "IL",
  "JO",
  "LB",
  "SY",
  "SA",
  "AE",
  "TH",
  "VN",
  "MY",
  "ZA",
  "AZ",
  "BD",
  "BT",
  "BN",
  "GE",
  "KG",
  "KP",
  "LA",
  "MO",
  "MV",
  "MN",
  "MM",
  "NP",
  "PK",
  "PH",
  "SG",
  "TW",
  "UZ",
  "BH",
  "QA",
  "BO",
  "EC",
  "FK",
  "GF",
  "GY",
  "PY",
  "SR",
  "UY",
  "BW",
  "CD",
  "GQ",
  "GM",
  "GH",
  "GN",
  "NA",
  "NE",
  "RW",
  "ST",
  "SN",
  "SC",
  "SL",
  "SO",
  "SS",
  "SD",
  "TZ",
  "TG",
  "TN",
  "UG",
  "EH",
  "ZM",
  "ZW",
]

export const extendedRenewalCountries = ["JP", "CN", "KR", "MY", "MX"]

// Neue Kategorisierung nach Verlängerungsfristen
export const standardRenewalPeriodCountries = [
  "DE",
  "EM",
  "FR",
  "GB",
  "IT",
  "ES",
  "CH",
  "BE",
  "LU",
  "IE",
  "PT",
  "PL",
  "SE",
  "FI",
  "DK",
  "GR",
  "HR",
  "EE",
  "LV",
  "LT",
  "CZ",
  "SK",
  "SI",
  "BG",
  "RO",
  "CY",
  "MT",
  "IS",
  "LI",
  "MC",
  "AL",
  "BA",
  "MK",
  "ME",
  "RS",
  "JP",
  "CN",
  "KR",
  "CA",
  "US",
  "MX",
  "AU",
  "NZ",
  "BR",
  "AR",
  "CL",
  "CO",
  "PE",
  "IQ",
  "IR",
  "IL",
  "JO",
  "LB",
  "SY",
  "SA",
  "AE",
  "TH",
  "VN",
  "MY",
  "ZA",
]

export const extendedRenewalPeriodCountries = ["BM", "NP", "SL", "ZM", "KI", "NU", "LB", "VE"]

// Kategorisierung nach Verlängerungsstart
export const sixMonthRenewalStartCountries = [
  "DE",
  "EM",
  "FR",
  "GB",
  "IT",
  "ES",
  "CH",
  "BE",
  "LU",
  "IE",
  "PT",
  "PL",
  "SE",
  "FI",
  "DK",
  "GR",
  "HR",
  "EE",
  "LV",
  "LT",
  "CZ",
  "SK",
  "SI",
  "BG",
  "RO",
  "CY",
  "MT",
  "IS",
  "LI",
  "MC",
  "AL",
  "BA",
  "MK",
  "ME",
  "RS",
  "US",
  "CA",
  "AU",
  "NZ",
  "BR",
  "AR",
  "CL",
  "CO",
  "PE",
  "VE",
  "IQ",
  "IR",
  "IL",
  "JO",
  "LB",
  "SY",
  "SA",
  "AE",
  "TH",
  "VN",
  "MY",
  "ZA",
]

export const twelveMonthRenewalStartCountries = ["JP", "CN", "KR", "MY", "MX"]

// Kategorisierung nach Nachfrist für Verlängerung
export const sixMonthLateRenewalCountries = [
  "DE",
  "EM",
  "FR",
  "GB",
  "IT",
  "ES",
  "CH",
  "BE",
  "LU",
  "IE",
  "PT",
  "PL",
  "SE",
  "FI",
  "DK",
  "GR",
  "HR",
  "EE",
  "LV",
  "LT",
  "CZ",
  "SK",
  "SI",
  "BG",
  "RO",
  "CY",
  "MT",
  "IS",
  "LI",
  "MC",
  "AL",
  "BA",
  "MK",
  "ME",
  "RS",
  "JP",
  "CN",
  "KR",
  "CA",
  "US",
  "MX",
  "AU",
  "NZ",
  "BR",
  "AR",
  "CL",
  "CO",
  "PE",
  "VE",
  "IQ",
  "IR",
  "IL",
  "JO",
  "LB",
  "SY",
  "SA",
  "AE",
  "TH",
  "VN",
  "MY",
  "ZA",
  "AZ",
  "BD",
  "BT",
  "BN",
  "GE",
  "KG",
  "KP",
  "LA",
  "MO",
  "MV",
  "MN",
  "MM",
  "PK",
  "PH",
  "SG",
  "TW",
  "UZ",
  "BH",
  "QA",
  "BO",
  "EC",
  "FK",
  "GF",
  "GY",
  "PY",
  "SR",
  "UY",
  "BW",
  "CD",
  "GQ",
  "GM",
  "GH",
  "GN",
  "NA",
  "NE",
  "RW",
  "ST",
  "SN",
  "SC",
  "SL",
  "SO",
  "SS",
  "SD",
  "TZ",
  "TG",
  "TN",
  "UG",
  "EH",
  "ZM",
  "ZW",
]

export const threeMonthLateRenewalCountries = ["BM", "NP", "SL", "ZM", "KI", "NU"]

// Kategorisierung nach Benutzungsnachweis-Typ
export const regularUsageProofCountriesList = ["US", "MX", "PH", "AR"]
export const onChallengeUsageProofCountriesList = [
  "EM",
  "JP",
  "CN",
  "KR",
  "CA",
  "AU",
  "NZ",
  "BR",
  "CL",
  "CO",
  "PE",
  "VE",
]
export const noUsageProofCountriesList = [
  "DE",
  "FR",
  "GB",
  "IT",
  "ES",
  "CH",
  "BE",
  "LU",
  "IE",
  "PT",
  "PL",
  "SE",
  "FI",
  "DK",
  "GR",
  "HR",
  "EE",
  "LV",
  "LT",
  "CZ",
  "SK",
  "SI",
  "BG",
  "RO",
  "CY",
  "MT",
  "IS",
  "LI",
  "MC",
  "AL",
  "BA",
  "MK",
  "ME",
  "RS",
]

// Hilfsfunktion zur Bestimmung der detaillierten Benutzungsnachweis-Informationen
export const threeYearUsageProofCountries = ["MX"]
export const fiveYearUsageProofCountries = ["US", "PH", "AR"]

// Hilfsfunktion zur Bestimmung der detaillierten Benutzungserklärung-Informationen
export const threeYearUsageDeclarationCountries = ["MX"]
export const fiveYearUsageDeclarationCountries = ["US", "PH", "AR"]

// Hilfsfunktion zur Bestimmung der Benutzungsnachweis-Informationen
export function getUsageProofRequired(countryCode: string): boolean {
  return isInCategory(countryCode, usageProofRequiredCountriesList)
}

// Hilfsfunktion zur Bestimmung der Benutzungserklärung-Informationen
export function getUsageDeclarationRequired(countryCode: string): boolean {
  return isInCategory(countryCode, usageDeclarationRequiredCountriesList)
}

function isInCategory(countryCode: string, category: string[]): boolean {
  return category.includes(countryCode)
}

// Hilfsfunktionen zur Kategorisierung
export function getCalculationBasis(countryCode: string): "application" | "registration" {
  return applicationBasedCountries.includes(countryCode) ? "application" : "registration"
}

export function getProtectionPeriod(countryCode: string): number {
  if (tenYearTermCountries.includes(countryCode)) {
    return 10
  } else if (sevenYearTermCountries.includes(countryCode)) {
    return 7
  } else if (fifteenYearTermCountries.includes(countryCode)) {
    return 15
  }
  return 10 // Default
}

export function getRepresentativeRequired(countryCode: string): string {
  if (representativeRequiredCountries.includes(countryCode)) {
    return "Ja"
  } else if (representativeNotRequiredCountries.includes(countryCode)) {
    return "Nein"
  }
  return "Ja" // Default
}

export function getPrufungsumfang(countryCode: string): string {
  if (comprehensiveExaminationCountries.includes(countryCode)) {
    return "Umfassend"
  } else if (limitedExaminationCountries.includes(countryCode)) {
    return "Beschränkt"
  } else if (formalExaminationCountries.includes(countryCode)) {
    return "Formal"
  }
  return "Umfassend" // Default
}

export function getWiderspruch(countryCode: string): string {
  if (oppositionPossibleCountriesList.includes(countryCode)) {
    return "Ja"
  } else if (oppositionNotPossibleCountries.includes(countryCode)) {
    return "Nein"
  }
  return "Ja" // Default
}

export function getPoaRequirements(countryCode: string): {
  digitalCopy: string
  originalRequired: string
  digitalSignature: string
  notarization: string
  apostille: string
} {
  return {
    digitalCopy: poaDigitalCopyAcceptedCountries.includes(countryCode) ? "Ja" : "Nein",
    originalRequired: poaOriginalRequiredCountries.includes(countryCode) ? "Ja" : "Nein",
    digitalSignature: poaDigitalSignatureAcceptedCountries.includes(countryCode) ? "Ja" : "Nein",
    notarization: poaNotarizationRequiredCountries.includes(countryCode) ? "Ja" : "Nein",
    apostille: poaApostilleRequiredCountries.includes(countryCode) ? "Ja" : "Nein",
  }
}

export function getRenewalPeriods(countryCode: string): {
  renewalStartMonths: number
  renewalDeadlineMonths: number
  lateRenewalMonths: number
} {
  let renewalStartMonths = 6 // Default
  if (twelveMonthRenewalStartCountries.includes(countryCode)) {
    renewalStartMonths = 12
  } else if (sixMonthRenewalStartCountries.includes(countryCode)) {
    renewalStartMonths = 6
  }

  const renewalDeadlineMonths = 0 // Immer 0 (bis zum Ablauftag)

  let lateRenewalMonths = 6 // Default
  if (threeMonthLateRenewalCountries.includes(countryCode)) {
    lateRenewalMonths = 3
  } else if (oneMonthLateRenewalCountries.includes(countryCode)) {
    lateRenewalMonths = 1
  } else if (twelveMonthLateRenewalCountries.includes(countryCode)) {
    lateRenewalMonths = 12
  } else if (sixMonthLateRenewalCountries.includes(countryCode)) {
    lateRenewalMonths = 6
  }

  return { renewalStartMonths, renewalDeadlineMonths, lateRenewalMonths }
}

export function getUsageProofDetails(countryCode: string): {
  required: boolean
  type: string
  deadlineYears: number | null
} {
  const required = usageProofRequiredCountriesList.includes(countryCode)
  const type = "Nachweis nur auf Antrag Dritter erforderlich"
  let deadlineYears: number | null = null

  if (threeYearUsageProofCountries.includes(countryCode)) {
    deadlineYears = 3
  } else if (fiveYearUsageProofCountries.includes(countryCode)) {
    deadlineYears = 5
  }

  return { required, type, deadlineYears }
}

export function getUsageDeclarationDetails(countryCode: string): {
  required: boolean
  type: string
  deadlineYears: number[] | null
} {
  const required = usageDeclarationRequiredCountries.includes(countryCode)
  const type = required
    ? "Eidesstattliche Nutzungserklärung erforderlich"
    : "Keine regelmäßige Benutzungserklärung erforderlich"
  let deadlineYears: number[] | null = null

  if (usageDeclarationYears3Countries.includes(countryCode)) {
    deadlineYears = [3]
  } else if (usageDeclarationYears5Countries.includes(countryCode)) {
    deadlineYears = [5]
  } else if (usageDeclarationYears6Countries.includes(countryCode)) {
    deadlineYears = [6]
  } else if (usageDeclarationYears10Countries.includes(countryCode)) {
    deadlineYears = [10]
  }

  // Spezialfall USA mit mehreren Fristen
  if (countryCode === "US") {
    deadlineYears = [5, 10, 20, 30, 40, 50]
  }

  return { required, type, deadlineYears }
}

export function getMitgliedschaften(countryCode: string): string[] {
  const mitgliedschaften: string[] = []

  if (parisConventionCountries.includes(countryCode)) {
    mitgliedschaften.push("Pariser Verbandsübereinkunft")
  }

  if (tripsCountries.includes(countryCode)) {
    mitgliedschaften.push("TRIPS")
  }

  if (madridProtocolCountries.includes(countryCode)) {
    mitgliedschaften.push("Madrid-Protokoll")
  }

  if (aripoCountries.includes(countryCode)) {
    mitgliedschaften.push("ARIPO")
  }

  if (oapiCountries.includes(countryCode)) {
    mitgliedschaften.push("OAPI")
  }

  if (gccCountries.includes(countryCode)) {
    mitgliedschaften.push("GCC")
  }

  if (euCountries.includes(countryCode)) {
    mitgliedschaften.push("EU")
  }

  if (aseanCountries.includes(countryCode)) {
    mitgliedschaften.push("ASEAN")
  }

  if (mercosurCountries.includes(countryCode)) {
    mitgliedschaften.push("Mercosur")
  }

  if (andeanPactCountries.includes(countryCode)) {
    mitgliedschaften.push("Andenpakt")
  }

  return mitgliedschaften
}
