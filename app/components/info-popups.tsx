"use client"

import { countriesData, getBaseCountryCode } from "@/app/data/countries"
import { Button } from "@/components/ui/button"
import { Popover, PopoverContent } from "@/components/ui/popover"
import { getCountryEmoji } from "@/lib/utils"

interface InfoPopupProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  countryCode: string
  onClose: () => void
}

const getCountryName = (countryCode: string) => {
  const country = countriesData.find((c) => c.code === countryCode)
  return country ? country.country : countryCode
}

export function WipoInfoPopup({ open, onOpenChange, countryCode, onClose }: InfoPopupProps) {
  const country = countriesData.find((c) => c.code === countryCode)
  const baseCountryCode = getBaseCountryCode(countryCode)
  return (
    <Popover open={open} onOpenChange={onOpenChange}>
      <PopoverContent className="w-[600px] p-6">
        {" "}
        {/* Breiter und mehr Padding */}
        <div className="space-y-5">
          {" "}
          {/* Mehr Abstand */}
          <h3 className="font-semibold text-gray-800 text-xl">
            {" "}
            {/* Größerer Text */}
            WIPO-Markenanmeldung in {getCountryEmoji(baseCountryCode)} {getCountryName(countryCode)}
          </h3>
          <p className="text-lg">
            {" "}
            {/* Größerer Text */}
            Die Internationale Registrierung (IR) über die WIPO bietet Schutz in mehreren Ländern mit einer einzigen
            Anmeldung.
          </p>
          <ul className="list-disc pl-6 space-y-3 text-lg">
            {" "}
            {/* Größerer Text und Abstand */}
            <li>Schutzdauer: 10 Jahre ab Registrierungsdatum</li>
            <li>Verlängerung: 6 Monate vor Ablauf bis 6 Monate nach Ablauf (mit Zuschlag)</li>
            <li>Benutzungsnachweise: Nach den Regeln der designierten Länder</li>
          </ul>
          <Button onClick={onClose} className="mt-3 text-lg h-12">
            {" "}
            {/* Größerer Button */}
            Schließen
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  )
}

export function EuipoInfoPopup({ open, onOpenChange, countryCode, onClose }: InfoPopupProps) {
  const country = countriesData.find((c) => c.code === countryCode)
  const baseCountryCode = getBaseCountryCode(countryCode)
  return (
    <Popover open={open} onOpenChange={onOpenChange}>
      <PopoverContent className="w-[600px] p-6">
        {" "}
        {/* Breiter und mehr Padding */}
        <div className="space-y-5">
          {" "}
          {/* Mehr Abstand */}
          <h3 className="font-semibold text-gray-800 text-xl">
            {" "}
            {/* Größerer Text */}
            EUIPO-Markenanmeldung in {getCountryEmoji(baseCountryCode)} {getCountryName(countryCode)}
          </h3>
          <p className="text-lg">Die Unionsmarke (UM) bietet Schutz in allen Mitgliedstaaten der Europäischen Union.</p>{" "}
          {/* Größerer Text */}
          <ul className="list-disc pl-6 space-y-3 text-lg">
            {" "}
            {/* Größerer Text und Abstand */}
            <li>Schutzdauer: 10 Jahre ab Anmeldedatum</li>
            <li>Verlängerung: 6 Monate vor Ablauf bis 6 Monate nach Ablauf (mit Zuschlag)</li>
            <li>Benutzungsnachweis: Nach 5 Jahren erforderlich</li>
            <li>Benutzung in einem EU-Land ist ausreichend für den Erhalt des Schutzes in der gesamten EU</li>
          </ul>
          <Button onClick={onClose} className="mt-3 text-lg h-12">
            {" "}
            {/* Größerer Button */}
            Schließen
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  )
}

export function AripoInfoPopup({ open, onOpenChange, countryCode, onClose }: InfoPopupProps) {
  const country = countriesData.find((c) => c.code === countryCode)
  const baseCountryCode = getBaseCountryCode(countryCode)
  return (
    <Popover open={open} onOpenChange={onOpenChange}>
      <PopoverContent className="w-[600px] p-6">
        {" "}
        {/* Breiter und mehr Padding */}
        <div className="space-y-5">
          {" "}
          {/* Mehr Abstand */}
          <h3 className="font-semibold text-gray-800 text-xl">
            {" "}
            {/* Größerer Text */}
            ARIPO-Markenanmeldung in {getCountryEmoji(baseCountryCode)} {getCountryName(countryCode)}
          </h3>
          <p className="text-lg">
            {" "}
            {/* Größerer Text */}
            Die ARIPO (African Regional Intellectual Property Organization) ermöglicht Markenschutz in mehreren
            afrikanischen Ländern.
          </p>
          <ul className="list-disc pl-6 space-y-3 text-lg">
            {" "}
            {/* Größerer Text und Abstand */}
            <li>
              Mitgliedsländer: Botswana, Eswatini, Gambia, Ghana, Kenia, Lesotho, Liberia, Malawi, Mozambique, Namibia,
              Rwanda, São Tomé und Príncipe, Sierra Leone, Somalia, Sudan, Tansania, Uganda, Sambia, Simbabwe
            </li>
            <li>Schutzdauer: 10 Jahre ab Anmeldedatum</li>
            <li>Verlängerung: 6 Monate vor Ablauf bis 6 Monate nach Ablauf (mit Zuschlag)</li>
            <li>Benutzungsnachweis: Nach 5 Jahren erforderlich</li>
          </ul>
          <Button onClick={onClose} className="mt-3 text-lg h-12">
            {" "}
            {/* Größerer Button */}
            Schließen
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  )
}

