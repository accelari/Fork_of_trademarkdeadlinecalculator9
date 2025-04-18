import { createCategorizedCountry } from "./country-utils"
import { euMemberRules } from "./common-rules"

export const europeanCountries = [
  // Europäische Länder mit automatischer Kategorisierung
  createCategorizedCountry("DE", "Deutschland", "Europa", "direct", {
    ...euMemberRules,
    renewalStartMonths: 6,
    renewalDeadlineMonths: 0,
    lateRenewalMonths: 6,
    usageProofYears: 5,
    usageDeclarationYears: [],
    additionalNotes:
      "Das Deutsche Patent- und Markenamt (DPMA) prüft umfassend auf absolute und relative Schutzhindernisse.",
  }),

  createCategorizedCountry("EM", "Europäische Union", "Europa", "euipo", {
    ...euMemberRules,
    renewalStartMonths: 6,
    renewalDeadlineMonths: 0,
    lateRenewalMonths: 6,
    usageProofYears: 5,
    usageDeclarationYears: [],
    additionalNotes:
      "Die Unionsmarke (UM) bietet Schutz in allen Mitgliedstaaten der Europäischen Union. Benutzung in einem EU-Land ist ausreichend für den Erhalt des Schutzes in der gesamten EU",
  }),

  createCategorizedCountry("FR", "Frankreich", "Europa", "direct", {
    ...euMemberRules,
    renewalStartMonths: 6,
    renewalDeadlineMonths: 0,
    lateRenewalMonths: 6,
    usageProofYears: 5,
    usageDeclarationYears: [],
    additionalNotes:
      "Frankreich akzeptiert Mehrklassenanmeldungen; die Gebühren fallen ab der 4. Klasse gestaffelt an.",
  }),

  createCategorizedCountry("GB", "Vereinigtes Königreich", "Europa", "direct", {
    ...euMemberRules,
    renewalStartMonths: 6,
    renewalDeadlineMonths: 0,
    lateRenewalMonths: 6,
    usageProofYears: 5,
    usageDeclarationYears: [],
    additionalNotes:
      "Das Vereinigte Königreich hat ein umfassendes Markenrechtssystem und ist Mitglied des Madrider Protokolls.",
  }),

  // Weitere europäische Länder können hier hinzugefügt werden
  // Die meisten Eigenschaften werden automatisch aus den Kategorien abgeleitet

  createCategorizedCountry("IT", "Italien", "Europa", "direct", {
    ...euMemberRules,
    renewalStartMonths: 6,
    renewalDeadlineMonths: 0,
    lateRenewalMonths: 6,
    usageProofYears: 5,
    usageDeclarationYears: [],
    additionalNotes: "Italien ist Mitglied der Europäischen Union und des Madrider Systems.",
  }),

  createCategorizedCountry("ES", "Spanien", "Europa", "direct", {
    ...euMemberRules,
    renewalStartMonths: 6,
    renewalDeadlineMonths: 0,
    lateRenewalMonths: 6,
    usageProofYears: 5,
    usageDeclarationYears: [],
    additionalNotes: "Spanien ist Mitglied der Europäischen Union und des Madrider Systems.",
  }),

  createCategorizedCountry("CH", "Schweiz", "Europa", "direct", {
    ...euMemberRules,
    renewalStartMonths: 6,
    renewalDeadlineMonths: 0,
    lateRenewalMonths: 6,
    usageProofYears: 5,
    usageDeclarationYears: [],
    additionalNotes:
      "Die Schweiz ist zwar kein Mitglied der EU, aber Teil des EWR und des Madrider Systems. Für Anmelder mit Sitz außerhalb der Schweiz ist ein Vertreter erforderlich.",
  }),
]
