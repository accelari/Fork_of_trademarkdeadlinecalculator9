import { europeanCountries } from "./europe"
import { asianCountries } from "./asia"
import { africanCountries } from "./africa"
import { northAmericanCountries } from "./north-america"
import { southAmericanCountries } from "./south-america"
import { oceaniaCountries } from "./oceania"
import { middleEastCountries } from "./middle-east"
import { internationalCountries } from "./international"

// Kombiniere alle Länder in einer Liste
export const allCountries = [
  ...europeanCountries,
  ...asianCountries,
  ...africanCountries,
  ...northAmericanCountries,
  ...southAmericanCountries,
  ...oceaniaCountries,
  ...middleEastCountries,
  ...internationalCountries,
]

// Exportiere die Länder nach Region
export {
  europeanCountries,
  asianCountries,
  africanCountries,
  northAmericanCountries,
  southAmericanCountries,
  oceaniaCountries,
  middleEastCountries,
  internationalCountries,
}

// Exportiere die Hilfsfunktionen
export * from "./country-utils"
