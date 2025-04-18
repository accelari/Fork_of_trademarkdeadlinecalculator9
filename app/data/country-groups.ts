import { countriesData } from "./countries"

// Hilfsfunktion zum Gruppieren von Ländern nach einer Eigenschaft
function groupCountriesByProperty(property: keyof (typeof countriesData)[0]) {
  const groups: Record<string, string[]> = {}

  countriesData.forEach((country) => {
    const value = country[property]
    const valueKey = value !== undefined ? String(value) : "undefined"

    if (!groups[valueKey]) {
      groups[valueKey] = []
    }

    groups[valueKey].push(country.code)
  })

  return groups
}

// Berechnungsbasis-Gruppen
export const calculationBasisGroups = groupCountriesByProperty("calculationBasis")

// Schutzdauer-Gruppen
export const protectionPeriodGroups = groupCountriesByProperty("protectionPeriod")

// Verlängerungszeitraum-Gruppen
export const renewalPeriodGroups = groupCountriesByProperty("renewalPeriod")

// Verlängerungsfrist-Gruppen
export const renewalStartMonthsGroups = groupCountriesByProperty("renewalStartMonths")

// Verlängerungsdeadline-Gruppen
export const renewalDeadlineMonthsGroups = groupCountriesByProperty("renewalDeadlineMonths")

// Nachfrist-Gruppen
export const lateRenewalMonthsGroups = groupCountriesByProperty("lateRenewalMonths")

// Benutzungsnachweis-Gruppen
export const usageProofRequiredGroups = groupCountriesByProperty("usageProofRequired")

// Benutzungsnachweisfrist-Gruppen
export const usageProofYearsGroups = groupCountriesByProperty("usageProofYears")

// Benutzungserklärung-Gruppen
export const usageDeclarationRequiredGroups = groupCountriesByProperty("usageDeclarationRequired")

// Benutzungserklärungsjahre-Gruppen
export const usageDeclarationYearsGroups = groupCountriesByProperty("usageDeclarationYears")

// Vertretererfordernis-Gruppen
export const vertreterRequiredGroups = groupCountriesByProperty("vertreterRequired")

// Prüfungsumfang-Gruppen
export const prufungsumfangGroups = groupCountriesByProperty("prufungsumfang")

// Widerspruch-Gruppen
export const widerspruchGroups = groupCountriesByProperty("widerspruch")

// Vollmacht Vertreter-Gruppen
export const poaVertreterRequiredGroups = groupCountriesByProperty("poaVertreterRequired")

// Vollmacht Digitalkopie-Gruppen
export const poaDigitalCopyGroups = groupCountriesByProperty("poaDigitalCopy")

// Vollmacht Original-Gruppen
export const poaOriginalRequiredGroups = groupCountriesByProperty("poaOriginalRequired")

// Vollmacht Digitale Signatur-Gruppen
export const poaDigitalSignatureGroups = groupCountriesByProperty("poaDigitalSignature")

// Vollmacht Notarisierung-Gruppen
export const poaNotarizationGroups = groupCountriesByProperty("poaNotarization")

// Vollmacht Apostille-Gruppen
export const poaApostilleGroups = groupCountriesByProperty("poaApostille")

// Vollmacht Hinweise-Gruppen
export const poaHinweiseGroups = groupCountriesByProperty("poaHinweise")

// Prioritätsfrist-Gruppen
export const priorityDeadlineMonthsGroups = groupCountriesByProperty("priorityDeadlineMonths")

// Prioritätsdokumentenfrist-Gruppen
export const priorityDocumentDeadlineMonthsGroups = groupCountriesByProperty("priorityDocumentDeadlineMonths")

// Benutzungsnachweisfrist-Gruppen
export const usageProofDeadlineYearsGroups = groupCountriesByProperty("usageProofDeadlineYears")

// Benutzungserklärungsfrist-Gruppen
export const usageDeclarationDeadlineYearsGroups = groupCountriesByProperty("usageDeclarationDeadlineYears")

// Nacheinreichungsfrist-Gruppen
export const lateFilingMonthsGroups = groupCountriesByProperty("lateFilingMonths")

// Einreichungszeitraum-Start-Gruppen
export const filingPeriodStartGroups = groupCountriesByProperty("filingPeriodStart")

