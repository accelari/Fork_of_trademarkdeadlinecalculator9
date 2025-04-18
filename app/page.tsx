"use client"

import { useState } from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { format, parse, isValid, isAfter, isBefore, addMonths } from "date-fns"
import { CalendarIcon, HelpCircle, AlertTriangle, Clock } from "lucide-react"
import { CountrySelect } from "./country-select"
import { countriesData, getBaseCountryCode } from "./data/countries"
import { calculateDeadlines } from "./utils/date-calculator"
import { CustomCalendar } from "./components/custom-calendar"
import { Input } from "@/components/ui/input"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { cn } from "@/lib/utils"
import {
  WipoInfoPopup,
  EuipoInfoPopup,
  AripoInfoPopup,
  OapiInfoPopup,
  BoipInfoPopup,
  GccInfoPopup,
  DirectInfoPopup,
} from "./components/info-popups"

export default function TrademarkDeadlineCalculator() {
  const [countryCode, setCountryCode] = useState("")
  const [applicationDate, setApplicationDate] = useState<Date | undefined>()
  const [applicationDateInput, setApplicationDateInput] = useState("")
  const [registrationDate, setRegistrationDate] = useState<Date | undefined>()
  const [registrationDateInput, setRegistrationDateInput] = useState("")
  const [results, setResults] = useState<any>(null)
  const [showWipoPopup, setShowWipoPopup] = useState(false)
  const [showEuipoPopup, setShowEuipoPopup] = useState(false)
  const [showAripoPopup, setShowAripoPopup] = useState(false)
  const [showOapiPopup, setShowOapiPopup] = useState(false)
  const [showBoipPopup, setShowBoipPopup] = useState(false)
  const [showGccPopup, setShowGccPopup] = useState(false)
  const [showDirectPopup, setShowDirectPopup] = useState(false)
  const [applicationDateOpen, setApplicationDateOpen] = useState(false)
  const [registrationDateOpen, setRegistrationDateOpen] = useState(false)
  const [showApplicationDateWarning, setShowApplicationDateWarning] = useState(false)
  const [showRegistrationDateWarning, setShowRegistrationDateWarning] = useState(false)

  const country = countriesData.find((c) => c.code === countryCode)

  const handleApplicationDateInput = (value: string) => {
    // Entferne alle Nicht-Ziffern aus der Eingabe
    const digitsOnly = value.replace(/\D/g, "")

    // Formatiere die Eingabe mit Punkten
    let formattedValue = ""
    if (digitsOnly.length > 0) {
      // Füge die ersten beiden Ziffern hinzu (Tag)
      formattedValue = digitsOnly.substring(0, Math.min(2, digitsOnly.length))

      // Füge einen Punkt und die nächsten beiden Ziffern hinzu (Monat)
      if (digitsOnly.length > 2) {
        formattedValue += "." + digitsOnly.substring(2, Math.min(4, digitsOnly.length))

        // Füge einen weiteren Punkt und die restlichen Ziffern hinzu (Jahr)
        if (digitsOnly.length > 4) {
          formattedValue += "." + digitsOnly.substring(4, Math.min(8, digitsOnly.length))
        }
      }
    }

    // Aktualisiere den Eingabewert
    setApplicationDateInput(formattedValue)

    // Versuche, das Datum zu parsen, wenn es vollständig ist
    if (digitsOnly.length === 8) {
      try {
        const day = digitsOnly.substring(0, 2)
        const month = digitsOnly.substring(2, 4)
        const year = digitsOnly.substring(4, 8)
        const dateString = `${day}.${month}.${year}`

        const parsedDate = parse(dateString, "dd.MM.yyyy", new Date())
        if (isValid(parsedDate)) {
          // Prüfe, ob das Datum in der Zukunft liegt
          if (isAfter(parsedDate, new Date())) {
            setShowApplicationDateWarning(true)
          } else {
            setShowApplicationDateWarning(false)
          }
          setApplicationDate(parsedDate)
        }
      } catch (error) {
        // Ungültiges Datum, nichts tun
      }
    }
  }

  const handleRegistrationDateInput = (value: string) => {
    // Entferne alle Nicht-Ziffern aus der Eingabe
    const digitsOnly = value.replace(/\D/g, "")

    // Formatiere die Eingabe mit Punkten
    let formattedValue = ""
    if (digitsOnly.length > 0) {
      // Füge die ersten beiden Ziffern hinzu (Tag)
      formattedValue = digitsOnly.substring(0, Math.min(2, digitsOnly.length))

      // Füge einen Punkt und die nächsten beiden Ziffern hinzu (Monat)
      if (digitsOnly.length > 2) {
        formattedValue += "." + digitsOnly.substring(2, Math.min(4, digitsOnly.length))

        // Füge einen weiteren Punkt und die restlichen Ziffern hinzu (Jahr)
        if (digitsOnly.length > 4) {
          formattedValue += "." + digitsOnly.substring(4, Math.min(8, digitsOnly.length))
        }
      }
    }

    // Aktualisiere den Eingabewert
    setRegistrationDateInput(formattedValue)

    // Versuche, das Datum zu parsen, wenn es vollständig ist
    if (digitsOnly.length === 8) {
      try {
        const day = digitsOnly.substring(0, 2)
        const month = digitsOnly.substring(2, 4)
        const year = digitsOnly.substring(4, 8)
        const dateString = `${day}.${month}.${year}`

        const parsedDate = parse(dateString, "dd.MM.yyyy", new Date())
        if (isValid(parsedDate)) {
          // Prüfe, ob das Datum in der Zukunft liegt
          if (isAfter(parsedDate, new Date())) {
            setShowRegistrationDateWarning(true)
          } else {
            setShowRegistrationDateWarning(false)
          }
          setRegistrationDate(parsedDate)
        }
      } catch (error) {
        // Ungültiges Datum, nichts tun
      }
    }
  }

  const handleCalculate = () => {
    if (!country) {
      alert("Bitte wählen Sie ein Land aus.")
      return
    }

    if (country.calculationBasis === "application" && !applicationDate) {
      alert("Bitte geben Sie das Anmeldedatum ein.")
      return
    } else if (country.calculationBasis === "registration" && !registrationDate) {
      alert("Bitte geben Sie das Eintragungsdatum ein.")
      return
    }

    const calculationResult = calculateDeadlines(country, applicationDate, registrationDate)

    if (calculationResult) {
      setResults(calculationResult)
    } else {
      alert("Bei der Berechnung ist ein Fehler aufgetreten. Bitte überprüfen Sie Ihre Eingaben.")
    }
  }

  const handleInfoClick = () => {
    if (!country) return

    // Extrahiere den Basistyp aus dem erweiterten Code
    const baseType = country.registrationType

    // Bestimme den Registrierungstyp basierend auf dem Code oder dem Basistyp
    const baseCode = getBaseCountryCode(country.code)

    // Spezielle Fälle für bestimmte Codes
    if (baseCode === "IB" || baseCode === "WIPO") {
      setShowWipoPopup(true)
      return
    }
    if (baseCode === "EM" || baseCode === "EU") {
      setShowEuipoPopup(true)
      return
    }
    if (baseCode === "AP" || baseCode === "ARIPO") {
      setShowAripoPopup(true)
      return
    }
    if (baseCode === "OA" || baseCode === "OAPI") {
      setShowOapiPopup(true)
      return
    }
    if (baseCode === "BX" || baseCode === "BOIP") {
      setShowBoipPopup(true)
      return
    }
    if (baseCode === "GC" || baseCode === "GCC") {
      setShowGccPopup(true)
      return
    }

    // Standardfall basierend auf dem Registrierungstyp
    switch (baseType) {
      case "wipo":
        setShowWipoPopup(true)
        break
      case "euipo":
        setShowEuipoPopup(true)
        break
      case "aripo":
        setShowAripoPopup(true)
        break
      case "oapi":
        setShowOapiPopup(true)
        break
      case "boip":
        setShowBoipPopup(true)
        break
      case "gcc":
        setShowGccPopup(true)
        break
      case "direct":
      default:
        setShowDirectPopup(true)
        break
    }
  }

  // Hilfsfunktion zur Bestimmung des Fristenstatus
  const getDeadlineStatus = (dateString: string) => {
    if (!dateString || dateString === "Nicht erforderlich") return "normal"

    const date = parse(dateString, "dd.MM.yyyy", new Date())
    const today = new Date()
    const threeMonthsFromNow = addMonths(today, 3)
    const sixMonthsFromNow = addMonths(today, 6)

    if (isBefore(date, today)) {
      return "expired" // Frist abgelaufen
    } else if (isBefore(date, threeMonthsFromNow)) {
      return "critical" // Kritisch - weniger als 3 Monate
    } else if (isBefore(date, sixMonthsFromNow)) {
      return "warning" // Warnung - weniger als 6 Monate
    } else {
      return "normal" // mehr als 6 Monate
    }
  }

  // Hilfsfunktion zur Bestimmung der Textfarbe basierend auf dem Status
  const getStatusColor = (status: string) => {
    switch (status) {
      case "expired":
        return "text-red-600 dark:text-red-400 font-bold"
      case "critical":
        return "text-orange-600 dark:text-orange-400 font-bold"
      case "warning":
        return "text-amber-600 dark:text-amber-400"
      default:
        return "text-green-600 dark:text-green-500"
    }
  }

  // Hilfsfunktion zur Bestimmung des Icons basierend auf dem Status
  const getStatusIcon = (status: string) => {
    switch (status) {
      case "expired":
        return <AlertTriangle className="h-5 w-5 text-red-600 dark:text-red-400 inline-block mr-1" />
      case "critical":
        return <Clock className="h-5 w-5 text-orange-600 dark:text-orange-400 inline-block mr-1" />
      case "warning":
        return <Clock className="h-5 w-5 text-amber-600 dark:text-amber-400 inline-block mr-1" />
      default:
        return null
    }
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      {" "}
      {/* Breiterer Container */}
      <div className="flex flex-col justify-between items-center mb-10">
        <h1 className="text-4xl font-semibold text-gray-800 mb-4">Marken-Fristenrechner</h1>
        <p className="text-xl text-gray-600 text-center">
          Berechnen Sie wichtige Fristen für Ihre Markenanmeldung in verschiedenen Ländern (ohne Gewähr)
        </p>
      </div>
      <Card className="mb-10 shadow-md">
        <CardContent className="pt-8 p-8">
          {" "}
          {/* Mehr Padding */}
          <Accordion type="single" collapsible className="mb-8">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-xl font-medium">So funktioniert's</AccordionTrigger>
              <AccordionContent className="text-lg">
                {" "}
                {/* Größerer Text */}
                <p className="mb-3">
                  Geben Sie das Datum der Anmeldung/Eintragung ein. Das System berechnet automatisch den aktuellen
                  Schutzzyklus.
                </p>
                <p className="mb-3">
                  Je nach Land wird entweder das Anmeldedatum oder das Eintragungsdatum für die Berechnung benötigt.
                </p>
                <p className="mb-3">
                  <strong>Benutzungsnachweise</strong> müssen in manchen Ländern bei Widersprüchen oder
                  Löschungsanträgen vorgelegt werden, um die tatsächliche Benutzung der Marke nachzuweisen.
                </p>
                <p className="mb-3">
                  <strong>Benutzungserklärungen</strong> müssen in bestimmten Ländern zu festgelegten Zeitpunkten
                  eingereicht werden, um den Markenschutz aufrechtzuerhalten. Diese sind oft eidesstattliche Erklärungen
                  über die Nutzung der Marke.
                </p>
                <div className="mt-6 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
                  <h4 className="font-semibold mb-2">Farbliche Kennzeichnung der Fristen:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <span className="w-4 h-4 bg-red-600 rounded-full mr-2"></span>
                      <span className="font-medium">Rot:</span>
                      <span className="ml-2">Frist abgelaufen</span>
                    </li>
                    <li className="flex items-center">
                      <span className="w-4 h-4 bg-orange-600 rounded-full mr-2"></span>
                      <span className="font-medium">Orange:</span>
                      <span className="ml-2">Kritisch - weniger als 3 Monate</span>
                    </li>
                    <li className="flex items-center">
                      <span className="w-4 h-4 bg-amber-600 rounded-full mr-2"></span>
                      <span className="font-medium">Gelb:</span>
                      <span className="ml-2">Warnung - weniger als 6 Monate</span>
                    </li>
                    <li className="flex items-center">
                      <span className="w-4 h-4 bg-green-600 rounded-full mr-2"></span>
                      <span className="font-medium">Grün:</span>
                      <span className="ml-2">Normal - mehr als 6 Monate</span>
                    </li>
                  </ul>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {" "}
            {/* Größerer Abstand */}
            <div>
              <Label htmlFor="country" className="mb-3 block font-medium text-lg">
                {" "}
                {/* Größeres Label */}
                Land auswählen
              </Label>
              <div className="flex gap-3">
                <CountrySelect
                  value={countryCode}
                  onChange={(value) => {
                    setCountryCode(value)
                    setResults(null) // Clear results when country changes
                  }}
                />
                {country && (
                  <Button variant="outline" size="icon" className="h-12 w-12">
                    {" "}
                    {/* Größerer Button */}
                    <HelpCircle className="h-6 w-6" onClick={handleInfoClick} /> {/* Größeres Icon */}
                  </Button>
                )}
              </div>

              {country && (
                <div className="mt-3 text-base text-gray-500">
                  {" "}
                  {/* Größerer Text */}
                  Berechnungsbasis: {country.calculationBasis === "application" ? "Anmeldedatum" : "Eintragungsdatum"}
                  {/* Hinweis für Organisationen hinzufügen */}
                  {country.registrationType !== "direct" && (
                    <div className="mt-2 text-sm text-blue-600 dark:text-blue-400">
                      {country.registrationType === "wipo" &&
                        country.calculationBasis === "registration" &&
                        "Anmeldung über WIPO? - Eintragungsdatum = WIPO Registrierungsdatum"}
                      {country.registrationType === "wipo" &&
                        country.calculationBasis === "application" &&
                        "Anmeldung über WIPO? - Anmeldedatum = WIPO Anmeldedatum"}
                      {country.registrationType === "euipo" &&
                        "Anmeldung über EUIPO? - Anmeldedatum = EUIPO Anmeldedatum"}
                      {country.registrationType === "aripo" &&
                        country.calculationBasis === "registration" &&
                        "Anmeldung über ARIPO? - Eintragungsdatum = ARIPO Registrierungsdatum"}
                      {country.registrationType === "aripo" &&
                        country.calculationBasis === "application" &&
                        "Anmeldung über ARIPO? - Anmeldedatum = ARIPO Anmeldedatum"}
                      {country.registrationType === "oapi" &&
                        country.calculationBasis === "registration" &&
                        "Anmeldung über OAPI? - Eintragungsdatum = OAPI Registrierungsdatum"}
                      {country.registrationType === "oapi" &&
                        country.calculationBasis === "application" &&
                        "Anmeldung über OAPI? - Anmeldedatum = OAPI Anmeldedatum"}
                      {country.registrationType === "boip" && "Anmeldung über BOIP? - Anmeldedatum = BOIP Anmeldedatum"}
                      {country.registrationType === "gcc" &&
                        country.calculationBasis === "registration" &&
                        "Anmeldung über GCC? - Eintragungsdatum = GCC Registrierungsdatum"}
                      {country.registrationType === "gcc" &&
                        country.calculationBasis === "application" &&
                        "Anmeldung über GCC? - Anmeldedatum = GCC Anmeldedatum"}
                    </div>
                  )}
                </div>
              )}
            </div>
            <div>
              {country?.calculationBasis === "application" && (
                <div>
                  <Label htmlFor="applicationDate" className="mb-3 block font-medium text-lg">
                    {" "}
                    {/* Größeres Label */}
                    Anmeldedatum
                  </Label>
                  <div className="flex gap-3">
                    <Input
                      id="applicationDate"
                      placeholder="DD.MM.YYYY"
                      value={applicationDateInput}
                      onChange={(e) => handleApplicationDateInput(e.target.value)}
                      className="flex-1 text-lg h-12" /* Größeres Eingabefeld */
                    />
                    <Popover open={applicationDateOpen} onOpenChange={setApplicationDateOpen}>
                      <PopoverTrigger asChild>
                        <Button variant="outline" className="h-12 w-12">
                          {" "}
                          {/* Größerer Button */}
                          <CalendarIcon className="h-6 w-6" /> {/* Größeres Icon */}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="end">
                        <CustomCalendar
                          selected={applicationDate}
                          onSelect={(date) => {
                            setApplicationDate(date)
                            setApplicationDateInput(format(date, "dd.MM.yyyy"))
                            setApplicationDateOpen(false)
                            // Prüfe, ob das Datum in der Zukunft liegt
                            if (isAfter(date, new Date())) {
                              setShowApplicationDateWarning(true)
                            } else {
                              setShowApplicationDateWarning(false)
                            }
                          }}
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                  <div className="mt-2 text-base text-gray-500">Eingabe mit oder ohne Punkte möglich</div>{" "}
                  {/* Größerer Text */}
                  {showApplicationDateWarning && (
                    <Alert variant="destructive" className="mt-3">
                      <AlertDescription className="text-base">
                        {" "}
                        {/* Größerer Text */}
                        Sind Sie sich sicher, dass Sie ein korrektes Datum eingegeben haben? Das eingegebene Datum liegt
                        in der Zukunft.
                      </AlertDescription>
                    </Alert>
                  )}
                </div>
              )}

              {country?.calculationBasis === "registration" && (
                <div>
                  <Label htmlFor="registrationDate" className="mb-3 block font-medium text-lg">
                    {" "}
                    {/* Größeres Label */}
                    Eintragungsdatum
                  </Label>
                  <div className="flex gap-3">
                    <Input
                      id="registrationDate"
                      placeholder="DD.MM.YYYY"
                      value={registrationDateInput}
                      onChange={(e) => handleRegistrationDateInput(e.target.value)}
                      className="flex-1 text-lg h-12" /* Größeres Eingabefeld */
                    />
                    <Popover open={registrationDateOpen} onOpenChange={setRegistrationDateOpen}>
                      <PopoverTrigger asChild>
                        <Button variant="outline" className="h-12 w-12">
                          {" "}
                          {/* Größerer Button */}
                          <CalendarIcon className="h-6 w-6" /> {/* Größeres Icon */}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="end">
                        <CustomCalendar
                          selected={registrationDate}
                          onSelect={(date) => {
                            setRegistrationDate(date)
                            setRegistrationDateInput(format(date, "dd.MM.yyyy"))
                            setRegistrationDateOpen(false)
                            // Prüfe, ob das Datum in der Zukunft liegt
                            if (isAfter(date, new Date())) {
                              setShowRegistrationDateWarning(true)
                            } else {
                              setShowRegistrationDateWarning(false)
                            }
                          }}
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                  <div className="mt-2 text-base text-gray-500">Eingabe mit oder ohne Punkte möglich</div>{" "}
                  {/* Größerer Text */}
                  {showRegistrationDateWarning && (
                    <Alert variant="destructive" className="mt-3">
                      <AlertDescription className="text-base">
                        {" "}
                        {/* Größerer Text */}
                        Sind Sie sich sicher, dass Sie ein korrektes Datum eingegeben haben? Das eingegebene Datum liegt
                        in der Zukunft.
                      </AlertDescription>
                    </Alert>
                  )}
                </div>
              )}
            </div>
          </div>
          <div className="mt-8 flex justify-center">
            {" "}
            {/* Mehr Abstand */}
            <Button
              onClick={handleCalculate}
              className="w-full md:w-2/3 font-medium text-lg h-14" /* Größerer Button */
            >
              Fristen berechnen
            </Button>
          </div>
        </CardContent>
      </Card>
      {results && (
        <>
          {/* Separates Widget für den aktuellen Zyklus */}
          <Card className="mb-6 bg-gray-50 dark:bg-gray-900 shadow-md">
            <CardContent className="p-6">
              {" "}
              {/* Mehr Padding */}
              <div className="text-xl font-semibold">
                Aktueller Schutzzyklus <span className="inline-block">{results.currentCycle}</span>
              </div>
              <p className="text-lg text-gray-500 mt-2">
                {results.cycleStartDate} - {results.cycleEndDate}
              </p>
            </CardContent>
          </Card>

          <Card className="mb-10 shadow-md">
            <CardHeader className="text-center pb-3 pt-6">
              {" "}
              {/* Mehr Padding */}
              <CardTitle className="text-2xl font-semibold">Berechnete Fristen für {results.country}</CardTitle>{" "}
              {/* Größerer Text */}
            </CardHeader>
            <CardContent className="p-6">
              {" "}
              {/* Mehr Padding */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {" "}
                {/* Größerer Abstand */}
                <div className="border-r-0 md:border-r border-gray-200 pr-0 md:pr-6">
                  {" "}
                  {/* Mehr Padding */}
                  <h3 className="text-xl font-semibold mb-6 text-center">Aktuelle Verlängerungsfristen</h3>{" "}
                  {/* Größerer Text und Abstand */}
                  <div className="space-y-2">
                    {" "}
                    {/* Kleinerer Abstand zwischen den Hauptkategorien */}
                    <div className="flex justify-between text-lg">
                      {" "}
                      {/* Größerer Text */}
                      <span className="font-medium">Schutzdauer:</span>
                      <span>{results.protectionPeriod}</span>
                    </div>
                    {/* Verlängerung möglich ab */}
                    {(() => {
                      const status = getDeadlineStatus(results.renewalStartDate)
                      return (
                        <div className="flex justify-between text-lg">
                          <span>Verlängerung möglich ab:</span>
                          <span className={cn(getStatusColor(status))}>
                            {getStatusIcon(status)}
                            {results.renewalStartDate}
                          </span>
                        </div>
                      )
                    })()}
                    {/* Verlängerung regulär bis */}
                    {(() => {
                      const status = getDeadlineStatus(results.renewalDeadlineDate)
                      return (
                        <div className="flex justify-between text-lg">
                          <span>Verlängerung regulär bis:</span>
                          <span className="text-red-600 dark:text-red-400">
                            {getStatusIcon(status)}
                            {results.renewalDeadlineDate}
                          </span>
                        </div>
                      )
                    })()}
                    {/* Verlängerung mit Zuschlag bis */}
                    {(() => {
                      const status = getDeadlineStatus(results.lateRenewalDate)
                      return (
                        <div className="flex justify-between text-lg">
                          <span>Verlängerung mit Zuschlag bis:</span>
                          <span className="text-blue-800 dark:text-blue-400">
                            {getStatusIcon(status)}
                            {results.lateRenewalDate}
                          </span>
                        </div>
                      )
                    })()}
                  </div>
                </div>
                <div className="pl-0 md:pl-6">
                  {" "}
                  {/* Mehr Padding */}
                  <h3 className="text-xl font-semibold mb-6 text-center">Benutzungsnachweise & -erklärungen</h3>{" "}
                  {/* Größerer Text und Abstand */}
                  <div className="space-y-2">
                    {" "}
                    {/* Kleinerer Abstand zwischen den Hauptkategorien */}
                    {/* Benutzungsnachweise */}
                    {results.usageProofRequired === "Ja" ? (
                      <div className="space-y-2">
                        <div className="flex justify-between text-lg">
                          <span className="font-medium">Benutzungsnachweise:</span>
                          <span>Erforderlich</span>
                        </div>
                        {/* Benutzungsnachweis möglich ab */}
                        {(() => {
                          const status = getDeadlineStatus(results.usageProofStartDate)
                          return (
                            <div className="flex justify-between text-lg pl-6">
                              <span>Einreichung möglich ab:</span>
                              <span className={cn(getStatusColor(status))}>
                                {getStatusIcon(status)}
                                {results.usageProofStartDate}
                              </span>
                            </div>
                          )
                        })()}
                        {/* Benutzungsnachweis regulär bis */}
                        {(() => {
                          const status = getDeadlineStatus(results.usageProofDeadlineDate)
                          return (
                            <div className="flex justify-between text-lg pl-6">
                              <span>Einreichung regulär bis:</span>
                              <span className="text-red-600 dark:text-red-400">
                                {getStatusIcon(status)}
                                {results.usageProofDeadlineDate}
                              </span>
                            </div>
                          )
                        })()}
                        {/* Benutzungsnachweis mit Zuschlag bis */}
                        {(() => {
                          const status = getDeadlineStatus(results.usageProofLateDate)
                          return (
                            <div className="flex justify-between text-lg pl-6">
                              <span>Einreichung mit Zuschlag bis:</span>
                              <span className="text-blue-800 dark:text-blue-400">
                                {getStatusIcon(status)}
                                {results.usageProofLateDate}
                              </span>
                            </div>
                          )
                        })()}
                      </div>
                    ) : (
                      <div className="flex justify-between text-lg">
                        <span className="font-medium">Benutzungsnachweise:</span>
                        <span>Keine erforderlich</span>
                      </div>
                    )}
                    {/* Benutzungserklärungen */}
                    {results.usageDeclarationRequired === "Ja" ? (
                      <div className="space-y-2">
                        <div className="flex justify-between text-lg">
                          <span className="font-medium">Benutzungserklärungen:</span>
                          <span>Erforderlich</span>
                        </div>

                        {results.usageDeclarationDates.map((dateSet: any, index: number) => (
                          <div key={index} className="space-y-2 mt-2 border-t pt-2">
                            {/* Zeige die Nummerierung nur an, wenn es mehr als eine Erklärung gibt */}
                            {results.usageDeclarationDates.length > 1 && (
                              <div className="flex justify-between text-lg">
                                <span className="font-medium">Erklärung {index + 1}:</span>
                              </div>
                            )}
                            {/* Benutzungserklärung möglich ab */}
                            {(() => {
                              const status = getDeadlineStatus(dateSet.startDate)
                              return (
                                <div className="flex justify-between text-lg pl-6">
                                  <span>Einreichung möglich ab:</span>
                                  <span className={cn(getStatusColor(status))}>
                                    {getStatusIcon(status)}
                                    {dateSet.startDate}
                                  </span>
                                </div>
                              )
                            })()}
                            {/* Benutzungserklärung regulär bis */}
                            {(() => {
                              const status = getDeadlineStatus(dateSet.deadlineDate)
                              return (
                                <div className="flex justify-between text-lg pl-6">
                                  <span>Einreichung regulär bis:</span>
                                  <span className="text-red-600 dark:text-red-400">
                                    {getStatusIcon(status)}
                                    {dateSet.deadlineDate}
                                  </span>
                                </div>
                              )
                            })()}
                            {/* Benutzungserklärung mit Zuschlag bis */}
                            {(() => {
                              const status = getDeadlineStatus(dateSet.lateDate)
                              return (
                                <div className="flex justify-between text-lg pl-6">
                                  <span>Einreichung mit Zuschlag bis:</span>
                                  <span className="text-blue-800 dark:text-blue-400">
                                    {getStatusIcon(status)}
                                    {dateSet.lateDate}
                                  </span>
                                </div>
                              )
                            })()}
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="flex justify-between text-lg">
                        <span className="font-medium">Benutzungserklärungen:</span>
                        <span>Keine erforderlich</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </>
      )}
      {/* Info-Popups */}
      <WipoInfoPopup
        open={showWipoPopup}
        onOpenChange={setShowWipoPopup}
        countryCode={countryCode}
        onClose={() => setShowWipoPopup(false)}
      />
      <EuipoInfoPopup
        open={showEuipoPopup}
        onOpenChange={setShowEuipoPopup}
        countryCode={countryCode}
        onClose={() => setShowEuipoPopup(false)}
      />
      <AripoInfoPopup
        open={showAripoPopup}
        onOpenChange={setShowAripoPopup}
        countryCode={countryCode}
        onClose={() => setShowAripoPopup(false)}
      />
      <OapiInfoPopup
        open={showOapiPopup}
        onOpenChange={setShowOapiPopup}
        countryCode={countryCode}
        onClose={() => setShowOapiPopup(false)}
      />
      <BoipInfoPopup
        open={showBoipPopup}
        onOpenChange={setShowBoipPopup}
        countryCode={countryCode}
        onClose={() => setShowBoipPopup(false)}
      />
      <GccInfoPopup
        open={showGccPopup}
        onOpenChange={setShowGccPopup}
        countryCode={countryCode}
        onClose={() => setShowGccPopup(false)}
      />
      <DirectInfoPopup
        open={showDirectPopup}
        onOpenChange={setShowDirectPopup}
        countryCode={countryCode}
        onClose={() => setShowDirectPopup(false)}
      />
    </div>
  )
}
