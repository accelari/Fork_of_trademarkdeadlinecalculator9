import { createCategorizedCountry } from "./country-utils"

export const northAmericanCountries = [
  createCategorizedCountry("CA", "Kanada", "Nordamerika", "direct", {
    // Nur spezifische Abweichungen oder Besonderheiten angeben
    usageProofYears: 3,
    poaHinweise:
      "Eine separate Vollmacht muss dem CIPO nicht vorgelegt werden (die Benennung des Anwalts/Agents im Antragsformular genügt)",
    mitgliedschaften: [
      "WIPO (seit 1970)",
      "Pariser Übereinkommen (seit 1928)",
      "WTO/TRIPS (seit 1995)",
      "Madrid-Protokoll (seit 17.06.2019)",
    ],
    priorityDocumentDeadlineMonths: 0,
    usageProofType: "Eidesstattliche Erklärung über Benutzung (bei Antrag)",
    filingPeriodStart: "Nach Antrag eines Dritten (3 Monate Frist)",
    additionalNotes:
      "Besonderheit: Wenn die Marke innerhalb der Nachfrist verlängert wird, fällt in Kanada keine Verspätungsgebühr an. Allerdings muss jeder Anmelder eine kanadische Anschrift für Zustellungen angeben. Seit 2019 fordert CIPO bei Verfahren häufig die Angabe einer in Kanada oder im 'NAFTA-Raum' ansässigen Zustelladresse. Kanada hat 2019 auf ein Klassen-System umgestellt (Nizza-Klassifikation); bei Verlängerung vor 2019 eingetragener Marken muss der Inhaber seine Waren/Dienstleistungen in Klassen einteilen.",
  }),
  createCategorizedCountry("MX", "Mexiko", "Nordamerika", "direct", {
    // Nur spezifische Abweichungen oder Besonderheiten angeben
    calculationBasis: "application", // Überschreibt die Standardkategorisierung
    usageProofYears: 3,
    usageDeclarationYears: [3],
    additionalNotes:
      "Mexiko verlangt einen Benutzungsnachweis innerhalb von drei Monaten nach dem dritten Jahrestag der Registrierung.",
  }),

  createCategorizedCountry("US", "Vereinigte Staaten von Amerika", "Nordamerika", "direct", {
    // Nur spezifische Abweichungen oder Besonderheiten angeben
    usageProofYears: 6,
    usageDeclarationYears: [5, 10],
    additionalNotes:
      "In den USA ist eine Benutzungserklärung zwischen dem 5. und 6. Jahr nach der Registrierung und bei der Verlängerung erforderlich.",
    lateFilingMonths: 6,
    filingPeriodStart: "Jederzeit",
  }),
  createCategorizedCountry("BB", "Barbados", "Nordamerika", "direct", {
    calculationBasis: "registration",
    protectionPeriod: 10, // Schutzdauer: 10 Jahre ab Registrierungsdatum

    renewalStartMonths: 2, // Verlängerungsantrag kann 2 Monate vor Ablauf gestellt werden
    renewalDeadlineMonths: 0, // Die Verlängerung muss bis zum Ablauf erfolgen
    lateRenewalMonths: 6, // Nachfrist für verspätete Verlängerung

    usageProofRequired: false, // Kein Nutzungsnachweis erforderlich
    usageProofYears: 0, // Kein spezifischer Zeitpunkt für Nutzungsnachweis

    usageDeclarationRequired: false, // Keine Benutzungserklärung erforderlich
    usageDeclarationYears: [], // Keine regelmäßige Erklärung zur Nutzung notwendig

    vertreterRequired: "Ja", // Lokaler Vertreter ist für ausländische Anmelder erforderlich
    prufungsumfang: "Umfassend", // Formelle und materielle Prüfung
    widerspruch: "Ja", // Widerspruch möglich

    poaVertreterRequired: "Ja", // Vertretervollmacht erforderlich
    poaDigitalCopy: "Nein", // Digitale Kopie nicht ausreichend
    poaOriginalRequired: "Ja", // Original-Vollmacht erforderlich
    poaDigitalSignature: "Nein", // Digitale Signatur nicht akzeptiert
    poaNotarization: "Nein", // Keine notarielle Beglaubigung erforderlich
    poaApostille: "Nein", // Keine Apostille erforderlich
    poaHinweise: "Einfach unterschriebene Vollmacht ist ausreichend.",

    mitgliedschaften: ["WIPO", "Pariser Übereinkunft", "TRIPS"],

    priorityDeadlineMonths: 6, // Standardmäßige Prioritätsfrist von 6 Monaten
    priorityDocumentDeadlineMonths: 3, // Frist für Prioritätsdokumente

    additionalNotes:
      "Markenregistrierung in Barbados gilt für 10 Jahre und kann für weitere 10-Jahres-Perioden verlängert werden. Zwei Monate vor Ablauf der Schutzfrist wird eine Benachrichtigung versandt.",
  }),
  createCategorizedCountry("BS", "Bahamas", "Nordamerika", "direct", {
    calculationBasis: "registration",
    protectionPeriod: 10, // Neues Gesetz: 10 Jahre (früher 14 Jahre)

    renewalStartMonths: 3, // Verlängerungsantrag kann 3 Monate vor Ablauf gestellt werden
    renewalDeadlineMonths: 0, // Die Verlängerung muss bis zum Ablauf erfolgen
    lateRenewalMonths: 1, // Nachfrist von 1 Monat für verspätete Verlängerung

    usageProofRequired: false, // Kein Nutzungsnachweis erforderlich
    usageProofYears: 0,

    usageDeclarationRequired: false, // Keine Benutzungserklärung erforderlich
    usageDeclarationYears: [],

    vertreterRequired: "Ja", // Lokaler Vertreter erforderlich
    prufungsumfang: "Umfassend", // Formelle und materielle Prüfung
    widerspruch: "Ja", // Widerspruch möglich

    poaVertreterRequired: "Ja", // Vertretervollmacht erforderlich
    poaDigitalCopy: "Nein", // Digitale Kopie nicht ausreichend
    poaOriginalRequired: "Ja", // Original der Vollmacht erforderlich
    poaDigitalSignature: "Nein", // Digitale Signatur nicht akzeptiert
    poaNotarization: "Ja", // Notarielle Beglaubigung erforderlich
    poaApostille: "Nein", // Keine Apostille erforderlich
    poaHinweise: "Original-Vollmacht erforderlich für Anmeldung oder Erneuerung.",

    mitgliedschaften: ["WIPO", "Pariser Übereinkunft", "TRIPS"],

    priorityDeadlineMonths: 6, // Prioritätsfrist von 6 Monaten
    priorityDocumentDeadlineMonths: 3,

    additionalNotes:
      "Unter dem neuen Markenrecht der Bahamas wurde die Schutzfrist von 14 Jahren auf 10 Jahre reduziert, mit entsprechenden 10-Jahres-Verlängerungsperioden.",
  }),
  createCategorizedCountry("BZ", "Belize", "Nordamerika", "direct", {
    calculationBasis: "registration",
    protectionPeriod: 10, // Schutzdauer: 10 Jahre

    renewalStartMonths: 6, // Verlängerungsantrag kann 6 Monate vor Ablauf gestellt werden
    renewalDeadlineMonths: 0, // Die Verlängerung muss bis zum Ablauf erfolgen
    lateRenewalMonths: 6, // Standardmäßige Nachfrist von 6 Monaten

    usageProofRequired: false, // Kein Nutzungsnachweis erforderlich
    usageProofYears: 0,

    usageDeclarationRequired: false, // Keine Benutzungserklärung erforderlich
    usageDeclarationYears: [],

    vertreterRequired: "Ja", // Lokaler Vertreter erforderlich
    prufungsumfang: "Umfassend", // Formelle und materielle Prüfung
    widerspruch: "Ja", // Widerspruch möglich

    poaVertreterRequired: "Ja", // Vertretervollmacht erforderlich
    poaDigitalCopy: "Nein", // Digitale Kopie nicht ausreichend
    poaOriginalRequired: "Ja", // Original der Vollmacht erforderlich
    poaDigitalSignature: "Nein", // Digitale Signatur nicht akzeptiert
    poaNotarization: "Ja", // Notarielle Beglaubigung erforderlich
    poaApostille: "Ja", // Apostille erforderlich
    poaHinweise: "Notariell beglaubigte und legalisierte Vollmacht erforderlich.",

    mitgliedschaften: ["WIPO", "Pariser Übereinkunft", "TRIPS"],

    priorityDeadlineMonths: 6, // Prioritätsfrist von 6 Monaten
    priorityDocumentDeadlineMonths: 3,

    additionalNotes:
      "Markenregistrierungen in Belize sind für 10 Jahre gültig und können unbegrenzt für weitere 10-Jahres-Perioden verlängert werden. Für die Anmeldung wird eine original unterschriebene, notariell beglaubigte und legalisierte Vollmacht benötigt.",
  }),
  createCategorizedCountry("BM", "Bermuda", "Nordamerika", "direct", {
    calculationBasis: "registration",
    protectionPeriod: 7, // Aktuelle Schutzfrist: 7 Jahre initial (ändert sich zu 10 Jahren mit neuem Gesetz)

    renewalStartMonths: 6, // Verlängerungsantrag kann 6 Monate vor Ablauf gestellt werden
    renewalDeadlineMonths: 0, // Die Verlängerung muss bis zum Ablauf erfolgen
    lateRenewalMonths: 6, // Nachfrist für verspätete Verlängerung

    usageProofRequired: false, // Kein Nutzungsnachweis erforderlich
    usageProofYears: 0,

    usageDeclarationRequired: false, // Keine Benutzungserklärung erforderlich
    usageDeclarationYears: [],

    vertreterRequired: "Ja", // Lokaler Vertreter ist für ausländische Anmelder erforderlich
    prufungsumfang: "Umfassend", // Formelle und materielle Prüfung
    widerspruch: "Ja", // Widerspruch möglich

    poaVertreterRequired: "Ja", // Vertretervollmacht erforderlich
    poaDigitalCopy: "Nein", // Digitale Kopie nicht ausreichend
    poaOriginalRequired: "Ja", // Original der Vollmacht erforderlich
    poaDigitalSignature: "Nein", // Digitale Signatur nicht akzeptiert
    poaNotarization: "Nein", // Keine notarielle Beglaubigung erforderlich
    poaApostille: "Nein", // Keine Apostille erforderlich
    poaHinweise: "Vollmacht erforderlich für Registrierung und Verlängerung.",

    mitgliedschaften: ["WIPO", "Pariser Übereinkunft", "TRIPS"],

    priorityDeadlineMonths: 6, // Prioritätsfrist von 6 Monaten
    priorityDocumentDeadlineMonths: 3,

    additionalNotes:
      "Die initiale Registrierungsperiode beträgt derzeit 7 Jahre, mit Erneuerungen für 14-Jahres-Perioden. Nach dem neuen Markengesetz (in Kraft ab Februar 2025) wird sich dies auf 10 Jahre initial und 10 Jahre je Erneuerung ändern.",
  }),
  createCategorizedCountry("CR", "Costa Rica", "Nordamerika", "direct", {
    calculationBasis: "registration",
    protectionPeriod: 10, // Schutzdauer: 10 Jahre

    renewalStartMonths: 12, // Verlängerungsantrag kann 12 Monate vor Ablauf gestellt werden
    renewalDeadlineMonths: 0, // Die Verlängerung muss bis zum Ablauf erfolgen
    lateRenewalMonths: 6, // Nachfrist von 6 Monaten für verspätete Verlängerung

    usageProofRequired: false, // Kein Nutzungsnachweis für Erneuerung erforderlich
    usageProofYears: 0,

    usageDeclarationRequired: false, // Keine spezifische Benutzungserklärung erforderlich
    usageDeclarationYears: [],

    vertreterRequired: "Ja", // Lokaler Vertreter für ausländische Anmelder erforderlich
    prufungsumfang: "Umfassend", // Formelle und materielle Prüfung
    widerspruch: "Ja", // Widerspruch möglich

    poaVertreterRequired: "Ja", // Vertretervollmacht erforderlich
    poaDigitalCopy: "Nein", // Digitale Kopie nicht ausreichend
    poaOriginalRequired: "Ja", // Original der Vollmacht erforderlich
    poaDigitalSignature: "Nein", // Digitale Signatur nicht akzeptiert
    poaNotarization: "Ja", // Notarielle Beglaubigung erforderlich
    poaApostille: "Ja", // Apostille erforderlich
    poaHinweise: "Beglaubigte Vollmacht erforderlich, mit Apostille oder Legalisierung durch das Konsulat.",

    mitgliedschaften: ["WIPO", "Pariser Übereinkunft", "TRIPS", "Madrid-Protokoll"],

    priorityDeadlineMonths: 6, // Prioritätsfrist von 6 Monaten
    priorityDocumentDeadlineMonths: 3,

    additionalNotes:
      "Markenregistrierungen in Costa Rica haben eine Schutzfrist von 10 Jahren und können unbegrenzt für weitere 10-Jahres-Perioden verlängert werden. Die Erneuerung kann bis zu 12 Monate vor Ablauf eingereicht werden, mit einer Nachfrist von 6 Monaten nach Ablauf. Kein Nutzungsnachweis ist für die Erneuerung erforderlich.",
  }),
  createCategorizedCountry("CU", "Kuba", "Nordamerika", "direct", {
    calculationBasis: "registration",
    protectionPeriod: 10, // Schutzdauer: 10 Jahre

    renewalStartMonths: 6, // Verlängerungsantrag kann 6 Monate vor Ablauf gestellt werden
    renewalDeadlineMonths: 0, // Die Verlängerung muss bis zum Ablauf erfolgen
    lateRenewalMonths: 6, // Standardmäßige Nachfrist von 6 Monaten

    usageProofRequired: true, // Nutzungsnachweis erforderlich
    usageProofYears: 3, // Nach 3 Jahren Nichtbenutzung kann die Marke angefochten werden

    usageDeclarationRequired: false, // Keine spezifische Benutzungserklärung erforderlich
    usageDeclarationYears: [],

    vertreterRequired: "Ja", // Lokaler Vertreter erforderlich
    prufungsumfang: "Umfassend", // Formelle und materielle Prüfung
    widerspruch: "Ja", // Widerspruch möglich

    poaVertreterRequired: "Ja", // Vertretervollmacht erforderlich
    poaDigitalCopy: "Nein", // Digitale Kopie nicht ausreichend
    poaOriginalRequired: "Ja", // Original der Vollmacht erforderlich
    poaDigitalSignature: "Nein", // Digitale Signatur nicht akzeptiert
    poaNotarization: "Ja", // Notarielle Beglaubigung erforderlich
    poaApostille: "Ja", // Apostille erforderlich
    poaHinweise: "Beglaubigte und legalisierte Vollmacht erforderlich.",

    mitgliedschaften: ["WIPO", "Pariser Übereinkunft", "TRIPS"],

    priorityDeadlineMonths: 6, // Prioritätsfrist von 6 Monaten
    priorityDocumentDeadlineMonths: 3,

    additionalNotes:
      "Markenregistrierungen in Kuba sind für 10 Jahre gültig und können für weitere 10-Jahres-Perioden verlängert werden. Die Marke kann nach 3 Jahren Nichtbenutzung angefochten werden. Die Anmeldung muss über das kubanische Amt für gewerblichen Rechtsschutz (OCPI) erfolgen.",
  }),
  createCategorizedCountry("DM", "Dominica", "Nordamerika", "direct", {
    calculationBasis: "registration",
    protectionPeriod: 10, // Schutzdauer: 10 Jahre

    renewalStartMonths: 6, // Verlängerungsantrag kann 6 Monate vor Ablauf gestellt werden
    renewalDeadlineMonths: 0, // Die Verlängerung muss bis zum Ablauf erfolgen
    lateRenewalMonths: 6, // Standardmäßige Nachfrist von 6 Monaten

    usageProofRequired: false, // Kein spezifischer Nutzungsnachweis erforderlich
    usageProofYears: 0,

    usageDeclarationRequired: false, // Keine Benutzungserklärung erforderlich
    usageDeclarationYears: [],

    vertreterRequired: "Ja", // Lokaler Vertreter erforderlich (in Dominica praktizierender Rechtsanwalt)
    prufungsumfang: "Umfassend", // Formelle und materielle Prüfung
    widerspruch: "Ja", // Widerspruch möglich

    poaVertreterRequired: "Ja", // Vertretervollmacht erforderlich
    poaDigitalCopy: "Nein", // Digitale Kopie nicht ausreichend
    poaOriginalRequired: "Ja", // Original der Vollmacht erforderlich
    poaDigitalSignature: "Nein", // Digitale Signatur nicht akzeptiert
    poaNotarization: "Ja", // Notarielle Beglaubigung erforderlich
    poaApostille: "Nein", // Keine Apostille erforderlich
    poaHinweise: "Notariell beglaubigte Vollmacht erforderlich.",

    mitgliedschaften: ["WIPO", "Pariser Übereinkunft", "TRIPS"],

    priorityDeadlineMonths: 6, // Prioritätsfrist von 6 Monaten
    priorityDocumentDeadlineMonths: 3,

    additionalNotes:
      "Markenregistrierungen in Dominica sind für 10 Jahre gültig und können für weitere 10-Jahres-Perioden verlängert werden. Ausländische Anmelder müssen durch einen in Dominica ansässigen und praktizierenden Rechtsanwalt vertreten werden.",
  }),
  createCategorizedCountry("DO", "Dominikanische Republik", "Nordamerika", "direct", {
    calculationBasis: "application",
    protectionPeriod: 10, // Schutzdauer: 10 Jahre ab Anmeldedatum

    renewalStartMonths: 6, // Verlängerungsantrag kann 6 Monate vor Ablauf gestellt werden
    renewalDeadlineMonths: 0, // Die Verlängerung muss bis zum Ablauf erfolgen
    lateRenewalMonths: 6, // Nachfrist von 6 Monaten für verspätete Verlängerung

    usageProofRequired: true, // Nutzungsnachweis bei Erneuerung erforderlich
    usageProofYears: 3, // Nach 3 Jahren Nichtbenutzung kann die Marke angefochten werden

    usageDeclarationRequired: false, // Keine spezifische Benutzungserklärung in regelmäßigen Abständen erforderlich
    usageDeclarationYears: [],

    vertreterRequired: "Ja", // Lokaler Vertreter erforderlich
    prufungsumfang: "Umfassend", // Formelle und materielle Prüfung
    widerspruch: "Ja", // Widerspruch möglich

    poaVertreterRequired: "Ja", // Vertretervollmacht erforderlich
    poaDigitalCopy: "Nein", // Digitale Kopie nicht ausreichend
    poaOriginalRequired: "Ja", // Original der Vollmacht erforderlich
    poaDigitalSignature: "Nein", // Digitale Signatur nicht akzeptiert
    poaNotarization: "Ja", // Notarielle Beglaubigung erforderlich
    poaApostille: "Ja", // Apostille erforderlich
    poaHinweise: "Beglaubigte und legalisierte Vollmacht erforderlich.",

    mitgliedschaften: ["WIPO", "Pariser Übereinkunft", "TRIPS"],

    priorityDeadlineMonths: 6, // Prioritätsfrist von 6 Monaten
    priorityDocumentDeadlineMonths: 3,

    additionalNotes:
      "Markenregistrierungen in der Dominikanischen Republik folgen dem 'First-to-File'-Prinzip und haben eine Schutzfrist von 10 Jahren ab Anmeldedatum. Die Erneuerung muss einen Nachweis der tatsächlichen Benutzung der Marke enthalten.",
  }),
  createCategorizedCountry("SV", "El Salvador", "Nordamerika", "direct", {
    calculationBasis: "registration",
    protectionPeriod: 10, // Schutzdauer: 10 Jahre ab Registrierungsdatum

    renewalStartMonths: 6, // Verlängerungsantrag kann 6 Monate vor Ablauf gestellt werden
    renewalDeadlineMonths: 0, // Die Verlängerung muss bis zum Ablauf erfolgen
    lateRenewalMonths: 6, // Nachfrist von 6 Monaten für verspätete Verlängerung

    usageProofRequired: false, // Kein spezifischer Nutzungsnachweis für Erneuerung erforderlich
    usageProofYears: 3, // Nach 3 Jahren Nichtbenutzung kann die Marke angefochten werden

    usageDeclarationRequired: false, // Keine Benutzungserklärung in regelmäßigen Abständen erforderlich
    usageDeclarationYears: [],

    vertreterRequired: "Ja", // Lokaler Vertreter erforderlich
    prufungsumfang: "Umfassend", // Formelle und materielle Prüfung
    widerspruch: "Ja", // Widerspruch möglich

    poaVertreterRequired: "Ja", // Vertretervollmacht erforderlich
    poaDigitalCopy: "Nein", // Digitale Kopie nicht ausreichend
    poaOriginalRequired: "Ja", // Original der Vollmacht erforderlich
    poaDigitalSignature: "Nein", // Digitale Signatur nicht akzeptiert
    poaNotarization: "Ja", // Notarielle Beglaubigung erforderlich
    poaApostille: "Ja", // Apostille erforderlich
    poaHinweise: "Beglaubigte und legalisierte Vollmacht erforderlich.",

    mitgliedschaften: ["WIPO", "Pariser Übereinkunft", "TRIPS"],

    priorityDeadlineMonths: 6, // Prioritätsfrist von 6 Monaten
    priorityDocumentDeadlineMonths: 3,

    additionalNotes:
      "Markenregistrierungen in El Salvador sind für 10 Jahre gültig und können unbegrenzt für weitere 10-Jahres-Perioden verlängert werden. Die Marke kann nach 3 Jahren Nichtbenutzung auf Antrag gelöscht werden. Eine Nutzung ist für die Erneuerung nicht erforderlich, aber für den Schutz gegen Löschungsanträge wichtig.",
  }),
  createCategorizedCountry("GD", "Grenada", "Nordamerika", "direct", {
    calculationBasis: "registration",
    protectionPeriod: 10, // Schutzdauer: 10 Jahre ab Registrierungsdatum

    renewalStartMonths: 6, // Verlängerungsantrag kann 6 Monate vor Ablauf gestellt werden
    renewalDeadlineMonths: 0, // Die Verlängerung muss bis zum Ablauf erfolgen
    lateRenewalMonths: 6, // Nachfrist von 6 Monaten für verspätete Verlängerung

    usageProofRequired: false, // Kein spezifischer Nutzungsnachweis erforderlich
    usageProofYears: 0,

    usageDeclarationRequired: false, // Keine Benutzungserklärung erforderlich
    usageDeclarationYears: [],

    vertreterRequired: "Ja", // Lokaler Vertreter erforderlich
    prufungsumfang: "Umfassend", // Formelle und materielle Prüfung
    widerspruch: "Ja", // Widerspruch möglich

    poaVertreterRequired: "Ja", // Vertretervollmacht erforderlich
    poaDigitalCopy: "Nein", // Digitale Kopie nicht ausreichend
    poaOriginalRequired: "Ja", // Original der Vollmacht erforderlich
    poaDigitalSignature: "Nein", // Digitale Signatur nicht akzeptiert
    poaNotarization: "Ja", // Notarielle Beglaubigung erforderlich
    poaApostille: "Ja", // Apostille erforderlich
    poaHinweise: "Notariell beglaubigte und legalisierte Vollmacht erforderlich.",

    mitgliedschaften: ["WIPO", "Pariser Übereinkunft", "TRIPS"],

    priorityDeadlineMonths: 6, // Prioritätsfrist von 6 Monaten
    priorityDocumentDeadlineMonths: 3,

    additionalNotes:
      "Markenregistrierungen in Grenada sind für 10 Jahre gültig und können für weitere 10-Jahres-Perioden verlängert werden. Die Anmeldung kann entweder direkt beim Markenamt in Grenada oder basierend auf einer UK-Registrierung erfolgen.",
  }),
  createCategorizedCountry("GT", "Guatemala", "Nordamerika", "direct", {
    calculationBasis: "registration",
    protectionPeriod: 10, // Schutzdauer: 10 Jahre ab Registrierungsdatum

    renewalStartMonths: 12, // Verlängerungsantrag kann 12 Monate vor Ablauf gestellt werden
    renewalDeadlineMonths: 0, // Die Verlängerung muss bis zum Ablauf erfolgen
    lateRenewalMonths: 6, // Nachfrist von 6 Monaten für verspätete Verlängerung

    usageProofRequired: true, // Nutzungsnachweis erforderlich, aber nicht für Erneuerung
    usageProofYears: 5, // Nach 5 Jahren Nichtbenutzung kann die Marke angefochten werden

    usageDeclarationRequired: false, // Keine regelmäßige Benutzungserklärung erforderlich
    usageDeclarationYears: [],

    vertreterRequired: "Ja", // Lokaler Vertreter erforderlich
    prufungsumfang: "Umfassend", // Formelle und materielle Prüfung
    widerspruch: "Ja", // Widerspruch möglich

    poaVertreterRequired: "Ja", // Vertretervollmacht erforderlich
    poaDigitalCopy: "Nein", // Digitale Kopie nicht ausreichend
    poaOriginalRequired: "Ja", // Original der Vollmacht erforderlich
    poaDigitalSignature: "Nein", // Digitale Signatur nicht akzeptiert
    poaNotarization: "Ja", // Notarielle Beglaubigung erforderlich
    poaApostille: "Ja", // Apostille erforderlich
    poaHinweise: "Vom guatemaltekischen Konsulat legalisierte Vollmacht erforderlich.",

    mitgliedschaften: ["WIPO", "Pariser Übereinkunft", "TRIPS"],

    priorityDeadlineMonths: 6, // Prioritätsfrist von 6 Monaten
    priorityDocumentDeadlineMonths: 3,

    additionalNotes:
      "Markenregistrierungen in Guatemala sind für 10 Jahre gültig und können unbegrenzt für weitere 10-Jahres-Perioden verlängert werden. Kein Nutzungsnachweis ist für die Erneuerung erforderlich. Die Marke kann nach 5 Jahren Nichtbenutzung angefochten werden.",
  }),
  createCategorizedCountry("HT", "Haiti", "Nordamerika", "direct", {
    calculationBasis: "registration",
    protectionPeriod: 10, // Schutzdauer: 10 Jahre ab Registrierungsdatum

    renewalStartMonths: 6, // Verlängerungsantrag kann 6 Monate vor Ablauf gestellt werden
    renewalDeadlineMonths: 0, // Die Verlängerung muss bis zum Ablauf erfolgen
    lateRenewalMonths: 6, // Nachfrist von 6 Monaten für verspätete Verlängerung

    usageProofRequired: true, // Nutzungsnachweis erforderlich
    usageProofYears: 6, // Nachweis im 6. Jahr der Registrierung

    usageDeclarationRequired: true, // Benutzungserklärung erforderlich
    usageDeclarationYears: [6], // Im 6. Jahr ab Registrierung

    vertreterRequired: "Ja", // Lokaler Vertreter erforderlich
    prufungsumfang: "Umfassend", // Formelle und materielle Prüfung
    widerspruch: "Ja", // Widerspruch möglich

    poaVertreterRequired: "Ja", // Vertretervollmacht erforderlich
    poaDigitalCopy: "Nein", // Digitale Kopie nicht ausreichend
    poaOriginalRequired: "Ja", // Original der Vollmacht erforderlich
    poaDigitalSignature: "Nein", // Digitale Signatur nicht akzeptiert
    poaNotarization: "Ja", // Notarielle Beglaubigung erforderlich
    poaApostille: "Ja", // Apostille erforderlich
    poaHinweise: "Notariell beglaubigte und legalisierte Vollmacht erforderlich.",

    mitgliedschaften: ["WIPO", "Pariser Übereinkunft", "TRIPS"],

    priorityDeadlineMonths: 6, // Prioritätsfrist von 6 Monaten
    priorityDocumentDeadlineMonths: 3,

    additionalNotes:
      "Markenregistrierungen in Haiti sind für 10 Jahre gültig und können für weitere 10-Jahres-Perioden verlängert werden. Ein Nutzungsnachweis oder eine eidesstattliche Versicherung über Nichtbenutzung muss innerhalb der ersten drei Monate des sechsten Jahres der Registrierung oder Erneuerung eingereicht werden.",
  }),
  createCategorizedCountry("HN", "Honduras", "Nordamerika", "direct", {
    calculationBasis: "registration",
    protectionPeriod: 10, // Schutzdauer: 10 Jahre ab Registrierungsdatum

    renewalStartMonths: 6, // Verlängerungsantrag kann 6 Monate vor Ablauf gestellt werden
    renewalDeadlineMonths: 0, // Die Verlängerung muss bis zum Ablauf erfolgen
    lateRenewalMonths: 6, // Nachfrist von 6 Monaten für verspätete Verlängerung

    usageProofRequired: true, // Nutzungsnachweis erforderlich, aber nicht für Erneuerung
    usageProofYears: 3, // Nach 3 Jahren Nichtbenutzung kann die Marke angefochten werden

    usageDeclarationRequired: false, // Keine regelmäßige Benutzungserklärung erforderlich
    usageDeclarationYears: [],

    vertreterRequired: "Ja", // Lokaler Vertreter erforderlich
    prufungsumfang: "Umfassend", // Formelle und materielle Prüfung
    widerspruch: "Ja", // Widerspruch möglich

    poaVertreterRequired: "Ja", // Vertretervollmacht erforderlich
    poaDigitalCopy: "Nein", // Digitale Kopie nicht ausreichend
    poaOriginalRequired: "Ja", // Original der Vollmacht erforderlich
    poaDigitalSignature: "Nein", // Digitale Signatur nicht akzeptiert
    poaNotarization: "Ja", // Notarielle Beglaubigung erforderlich
    poaApostille: "Ja", // Apostille erforderlich
    poaHinweise:
      "Notariell beglaubigte, mit Apostille versehene oder vom Konsulat von Honduras legalisierte Vollmacht erforderlich.",

    mitgliedschaften: ["WIPO", "Pariser Übereinkunft", "TRIPS"],

    priorityDeadlineMonths: 6, // Prioritätsfrist von 6 Monaten
    priorityDocumentDeadlineMonths: 3,

    additionalNotes:
      "Markenregistrierungen in Honduras sind für 10 Jahre gültig und können unbegrenzt für weitere 10-Jahres-Perioden verlängert werden. Die Marke kann nach 3 Jahren Nichtbenutzung auf Antrag gelöscht werden. Die Anmeldung muss über das Amt für geistiges Eigentum von Honduras erfolgen.",
  }),
  createCategorizedCountry("JM", "Jamaika", "Nordamerika", "direct", {
    calculationBasis: "registration",
    protectionPeriod: 10, // Schutzdauer: 10 Jahre ab Registrierungsdatum

    renewalStartMonths: 6, // Verlängerungsantrag kann 6 Monate vor Ablauf gestellt werden
    renewalDeadlineMonths: 0, // Die Verlängerung muss bis zum Ablauf erfolgen
    lateRenewalMonths: 6, // Nachfrist von 6 Monaten für verspätete Verlängerung

    usageProofRequired: false, // Kein spezifischer Nutzungsnachweis erforderlich
    usageProofYears: 0,

    usageDeclarationRequired: false, // Keine Benutzungserklärung erforderlich
    usageDeclarationYears: [],

    vertreterRequired: "Ja", // Lokaler Vertreter für ausländische Anmelder erforderlich
    prufungsumfang: "Umfassend", // Formelle und materielle Prüfung
    widerspruch: "Ja", // Widerspruch möglich

    poaVertreterRequired: "Ja", // Vertretervollmacht erforderlich
    poaDigitalCopy: "Nein", // Digitale Kopie nicht ausreichend
    poaOriginalRequired: "Ja", // Original der Vollmacht erforderlich
    poaDigitalSignature: "Nein", // Digitale Signatur nicht akzeptiert
    poaNotarization: "Nein", // Keine notarielle Beglaubigung erforderlich
    poaApostille: "Nein", // Keine Apostille erforderlich
    poaHinweise: "Einfach unterschriebene Vollmacht ist ausreichend.",

    mitgliedschaften: ["WIPO", "Pariser Übereinkunft", "TRIPS"],

    priorityDeadlineMonths: 6, // Prioritätsfrist von 6 Monaten
    priorityDocumentDeadlineMonths: 3,

    additionalNotes:
      "Markenregistrierungen in Jamaika sind für 10 Jahre ab Registrierungsdatum gültig und können für weitere 10-Jahres-Perioden verlängert werden. Zwei Monate vor Ablauf der Schutzfrist wird eine Benachrichtigung zur Erneuerung versandt. Eine Eintragung kann nach kontinuierlicher Nichtbenutzung von fünf Jahren angefochten werden.",
  }),
  createCategorizedCountry("NI", "Nicaragua", "Nordamerika", "direct", {
    calculationBasis: "registration",
    protectionPeriod: 10, // Schutzdauer: 10 Jahre ab Registrierungsdatum

    renewalStartMonths: 6, // Verlängerungsantrag kann 6 Monate vor Ablauf gestellt werden
    renewalDeadlineMonths: 0, // Die Verlängerung muss bis zum Ablauf erfolgen
    lateRenewalMonths: 6, // Nachfrist von 6 Monaten für verspätete Verlängerung

    usageProofRequired: true, // Nutzungsnachweis erforderlich, aber nicht für Erneuerung
    usageProofYears: 3, // Nach 3 Jahren Nichtbenutzung kann die Marke angefochten werden

    usageDeclarationRequired: false, // Keine regelmäßige Benutzungserklärung erforderlich
    usageDeclarationYears: [],

    vertreterRequired: "Ja", // Lokaler Vertreter erforderlich
    prufungsumfang: "Umfassend", // Formelle und materielle Prüfung
    widerspruch: "Ja", // Widerspruch möglich

    poaVertreterRequired: "Ja", // Vertretervollmacht erforderlich
    poaDigitalCopy: "Nein", // Digitale Kopie nicht ausreichend
    poaOriginalRequired: "Ja", // Original der Vollmacht erforderlich
    poaDigitalSignature: "Nein", // Digitale Signatur nicht akzeptiert
    poaNotarization: "Ja", // Notarielle Beglaubigung erforderlich
    poaApostille: "Ja", // Apostille erforderlich
    poaHinweise:
      "Notariell beglaubigte und legalisierte Vollmacht (mit Apostille oder vom nicaraguanischen Konsulat) erforderlich, innerhalb von 2 Monaten nach Anmeldung einzureichen.",

    mitgliedschaften: ["WIPO", "Pariser Übereinkunft", "TRIPS"],

    priorityDeadlineMonths: 6, // Prioritätsfrist von 6 Monaten
    priorityDocumentDeadlineMonths: 2, // Innerhalb von 2 Monaten nach Anmeldung einzureichen

    additionalNotes:
      "Markenregistrierungen in Nicaragua sind für 10 Jahre gültig und können unbegrenzt für weitere 10-Jahres-Perioden verlängert werden. Für die Erneuerung ist nur eine Vollmacht erforderlich (notariell beglaubigt und legalisiert). Die Marke kann nach 3 Jahren Nichtbenutzung angefochten werden.",
  }),
  createCategorizedCountry("KN", "St. Kitts und Nevis", "Nordamerika", "direct", {
    calculationBasis: "registration",
    protectionPeriod: 10, // Schutzdauer: 10 Jahre ab Registrierungsdatum

    renewalStartMonths: 6, // Verlängerungsantrag kann 6 Monate vor Ablauf gestellt werden
    renewalDeadlineMonths: 0, // Die Verlängerung muss bis zum Ablauf erfolgen
    lateRenewalMonths: 6, // Nachfrist von 6 Monaten für verspätete Verlängerung

    usageProofRequired: true, // Nutzungsnachweis erforderlich, aber nicht für Erneuerung
    usageProofYears: 3, // Nach 3 Jahren Nichtbenutzung kann die Marke angefochten werden

    usageDeclarationRequired: false, // Keine regelmäßige Benutzungserklärung erforderlich
    usageDeclarationYears: [],

    vertreterRequired: "Ja", // Lokaler Vertreter erforderlich
    prufungsumfang: "Umfassend", // Formelle und materielle Prüfung
    widerspruch: "Ja", // Widerspruch möglich

    poaVertreterRequired: "Ja", // Vertretervollmacht erforderlich
    poaDigitalCopy: "Nein", // Digitale Kopie nicht ausreichend
    poaOriginalRequired: "Ja", // Original der Vollmacht erforderlich
    poaDigitalSignature: "Nein", // Digitale Signatur nicht akzeptiert
    poaNotarization: "Ja", // Notarielle Beglaubigung erforderlich
    poaApostille: "Nein", // Keine Apostille erforderlich
    poaHinweise: "Original-Vollmacht sowie Original-Erklärung und -Deklaration erforderlich.",

    mitgliedschaften: ["WIPO", "Pariser Übereinkunft", "TRIPS"],

    priorityDeadlineMonths: 6, // Prioritätsfrist von 6 Monaten
    priorityDocumentDeadlineMonths: 3,

    additionalNotes:
      "Markenregistrierungen in St. Kitts und Nevis sind für 10 Jahre gültig und können für weitere 10-Jahres-Perioden verlängert werden. Es ist keine lokale Nutzung oder Nutzungsabsicht vor der Anmeldung erforderlich, aber Nichtbenutzung für einen Zeitraum von drei Jahren nach der Registrierung kann zur Löschung der Marke führen.",
  }),
  createCategorizedCountry("LC", "St. Lucia", "Nordamerika", "direct", {
    calculationBasis: "application",
    protectionPeriod: 10, // Schutzdauer: 10 Jahre ab Anmeldedatum

    renewalStartMonths: 3, // Verlängerungsantrag kann 3 Monate vor Ablauf gestellt werden
    renewalDeadlineMonths: 0, // Die Verlängerung muss bis zum Ablauf erfolgen
    lateRenewalMonths: 6, // Nachfrist von 6 Monaten für verspätete Verlängerung

    usageProofRequired: false, // Kein spezifischer Nutzungsnachweis erforderlich
    usageProofYears: 0,

    usageDeclarationRequired: false, // Keine Benutzungserklärung erforderlich
    usageDeclarationYears: [],

    vertreterRequired: "Ja", // Lokaler Vertreter (Anwalt in St. Lucia) erforderlich
    prufungsumfang: "Umfassend", // Formelle und materielle Prüfung
    widerspruch: "Ja", // Widerspruch möglich

    poaVertreterRequired: "Ja", // Vertretervollmacht erforderlich
    poaDigitalCopy: "Nein", // Digitale Kopie nicht ausreichend
    poaOriginalRequired: "Ja", // Original der Vollmacht erforderlich
    poaDigitalSignature: "Nein", // Digitale Signatur nicht akzeptiert
    poaNotarization: "Ja", // Notarielle Beglaubigung erforderlich
    poaApostille: "Nein", // Keine Apostille erforderlich
    poaHinweise:
      "Einfach unterschriebene Vollmacht ist ausreichend, für ausländische Anmelder wird ein Rechtsanwalt in St. Lucia benötigt.",

    mitgliedschaften: ["WIPO", "Pariser Übereinkunft", "TRIPS"],

    priorityDeadlineMonths: 6, // Prioritätsfrist von 6 Monaten
    priorityDocumentDeadlineMonths: 3,

    additionalNotes:
      "Markenregistrierungen in St. Lucia sind für 10 Jahre ab Anmeldedatum gültig und können für weitere 10-Jahres-Perioden verlängert werden. Die Anmeldung muss durch einen Anwalt in St. Lucia erfolgen. Die Marke kann nach 5 Jahren Nichtbenutzung angefochten werden.",
  }),
  createCategorizedCountry("VC", "St. Vincent und die Grenadinen", "Nordamerika", "direct", {
    calculationBasis: "registration",
    protectionPeriod: 10, // Schutzdauer: 10 Jahre ab Registrierungsdatum

    renewalStartMonths: 6, // Verlängerungsantrag kann 6 Monate vor Ablauf gestellt werden
    renewalDeadlineMonths: 0, // Die Verlängerung muss bis zum Ablauf erfolgen
    lateRenewalMonths: 6, // Nachfrist von 6 Monaten für verspätete Verlängerung

    usageProofRequired: false, // Kein spezifischer Nutzungsnachweis erforderlich
    usageProofYears: 0,

    usageDeclarationRequired: false, // Keine Benutzungserklärung erforderlich
    usageDeclarationYears: [],

    vertreterRequired: "Ja", // Lokaler Vertreter erforderlich
    prufungsumfang: "Umfassend", // Formelle und materielle Prüfung
    widerspruch: "Ja", // Widerspruch möglich

    poaVertreterRequired: "Ja", // Vertretervollmacht erforderlich
    poaDigitalCopy: "Nein", // Digitale Kopie nicht ausreichend
    poaOriginalRequired: "Ja", // Original der Vollmacht erforderlich
    poaDigitalSignature: "Nein", // Digitale Signatur nicht akzeptiert
    poaNotarization: "Nein", // Keine notarielle Beglaubigung erforderlich
    poaApostille: "Nein", // Keine Apostille erforderlich
    poaHinweise: "Einfach unterschriebene Vollmacht ist ausreichend.",

    mitgliedschaften: ["WIPO", "Pariser Übereinkunft", "TRIPS"],

    priorityDeadlineMonths: 6, // Prioritätsfrist von 6 Monaten
    priorityDocumentDeadlineMonths: 3,

    additionalNotes:
      "Markenregistrierungen in St. Vincent und den Grenadinen sind für 10 Jahre gültig und können für weitere 10-Jahres-Perioden verlängert werden. Die Registrierung erfolgt über die Companies and Intellectual Property Office (CIPO). Der Anmeldungsprozess dauert etwa 12-18 Monate.",
  }),
  createCategorizedCountry("TT", "Trinidad und Tobago", "Nordamerika", "direct", {
    calculationBasis: "application",
    protectionPeriod: 10, // Schutzdauer: 10 Jahre ab Anmeldedatum

    renewalStartMonths: 6, // Verlängerungsantrag kann 6 Monate vor Ablauf gestellt werden
    renewalDeadlineMonths: 0, // Die Verlängerung muss bis zum Ablauf erfolgen
    lateRenewalMonths: 6, // Nachfrist von 6 Monaten für verspätete Verlängerung

    usageProofRequired: false, // Kein Nutzungsnachweis für Erneuerung erforderlich
    usageProofYears: 0,

    usageDeclarationRequired: false, // Keine Benutzungserklärung erforderlich
    usageDeclarationYears: [],

    vertreterRequired: "Ja", // Lokaler Vertreter erforderlich
    prufungsumfang: "Umfassend", // Formelle und materielle Prüfung
    widerspruch: "Ja", // Widerspruch möglich

    poaVertreterRequired: "Ja", // Vertretervollmacht erforderlich
    poaDigitalCopy: "Nein", // Digitale Kopie nicht ausreichend
    poaOriginalRequired: "Ja", // Original der Vollmacht erforderlich
    poaDigitalSignature: "Nein", // Digitale Signatur nicht akzeptiert
    poaNotarization: "Nein", // Keine notarielle Beglaubigung erforderlich
    poaApostille: "Nein", // Keine Apostille erforderlich
    poaHinweise: "Formular TM-No. 1 (Authorization of Agent) ist erforderlich.",

    mitgliedschaften: ["WIPO", "Pariser Übereinkunft", "TRIPS", "Madrid-Protokoll"],

    priorityDeadlineMonths: 6, // Prioritätsfrist von 6 Monaten
    priorityDocumentDeadlineMonths: 3,

    additionalNotes:
      "Markenregistrierungen in Trinidad und Tobago sind für 10 Jahre ab Anmeldedatum gültig und können für weitere 10-Jahres-Perioden verlängert werden. Für die Erneuerung sind das Formular TM-No. 9 (Antrag auf Erneuerung) und TM-No. 1 (Vollmacht) erforderlich. Die Marke kann nach 5 Jahren kontinuierlicher Nichtbenutzung angefochten werden.",
  }),
  createCategorizedCountry("TC", "Turks- und Caicosinseln", "Nordamerika", "direct", {
    calculationBasis: "registration",
    protectionPeriod: 10, // Schutzdauer: 10 Jahre ab Registrierungsdatum

    renewalStartMonths: 6, // Verlängerungsantrag kann 6 Monate vor Ablauf gestellt werden
    renewalDeadlineMonths: 0, // Die Verlängerung muss bis zum Ablauf erfolgen
    lateRenewalMonths: 1, // Nachfrist von 1 Monat für verspätete Verlängerung (mit jährlicher Frist bis 1. Februar)

    usageProofRequired: false, // Kein spezifischer Nutzungsnachweis erforderlich
    usageProofYears: 0,

    usageDeclarationRequired: false, // Keine Benutzungserklärung erforderlich
    usageDeclarationYears: [],

    vertreterRequired: "Ja", // Lokaler Vertreter erforderlich
    prufungsumfang: "Umfassend", // Formelle und materielle Prüfung
    widerspruch: "Ja", // Widerspruch möglich

    poaVertreterRequired: "Ja", // Vertretervollmacht erforderlich
    poaDigitalCopy: "Nein", // Digitale Kopie nicht ausreichend
    poaOriginalRequired: "Ja", // Original der Vollmacht erforderlich
    poaDigitalSignature: "Nein", // Digitale Signatur nicht akzeptiert
    poaNotarization: "Nein", // Keine notarielle Beglaubigung erforderlich
    poaApostille: "Nein", // Keine Apostille erforderlich
    poaHinweise: "Einfach unterschriebene Vollmacht ist ausreichend.",

    mitgliedschaften: ["WIPO", "Pariser Übereinkunft (über UK)"],

    priorityDeadlineMonths: 6, // Prioritätsfrist von 6 Monaten
    priorityDocumentDeadlineMonths: 3,

    additionalNotes:
      "Markenregistrierungen auf den Turks- und Caicosinseln sind für 10 Jahre gültig und können für weitere 10-Jahres-Perioden verlängert werden. Eine jährliche Wartungsgebühr ist zu zahlen, mit einer einmonatigen Nachfrist bis zum 1. Februar jedes Jahres. Bei Nichtzahlung gilt die Marke als ruhend und der Schutz kann beeinträchtigt sein.",
  }),
  createCategorizedCountry("AI", "Anguilla", "Nordamerika", "direct", {
    calculationBasis: "application",
    protectionPeriod: 10, // Schutzdauer: 10 Jahre ab Anmeldedatum

    renewalStartMonths: 6, // Verlängerungsantrag kann 6 Monate vor Ablauf gestellt werden
    renewalDeadlineMonths: 0, // Die Verlängerung muss bis zum Ablauf erfolgen
    lateRenewalMonths: 6, // Nachfrist von 6 Monaten für verspätete Verlängerung

    usageProofRequired: false, // Kein spezifischer Nutzungsnachweis erforderlich
    usageProofYears: 0,

    usageDeclarationRequired: false, // Keine Benutzungserklärung erforderlich
    usageDeclarationYears: [],

    vertreterRequired: "Ja", // Lokaler Vertreter erforderlich
    prufungsumfang: "Umfassend", // Formelle und materielle Prüfung
    widerspruch: "Ja", // Widerspruch möglich

    poaVertreterRequired: "Ja", // Vertretervollmacht erforderlich
    poaDigitalCopy: "Nein", // Digitale Kopie nicht ausreichend
    poaOriginalRequired: "Ja", // Original der Vollmacht erforderlich
    poaDigitalSignature: "Nein", // Digitale Signatur nicht akzeptiert
    poaNotarization: "Nein", // Keine notarielle Beglaubigung erforderlich
    poaApostille: "Nein", // Keine Apostille erforderlich
    poaHinweise: "Einfach unterschriebene Vollmacht ist ausreichend.",

    mitgliedschaften: ["WIPO", "Pariser Übereinkunft (über UK)"],

    priorityDeadlineMonths: 6, // Prioritätsfrist von 6 Monaten
    priorityDocumentDeadlineMonths: 3,

    additionalNotes:
      "Markenregistrierungen in Anguilla sind für 10 Jahre ab Anmeldedatum gültig und können für weitere 10-Jahres-Perioden verlängert werden. Vor der Registrierung muss die Marke für 2 Monate in der Anguilla-Zeitung veröffentlicht werden. Die Anmeldung kann entweder direkt beim lokalen Markenamt oder basierend auf einer UK-Registrierung erfolgen.",
  }),
  createCategorizedCountry("AW", "Aruba", "Nordamerika", "direct", {
    calculationBasis: "registration",
    protectionPeriod: 10, // Schutzdauer: 10 Jahre ab Registrierungsdatum

    renewalStartMonths: 6, // Verlängerungsantrag kann 6 Monate vor Ablauf gestellt werden
    renewalDeadlineMonths: 0, // Die Verlängerung muss bis zum Ablauf erfolgen
    lateRenewalMonths: 6, // Nachfrist von 6 Monaten für verspätete Verlängerung

    usageProofRequired: false, // Kein formeller Nutzungsnachweis erforderlich
    usageProofYears: 0,

    usageDeclarationRequired: false, // Keine formelle Benutzungserklärung erforderlich
    usageDeclarationYears: [],

    vertreterRequired: "Ja", // Lokaler Vertreter erforderlich
    prufungsumfang: "Umfassend", // Formelle und materielle Prüfung
    widerspruch: "Ja", // Widerspruch möglich

    poaVertreterRequired: "Ja", // Vertretervollmacht erforderlich
    poaDigitalCopy: "Nein", // Digitale Kopie nicht ausreichend
    poaOriginalRequired: "Ja", // Original der Vollmacht erforderlich
    poaDigitalSignature: "Nein", // Digitale Signatur nicht akzeptiert
    poaNotarization: "Nein", // Keine notarielle Beglaubigung erforderlich
    poaApostille: "Nein", // Keine Apostille erforderlich
    poaHinweise: "Einfach unterschriebene Vollmacht ist ausreichend.",

    mitgliedschaften: ["WIPO", "Pariser Übereinkunft (über Niederlande)"],

    priorityDeadlineMonths: 6, // Prioritätsfrist von 6 Monaten
    priorityDocumentDeadlineMonths: 3,

    additionalNotes:
      "In Aruba ist die Registrierung einer Marke nicht zwingend erforderlich, aber der erste Anmelder einer Marke wird als erster Benutzer angesehen und hat das ausschließliche Nutzungsrecht. Die Registrierung gilt für 10 Jahre und kann unbegrenzt für weitere 10-Jahres-Perioden verlängert werden. In Aruba kann eine Marke angemeldet werden, bevor sie benutzt wird.",
  }),
  createCategorizedCountry("CW", "Curaçao", "Nordamerika", "direct", {
    calculationBasis: "registration",
    protectionPeriod: 10, // Schutzdauer: 10 Jahre ab Registrierungsdatum

    renewalStartMonths: 6, // Verlängerungsantrag kann 6 Monate vor Ablauf gestellt werden
    renewalDeadlineMonths: 0, // Die Verlängerung muss bis zum Ablauf erfolgen
    lateRenewalMonths: 6, // Nachfrist von 6 Monaten für verspätete Verlängerung

    usageProofRequired: false, // Kein formeller Nutzungsnachweis erforderlich
    usageProofYears: 0,

    usageDeclarationRequired: false, // Keine formelle Benutzungserklärung erforderlich
    usageDeclarationYears: [],

    vertreterRequired: "Ja", // Lokaler Vertreter erforderlich
    prufungsumfang: "Umfassend", // Formelle und materielle Prüfung
    widerspruch: "Ja", // Widerspruch möglich

    poaVertreterRequired: "Ja", // Vertretervollmacht erforderlich
    poaDigitalCopy: "Nein", // Digitale Kopie nicht ausreichend
    poaOriginalRequired: "Ja", // Original der Vollmacht erforderlich
    poaDigitalSignature: "Nein", // Digitale Signatur nicht akzeptiert
    poaNotarization: "Nein", // Keine notarielle Beglaubigung erforderlich
    poaApostille: "Nein", // Keine Apostille erforderlich
    poaHinweise: "Einfach unterschriebene Vollmacht ist ausreichend.",

    mitgliedschaften: ["WIPO", "Pariser Übereinkunft (über Niederlande)"],

    priorityDeadlineMonths: 6, // Prioritätsfrist von 6 Monaten
    priorityDocumentDeadlineMonths: 3,

    additionalNotes:
      "Markenregistrierungen in Curaçao sind für 10 Jahre gültig und können für weitere 10-Jahres-Perioden verlängert werden. Die ausschließlichen Rechte an einer Marke werden nur durch Registrierung erworben, da es sich um eine 'First-to-File'-Jurisdiktion handelt. Anmeldungen werden beim Bureau for Intellectual Property Curaçao (BIP) eingereicht. Der Registrierungsprozess dauert etwa 6 Monate.",
  }),
  createCategorizedCountry("BL", "Saint-Barthélemy", "Nordamerika", "direct", {
    calculationBasis: "registration",
    protectionPeriod: 10, // Schutzdauer: 10 Jahre (wie in Frankreich)

    renewalStartMonths: 6, // Verlängerungsantrag kann 6 Monate vor Ablauf gestellt werden
    renewalDeadlineMonths: 0, // Die Verlängerung muss bis zum Ablauf erfolgen
    lateRenewalMonths: 6, // Nachfrist von 6 Monaten für verspätete Verlängerung

    usageProofRequired: false, // Kein spezifischer Nutzungsnachweis erforderlich
    usageProofYears: 5, // Nach 5 Jahren Nichtbenutzung kann die Marke angefochten werden

    usageDeclarationRequired: false, // Keine Benutzungserklärung erforderlich
    usageDeclarationYears: [],

    vertreterRequired: "Ja", // Lokaler Vertreter für ausländische Anmelder erforderlich
    prufungsumfang: "Formell", // Hauptsächlich formelle Prüfung (wie in Frankreich)
    widerspruch: "Ja", // Widerspruch möglich

    poaVertreterRequired: "Ja", // Vertretervollmacht erforderlich
    poaDigitalCopy: "Ja", // Digitale Kopie kann ausreichend sein
    poaOriginalRequired: "Nein", // Original der Vollmacht nicht zwingend erforderlich
    poaDigitalSignature: "Ja", // Digitale Signatur kann akzeptiert werden
    poaNotarization: "Nein", // Keine notarielle Beglaubigung erforderlich
    poaApostille: "Nein", // Keine Apostille erforderlich
    poaHinweise: "Einfache Vollmacht ist in der Regel ausreichend.",

    mitgliedschaften: ["WIPO", "Pariser Übereinkunft (über Frankreich)", "TRIPS"],

    priorityDeadlineMonths: 6, // Prioritätsfrist von 6 Monaten
    priorityDocumentDeadlineMonths: 3,

    additionalNotes:
      "Saint-Barthélemy ist Teil Frankreichs und wird von der französischen Markenregistrierung abgedeckt. Markenregistrierungen sind für 10 Jahre gültig und können für weitere 10-Jahres-Perioden verlängert werden. Eine Marke kann auf Antrag gelöscht werden, wenn sie für einen ununterbrochenen Zeitraum von 5 Jahren nicht ernsthaft genutzt wurde.",
  }),
  createCategorizedCountry("MF", "Saint-Martin", "Nordamerika", "direct", {
    calculationBasis: "registration",
    protectionPeriod: 10, // Schutzdauer: 10 Jahre (wie in Frankreich)

    renewalStartMonths: 6, // Verlängerungsantrag kann 6 Monate vor Ablauf gestellt werden
    renewalDeadlineMonths: 0, // Die Verlängerung muss bis zum Ablauf erfolgen
    lateRenewalMonths: 6, // Nachfrist von 6 Monaten für verspätete Verlängerung

    usageProofRequired: false, // Kein spezifischer Nutzungsnachweis erforderlich
    usageProofYears: 5, // Nach 5 Jahren Nichtbenutzung kann die Marke angefochten werden

    usageDeclarationRequired: false, // Keine Benutzungserklärung erforderlich
    usageDeclarationYears: [],

    vertreterRequired: "Ja", // Lokaler Vertreter für ausländische Anmelder erforderlich
    prufungsumfang: "Formell", // Hauptsächlich formelle Prüfung (wie in Frankreich)
    widerspruch: "Ja", // Widerspruch möglich

    poaVertreterRequired: "Ja", // Vertretervollmacht erforderlich
    poaDigitalCopy: "Ja", // Digitale Kopie kann ausreichend sein
    poaOriginalRequired: "Nein", // Original der Vollmacht nicht zwingend erforderlich
    poaDigitalSignature: "Ja", // Digitale Signatur kann akzeptiert werden
    poaNotarization: "Nein", // Keine notarielle Beglaubigung erforderlich
    poaApostille: "Nein", // Keine Apostille erforderlich
    poaHinweise: "Einfache Vollmacht ist in der Regel ausreichend.",

    mitgliedschaften: ["WIPO", "Pariser Übereinkunft (über Frankreich)", "TRIPS"],

    priorityDeadlineMonths: 6, // Prioritätsfrist von 6 Monaten
    priorityDocumentDeadlineMonths: 3,

    additionalNotes:
      "Saint-Martin ist Teil Frankreichs und wird von der französischen Markenregistrierung abgedeckt. Markenregistrierungen sind für 10 Jahre gültig und können für weitere 10-Jahres-Perioden verlängert werden. Eine Marke kann auf Antrag gelöscht werden, wenn sie für einen ununterbrochenen Zeitraum von 5 Jahren nicht ernsthaft genutzt wurde.",
  }),
  createCategorizedCountry("PM", "Saint-Pierre und Miquelon", "Nordamerika", "direct", {
    calculationBasis: "registration",
    protectionPeriod: 10, // Schutzdauer: 10 Jahre (wie in Frankreich)

    renewalStartMonths: 6, // Verlängerungsantrag kann 6 Monate vor Ablauf gestellt werden
    renewalDeadlineMonths: 0, // Die Verlängerung muss bis zum Ablauf erfolgen
    lateRenewalMonths: 6, // Nachfrist von 6 Monaten für verspätete Verlängerung

    usageProofRequired: false, // Kein spezifischer Nutzungsnachweis erforderlich
    usageProofYears: 5, // Nach 5 Jahren Nichtbenutzung kann die Marke angefochten werden

    usageDeclarationRequired: false, // Keine Benutzungserklärung erforderlich
    usageDeclarationYears: [],

    vertreterRequired: "Ja", // Lokaler Vertreter für ausländische Anmelder erforderlich
    prufungsumfang: "Formell", // Hauptsächlich formelle Prüfung (wie in Frankreich)
    widerspruch: "Ja", // Widerspruch möglich

    poaVertreterRequired: "Ja", // Vertretervollmacht erforderlich
    poaDigitalCopy: "Ja", // Digitale Kopie kann ausreichend sein
    poaOriginalRequired: "Nein", // Original der Vollmacht nicht zwingend erforderlich
    poaDigitalSignature: "Ja", // Digitale Signatur kann akzeptiert werden
    poaNotarization: "Nein", // Keine notarielle Beglaubigung erforderlich
    poaApostille: "Nein", // Keine Apostille erforderlich
    poaHinweise: "Einfache Vollmacht ist in der Regel ausreichend.",

    mitgliedschaften: ["WIPO", "Pariser Übereinkunft (über Frankreich)", "TRIPS"],

    priorityDeadlineMonths: 6, // Prioritätsfrist von 6 Monaten
    priorityDocumentDeadlineMonths: 3,

    additionalNotes:
      "Saint-Pierre und Miquelon ist Teil Frankreichs und wird von der französischen Markenregistrierung abgedeckt. Markenregistrierungen sind für 10 Jahre gültig und können für weitere 10-Jahres-Perioden verlängert werden. Eine Marke kann auf Antrag gelöscht werden, wenn sie für einen ununterbrochenen Zeitraum von 5 Jahren nicht ernsthaft genutzt wurde.",
  }),
  createCategorizedCountry("SX", "Sint Maarten", "Nordamerika", "direct", {
    calculationBasis: "registration",
    protectionPeriod: 10, // Schutzdauer: 10 Jahre ab Registrierungsdatum

    renewalStartMonths: 6, // Verlängerungsantrag kann 6 Monate vor Ablauf gestellt werden
    renewalDeadlineMonths: 0, // Die Verlängerung muss bis zum Ablauf erfolgen
    lateRenewalMonths: 6, // Nachfrist von 6 Monaten für verspätete Verlängerung

    usageProofRequired: false, // Kein formeller Nutzungsnachweis erforderlich
    usageProofYears: 0,

    usageDeclarationRequired: false, // Keine formelle Benutzungserklärung erforderlich
    usageDeclarationYears: [],

    vertreterRequired: "Ja", // Lokaler Vertreter erforderlich
    prufungsumfang: "Umfassend", // Formelle und materielle Prüfung
    widerspruch: "Ja", // Widerspruch möglich

    poaVertreterRequired: "Ja", // Vertretervollmacht erforderlich
    poaDigitalCopy: "Nein", // Digitale Kopie nicht ausreichend
    poaOriginalRequired: "Ja", // Original der Vollmacht erforderlich
    poaDigitalSignature: "Nein", // Digitale Signatur nicht akzeptiert
    poaNotarization: "Nein", // Keine notarielle Beglaubigung erforderlich
    poaApostille: "Nein", // Keine Apostille erforderlich
    poaHinweise: "Einfach unterschriebene Vollmacht ist ausreichend.",

    mitgliedschaften: ["WIPO", "Pariser Übereinkunft (über Niederlande)"],

    priorityDeadlineMonths: 6, // Prioritätsfrist von 6 Monaten
    priorityDocumentDeadlineMonths: 3,

    additionalNotes:
      "Markenregistrierungen in Sint Maarten sind für 10 Jahre gültig und können für weitere 10-Jahres-Perioden verlängert werden. Die Anmeldung erfolgt beim Bureau for Intellectual Property Sint Maarten. Sint Maarten ist seit 2010 ein autonomes Land innerhalb des Königreichs der Niederlande.",
  }),
  createCategorizedCountry("KY", "Kaimaninseln", "Nordamerika", "direct", {
    calculationBasis: "registration",
    protectionPeriod: 10, // Schutzdauer: 10 Jahre ab Registrierungsdatum

    renewalStartMonths: 6, // Verlängerungsantrag kann 6 Monate vor Ablauf gestellt werden
    renewalDeadlineMonths: 0, // Die Verlängerung muss bis zum Ablauf erfolgen
    lateRenewalMonths: 6, // Nachfrist von 6 Monaten für verspätete Verlängerung

    usageProofRequired: false, // Kein spezifischer Nutzungsnachweis erforderlich
    usageProofYears: 0,

    usageDeclarationRequired: false, // Keine Benutzungserklärung erforderlich
    usageDeclarationYears: [],

    vertreterRequired: "Ja", // Lokaler Vertreter erforderlich
    prufungsumfang: "Umfassend", // Formelle und materielle Prüfung
    widerspruch: "Ja", // Widerspruch möglich

    poaVertreterRequired: "Ja", // Vertretervollmacht erforderlich
    poaDigitalCopy: "Nein", // Digitale Kopie nicht ausreichend
    poaOriginalRequired: "Ja", // Original der Vollmacht erforderlich
    poaDigitalSignature: "Nein", // Digitale Signatur nicht akzeptiert
    poaNotarization: "Nein", // Keine notarielle Beglaubigung erforderlich
    poaApostille: "Nein", // Keine Apostille erforderlich
    poaHinweise: "Einfach unterschriebene Vollmacht ist ausreichend.",

    mitgliedschaften: ["WIPO", "Pariser Übereinkunft (über UK)"],

    priorityDeadlineMonths: 6, // Prioritätsfrist von 6 Monaten
    priorityDocumentDeadlineMonths: 3,

    additionalNotes:
      "Die Kaimaninseln folgen einem dualistischen System für Markenregistrierungen: Entweder basierend auf einer UK-Registrierung (schnelleres Verfahren) oder als eigenständige Registrierung. Markenregistrierungen sind für 10 Jahre gültig und können für weitere 10-Jahres-Perioden verlängert werden.",
  }),
  createCategorizedCountry("GL", "Grönland", "Nordamerika", "direct", {
    calculationBasis: "registration",
    protectionPeriod: 10, // Schutzdauer: 10 Jahre ab Registrierungsdatum

    renewalStartMonths: 6, // Verlängerungsantrag kann 6 Monate vor Ablauf gestellt werden
    renewalDeadlineMonths: 0, // Die Verlängerung muss bis zum Ablauf erfolgen
    lateRenewalMonths: 6, // Nachfrist von 6 Monaten für verspätete Verlängerung

    usageProofRequired: true, // Nutzungsnachweis erforderlich (nach dänischem Recht)
    usageProofYears: 5, // Nach 5 Jahren Nichtbenutzung kann die Marke angefochten werden

    usageDeclarationRequired: false, // Keine formelle Benutzungserklärung erforderlich
    usageDeclarationYears: [],

    vertreterRequired: "Ja", // Lokaler Vertreter für ausländische Anmelder empfohlen
    prufungsumfang: "Umfassend", // Formelle und materielle Prüfung
    widerspruch: "Ja", // Widerspruch möglich

    poaVertreterRequired: "Ja", // Vertretervollmacht empfohlen
    poaDigitalCopy: "Ja", // Digitale Kopie in der Regel ausreichend
    poaOriginalRequired: "Nein", // Original der Vollmacht nicht zwingend erforderlich
    poaDigitalSignature: "Ja", // Digitale Signatur kann akzeptiert werden
    poaNotarization: "Nein", // Keine notarielle Beglaubigung erforderlich
    poaApostille: "Nein", // Keine Apostille erforderlich
    poaHinweise: "Einfache Vollmacht ist in der Regel ausreichend.",

    mitgliedschaften: ["WIPO", "Pariser Übereinkunft (über Dänemark)"],

    priorityDeadlineMonths: 6, // Prioritätsfrist von 6 Monaten
    priorityDocumentDeadlineMonths: 3,

    additionalNotes:
      "Grönland folgt dem dänischen Markenrecht. Markenregistrierungen sind für 10 Jahre gültig und können für weitere 10-Jahres-Perioden verlängert werden. Die Marke kann nach 5 Jahren Nichtbenutzung angefochten werden. Eine dänische Markenregistrierung erstreckt sich nicht automatisch auf Grönland; eine separate Anmeldung ist erforderlich.",
  }),
  createCategorizedCountry("GP", "Guadeloupe", "Nordamerika", "direct", {
    calculationBasis: "registration",
    protectionPeriod: 10, // Schutzdauer: 10 Jahre (wie in Frankreich)

    renewalStartMonths: 6, // Verlängerungsantrag kann 6 Monate vor Ablauf gestellt werden
    renewalDeadlineMonths: 0, // Die Verlängerung muss bis zum Ablauf erfolgen
    lateRenewalMonths: 6, // Nachfrist von 6 Monaten für verspätete Verlängerung

    usageProofRequired: false, // Kein spezifischer Nutzungsnachweis erforderlich
    usageProofYears: 5, // Nach 5 Jahren Nichtbenutzung kann die Marke angefochten werden

    usageDeclarationRequired: false, // Keine Benutzungserklärung erforderlich
    usageDeclarationYears: [],

    vertreterRequired: "Ja", // Lokaler Vertreter für ausländische Anmelder erforderlich
    prufungsumfang: "Formell", // Hauptsächlich formelle Prüfung (wie in Frankreich)
    widerspruch: "Ja", // Widerspruch möglich

    poaVertreterRequired: "Ja", // Vertretervollmacht erforderlich
    poaDigitalCopy: "Ja", // Digitale Kopie kann ausreichend sein
    poaOriginalRequired: "Nein", // Original der Vollmacht nicht zwingend erforderlich
    poaDigitalSignature: "Ja", // Digitale Signatur kann akzeptiert werden
    poaNotarization: "Nein", // Keine notarielle Beglaubigung erforderlich
    poaApostille: "Nein", // Keine Apostille erforderlich
    poaHinweise: "Einfache Vollmacht ist in der Regel ausreichend.",

    mitgliedschaften: ["WIPO", "Pariser Übereinkunft (über Frankreich)", "TRIPS"],

    priorityDeadlineMonths: 6, // Prioritätsfrist von 6 Monaten
    priorityDocumentDeadlineMonths: 3,

    additionalNotes:
      "Guadeloupe ist ein französisches Überseedepartement und wird von der französischen Markenregistrierung abgedeckt. Markenregistrierungen sind für 10 Jahre gültig und können für weitere 10-Jahres-Perioden verlängert werden. Eine Marke kann auf Antrag gelöscht werden, wenn sie für einen ununterbrochenen Zeitraum von 5 Jahren nicht ernsthaft genutzt wurde.",
  }),
  createCategorizedCountry("MS", "Montserrat", "Nordamerika", "direct", {
    calculationBasis: "registration",
    protectionPeriod: 10, // Schutzdauer: 10 Jahre ab Registrierungsdatum

    renewalStartMonths: 6, // Verlängerungsantrag kann 6 Monate vor Ablauf gestellt werden
    renewalDeadlineMonths: 0, // Die Verlängerung muss bis zum Ablauf erfolgen
    lateRenewalMonths: 6, // Nachfrist von 6 Monaten für verspätete Verlängerung

    usageProofRequired: false, // Kein spezifischer Nutzungsnachweis erforderlich
    usageProofYears: 0,

    usageDeclarationRequired: false, // Keine Benutzungserklärung erforderlich
    usageDeclarationYears: [],

    vertreterRequired: "Ja", // Lokaler Vertreter erforderlich
    prufungsumfang: "Umfassend", // Formelle und materielle Prüfung
    widerspruch: "Ja", // Widerspruch möglich

    poaVertreterRequired: "Ja", // Vertretervollmacht erforderlich
    poaDigitalCopy: "Nein", // Digitale Kopie nicht ausreichend
    poaOriginalRequired: "Ja", // Original der Vollmacht erforderlich
    poaDigitalSignature: "Nein", // Digitale Signatur nicht akzeptiert
    poaNotarization: "Ja", // Notarielle Beglaubigung erforderlich
    poaApostille: "Ja", // Apostille erforderlich
    poaHinweise: "Notariell beglaubigte und legalisierte Vollmacht erforderlich.",

    mitgliedschaften: ["WIPO", "Pariser Übereinkunft (über UK)"],

    priorityDeadlineMonths: 6, // Prioritätsfrist von 6 Monaten
    priorityDocumentDeadlineMonths: 3,

    additionalNotes:
      "Montserrat ist ein britisches Überseegebiet mit eigenem Markenregistrierungssystem. Anmeldungen können entweder direkt erfolgen oder auf einer bestehenden UK-Registrierung basieren. Markenregistrierungen sind für 10 Jahre gültig und können für weitere 10-Jahres-Perioden verlängert werden.",
  }),
  createCategorizedCountry("PR", "Puerto Rico", "Nordamerika", "direct", {
    calculationBasis: "registration",
    protectionPeriod: 10, // Schutzdauer: 10 Jahre (wie in den USA)

    renewalStartMonths: 12, // Verlängerungsantrag kann 12 Monate vor Ablauf gestellt werden
    renewalDeadlineMonths: 0, // Die Verlängerung muss bis zum Ablauf erfolgen
    lateRenewalMonths: 6, // Nachfrist von 6 Monaten für verspätete Verlängerung

    usageProofRequired: true, // Nutzungsnachweis erforderlich (wie in den USA)
    usageProofYears: 5, // Nach US-Recht im 5. Jahr

    usageDeclarationRequired: true, // Benutzungserklärung erforderlich (wie in den USA)
    usageDeclarationYears: [5, 10, 20, 30, 40, 50], // Wie in den USA

    vertreterRequired: "Ja", // US-Anwalt für ausländische Anmelder erforderlich
    prufungsumfang: "Umfassend", // Formelle und materielle Prüfung (wie in den USA)
    widerspruch: "Ja", // Widerspruch möglich

    poaVertreterRequired: "Ja", // Vertretervollmacht erforderlich
    poaDigitalCopy: "Ja", // Digitale Kopie ausreichend
    poaOriginalRequired: "Nein", // Original der Vollmacht nicht erforderlich
    poaDigitalSignature: "Ja", // Digitale Signatur akzeptiert
    poaNotarization: "Nein", // Keine notarielle Beglaubigung erforderlich
    poaApostille: "Nein", // Keine Apostille erforderlich
    poaHinweise: "US-Anwalt für ausländische Anmelder seit 2019 verpflichtend.",

    mitgliedschaften: ["WIPO", "Pariser Übereinkunft (über USA)", "TRIPS", "Madrid-Protokoll (über USA)"],

    priorityDeadlineMonths: 6, // Prioritätsfrist von 6 Monaten
    priorityDocumentDeadlineMonths: 3,

    additionalNotes:
      "Puerto Rico ist ein nicht inkorporiertes Territorium der Vereinigten Staaten. US-Markenregistrierungen gelten automatisch in Puerto Rico. Es gibt kein separates Markenregister. Markeninhaber müssen US-amerikanisches Bundesrecht und puertoricanisches Recht beachten.",
  }),
  createCategorizedCountry("VG", "Britische Jungferninseln", "Nordamerika", "direct", {
    calculationBasis: "registration",
    protectionPeriod: 10, // Schutzdauer: 10 Jahre ab Registrierungsdatum

    renewalStartMonths: 6, // Verlängerungsantrag kann 6 Monate vor Ablauf gestellt werden
    renewalDeadlineMonths: 0, // Die Verlängerung muss bis zum Ablauf erfolgen
    lateRenewalMonths: 6, // Nachfrist von 6 Monaten für verspätete Verlängerung

    usageProofRequired: false, // Kein spezifischer Nutzungsnachweis erforderlich
    usageProofYears: 0,

    usageDeclarationRequired: false, // Keine Benutzungserklärung erforderlich
    usageDeclarationYears: [],

    vertreterRequired: "Ja", // Lokaler Vertreter erforderlich
    prufungsumfang: "Umfassend", // Formelle und materielle Prüfung
    widerspruch: "Ja", // Widerspruch möglich

    poaVertreterRequired: "Ja", // Vertretervollmacht erforderlich
    poaDigitalCopy: "Nein", // Digitale Kopie nicht ausreichend
    poaOriginalRequired: "Ja", // Original der Vollmacht erforderlich
    poaDigitalSignature: "Nein", // Digitale Signatur nicht akzeptiert
    poaNotarization: "Nein", // Keine notarielle Beglaubigung erforderlich
    poaApostille: "Nein", // Keine Apostille erforderlich
    poaHinweise: "Einfach unterschriebene Vollmacht ist ausreichend.",

    mitgliedschaften: ["WIPO", "Pariser Übereinkunft (über UK)"],

    priorityDeadlineMonths: 6, // Prioritätsfrist von 6 Monaten
    priorityDocumentDeadlineMonths: 3,

    additionalNotes:
      "Markenregistrierungen auf den Britischen Jungferninseln sind für 10 Jahre gültig und können für weitere 10-Jahres-Perioden verlängert werden. Die Anmeldung kann entweder direkt erfolgen oder auf einer bestehenden UK-Registrierung basieren. Die Anmeldung wird beim Registrar of Trade Marks eingereicht.",
  }),
  createCategorizedCountry("VI", "Amerikanische Jungferninseln", "Nordamerika", "direct", {
    calculationBasis: "registration",
    protectionPeriod: 10, // Schutzdauer: 10 Jahre (wie in den USA)

    renewalStartMonths: 12, // Verlängerungsantrag kann 12 Monate vor Ablauf gestellt werden
    renewalDeadlineMonths: 0, // Die Verlängerung muss bis zum Ablauf erfolgen
    lateRenewalMonths: 6, // Nachfrist von 6 Monaten für verspätete Verlängerung

    usageProofRequired: true, // Nutzungsnachweis erforderlich (wie in den USA)
    usageProofYears: 5, // Nach US-Recht im 5. Jahr

    usageDeclarationRequired: true, // Benutzungserklärung erforderlich (wie in den USA)
    usageDeclarationYears: [5, 10, 20, 30, 40, 50], // Wie in den USA

    vertreterRequired: "Ja", // US-Anwalt für ausländische Anmelder erforderlich
    prufungsumfang: "Umfassend", // Formelle und materielle Prüfung (wie in den USA)
    widerspruch: "Ja", // Widerspruch möglich

    poaVertreterRequired: "Ja", // Vertretervollmacht erforderlich
    poaDigitalCopy: "Ja", // Digitale Kopie ausreichend
    poaOriginalRequired: "Nein", // Original der Vollmacht nicht erforderlich
    poaDigitalSignature: "Ja", // Digitale Signatur akzeptiert
    poaNotarization: "Nein", // Keine notarielle Beglaubigung erforderlich
    poaApostille: "Nein", // Keine Apostille erforderlich
    poaHinweise: "US-Anwalt für ausländische Anmelder seit 2019 verpflichtend.",

    mitgliedschaften: ["WIPO", "Pariser Übereinkunft (über USA)", "TRIPS", "Madrid-Protokoll (über USA)"],

    priorityDeadlineMonths: 6, // Prioritätsfrist von 6 Monaten
    priorityDocumentDeadlineMonths: 3,

    additionalNotes:
      "Die Amerikanischen Jungferninseln sind ein nicht inkorporiertes Territorium der Vereinigten Staaten. US-Markenregistrierungen gelten automatisch in den Amerikanischen Jungferninseln. Es gibt kein separates Markenregister. Markeninhaber müssen US-amerikanisches Bundesrecht beachten.",
  }),
  createCategorizedCountry("MQ", "Martinique", "Nordamerika", "direct", {
    calculationBasis: "registration",
    protectionPeriod: 10, // Schutzdauer: 10 Jahre (wie in Frankreich)

    renewalStartMonths: 6, // Verlängerungsantrag kann 6 Monate vor Ablauf gestellt werden
    renewalDeadlineMonths: 0, // Die Verlängerung muss bis zum Ablauf erfolgen
    lateRenewalMonths: 6, // Nachfrist von 6 Monaten für verspätete Verlängerung

    usageProofRequired: false, // Kein spezifischer Nutzungsnachweis erforderlich
    usageProofYears: 5, // Nach 5 Jahren Nichtbenutzung kann die Marke angefochten werden

    usageDeclarationRequired: false, // Keine Benutzungserklärung erforderlich
    usageDeclarationYears: [],

    vertreterRequired: "Ja", // Lokaler Vertreter für ausländische Anmelder erforderlich
    prufungsumfang: "Formell", // Hauptsächlich formelle Prüfung (wie in Frankreich)
    widerspruch: "Ja", // Widerspruch möglich

    poaVertreterRequired: "Ja", // Vertretervollmacht erforderlich
    poaDigitalCopy: "Ja", // Digitale Kopie kann ausreichend sein
    poaOriginalRequired: "Nein", // Original der Vollmacht nicht zwingend erforderlich
    poaDigitalSignature: "Ja", // Digitale Signatur kann akzeptiert werden
    poaNotarization: "Nein", // Keine notarielle Beglaubigung erforderlich
    poaApostille: "Nein", // Keine Apostille erforderlich
    poaHinweise: "Einfache Vollmacht ist in der Regel ausreichend.",

    mitgliedschaften: ["WIPO", "Pariser Übereinkunft (über Frankreich)", "TRIPS"],

    priorityDeadlineMonths: 6, // Prioritätsfrist von 6 Monaten
    priorityDocumentDeadlineMonths: 3,

    additionalNotes:
      "Martinique ist ein französisches Überseedepartement und wird von der französischen Markenregistrierung abgedeckt. Markenregistrierungen sind für 10 Jahre gültig und können für weitere 10-Jahres-Perioden verlängert werden. Eine Marke kann auf Antrag gelöscht werden, wenn sie für einen ununterbrochenen Zeitraum von 5 Jahren nicht ernsthaft genutzt wurde.",
  }),
  createCategorizedCountry("PA", "Panama", "Nordamerika", "direct", {
    calculationBasis: "registration",
    protectionPeriod: 10, // Schutzdauer: 10 Jahre ab Registrierungsdatum

    renewalStartMonths: 12, // Verlängerungsantrag kann 12 Monate vor Ablauf gestellt werden
    renewalDeadlineMonths: 0, // Die Verlängerung muss bis zum Ablauf erfolgen
    lateRenewalMonths: 6, // Nachfrist von 6 Monaten für verspätete Verlängerung

    usageProofRequired: true, // Nutzungsnachweis erforderlich
    usageProofYears: 5, // Nach 5 Jahren Nichtbenutzung kann die Marke angefochten werden

    usageDeclarationRequired: false, // Keine regelmäßige Benutzungserklärung erforderlich
    usageDeclarationYears: [],

    vertreterRequired: "Ja", // Lokaler Vertreter erforderlich
    prufungsumfang: "Umfassend", // Formelle und materielle Prüfung
    widerspruch: "Ja", // Widerspruch möglich

    poaVertreterRequired: "Ja", // Vertretervollmacht erforderlich
    poaDigitalCopy: "Nein", // Digitale Kopie nicht ausreichend
    poaOriginalRequired: "Ja", // Original der Vollmacht erforderlich
    poaDigitalSignature: "Nein", // Digitale Signatur nicht akzeptiert
    poaNotarization: "Ja", // Notarielle Beglaubigung erforderlich
    poaApostille: "Ja", // Apostille erforderlich
    poaHinweise: "Notariell beglaubigte und legalisierte Vollmacht erforderlich.",

    mitgliedschaften: ["WIPO", "Pariser Übereinkunft", "TRIPS"],

    priorityDeadlineMonths: 6, // Prioritätsfrist von 6 Monaten
    priorityDocumentDeadlineMonths: 3,

    additionalNotes:
      "Markenregistrierungen in Panama sind für 10 Jahre gültig und können für weitere 10-Jahres-Perioden verlängert werden. Die Marke kann nach 5 Jahren Nichtbenutzung angefochten werden. Panama folgt dem 'First-to-File'-Prinzip, daher ist eine frühzeitige Anmeldung wichtig.",
  }),
]
