import { createCategorizedCountry } from "./country-utils"
import { euMemberRules } from "./common-rules"

// Hilfsfunktion für EU-Länder mit Standardwerten
function createEUCountry(code: string, name: string, additionalNotes = "") {
  return createCategorizedCountry(code, name, "Europa", "direct", {
    ...euMemberRules,
    additionalNotes,
  })
}

export const europeanCountries = [
  // EU-Mitgliedstaaten
  createEUCountry(
    "DE",
    "Deutschland",
    "Das Deutsche Patent- und Markenamt (DPMA) prüft umfassend auf absolute und relative Schutzhindernisse.",
  ),

  // EUIPO (Sonderfall)
  createCategorizedCountry("EM", "Europäische Union", "Europa", "euipo", {
    ...euMemberRules,
    additionalNotes:
      "Die Unionsmarke (UM) bietet Schutz in allen Mitgliedstaaten der Europäischen Union. Benutzung in einem EU-Land ist ausreichend für den Erhalt des Schutzes in der gesamten EU",
  }),

  createEUCountry(
    "FR",
    "Frankreich",
    "Frankreich akzeptiert Mehrklassenanmeldungen; die Gebühren fallen ab der 4. Klasse gestaffelt an.",
  ),

  createEUCountry(
    "GB",
    "Vereinigtes Königreich",
    "Das Vereinigte Königreich hat ein umfassendes Markenrechtssystem und ist Mitglied des Madrider Protokolls.",
  ),

  createEUCountry("IT", "Italien", "Italien ist Mitglied der Europäischen Union und des Madrider Systems."),

  createEUCountry("ES", "Spanien", "Spanien ist Mitglied der Europäischen Union und des Madrider Systems."),

  // Nicht-EU-Land mit ähnlichen Regeln
  createCategorizedCountry("CH", "Schweiz", "Europa", "direct", {
    ...euMemberRules,
    additionalNotes:
      "Die Schweiz ist zwar kein Mitglied der EU, aber Teil des EWR und des Madrider Systems. Für Anmelder mit Sitz außerhalb der Schweiz ist ein Vertreter erforderlich.",
  }),
]
