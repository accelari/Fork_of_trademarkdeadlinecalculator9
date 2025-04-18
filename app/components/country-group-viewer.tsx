"use client"

import { useState } from "react"
import { allCountryGroups, getAllValuesForProperty } from "../data/country-groups"
import { countriesData } from "../data/countries"

export default function CountryGroupViewer() {
  const [selectedProperty, setSelectedProperty] = useState<keyof typeof allCountryGroups>("calculationBasis")
  const [selectedValue, setSelectedValue] = useState<string>("")

  // Hole alle möglichen Werte für die ausgewählte Eigenschaft
  const possibleValues = getAllValuesForProperty(selectedProperty)

  // Hole die Länderkürzel für den ausgewählten Wert
  const countryCodes = selectedValue ? allCountryGroups[selectedProperty][selectedValue] || [] : []

  // Hole die vollständigen Länderdaten für die Anzeige
  const countries = countryCodes.map((code) => countriesData.find((c) => c.code === code)).filter(Boolean)

  // Liste aller verfügbaren Eigenschaften
  const properties: Array<{ key: keyof typeof allCountryGroups; label: string }> = [
    { key: "calculationBasis", label: "Berechnungsbasis" },
    { key: "protectionPeriod", label: "Schutzdauer" },
    { key: "renewalPeriod", label: "Verlängerungszeitraum" },
    { key: "renewalStartMonths", label: "Verlängerungsfrist" },
    { key: "renewalDeadlineMonths", label: "Verlängerungsdeadline" },
    { key: "lateRenewalMonths", label: "Nachfrist" },
    { key: "usageProofRequired", label: "Benutzungsnachweis erforderlich" },
    { key: "usageProofYears", label: "Benutzungsnachweisfrist" },
    { key: "usageDeclarationRequired", label: "Benutzungserklärung erforderlich" },
    { key: "usageDeclarationYears", label: "Benutzungserklärungsjahre" },
    { key: "vertreterRequired", label: "Vertretererfordernis" },
    { key: "prufungsumfang", label: "Prüfungsumfang" },
    { key: "widerspruch", label: "Widerspruch" },
    { key: "poaVertreterRequired", label: "Vollmacht Vertreter erforderlich" },
    { key: "poaDigitalCopy", label: "Vollmacht Digitalkopie" },
    { key: "poaOriginalRequired", label: "Vollmacht Original erforderlich" },
    { key: "poaDigitalSignature", label: "Vollmacht Digitale Signatur" },
    { key: "poaNotarization", label: "Vollmacht Notarisierung" },
    { key: "poaApostille", label: "Vollmacht Apostille" },
    { key: "priorityDeadlineMonths", label: "Prioritätsfrist" },
    { key: "priorityDocumentDeadlineMonths", label: "Prioritätsdokumentenfrist" },
    { key: "usageProofDeadlineYears", label: "Benutzungsnachweisfrist" },
    { key: "usageDeclarationDeadlineYears", label: "Benutzungserklärungsfrist" },
    { key: "lateFilingMonths", label: "Nacheinreichungsfrist" },
    { key: "filingPeriodStart", label: "Einreichungszeitraum-Start" },
    { key: "membership", label: "Mitgliedschaften" },
  ]

  // Formatiere den Wert für die Anzeige
  const formatValue = (value: string): string => {
    if (value === "true") return "Ja"
    if (value === "false") return "Nein"
    if (value === "undefined") return "Nicht definiert"
    return value
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Ländergruppen-Viewer</h1>

      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Eigenschaft</label>
            <select
              value={selectedProperty}
              onChange={(e) => {
                setSelectedProperty(e.target.value as keyof typeof allCountryGroups)
                setSelectedValue("")
              }}
              className="w-full p-2 border border-gray-300 rounded-md"
            >
              {properties.map((prop) => (
                <option key={prop.key} value={prop.key}>
                  {prop.label}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Wert</label>
            <select
              value={selectedValue}
              onChange={(e) => setSelectedValue(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md"
            >
              <option value="">Bitte wählen</option>
              {possibleValues.map((value) => (
                <option key={value} value={value}>
                  {formatValue(value)} ({allCountryGroups[selectedProperty][value]?.length || 0} Länder)
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {selectedValue && (
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4">
            Länder mit {properties.find((p) => p.key === selectedProperty)?.label}: {formatValue(selectedValue)} (
            {countryCodes.length})
          </h2>

          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">Länderkürzel:</h3>
            <div className="flex flex-wrap gap-2">
              {countryCodes.map((code) => (
                <span key={code} className="bg-gray-100 px-2 py-1 rounded">
                  {code}
                </span>
              ))}
            </div>
          </div>

          {countries.length > 0 && (
            <div>
              <h3 className="text-lg font-semibold mb-2">Länderliste:</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full border-collapse">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 px-4 py-2 text-left">Code</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Land</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Region</th>
                    </tr>
                  </thead>
                  <tbody>
                    {countries.map((country) => (
                      <tr key={country?.code} className="hover:bg-gray-50">
                        <td className="border border-gray-300 px-4 py-2 font-medium">{country?.code}</td>
                        <td className="border border-gray-300 px-4 py-2">{country?.country}</td>
                        <td className="border border-gray-300 px-4 py-2">{country?.region}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
