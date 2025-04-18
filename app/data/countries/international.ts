import { createExtendedCountry } from "./country-utils"

export const internationalOrganizations = [
  // Nur eine Version von WIPO behalten
  createExtendedCountry("IB", "Internationale Registrierung (WIPO)", "International", "wipo", {
    // Neue Felder aus der zweiten Tabelle
    priorityDeadlineMonths: 6,
    priorityDocumentDeadlineMonths: 3,
    representativeRequired: "Basis",
    digitalCopyPOA: "k.A.",
    originalPOA: "k.A.",
    digitalSignaturePOA: "k.A.",
    notarizationPOA: "k.A.",
    apostillePOA: "k.A.",
    // Neue Felder aus der Benutzungsnachweise-Tabelle
    usageProofType: "Nach Landesrecht",
    usageDeclarationType: "Nach Landesrecht",
    usageProofDeadlineYears: "Nach Landesrecht",
    usageDeclarationDeadlineYears: "Nach Landesrecht",
    lateFilingMonths: 6,
    filingPeriodStart: "Jederzeit",
  }),
  // Weitere internationale Organisationen...
  createExtendedCountry("AN", "Andengemeinschaft", "International", "direct", {
    calculationBasis: "registration",
  }),
  createExtendedCountry("GC", "GCC", "International", "gcc", {
    calculationBasis: "registration",
  }),
  // Füge Antarktis mit den korrekten Regeln hinzu
  createExtendedCountry("AQ", "Antarktis", "Antarktis", "direct", {
    calculationBasis: "keine",
    protectionPeriod: 0, // Kein nationales Markenrecht vorhanden

    renewalStartMonths: 0, // Nicht anwendbar
    renewalDeadlineMonths: 0, // Nicht anwendbar
    lateRenewalMonths: 0, // Nicht anwendbar

    usageProofRequired: false, // Nicht anwendbar

    usageDeclarationRequired: false, // Nicht anwendbar
    usageDeclarationYears: [], // Nicht anwendbar

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

// Neue internationale Länder hinzufügen
export const internationalCountries = [
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
      "Unterbleibt die Nutzungserklärung, fällt eine zusätzliche Strafgebühr an und die Marke kann vor Verlängerung für verfallen erklärt werden. Ohne inländischen Vertreter droht der Markeneintrag gem. Art. 218 arg. MarkenG zu erlöschen. Argentinien verlangt die Zahlung einer Eintragungsgebühr nach Erteilung (für das erste 10-Jahres-Schutzjahrzehnt). Für Markeninhaber besteht zudem eine fortlaufende Aktualisierungspflicht: Auslandsdomizilierte Inhaber müssen stets einen inländischen Zustellungsbevollmächtigten aufrechterhalten. Argentinien verwendet die Nizza-Klassifikation (seit 2007) und erlaubt Mehrklassenanmeldungen.",
  }),

  createExtendedCountry("AU", "Australien", "Australien/Ozeanien", "direct", {
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

  createExtendedCountry("CA", "Kanada", "Nordamerika", "direct", {
    calculationBasis: "registration",
    protectionPeriod: 10, // Schutzdauer: 10 Jahre ab Eintragung

    renewalStartMonths: 6, // Der Verlängerungsantrag kann 6 Monate vor Ablauf gestellt werden
    renewalDeadlineMonths: 0, // Bis zum Tag des Ablaufs
    lateRenewalMonths: 6, // Bis zu 6 Monate nach Ablauf nachträglich eingereicht werden

    usageProofRequired: false, // Es muss kein formaler Nutzungsnachweis erbracht werden
    usageProofYears: 3, // Ab 3 Jahren nach Eintragung kann ein Section 45-Verfahren eingeleitet werden

    usageDeclarationRequired: false, // Keine Pflicht zur Benutzungsdeklaration
    usageDeclarationYears: [], // Keine spezifischen Jahre

    vertreterRequired: "Nein", // Es besteht keine gesetzliche Anwaltspflicht für Ausländer
    prufungsumfang: "Umfassend", // Vollprüfung auf absolute und relative Schutzhindernisse
    widerspruch: "Ja", // Innerhalb von 2 Monaten nach Veröffentlichung kann jeder Dritte Widerspruch einlegen

    poaVertreterRequired: "Nein", // Keine formelle Vollmacht erforderlich
    poaDigitalCopy: "Ja", // Wird akzeptiert, falls benötigt
    poaOriginalRequired: "Nein", // Original nicht erforderlich
    poaDigitalSignature: "Ja", // Digitale Signatur wird akzeptiert
    poaNotarization: "Nein", // Keine notarielle Beglaubigung erforderlich
    poaApostille: "Nein", // Keine Apostille erforderlich
    poaHinweise:
      "Eine separate Vollmacht muss dem CIPO nicht vorgelegt werden (die Benennung des Anwalts/Agents im Antragsformular genügt)",

    mitgliedschaften: [
      "WIPO (seit 1970)",
      "Pariser Übereinkommen (seit 1928)",
      "WTO/TRIPS (seit 1995)",
      "Madrid-Protokoll (seit 17.06.2019)",
    ],

    priorityDeadlineMonths: 6, // 6 Monate gemäß PVÜ
    priorityDocumentDeadlineMonths: 0, // Eine beglaubigte Kopie der ausländischen Anmeldung kann vom Prüfer nachträglich angefordert werden

    usageProofType: "Eidesstattliche Erklärung über Benutzung (bei Antrag)",
    usageDeclarationType: "Keine regelmäßige Benutzungserklärung erforderlich",
    usageProofDeadlineYears: 3,
    usageDeclarationDeadlineYears: null,
    lateFilingMonths: 0, // Keine spezifische Nachfrist
    filingPeriodStart: "Nach Antrag eines Dritten (3 Monate Frist)",

    additionalNotes:
      "Besonderheit: Wenn die Marke innerhalb der Nachfrist verlängert wird, fällt in Kanada keine Verspätungsgebühr an. Allerdings muss jeder Anmelder eine kanadische Anschrift für Zustellungen angeben. Seit 2019 fordert CIPO bei Verfahren häufig die Angabe einer in Kanada oder im 'NAFTA-Raum' ansässigen Zustelladresse. Kanada hat 2019 auf ein Klassen-System umgestellt (Nizza-Klassifikation); bei Verlängerung vor 2019 eingetragener Marken muss der Inhaber seine Waren/Dienstleistungen in Klassen einteilen.",
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

  createExtendedCountry("CN", "China", "Asien", "direct", {
    calculationBasis: "registration",
    protectionPeriod: 10, // Schutzdauer: 10 Jahre ab dem Datum der Registrierung (Bewilligung)

    renewalStartMonths: 12, // Der Verlängerungsantrag ist 12 Monate vor Schutzende beim CNIPA einreichbar
    renewalDeadlineMonths: 0, // Bis zum Tag des Ablaufs
    lateRenewalMonths: 6, // Nach Ablauf gewährt das Gesetz eine Nachfrist von 6 Monaten (grace period)

    usageProofRequired: false, // Es besteht keine turnusmäßige Nachweispflicht
    usageProofYears: 3, // War die Marke 3 Jahre ununterbrochen ab Registrierung nicht im geschäftlichen Ernstgebrauch in China

    usageDeclarationRequired: false, // Keine turnusmäßige Benutzungserklärung erforderlich
    usageDeclarationYears: [], // Keine spezifischen Jahre

    vertreterRequired: "Ja", // Ausländische Anmelder ohne Wohnsitz oder Hauptgeschäftssitz in China müssen einen Inlandsvertreter beauftragen
    prufungsumfang: "Umfassend", // Strenge Sachprüfung auf absolute und relative Hindernisse
    widerspruch: "Ja", // Binnen 3 Monaten ab dem Publikationsdatum kann jedermann Widerspruch gegen die Eintragung einlegen

    poaVertreterRequired: "Ja", // Vollmacht erforderlich
    poaDigitalCopy: "Ja", // Wird akzeptiert
    poaOriginalRequired: "Nein", // Original nicht erforderlich
    poaDigitalSignature: "Ja", // Digitale Signatur wird akzeptiert
    poaNotarization: "Nein", // Keine notarielle Beglaubigung erforderlich
    poaApostille: "Nein", // Keine Apostille erforderlich
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

    priorityDeadlineMonths: 6, // 6 Monate gemäß PVÜ
    priorityDocumentDeadlineMonths: 3, // Eine Kopie der ausländischen Anmeldung ist innerhalb von 3 Monaten nach Einreichung nachzureichen

    usageProofType: "Benutzungserklärung mit Belegen auf Antrag",
    usageDeclarationType: "Keine regelmäßige Benutzungserklärung erforderlich",
    usageProofDeadlineYears: 3,
    usageDeclarationDeadlineYears: null,
    lateFilingMonths: 0, // Keine spezifische Nachfrist
    filingPeriodStart: "Nach Antrag eines Dritten (2-3 Monate Frist)",

    additionalNotes:
      "China legt einen strengen Maßstab an Benutzungsnachweise an (Nachweise müssen den kommerziellen Vertrieb der markierten Waren/Dienstleistungen in China belegen). China folgt dem 'First-to-file'-Prinzip, Marken entstehen also nur durch Registrierung. Eine Besonderheit ist das System der Markenkategorien: Schutz erstreckt sich nur auf die angemeldeten Klassen. Marken in lateinischer Schrift gewähren nicht automatisch Schutz für chinesische Schriftzeichen.",
  }),

  createExtendedCountry("FR", "Frankreich", "Europa", "direct", {
    calculationBasis: "application",
    protectionPeriod: 10, // Schutzdauer: 10 Jahre ab Anmeldetag (frz. Marken = dépôt national)

    renewalStartMonths: 12, // Der Verlängerungsantrag kann 1 Jahr vor Ablauf gestellt werden
    renewalDeadlineMonths: 0, // Die Verlängerungsgebühr muss spätestens zum Ablauftag bezahlt sein
    lateRenewalMonths: 6, // Danach gewährt das französische Markenamt INPI eine Nachfrist von 6 Monaten gegen Zuschlag

    usageProofRequired: false, // Es besteht keine automatische Einreichpflicht
    usageProofYears: 5, // Ist eine Marke 5 Jahre nach Eintragung nicht ernsthaft benutzt worden

    usageDeclarationRequired: false, // Keine regelmäßige Benutzungserklärung erforderlich
    usageDeclarationYears: [], // Keine spezifischen Jahre

    vertreterRequired: "Ja", // Anmelder mit Sitz außerhalb der EU oder des EWR müssen einen in der EU/EWR niedergelassenen Vertreter bestellen
    prufungsumfang: "Beschränkt", // Formal- und absolute Prüfung; keine Ex-officio-Relativeprüfung
    widerspruch: "Ja", // Nach Veröffentlichung der Anmeldung im BOPI kann binnen 2 Monaten ab Publikationsdatum Widerspruch erhoben werden

    poaVertreterRequired: "Ja", // Für Anmelder außerhalb EU/EWR
    poaDigitalCopy: "Ja", // Wird akzeptiert
    poaOriginalRequired: "Nein", // Original nicht erforderlich
    poaDigitalSignature: "Ja", // Digitale Signatur wird akzeptiert
    poaNotarization: "Nein", // Keine notarielle Beglaubigung erforderlich
    poaApostille: "Nein", // Keine Apostille erforderlich
    poaHinweise:
      "Eine schriftliche Vollmacht ist für zugelassene Anwälte/Bevollmächtigte nicht vorzulegen (die Vorlagepflicht wurde 2004 abgeschafft)",

    mitgliedschaften: [
      "WIPO-Gründungsmitglied (seit 1970)",
      "PVÜ-Urmitglied (seit 1884)",
      "WTO/TRIPS (1995 über EU-Beitritt)",
      "Madrid-Abkommen (seit 1891)",
      "Madrid-Protokoll (seit 1997)",
      "Nizza-Abkommen (seit 1961)",
    ],

    priorityDeadlineMonths: 6, // 6 Monate gemäß PVÜ
    priorityDocumentDeadlineMonths: 0, // Ein Prioritätsbeleg muss nur auf Verlangen des INPI eingereicht werden

    usageProofType: "Nachweis nur auf Antrag Dritter erforderlich",
    usageDeclarationType: "Keine regelmäßige Benutzungserklärung erforderlich",
    usageProofDeadlineYears: 5,
    usageDeclarationDeadlineYears: null,
    lateFilingMonths: 0, // Keine spezifische Nachfrist
    filingPeriodStart: "Nach Antrag eines Dritten (3 Monate Frist)",

    additionalNotes:
      "Frankreich kennt seit 2020 ein amtliches Löschungsverfahren (Action en déchéance ou nullité auprès de l'INPI). Im Verletzungsverfahren kann nach 5 Jahren ohne Benutzung kein Unterlassungsanspruch geltend gemacht werden. Die Anmeldung wird sofort nach Antragseingang veröffentlicht (in BOPI innerhalb ca. 6 Wochen). Frankreich akzeptiert Mehrklassenanmeldungen; die Gebühren fallen ab der 4. Klasse gestaffelt an.",
  }),
]
