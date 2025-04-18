import { addMonths, addYears, format } from "date-fns"
import { de } from "date-fns/locale"

export interface CalculationResult {
  country: string
  protectionPeriod: string
  currentCycle: number
  cycleStartDate?: string
  cycleEndDate?: string
  renewalStartDate: string
  renewalDeadlineDate: string
  lateRenewalDate: string
  usageProofRequired: string
  usageProofStartDate: string
  usageProofDeadlineDate: string
  usageProofLateDate: string
  usageDeclarationRequired: string
  usageDeclarationDates: {
    startDate: string
    deadlineDate: string
    lateDate: string
  }[]
}

export function calculateDeadlines(
  countryData: any,
  applicationDate?: Date,
  registrationDate?: Date,
): CalculationResult | null {
  if (!countryData) return null

  // Determine which date to use based on country's calculation basis
  const baseDate = countryData.calculationBasis === "application" ? applicationDate : registrationDate

  if (!baseDate) return null

  // Calculate current protection cycle
  const currentDate = new Date()
  const yearsSinceBase = currentDate.getFullYear() - baseDate.getFullYear()
  const currentCycle = Math.floor(yearsSinceBase / countryData.protectionPeriod) + 1

  // Calculate cycle start and end dates
  const cycleStartDate = addYears(baseDate, (currentCycle - 1) * countryData.protectionPeriod)
  const cycleEndDate = addYears(baseDate, currentCycle * countryData.protectionPeriod)

  // Calculate renewal dates
  const renewalStartDate = addMonths(cycleEndDate, -countryData.renewalStartMonths)
  const renewalDeadlineDate = cycleEndDate
  const lateRenewalDate = addMonths(cycleEndDate, countryData.lateRenewalMonths)

  // Calculate usage proof dates if required
  let usageProofStartDate = "Nicht erforderlich"
  let usageProofDeadlineDate = "Nicht erforderlich"
  let usageProofLateDate = "Nicht erforderlich"

  if (countryData.usageProofRequired && countryData.usageProofYears > 0) {
    // Spezialfall für die USA: Benutzungsnachweise sind bei jeder Verlängerung fällig
    if (countryData.code === "US") {
      // Verwende die gleichen Daten wie für die Verlängerung
      usageProofStartDate = format(renewalStartDate, "dd.MM.yyyy", { locale: de })
      usageProofDeadlineDate = format(renewalDeadlineDate, "dd.MM.yyyy", { locale: de })
      usageProofLateDate = format(lateRenewalDate, "dd.MM.yyyy", { locale: de })
    } else {
      // Standardlogik für andere Länder
      // Prüfen, ob der Benutzungsnachweis in den aktuellen Schutzzyklus fällt
      const proofYear = countryData.usageProofYears
      const proofCycle = Math.floor(proofYear / countryData.protectionPeriod) + 1

      // Nur berechnen, wenn es im aktuellen Zyklus liegt
      if (proofCycle === currentCycle) {
        // Standardmäßig 1 Monat vor der Frist beginnen
        const startMonths =
          countryData.filingPeriodStart === "Jederzeit"
            ? 1
            : countryData.filingPeriodStart === "12 Monate vor Ablauf"
              ? 12
              : 1

        const deadlineDate = addYears(baseDate, countryData.usageProofYears)
        const startDate = addMonths(deadlineDate, -startMonths)
        const lateDate = addMonths(deadlineDate, countryData.lateFilingMonths || 0)

        usageProofStartDate = format(startDate, "dd.MM.yyyy", { locale: de })
        usageProofDeadlineDate = format(deadlineDate, "dd.MM.yyyy", { locale: de })
        usageProofLateDate = format(lateDate, "dd.MM.yyyy", { locale: de })
      }
    }
  }

  // Calculate usage declaration dates if required
  let usageDeclarationDates: { startDate: string; deadlineDate: string; lateDate: string }[] = []

  if (countryData.usageDeclarationRequired && countryData.usageDeclarationYears) {
    // Spezialfall für die USA
    if (countryData.code === "US") {
      // Für die USA müssen wir die Benutzungserklärungen basierend auf dem aktuellen Zyklus berechnen

      // Für den aktuellen Zyklus müssen wir die Verlängerungsdaten verwenden
      // Die Benutzungserklärung ist immer Teil der Verlängerung (außer im 5. Jahr)

      // Wenn es der erste Zyklus ist, füge die 5-Jahres-Erklärung hinzu
      if (currentCycle === 1) {
        const fifthYear = addYears(baseDate, 5)
        const sixthYear = addYears(baseDate, 6)
        const sixthYearPlusSixMonths = addMonths(sixthYear, 6)

        usageDeclarationDates.push({
          startDate: format(fifthYear, "dd.MM.yyyy", { locale: de }),
          deadlineDate: format(sixthYear, "dd.MM.yyyy", { locale: de }),
          lateDate: format(sixthYearPlusSixMonths, "dd.MM.yyyy", { locale: de }),
        })
      }

      // Füge immer die Verlängerungsdaten als Benutzungserklärungsdaten hinzu
      // Dies gilt für alle Zyklen (1, 2, 3, usw.)
      usageDeclarationDates.push({
        startDate: format(renewalStartDate, "dd.MM.yyyy", { locale: de }),
        deadlineDate: format(renewalDeadlineDate, "dd.MM.yyyy", { locale: de }),
        lateDate: format(lateRenewalDate, "dd.MM.yyyy", { locale: de }),
      })
    } else {
      // Standardlogik für andere Länder (bestehender Code)
      // Filter declaration years that fall within the current cycle
      const currentCycleYears = countryData.usageDeclarationYears.filter((year: number) => {
        // Calculate which cycle this declaration falls into
        const declarationCycle = Math.floor(year / countryData.protectionPeriod) + 1
        // Only include if it's in the current cycle
        return declarationCycle === currentCycle
      })

      // Calculate dates for the filtered years
      usageDeclarationDates = currentCycleYears.map((year: number) => {
        // Standardmäßig 1 Monat vor der Frist beginnen
        const startMonths =
          countryData.filingPeriodStart === "Jederzeit"
            ? 1
            : countryData.filingPeriodStart === "12 Monate vor Ablauf"
              ? 12
              : 1

        const deadlineDate = addYears(baseDate, year)
        const startDate = addMonths(deadlineDate, -startMonths)
        const lateDate = addMonths(deadlineDate, countryData.lateFilingMonths || 0)

        return {
          startDate: format(startDate, "dd.MM.yyyy", { locale: de }),
          deadlineDate: format(deadlineDate, "dd.MM.yyyy", { locale: de }),
          lateDate: format(lateDate, "dd.MM.yyyy", { locale: de }),
        }
      })
    }
  }

  return {
    country: countryData.country,
    protectionPeriod: `${countryData.protectionPeriod} Jahre`,
    currentCycle: currentCycle,
    cycleStartDate: format(cycleStartDate, "dd.MM.yyyy", { locale: de }),
    cycleEndDate: format(cycleEndDate, "dd.MM.yyyy", { locale: de }),
    renewalStartDate: format(renewalStartDate, "dd.MM.yyyy", { locale: de }),
    renewalDeadlineDate: format(renewalDeadlineDate, "dd.MM.yyyy", { locale: de }),
    lateRenewalDate: format(lateRenewalDate, "dd.MM.yyyy", { locale: de }),
    usageProofRequired: countryData.usageProofRequired ? "Ja" : "Nein",
    usageProofStartDate,
    usageProofDeadlineDate,
    usageProofLateDate,
    usageDeclarationRequired: countryData.usageDeclarationRequired ? "Ja" : "Nein",
    usageDeclarationDates,
  }
}
