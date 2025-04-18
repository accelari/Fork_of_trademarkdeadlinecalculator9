import { createCategorizedCountry } from "./country-utils"

// Hilfsfunktion für internationale Organisationen
function createInternationalOrg(
  code: string,
  name: string,
  regType: "wipo" | "euipo" | "aripo" | "oapi" | "boip" | "gcc",
  additionalProps = {},
) {
  return createCategorizedCountry(code, name, "International", regType, {
    priorityDeadlineMonths: 6,
    priorityDocumentDeadlineMonths: 3,
    ...additionalProps,
  })
}

export const internationalOrganizations = [
  // WIPO - Internationale Registrierung
  createInternationalOrg("IB", "Internationale Registrierung (WIPO)", "wipo", {
    calculationBasis: "registration",
    protectionPeriod: 10,
    renewalPeriod: 10,
    renewalStartMonths: 6,
    renewalDeadlineMonths: 0,
    lateRenewalMonths: 6,
    usageProofRequired: false,
    usageProofYears: 0,
    usageDeclarationRequired: false,
    representativeRequired: "Basis",
    vertreterRequired: "Basis",
    prufungsumfang: "Territorial",
    widerspruch: "Territorial",
    poaDigitalCopy: "k.A.",
    poaOriginalRequired: "k.A.",
    poaDigitalSignature: "k.A.",
    poaNotarization: "k.A.",
    poaApostille: "k.A.",
    usageProofType: "Nach Landesrecht",
    usageDeclarationType: "Nach Landesrecht",
    usageProofDeadlineYears: "Nach Landesrecht",
    usageDeclarationDeadlineYears: "Nach Landesrecht",
    lateFilingMonths: 6,
    filingPeriodStart: "Jederzeit",
    additionalNotes:
      "Die internationale Registrierung über WIPO folgt dem Madrid-System und bietet Schutz in mehreren Ländern mit einer einzigen Anmeldung. Die Schutzdauer beträgt 10 Jahre ab Registrierungsdatum und kann unbegrenzt verlängert werden. Benutzungsnachweise richten sich nach den Regeln der designierten Länder.",
  }),

  // Andengemeinschaft
  createCategorizedCountry("AN", "Andengemeinschaft", "International", "direct", {
    calculationBasis: "registration",
    protectionPeriod: 10,
    renewalPeriod: 10,
    renewalStartMonths: 6,
    renewalDeadlineMonths: 0,
    lateRenewalMonths: 6,
    usageProofRequired: true,
    usageProofYears: 3,
    usageDeclarationRequired: false,
    vertreterRequired: "Ja",
    prufungsumfang: "Umfassend",
    widerspruch: "Ja",
    mitgliedschaften: ["Bolivien", "Kolumbien", "Ecuador", "Peru"],
    additionalNotes:
      "Die Andengemeinschaft (Comunidad Andina, CAN) ist eine Zollunion mit gemeinsamen Markenregeln. Mitgliedsländer sind Bolivien, Kolumbien, Ecuador und Peru. Venezuela trat 2006 aus. Die Entscheidung 486 regelt das gemeinsame Markenrecht.",
  }),

  // GCC - Golf-Kooperationsrat
  createInternationalOrg("GC", "GCC", "gcc", {
    calculationBasis: "registration",
    protectionPeriod: 10,
    renewalPeriod: 10,
    renewalStartMonths: 6,
    renewalDeadlineMonths: 0,
    lateRenewalMonths: 6,
    usageProofRequired: false,
    usageProofYears: 0,
    usageDeclarationRequired: false,
    vertreterRequired: "Ja",
    prufungsumfang: "Umfassend",
    widerspruch: "Ja",
    mitgliedschaften: ["Bahrain", "Kuwait", "Oman", "Katar", "Saudi-Arabien", "Vereinigte Arabische Emirate"],
    additionalNotes:
      "Der Golf-Kooperationsrat (GCC) bietet ein einheitliches Markensystem für die Golfstaaten. Mitgliedsländer sind Bahrain, Kuwait, Oman, Katar, Saudi-Arabien und die Vereinigten Arabischen Emirate. Das GCC-Markengesetz wurde 2015 verabschiedet, wird aber in den einzelnen Ländern unterschiedlich implementiert.",
  }),

  // EUIPO - Europäische Union
  createInternationalOrg("EM", "Europäische Union (EUIPO)", "euipo", {
    calculationBasis: "application",
    protectionPeriod: 10,
    renewalPeriod: 10,
    renewalStartMonths: 6,
    renewalDeadlineMonths: 0,
    lateRenewalMonths: 6,
    usageProofRequired: true,
    usageProofYears: 5,
    usageDeclarationRequired: false,
    vertreterRequired: "Nein",
    prufungsumfang: "Beschränkt",
    widerspruch: "Ja",
    mitgliedschaften: ["EU-Mitgliedstaaten"],
    additionalNotes:
      "Die Unionsmarke (UM) bietet Schutz in allen Mitgliedstaaten der Europäischen Union. Benutzung in einem EU-Land ist ausreichend für den Erhalt des Schutzes in der gesamten EU. Die Anmeldung erfolgt beim Amt der Europäischen Union für geistiges Eigentum (EUIPO) in Alicante, Spanien.",
  }),

  // ARIPO - Afrikanische Regionale Organisation für geistiges Eigentum
  createInternationalOrg("AP", "Afrikanische Regionale Organisation für geistiges Eigentum (ARIPO)", "aripo", {
    calculationBasis: "application",
    protectionPeriod: 10,
    renewalPeriod: 10,
    renewalStartMonths: 6,
    renewalDeadlineMonths: 0,
    lateRenewalMonths: 6,
    usageProofRequired: true,
    usageProofYears: 5,
    usageDeclarationRequired: false,
    vertreterRequired: "Ja",
    prufungsumfang: "Umfassend",
    widerspruch: "Ja",
    mitgliedschaften: [
      "Botswana",
      "Eswatini",
      "Gambia",
      "Ghana",
      "Kenia",
      "Lesotho",
      "Liberia",
      "Malawi",
      "Mozambique",
      "Namibia",
      "Rwanda",
      "São Tomé und Príncipe",
      "Sierra Leone",
      "Somalia",
      "Sudan",
      "Tansania",
      "Uganda",
      "Sambia",
      "Simbabwe",
    ],
    additionalNotes:
      "Die ARIPO (African Regional Intellectual Property Organization) ermöglicht Markenschutz in mehreren afrikanischen Ländern. Das Banjul-Protokoll regelt das Markenrecht. Nicht alle ARIPO-Mitglieder sind dem Banjul-Protokoll beigetreten.",
  }),

  // OAPI - Organisation Africaine de la Propriété Intellectuelle
  createInternationalOrg("OA", "Organisation Africaine de la Propriété Intellectuelle (OAPI)", "oapi", {
    calculationBasis: "application",
    protectionPeriod: 10,
    renewalPeriod: 10,
    renewalStartMonths: 6,
    renewalDeadlineMonths: 0,
    lateRenewalMonths: 6,
    usageProofRequired: true,
    usageProofYears: 5,
    usageDeclarationRequired: false,
    vertreterRequired: "Ja",
    prufungsumfang: "Beschränkt",
    widerspruch: "Ja",
    mitgliedschaften: [
      "Benin",
      "Burkina Faso",
      "Kamerun",
      "Zentralafrikanische Republik",
      "Tschad",
      "Komoren",
      "Kongo",
      "Elfenbeinküste",
      "Äquatorialguinea",
      "Gabun",
      "Guinea",
      "Guinea-Bissau",
      "Mali",
      "Mauretanien",
      "Niger",
      "Senegal",
      "Togo",
    ],
    additionalNotes:
      "Die OAPI (Organisation Africaine de la Propriété Intellectuelle) bietet Markenschutz in 17 französischsprachigen afrikanischen Ländern. Eine OAPI-Registrierung gilt automatisch in allen Mitgliedsländern, es gibt keine Möglichkeit, einzelne Länder zu designieren.",
  }),

  // BOIP - Benelux-Markenamt
  createInternationalOrg("BX", "Benelux-Markenamt (BOIP)", "boip", {
    calculationBasis: "application",
    protectionPeriod: 10,
    renewalPeriod: 10,
    renewalStartMonths: 6,
    renewalDeadlineMonths: 0,
    lateRenewalMonths: 6,
    usageProofRequired: true,
    usageProofYears: 5,
    usageDeclarationRequired: false,
    vertreterRequired: "Nein",
    prufungsumfang: "Beschränkt",
    widerspruch: "Ja",
    mitgliedschaften: ["Belgien", "Niederlande", "Luxemburg"],
    additionalNotes:
      "Das Benelux-Markenamt (BOIP) bietet Markenschutz in Belgien, den Niederlanden und Luxemburg. Benutzung in einem Benelux-Land ist ausreichend für den Erhalt des Schutzes in allen drei Ländern. Die Anmeldung erfolgt beim BOIP in Den Haag.",
  }),

  // Antarktis - Sonderfall ohne eigenes Markenrecht
  createCategorizedCountry("AQ", "Antarktis", "Antarktis", "direct", {
    calculationBasis: "keine",
    protectionPeriod: 0, // Kein nationales Markenrecht vorhanden
    renewalPeriod: 0,
    renewalStartMonths: 0, // Nicht anwendbar
    renewalDeadlineMonths: 0, // Nicht anwendbar
    lateRenewalMonths: 0, // Nicht anwendbar
    usageProofRequired: false, // Nicht anwendbar
    usageProofYears: 0,
    usageDeclarationRequired: false, // Nicht anwendbar
    usageDeclarationYears: [],
    vertreterRequired: "Nein", // Nicht anwendbar
    prufungsumfang: "Keine", // Nicht anwendbar
    widerspruch: "Nein", // Nicht anwendbar
    poaVertreterRequired: "Nein", // Nicht anwendbar
    poaDigitalCopy: "Nein", // Nicht anwendbar
    poaOriginalRequired: "Nein", // Nicht anwendbar
    poaDigitalSignature: "Nein", // Nicht anwendbar
    poaNotarization: "Nein", // Nicht anwendbar
    poaApostille: "Nein", // Nicht anwendbar
    poaHinweise: "Nicht anwendbar",
    mitgliedschaften: [], // Antarktis unterliegt dem Antarktisvertrag von 1959; keine staatliche Hoheit
    priorityDeadlineMonths: 0, // Nicht anwendbar
    priorityDocumentDeadlineMonths: 0, // Nicht anwendbar
    additionalNotes:
      "Markenschutz in der Antarktis kann nur durch Marken der jeweiligen Heimatstaaten erfolgen, da es kein eigenes Register gibt. Die Antarktis unterliegt dem Antarktisvertrag von 1959; keine staatliche Hoheit, daher keine Teilnahme an WIPO/TRIPS/Madrid.",
  }),
]

export const internationalCountries = internationalOrganizations