export function OapiInfoPopup({ open, onOpenChange, countryCode, onClose }: InfoPopupProps) {
  const country = countriesData.find((c) => c.code === countryCode)
  const baseCountryCode = getBaseCountryCode(countryCode)
  return (
    <Popover open={open} onOpenChange={onOpenChange}>
      <PopoverContent className="w-[600px] p-6">
        {" "}
        {/* Breiter und mehr Padding */}
        <div className="space-y-5">
          {" "}
          {/* Mehr Abstand */}
          <h3 className="font-semibold text-gray-800 text-xl">
            {" "}
            {/* Größerer Text */}
            OAPI-Markenanmeldung in {getCountryEmoji(baseCountryCode)} {getCountryName(countryCode)}
          </h3>
          <p className="text-lg">
            {" "}
            {/* Größerer Text */}
            Die OAPI (Organisation Africaine de la Propriété Intellectuelle) bietet Markenschutz in 17
            französischsprachigen afrikanischen Ländern.
          </p>
          <ul className="list-disc pl-6 space-y-3 text-lg">
            {" "}
            {/* Größerer Text und Abstand */}
            <li>
              Mitgliedsländer: Benin, Burkina Faso, Kamerun, Zentralafrikanische Republik, Tschad, Komoren, Kongo,
              Elfenbeinküste, Äquatorialguinea, Gabun, Guinea, Guinea-Bissau, Mali, Mauretanien, Niger, Senegal, Togo
            </li>
            <li>Schutzdauer: 10 Jahre ab Anmeldedatum</li>
            <li>Verlängerung: 6 Monate vor Ablauf bis 6 Monate nach Ablauf (mit Zuschlag)</li>
            <li>Benutzungsnachweis: Nach 5 Jahren erforderlich</li>
          </ul>
          <Button onClick={onClose} className="mt-3 text-lg h-12">
            {" "}
            {/* Größerer Button */}
            Schließen
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  )
}

export function BoipInfoPopup({ open, onOpenChange, countryCode, onClose }: InfoPopupProps) {
  const country = countriesData.find((c) => c.code === countryCode)
  const baseCountryCode = getBaseCountryCode(countryCode)
  return (
    <Popover open={open} onOpenChange={onOpenChange}>
      <PopoverContent className="w-[600px] p-6">
        {" "}
        {/* Breiter und mehr Padding */}
        <div className="space-y-5">
          {" "}
          {/* Mehr Abstand */}
          <h3 className="font-semibold text-gray-800 text-xl">
            {" "}
            {/* Größerer Text */}
            BOIP-Markenanmeldung in {getCountryEmoji(baseCountryCode)} {getCountryName(countryCode)}
          </h3>
          <p className="text-lg">
            {" "}
            {/* Größerer Text */}
            Das Benelux-Markenamt (BOIP) bietet Markenschutz in Belgien, den Niederlanden und Luxemburg.
          </p>
          <ul className="list-disc pl-6 space-y-3 text-lg">
            {" "}
            {/* Größerer Text und Abstand */}
            <li>Schutzdauer: 10 Jahre ab Anmeldedatum</li>
            <li>Verlängerung: 6 Monate vor Ablauf bis 6 Monate nach Ablauf (mit Zuschlag)</li>
            <li>Benutzungsnachweis: Nach 5 Jahren erforderlich</li>
            <li>Benutzung in einem Benelux-Land ist ausreichend für den Erhalt des Schutzes in allen drei Ländern</li>
          </ul>
          <Button onClick={onClose} className="mt-3 text-lg h-12">
            {" "}
            {/* Größerer Button */}
            Schließen
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  )
}

export function GccInfoPopup({ open, onOpenChange, countryCode, onClose }: InfoPopupProps) {
  const country = countriesData.find((c) => c.code === countryCode)
  const baseCountryCode = getBaseCountryCode(countryCode)
  return (
    <Popover open={open} onOpenChange={onOpenChange}>
      <PopoverContent className="w-[600px] p-6">
        {" "}
        {/* Breiter und mehr Padding */}
        <div className="space-y-5">
          {" "}
          {/* Mehr Abstand */}
          <h3 className="font-semibold text-gray-800 text-xl">
            {" "}
            {/* Größerer Text */}
            GCC-Markenanmeldung in {getCountryEmoji(baseCountryCode)} {getCountryName(countryCode)}
          </h3>
          <p className="text-lg">Der Golf-Kooperationsrat (GCC) bietet Markenschutz in den Golfstaaten.</p>{" "}
          {/* Größerer Text */}
          <ul className="list-disc pl-6 space-y-3 text-lg">
            {" "}
            {/* Größerer Text und Abstand */}
            <li>Mitgliedsländer: Bahrain, Kuwait, Oman, Katar, Saudi-Arabien, Vereinigte Arabische Emirate</li>
            <li>Schutzdauer: 10 Jahre ab Anmeldedatum</li>
            <li>Verlängerung: 6 Monate vor Ablauf bis 6 Monate nach Ablauf (mit Zuschlag)</li>
            <li>Keine Benutzungsnachweise erforderlich</li>
          </ul>
          <Button onClick={onClose} className="mt-3 text-lg h-12">
            {" "}
            {/* Größerer Button */}
            Schließen
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  )
}

