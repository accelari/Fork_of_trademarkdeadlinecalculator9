import { createExtendedCountry } from "./country-utils"

export const oceaniaCountries = [
  createExtendedCountry("AU", "Australien", "Ozeanien", "direct", {
    calculationBasis: "application",
    protectionPeriod: 10, // Schutzdauer: 10 Jahre ab Anmeldetag der Marke

    renewalStartMonths: 12, // Der Verlängerungsantrag kann bis zu 12 Monate vor Ablauf gestellt werden
    renewalDeadlineMonths: 0, // Zahlung der Verlängerungsgebühr ist bis zum Ablaufdatum ohne Zuschlag möglich
    lateRenewalMonths: 6, // Nachfrist von 6 Monaten nach Schutzende, innerhalb der gegen Zuschlag verlängert werden kann

    usageProofRequired: false, // Es besteht keine Pflicht zur regelmäßigen Einreichung von Nutzungsbelegen
    usageProofYears: 3, // Ist eine Marke ab Registrierung 3 Jahre lang ununterbrochen nicht benutzt, kann jeder Dritte einen Verfallsantrag stellen

    usageDeclarationRequired: false, // Keine regelmäßige Benutzungserklärung nötig
    usageDeclarationYears: [], // Keine spezifischen Jahre für Erklärungen

    vertreterRequired: "Nein", // Kein gesetzlicher Zwang zur Vertretung durch einen lokalen Anwalt
    prufungsumfang: "Umfassend", // Vollprüfung auf absolute und relative Schutzhindernisse
    widerspruch: "Ja", // Binnen 2 Monaten nach Veröffentlichung des Prüfungsbeschlusses kann ein Dritter Widerspruch einlegen

    poaVertreterRequired: "Nein", // Keine formelle Vollmacht erforderlich
    poaDigitalCopy: "Ja", // Wird akzeptiert, falls benötigt
    poaOriginalRequired: "Nein", // Original nicht erforderlich
    poaDigitalSignature: "Ja", // Digitale Signatur wird akzeptiert
    poaNotarization: "Nein", // Keine notarielle Beglaubigung erforderlich
    poaApostille: "Nein", // Keine Apostille erforderlich
    poaHinweise:
      "Eine schriftliche Vollmacht ist für die Beauftragung eines australischen Vertreters nicht einzureichen (die Bestellung erfolgt formlos)",

    mitgliedschaften: [
      "WIPO (seit 1972)",
      "Pariser Verbandsübereinkunft (seit 1925)",
      "WTO-Mitglied seit 1995",
      "Nizza-Klassifikation (seit 2007)",
      "Madrid-Protokoll (seit 2001)",
    ],

    priorityDeadlineMonths: 6, // 6 Monate gemäß PVÜ
    priorityDocumentDeadlineMonths: 0, // Eine Kopie der Voranmeldung wird vom australischen Amt im Regelfall nicht verlangt

    usageProofType: "Eidesstattliche Erklärung mit Nachweisen über ernsthafte Benutzung (bei Antrag)",
    usageDeclarationType: "Keine regelmäßige Benutzungserklärung erforderlich",
    usageProofDeadlineYears: 3,
    usageDeclarationDeadlineYears: null,
    lateFilingMonths: 0, // Keine spezifische Nachfrist
    filingPeriodStart: "Nach Antrag eines Dritten (3 Monate Frist)",

    additionalNotes:
      "Allerdings muss für die Korrespondenz eine australische Zustelladresse angegeben werden. In der Praxis erfolgt dies meist über einen in Australien registrierten Markenanwalt oder -agenten. Kollisionshindernisse können durch Vorlage von Consent Letters überwunden werden – das australische Amt akzeptiert Abgrenzungsvereinbarungen in vielen Fällen. Australien gestattet Mehrklassenanmeldungen.",
  }),
  // Neuseeland
  createExtendedCountry("NZ", "Neuseeland", "Ozeanien", "direct", {
    calculationBasis: "registration",
    protectionPeriod: 10, // Schutzdauer: 10 Jahre ab Registrierungsdatum

    renewalStartMonths: 12, // Verlängerungsantrag kann 12 Monate vor Ablauf gestellt werden
    renewalDeadlineMonths: 0, // Die Verlängerung muss bis zum Ablauf erfolgen
    lateRenewalMonths: 6, // Nachfrist von 6 Monaten für verspätete Verlängerung

    usageProofRequired: false, // Kein spezifischer Nutzungsnachweis für Erneuerung erforderlich
    usageProofYears: 3, // Nach 3 Jahren Nichtbenutzung kann die Marke angefochten werden

    usageDeclarationRequired: false, // Keine regelmäßige Benutzungserklärung erforderlich
    usageDeclarationYears: [],

    vertreterRequired: "Nein", // Kein lokaler Vertreter zwingend erforderlich
    prufungsumfang: "Umfassend", // Formelle und materielle Prüfung
    widerspruch: "Ja", // Widerspruch möglich

    poaVertreterRequired: "Nein", // Keine Vertretervollmacht erforderlich
    poaDigitalCopy: "Ja", // Digitale Kopie kann ausreichend sein
    poaOriginalRequired: "Nein", // Original der Vollmacht nicht zwingend erforderlich
    poaDigitalSignature: "Ja", // Digitale Signatur kann akzeptiert werden
    poaNotarization: "Nein", // Keine notarielle Beglaubigung erforderlich
    poaApostille: "Nein", // Keine Apostille erforderlich
    poaHinweise:
      "In der Regel keine Vollmacht erforderlich. Falls benötigt, ist eine einfach unterschriebene Vollmacht ausreichend.",

    mitgliedschaften: ["WIPO", "Pariser Übereinkunft", "TRIPS", "Madrid-Protokoll"],

    priorityDeadlineMonths: 6, // Prioritätsfrist von 6 Monaten
    priorityDocumentDeadlineMonths: 3,

    additionalNotes:
      "Markenregistrierungen in Neuseeland sind für 10 Jahre gültig und können für weitere 10-Jahres-Perioden verlängert werden. Die Registrierung erfolgt beim Intellectual Property Office of New Zealand (IPONZ). Neuseeland ist seit 2012 Mitglied des Madrid-Protokolls. Eine Marke kann nach 3 Jahren Nichtbenutzung angefochten werden. Neuseeland hat ein modernes und effizientes Markensystem mit Online-Einreichungsmöglichkeiten.",
  }),

  // Cookinseln
  createExtendedCountry("CK", "Cookinseln", "Ozeanien", "direct", {
    calculationBasis: "none",
    protectionPeriod: 0, // Kein formales Markeneintragungsverfahren vorhanden

    renewalStartMonths: 0, // Entfällt - mangels Registereintragung kein formales Verlängerungsverfahren
    renewalDeadlineMonths: 0, // Entfällt
    lateRenewalMonths: 0, // Nicht anwendbar

    usageProofRequired: false, // Der Schutz resultiert ausschließlich aus tatsächlicher Benutzung

    usageDeclarationRequired: false, // Keine Benutzungserklärung erforderlich
    usageDeclarationYears: [], // Keine festen Zeitpunkte

    vertreterRequired: "Nein", // Ein formeller Vertreter ist für eine Bekanntmachung nicht vorgeschrieben
    prufungsumfang: "Keine", // Es gibt keine Markenbehörde
    widerspruch: "Nein", // Kein Widerspruchsverfahren

    poaVertreterRequired: "Nein", // Nicht erforderlich
    poaDigitalCopy: "Nein", // Nicht anwendbar
    poaOriginalRequired: "Nein", // Nicht anwendbar
    poaDigitalSignature: "Nein", // Nicht anwendbar
    poaNotarization: "Nein", // Nicht anwendbar
    poaApostille: "Nein", // Nicht anwendbar
    poaHinweise: "Keine formelle Vollmachtanforderung, da kein amtlicher Eintragungsprozess stattfindet",

    mitgliedschaften: ["WIPO"], // Die Cook-Inseln sind seit 2016 Mitglied der WIPO, aber kein Vertragsstaat der Pariser Verbandsübereinkunft und nicht Mitglied der WTO

    priorityDeadlineMonths: 0, // Mangels Paris-Konventions-Beitritt kein prioritätsbasiertes Anmeldesystem
    priorityDocumentDeadlineMonths: 0, // Nicht anwendbar

    additionalNotes:
      "In den Cook-Inseln existiert derzeit noch kein nationales Markenregister. Markenschutz beruht auf Gewohnheitsrecht (Common Law) und entsteht durch tatsächliche Benutzung der Marke im Geschäftsverkehr. Unternehmen veröffentlichen häufig 'cautionary notices' in lokalen Zeitungen, um auf ihre Markenrechte hinzuweisen. Diese Bekanntmachungen dienen als Warnung und können unbefristet wirksam sein, solange die Marke benutzt wird. Markeninhabern wird empfohlen, ihre Marken durch lokale Nutzung und regelmäßige Bekanntmachungen zu schützen. Die Einführung eines eigenen Markenregisters ist angestrebt, wurde aber noch nicht umgesetzt.",
  }),

  // Fidschi
  createExtendedCountry("FJ", "Fidschi", "Ozeanien", "direct", {
    calculationBasis: "registration",
    protectionPeriod: 10, // Schutzdauer: 10 Jahre ab Registrierungsdatum

    renewalStartMonths: 6, // Verlängerungsantrag kann 6 Monate vor Ablauf gestellt werden
    renewalDeadlineMonths: 0, // Die Verlängerung muss bis zum Ablauf erfolgen
    lateRenewalMonths: 6, // Nachfrist von 6 Monaten für verspätete Verlängerung

    usageProofRequired: false, // Kein spezifischer Nutzungsnachweis für Erneuerung erforderlich
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
    poaNotarization: "Nein", // Keine notarielle Beglaubigung erforderlich
    poaApostille: "Nein", // Keine Apostille erforderlich
    poaHinweise: "Einfach unterschriebene Vollmacht ist ausreichend.",

    mitgliedschaften: ["WIPO", "Pariser Übereinkunft", "TRIPS"],

    priorityDeadlineMonths: 6, // Prioritätsfrist von 6 Monaten
    priorityDocumentDeadlineMonths: 3,

    additionalNotes:
      "Markenregistrierungen in Fidschi sind für 10 Jahre gültig und können für weitere 10-Jahres-Perioden verlängert werden. Die Registrierung erfolgt beim Fiji Intellectual Property Office (FIPO). Eine Marke kann nach 5 Jahren Nichtbenutzung angefochten werden. Fidschi folgt weitgehend dem britischen Markensystem.",
  }),

  // Französisch-Polynesien
  createExtendedCountry("PF", "Französisch-Polynesien", "Ozeanien", "direct", {
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
      "Französisch-Polynesien ist ein französisches Überseegebiet und wird von der französischen Markenregistrierung abgedeckt. Markenregistrierungen sind für 10 Jahre gültig und können für weitere 10-Jahres-Perioden verlängert werden. Eine Marke kann nach 5 Jahren Nichtbenutzung angefochten werden.",
  }),

  // Guam
  createExtendedCountry("GU", "Guam", "Ozeanien", "direct", {
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
      "Guam ist ein nicht inkorporiertes Territorium der Vereinigten Staaten. US-Markenregistrierungen gelten automatisch in Guam. Es gibt kein separates Markenregister. Markeninhaber müssen US-amerikanisches Bundesrecht beachten.",
  }),

  // Kiribati
  createExtendedCountry("KI", "Kiribati", "Ozeanien", "direct", {
    calculationBasis: "registration",
    protectionPeriod: 7, // Schutzdauer: 7 Jahre initial ab Registrierungsdatum (basierend auf britischem Common Law)

    renewalStartMonths: 6, // Verlängerungsantrag kann 6 Monate vor Ablauf gestellt werden
    renewalDeadlineMonths: 0, // Die Verlängerung muss bis zum Ablauf erfolgen
    lateRenewalMonths: 6, // Nachfrist von 6 Monaten für verspätete Verlängerung

    usageProofRequired: false, // Kein spezifischer Nutzungsnachweis für Erneuerung erforderlich
    usageProofYears: 5, // Nach 5 Jahren Nichtbenutzung kann die Marke angefochten werden

    usageDeclarationRequired: false, // Keine regelmäßige Benutzungserklärung erforderlich
    usageDeclarationYears: [],

    vertreterRequired: "Ja", // Lokaler Vertreter erforderlich
    prufungsumfang: "Begrenzt", // Begrenzte formelle und materielle Prüfung
    widerspruch: "Ja", // Widerspruch möglich

    poaVertreterRequired: "Ja", // Vertretervollmacht erforderlich
    poaDigitalCopy: "Nein", // Digitale Kopie nicht ausreichend
    poaOriginalRequired: "Ja", // Original der Vollmacht erforderlich
    poaDigitalSignature: "Nein", // Digitale Signatur nicht akzeptiert
    poaNotarization: "Ja", // Notarielle Beglaubigung erforderlich
    poaApostille: "Ja", // Apostille erforderlich
    poaHinweise: "Notariell beglaubigte und legalisierte Vollmacht erforderlich.",

    mitgliedschaften: ["WIPO"],

    priorityDeadlineMonths: 6, // Prioritätsfrist von 6 Monaten
    priorityDocumentDeadlineMonths: 3,

    additionalNotes:
      "Kiribati hat ein auf Common Law basierendes Markenschutzsystem, das stark vom britischen System beeinflusst ist. Markenregistrierungen sind initial für 7 Jahre gültig und können für weitere 14-Jahres-Perioden verlängert werden. Die Registrierung erfolgt beim Registry of Companies. Aufgrund der begrenzten lokalen Infrastruktur kann die Bearbeitung langwierig sein.",
  }),

  // Marshallinseln
  createExtendedCountry("MH", "Marshallinseln", "Ozeanien", "direct", {
    calculationBasis: "registration",
    protectionPeriod: 10, // Schutzdauer: 10 Jahre ab Registrierungsdatum

    renewalStartMonths: 6, // Verlängerungsantrag kann 6 Monate vor Ablauf gestellt werden
    renewalDeadlineMonths: 0, // Die Verlängerung muss bis zum Ablauf erfolgen
    lateRenewalMonths: 6, // Nachfrist von 6 Monaten für verspätete Verlängerung

    usageProofRequired: false, // Kein spezifischer Nutzungsnachweis für Erneuerung erforderlich
    usageProofYears: 5, // Nach 5 Jahren Nichtbenutzung kann die Marke angefochten werden

    usageDeclarationRequired: false, // Keine regelmäßige Benutzungserklärung erforderlich
    usageDeclarationYears: [],

    vertreterRequired: "Ja", // Lokaler Vertreter erforderlich
    prufungsumfang: "Begrenzt", // Begrenzte formelle und materielle Prüfung
    widerspruch: "Ja", // Widerspruch möglich

    poaVertreterRequired: "Ja", // Vertretervollmacht erforderlich
    poaDigitalCopy: "Nein", // Digitale Kopie nicht ausreichend
    poaOriginalRequired: "Ja", // Original der Vollmacht erforderlich
    poaDigitalSignature: "Nein", // Digitale Signatur nicht akzeptiert
    poaNotarization: "Ja", // Notarielle Beglaubigung erforderlich
    poaApostille: "Ja", // Apostille erforderlich
    poaHinweise: "Notariell beglaubigte und legalisierte Vollmacht erforderlich.",

    mitgliedschaften: ["WIPO"],

    priorityDeadlineMonths: 6, // Prioritätsfrist von 6 Monaten
    priorityDocumentDeadlineMonths: 3,

    additionalNotes:
      "Die Marshallinseln haben ein Markengesetz (Trademark Act von 2018), das Schutz für 10 Jahre mit Verlängerungsmöglichkeit für weitere 10-Jahres-Perioden vorsieht. Die Registrierung erfolgt beim Business Registry Office. Das Markenschutzsystem ist stark vom US-amerikanischen System beeinflusst. Eine Marke kann nach 5 Jahren Nichtbenutzung angefochten werden.",
  }),

  // Mikronesien
  createExtendedCountry("FM", "Mikronesien", "Ozeanien", "direct", {
    calculationBasis: "registration",
    protectionPeriod: 10, // Schutzdauer: 10 Jahre ab Registrierungsdatum

    renewalStartMonths: 6, // Verlängerungsantrag kann 6 Monate vor Ablauf gestellt werden
    renewalDeadlineMonths: 0, // Die Verlängerung muss bis zum Ablauf erfolgen
    lateRenewalMonths: 6, // Nachfrist von 6 Monaten für verspätete Verlängerung

    usageProofRequired: false, // Kein spezifischer Nutzungsnachweis für Erneuerung erforderlich
    usageProofYears: 5, // Nach 5 Jahren Nichtbenutzung kann die Marke angefochten werden

    usageDeclarationRequired: false, // Keine regelmäßige Benutzungserklärung erforderlich
    usageDeclarationYears: [],

    vertreterRequired: "Ja", // Lokaler Vertreter erforderlich
    prufungsumfang: "Begrenzt", // Begrenzte formelle und materielle Prüfung
    widerspruch: "Ja", // Widerspruch möglich

    poaVertreterRequired: "Ja", // Vertretervollmacht erforderlich
    poaDigitalCopy: "Nein", // Digitale Kopie nicht ausreichend
    poaOriginalRequired: "Ja", // Original der Vollmacht erforderlich
    poaDigitalSignature: "Nein", // Digitale Signatur nicht akzeptiert
    poaNotarization: "Ja", // Notarielle Beglaubigung erforderlich
    poaApostille: "Ja", // Apostille erforderlich
    poaHinweise: "Notariell beglaubigte und legalisierte Vollmacht erforderlich.",

    mitgliedschaften: ["WIPO"],

    priorityDeadlineMonths: 6, // Prioritätsfrist von 6 Monaten
    priorityDocumentDeadlineMonths: 3,

    additionalNotes:
      "Mikronesien hat ein auf dem US-System basierendes Markenrecht. Markenregistrierungen sind für 10 Jahre gültig und können für weitere 10-Jahres-Perioden verlängert werden. Die Registrierung erfolgt beim Department of Resources and Development. Eine Marke kann nach 5 Jahren Nichtbenutzung angefochten werden.",
  }),

  // Nauru
  createExtendedCountry("NR", "Nauru", "Ozeanien", "direct", {
    calculationBasis: "registration",
    protectionPeriod: 7, // Schutzdauer: 7 Jahre initial ab Registrierungsdatum (basierend auf britischem Common Law)

    renewalStartMonths: 6, // Verlängerungsantrag kann 6 Monate vor Ablauf gestellt werden
    renewalDeadlineMonths: 0, // Die Verlängerung muss bis zum Ablauf erfolgen
    lateRenewalMonths: 6, // Nachfrist von 6 Monaten für verspätete Verlängerung

    usageProofRequired: false, // Kein spezifischer Nutzungsnachweis für Erneuerung erforderlich
    usageProofYears: 5, // Nach 5 Jahren Nichtbenutzung kann die Marke angefochten werden

    usageDeclarationRequired: false, // Keine regelmäßige Benutzungserklärung erforderlich
    usageDeclarationYears: [],

    vertreterRequired: "Ja", // Lokaler Vertreter erforderlich
    prufungsumfang: "Begrenzt", // Begrenzte formelle und materielle Prüfung
    widerspruch: "Ja", // Widerspruch möglich

    poaVertreterRequired: "Ja", // Vertretervollmacht erforderlich
    poaDigitalCopy: "Nein", // Digitale Kopie nicht ausreichend
    poaOriginalRequired: "Ja", // Original der Vollmacht erforderlich
    poaDigitalSignature: "Nein", // Digitale Signatur nicht akzeptiert
    poaNotarization: "Ja", // Notarielle Beglaubigung erforderlich
    poaApostille: "Ja", // Apostille erforderlich
    poaHinweise: "Notariell beglaubigte und legalisierte Vollmacht erforderlich.",

    mitgliedschaften: ["WIPO"],

    priorityDeadlineMonths: 6, // Prioritätsfrist von 6 Monaten
    priorityDocumentDeadlineMonths: 3,

    additionalNotes:
      "Nauru hat ein auf dem britischen Common Law basierendes Markenschutzsystem. Markenregistrierungen sind initial für 7 Jahre gültig und können für weitere 14-Jahres-Perioden verlängert werden. Die Registrierung erfolgt beim Department of Justice and Border Control. Aufgrund der begrenzten lokalen Infrastruktur kann die Bearbeitung langwierig sein.",
  }),

  // Neukaledonien
  createExtendedCountry("NC", "Neukaledonien", "Ozeanien", "direct", {
    calculationBasis: "registration",
    protectionPeriod: 10, // Schutzdauer: 10 Jahre (wie in Frank  {
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
      "Neukaledonien ist ein französisches Überseegebiet mit besonderem Status und wird von der französischen Markenregistrierung abgedeckt. Markenregistrierungen sind für 10 Jahre gültig und können für weitere 10-Jahres-Perioden verlängert werden. Eine Marke kann nach 5 Jahren Nichtbenutzung angefochten werden.",
  }),

  // Niue
  createExtendedCountry("NU", "Niue", "Ozeanien", "direct", {
    calculationBasis: "registration",
    protectionPeriod: 7, // Schutzdauer: 7 Jahre initial ab Registrierungsdatum (basierend auf neuseeländischem/britischem Common Law)

    renewalStartMonths: 6, // Verlängerungsantrag kann 6 Monate vor Ablauf gestellt werden
    renewalDeadlineMonths: 0, // Die Verlängerung muss bis zum Ablauf erfolgen
    lateRenewalMonths: 6, // Nachfrist von 6 Monaten für verspätete Verlängerung

    usageProofRequired: false, // Kein spezifischer Nutzungsnachweis für Erneuerung erforderlich
    usageProofYears: 5, // Nach 5 Jahren Nichtbenutzung kann die Marke angefochten werden

    usageDeclarationRequired: false, // Keine regelmäßige Benutzungserklärung erforderlich
    usageDeclarationYears: [],

    vertreterRequired: "Ja", // Lokaler Vertreter erforderlich
    prufungsumfang: "Begrenzt", // Begrenzte formelle und materielle Prüfung
    widerspruch: "Ja", // Widerspruch möglich

    poaVertreterRequired: "Ja", // Vertretervollmacht erforderlich
    poaDigitalCopy: "Nein", // Digitale Kopie nicht ausreichend
    poaOriginalRequired: "Ja", // Original der Vollmacht erforderlich
    poaDigitalSignature: "Nein", // Digitale Signatur nicht akzeptiert
    poaNotarization: "Ja", // Notarielle Beglaubigung erforderlich
    poaApostille: "Ja", // Apostille erforderlich
    poaHinweise: "Notariell beglaubigte und legalisierte Vollmacht erforderlich.",

    mitgliedschaften: ["WIPO"],

    priorityDeadlineMonths: 6, // Prioritätsfrist von 6 Monaten
    priorityDocumentDeadlineMonths: 3,

    additionalNotes:
      "Niue hat ein auf dem neuseeländischen/britischen Common Law basierendes Markenschutzsystem. Markenregistrierungen sind initial für 7 Jahre gültig und können für weitere 14-Jahres-Perioden verlängert werden. Die Registrierung erfolgt beim Office of the Registrar of Companies. Aufgrund der begrenzten lokalen Infrastruktur kann die Bearbeitung langwierig sein.",
  }),

  // Palau
  createExtendedCountry("PW", "Palau", "Ozeanien", "direct", {
    calculationBasis: "registration",
    protectionPeriod: 10, // Schutzdauer: 10 Jahre ab Registrierungsdatum

    renewalStartMonths: 6, // Verlängerungsantrag kann 6 Monate vor Ablauf gestellt werden
    renewalDeadlineMonths: 0, // Die Verlängerung muss bis zum Ablauf erfolgen
    lateRenewalMonths: 6, // Nachfrist von 6 Monaten für verspätete Verlängerung

    usageProofRequired: false, // Kein spezifischer Nutzungsnachweis für Erneuerung erforderlich
    usageProofYears: 5, // Nach 5 Jahren Nichtbenutzung kann die Marke angefochten werden

    usageDeclarationRequired: false, // Keine regelmäßige Benutzungserklärung erforderlich
    usageDeclarationYears: [],

    vertreterRequired: "Ja", // Lokaler Vertreter erforderlich
    prufungsumfang: "Begrenzt", // Begrenzte formelle und materielle Prüfung
    widerspruch: "Ja", // Widerspruch möglich

    poaVertreterRequired: "Ja", // Vertretervollmacht erforderlich
    poaDigitalCopy: "Nein", // Digitale Kopie nicht ausreichend
    poaOriginalRequired: "Ja", // Original der Vollmacht erforderlich
    poaDigitalSignature: "Nein", // Digitale Signatur nicht akzeptiert
    poaNotarization: "Ja", // Notarielle Beglaubigung erforderlich
    poaApostille: "Ja", // Apostille erforderlich
    poaHinweise: "Notariell beglaubigte und legalisierte Vollmacht erforderlich.",

    mitgliedschaften: ["WIPO"],

    priorityDeadlineMonths: 6, // Prioritätsfrist von 6 Monaten
    priorityDocumentDeadlineMonths: 3,

    additionalNotes:
      "Palau hat ein auf dem US-System basierendes Markenrecht. Markenregistrierungen sind für 10 Jahre gültig und können für weitere 10-Jahres-Perioden verlängert werden. Die Registrierung erfolgt beim Office of the Attorney General. Eine Marke kann nach 5 Jahren Nichtbenutzung angefochten werden.",
  }),

  // Papua-Neuguinea
  createExtendedCountry("PG", "Papua-Neuguinea", "Ozeanien", "direct", {
    calculationBasis: "registration",
    protectionPeriod: 10, // Schutzdauer: 10 Jahre ab Registrierungsdatum

    renewalStartMonths: 6, // Verlängerungsantrag kann 6 Monate vor Ablauf gestellt werden
    renewalDeadlineMonths: 0, // Die Verlängerung muss bis zum Ablauf erfolgen
    lateRenewalMonths: 6, // Nachfrist von 6 Monaten für verspätete Verlängerung

    usageProofRequired: false, // Kein spezifischer Nutzungsnachweis für Erneuerung erforderlich
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
      "Markenregistrierungen in Papua-Neuguinea sind für 10 Jahre gültig und können für weitere 10-Jahres-Perioden verlängert werden. Die Registrierung erfolgt beim Intellectual Property Office of Papua New Guinea. Eine Marke kann nach 5 Jahren Nichtbenutzung angefochten werden. Das Markensystem basiert auf dem Trademarks Act von 1978.",
  }),

  // Pitcairninseln
  createExtendedCountry("PN", "Pitcairninseln", "Ozeanien", "direct", {
    calculationBasis: "registration",
    protectionPeriod: 10, // Schutzdauer: 10 Jahre ab Registrierungsdatum (UK-System)

    renewalStartMonths: 6, // Verlängerungsantrag kann 6 Monate vor Ablauf gestellt werden
    renewalDeadlineMonths: 0, // Die Verlängerung muss bis zum Ablauf erfolgen
    lateRenewalMonths: 6, // Nachfrist von 6 Monaten für verspätete Verlängerung

    usageProofRequired: false, // Kein spezifischer Nutzungsnachweis für Erneuerung erforderlich
    usageProofYears: 5, // Nach 5 Jahren Nichtbenutzung kann die Marke angefochten werden

    usageDeclarationRequired: false, // Keine regelmäßige Benutzungserklärung erforderlich
    usageDeclarationYears: [],

    vertreterRequired: "Ja", // Lokaler Vertreter erforderlich
    prufungsumfang: "Begrenzt", // Begrenzte formelle und materielle Prüfung
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
      "Die Pitcairninseln sind ein britisches Überseegebiet. UK-Registrierungen können ausgedehnt werden, oder es können direkte Anmeldungen erfolgen. Markenregistrierungen sind für 10 Jahre gültig und können für weitere 10-Jahres-Perioden verlängert werden. Die Anmeldung erfolgt über das britische Register mit Erweiterung auf die Pitcairninseln.",
  }),

  // Samoa
  createExtendedCountry("WS", "Samoa", "Ozeanien", "direct", {
    calculationBasis: "registration",
    protectionPeriod: 10, // Schutzdauer: 10 Jahre ab Registrierungsdatum

    renewalStartMonths: 6, // Verlängerungsantrag kann 6 Monate vor Ablauf gestellt werden
    renewalDeadlineMonths: 0, // Die Verlängerung muss bis zum Ablauf erfolgen
    lateRenewalMonths: 6, // Nachfrist von 6 Monaten für verspätete Verlängerung

    usageProofRequired: false, // Kein spezifischer Nutzungsnachweis für Erneuerung erforderlich
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
    poaHinweise: "Notariell beglaubigte und legalisierte Vollmacht erforderlich.",

    mitgliedschaften: ["WIPO", "Pariser Übereinkunft", "TRIPS", "Madrid-Protokoll"],

    priorityDeadlineMonths: 6, // Prioritätsfrist von 6 Monaten
    priorityDocumentDeadlineMonths: 3,

    additionalNotes:
      "Markenregistrierungen in Samoa sind für 10 Jahre gültig und können für weitere 10-Jahres-Perioden verlängert werden. Die Registrierung erfolgt beim Registrar of Companies, Ministry of Commerce, Industry and Labour. Samoa ist seit 2019 Mitglied des Madrid-Protokolls. Eine Marke kann nach 3 Jahren Nichtbenutzung angefochten werden. Das neue Markengesetz von 2018 hat das System modernisiert.",
  }),

  // Salomonen
  createExtendedCountry("SB", "Salomonen", "Ozeanien", "direct", {
    calculationBasis: "registration",
    protectionPeriod: 7, // Schutzdauer: 7 Jahre initial ab Registrierungsdatum (basierend auf britischem Common Law)

    renewalStartMonths: 6, // Verlängerungsantrag kann 6 Monate vor Ablauf gestellt werden
    renewalDeadlineMonths: 0, // Die Verlängerung muss bis zum Ablauf erfolgen
    lateRenewalMonths: 6, // Nachfrist von 6 Monaten für verspätete Verlängerung

    usageProofRequired: false, // Kein spezifischer Nutzungsnachweis für Erneuerung erforderlich
    usageProofYears: 5, // Nach 5 Jahren Nichtbenutzung kann die Marke angefochten werden

    usageDeclarationRequired: false, // Keine regelmäßige Benutzungserklärung erforderlich
    usageDeclarationYears: [],

    vertreterRequired: "Ja", // Lokaler Vertreter erforderlich
    prufungsumfang: "Begrenzt", // Begrenzte formelle und materielle Prüfung
    widerspruch: "Ja", // Widerspruch möglich

    poaVertreterRequired: "Ja", // Vertretervollmacht erforderlich
    poaDigitalCopy: "Nein", // Digitale Kopie nicht ausreichend
    poaOriginalRequired: "Ja", // Original der Vollmacht erforderlich
    poaDigitalSignature: "Nein", // Digitale Signatur nicht akzeptiert
    poaNotarization: "Ja", // Notarielle Beglaubigung erforderlich
    poaApostille: "Ja", // Apostille erforderlich
    poaHinweise: "Notariell beglaubigte und legalisierte Vollmacht erforderlich.",

    mitgliedschaften: ["WIPO", "TRIPS"],

    priorityDeadlineMonths: 6, // Prioritätsfrist von 6 Monaten
    priorityDocumentDeadlineMonths: 3,

    additionalNotes:
      "Die Salomonen haben ein auf dem britischen Common Law basierendes Markenschutzsystem. Markenregistrierungen sind initial für 7 Jahre gültig und können für weitere 14-Jahres-Perioden verlängert werden. Die Registrierung erfolgt beim Company Haus, Foreign Investment Division. Eine Marke kann nach 5 Jahren Nichtbenutzung angefochten werden.",
  }),

  // Tonga
  createExtendedCountry("TO", "Tonga", "Ozeanien", "direct", {
    calculationBasis: "registration",
    protectionPeriod: 10, // Schutzdauer: 10 Jahre ab Registrierungsdatum

    renewalStartMonths: 6, // Verlängerungsantrag kann 6 Monate vor Ablauf gestellt werden
    renewalDeadlineMonths: 0, // Die Verlängerung muss bis zum Ablauf erfolgen
    lateRenewalMonths: 6, // Nachfrist von 6 Monaten für verspätete Verlängerung

    usageProofRequired: false, // Kein spezifischer Nutzungsnachweis für Erneuerung erforderlich
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
      "Markenregistrierungen in Tonga sind für 10 Jahre gültig und können für weitere 10-Jahres-Perioden verlängert werden. Die Registrierung erfolgt beim Ministry of Labour, Commerce and Industries, Intellectual Property Unit. Eine Marke kann nach 5 Jahren Nichtbenutzung angefochten werden. Tonga hat ein modernes Markengesetz (Industrial Property Act von 2002).",
  }),

  // Tuvalu
  createExtendedCountry("TV", "Tuvalu", "Ozeanien", "direct", {
    calculationBasis: "registration",
    protectionPeriod: 7, // Schutzdauer: 7 Jahre initial ab Registrierungsdatum (basierend auf britischem Common Law)

    renewalStartMonths: 6, // Verlängerungsantrag kann 6 Monate vor Ablauf gestellt werden
    renewalDeadlineMonths: 0, // Die Verlängerung muss bis zum Ablauf erfolgen
    lateRenewalMonths: 6, // Nachfrist von 6 Monaten für verspätete Verlängerung

    usageProofRequired: false, // Kein spezifischer Nutzungsnachweis für Erneuerung erforderlich
    usageProofYears: 5, // Nach 5 Jahren Nichtbenutzung kann die Marke angefochten werden

    usageDeclarationRequired: false, // Keine regelmäßige Benutzungserklärung erforderlich
    usageDeclarationYears: [],

    vertreterRequired: "Ja", // Lokaler Vertreter erforderlich
    prufungsumfang: "Begrenzt", // Begrenzte formelle und materielle Prüfung
    widerspruch: "Ja", // Widerspruch möglich

    poaVertreterRequired: "Ja", // Vertretervollmacht erforderlich
    poaDigitalCopy: "Nein", // Digitale Kopie nicht ausreichend
    poaOriginalRequired: "Ja", // Original der Vollmacht erforderlich
    poaDigitalSignature: "Nein", // Digitale Signatur nicht akzeptiert
    poaNotarization: "Ja", // Notarielle Beglaubigung erforderlich
    poaApostille: "Ja", // Apostille erforderlich
    poaHinweise: "Notariell beglaubigte und legalisierte Vollmacht erforderlich.",

    mitgliedschaften: ["WIPO"],

    priorityDeadlineMonths: 6, // Prioritätsfrist von 6 Monaten
    priorityDocumentDeadlineMonths: 3,

    additionalNotes:
      "Tuvalu hat ein auf dem britischen Common Law basierendes Markenschutzsystem. Markenregistrierungen sind initial für 7 Jahre gültig und können für weitere 14-Jahres-Perioden verlängert werden. Die Registrierung erfolgt beim Companies and Business Registration Department. Aufgrund der begrenzten lokalen Infrastruktur kann die Bearbeitung langwierig sein.",
  }),

  // Vanuatu
  createExtendedCountry("VU", "Vanuatu", "Ozeanien", "direct", {
    calculationBasis: "registration",
    protectionPeriod: 10, // Schutzdauer: 10 Jahre ab Registrierungsdatum

    renewalStartMonths: 6, // Verlängerungsantrag kann 6 Monate vor Ablauf gestellt werden
    renewalDeadlineMonths: 0, // Die Verlängerung muss bis zum Ablauf erfolgen
    lateRenewalMonths: 6, // Nachfrist von 6 Monaten für verspätete Verlängerung

    usageProofRequired: false, // Kein spezifischer Nutzungsnachweis für Erneuerung erforderlich
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
    poaHinweise: "Notariell beglaubigte und legalisierte Vollmacht erforderlich.",

    mitgliedschaften: ["WIPO", "Pariser Übereinkunft", "TRIPS"],

    priorityDeadlineMonths: 6, // Prioritätsfrist von 6 Monaten
    priorityDocumentDeadlineMonths: 3,

    additionalNotes:
      "Markenregistrierungen in Vanuatu sind für 10 Jahre gültig und können für weitere 10-Jahres-Perioden verlängert werden. Die Registrierung erfolgt beim Vanuatu Intellectual Property Office (VIPO). Eine Marke kann nach 3 Jahren Nichtbenutzung angefochten werden. Vanuatu hat ein modernes Markengesetz (Trademarks Act No. 1 von 2003).",
  }),

  // Wallis und Futuna
  createExtendedCountry("WF", "Wallis und Futuna", "Ozeanien", "direct", {
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
      "Wallis und Futuna ist ein französisches Überseegebiet und wird von der französischen Markenregistrierung abgedeckt. Markenregistrierungen sind für 10 Jahre gültig und können für weitere 10-Jahres-Perioden verlängert werden. Eine Marke kann nach 5 Jahren Nichtbenutzung angefochten werden.",
  }),
]
