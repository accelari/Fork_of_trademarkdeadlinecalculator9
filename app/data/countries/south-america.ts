import { createExtendedCountry } from "./country-utils"

export const southAmericanCountries = [
  createExtendedCountry("AR", "Argentinien", "Südamerika", "direct", {
    calculationBasis: "registration",
    protectionPeriod: 10, // Schutzdauer: 10 Jahre ab Eintragungsdatum

    renewalStartMonths: 6, // Verlängerungsantrag innerhalb von 6 Monaten vor Ablauf der Schutzdauer möglich
    renewalDeadlineMonths: 0, // Bis zum Tag des Ablaufs
    lateRenewalMonths: 6, // Bei versäumter Frist kann innerhalb von 6 Monaten nach Schutzende mit Zuschlagsgebühr verlängert werden

    usageProofRequired: true, // Verwendungszwang! Eine eingetragene Marke muss benutzt werden
    usageProofYears: 5, // Die Marke 5 Jahre lang ununterbrochen nicht benutzt wurde

    usageDeclarationRequired: true, // Es besteht die Pflicht, eine eidesstattliche Nutzungserklärung (Declaración de Uso) einzureichen
    usageDeclarationYears: [5], // Zwischen dem 5. und 6. Jahr nach der Eintragung

    vertreterRequired: "Ja", // Ausländische Anmelder müssen einen in Argentinien ansässigen Markenvertreter benennen
    prufungsumfang: "Umfassend", // Das argentinische Markenamt (INPI) prüft formale und absolute Schutzhindernisse sowie relative Konflikte
    widerspruch: "Ja", // Nach Veröffentlichung der Anmeldung im Markenblatt kann binnen 30 Tagen jeder Dritte mit berechtigtem Interesse Widerspruch einlegen

    poaVertreterRequired: "Ja", // Hierfür ist eine Vollmacht erforderlich
    poaDigitalCopy: "Ja", // Die Vollmacht kann formfrei erteilt werden
    poaOriginalRequired: "Nein", // Original nicht zwingend erforderlich
    poaDigitalSignature: "Ja", // Digitale Signatur wird akzeptiert
    poaNotarization: "Nein", // Keine notarielle Beglaubigung erforderlich (ohne Notar)
    poaApostille: "Nein", // Keine Apostille erforderlich
    poaHinweise:
      "Die Vollmacht kann formfrei (ohne Notar/Apostille) erteilt werden, doch kann das Amt im Einzelfall eine legalisierte Fassung verlangen",

    mitgliedschaften: [
      "WIPO (seit 1980)",
      "Pariser Verbandsübereinkunft (PVÜ, seit 1967)",
      "WTO/TRIPS (seit 1995)",
      "Madrid-System: kein Mitglied",
    ],

    priorityDeadlineMonths: 6, // 6 Monate ab erster Anmeldung im Ausland (PVÜ)
    priorityDocumentDeadlineMonths: 3, // Innerhalb von 90 Tagen durch Vorlage der ausländischen Anmeldeunterlagen mit spanischer Übersetzung

    usageProofType: "Nachweis nur auf Antrag Dritter erforderlich",
    usageDeclarationType: "Eidesstattliche Nutzungserklärung (Declaración de Uso)",
    usageProofDeadlineYears: 5,
    usageDeclarationDeadlineYears: 5,
    lateFilingMonths: 0, // Keine spezifische Nachfrist für Nutzungserklärung erwähnt
    filingPeriodStart: "Zwischen dem 5. und 6. Jahr nach Eintragung",

    additionalNotes:
      "Unterbleibt die Nutzungserklärung, fällt eine zusätzliche Strafgebühr an und die Marke kann vor Verlängerung für verfallen erklärt werden. Ohne inländischen Vertreter droht der Markeneintrag gem. Art. 218 arg. MarkenG zu erlöschen. Argentinien verlangt die Zahlung einer Eintragungsgebühr nach Erteilung (für das erste 10-Jahres-Schutzjahrzehnt). Für Markeninhaber besteht zudem eine fortlaufende Aktualisierungspflicht: Auslandsdomizierte Inhaber müssen stets einen inländischen Zustellungsbevollmächtigten aufrechterhalten. Argentinien verwendet die Nizza-Klassifikation (seit 2007) und erlaubt Mehrklassenanmeldungen.",
  }),

  createExtendedCountry("BR", "Brasilien", "Südamerika", "direct", {
    calculationBasis: "registration",
    protectionPeriod: 10, // Schutzdauer: 10 Jahre ab Registrierung (Publikation der Erteilung)

    renewalStartMonths: 12, // Der Verlängerungsantrag muss im letzten Schutzjahr gestellt werden
    renewalDeadlineMonths: 0, // Bis zum Tag des Ablaufs
    lateRenewalMonths: 6, // Innerhalb von 6 Monaten nach Ablauf der Schutzdauer kann noch verlängert werden (Nachfrist)

    usageProofRequired: false, // Keine Pflicht zur regelmäßigen Einreichung von Benutzungsbelegen
    usageProofYears: 5, // Eine Marke muss innerhalb von 5 Jahren nach Registrierung in Brasilien benutzt werden

    usageDeclarationRequired: false, // Keine turnusmäßige Benutzungserklärung erforderlich
    usageDeclarationYears: [], // Keine spezifischen Jahre

    vertreterRequired: "Ja", // Ausländische Anmelder müssen einen beim brasilianischen Markenamt zugelassenen Inlandsvertreter bestellen
    prufungsumfang: "Umfassend", // Vollprüfung auf absolute und relative Hindernisse
    widerspruch: "Ja", // Nach Veröffentlichung der Anmeldung im brasilianischen Markenblatt (RPI) kann binnen 60 Tagen ein Dritter Widerspruch einlegen

    poaVertreterRequired: "Ja", // Die Bestellung erfolgt durch schriftliche Vollmacht (procuração)
    poaDigitalCopy: "Ja", // Formlose elektronische Vollmacht akzeptiert
    poaOriginalRequired: "Nein", // Original nicht zwingend erforderlich
    poaDigitalSignature: "Ja", // Digitale Signatur wird akzeptiert
    poaNotarization: "Nein", // Keine notarielle Beglaubigung erforderlich
    poaApostille: "Nein", // Keine Apostille erforderlich
    poaHinweise:
      "Die Bestellung erfolgt durch schriftliche Vollmacht; diese kann formlos (einfache Unterzeichnung) erteilt werden. Wichtig: Der inländische Vertreter muss dauerhaft aufrechterhalten werden.",

    mitgliedschaften: [
      "WIPO (seit 1974)",
      "Pariser Verbandsübereinkunft (seit 1884)",
      "WTO/TRIPS (seit 1995)",
      "Madrid-Protokoll (seit 02.10.2019)",
      "Nizza-Klassifikation (seit 1999)",
    ],

    priorityDeadlineMonths: 6, // 6 Monate ab Erstanmeldung (PVÜ)
    priorityDocumentDeadlineMonths: 4, // Innerhalb von 4 Monaten nach brasilianischer Anmeldung durch Einreichen der Prioritätsunterlagen

    usageProofType: "Nachweise auf Antrag Dritter erforderlich",
    usageDeclarationType: "Keine regelmäßige Benutzungserklärung erforderlich",
    usageProofDeadlineYears: 5,
    usageDeclarationDeadlineYears: null,
    lateFilingMonths: 0, // Keine spezifische Nachfrist
    filingPeriodStart: "Nach Antrag eines Dritten (60 Tage Frist)",

    additionalNotes:
      "Nach Art. 217 LPI führt das Fehlen eines in Brasilien ansässigen Bevollmächtigten zum Erlöschen der Registrierung. Brasilien verlangt bei Anmeldung die Zahlung einer Eintragungsgebühr nach Erteilung (für die ersten 10 Jahre). Mehrklassenanmeldungen sind nicht möglich (jede Klasse erfordert einen separaten Antrag). Die Markenrechte entstehen erst mit Eintragung ('first-to-file'-System). Für notorische bekannte Marken besteht Schutz auch ohne Eintragung (Art. 126 LPI).",
  }),

  createExtendedCountry("CL", "Chile", "Südamerika", "direct", {
    calculationBasis: "registration",
    protectionPeriod: 10, // Schutzdauer: 10 Jahre ab Registrierung (Eintragung im Markenregister)

    renewalStartMonths: 6, // Eine Verlängerung kann 6 Monate vor Ablauf beantragt werden
    renewalDeadlineMonths: 0, // Bis zum Tag des Ablaufs
    lateRenewalMonths: 6, // Bis 6 Monate nach Ablauf der 10 Jahre beantragt werden (gegen Zuschlag)

    usageProofRequired: false, // Keine regelmäßige Nachweispflicht
    usageProofYears: 5, // Neu seit 2022: Wenn die Marke 5 Jahre ab Eintragung im Inland nicht ernsthaft benutzt wurde

    usageDeclarationRequired: false, // Keine turnusmäßige Benutzungserklärung erforderlich
    usageDeclarationYears: [], // Keine spezifischen Jahre

    vertreterRequired: "Ja", // Ausländische Antragsteller müssen einen in Chile ansässigen Rechtsvertreter benennen
    prufungsumfang: "Beschränkt", // Absolute Schutzhindernisse werden geprüft, aber relative Hindernisse nicht proaktiv als Zurückweisungsgrund herangezogen
    widerspruch: "Ja", // Nach Veröffentlichung der Anmeldung im Diario Oficial läuft eine Widerspruchsfrist von 30 Tagen

    poaVertreterRequired: "Ja", // Schriftliche Vollmacht erforderlich
    poaDigitalCopy: "Ja", // Wird zunächst akzeptiert
    poaOriginalRequired: "Ja", // Auf Verlangen im Original vorzulegen
    poaDigitalSignature: "Ja", // Digitale Signatur wird akzeptiert
    poaNotarization: "Nein", // Keine notarielle Beglaubigung erforderlich
    poaApostille: "Nein", // Keine Apostille erforderlich
    poaHinweise:
      "Diese Vollmacht muss vom Markeninhaber unterzeichnet werden, bedarf aber keiner notariellen Beglaubigung oder Apostille",

    mitgliedschaften: [
      "WIPO (seit 1975)",
      "Pariser Verbandsübereinkunft (seit 1991)",
      "WTO/TRIPS (seit 1995)",
      "Madrid-Protokoll (seit 04.07.2022)",
    ],

    priorityDeadlineMonths: 6, // 6 Monate nach PVÜ
    priorityDocumentDeadlineMonths: 0, // Ein formeller Nachweis der Priorität muss nur auf ausdrückliche Aufforderung des chilenischen Amts eingereicht werden

    usageProofType: "Nachweis nur auf Antrag Dritter erforderlich",
    usageDeclarationType: "Keine regelmäßige Benutzungserklärung erforderlich",
    usageProofDeadlineYears: 5,
    usageDeclarationDeadlineYears: null,
    lateFilingMonths: 0, // Keine spezifische Nachfrist
    filingPeriodStart: "Nach Antrag eines Dritten",

    additionalNotes:
      "Für bereits bestehende Marken gilt eine Übergangsregel: Die 5-Jahres-Frist läuft ab dem nächsten Verlängerungsdatum. Neu 2022: Für Marken, die älter als 5 Jahre und unbenutzt sind, kann der Anmelder einer Oppositionsklage jetzt im selben Verfahren die Einrede der Verfallsreife erheben. Chile hat im Zuge der IP-Law-Reform 2022 viele EU-Standards übernommen. Mehrklassenanmeldungen sind zulässig.",
  }),

  // Bolivien mit aktualisierten Regeln
  createExtendedCountry("BO", "Bolivien", "Südamerika", "direct", {
    calculationBasis: "registration",
    protectionPeriod: 10, // Schutzdauer: 10 Jahre ab Registrierungsdatum

    renewalStartMonths: 6, // Verlängerungsantrag kann 6 Monate vor Ablauf gestellt werden
    renewalDeadlineMonths: 0, // Die Verlängerung muss bis zum Ablauf erfolgen
    lateRenewalMonths: 6, // Nachfrist von 6 Monaten für verspätete Verlängerung

    usageProofRequired: true, // Nutzungsnachweis erforderlich
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

    mitgliedschaften: ["WIPO", "Pariser Übereinkunft", "TRIPS", "Andenpakt"],

    priorityDeadlineMonths: 6, // Prioritätsfrist von 6 Monaten
    priorityDocumentDeadlineMonths: 3,

    additionalNotes:
      "Markenregistrierungen in Bolivien sind für 10 Jahre gültig und können für weitere 10-Jahres-Perioden verlängert werden. Die Registrierung erfolgt beim bolivianischen Patentamt (SENAPI). Eine Marke kann nach 3 Jahren Nichtbenutzung angefochten werden. Bolivien ist Mitglied des Andenabkommens (Andenpakt).",
  }),

  // Ecuador mit aktualisierten Regeln
  createExtendedCountry("EC", "Ecuador", "Südamerika", "direct", {
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

    mitgliedschaften: ["WIPO", "Pariser Übereinkunft", "TRIPS", "Andenpakt"],

    priorityDeadlineMonths: 6, // Prioritätsfrist von 6 Monaten
    priorityDocumentDeadlineMonths: 3,

    additionalNotes:
      "Markenregistrierungen in Ecuador sind für 10 Jahre gültig und können für weitere 10-Jahres-Perioden verlängert werden. Die Registrierung erfolgt beim ecuadorianischen Institut für geistiges Eigentum (SENADI). Eine Marke kann nach 3 Jahren Nichtbenutzung angefochten werden. Ecuador ist Mitglied des Andenabkommens (Andenpakt).",
  }),

  // Falklandinseln mit aktualisierten Regeln
  createExtendedCountry("FK", "Falklandinseln", "Südamerika", "direct", {
    calculationBasis: "registration",
    protectionPeriod: 7, // Schutzdauer: 7 Jahre initial ab Registrierungsdatum

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
      "Markenregistrierungen auf den Falklandinseln sind für 7 Jahre gültig und können für weitere 14-Jahres-Perioden verlängert werden (ähnlich dem alten UK-System). Die Registrierung kann entweder direkt erfolgen oder auf einer UK-Registrierung basieren. Die Anmeldung wird beim Registrar of Companies eingereicht.",
  }),

  // Französisch-Guayana mit aktualisierten Regeln
  createExtendedCountry("GF", "Französisch-Guayana", "Südamerika", "direct", {
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
      "Französisch-Guayana ist ein französisches Überseedepartement und wird von der französischen Markenregistrierung abgedeckt. Markenregistrierungen sind für 10 Jahre gültig und können für weitere 10-Jahres-Perioden verlängert werden. Eine Marke kann auf Antrag gelöscht werden, wenn sie für einen ununterbrochenen Zeitraum von 5 Jahren nicht ernsthaft genutzt wurde.",
  }),

  // Guyana mit aktualisierten Regeln
  createExtendedCountry("GY", "Guyana", "Südamerika", "direct", {
    calculationBasis: "registration",
    protectionPeriod: 7, // Schutzdauer: 7 Jahre initial ab Registrierungsdatum

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
      "Markenregistrierungen in Guyana sind initial für 7 Jahre gültig und können für weitere 14-Jahres-Perioden verlängert werden (ähnlich dem alten UK-System). Die Registrierung erfolgt beim Deeds and Commercial Registry Authority. Guyana folgt noch weitgehend dem britischen Markenrecht von 1919.",
  }),

  // Paraguay mit aktualisierten Regeln
  createExtendedCountry("PY", "Paraguay", "Südamerika", "direct", {
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

    mitgliedschaften: ["WIPO", "Pariser Übereinkunft", "TRIPS", "Mercosur"],

    priorityDeadlineMonths: 6, // Prioritätsfrist von 6 Monaten
    priorityDocumentDeadlineMonths: 3,

    additionalNotes:
      "Markenregistrierungen in Paraguay sind für 10 Jahre gültig und können für weitere 10-Jahres-Perioden verlängert werden. Die Registrierung erfolgt beim paraguayischen Amt für geistiges Eigentum (DINAPI). Eine Marke kann nach 3 Jahren Nichtbenutzung angefochten werden. Paraguay ist Mitglied des Mercosur.",
  }),

  // Peru mit aktualisierten Regeln
  createExtendedCountry("PE", "Peru", "Südamerika", "direct", {
    calculationBasis: "registration",
    protectionPeriod: 10, // Schutzdauer: 10 Jahre  "direct", {
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
    poaDigitalCopy: "Ja", // Digitale Kopie kann für die erste Einreichung ausreichend sein
    poaOriginalRequired: "Ja", // Original der Vollmacht erforderlich, kann nachgereicht werden
    poaDigitalSignature: "Nein", // Digitale Signatur nicht akzeptiert
    poaNotarization: "Ja", // Notarielle Beglaubigung erforderlich
    poaApostille: "Ja", // Apostille erforderlich
    poaHinweise:
      "Notariell beglaubigte und legalisierte Vollmacht erforderlich, kann innerhalb von 60 Tagen nach Anmeldung nachgereicht werden.",

    mitgliedschaften: ["WIPO", "Pariser Übereinkunft", "TRIPS", "Andenpakt", "Madrid-Protokoll"],

    priorityDeadlineMonths: 6, // Prioritätsfrist von 6 Monaten
    priorityDocumentDeadlineMonths: 3,

    additionalNotes:
      "Markenregistrierungen in Peru sind für 10 Jahre gültig und können für weitere 10-Jahres-Perioden verlängert werden. Die Registrierung erfolgt beim peruanischen Institut für Wettbewerbsverteidigung und Schutz des geistigen Eigentums (INDECOPI). Eine Marke kann nach 3 Jahren Nichtbenutzung angefochten werden. Peru ist Mitglied des Andenabkommens (Andenpakt) und seit 2018 des Madrid-Protokolls.",
  }),

  // Suriname mit aktualisierten Regeln
  createExtendedCountry("SR", "Suriname", "Südamerika", "direct", {
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
      "Markenregistrierungen in Suriname sind für 10 Jahre gültig und können für weitere 10-Jahres-Perioden verlängert werden. Die Registrierung erfolgt beim surinamischen Büro für geistiges Eigentum. Suriname verwendet ein an das niederländische Recht angelehntes Markensystem.",
  }),

  // Uruguay mit aktualisierten Regeln
  createExtendedCountry("UY", "Uruguay", "Südamerika", "direct", {
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

    mitgliedschaften: ["WIPO", "Pariser Übereinkunft", "TRIPS", "Mercosur"],

    priorityDeadlineMonths: 6, // Prioritätsfrist von 6 Monaten
    priorityDocumentDeadlineMonths: 3,

    additionalNotes:
      "Markenregistrierungen in Uruguay sind für 10 Jahre gültig und können für weitere 10-Jahres-Perioden verlängert werden. Die Registrierung erfolgt beim uruguayischen Amt für geistiges Eigentum (DNPI). Eine Marke kann nach 5 Jahren Nichtbenutzung angefochten werden. Uruguay ist Mitglied des Mercosur.",
  }),

  // Venezuela mit aktualisierten Regeln
  createExtendedCountry("VE", "Venezuela", "Südamerika", "direct", {
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
    poaHinweise: "Notariell beglaubigte und legalisierte Vollmacht erforderlich.",

    mitgliedschaften: ["WIPO", "Pariser Übereinkunft", "TRIPS"],

    priorityDeadlineMonths: 6, // Prioritätsfrist von 6 Monaten
    priorityDocumentDeadlineMonths: 3,

    additionalNotes:
      "Markenregistrierungen in Venezuela sind für 15 Jahre gültig und können für weitere 15-Jahres-Perioden verlängert werden. Die Registrierung erfolgt beim venezolanischen Amt für geistiges Eigentum (SAPI). Eine Marke kann nach 3 Jahren Nichtbenutzung angefochten werden. Hinweis: Venezuela ist 2006 aus dem Andenpakt ausgetreten.",
  }),

  createExtendedCountry("CO", "Kolumbien", "Südamerika", "direct", {
    calculationBasis: "registration",
    protectionPeriod: 10, // Schutzdauer: 10 Jahre ab Eintragungsdatum der Marke

    renewalStartMonths: 6, // Verlängerung sollte innerhalb der 6 Monate vor Ablauf der Schutzdauer beantragt werden
    renewalDeadlineMonths: 0, // Frist endet am Ablauftag
    lateRenewalMonths: 6, // Nachfrist von 6 Monaten mit Zuschlagsgebühr (Art. 162 Decision 486)

    usageProofRequired: false, // Keine Verpflichtung, während der Laufzeit proaktiv Nutzungsbelege vorzulegen

    usageDeclarationRequired: false, // Keine Benutzungserklärung erforderlich
    usageDeclarationYears: [], // Keine festen Zeitpunkte

    vertreterRequired: "Ja", // Ausländische Anmelder ohne Sitz in Kolumbien müssen einen lokal registrierten Markenanwalt als Zustellungsvertreter beauftragen
    prufungsumfang: "Umfassend", // Die Markenprüfung umfasst formale Prüfung, absolute und relative Schutzhindernisse
    widerspruch: "Ja", // Widerspruch innerhalb von 30 Werktagen ab Veröffentlichung

    poaVertreterRequired: "Ja", // Für ausländische Anmelder erforderlich
    poaDigitalCopy: "Ja", // Digitale Kopie wird akzeptiert
    poaOriginalRequired: "Nein", // Original nicht zwingend erforderlich
    poaDigitalSignature: "Ja", // Digitale Signatur wird akzeptiert
    poaNotarization: "Nein", // Keine notarielle Beglaubigung erforderlich seit 2012
    poaApostille: "Ja", // Apostille bei ausländischen Urkunden erforderlich
    poaHinweise:
      "Die Vollmacht muss vom Anmelder unterzeichnet sein; eine Beglaubigung oder Legalisation ist seit 2012 nicht mehr nötig, da Kolumbien der Apostille-Konvention beigetreten ist",

    mitgliedschaften: [
      "WIPO",
      "Pariser Übereinkunft",
      "TRIPS",
      "Madrid-Protokoll",
      "Nizza-Abkommen",
      "Singapur-Vertrag",
    ],

    priorityDeadlineMonths: 6,
    priorityDocumentDeadlineMonths: 3, // Das Markenamt setzt in der Regel 3 Monate zur Vorlage der Prioritätsunterlagen

    additionalNotes:
      "Jeder Dritte kann nach 5 Jahren Nichtbenutzung die Marke mit einem Verfallsantrag wegen Nichtgebrauchs angreifen (Art. 165 Decision 486). Kolumbien gewährt Schutz für Marken mit Ruf (Marca Notoria) gemäß Art. 136 lit. e Decision 486 auch über Warengruppen hinaus. Lizenzverträge über Marken müssen beim Markenamt eingetragen werden, damit sie gegenüber Dritten wirksam sind (Art. 163 Decision 486). Kolumbien ist Teil der Andengemeinschaft CAN (Comunidad Andina) und erkennt auch Ausstellungsprioritäten (6 Monate ab Ausstellung einer Ware auf einer internationalen Messe in Kolumbien oder einem PVÜ-Staat).",
  }),
]
