import { createExtendedCountry } from "./country-utils"

export const africanCountries = [
  createExtendedCountry("ZA", "Südafrika", "Afrika", "direct", {
    calculationBasis: "application",
    protectionPeriod: 10, // Schutzdauer: 10 Jahre ab Anmeldedatum

    renewalStartMonths: 12, // Innerhalb 12 Monaten vor Ablauf der Schutzfrist
    renewalDeadlineMonths: 0, // Bis zum Ablauf der Schutzfrist
    lateRenewalMonths: 6, // Nachfrist von 6 Monaten nach Ablauf

    usageProofRequired: false, // Keine Pflicht, regelmäßige Nutzungsnachweise einzureichen
    usageProofYears: 5, // Nach 5 Jahren Nichtbenutzung kann Löschungsantrag gestellt werden

    usageDeclarationRequired: false, // Keine Pflicht zur regelmäßigen Benutzungserklärung
    usageDeclarationYears: [], // Keine spezifischen Jahre

    vertreterRequired: "Ja", // Ausländische Markenanmelder ohne Wohn-/Geschäftssitz in Südafrika müssen einen Vertreter bestellen
    prufungsumfang: "Umfassend", // Prüfung auf absolute und relative Schutzhindernisse
    widerspruch: "Ja", // Innerhalb von 3 Monaten nach Veröffentlichung

    poaVertreterRequired: "Ja", // Für ausländische Anmelder erforderlich
    poaDigitalCopy: "Ja", // Wird akzeptiert
    poaOriginalRequired: "Nein", // Nicht zwingend erforderlich
    poaDigitalSignature: "Ja", // Digitale Signatur wird akzeptiert
    poaNotarization: "Nein", // Keine notarielle Beglaubigung erforderlich
    poaApostille: "Nein", // Keine Apostille erforderlich
    poaHinweise:
      "Eine schriftliche Vollmacht ist für Markenanmeldungen nach südafrikanischem Recht nicht zwingend einzureichen – die Beauftragung wird vom Vertreter formlos angezeigt",

    mitgliedschaften: ["WIPO (seit 1975)", "Pariser Verbandsübereinkunft (seit 1947)", "WTO/TRIPS (seit 1995)"],

    priorityDeadlineMonths: 6, // 6 Monate ab Erstanmeldung
    priorityDocumentDeadlineMonths: 0, // Eine offizielle Kopie der Erstanmeldung ist nur auf Anforderung vorzulegen

    usageProofType: "Nachweis nur auf Antrag Dritter erforderlich",
    usageDeclarationType: "Keine regelmäßige Benutzungserklärung erforderlich",
    usageProofDeadlineYears: 5,
    usageDeclarationDeadlineYears: null, // Nicht anwendbar
    lateFilingMonths: 0, // Keine spezifische Nachfrist
    filingPeriodStart: "Nach Antrag eines Dritten",

    additionalNotes:
      "Südafrika ist kein Mitglied des Madrider Systems. Anmeldungen müssen direkt im Land erfolgen. Das Verfahren ist gerichtszentriert - Widersprüche werden vor dem High Court verhandelt. Südafrika folgt dem Common-Law-Prinzip 'Use it or lose it'. Die südafrikanische Praxis erlaubt keine Mehrklassenanmeldungen; jede Anmeldung kann nur eine Klasse enthalten.",
  }),
  createExtendedCountry("EG", "Ägypten", "Afrika", "direct", {}),
  // Kürzere, symmetrischere Namen für die Organisationen
  createExtendedCountry("AP", "ARIPO", "Afrika", "aripo", {
    calculationBasis: "registration",
  }),
  createExtendedCountry("OA", "OAPI", "Afrika", "oapi", {
    calculationBasis: "registration",
  }),

  // Weitere afrikanische Länder
  createExtendedCountry("DZ", "Algerien", "Afrika", "direct", {
    calculationBasis: "application",
    protectionPeriod: 10, // Schutzdauer: 10 Jahre ab Anmeldetag (Loi 03-06 du 20 juillet 2003, Art. 12)

    renewalStartMonths: 6, // Verlängerungsanträge sind innerhalb der letzten 6 Monate vor Ablauf zu stellen
    renewalDeadlineMonths: 0, // Frist endet am Ablauftag
    lateRenewalMonths: 6, // Keine offizielle Nachfrist, aber oft bis zu 6 Monate Kulanz nach Ablauf gegen Zuschlag

    usageProofRequired: true, // Seit 2015 verlangt das algerische Markenamt bei jeder Verlängerung einen Benutzungsnachweis der Marke
    usageProofYears: 10, // Bei jeder Verlängerung, also nach jeweils 10 Jahren

    usageDeclarationRequired: true, // Belege für die ernsthafte Benutzung in Algerien einreichen
    usageDeclarationYears: [10, 20, 30, 40], // Bei jeder Verlängerung

    vertreterRequired: "Ja", // Ausländische Anmelder müssen einen algerischen Markenagenten bestellen
    prufungsumfang: "Umfassend", // Das INAPI prüft absolute Hindernisse und führt eine Ähnlichkeitsprüfung im Register durch
    widerspruch: "Nein", // Kein Widerspruchsverfahren vorgesehen

    poaVertreterRequired: "Ja", // Für ausländische Anmelder erforderlich
    poaDigitalCopy: "Nein", // Digitale Kopie nicht ausreichend
    poaOriginalRequired: "Ja", // Original erforderlich
    poaDigitalSignature: "Nein", // Digitale Signatur wird nicht akzeptiert
    poaNotarization: "Ja", // Amtliche Beglaubigung erforderlich
    poaApostille: "Ja", // Algerisch konsularische Legalisierung erforderlich
    poaHinweise: "Vollmacht vom Markeninhaber unterzeichnet, amtlich beglaubigt und algerisch konsularisch legalisiert",

    mitgliedschaften: ["WIPO", "Pariser Übereinkunft", "TRIPS", "Madrid-Abkommen"], // Algerien ist derzeit nur Mitglied des Madrider Abkommens, nicht des Protokolls

    priorityDeadlineMonths: 6, // Prioritätsfrist von 6 Monaten (Paris)
    priorityDocumentDeadlineMonths: 3, // Prioritätsunterlage auf Verlangen beizubringen

    additionalNotes:
      "Algerien ist eines der wenigen Länder, das aktiv Nachweise bei Verlängerung verlangt. Zur Verlängerung akzeptiert das Amt z.B. Etiketten, Verpackungen, Kataloge, Rechnungen als Gebrauchsnachweise der letzten Dekade. Diese strikte Handhabung soll 'Markengrabbing' verhindern und ungenutzte Marken freigeben. Es gibt keine Publikations- oder Oppositionsperiode vor Registrierung. Marken werden sofort eingetragen; Dritte haben erst nachträglich die Möglichkeit, mittels Klage die Löschung zu erreichen. Zusätzlich kann eine Marke auf Antrag gelöscht werden, wenn innerhalb 3 Jahren ab Eintragung keine Nutzung erfolgte (Art. 19 Loi 03-06).",
  }),
  // Füge Angola mit den korrekten Regeln hinzu
  createExtendedCountry("AO", "Angola", "Afrika", "direct", {
    calculationBasis: "application",
    protectionPeriod: 10, // Schutzdauer: 10 Jahre ab Anmeldedatum

    renewalStartMonths: 12, // Im letzten Jahr der Schutzdauer (bis unmittelbar vor Ablauf)
    renewalDeadlineMonths: 0, // Frist endet am Ablauftag
    lateRenewalMonths: 6, // Nachfrist von 6 Monaten mit 20% Zuschlag

    usageProofRequired: false, // Keine Einreichungspflicht

    usageDeclarationRequired: false, // Keine Benutzungserklärung erforderlich
    usageDeclarationYears: [], // Keine festen Zeitpunkte

    vertreterRequired: "Ja", // Ausländische Anmelder müssen durch einen in Angola zugelassenen Anwalt handeln
    prufungsumfang: "Umfassend", // Formale Prüfung und materielle Prüfung (absolute und relative Hindernisse)
    widerspruch: "Ja", // Widerspruch innerhalb 2 Monate ab Veröffentlichung der Anmeldung (verlängerbar um 30 Tage)

    poaVertreterRequired: "Ja", // Für ausländische Anmelder erforderlich
    poaDigitalCopy: "Nein", // Digitale Kopie nicht ausreichend
    poaOriginalRequired: "Ja", // Original erforderlich
    poaDigitalSignature: "Nein", // Digitale Signatur wird nicht akzeptiert
    poaNotarization: "Ja", // Notarielle Beglaubigung erforderlich
    poaApostille: "Ja", // Konsularische Legalisierung erforderlich
    poaHinweise:
      "Notariell beglaubigte und konsularisch legalisierte Vollmacht und ein legalisierter Handelsregisterauszug (bei Firmen) sind erforderlich",

    mitgliedschaften: ["WIPO", "Pariser Übereinkunft", "TRIPS"], // Kein Madrid-System

    priorityDeadlineMonths: 6, // Prioritätsfrist von 6 Monaten (Paris)
    priorityDocumentDeadlineMonths: 3, // Prioritätsunterlagen mit Übersetzung einzureichen

    additionalNotes:
      "Bereits 2 Jahre ununterbrochene Nichtbenutzung nach Registrierung begründen einen Löschungsgrund (verkürzte Schonfrist). Angola hat ein nicht-digitalisiertes Markenregister, daher lange Verfahrensdauern (2-4 Jahre bis Registrierung). Waren-/Dienstleistungsverzeichnis: max. 5 Begriffe pro Klasse sind in Grundgebühr enthalten (Einzelklassenanmeldung).",
  }),
  createExtendedCountry("BJ", "Benin", "Afrika"),
  // Füge Benin (OAPI) mit den korrekten Regeln hinzu
  createExtendedCountry("BJ", "Benin (OAPI)", "Afrika", "direct", {
    calculationBasis: "application",
    protectionPeriod: 10, // Schutzdauer: 10 Jahre ab Anmeldetag

    renewalStartMonths: 12, // Frühestens 1 Jahr vor Ablauf beantragbar
    renewalDeadlineMonths: 0, // Frist endet am Ablauftag
    lateRenewalMonths: 6, // Nachfrist von 6 Monaten mit Strafgebühr

    usageProofRequired: false, // Keine obligatorischen Nutzungsnachweise

    usageDeclarationRequired: false, // Keine Benutzungserklärung erforderlich
    usageDeclarationYears: [], // Keine festen Zeitpunkte

    vertreterRequired: "Ja", // Anmelder müssen einen beim OAPI zugelassenen Vertreter einschalten
    prufungsumfang: "Beschränkt", // Nur Formal- und Registrierung, keine materielle Prüfung (OAPI)
    widerspruch: "Ja", // Widerspruch innerhalb von 6 Monaten ab Veröffentlichung

    poaVertreterRequired: "Ja", // Vertreter in einem OAPI-Staat erforderlich
    poaDigitalCopy: "Ja", // Digitale Kopie wird akzeptiert
    poaOriginalRequired: "Ja", // Original erforderlich
    poaDigitalSignature: "Nein", // Digitale Signatur wird nicht akzeptiert
    poaNotarization: "Nein", // Keine notarielle Beglaubigung erforderlich
    poaApostille: "Nein", // Keine Legalisierung erforderlich
    poaHinweise:
      "Eine unterschriebene Vollmacht ist erforderlich, jedoch genügt einfache Unterschrift (keine Legalisation)",

    mitgliedschaften: ["WIPO", "Pariser Übereinkunft", "TRIPS", "Madrid-Protokoll"], // Madrid-Protokoll via OAPI

    priorityDeadlineMonths: 6, // Prioritätsfrist von 6 Monaten (Paris)
    priorityDocumentDeadlineMonths: 3, // Prioritätsunterlagen mit Übersetzung einzureichen

    additionalNotes:
      "Der Markenschutz für Benin erfolgt ausschließlich über OAPI. Nationale Marken sind in Benin nicht möglich. Eine OAPI-Marke gilt einheitlich in allen 17 Mitgliedstaaten. Eine Marke kann nach 5 Jahren Nichtbenutzung verfallen. Die Benutzung in einem OAPI-Mitgliedstaat genügt für den Erhalt des Schutzes in allen Mitgliedstaaten.",
  }),

  // Botswana mit aktualisierten Regeln
  createExtendedCountry("BW", "Botswana", "Afrika", "direct", {
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

    mitgliedschaften: ["WIPO", "Pariser Übereinkunft", "TRIPS", "ARIPO"],

    priorityDeadlineMonths: 6, // Prioritätsfrist von 6 Monaten
    priorityDocumentDeadlineMonths: 3,

    additionalNotes:
      "Markenregistrierungen in Botswana sind für 10 Jahre gültig und können für weitere 10-Jahres-Perioden verlängert werden. Die Registrierung erfolgt beim Companies and Intellectual Property Authority (CIPA). Eine Marke kann nach 5 Jahren Nichtbenutzung angefochten werden. Botswana ist Mitglied des ARIPO-Systems (Banjul-Protokoll).",
  }),

  // Demokratische Republik Kongo mit aktualisierten Regeln
  createExtendedCountry("CD", "Demokratische Republik Kongo", "Afrika", "direct", {
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

    mitgliedschaften: ["WIPO", "Pariser Übereinkunft", "TRIPS", "OAPI"],

    priorityDeadlineMonths: 6, // Prioritätsfrist von 6 Monaten
    priorityDocumentDeadlineMonths: 3,

    additionalNotes:
      "Markenregistrierungen in der Demokratischen Republik Kongo sind für 10 Jahre gültig und können für weitere 10-Jahres-Perioden verlängert werden. Die Registrierung erfolgt beim Department for Intellectual Property Rights. Eine Marke kann nach 3 Jahren Nichtbenutzung angefochten werden.",
  }),

  // Äquatorialguinea mit aktualisierten Regeln
  createExtendedCountry("GQ", "Äquatorialguinea", "Afrika", "direct", {
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

    mitgliedschaften: ["WIPO", "Pariser Übereinkunft", "TRIPS", "OAPI"],

    priorityDeadlineMonths: 6, // Prioritätsfrist von 6 Monaten
    priorityDocumentDeadlineMonths: 3,

    additionalNotes:
      "Äquatorialguinea ist seit 2000 Mitglied der OAPI (Organisation Africaine de la Propriété Intellectuelle). Markenregistrierungen müssen über das OAPI-System erfolgen und sind in allen Mitgliedsstaaten gültig. Registrierungen sind für 10 Jahre gültig und können für weitere 10-Jahres-Perioden verlängert werden.",
  }),

  createExtendedCountry("BF", "Burkina Faso", "Afrika"),
  // Füge Burkina Faso (OAPI) mit den korrekten Regeln hinzu
  createExtendedCountry("BF", "Burkina Faso (OAPI)", "Afrika", "direct", {
    calculationBasis: "application",
    protectionPeriod: 10, // Schutzdauer: 10 Jahre ab Anmeldetag (Filingdatum)

    renewalStartMonths: 12, // Verlängerung kann ab 12 Monaten vor Ablauf beantragt werden
    renewalDeadlineMonths: 0, // Frist endet am Ablauftag
    lateRenewalMonths: 6, // Nachfrist von 6 Monaten mit Zuschlag

    usageProofRequired: false, // Keine obligatorischen Nutzungsnachweise

    usageDeclarationRequired: false, // Keine Benutzungserklärung erforderlich
    usageDeclarationYears: [], // Keine festen Zeitpunkte

    vertreterRequired: "Ja", // Anmelder müssen einen beim OAPI zugelassenen Vertreter einschalten
    prufungsumfang: "Beschränkt", // OAPI führt nur eine Formalprüfung durch; keine Prüfung auf absolute oder relative Gründe
    widerspruch: "Ja", // Nach Veröffentlichung besteht eine Einspruchsfrist von 6 Monaten

    poaVertreterRequired: "Ja", // Für Anmelder ohne Wohnsitz in einem OAPI-Staat erforderlich
    poaDigitalCopy: "Ja", // Digitale Kopie wird akzeptiert
    poaOriginalRequired: "Ja", // Original erforderlich
    poaDigitalSignature: "Nein", // Digitale Signatur wird nicht akzeptiert
    poaNotarization: "Nein", // Keine notarielle Beglaubigung erforderlich
    poaApostille: "Nein", // Keine Legalisierung erforderlich
    poaHinweise:
      "Eine unterschriebene Vollmacht ist erforderlich, jedoch genügt einfache Unterschrift (keine Legalisation)",

    mitgliedschaften: ["WIPO", "Pariser Übereinkunft", "TRIPS", "Madrid-Protokoll"], // OAPI ist Mitglied des Madrid-Protokolls seit 2015

    priorityDeadlineMonths: 6, // Prioritätsfrist von 6 Monaten gemäß PVÜ
    priorityDocumentDeadlineMonths: 3, // Prioritätsunterlagen nach OAPI-Praxis i.d.R. innerhalb von 3 Monaten einzureichen

    additionalNotes:
      "Eine OAPI-Marke gilt einheitlich in allen 17 Mitgliedstaaten (inkl. Burkina Faso). Es gibt kein nationales Markenamt in Burkina Faso. OAPI wendet Nizza-Klassifikation an; Mehrklassenanmeldungen sind möglich (bis zu 3 Klassen pro Anmeldung ohne Zusatzgebühr). Amtssprache bei OAPI ist Französisch. Die ernsthafte Benutzung in mindestens einem der OAPI-Mitgliedstaaten genügt, da die Marke für das Gesamtgebiet einheitlich gilt. OAPI-Vorschriften sehen eine Verfallsmöglichkeit nach 5 Jahren ununterbrochener Nichtbenutzung vor.",
  }),
  createExtendedCountry("BI", "Burundi", "Afrika"),
  // Füge Burundi mit den korrekten Regeln hinzu
  createExtendedCountry("BI", "Burundi", "Afrika", "direct", {
    calculationBasis: "application",
    protectionPeriod: 10, // Schutzdauer: 10 Jahre ab Anmeldetag

    renewalStartMonths: 6, // Verlängerung sollte innerhalb der 6 Monate vor Ablauf der Schutzdauer beantragt werden
    renewalDeadlineMonths: 0, // Frist endet am Ablauftag
    lateRenewalMonths: 6, // Nachfrist von 6 Monaten mit Zuschlag

    usageProofRequired: false, // Keine Verpflichtung, Nutzung nachzuweisen

    usageDeclarationRequired: false, // Keine Benutzungserklärung erforderlich
    usageDeclarationYears: [], // Keine festen Zeitpunkte

    vertreterRequired: "Ja", // Ausländische Anmelder müssen sich durch einen in Burundi zugelassenen Vertreter vertreten lassen
    prufungsumfang: "Umfassend", // Das nationale Markenamt prüft Formalitäten und führt eine Sachprüfung sowohl auf absolute als auch relative Hindernisse durch
    widerspruch: "Ja", // Widerspruch innerhalb von 30 Tagen ab Veröffentlichung

    poaVertreterRequired: "Ja", // Für ausländische Anmelder erforderlich
    poaDigitalCopy: "Ja", // Digitale Kopie zunächst akzeptiert
    poaOriginalRequired: "Ja", // Original nachzureichen
    poaDigitalSignature: "Nein", // Digitale Signatur wird nicht akzeptiert
    poaNotarization: "Nein", // Keine notarielle Beglaubigung zwingend erforderlich
    poaApostille: "Nein", // Keine Legalisierung erforderlich
    poaHinweise:
      "Eine Original-Vollmacht mit Unterschrift ist erforderlich; notarielle Beglaubigung nicht zwingend, solange die Vollmacht rechtsverbindlich unterschrieben ist",

    mitgliedschaften: ["WIPO", "Pariser Übereinkunft", "TRIPS"], // Kein Madrid-System

    priorityDeadlineMonths: 6, // Prioritätsfrist von 6 Monaten nach einer Voranmeldung in einem PVÜ-Mitgliedstaat
    priorityDocumentDeadlineMonths: 3, // Nachweis kann verlangt werden

    additionalNotes:
      "Das Gesetz sieht eine sehr kurze Benutzungsschonfrist vor: Wird die Marke nicht innerhalb von 3 Jahren nach Registrierung im Inland benutzt oder danach 3 Jahre ununterbrochen nicht benutzt, kann sie wegen Nichtbenutzung gelöscht werden (Art. 38 Gesetz Nr. 1/13 von 2009). Burundi erlaubt Mehrklassenanmeldungen (obwohl nicht Nice-Vertragspartei, wendet es die Nizza-Klassifikation an). Die Benutzung muss 'ernsthaft' im Rahmen der geschützten Waren/Dienstleistungen in Burundi erfolgen.",
  }),
  createExtendedCountry("CM", "Kamerun", "Afrika"),
  createExtendedCountry("CV", "Kap Verde", "Afrika"),
  createExtendedCountry("CV", "Cabo Verde", "Afrika", "direct", {
    calculationBasis: "application",
    protectionPeriod: 10, // Schutzdauer: 10 Jahre ab Anmeldetag (nach neuerem Recht)

    renewalStartMonths: 6, // Verlängerung kann frühestens 6 Monate vor Ablauf beantragt werden
    renewalDeadlineMonths: 0, // Frist endet am Ablauftag
    lateRenewalMonths: 6, // Nachfrist von 6 Monaten nach Ablauf der Schutzdauer

    usageProofRequired: true, // Cabo Verde hat eine besondere Regel eingeführt: die Declaração de Intenção de Uso (DIU)
    usageProofYears: 5, // 5 Jahre nach Eintragung

    usageDeclarationRequired: true, // Markeninhaber müssen eine DIU beim Amt IGQPI einreichen
    usageDeclarationYears: [5], // 5 Jahre nach Eintragung

    vertreterRequired: "Ja", // Ausländische Markenanmelder müssen einen in Cabo Verde niedergelassenen Vertreter bestellen
    prufungsumfang: "Umfassend", // Das Markenamt IGQPI prüft Anmeldungen formal, absolut und auf Kollisionen mit älteren Marken
    widerspruch: "Ja", // Widerspruch innerhalb von 2 Monaten nach Veröffentlichung

    poaVertreterRequired: "Ja", // Für ausländische Anmelder erforderlich
    poaDigitalCopy: "Ja", // Digitale Kopie wird akzeptiert
    poaOriginalRequired: "Nein", // Original nicht erforderlich
    poaDigitalSignature: "Ja", // Digitale Signatur wird akzeptiert
    poaNotarization: "Nein", // Keine notarielle Beglaubigung erforderlich
    poaApostille: "Nein", // Keine Legalisierung erforderlich
    poaHinweise: "Nach Auskunft der Behörde genügt einfache Unterzeichnung der Vollmacht",

    mitgliedschaften: ["WIPO", "Pariser Übereinkunft", "TRIPS", "Madrid-Protokoll", "Trademark Law Treaty"], // Cabo Verde trat 2022 dem Madrider Protokoll bei

    priorityDeadlineMonths: 6, // Prioritätsfrist von 6 Monaten nach PVÜ
    priorityDocumentDeadlineMonths: 3, // Prioritätsunterlagen innerhalb von 3 Monaten ab Antragstellung vorzulegen

    additionalNotes:
      "Cabo Verde hat 2018/2019 eine besondere Regel eingeführt: die Declaração de Intenção de Uso (DIU) – eine Absichtserklärung zur Nutzung, die 5 Jahre nach Eintragung eingereicht werden muss. Dieser Nachweis der Nutzungsabsicht soll Missbrauch vorbeugen. Fehlt die fristgerechte DIU, beeinträchtigt dies die Gültigkeit der Registrierung. Nichtbenutzte Marken können nach 5 Jahren auf Antrag gelöscht werden. Im Zuge der Gesetzesreform 2019 wurde auch ein modernes elektronisches IP-System eingeführt. Cabo Verde erkennt auch Priorität aus regionalen afrikanischen Anmeldungen (ARIPO/OAPI) an, soweit diese in PVÜ-Staaten erfolgt sind.",
  }),
  createExtendedCountry("CF", "Zentralafrikanische Republik", "Afrika"),
  createExtendedCountry("CF", "Zentralafrikanische Republik", "Afrika", "direct", {
    calculationBasis: "application",
    protectionPeriod: 10, // Schutzdauer: 10 Jahre ab Anmeldedatum

    renewalStartMonths: 12, // Verlängerungsantrag kann frühestens 12 Monate vor Ablauf der Schutzdauer gestellt werden
    renewalDeadlineMonths: 0, // Frist endet am Ablauftag
    lateRenewalMonths: 6, // Nachfrist von 6 Monaten mit Säumnisgebühr

    usageProofRequired: false, // Keine automatische Verpflichtung, Nutzungsnachweise einzureichen

    usageDeclarationRequired: false, // Keine Benutzungserklärung erforderlich
    usageDeclarationYears: [], // Keine festen Zeitpunkte

    vertreterRequired: "Ja", // Anmelder ohne Wohnsitz in einem OAPI-Staat müssen einen zugelassenen Vertreter bestellen
    prufungsumfang: "Umfassend", // OAPI prüft formal, auf absolute Eintragungshindernisse und auf ältere kollidierende OAPI-Marken
    widerspruch: "Ja", // Widerspruch innerhalb von 3 Monaten nach Veröffentlichung

    poaVertreterRequired: "Ja", // Für Anmelder ohne Wohnsitz in einem OAPI-Staat erforderlich
    poaDigitalCopy: "Ja", // Digitale Kopie wird akzeptiert
    poaOriginalRequired: "Nein", // Original nicht zwingend erforderlich
    poaDigitalSignature: "Ja", // Digitale Signatur wird akzeptiert
    poaNotarization: "Nein", // Keine notarielle Beglaubigung erforderlich
    poaApostille: "Nein", // Keine Legalisierung erforderlich
    poaHinweise: "Eine einfach unterschriebene Vollmacht (ohne notarielle Beglaubigung oder Legalisierung) reicht aus",

    mitgliedschaften: ["WIPO", "Pariser Übereinkunft", "TRIPS", "Madrid-Protokoll"],

    priorityDeadlineMonths: 6, // Prioritätsfrist von 6 Monaten (Paris-Übereinkunft)
    priorityDocumentDeadlineMonths: 3, // Beglaubigte Kopie der Voranmeldung innerhalb von 3 Monaten einzureichen

    additionalNotes:
      "Die Zentralafrikanische Republik hat kein eigenes nationales Markenamt – Schutz wird ausschließlich über OAPI erlangt. Eine OAPI-Markenanmeldung erstreckt sich automatisch auf alle 17 Mitgliedsstaaten des Bangui-Abkommens. Marken, die 5 Jahre ununterbrochen nicht benutzt wurden, können auf Antrag Dritter wegen Nichtbenutzung gelöscht werden. Der Gebrauch in einem OAPI-Mitgliedstaat genügt dabei, um die Marke in allen 17 Mitgliedstaaten aufrechtzuerhalten. OAPI wendet die Nizza-Klassifikation an und erlaubt Mehrklassenanmeldungen.",
  }),
  createExtendedCountry("TD", "Tschad", "Afrika"),
  createExtendedCountry("KM", "Komoren", "Afrika"),
  createExtendedCountry("CG", "Republik Kongo", "Afrika"),
  createExtendedCountry("CG", "Republik Kongo", "Afrika", "direct", {
    calculationBasis: "application",
    protectionPeriod: 10, // Schutzdauer: 10 Jahre ab dem Anmeldetag

    renewalStartMonths: 12, // Verlängerungsantrag und -gebührenzahlung innerhalb von 12 Monaten vor Ablauf
    renewalDeadlineMonths: 0, // Frist endet am Ablauftag
    lateRenewalMonths: 6, // Nachfrist von 6 Monaten mit Zuschlag

    usageProofRequired: false, // Keine regelmäßige Pflicht zur Vorlage von Nutzungsbelegen

    usageDeclarationRequired: false, // Keine Benutzungserklärung erforderlich
    usageDeclarationYears: [], // Keine festen Zeitpunkte

    vertreterRequired: "Ja", // Ausländische Anmelder benötigen einen zugelassenen OAPI-Markenvertreter
    prufungsumfang: "Umfassend", // Formale Prüfung, absolute Prüfung und Abgleich mit OAPI-Register
    widerspruch: "Ja", // Widerspruch innerhalb von 3 Monaten nach Veröffentlichung

    poaVertreterRequired: "Ja", // Für ausländische Anmelder erforderlich
    poaDigitalCopy: "Ja", // Digitale Kopie wird akzeptiert
    poaOriginalRequired: "Nein", // Original nicht zwingend erforderlich
    poaDigitalSignature: "Ja", // Digitale Signatur wird akzeptiert
    poaNotarization: "Nein", // Keine notarielle Beglaubigung erforderlich
    poaApostille: "Nein", // Keine Legalisierung erforderlich
    poaHinweise: "Die Vollmacht ist formlos gültig (einfache Unterschrift, keine Notarisation)",

    mitgliedschaften: ["WIPO", "Pariser Übereinkunft", "TRIPS", "Madrid-Protokoll"],

    priorityDeadlineMonths: 6, // Prioritätsfrist von 6 Monaten
    priorityDocumentDeadlineMonths: 3, // Prioritätsdokument innerhalb von 3 Monaten nach Einreichung nachzureichen

    additionalNotes:
      "Die Republik Kongo (Kongo-Brazzaville) gewährt Markenschutz ausschließlich über OAPI. Eine Marke, die 5 Jahre ununterbrochen nicht benutzt wurde, kann auf Antrag gelöscht werden. Die Benutzung in einem der OAPI-Staaten genügt, um die Marke auch für die Republik Kongo zu erhalten. Nicht zu verwechseln mit der Demokratischen Republik Kongo (DR Kongo), die kein OAPI-Mitglied ist.",
  }),

  createExtendedCountry("CI", "Elfenbeinküste", "Afrika"),
  createExtendedCountry("CI", "Elfenbeinküste", "Afrika", "direct", {
    calculationBasis: "application",
    protectionPeriod: 10, // Schutzdauer: 10 Jahre ab Anmeldedatum

    renewalStartMonths: 12, // Verlängerung kann frühestens 12 Monate vor Ablauf der Schutzdauer beantragt werden
    renewalDeadlineMonths: 0, // Frist endet am Ablauftag
    lateRenewalMonths: 6, // Nachfrist von 6 Monaten mit Zuschlag

    usageProofRequired: false, // Keine routinemäßige Einreichung erforderlich

    usageDeclarationRequired: false, // Keine Benutzungserklärung erforderlich
    usageDeclarationYears: [], // Keine festen Zeitpunkte

    vertreterRequired: "Ja", // Nicht in einem OAPI-Staat ansässige Anmelder müssen durch einen bei OAPI registrierten Vertreter handeln
    prufungsumfang: "Umfassend", // OAPI prüft formal, absolut und macht Abgleich mit bestehenden OAPI-Marken
    widerspruch: "Ja", // Widerspruch innerhalb von 3 Monaten nach Veröffentlichung

    poaVertreterRequired: "Ja", // Für ausländische Anmelder erforderlich
    poaDigitalCopy: "Ja", // Digitale Kopie wird akzeptiert
    poaOriginalRequired: "Nein", // Original nicht zwingend erforderlich
    poaDigitalSignature: "Ja", // Digitale Signatur wird akzeptiert
    poaNotarization: "Nein", // Keine notarielle Beglaubigung erforderlich
    poaApostille: "Nein", // Keine Legalisierung erforderlich
    poaHinweise:
      "Eine schriftliche, einfach unterschriebene Vollmacht ist ausreichend und bedarf keiner weiteren Legalisierung",

    mitgliedschaften: ["WIPO", "Pariser Übereinkunft", "TRIPS", "Madrid-Protokoll"],

    priorityDeadlineMonths: 6, // Prioritätsfrist von 6 Monaten gemäß PVÜ
    priorityDocumentDeadlineMonths: 3, // Prioritätsansprüche müssen bei der Anmeldung deklariert werden; beglaubigte Abschrift der Voranmeldung innerhalb von 3 Monaten einzureichen

    additionalNotes:
      "Durch OAPI's einheitliches System gelten Markeneintragungen der Elfenbeinküste automatisch auch in anderen Mitgliedstaaten (z.B. Kamerun, Senegal). Ein Inlandsgebrauch der Marke – etwa in Abidjan – wahrt den Schutz in allen Mitgliedsländern. Markenanmeldungen aus Côte d'Ivoire werden meist direkt beim OAPI-Büro in Yaoundé eingereicht oder dem nationalen ivorischen Industrie-Ministerium übergeben, das sie weiterleitet. Fehlt eine ernsthafte Benutzung innerhalb von 5 Jahren ununterbrochen, ist auf begründeten Antrag eines Dritten die Löschung wegen Verfalls möglich.",
  }),
  createExtendedCountry("DJ", "Dschibuti", "Afrika", "direct", {
    calculationBasis: "application",
    protectionPeriod: 10, // Schutzdauer: 10 Jahre ab Anmeldetag

    renewalStartMonths: 6, // Verlängerung fällig 6 Monate vor Ablauf der Schutzdauer
    renewalDeadlineMonths: 0, // Frist endet am Ablauftag
    lateRenewalMonths: 6, // Nachfrist von 6 Monaten als Grace Period

    usageProofRequired: false, // Keine Pflicht, Zwischennachweise oder eidesstattliche Erklärungen einzureichen

    usageDeclarationRequired: false, // Keine Benutzungserklärung erforderlich
    usageDeclarationYears: [], // Keine festen Zeitpunkte

    vertreterRequired: "Ja", // Lokaler Vertreter für ausländische Anmelder erforderlich
    prufungsumfang: "Beschränkt", // Das Markenamt prüft auf Formalitäten und materielle Schutzfähigkeit
    widerspruch: "Nein", // Kein Widerspruchsverfahren vorgesehen

    poaVertreterRequired: "Ja", // Für ausländische Anmelder erforderlich
    poaDigitalCopy: "Ja", // Digitale Kopie wird akzeptiert
    poaOriginalRequired: "Fakultativ", // Original oder Scan der POA
    poaDigitalSignature: "Nein", // Digitale Signatur wird nicht akzeptiert
    poaNotarization: "Nein", // Keine notarielle Beglaubigung erforderlich
    poaApostille: "Nein", // Keine Legalisationspflicht
    poaHinweise: "Einfach unterschriebene Vollmacht in Französisch ist ausreichend",

    mitgliedschaften: ["WIPO", "Pariser Übereinkunft", "TRIPS"], // Kein Mitglied des Madrid-Systems

    priorityDeadlineMonths: 6, // Prioritätsfrist von 6 Monaten (Paris-Übereinkunft)
    priorityDocumentDeadlineMonths: 3, // Beglaubigte Kopie der Erstanmeldung mit Übersetzung ins Französische

    additionalNotes:
      "Nach der Prüfung erfolgt sofort die Eintragung und anschließende Veröffentlichung im Amtsblatt. Es findet keine Prüfung auf ältere Marken statt. Dschibutisches Recht kennt keine Oppositionsmöglichkeit nach Veröffentlichung. Stattdessen können Dritte nach der Registrierung ein Löschungsverfahren einleiten. Eine Marke kann von jedermann gelöscht werden, wenn sie 5 Jahre ununterbrochen nicht benutzt wurde (dieses Non-Use-Cancellation-Recht wurde 2012 eingeführt). Das neue Markengesetz (Gesetz Nr. 50/AN/09/6ème L, in Kraft seit Juni 2012) schuf erstmals ein modernes Registersystem. Dschibuti ist 2024 dem Genfer Akt (Lissabon) beigetreten (Geographische Angaben).",
  }),

  createExtendedCountry("ER", "Eritrea", "Afrika", "direct", {
    calculationBasis: "none",
    protectionPeriod: 0, // Kein formales Markeneintragungsverfahren vorhanden

    renewalStartMonths: 0, // Entfällt - es gibt keine amtlichen Verlängerungsfristen
    renewalDeadlineMonths: 0, // Entfällt - es gibt keine amtlichen Verlängerungsfristen
    lateRenewalMonths: 0, // Entfällt - es gibt kein Register und somit keine offizielle Frist

    usageProofRequired: false, // Da keine formale Registrierung, auch keine formalen Nachweispflichten

    usageDeclarationRequired: false, // Keine Benutzungserklärung erforderlich
    usageDeclarationYears: [], // Keine festen Zeitpunkte

    vertreterRequired: "Nein", // Es gibt kein Markenamt, somit kein Vertreterzwang
    prufungsumfang: "Keine", // Kein Registrierungsverfahren vorhanden
    widerspruch: "Nein", // Entfällt mangels Amt

    poaVertreterRequired: "Nein", // Nicht erforderlich
    poaDigitalCopy: "Nein", // Nicht anwendbar
    poaOriginalRequired: "Nein", // Nicht anwendbar
    poaDigitalSignature: "Nein", // Nicht anwendbar
    poaNotarization: "Nein", // Nicht anwendbar
    poaApostille: "Nein", // Nicht anwendbar
    poaHinweise: "Nicht anwendbar",

    mitgliedschaften: [], // Kein Beitritt zu wichtigen IP-Abkommen

    priorityDeadlineMonths: 0, // Ohne PVÜ-Mitgliedschaft gewährt Eritrea keine Prioritätsrechte
    priorityDocumentDeadlineMonths: 0, // Nicht anwendbar

    additionalNotes:
      "Derzeit können Marken in Eritrea mangels Gesetz nicht registriert werden. Eritrea hat seit Unabhängigkeit 1993 kein voll implementiertes Markengesetz erlassen und ist weder PVÜ- noch WTO-Mitglied. Stattdessen praktizieren Unternehmen den Schutz durch 'Cautionary Notices' - öffentliche Warnhinweise. Diese Anzeigen (meist in Zeitungen) dienen als Bekanntmachung des Markenanspruchs. Empfohlen wird eine Erneuerung der Cautionary Notice alle 3-5 Jahre, um den Anspruch aufrechtzuerhalten. Wer eine Marke zuerst und kontinuierlich im Handel verwendet, hat nach lokalen Zivilrechtsgrundsätzen den besseren Anspruch. Im Oktober 2024 hat Eritreas Regierung dem Beitritt zur PVÜ und zum Madrider Protokoll grundsätzlich zugestimmt; bis zur Etablierung eines Markenamts bleibt jedoch der status quo.",
  }),
  createExtendedCountry("ET", "Äthiopien", "Afrika", "direct", {
    calculationBasis: "application",
    protectionPeriod: 7, // Schutzdauer: 7 Jahre ab Anmeldetag

    renewalStartMonths: 6, // Verlängerungsanträge sind vor Ablauf der 7-jährigen Schutzdauer zu stellen
    renewalDeadlineMonths: 0, // Frist endet am Ablauftag
    lateRenewalMonths: 3, // Nachfrist von 3 Monaten nach Ablauf gegen Zuschlag

    usageProofRequired: false, // Äthiopien verlangt keine turnusmäßigen Benutzungsbelege

    usageDeclarationRequired: false, // Keine Benutzungserklärung erforderlich
    usageDeclarationYears: [], // Keine festen Zeitpunkte

    vertreterRequired: "Ja", // Ausländische Antragsteller müssen sich vertreten lassen
    prufungsumfang: "Umfassend", // Das EIPO führt eine formale und materielle Prüfung durch
    widerspruch: "Ja", // Oppositionsfrist: 60 Tage ab Veröffentlichung im Gazette

    poaVertreterRequired: "Ja", // Für ausländische Anmelder erforderlich
    poaDigitalCopy: "Nein", // Digitale Kopie nicht ausreichend
    poaOriginalRequired: "Ja", // Original erforderlich
    poaDigitalSignature: "Nein", // Digitale Signatur wird nicht akzeptiert
    poaNotarization: "Ja", // Legalisation bis zur äthiopischen Botschaft erforderlich
    poaApostille: "Ja", // Legalisation erforderlich
    poaHinweise:
      "Legalisation bis zur äthiopischen Botschaft erforderlich. Außerdem muss jeder Antrag eine beglaubigte Kopie einer Heimatschutzurkunde enthalten",

    mitgliedschaften: [], // Kein Mitglied internationaler Markenabkommen (Stand 2025), aber Beitritt zur PVÜ und zum Madrider Protokoll beschlossen

    priorityDeadlineMonths: 0, // Mangels PVÜ keine Prioritätsanerkennung (wird sich nach Beitritt 2025 ändern)
    priorityDocumentDeadlineMonths: 0, // Nicht anwendbar

    additionalNotes:
      "Äthiopien stellte 2006 von einem reinen Bekanntmachungssystem (Schutzvermerke) auf ein Registersystem um. 2012 wurden endgültig alle alten 'Cautionary Notices' ungültig – Marken mussten neu angemeldet werden. Bei Anmeldung wird ein 'home registration' Nachweis verlangt (d.h. ausländische Anmeldung/Registrierung, die äquivalent ist). Nichtbenutzung kann nach 3 Jahren ab Registrierung zur Löschung führen (Art. 18 Proclamation 2006). Äthiopien hat im Oktober 2024 den Beitritt zur PVÜ und zum Madrider Protokoll beschlossen – dieser tritt voraussichtlich 2025 in Kraft. Nach dem Beitritt wird Äthiopien wohl die Priorität aus ausländischen Anmeldungen ohne Legalisation anerkennen.",
  }),
  // Neue Länder aus dem Anhang
  createExtendedCountry("GA", "Gabun", "Afrika", "direct", {
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

    mitgliedschaften: ["WIPO", "Pariser Übereinkunft", "TRIPS", "OAPI"],

    priorityDeadlineMonths: 6, // Prioritätsfrist von 6 Monaten
    priorityDocumentDeadlineMonths: 3,

    additionalNotes:
      "Gabun ist Mitglied der OAPI (Organisation Africaine de la Propriété Intellectuelle). Markenregistrierungen müssen über das OAPI-System erfolgen und sind in allen Mitgliedsstaaten gültig. Registrierungen sind für 10 Jahre gültig und können für weitere 10-Jahres-Perioden verlängert werden. Eine Marke kann nach 5 Jahren Nichtbenutzung angefochten werden.",
  }),

  createExtendedCountry("GM", "Gambia", "Afrika", "direct", {
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

    mitgliedschaften: ["WIPO", "Pariser Übereinkunft", "TRIPS", "ARIPO"],

    priorityDeadlineMonths: 6, // Prioritätsfrist von 6 Monaten
    priorityDocumentDeadlineMonths: 3,

    additionalNotes:
      "Markenregistrierungen in Gambia sind für 10 Jahre gültig und können für weitere 10-Jahres-Perioden verlängert werden. Die Registrierung erfolgt beim Registrar General's Department. Gambia verwendet ein System, das weitgehend auf dem britischen Markenrecht basiert. Gambia ist auch Mitglied des ARIPO-Systems (Banjul-Protokoll).",
  }),

  createExtendedCountry("GH", "Ghana", "Afrika", "direct", {
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

    mitgliedschaften: ["WIPO", "Pariser Übereinkunft", "TRIPS", "ARIPO"],

    priorityDeadlineMonths: 6, // Prioritätsfrist von 6 Monaten
    priorityDocumentDeadlineMonths: 3,

    additionalNotes:
      "Markenregistrierungen in Ghana sind für 10 Jahre gültig und können für weitere 10-Jahres-Perioden verlängert werden. Die Registrierung erfolgt beim Registrar-General's Department. Ghana hat 2010 ein neues Markengesetz eingeführt, das internationale Standards berücksichtigt. Ghana ist auch Mitglied des ARIPO-Systems (Banjul-Protokoll).",
  }),

  createExtendedCountry("GN", "Guinea", "Afrika", "direct", {
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

    mitgliedschaften: ["WIPO", "Pariser Übereinkunft", "TRIPS", "OAPI"],

    priorityDeadlineMonths: 6, // Prioritätsfrist von 6 Monaten
    priorityDocumentDeadlineMonths: 3,

    additionalNotes:
      "Guinea ist Mitglied der OAPI (Organisation Africaine de la Propriété Intellectuelle). Markenregistrierungen müssen über das OAPI-System erfolgen und sind in allen Mitgliedsstaaten gültig. Registrierungen sind für 10 Jahre gültig und können für weitere 10-Jahres-Perioden verlängert werden. Eine Marke kann nach 5 Jahren Nichtbenutzung angefochten werden.",
  }),

  // Füge die restlichen Länder hinzu
  createExtendedCountry("NA", "Namibia", "Afrika", "direct", {
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

    mitgliedschaften: ["WIPO", "Pariser Übereinkunft", "TRIPS", "ARIPO"],

    priorityDeadlineMonths: 6, // Prioritätsfrist von 6 Monaten
    priorityDocumentDeadlineMonths: 3,

    additionalNotes:
      "Markenregistrierungen in Namibia sind für 10 Jahre gültig und können für weitere 10-Jahres-Perioden verlängert werden. Die Registrierung erfolgt beim Business and Intellectual Property Authority (BIPA). Namibia ist Mitglied des ARIPO-Systems (Banjul-Protokoll). Eine Marke kann nach 5 Jahren Nichtbenutzung angefochten werden. Das Markensystem basiert weitgehend auf dem südafrikanischen System.",
  }),

  // Niger (NE)
  createExtendedCountry("NE", "Niger", "Afrika", "direct", {
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

    mitgliedschaften: ["WIPO", "Pariser Übereinkunft", "TRIPS", "OAPI"],

    priorityDeadlineMonths: 6, // Prioritätsfrist von 6 Monaten
    priorityDocumentDeadlineMonths: 3,

    additionalNotes:
      "Niger ist Mitglied der OAPI (Organisation Africaine de la Propriété Intellectuelle). Markenregistrierungen müssen über das OAPI-System erfolgen und sind in allen Mitgliedsstaaten gültig. Registrierungen sind für 10 Jahre gültig und können für weitere 10-Jahres-Perioden verlängert werden. Eine Marke kann nach 5 Jahren Nichtbenutzung angefochten werden.",
  }),

  // Ruanda (RW)
  createExtendedCountry("RW", "Ruanda", "Afrika", "direct", {
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

    mitgliedschaften: ["WIPO", "Pariser Übereinkunft", "TRIPS", "ARIPO"],

    priorityDeadlineMonths: 6, // Prioritätsfrist von 6 Monaten
    priorityDocumentDeadlineMonths: 3,

    additionalNotes:
      "Markenregistrierungen in Ruanda sind für 10 Jahre gültig und können für weitere 10-Jahres-Perioden verlängert werden. Die Registrierung erfolgt beim Office of the Registrar General at the Rwanda Development Board. Ruanda ist Mitglied des ARIPO-Systems (Banjul-Protokoll). Eine Marke kann nach 5 Jahren Nichtbenutzung angefochten werden. Ruanda hat ein modernes Markengesetz (Law on the Protection of Intellectual Property von 2009).",
  }),

  // São Tomé und Príncipe (ST)
  createExtendedCountry("ST", "São Tomé und Príncipe", "Afrika", "direct", {
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
      "Markenregistrierungen in São Tomé und Príncipe sind für 10 Jahre gültig und können für weitere 10-Jahres-Perioden verlängert werden. Die Registrierung erfolgt beim Service National de la Propriété Industrielle (SENAPI). Eine Marke kann nach 5 Jahren Nichtbenutzung angefochten werden. Das Markensystem basiert auf dem portugiesischen System.",
  }),

  // Senegal (SN)
  createExtendedCountry("SN", "Senegal", "Afrika", "direct", {
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

    mitgliedschaften: ["WIPO", "Pariser Übereinkunft", "TRIPS", "OAPI"],

    priorityDeadlineMonths: 6, // Prioritätsfrist von 6 Monaten
    priorityDocumentDeadlineMonths: 3,

    additionalNotes:
      "Senegal ist Mitglied der OAPI (Organisation Africaine de la Propriété Intellectuelle). Markenregistrierungen müssen über das OAPI-System erfolgen und sind in allen Mitgliedsstaaten gültig. Registrierungen sind für 10 Jahre gültig und können für weitere 10-Jahres-Perioden verlängert werden. Eine Marke kann nach 5 Jahren Nichtbenutzung angefochten werden.",
  }),

  // Seychellen (SC)
  createExtendedCountry("SC", "Seychellen", "Afrika", "direct", {
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
      "Markenregistrierungen auf den Seychellen sind für 10 Jahre gültig und können für weitere 10-Jahres-Perioden verlängert werden. Die Registrierung erfolgt beim Registration Division des Department of Legal Affairs. Eine Marke kann nach 5 Jahren Nichtbenutzung angefochten werden. Die Seychellen haben ein modernes Markengesetz (Industrial Property Act von 2014).",
  }),

  // Sierra Leone (SL)
  createExtendedCountry("SL", "Sierra Leone", "Afrika", "direct", {
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

    mitgliedschaften: ["WIPO", "Pariser Übereinkunft", "TRIPS", "ARIPO"],

    priorityDeadlineMonths: 6, // Prioritätsfrist von 6 Monaten
    priorityDocumentDeadlineMonths: 3,

    additionalNotes:
      "Sierra Leone hat ein auf dem britischen Common Law basierendes Markenschutzsystem. Markenregistrierungen sind initial für 7 Jahre gültig und können für weitere 14-Jahres-Perioden verlängert werden. Die Registrierung erfolgt beim Office of the Administrator and Registrar General. Sierra Leone ist Mitglied des ARIPO-Systems (Banjul-Protokoll). Eine Marke kann nach 5 Jahren Nichtbenutzung angefochten werden.",
  }),

  // Somalia (SO)
  createExtendedCountry("SO", "Somalia", "Afrika", "direct", {
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

    mitgliedschaften: ["WIPO", "ARIPO"],

    priorityDeadlineMonths: 6, // Prioritätsfrist von 6 Monaten
    priorityDocumentDeadlineMonths: 3,

    additionalNotes:
      "Markenregistrierungen in Somalia sind für 10 Jahre gültig und können für weitere 10-Jahres-Perioden verlängert werden. Die Registrierung erfolgt beim Ministry of Commerce and Industry. Somalia ist Mitglied des ARIPO-Systems (Banjul-Protokoll). Aufgrund der politischen Situation kann es zu erheblichen Verzögerungen bei der Bearbeitung kommen. Eine Marke kann nach 5 Jahren Nichtbenutzung angefochten werden.",
  }),

  // Südsudan (SS)
  createExtendedCountry("SS", "Südsudan", "Afrika", "direct", {
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

    mitgliedschaften: [],

    priorityDeadlineMonths: 6, // Prioritätsfrist von 6 Monaten
    priorityDocumentDeadlineMonths: 3,

    additionalNotes:
      "Der Südsudan ist ein junger Staat (unabhängig seit 2011) mit einem sich entwickelnden Markensystem. Die Registrierung erfolgt beim Ministry of Justice, Department of Intellectual Property. Aufgrund der politischen Situation kann es zu erheblichen Verzögerungen bei der Bearbeitung kommen. Es wird empfohlen, wichtige Marken auch im Sudan zu registrieren, wo ein etabliertes Markensystem besteht.",
  }),

  // Sudan (SD)
  createExtendedCountry("SD", "Sudan", "Afrika", "direct", {
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
    poaHinweise:
      "Notariell beglaubigte und legalisierte Vollmacht erforderlich, mit konsularischer Beglaubigung durch die sudanesische Botschaft.",

    mitgliedschaften: ["WIPO", "Pariser Übereinkunft", "TRIPS", "ARIPO"],

    priorityDeadlineMonths: 6, // Prioritätsfrist von 6 Monaten
    priorityDocumentDeadlineMonths: 3,

    additionalNotes:
      "Markenregistrierungen im Sudan sind für 10 Jahre gültig und können für weitere 10-Jahres-Perioden verlängert werden. Die Registrierung erfolgt beim Registrar General of Intellectual Property, Office of the Attorney General. Der Sudan ist Mitglied des ARIPO-Systems (Banjul-Protokoll). Alle Dokumente müssen ins Arabische übersetzt werden. Eine Marke kann nach 5 Jahren Nichtbenutzung angefochten werden.",
  }),

  // Tansania (TZ)
  createExtendedCountry("TZ", "Tansania", "Afrika", "direct", {
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

    mitgliedschaften: ["WIPO", "Pariser Übereinkunft", "TRIPS", "ARIPO"],

    priorityDeadlineMonths: 6, // Prioritätsfrist von 6 Monaten
    priorityDocumentDeadlineMonths: 3,

    additionalNotes:
      "Markenregistrierungen in Tansania sind initial für 7 Jahre gültig und können für weitere 10-Jahres-Perioden verlängert werden. Die Registrierung erfolgt beim Business Registrations and Licensing Agency (BRELA). Tansania ist Mitglied des ARIPO-Systems (Banjul-Protokoll). Eine Marke kann nach 5 Jahren Nichtbenutzung angefochten werden. Das Markensystem basiert auf dem britischen Common Law.",
  }),

  // Togo (TG)
  createExtendedCountry("TG", "Togo", "Afrika", "direct", {
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

    mitgliedschaften: ["WIPO", "Pariser Übereinkunft", "TRIPS", "OAPI"],

    priorityDeadlineMonths: 6, // Prioritätsfrist von 6 Monaten
    priorityDocumentDeadlineMonths: 3,

    additionalNotes:
      "Togo ist Mitglied der OAPI (Organisation Africaine de la Propriété Intellectuelle). Markenregistrierungen müssen über das OAPI-System erfolgen und sind in allen Mitgliedsstaaten gültig. Registrierungen sind für 10 Jahre gültig und können für weitere 10-Jahres-Perioden verlängert werden. Eine Marke kann nach 5 Jahren Nichtbenutzung angefochten werden.",
  }),

  // Tunesien (TN)
  createExtendedCountry("TN", "Tunesien", "Afrika", "direct", {
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
      "Markenregistrierungen in Tunesien sind für 10 Jahre gültig und können für weitere 10-Jahres-Perioden verlängert werden. Die Registrierung erfolgt beim Institut National de la Normalisation et de la Propriété Industrielle (INNORPI). Tunesien ist seit 2013 Mitglied des Madrid-Protokolls. Alle Dokumente müssen ins Arabische oder Französische übersetzt werden. Eine Marke kann nach 5 Jahren Nichtbenutzung angefochten werden.",
  }),

  // Uganda (UG)
  createExtendedCountry("UG", "Uganda", "Afrika", "direct", {
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

    mitgliedschaften: ["WIPO", "Pariser Übereinkunft", "TRIPS", "ARIPO"],

    priorityDeadlineMonths: 6, // Prioritätsfrist von 6 Monaten
    priorityDocumentDeadlineMonths: 3,

    additionalNotes:
      "Markenregistrierungen in Uganda sind initial für 7 Jahre gültig und können für weitere 10-Jahres-Perioden verlängert werden. Die Registrierung erfolgt beim Uganda Registration Services Bureau (URSB). Uganda ist Mitglied des ARIPO-Systems (Banjul-Protokoll). Eine Marke kann nach 5 Jahren Nichtbenutzung angefochten werden. Das Markensystem basiert auf dem britischen Common Law.",
  }),

  // Westsahara (EH)
  createExtendedCountry("EH", "Westsahara", "Afrika", "direct", {
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

    mitgliedschaften: [],

    priorityDeadlineMonths: 6, // Prioritätsfrist von 6 Monaten
    priorityDocumentDeadlineMonths: 3,

    additionalNotes:
      "Die Westsahara ist ein umstrittenes Gebiet, dessen Status noch nicht endgültig geklärt ist. Ein vollständiger Markenschutz in diesem Gebiet kann durch Registrierung in Marokko erfolgen, da Marokko den größten Teil der Westsahara kontrolliert. Es empfiehlt sich, Marken sowohl in Marokko als auch in Algerien zu registrieren, um einen umfassenden Schutz zu gewährleisten.",
  }),

  // Sambia (ZM)
  createExtendedCountry("ZM", "Sambia", "Afrika", "direct", {
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

    mitgliedschaften: ["WIPO", "Pariser Übereinkunft", "TRIPS", "ARIPO"],

    priorityDeadlineMonths: 6, // Prioritätsfrist von 6 Monaten
    priorityDocumentDeadlineMonths: 3,

    additionalNotes:
      "Markenregistrierungen in Sambia sind initial für 7 Jahre gültig und können für weitere 14-Jahres-Perioden verlängert werden. Die Registrierung erfolgt beim Patents and Companies Registration Agency (PACRA). Sambia ist Mitglied des ARIPO-Systems (Banjul-Protokoll). Eine Marke kann nach 5 Jahren Nichtbenutzung angefochten werden. Das Markensystem basiert auf dem britischen Common Law.",
  }),

  // Simbabwe (ZW)
  createExtendedCountry("ZW", "Simbabwe", "Afrika", "direct", {
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

    mitgliedschaften: ["WIPO", "Pariser Übereinkunft", "TRIPS", "ARIPO"],

    priorityDeadlineMonths: 6, // Prioritätsfrist von 6 Monaten
    priorityDocumentDeadlineMonths: 3,

    additionalNotes:
      "Markenregistrierungen in Simbabwe sind für 10 Jahre gültig und können für weitere 10-Jahres-Perioden verlängert werden. Die Registrierung erfolgt beim Department of Deeds, Companies and Intellectual Property. Simbabwe ist Mitglied des ARIPO-Systems (Banjul-Protokoll). Eine Marke kann nach 5 Jahren Nichtbenutzung angefochten werden. Das Markensystem basiert auf dem britischen Common Law, wurde aber durch den Trade Marks Act von 2001 modernisiert.",
  }),
]