export function DirectInfoPopup({ open, onOpenChange, countryCode, onClose }: InfoPopupProps) {
  const country = countriesData.find((c) => c.code === countryCode)
  const baseCountryCode = getBaseCountryCode(countryCode)
  return (
    <Popover open={open} onOpenChange={onOpenChange}>
      <PopoverContent className="w-[600px] p-6">
        {" "}
        {/* Breiter und mehr Padding */}
        <div className="space-y-5">
          {" "}
          {/* Mehr Abstand */}
          <h3 className="font-semibold text-gray-800 text-xl">
            {" "}
            {/* Größerer Text */}
            Direkte Markenanmeldung in {getCountryEmoji(baseCountryCode)} {getCountryName(countryCode)}
          </h3>
          {country && (
            <>
              <p className="text-lg">Informationen zur nationalen Markenanmeldung in {country.country}:</p>{" "}
              {/* Größerer Text */}
              <ul className="list-disc pl-6 space-y-3 text-lg">
                {" "}
                {/* Größerer Text und Abstand */}
                <li>
                  Schutzdauer: {country.protectionPeriod} Jahre ab{" "}
                  {country.calculationBasis === "application" ? "Anmeldedatum" : "Eintragungsdatum"}
                </li>
                <li>
                  Verlängerung: {country.renewalStartMonths} Monate vor Ablauf bis {country.lateRenewalMonths} Monate
                  nach Ablauf (mit Zuschlag)
                </li>
                {country.usageProofRequired && (
                  <li>Benutzungsnachweis: Nach {country.usageProofYears} Jahren erforderlich</li>
                )}
                {country.usageDeclarationRequired && country.usageDeclarationYears && (
                  <li>
                    Benutzungserklärung: Nach{" "}
                    {country.usageDeclarationYears.length > 1
                      ? country.usageDeclarationYears.join(" und ")
                      : country.usageDeclarationYears[0]}{" "}
                    Jahren erforderlich
                  </li>
                )}
                {!country.usageProofRequired && !country.usageDeclarationRequired && (
                  <li>Keine Benutzungsnachweise oder -erklärungen erforderlich</li>
                )}
                {country.additionalNotes && (
                  <li>
                    <strong>Zusätzliche Anmerkungen:</strong> {country.additionalNotes}
                  </li>
                )}
                {/* Neue Felder aus der Tabelle */}
                {country.vertreterRequired && <li>Vertreter erforderlich: {country.vertreterRequired}</li>}
                {country.prufungsumfang && <li>Prüfungsumfang: {country.prufungsumfang}</li>}
                {country.widerspruch && <li>Widerspruchsverfahren: {country.widerspruch}</li>}
                {/* Vollmacht-Informationen */}
                {(country.poaVertreterRequired ||
                  country.poaDigitalCopy ||
                  country.poaOriginalRequired ||
                  country.poaDigitalSignature ||
                  country.poaNotarization ||
                  country.poaApostille) && (
                  <li>
                    <strong>Vollmacht (Power of Attorney):</strong>
                    <ul className="list-disc pl-6 mt-2">
                      {country.poaVertreterRequired && <li>Vertreter erforderlich: {country.poaVertreterRequired}</li>}
                      {country.poaDigitalCopy && <li>Digitale Kopie akzeptiert: {country.poaDigitalCopy}</li>}
                      {country.poaOriginalRequired && <li>Original erforderlich: {country.poaOriginalRequired}</li>}
                      {country.poaDigitalSignature && (
                        <li>Digitale Signatur akzeptiert: {country.poaDigitalSignature}</li>
                      )}
                      {country.poaNotarization && <li>Notarisierung erforderlich: {country.poaNotarization}</li>}
                      {country.poaApostille && <li>Apostille/Legalisierung erforderlich: {country.poaApostille}</li>}
                    </ul>
                  </li>
                )}
                {country.poaHinweise && country.poaHinweise.length > 0 && <li>Hinweise: {country.poaHinweise}</li>}
                {country.mitgliedschaften && country.mitgliedschaften.length > 0 && (
                  <li>Mitgliedschaften: {country.mitgliedschaften.join(", ")}</li>
                )}
              </ul>
            </>
          )}
          <Button onClick={onClose} className="mt-3 text-lg h-12">
            {" "}
            {/* Größerer Button */}
            Schließen
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  )
}