// Mitgliedschaften-Gruppen
export function getMembershipGroups() {
  const groups: Record<string, string[]> = {}

  countriesData.forEach((country) => {
    if (country.mitgliedschaften) {
      country.mitgliedschaften.forEach((membership) => {
        if (!groups[membership]) {
          groups[membership] = []
        }
        groups[membership].push(country.code)
      })
    }
  })

  return groups
}

export const membershipGroups = getMembershipGroups()

// Alle Gruppen in einem Objekt zusammenfassen
export const allCountryGroups = {
  calculationBasis: calculationBasisGroups,
  protectionPeriod: protectionPeriodGroups,
  renewalPeriod: renewalPeriodGroups,
  renewalStartMonths: renewalStartMonthsGroups,
  renewalDeadlineMonths: renewalDeadlineMonthsGroups,
  lateRenewalMonths: lateRenewalMonthsGroups,
  usageProofRequired: usageProofRequiredGroups,
  usageProofYears: usageProofYearsGroups,
  usageDeclarationRequired: usageDeclarationRequiredGroups,
  usageDeclarationYears: usageDeclarationYearsGroups,
  vertreterRequired: vertreterRequiredGroups,
  prufungsumfang: prufungsumfangGroups,
  widerspruch: widerspruchGroups,
  poaVertreterRequired: poaVertreterRequiredGroups,
  poaDigitalCopy: poaDigitalCopyGroups,
  poaOriginalRequired: poaOriginalRequiredGroups,
  poaDigitalSignature: poaDigitalSignatureGroups,
  poaNotarization: poaNotarizationGroups,
  poaApostille: poaApostilleGroups,
  poaHinweise: poaHinweiseGroups,
  priorityDeadlineMonths: priorityDeadlineMonthsGroups,
  priorityDocumentDeadlineMonths: priorityDocumentDeadlineMonthsGroups,
  usageProofDeadlineYears: usageProofDeadlineYearsGroups,
  usageDeclarationDeadlineYears: usageDeclarationDeadlineYearsGroups,
  lateFilingMonths: lateFilingMonthsGroups,
  filingPeriodStart: filingPeriodStartGroups,
  membership: membershipGroups,
}

// Funktion zum Abrufen von Ländern mit identischen Werten für eine bestimmte Eigenschaft
export function getCountriesWithIdenticalValue(property: keyof typeof allCountryGroups, value: string): string[] {
  const groups = allCountryGroups[property]
  return groups[value] || []
}

// Funktion zum Abrufen aller möglichen Werte für eine bestimmte Eigenschaft
export function getAllValuesForProperty(property: keyof typeof allCountryGroups): string[] {
  const groups = allCountryGroups[property]
  return Object.keys(groups)
}

// Funktion zum Abrufen aller Länder, die zu einer bestimmten Gruppe gehören
export function getCountriesInGroup(groupName: keyof typeof allCountryGroups, value: string): string[] {
  return getCountriesWithIdenticalValue(groupName, value)
}

// Funktion zum Abrufen aller Gruppen für eine bestimmte Eigenschaft
export function getGroupsForProperty(property: keyof typeof allCountryGroups): Record<string, string[]> {
  return allCountryGroups[property]
}

// Funktion zum Abrufen aller Länder, die mehrere Kriterien erfüllen
export function getCountriesMatchingCriteria(
  criteria: Partial<Record<keyof typeof allCountryGroups, string>>,
): string[] {
  let result = Object.keys(countriesData.reduce((acc, country) => ({ ...acc, [country.code]: true }), {}))

  Object.entries(criteria).forEach(([property, value]) => {
    const propertyKey = property as keyof typeof allCountryGroups
    const countriesWithValue = getCountriesWithIdenticalValue(propertyKey, value)
    result = result.filter((code) => countriesWithValue.includes(code))
  })

  return result
}

// Funktion zum Abrufen der Anzahl der Länder in jeder Gruppe für eine bestimmte Eigenschaft
export function getCountsForProperty(property: keyof typeof allCountryGroups): Record<string, number> {
  const groups = allCountryGroups[property]
  const counts: Record<string, number> = {}

  Object.entries(groups).forEach(([value, countries]) => {
    counts[value] = countries.length
  })

  return counts
}

