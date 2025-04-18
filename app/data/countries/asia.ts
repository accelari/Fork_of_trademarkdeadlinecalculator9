// Beispiel für die Anwendung der automatischen Kategorisierung für asiatische Länder
import { createCategorizedCountry } from "./country-utils"

export const asianCountries = [
  createCategorizedCountry("CN", "China", "Asien", "direct", {
    renewalStartMonths: 12,
    renewalDeadlineMonths: 0,
    lateRenewalMonths: 6,
    usageProofYears: 3,
    poaHinweise:
      "Die Vollmacht für den Vertreter muss schriftlich erteilt werden; in der Praxis genügt die Unterzeichnung des standardisierten Antragsformulars",
    mitgliedschaften: [
      "WIPO (seit 1980)",
      "Paris Convention (seit 1985)",
      "WTO/TRIPS (seit 2001)",
      "Madrid-Abkommen (seit 1989)",
      "Madrid-Protokoll (seit 1995)",
      "Nizza-Klassifikation (seit 1994)",
    ],
    additionalNotes:
      "China legt einen strengen Maßstab an Benutzungsnachweise an (Nachweise müssen den kommerziellen Vertrieb der markierten Waren/Dienstleistungen in China belegen). China folgt dem 'First-to-file'-Prinzip, Marken entstehen also nur durch Registrierung. Eine Besonderheit ist das System der Markenkategorien: Schutz erstreckt sich nur auf die angemeldeten Klassen. Marken in lateinischer Schrift gewähren nicht automatisch Schutz für chinesische Schriftzeichen.",
  }),

  createCategorizedCountry("JP", "Japan", "Asien", "direct", {
    renewalStartMonths: 6,
    renewalDeadlineMonths: 0,
    lateRenewalMonths: 6,
    usageProofYears: 3,
    poaHinweise:
      "Eine Vollmacht muss in Japan grundsätzlich nicht routinemäßig eingereicht werden, solange der Vertreter registriert ist",
    mitgliedschaften: [
      "WIPO (seit 1975)",
      "Pariser Verbandsübereinkunft (seit 1899)",
      "WTO/TRIPS (seit 1995)",
      "Madrider Protokoll (seit 2000)",
      "Nizza-Klassifikation (seit 1990)",
    ],
    additionalNotes:
      "Japan verfügt über ein strenges amtliches Prüfungsverfahren. Mehrklassenanmeldungen sind in Japan seit 1992 zulässig. Die Anmeldung muss in japanischer Sprache erfolgen. Bei fremdsprachigen Markenelementen ist häufig eine Aussprache in Katakana im Formular anzugeben. Japan akzeptiert seit 2015 die Eintragung nicht-traditioneller Marken wie Klangmarken, Farbmarken und Bewegungsmarken, sofern sie grafisch darstellbar sind.",
  }),

  createCategorizedCountry("KR", "Südkorea", "Asien", "direct", {
    renewalStartMonths: 12,
    renewalDeadlineMonths: 0,
    lateRenewalMonths: 6,
    usageProofYears: 3,
    poaHinweise:
      "Eine schriftliche Vollmacht muss seit 2015 grundsätzlich nicht mehr standardmäßig eingereicht werden; der Vertreter versichert mit der Einreichung implizit seine Bevollmächtigung",
    mitgliedschaften: [
      "WIPO (seit 1979)",
      "Pariser Verbandsübereinkunft (seit 1980)",
      "WTO/TRIPS",
      "Madrid-Protokoll (seit 2003)",
      "Nizza-Klassifikation (seit 1999)",
    ],
    additionalNotes:
      "Südkorea hatte bis 2007 ein Widerspruchsverfahren nach Veröffentlichung der Registrierung. Mehrklassenanmeldungen sind in Korea bereits seit 1998 zulässig. Alle Vorgänge laufen auf Koreanisch ab. Korea hat 2012 sein Markengesetz erweitert – seitdem sind auch Geruchsmarken und Klangmarken theoretisch eintragbar (sofern eine visuelle Darstellung möglich ist).",
  }),
  // Weitere asiatische Länder
  createCategorizedCountry("AF", "Afghanistan", "Asien", "direct", {
    calculationBasis: "registration",
  }),
  createCategorizedCountry("AM", "Armenien", "Asien", "direct", {
    calculationBasis: "application",
    protectionPeriod: 10, // Schutzdauer: 10 Jahre ab Anmeldetag

    renewalStartMonths: 12, // Verlängerungsanträge ab 12 Monate vor Ablauf der Schutzdauer
    renewalDeadlineMonths: 0, // Frist endet am Ablauftag
    lateRenewalMonths: 6, // Nachfrist von 6 Monaten mit 50% Zuschlag

    usageProofRequired: false, // Kein Einreichen von Nutzungsbelegen erforderlich

    usageDeclarationRequired: false, // Keine Benutzungserklärung erforderlich
    usageDeclarationYears: [], // Keine festen Zeitpunkte

    vertreterRequired: "Ja", // Auswärtige Anmelder müssen einen armenischen Markenanwalt bestellen
    prufungsumfang: "Umfassend", // Formale Prüfung, absolute Hindernisse und Recherche nach älteren Marken
    widerspruch: "Ja", // Widerspruch innerhalb 2 Monaten nach Veröffentlichung der Eintragung möglich

    poaVertreterRequired: "Ja", // Für ausländische Anmelder erforderlich
    poaDigitalCopy: "Ja", // Digitale Kopie wird akzeptiert
    poaOriginalRequired: "Nein", // Original nicht zwingend erforderlich
    poaDigitalSignature: "Ja", // Digitale Signatur wird akzeptiert
    poaNotarization: "Fakultativ", // Notarielle Beglaubigung oder Firmenstempel erforderlich
    poaApostille: "Nein", // Keine Apostille erforderlich
    poaHinweise: "POA mit Stempel oder notarisiert; Übersetzung ins Armenische erforderlich",

    mitgliedschaften: ["WIPO", "Pariser Übereinkunft", "TRIPS", "Madrid-Abkommen", "Madrid-Protokoll"],

    priorityDeadlineMonths: 6, // Prioritätsfrist von 6 Monaten (Pariser PV)
    priorityDocumentDeadlineMonths: 3, // Prioritätsdokument mit Übersetzung innerhalb 3 Monaten einzureichen

    additionalNotes:
      "Nach Ablauf von 5 Jahren Nichtbenutzung kann ein Dritter die Löschung beantragen. Innerhalb der ersten 5 Jahre ab Registrierung ist die Marke vor Löschung wegen Nichtbenutzung geschützt. Ab 2023 sind auch Teil-Löschungen wegen Nichtbenutzung möglich (Teilverfall). Armenien akzeptiert mehrklassige Anmeldungen; e-Filing verfügbar, Vollmachten können nachgereicht werden.",
  }),
  // Aserbaidschan
  createCategorizedCountry("AZ", "Aserbaidschan", "Asien", "direct", {
    calculationBasis: "registration",
    protectionPeriod: 10, // Schutzdauer: 10 Jahre ab Registrierungsdatum

    renewalStartMonths: 6, // Verlängerungsantrag kann 6 Monate vor Ablauf gestellt werden
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
    poaHinweise: "Notariell beglaubigte und legalisierte Vollmacht erforderlich.",

    mitgliedschaften: ["WIPO", "Pariser Übereinkunft", "TRIPS", "Madrid-Protokoll"],

    priorityDeadlineMonths: 6, // Prioritätsfrist von 6 Monaten
    priorityDocumentDeadlineMonths: 3,

    additionalNotes:
      "Markenregistrierungen in Aserbaidschan sind für 10 Jahre gültig und können für weitere 10-Jahres-Perioden verlängert werden. Die Registrierung erfolgt beim Patent- und Markenamt von Aserbaidschan. Aserbaidschan ist Mitglied des Madrid-Protokolls. Eine Marke kann nach 5 Jahren Nichtbenutzung angefochten werden. Alle Dokumente müssen ins Aserbaidschanische übersetzt werden.",
  }),
  // Bangladesch
  createCategorizedCountry("BD", "Bangladesch", "Asien", "direct", {
    calculationBasis: "registration",
    protectionPeriod: 7, // Schutzdauer: 7 Jahre initial ab Registrierungsdatum

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
      "Markenregistrierungen in Bangladesch sind initial für 7 Jahre gültig und können für weitere 10-Jahres-Perioden verlängert werden (ähnlich dem alten britischen System). Die Registrierung erfolgt beim Department of Patents, Designs and Trademarks. Eine Marke kann nach 5 Jahren Nichtbenutzung angefochten werden. Ein neues Markengesetz wurde 2009 eingeführt, aber viele Aspekte des britischen Systems wurden beibehalten.",
  }),
  // Bhutan
  createCategorizedCountry("BT", "Bhutan", "Asien", "direct", {
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
      "Markenregistrierungen in Bhutan sind für 10 Jahre gültig und können für weitere 10-Jahres-Perioden verlängert werden. Die Registrierung erfolgt beim Intellectual Property Division des Department of Industry. Bhutan ist seit 2000 Mitglied des Madrid-Protokolls. Eine Marke kann nach 3 Jahren Nichtbenutzung angefochten werden.",
  }),
  // Brunei
  createCategorizedCountry("BN", "Brunei", "Asien", "direct", {
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

    mitgliedschaften: ["WIPO", "Pariser Übereinkunft", "TRIPS", "Madrid-Protokoll"],

    priorityDeadlineMonths: 6, // Prioritätsfrist von 6 Monaten
    priorityDocumentDeadlineMonths: 3,

    additionalNotes:
      "Markenregistrierungen in Brunei sind für 10 Jahre gültig und können für weitere 10-Jahres-Perioden verlängert werden. Die Registrierung erfolgt beim Brunei Intellectual Property Office (BruIPO). Brunei ist seit 2017 Mitglied des Madrid-Protokolls. Eine Marke kann nach 5 Jahren Nichtbenutzung angefochten werden.",
  }),
  // Georgien
  createCategorizedCountry("GE", "Georgien", "Asien", "direct", {
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
    poaDigitalCopy: "Ja", // Digitale Kopie kann ausreichend sein
    poaOriginalRequired: "Nein", // Original der Vollmacht nicht zwingend erforderlich
    poaDigitalSignature: "Ja", // Digitale Signatur kann akzeptiert werden
    poaNotarization: "Nein", // Keine notarielle Beglaubigung erforderlich
    poaApostille: "Nein", // Keine Apostille erforderlich
    poaHinweise: "Einfach unterschriebene Vollmacht ist ausreichend, auch als Kopie oder mit digitaler Signatur.",

    mitgliedschaften: ["WIPO", "Pariser Übereinkunft", "TRIPS", "Madrid-Protokoll"],

    priorityDeadlineMonths: 6, // Prioritätsfrist von 6 Monaten
    priorityDocumentDeadlineMonths: 3,

    additionalNotes:
      "Markenregistrierungen in Georgien sind für 10 Jahre gültig und können für weitere 10-Jahres-Perioden verlängert werden. Die Registrierung erfolgt beim National Intellectual Property Center of Georgia (Sakpatenti). Georgien ist Mitglied des Madrid-Protokolls. Eine Marke kann nach 5 Jahren Nichtbenutzung angefochten werden.",
  }),
  createCategorizedCountry("HK", "Hongkong", "Asien", "direct", {
    calculationBasis: "registration",
    protectionPeriod: 10, // Schutzdauer: 10 Jahre ab Eintragungsdatum

    renewalStartMonths: 12, // Im letzten Jahr der Schutzfrist
    renewalDeadlineMonths: 0, // Bis zum Ablauf der Schutzfrist
    lateRenewalMonths: 6, // Nachfrist von 6 Monaten mit Zahlung einer Zusatzgebühr

    usageProofRequired: false, // Keine turnusmäßige Erklärung nötig
    usageProofYears: 3, // Nach 3 Jahren ununterbrochener Nichtbenutzung kann Löschungsantrag gestellt werden

    usageDeclarationRequired: false, // Keine Benutzungserklärung erforderlich
    usageDeclarationYears: [], // Keine spezifischen Jahre

    vertreterRequired: "Ja", // Auswärtige Anmelder ohne Sitz in Hongkong müssen einen Zustellungsbevollmächtigten mit Adresse in HK benennen
    prufungsumfang: "Umfassend", // Prüfung auf absolute Eintragungshindernisse und Recherche nach älteren Marken
    widerspruch: "Ja", // Nach Veröffentlichung der Anmeldung im Hong Kong Intellectual Property Journal läuft eine Widerspruchsfrist von 3 Monaten

    poaVertreterRequired: "Ja", // Für ausländische Anmelder erforderlich
    poaDigitalCopy: "Ja", // Wird akzeptiert
    poaOriginalRequired: "Nein", // Original nicht erforderlich
    poaDigitalSignature: "Ja", // Digitale Signatur wird akzeptiert
    poaNotarization: "Nein", // Keine notarielle Beglaubigung erforderlich
    poaApostille: "Nein", // Keine Apostille erforderlich
    poaHinweise:
      "Eine schriftliche Vollmacht ist nicht vorgeschrieben; die Vertretung ergibt sich aus dem Antragsformular",

    mitgliedschaften: [
      "Kein eigenständiger Mitgliedstaat internationaler Abkommen",
      "Keine eigenständige Madrider Mitgliedschaft",
      "PVÜ-Prioritäten werden anerkannt",
    ],

    priorityDeadlineMonths: 6, // 6 Monate Priorität basierend auf einer Grundanmeldung in einem PVÜ-Mitglied
    priorityDocumentDeadlineMonths: 3, // Prioritätsdokument auf Verlangen einzureichen

    usageProofType: "Nachweis nur auf Antrag Dritter erforderlich",
    usageDeclarationType: "Keine regelmäßige Benutzungserklärung erforderlich",
    usageProofDeadlineYears: 3,
    usageDeclarationDeadlineYears: null, // Nicht anwendbar
    lateFilingMonths: 0, // Keine spezifische Nachfrist
    filingPeriodStart: "Nach Antrag eines Dritten",

    additionalNotes:
      "Hongkong folgt dem britischen Common-Law-System. Neben dem Registerschutz existiert Schutz durch 'Passing Off' für unregistrierte Marken. Aufgrun  Neben dem Registerschutz existiert Schutz durch 'Passing Off' für unregistrierte Marken. Aufgrund des Prinzips 'Ein Land, zwei Systeme' gilt die chinesische Madrider Mitgliedschaft nicht für HK. Internationale Registrierungen (Madrid) können Hongkong daher nicht erfassen. Die amtlichen Sprachen sind Englisch und Chinesisch (traditionelles Schriftzeichenformat).",
  }),
  // Kirgisistan
  createCategorizedCountry("KG", "Kirgisistan", "Asien", "direct", {
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
    poaHinweise: "Notariell beglaubigte und legalisierte Vollmacht erforderlich.",

    mitgliedschaften: ["WIPO", "Pariser Übereinkunft", "TRIPS", "Madrid-Protokoll"],

    priorityDeadlineMonths: 6, // Prioritätsfrist von 6 Monaten
    priorityDocumentDeadlineMonths: 3,

    additionalNotes:
      "Markenregistrierungen in Kirgisistan sind für 10 Jahre gültig und können für weitere 10-Jahres-Perioden verlängert werden. Die Registrierung erfolgt beim State Service of Intellectual Property and Innovation under the Government of the Kyrgyz Republic (Kyrgyzpatent). Kirgisistan ist Mitglied des Madrid-Protokolls. Eine Marke kann nach 3 Jahren Nichtbenutzung angefochten werden.",
  }),
  // Nordkorea
  createCategorizedCountry("KP", "Nordkorea", "Asien", "direct", {
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
    poaHinweise: "Notariell beglaubigte und legalisierte Vollmacht erforderlich.",

    mitgliedschaften: ["WIPO", "Pariser Übereinkunft", "Madrid-Abkommen", "Madrid-Protokoll"],

    priorityDeadlineMonths: 6, // Prioritätsfrist von 6 Monaten
    priorityDocumentDeadlineMonths: 3,

    additionalNotes:
      "Markenregistrierungen in Nordkorea sind für 10 Jahre gültig und können für weitere 10-Jahres-Perioden verlängert werden. Die Registrierung erfolgt beim Trademark and Industrial Design Department of the State Administration for Quality Management. Nordkorea ist sowohl Mitglied des Madrid-Abkommens als auch des Madrid-Protokolls. Aufgrund von internationalen Sanktionen können Schwierigkeiten bei der Anmeldung und Aufrechterhaltung von Markenrechten auftreten.",
  }),
  // Laos
  createCategorizedCountry("LA", "Laos", "Asien", "direct", {
    calculationBasis: "registration",
    protectionPeriod: 10, // Schutzdauer: 10 Jahre ab Registrierungsdatum

    renewalStartMonths: 6, // Verlängerungsantrag kann 6 Monate vor Ablauf gestellt werden
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
    poaHinweise: "Notariell beglaubigte und legalisierte Vollmacht erforderlich.",

    mitgliedschaften: ["WIPO", "Pariser Übereinkunft", "TRIPS", "Madrid-Protokoll"],

    priorityDeadlineMonths: 6, // Prioritätsfrist von 6 Monaten
    priorityDocumentDeadlineMonths: 3,

    additionalNotes:
      "Markenregistrierungen in Laos sind für 10 Jahre gültig und können für weitere 10-Jahres-Perioden verlängert werden. Die Registrierung erfolgt beim Department of Intellectual Property, Ministry of Science and Technology. Laos ist seit 2016 Mitglied des Madrid-Protokolls. Eine Marke kann nach 5 Jahren Nichtbenutzung angefochten werden.",
  }),
  // Macau
  createCategorizedCountry("MO", "Macau", "Asien", "direct", {
    calculationBasis: "registration",
    protectionPeriod: 7, // Schutzdauer: 7 Jahre ab Registrierungsdatum

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

    mitgliedschaften: ["WIPO", "Pariser Übereinkunft (über China)"],

    priorityDeadlineMonths: 6, // Prioritätsfrist von 6 Monaten
    priorityDocumentDeadlineMonths: 3,

    additionalNotes:
      "Markenregistrierungen in Macau sind initial für 7 Jahre gültig und können für weitere 14-Jahres-Perioden verlängert werden (basierend auf dem portugiesischen System). Die Registrierung erfolgt beim Macao Economic Bureau, Intellectual Property Department. Eine chinesische Registrierung erstreckt sich nicht automatisch auf Macau. Eine Marke kann nach 3 Jahren Nichtbenutzung angefochten werden.",
  }),
  // Malediven
  createCategorizedCountry("MV", "Malediven", "Asien", "direct", {
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

    mitgliedschaften: ["WIPO", "TRIPS", "Madrid-Protokoll"],

    priorityDeadlineMonths: 6, // Prioritätsfrist von 6 Monaten
    priorityDocumentDeadlineMonths: 3,

    additionalNotes:
      "Markenregistrierungen auf den Malediven sind für 10 Jahre gültig und können für weitere 10-Jahres-Perioden verlängert werden. Die Registrierung erfolgt beim Patent and Trademark Unit des Ministry of Economic Development. Die Malediven sind seit 2019 dem Madrid-Protokoll beigetreten. Eine Marke kann nach 5 Jahren Nichtbenutzung angefochten werden.",
  }),
  // Mongolei
  createCategorizedCountry("MN", "Mongolei", "Asien", "direct", {
    calculationBasis: "registration",
    protectionPeriod: 10, // Schutzdauer: 10 Jahre ab Registrierungsdatum

    renewalStartMonths: 6, // Verlängerungsantrag kann 6 Monate vor Ablauf gestellt werden
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
    poaHinweise: "Notariell beglaubigte und legalisierte Vollmacht erforderlich.",

    mitgliedschaften: ["WIPO", "Pariser Übereinkunft", "TRIPS", "Madrid-Protokoll"],

    priorityDeadlineMonths: 6, // Prioritätsfrist von 6 Monaten
    priorityDocumentDeadlineMonths: 3,

    additionalNotes:
      "Markenregistrierungen in der Mongolei sind für 10 Jahre gültig und können für weitere 10-Jahres-Perioden verlängert werden. Die Registrierung erfolgt beim Intellectual Property Office of Mongolia. Die Mongolei ist Mitglied des Madrid-Protokolls. Eine Marke kann nach 5 Jahren Nichtbenutzung angefochten werden.",
  }),
  // Myanmar
  createCategorizedCountry("MM", "Myanmar", "Asien", "direct", {
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
    poaHinweise: "Notariell beglaubigte und legalisierte Vollmacht erforderlich.",

    mitgliedschaften: ["WIPO", "TRIPS"],

    priorityDeadlineMonths: 6, // Prioritätsfrist von 6 Monaten
    priorityDocumentDeadlineMonths: 3,

    additionalNotes:
      "Myanmar hat 2019 ein neues Markengesetz eingeführt, das eine formelle Registrierung beim Department of Intellectual Property of Myanmar ermöglicht. Markenregistrierungen sind für 10 Jahre gültig und können für weitere 10-Jahres-Perioden verlängert werden. Eine Marke kann nach 3 Jahren Nichtbenutzung angefochten werden. Aufgrund der politischen Situation können Verzögerungen bei der Bearbeitung auftreten.",
  }),
  // Nepal
  createCategorizedCountry("NP", "Nepal", "Asien", "direct", {
    calculationBasis: "registration",
    protectionPeriod: 7, // Schutzdauer: 7 Jahre ab Registrierungsdatum

    renewalStartMonths: 6, // Verlängerungsantrag kann 6 Monate vor Ablauf gestellt werden
    renewalDeadlineMonths: 0, // Die Verlängerung muss bis zum Ablauf erfolgen
    lateRenewalMonths: 7, // Nachfrist von 7 Jahren für verspätete Verlängerung (ungewöhnlich lange Nachfrist)

    usageProofRequired: false, // Kein spezifischer Nutzungsnachweis für Erneuerung erforderlich
    usageProofYears: 0,

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

    mitgliedschaften: ["WIPO", "TRIPS"],

    priorityDeadlineMonths: 6, // Prioritätsfrist von 6 Monaten
    priorityDocumentDeadlineMonths: 3,

    additionalNotes:
      "Markenregistrierungen in Nepal sind für 7 Jahre gültig und können für weitere 7-Jahres-Perioden verlängert werden. Die Registrierung erfolgt beim Department of Industry, Industrial Property Office. Nepal hat ein ungewöhnlich großzügiges System für verspätete Erneuerungen, das eine Nachfrist von bis zu 7 Jahren erlaubt (mit zusätzlichen Gebühren). Das Markensystem basiert auf dem Patent, Design and Trademark Act von 1965.",
  }),
  // Pakistan
  createCategorizedCountry("PK", "Pakistan", "Asien", "direct", {
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
      "Markenregistrierungen in Pakistan sind für 10 Jahre gültig und können für weitere 10-Jahres-Perioden verlängert werden. Die Registrierung erfolgt beim Intellectual Property Organisation of Pakistan (IPO-Pakistan). Eine Marke kann nach 5 Jahren Nichtbenutzung angefochten werden. Pakistan folgt weitgehend dem britischen Markensystem.",
  }),
  createCategorizedCountry("PH", "Philippinen", "Asien", "direct", {
    calculationBasis: "registration",
    protectionPeriod: 10, // Schutzdauer: 10 Jahre ab Eintragung (Registrierungsdatum)

    renewalStartMonths: 6, // Innerhalb von 6 Monaten vor Ablauf der 10 Jahre
    renewalDeadlineMonths: 0, // Bis zum Ablauf der Schutzfrist
    lateRenewalMonths: 6, // Bis zu 6 Monate nach Ablauf der Schutzfrist mit Aufpreis

    usageProofRequired: true, // Die Philippinen verlangen die Einreichung einer "Declaration of Actual Use" (DAU)
    usageProofYears: 3, // Innerhalb von 3 Jahren ab Anmeldetag muss eine Marke tatsächlich benutzt werden

    usageDeclarationRequired: true, // Declaration of Actual Use (DAU) samt Belegfoto erforderlich
    usageDeclarationYears: [3, 5, 10], // Innerhalb 1 Jahr nach dem 3. Jahrestag der Anmeldung, zum 5. und 10. Jahr

    vertreterRequired: "Ja", // Nicht auf den Philippinen ansässige Anmelder müssen einen lokalen Vertreter bestellen
    prufungsumfang: "Umfassend", // Prüfung absoluter und relativer Schutzhindernisse
    widerspruch: "Ja", // 30 Tage ab Veröffentlichung im IPOPHL e-Gazette (einmalige Verlängerung um 45 Tage möglich)

    poaVertreterRequired: "Ja", // Für ausländische Anmelder erforderlich
    poaDigitalCopy: "Ja", // Wird zunächst akzeptiert
    // Für ausländische Anmelder erforderlich
    poaDigitalCopy: "Ja", // Wird zunächst akzeptiert
    poaOriginalRequired: "Ja", // Original erforderlich
    poaDigitalSignature: "Nein", // Digitale Signatur nicht ausreichend
    poaNotarization: "Ja", // Notarielle Beglaubigung erforderlich
    poaApostille: "Ja", // Konsularische Legalisierung erforderlich
    poaHinweise:
      "Die Vollmacht (SPA) ist vom Anmelder zu unterschreiben und notariell zu beglaubigen sowie konsularisch zu legalisieren",

    mitgliedschaften: ["Madrid-Protokoll (seit 2012)", "Pariser Übereinkunft", "WTO"],

    priorityDeadlineMonths: 6, // 6 Monate nach einer Erstanmeldung in einem PVÜ-Mitglied
    priorityDocumentDeadlineMonths: 3, // Übliche Frist für beglaubigten Prioritätsbeleg mit Übersetzung

    usageProofType: "Declaration of Actual Use (DAU) samt Belegfoto",
    usageDeclarationType: "Declaration of Actual Use",
    usageProofDeadlineYears: 3,
    usageDeclarationDeadlineYears: 3,
    lateFilingMonths: 6, // Übliche Nachfrist
    filingPeriodStart: "Innerhalb 1 Jahr nach dem 3. Jahrestag der Anmeldung",

    additionalNotes:
      "Die Philippinen haben eine strenge Gebrauchspflicht: Die DAU muss erstmals innerhalb 1 Jahr nach dem 3. Jahrestag der Anmeldung und erneut jeweils zum 5. und 10. Jahr (zusammen mit der Verlängerung) eingereicht werden. Ohne fristgerechte DAU wird die Marke gelöscht. Auf den Philippinen herrscht 'Erstes Anmelden, aber Gebrauchspflicht': Prioritätsprinzip zugunsten Registrierung, aber keine reinen Defensivmarken.",
  }),
  createCategorizedCountry("SA", "Saudi-Arabien", "Asien", "direct", {
    calculationBasis: "application",
    protectionPeriod: 10, // Schutzdauer: 10 Jahre ab Anmeldedatum

    renewalStartMonths: 12, // Im letzten Jahr der Schutzdauer
    renewalDeadlineMonths: 0, // Bis zum Ablauf der 10 Jahre
    lateRenewalMonths: 6, // Nachfrist von 6 Monaten gegen Säumnisgebühr

    usageProofRequired: false, // Keine regelmäßigen Benutzungsnachweise erforderlich
    usageProofYears: 5, // Nach 5 Jahren Nichtbenutzung kann ein Löschungsantrag gestellt werden

    usageDeclarationRequired: false, // Keine turnusmäßige Benutzungserklärung erforderlich
    usageDeclarationYears: [], // Keine spezifischen Jahre

    vertreterRequired: "Ja", // Ausländische Markenanmelder ohne Niederlassung in Saudi-Arabien müssen einen lokalen Vertreter bestellen
    prufungsumfang: "Umfassend", // Prüfung auf absolute und relative Hindernisse
    widerspruch: "Ja", // Widerspruchsfrist von 60 Tagen ab Veröffentlichungsdatum

    poaVertreterRequired: "Ja", // Für ausländische Anmelder erforderlich
    poaDigitalCopy: "Ja", // Wird zunächst akzeptiert
    poaOriginalRequired: "Ja", // Original muss nachgereicht werden
    poaDigitalSignature: "Nein", // Digitale Unterschrift nicht ausreichend
    poaNotarization: "Ja", // Notarielle Beglaubigung erforderlich
    poaApostille: "Nein", // Keine Apostille, sondern konsularische Legalisation
    poaHinweise:
      "Die Vollmacht muss vom Markeninhaber unterschrieben, notariell beglaubigt und anschließend durch ein saudi-arabisches Konsulat legalisiert werden",

    mitgliedschaften: [
      "WIPO (seit 1982)",
      "Pariser Verbandsübereinkunft (seit 2004)",
      "WTO/TRIPS (seit 2005)",
      "Madrid-Protokoll (seit März 2022)",
      "Nizza-Klassifikation (seit 2021)",
    ],

    priorityDeadlineMonths: 6, // 6 Monate ab Erst-Anmeldetag
    priorityDocumentDeadlineMonths: 3, // Innerhalb von 3 Monaten nach Antragstellung

    usageProofType: "Nachweis nur auf Antrag Dritter erforderlich",
    usageDeclarationType: "Keine regelmäßige Benutzungserklärung erforderlich",
    usageProofDeadlineYears: 5,
    usageDeclarationDeadlineYears: null, // Nicht anwendbar
    lateFilingMonths: 0, // Keine spezifische Nachfrist
    filingPeriodStart: "Nach Antrag eines Dritten",

    additionalNotes:
      "Saudi-Arabien erlaubt seit Umsetzung des GCC-Markengesetzes Mehrklassenanmeldungen. Alle Anmeldungen und Unterlagen müssen in Arabisch eingereicht werden. Marken mit religiösen Inhalten (z.B. Koranverse, Namen des Propheten) sind unzulässig. Saudi-Arabien ist nicht Teilnehmer des Haager Apostille-Übereinkommens, daher ist die konsularische Legalisation notwendig.",
  }),
  // Singapore
  createCategorizedCountry("SG", "Singapur", "Asien", "direct", {
    calculationBasis: "application",
    protectionPeriod: 10, // Schutzdauer: 10 Jahre ab dem Anmeldedatum

    renewalStartMonths: 6, // Das IPO Singapore erinnert ca. 6 Monate vor Ablauf
    renewalDeadlineMonths: 0, // Bis zum Ablauftag
    lateRenewalMonths: 6, // Verspätet innerhalb von 6 Monaten danach gegen Zahlung zusätzlicher Gebühren

    usageProofRequired: false, // Keine eidesstattliche Nutzungserklärung nötig
    usageProofYears: 5, // Nach 5 Jahren ununterbrochener Nichtbenutzung kann Löschungsantrag gestellt werden

    usageDeclarationRequired: false, // Keine regelmäßige Benutzungserklärung erforderlich
    usageDeclarationYears: [], // Keine spezifischen Jahre

    vertreterRequired: "Ja", // Anmelder ohne Wohnsitz in Singapur müssen eine Adresse in Singapur als Zustellungsanschrift benennen
    prufungsumfang: "Umfassend", // Prüfung auf absolute und relative Eintragungshindernisse
    widerspruch: "Ja", // 2 Monate ab Veröffentlichungsdatum (verlängerbar um bis zu 2 weitere Monate auf Antrag)

    poaVertreterRequired: "Ja", // Für ausländische Anmelder erforderlich
    poaDigitalCopy: "Ja", // Wird akzeptiert
    poaOriginalRequired: "Nein", // Original nicht erforderlich
    poaDigitalSignature: "Ja", // Digitale Signatur wird akzeptiert
    poaNotarization: "Nein", // Keine notarielle Beglaubigung erforderlich
    poaApostille: "Nein", // Keine Apostille erforderlich
    poaHinweise:
      "Eine formelle Vollmacht ist für Singapur nicht erforderlich – die Bestellung des lokalen Agenten erfolgt durch Nennung in der Anmeldung",

    mitgliedschaften: ["Pariser Übereinkunft", "WTO/TRIPS", "Madrid-Protokoll (seit 2000)"],

    priorityDeadlineMonths: 6, // 6 Monate nach einer ausländischen Erstanmeldung
    priorityDocumentDeadlineMonths: 3, // Übliche Frist für Prioritätsbelege

    usageProofType: "Nachweis nur auf Antrag Dritter erforderlich",
    usageDeclarationType: "Keine regelmäßige Benutzungserklärung erforderlich",
    usageProofDeadlineYears: 5,
    usageDeclarationDeadlineYears: null, // Nicht anwendbar
    lateFilingMonths: 0, // Keine spezifische Nachfrist
    filingPeriodStart: "Nach Antrag eines Dritten oder im Widerspruchsverfahren",

    additionalNotes:
      "Singapur hat ein modernes Markenrecht (Trade Marks Act 1998, in Kraft seit 2000) und schützt auch nicht-traditionelle Marken (3D-Formen, Farben, Geräusche etc.). Unregistrierte Marken sind durch Common Law (Passing off) geschützt, aber registrierte Marken gewähren starke Rechte inklusive strafrechtlichem Schutz gegen Fälschungen.",
  }),
  // Taiwan
  createCategorizedCountry("TW", "Taiwan", "Asien", "direct", {
    calculationBasis: "registration",
    protectionPeriod: 10, // Schutzdauer: 10 Jahre ab Eintragungsdatum

    renewalStartMonths: 6, // Innerhalb von 6 Monaten vor Ablauf der Schutzfrist
    renewalDeadlineMonths: 0, // Bis zum Ablauf der Schutzfrist
    lateRenewalMonths: 6, // 6-monatige Gnadenfrist zur Nachverlängerung gegen Zuschlagsgebühr

    usageProofRequired: false, // Keine periodische Erklärung erforderlich
    usageProofYears: 3, // Nach 3 Jahren ununterbrochener Nichtbenutzung kann eine Marke auf Antrag gelöscht werden

    usageDeclarationRequired: false, // Keine periodische Erklärung
    usageDeclarationYears: [], // Keine spezifischen Jahre

    vertreterRequired: "Ja", // Ausländische Anmelder müssen einen in Taiwan zugelassenen Markenagenten beauftragen
    prufungsumfang: "Umfassend", // Prüfung auf absolute und relative Hindernisse
    widerspruch: "Ja", // Nach der Veröffentlichung der Eintragungsentscheidung 3-monatige Widerspruchsfrist

    poaVertreterRequired: "Ja", // Für ausländische Anmelder erforderlich
    poaDigitalCopy: "Ja", // Wird akzeptiert
    poaOriginalRequired: "Ja", // Original erforderlich
    poaDigitalSignature: "Ja", // Digitale Signatur wird akzeptiert
    poaNotarization: "Nein", // Notarielle Beglaubigung nur in Sonderfällen erforderlich
    poaApostille: "Nein", // Keine Apostille erforderlich
    poaHinweise:
      "Eine schriftliche Vollmacht ist vorzulegen, die vom Anmelder unterzeichnet und bei Unternehmen mit Firmenstempel versehen sein muss",

    mitgliedschaften: ["Kein Mitglied der Pariser Konvention", "Kein Mitglied des Madrid-Systems", "WTO/TRIPS"],

    priorityDeadlineMonths: 6, // 6 Monate de facto Prioritätsrecht
    priorityDocumentDeadlineMonths: 3, // Übliche Frist für Prioritätsbelege

    usageProofType: "Nachweis nur auf Antrag Dritter erforderlich",
    usageDeclarationType: "Keine regelmäßige Benutzungserklärung erforderlich",
    usageProofDeadlineYears: 3,
    usageDeclarationDeadlineYears: null, // Nicht anwendbar
    lateFilingMonths: 0, // Keine spezifische Nachfrist
    filingPeriodStart: "Nach Antrag eines Dritten",

    additionalNotes:
      "Taiwan ist weder Mitglied der Pariser Konvention noch des Madrid-Systems (aus politischen Gründen). Folglich kann Taiwan nicht über eine internationale Registrierung abgedeckt werden. Marken werden in traditionellem Chinesisch im Register geführt. Nicht-traditionelle Marken (Geräusch, 3D, Hologramm, Bewegungsmarken) sind schützbar seit 2012.",
  }),
  // Thailand
  createCategorizedCountry("TH", "Thailand", "Asien", "direct", {
    calculationBasis: "application",
    protectionPeriod: 10, // Schutzdauer: 10 Jahre ab Anmeldetag

    renewalStartMonths: 6, // Innerhalb der letzten 6 Monate vor Ablauf
    renewalDeadlineMonths: 0, // Bis zum Tag des Ablaufs
    lateRenewalMonths: 6, // 6-monatige Nachfrist nach Ablauf, gegen eine Zuschlagsgebühr

    usageProofRequired: false, // Keine eigenständige Erklärung der Benutzung automatisch erforderlich
    usageProofYears: 3, // Nach 3 Jahren vor einem Löschantrag ohne gutgläubige Benutzung kann Marke gelöscht werden

    usageDeclarationRequired: false, // Keine "Affidavit of Use" automatisch erforderlich
    usageDeclarationYears: [], // Keine spezifischen Jahre

    vertreterRequired: "Ja", // Ausländische Anmelder müssen einen in Thailand zugelassenen Markenanwalt als Vertreter einsetzen
    prufungsumfang: "Umfassend", // Prüfung auf absolute Schutzhindernisse und Ähnlichkeitsrecherche
    widerspruch: "Ja", // Nach der Veröffentlichung im Markenblatt 60 Tage Zeit für Einspruch

    poaVertreterRequired: "Ja", // Für ausländische Anmelder erforderlich
    poaDigitalCopy: "Ja", // Wird zunächst akzeptiert
    poaOriginalRequired: "Ja", // Unterzeichnete Vollmacht im Original einzureichen
    poaDigitalSignature: "Nein", // Digitale Signatur nicht ausreichend
    poaNotarization: "Nein", // Notarielle Beglaubigung ist nicht erforderlich
    poaApostille: "Nein", // Keine Apostille erforderlich
    poaHinweise:
      "Vollmacht im Original einzureichen, kann innerhalb von 90 Tagen nachgereicht werden, notarielle Beglaubigung ist nicht erforderlich",

    mitgliedschaften: [
      "Madrid-Protokoll (seit 2017)",
      "Pariser Verbandsübereinkunft (seit 2008)",
      "WTO/TRIPS",
      "Nizza-Klassifikation (seit 2013)",
    ],

    priorityDeadlineMonths: 6, // 6 Monate PVÜ-Priorität
    priorityDocumentDeadlineMonths: 3, // Übliche Frist für Prioritätsbelege

    usageProofType: "Nachweis nur auf Antrag Dritter erforderlich",
    usageDeclarationType: "Keine regelmäßige Benutzungserklärung erforderlich",
    usageProofDeadlineYears: 3,
    usageDeclarationDeadlineYears: null, // Nicht anwendbar
    lateFilingMonths: 0, // Keine spezifische Nachfrist
    filingPeriodStart: "Nach Antrag eines Dritten",

    additionalNotes:
      "Seit einigen Jahren sind Multi-Class-Anmeldungen erlaubt (früher nur Einzelklassen). Ausländische Marken werden oft zusätzlich in Thai-Schrift transliteriert registriert, um umfassenden Schutz zu bieten. Wichtig ist die fristgerechte Erstbenutzung: Wird eine Marke binnen 3 Jahren ab Registrierung gar nicht genutzt, droht Löschung auf Antrag.",
  }),
  // United Arab Emirates
  createCategorizedCountry("AE", "Vereinigte Arabische Emirate", "Asien", "direct", {
    calculationBasis: "application",
    protectionPeriod: 10, // Schutzdauer: 10 Jahre ab Anmeldedatum

    renewalStartMonths: 12, // Innerhalb des letzten Jahres der Schutzfrist
    renewalDeadlineMonths: 0, // Bis zum Ablauf der Schutzfrist
    lateRenewalMonths: 3, // Nachfrist von 3 Monaten nach Ablauf (mit Zuschlagsgebühr)

    usageProofRequired: false, // Keine zwingende Gebrauchsdokumentation
    usageProofYears: 5, // Nach 5 Jahren ununterbrochener Nichtbenutzung kann ein Dritter die Löschung beantragen

    usageDeclarationRequired: false, // Keine formale Benutzungserklärung erforderlich
    usageDeclarationYears: [], // Keine spezifischen Jahre

    vertreterRequired: "Ja", // Ausländische Anmelder müssen einen in den Emiraten akkreditierten Markenagenten beauftragen
    prufungsumfang: "Umfassend", // Prüfung auf absolute und relative Schutzhindernisse
    widerspruch: "Ja", // Widerspruchsfrist von 30 Tagen ab Veröffentlichung im Markenjournal

    poaVertreterRequired: "Ja", // Für ausländische Anmelder erforderlich
    poaDigitalCopy: "Ja", // Wird zunächst akzeptiert
    poaOriginalRequired: "Ja", // Original erforderlich
    poaDigitalSignature: "Nein", // Digitale Signatur nicht ausreichend
    poaNotarization: "Ja", // Notarielle Beglaubigung erforderlich
    poaApostille: "Ja", // Legalisierung durch die VAE-Botschaft erforderlich
    poaHinweise:
      "Eine schriftliche Vollmacht ist erforderlich und muss notariell beglaubigt und durch die VAE-Botschaft legalisiert werden",

    mitgliedschaften: ["Pariser Übereinkunft (seit 1996)", "WTO/TRIPS", "Madrid-Protokoll (seit 2021)"],

    priorityDeadlineMonths: 6, // 6 Monate nach PVÜ
    priorityDocumentDeadlineMonths: 3, // Prioritätsdokument mit arabischer Übersetzung

    usageProofType: "Nachweis nur auf Antrag Dritter erforderlich",
    usageDeclarationType: "Keine regelmäßige Benutzungserklärung erforderlich",
    usageProofDeadlineYears: 5,
    usageDeclarationDeadlineYears: null, // Nicht anwendbar
    lateFilingMonths: 0, // Keine spezifische Nachfrist
    filingPeriodStart: "Nach Antrag eines Dritten",

    additionalNotes:
      "Marken in arabischer Schrift und transliterierte Marken genießen besonderen Schutz. Die VAE untersagen die Registrierung bestimmter Inhalte (z.B. Alkohol-bezogene Marken erhalten keine Registrierung in Klassennamen). Verstöße gegen öffentliche Moral und Religion führen zur Zurückweisung. 3D-Marken und Geräuschmarken sind registrierbar, Duftmarken jedoch (noch) nicht.",
  }),
  // Usbekistan
  createCategorizedCountry("UZ", "Usbekistan", "Asien", "direct", {
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
    poaHinweise: "Notariell beglaubigte und legalisierte Vollmacht erforderlich.",

    mitgliedschaften: ["WIPO", "Pariser Übereinkunft", "TRIPS", "Madrid-Protokoll"],

    priorityDeadlineMonths: 6, // Prioritätsfrist von 6 Monaten
    priorityDocumentDeadlineMonths: 3,

    additionalNotes:
      "Markenregistrierungen in Usbekistan sind für 10 Jahre gültig und können für weitere 10-Jahres-Perioden verlängert werden. Die Registrierung erfolgt beim Agency on Intellectual Property of the Republic of Uzbekistan. Usbekistan ist Mitglied des Madrid-Protokolls. Eine Marke kann nach 3 Jahren Nichtbenutzung angefochten werden.",
  }),
  // Vietnam
  createCategorizedCountry("VN", "Vietnam", "Asien", "direct", {
    calculationBasis: "application",
    protectionPeriod: 10, // Schutzdauer: 10 Jahre ab Anmeldedatum

    renewalStartMonths: 6, // Frühestens 6 Monate vor Ablauf der 10-Jahres-Frist
    renewalDeadlineMonths: 0, // Bis zum Tag des Ablaufs
    lateRenewalMonths: 6, // Nachfrist von 6 Monaten nach Ablauf unter Zahlung einer Strafgebühr

    usageProofRequired: false, // Keine regelmäßige Benutzungserklärung erforderlich
    usageProofYears: 5, // Nach 5 Jahren Nichtbenutzung kann eine Marke auf Antrag gelöscht werden

    usageDeclarationRequired: false, // Keine regelmäßige Benutzungserklärung abzugeben
    usageDeclarationYears: [], // Keine spezifischen Jahre

    vertreterRequired: "Ja", // Ausländische Anmelder müssen sich durch einen zugelassenen lokalen IP-Agenten vertreten lassen
    prufungsumfang: "Umfassend", // Prüfung in zwei Stufen: Formalprüfung, dann Sachprüfung auf absolute und relative Hindernisse
    widerspruch: "Ja", // Nach Veröffentlichung der Anmeldung bis zum Abschluss der Sachprüfung kann jeder Dritte Oppositionsgründe einreichen

    poaVertreterRequired: "Ja", // Für ausländische Anmelder erforderlich
    poaDigitalCopy: "Ja", // Eingescannte unterschriebene POA wird für die Einreichung akzeptiert
    poaOriginalRequired: "Ja", // Sofern das Original bei Bedarf nachgereicht wird
    poaDigitalSignature: "Ja", // Digitale Signatur wird akzeptiert
    poaNotarization: "Nein", // Keine Notarisierung erforderlich
    poaApostille: "Nein", // Keine Legalisation erforderlich
    poaHinweise: "Eine schriftliche Vollmacht ist nötig, jedoch ist weder Notarisierung noch Legalisation erforderlich",

    mitgliedschaften: [
      "Pariser Verbandsübereinkunft (seit 1949)",
      "Madrid-Protokoll (seit 2006)",
      "Madrider Abkommen (seit 1939)",
      "Nizza-Klassifikation",
    ],

    priorityDeadlineMonths: 6, // 6 Monate nach einer früheren Auslandanmeldung
    priorityDocumentDeadlineMonths: 1, // Ein beglaubigter Prioritätsbeleg mit Übersetzung muss mit eingereicht oder binnen 1 Monat nachgereicht werden

    usageProofType: "Nachweis nur auf Antrag Dritter erforderlich",
    usageDeclarationType: "Keine regelmäßige Benutzungserklärung erforderlich",
    usageProofDeadlineYears: 5,
    usageDeclarationDeadlineYears: null, // Nicht anwendbar
    lateFilingMonths: 0, // Keine spezifische Nachfrist
    filingPeriodStart: "Nach Antrag eines Dritten",

    additionalNotes:
      "Vietnam verlangt zur Markeneintragung keine tatsächliche Nutzung (man kann auch defensiv anmelden). Allerdings wird Marken-Bösgläubigkeit bekämpft – bekannte Marken Dritter werden bei Anmeldung ohne rechtfertigenden Grund abgelehnt. Das vietnamesische Markenrecht (IP Law 2005, zuletzt 2022 novelliert) sieht zudem Schutz für Kollektiv- und Zertifizierungsmarken vor.",
  }),
  // Irak
  createCategorizedCountry("IQ", "Irak", "Asien", "direct", {
    calculationBasis: "registration",
    protectionPeriod: 10, // Schutzdauer: 10 Jahre ab Registrierungsdatum

    renewalStartMonths: 6, // Verlängerungsantrag kann 6 Monate vor Ablauf gestellt werden
    renewalDeadlineMonths: 0, // Die Verlängerung muss bis zum Ablauf erfolgen
    lateRenewalMonths: 3, // Nachfrist von 3 Monaten für verspätete Verlängerung

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
    poaHinweise:
      "Notariell beglaubigte und legalisierte Vollmacht erforderlich, zusätzlich konsularische Beglaubigung durch die irakische Botschaft.",

    mitgliedschaften: ["WIPO", "Pariser Übereinkunft"],

    priorityDeadlineMonths: 6, // Prioritätsfrist von 6 Monaten
    priorityDocumentDeadlineMonths: 3,

    additionalNotes:
      "Markenregistrierungen im Irak sind für 10 Jahre gültig und können für weitere 10-Jahres-Perioden verlängert werden. Die Registrierung erfolgt beim Iraqi Trademark Office. Alle Dokumente müssen ins Arabische übersetzt werden. Eine Marke kann nach 5 Jahren Nichtbenutzung angefochten werden. Aufgrund der politischen Situation kann es zu Verzögerungen bei der Bearbeitung kommen.",
  }),
  // Iran
  createCategorizedCountry("IR", "Iran", "Asien", "direct", {
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
      "Notariell beglaubigte und legalisierte Vollmacht erforderlich, zusätzlich konsularische Beglaubigung durch die iranische Botschaft.",

    mitgliedschaften: ["WIPO", "Pariser Übereinkunft", "Madrid-Abkommen", "Madrid-Protokoll"],

    priorityDeadlineMonths: 6, // Prioritätsfrist von 6 Monaten
    priorityDocumentDeadlineMonths: 3,

    additionalNotes:
      "Markenregistrierungen im Iran sind für 10 Jahre gültig und können für weitere 10-Jahres-Perioden verlängert werden. Die Registrierung erfolgt beim Intellectual Property Center of Iran. Der Iran ist sowohl Mitglied des Madrid-Abkommens als auch des Madrid-Protokolls. Alle Dokumente müssen ins Persische übersetzt werden. Eine Marke kann nach 3 Jahren Nichtbenutzung angefochten werden. Aufgrund internationaler Sanktionen können Schwierigkeiten bei der Anmeldung und Aufrechterhaltung von Markenrechten auftreten.",
  }),
  // Israel
  createCategorizedCountry("IL", "Israel", "Asien", "direct", {
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
    poaDigitalCopy: "Ja", // Digitale Kopie kann ausreichend sein
    poaOriginalRequired: "Nein", // Original der Vollmacht nicht zwingend erforderlich
    poaDigitalSignature: "Ja", // Digitale Signatur kann akzeptiert werden
    poaNotarization: "Nein", // Keine notarielle Beglaubigung erforderlich
    poaApostille: "Nein", // Keine Apostille erforderlich
    poaHinweise: "Einfach unterschriebene Vollmacht ist ausreichend, auch als Kopie oder mit digitaler Signatur.",

    mitgliedschaften: ["WIPO", "Pariser Übereinkunft", "TRIPS", "Madrid-Protokoll"],

    priorityDeadlineMonths: 6, // Prioritätsfrist von 6 Monaten
    priorityDocumentDeadlineMonths: 3,

    additionalNotes:
      "Markenregistrierungen in Israel sind für 10 Jahre gültig und können für weitere 10-Jahres-Perioden verlängert werden. Die Registrierung erfolgt beim Israel Patent Office (ILPO). Israel ist seit 2010 Mitglied des Madrid-Protokolls. Eine Marke kann nach 5 Jahren Nichtbenutzung angefochten werden. Israel hat ein modernes und effizientes Markensystem mit Online-Einreichungsmöglichkeiten.",
  }),
  // Jordanien
  createCategorizedCountry("JO", "Jordanien", "Asien", "direct", {
    calculationBasis: "registration",
    protectionPeriod: 10, // Schutzdauer: 10 Jahre ab Registrierungsdatum

    renewalStartMonths: 6, // Verlängerungsantrag kann 6 Monate vor Ablauf gestellt werden
    renewalDeadlineMonths: 0, // Die Verlängerung muss bis zum Ablauf erfolgen
    lateRenewalMonths: 12, // Nachfrist von 12 Monaten für verspätete Verlängerung

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
      "Notariell beglaubigte und legalisierte Vollmacht erforderlich, zusätzlich konsularische Beglaubigung durch die jordanische Botschaft.",

    mitgliedschaften: ["WIPO", "Pariser Übereinkunft", "TRIPS", "Madrid-Protokoll"],

    priorityDeadlineMonths: 6, // Prioritätsfrist von 6 Monaten
    priorityDocumentDeadlineMonths: 3,

    additionalNotes:
      "Markenregistrierungen in Jordanien sind für 10 Jahre gültig und können für weitere 10-Jahres-Perioden verlängert werden. Die Registrierung erfolgt beim Industrial Property Protection Directorate (IPPD). Jordanien ist seit 2022 Mitglied des Madrid-Protokolls. Alle Dokumente müssen ins Arabische übersetzt werden. Eine Marke kann nach 3 Jahren Nichtbenutzung angefochten werden.",
  }),
  // Libanon
  createCategorizedCountry("LB", "Libanon", "Asien", "direct", {
    calculationBasis: "registration",
    protectionPeriod: 15, // Schutzdauer: 15 Jahre ab Registrierungsdatum

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
      "Notariell beglaubigte und legalisierte Vollmacht erforderlich, mit konsularischer Beglaubigung durch die libanesische Botschaft.",

    mitgliedschaften: ["WIPO", "Pariser Übereinkunft", "TRIPS", "Madrid-Abkommen"],

    priorityDeadlineMonths: 6, // Prioritätsfrist von 6 Monaten
    priorityDocumentDeadlineMonths: 3,

    additionalNotes:
      "Markenregistrierungen im Libanon sind für 15 Jahre gültig und können für weitere 15-Jahres-Perioden verlängert werden. Die Registrierung erfolgt beim Intellectual Property Office im Ministry of Economy and Trade. Der Libanon ist Mitglied des Madrid-Abkommens. Alle Dokumente müssen ins Arabische übersetzt werden. Eine Marke kann nach 3 Jahren Nichtbenutzung angefochten werden.",
  }),
  // Syrien
  createCategorizedCountry("SY", "Syrien", "Asien", "direct", {
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
      "Notariell beglaubigte und legalisierte Vollmacht erforderlich, mit konsularischer Beglaubigung durch die syrische Botschaft.",

    mitgliedschaften: ["WIPO", "Pariser Übereinkunft", "Madrid-Abkommen"],

    priorityDeadlineMonths: 6, // Prioritätsfrist von 6 Monaten
    priorityDocumentDeadlineMonths: 3,

    additionalNotes:
      "Markenregistrierungen in Syrien sind für 10 Jahre gültig und können für weitere 10-Jahres-Perioden verlängert werden. Die Registrierung erfolgt beim Directorate of Commercial and Industrial Property Protection. Syrien ist Mitglied des Madrid-Abkommens. Alle Dokumente müssen ins Arabische übersetzt werden. Eine Marke kann nach 3 Jahren Nichtbenutzung angefochten werden. Aufgrund der politischen Situation kann es zu erheblichen Verzögerungen bei der Bearbeitung kommen.",
  }),
  // Qatar
  createCategorizedCountry("QA", "Katar", "Asien", "direct", {
    calculationBasis: "application",
    protectionPeriod: 10, // Schutzdauer: 10 Jahre ab dem Anmeldedatum

    renewalStartMonths: 6, // Innerhalb der letzten 6 Monate vor Ablauf
    renewalDeadlineMonths: 0, // Bis zum Ablauf der Schutzfrist
    lateRenewalMonths: 2, // 60-tägige Nachfrist mit Strafgebühr

    usageProofRequired: false, // Keine Benutzungserklärung erforderlich
    usageProofYears: 5, // Nach 5 Jahren ununterbrochener Nichtbenutzung kann ein Dritter die Löschung beantragen

    usageDeclarationRequired: false, // Keine Benutzungserklärung erforderlich
    usageDeclarationYears: [], // Keine spezifischen Jahre

    vertreterRequired: "Ja", // Ausländische Anmelder müssen einen in Katar zugelassenen Vertreter bestellen
    prufungsumfang: "Umfassend", // Prüfung auf formale, absolute und relative Hindernisse
    widerspruch: "Ja", // Widerspruchsfrist von 60 Tagen ab Veröffentlichung

    poaVertreterRequired: "Ja", // Für ausländische Anmelder erforderlich
    poaDigitalCopy: "Ja", // Wird zunächst akzeptiert
    poaOriginalRequired: "Ja", // Original erforderlich
    poaDigitalSignature: "Nein", // Digitale Signatur nicht ausreichend
    poaNotarization: "Ja", // Notarielle Beglaubigung erforderlich
    poaApostille: "Ja", // Konsularische Legalisierung erforderlich
    poaHinweise: "Die Vollmacht muss notariell beglaubigt und konsularisch legalisiert sein durch die Botschaft Katars",

    mitgliedschaften: [
      "Pariser Übereinkunft (seit 2000)",
      "Madrid-Protokoll (seit 2011)",
      "GCC-Markengesetz (seit 2016)",
    ],

    priorityDeadlineMonths: 6, // 6 Monate nach PVÜ
    priorityDocumentDeadlineMonths: 3, // Prioritätsnachweis mit arabischer Übersetzung

    usageProofType: "Nachweis nur auf Antrag Dritter erforderlich",
    usageDeclarationType: "Keine regelmäßige Benutzungserklärung erforderlich",
    usageProofDeadlineYears: 5,
    usageDeclarationDeadlineYears: null, // Nicht anwendbar
    lateFilingMonths: 0, // Keine spezifische Nachfrist
    filingPeriodStart: "Nach Antrag eines Dritten",

    additionalNotes:
      "Katar verlangt bei Marken in nicht-arabischer Sprache eine arabische Übersetzung/Transkription im Antrag anzugeben. Bestimmte Begriffe (z.B. religiöse Worte, staatliche Symbole) sind von der Registrierung ausgeschlossen. Katar hat 2016 das einheitliche GCC-Markengesetz implementiert, das in den Golfstaaten harmonisierte Regelungen bringt.",
  }),
  // Malaysia
  createCategorizedCountry("MY", "Malaysia", "Asien", "direct", {
    calculationBasis: "application",
    protectionPeriod: 10, // Schutzdauer: 10 Jahre ab Anmeldetag (nach neuem MarkenG 2019, zuvor ab Eintragung)

    renewalStartMonths: 6, // Innerhalb 6 Monaten vor Ablauf
    renewalDeadlineMonths: 0, // Bis zum Tag des Ablaufs
    lateRenewalMonths: 6, // 6-monatige Nachfrist mit Aufpreis

    usageProofRequired: false, // Keine regelmäßige Nachweispflicht
    usageProofYears: 3, // Nach 3 Jahren nach der Registrierung ohne bona fide Benutzung kann ein Dritter die Löschung beantragen

    usageDeclarationRequired: false, // Kein formeller Nutzungsnachweis beim Amt einzureichen
    usageDeclarationYears: [], // Keine spezifischen Jahre

    vertreterRequired: "Ja", // Ausländische Anmelder ohne lokalen Wohnsitz müssen einen malaysischen IP-Agenten beauftragen
    prufungsumfang: "Umfassend", // Prüfung auf absolute und relative Hindernisse
    widerspruch: "Ja", // Nach Veröffentlichung beträgt die Einspruchsfrist 2 Monate (verlängerbar um weitere 2 Monate)

    poaVertreterRequired: "Ja", // Für ausländische Anmelder erforderlich
    poaDigitalCopy: "Ja", // Wird akzeptiert
    poaOriginalRequired: "Nein", // Original nicht erforderlich
    poaDigitalSignature: "Ja", // Digitale Signatur wird akzeptiert
    poaNotarization: "Nein", // Keine notarielle Beglaubigung erforderlich
    poaApostille: "Nein", // Keine Apostille erforderlich
    poaHinweise:
      "Eine schriftliche Vollmacht ist erforderlich, aber eine einfache unterschriebene POA reicht (keine Notarisierung)",

    mitgliedschaften: [
      "Madrid-Protokoll (seit 2019)",
      "Pariser Verbandsübereinkunft (seit 2012)",
      "WTO/TRIPS",
      "Nizza-Klassifikation",
    ],

    priorityDeadlineMonths: 6, // 6 Monate Priorität gemäß PVÜ
    priorityDocumentDeadlineMonths: 3, // Übliche Frist für Prioritätsbelege

    usageProofType: "Nachweis nur auf Antrag Dritter erforderlich",
    usageDeclarationType: "Keine regelmäßige Benutzungserklärung erforderlich",
    usageProofDeadlineYears: 3,
    usageDeclarationDeadlineYears: null, // Nicht anwendbar
    lateFilingMonths: 0, // Keine spezifische Nachfrist
    filingPeriodStart: "Nach Antrag eines Dritten",

    additionalNotes:
      "Eine Besonderheit Malaysias ist die Einführung von nicht-traditionellen Marken im neuen Gesetz (Farben, Gerüche, Klang etc., sofern darstellbar). Außerdem gibt es kein Erfordernis tatsächlicher Nutzung zur Anmeldung mehr (früher war ein 'Absicht zu nutzen'-Prinzip). Seit dem neuen Gesetz sind Mehrklassenanmeldungen zugelassen.",
  }),
]
