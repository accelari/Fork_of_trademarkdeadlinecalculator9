import { europeanCountries } from "./countries/europe"
import { northAmericanCountries } from "./countries/north-america"
import { asianCountries } from "./countries/asia"
import { africanCountries } from "./countries/africa"
import { southAmericanCountries } from "./countries/south-america"
import { oceaniaCountries } from "./countries/oceania"
import { middleEastCountries } from "./countries/middle-east"
import { internationalOrganizations } from "./countries/international"
import { getBaseCountryCode } from "./countries/country-utils"

export const countriesData = [
  ...europeanCountries,
  ...northAmericanCountries,
  ...asianCountries,
  ...africanCountries,
  ...southAmericanCountries,
  ...oceaniaCountries,
  ...middleEastCountries,
  ...internationalOrganizations,
]

export type CountryData = {
  code: string
  country: string
  calculationBasis: "application" | "registration"
  protectionPeriod: number
  renewalPeriod: number
  renewalStartMonths: number
  renewalDeadlineMonths: number
  lateRenewalMonths: number
  usageProofRequired: boolean
  usageProofYears: number
  usageDeclarationRequired: boolean
  usageDeclarationYears?: number[]
  region: string
  registrationType: "direct" | "wipo" | "euipo" | "aripo" | "oapi" | "boip" | "gcc"
  additionalNotes?: string
  vertreterRequired?: string
  prufungsumfang?: string
  widerspruch?: string
  poaVertreterRequired?: string
  poaDigitalCopy?: string
  poaOriginalRequired?: string
  poaDigitalSignature?: string
  poaNotarization?: string
  poaApostille?: string
  poaHinweise?: string
  mitgliedschaften?: string[]
  priorityDeadlineMonths?: number
  priorityDocumentDeadlineMonths?: number
  lateFilingMonths?: number
  filingPeriodStart?: string
}

// Exportiere die Hilfsfunktion für andere Module
export { getBaseCountryCode }

// Entferne den fehlerhaften Import
// import { allCountries as allCountriesData } from "./data/countries/index"
// export const allCountries = allCountriesData