// Funktion zum Abrufen der Prozentsätze der Länder in jeder Gruppe für eine bestimmte Eigenschaft
export function getPercentagesForProperty(property: keyof typeof allCountryGroups): Record<string, number> {
  const groups = allCountryGroups[property]
  const percentages: Record<string, number> = {}
  const totalCountries = countriesData.length

  Object.entries(groups).forEach(([value, countries]) => {
    percentages[value] = (countries.length / totalCountries) * 100
  })

  return percentages
}

// Funktion zum Abrufen der häufigsten Werte für eine bestimmte Eigenschaft
export function getMostCommonValuesForProperty(
  property: keyof typeof allCountryGroups,
  limit = 5,
): Array<{ value: string; count: number }> {
  const counts = getCountsForProperty(property)

  return Object.entries(counts)
    .map(([value, count]) => ({ value, count }))
    .sort((a, b) => b.count - a.count)
    .slice(0, limit)
}

// Funktion zum Abrufen der seltensten Werte für eine bestimmte Eigenschaft
export function getLeastCommonValuesForProperty(
  property: keyof typeof allCountryGroups,
  limit = 5,
): Array<{ value: string; count: number }> {
  const counts = getCountsForProperty(property)

  return Object.entries(counts)
    .map(([value, count]) => ({ value, count }))
    .sort((a, b) => a.count - b.count)
    .slice(0, limit)
}

// Funktion zum Abrufen von Ländern, die in mehreren Gruppen vorkommen
export function getCountriesInMultipleGroups(
  groups: Array<{ property: keyof typeof allCountryGroups; value: string }>,
): string[] {
  if (groups.length === 0) return []

  // Starte mit den Ländern aus der ersten Gruppe
  let result = getCountriesWithIdenticalValue(groups[0].property, groups[0].value)

  // Filtere nach den Ländern, die auch in allen anderen Gruppen vorkommen
  for (let i = 1; i < groups.length; i++) {
    const countriesInGroup = getCountriesWithIdenticalValue(groups[i].property, groups[i].value)
    result = result.filter((code) => countriesInGroup.includes(code))
  }

  return result
}

// Funktion zum Abrufen von Ländern, die in mindestens einer von mehreren Gruppen vorkommen
export function getCountriesInAnyGroup(
  groups: Array<{ property: keyof typeof allCountryGroups; value: string }>,
): string[] {
  if (groups.length === 0) return []

  const result = new Set<string>()

  groups.forEach(({ property, value }) => {
    const countriesInGroup = getCountriesWithIdenticalValue(property, value)
    countriesInGroup.forEach((code) => result.add(code))
  })

  return Array.from(result)
}

// Funktion zum Abrufen von Ländern, die in einer Gruppe vorkommen, aber nicht in einer anderen
export function getCountriesInOneGroupButNotAnother(
  includeGroup: { property: keyof typeof allCountryGroups; value: string },
  excludeGroup: { property: keyof typeof allCountryGroups; value: string },
): string[] {
  const countriesInIncludeGroup = getCountriesWithIdenticalValue(includeGroup.property, includeGroup.value)
  const countriesInExcludeGroup = getCountriesWithIdenticalValue(excludeGroup.property, excludeGroup.value)

  return countriesInIncludeGroup.filter((code) => !countriesInExcludeGroup.includes(code))
}

// Funktion zum Abrufen von Ländern, die in einer bestimmten Region liegen und bestimmte Eigenschaften haben
export function getCountriesInRegionWithProperties(
  region: string,
  properties: Partial<Record<keyof typeof allCountryGroups, string>>,
): string[] {
  // Starte mit allen Ländern in der Region
  const countriesInRegion = getCountriesWithIdenticalValue("region", region)

  // Filtere nach den Ländern, die auch die angegebenen Eigenschaften haben
  return countriesInRegion.filter((code) => {
    const country = countriesData.find((c) => c.code === code)
    if (!country) return false

    // Prüfe, ob das Land alle angegebenen Eigenschaften hat
    return Object.entries(properties).every(([property, value]) => {
      const propertyKey = property as keyof typeof country
      return String(country[propertyKey]) === value
    })
  })
}

// Funktion zum Abrufen von Ländern, die ähnliche Eigenschaften wie ein Referenzland haben
export function getCountriesWithSimilarProperties(
  referenceCountryCode: string,
  properties: Array<keyof (typeof countriesData)[0]>,
  similarityThreshold = 0.7,
): string[] {
  const referenceCountry = countriesData.find((c) => c.code === referenceCountryCode)
  if (!referenceCountry) return []

  return countriesData
    .filter((country) => {
      if (country.code === referenceCountryCode) return false

      // Zähle, wie viele Eigenschaften übereinstimmen
      const matchingProperties = properties.filter((property) => {
        return country[property] === referenceCountry[property]
      })

      // Berechne die Ähnlichkeit als Prozentsatz der übereinstimmenden Eigenschaften
      const similarity = matchingProperties.length / properties.length

      return similarity >= similarityThreshold
    })
    .map((country) => country.code)
}

// Funktion zum Abrufen von Ländern, die ungewöhnliche Werte für eine bestimmte Eigenschaft haben
export function getCountriesWithUnusualValues(
  property: keyof (typeof countriesData)[0],
  unusualThreshold = 0.1,
): string[] {
  const propertyGroups = groupCountriesByProperty(property)
  const totalCountries = countriesData.length

  // Finde Werte, die selten vorkommen (unter dem Schwellenwert)
  const unusualValues = Object.entries(propertyGroups)
    .filter(([_, countries]) => countries.length / totalCountries <= unusualThreshold)
    .map(([value, _]) => value)

  // Sammle alle Länder mit diesen ungewöhnlichen Werten
  const result = new Set<string>()
  unusualValues.forEach((value) => {
    propertyGroups[value].forEach((code) => result.add(code))
  })

  return Array.from(result)
}

// Funktion zum Abrufen von Ländern, die extreme Werte für eine numerische Eigenschaft haben
export function getCountriesWithExtremeValues(
  property: keyof (typeof countriesData)[0],
  extreme: "min" | "max",
): string[] {
  // Filtere Länder mit numerischen Werten für die angegebene Eigenschaft
  const countriesWithNumericValues = countriesData.filter(
    (country) => typeof country[property] === "number" && !isNaN(country[property] as number),
  )

  if (countriesWithNumericValues.length === 0) return []

  // Finde den extremen Wert
  const values = countriesWithNumericValues.map((country) => country[property] as number)
  const extremeValue = extreme === "min" ? Math.min(...values) : Math.max(...values)

  // Finde alle Länder mit diesem extremen Wert
  return countriesWithNumericValues
    .filter((country) => country[property] === extremeValue)
    .map((country) => country.code)
}

// Funktion zum Abrufen von Ländern, die bestimmte Mitgliedschaften haben
export function getCountriesWithMemberships(memberships: string[]): string[] {
  return countriesData
    .filter((country) => {
      if (!country.mitgliedschaften) return false

      // Prüfe, ob das Land alle angegebenen Mitgliedschaften hat
      return memberships.every((membership) => country.mitgliedschaften?.includes(membership))
    })
    .map((country) => country.code)
}

// Funktion zum Abrufen von Ländern, die mindestens eine von mehreren Mitgliedschaften haben
export function getCountriesWithAnyMembership(memberships: string[]): string[] {
  return countriesData
    .filter((country) => {
      if (!country.mitgliedschaften) return false

      // Prüfe, ob das Land mindestens eine der angegebenen Mitgliedschaften hat
      return memberships.some((membership) => country.mitgliedschaften?.includes(membership))
    })
    .map((country) => country.code)
}

// Funktion zum Abrufen von Ländern, die bestimmte Mitgliedschaften haben, aber andere nicht
export function getCountriesWithMembershipsButNotOthers(
  includeMemberships: string[],
  excludeMemberships: string[],
): string[] {
  return countriesData
    .filter((country) => {
      if (!country.mitgliedschaften) return false

      // Prüfe, ob das Land alle einzuschließenden Mitgliedschaften hat
      const hasAllIncludeMemberships = includeMemberships.every((membership) =>
        country.mitgliedschaften?.includes(membership),
      )

      // Prüfe, ob das Land keine der auszuschließenden Mitgliedschaften hat
      const hasNoExcludeMemberships = !excludeMemberships.some((membership) =>
        country.mitgliedschaften?.includes(membership),
      )

      return hasAllIncludeMemberships && hasNoExcludeMemberships
    })
    .map((country) => country.code)
}
