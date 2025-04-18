import { createCategorizedCountry } from "./country-utils"

export const middleEastCountries = [
  // Nahost-Länder mit automatischer Kategorisierung
  createCategorizedCountry("AE", "Vereinigte Arabische Emirate", "Naher Osten", "direct", {
    renewalStartMonths: 12,
    renewalDeadlineMonths: 0,
    lateRenewalMonths: 6,
    usageProofYears: 5,
    poaHinweise: "Eine im Herkunftsland notarielle und konsularisch legalisierte Vollmacht ist erforderlich",
    mitgliedschaften: ["WIPO", "Pariser Übereinkunft", "TRIPS", "Madrid-Protokoll"], // Madrid-Protokoll seit 28.12.2021

    additionalNotes:
      "Marken mit alkoholbezogenen Waren/Dienstleistungen (z.B. Klasse 33, Bars) sind nicht zulässig. Bei Nichterwiderung eines Widerspruchs erfolgt Stattgabe standardmäßig. Markeninhaber müssen nachweisen können, dass die Marke ernsthaft im geschäftlichen Verkehr in den VAE genutzt wurde, wenn ein Antrag auf Löschung wegen 5-jähriger Nichtbenutzung gestellt wird. Prioritätsunterlagen müssen mit arabischer Übersetzung eingereicht werden.",
  }),

  createCategorizedCountry("IQ", "Irak", "Naher Osten", "direct", {
    renewalStartMonths: 6,
    renewalDeadlineMonths: 0,
    lateRenewalMonths: 3,
    usageProofYears: 5,
    poaHinweise:
      "Notariell beglaubigte und legalisierte Vollmacht erforderlich, zusätzlich konsularische Beglaubigung durch die irakische Botschaft.",
    mitgliedschaften: ["WIPO", "Pariser Übereinkunft"],
    additionalNotes:
      "Markenregistrierungen im Irak sind für 10 Jahre gültig und können für weitere 10-Jahres-Perioden verlängert werden. Die Registrierung erfolgt beim Iraqi Trademark Office. Alle Dokumente müssen ins Arabische übersetzt werden. Eine Marke kann nach 5 Jahren Nichtbenutzung angefochten werden. Aufgrund der politischen Situation kann es zu Verzögerungen bei der Bearbeitung kommen.",
  }),

  createCategorizedCountry("IR", "Iran", "Naher Osten", "direct", {
    renewalStartMonths: 6,
    renewalDeadlineMonths: 0,
    lateRenewalMonths: 6,
    usageProofYears: 3,
    poaHinweise:
      "Notariell beglaubigte und legalisierte Vollmacht erforderlich, zusätzlich konsularische Beglaubigung durch die iranische Botschaft.",
    mitgliedschaften: ["WIPO", "Pariser Übereinkunft", "Madrid-Abkommen", "Madrid-Protokoll"],
    additionalNotes:
      "Markenregistrierungen im Iran sind für 10 Jahre gültig und können für weitere 10-Jahres-Perioden verlängert werden. Die Registrierung erfolgt beim Intellectual Property Center of Iran. Der Iran ist sowohl Mitglied des Madrid-Abkommens als auch des Madrid-Protokolls. Alle Dokumente müssen ins Persische übersetzt werden. Eine Marke kann nach 3 Jahren Nichtbenutzung angefochten werden. Aufgrund internationaler Sanktionen können Schwierigkeiten bei der Anmeldung und Aufrechterhaltung von Markenrechten auftreten.",
  }),

  createCategorizedCountry("IL", "Israel", "Naher Osten", "direct", {
    renewalStartMonths: 6,
    renewalDeadlineMonths: 0,
    lateRenewalMonths: 6,
    usageProofYears: 5,
    poaHinweise: "Einfach unterschriebene Vollmacht ist ausreichend, auch als Kopie oder mit digitaler Signatur.",
    mitgliedschaften: ["WIPO", "Pariser Übereinkunft", "TRIPS", "Madrid-Protokoll"],
    additionalNotes:
      "Markenregistrierungen in Israel sind für 10 Jahre gültig und können für weitere 10-Jahres-Perioden verlängert werden. Die Registrierung erfolgt beim Israel Patent Office (ILPO). Israel ist seit 2010 Mitglied des Madrid-Protokolls. Eine Marke kann nach 5 Jahren Nichtbenutzung angefochten werden. Israel hat ein modernes und effizientes Markensystem mit Online-Einreichungsmöglichkeiten.",
  }),

  createCategorizedCountry("JO", "Jordanien", "Naher Osten", "direct", {
    renewalStartMonths: 6,
    renewalDeadlineMonths: 0,
    lateRenewalMonths: 12,
    usageProofYears: 3,
    poaHinweise:
      "Notariell beglaubigte und legalisierte Vollmacht erforderlich, zusätzlich konsularische Beglaubigung durch die jordanische Botschaft.",
    mitgliedschaften: ["WIPO", "Pariser Übereinkunft", "TRIPS", "Madrid-Protokoll"],
    additionalNotes:
      "Markenregistrierungen in Jordanien sind für 10 Jahre gültig und können für weitere 10-Jahres-Perioden verlängert werden. Die Registrierung erfolgt beim Industrial Property Protection Directorate (IPPD). Jordanien ist seit 2022 Mitglied des Madrid-Protokolls. Alle Dokumente müssen ins Arabische übersetzt werden. Eine Marke kann nach 3 Jahren Nichtbenutzung angefochten werden.",
  }),

  createCategorizedCountry("LB", "Libanon", "Naher Osten", "direct", {
    renewalStartMonths: 6,
    renewalDeadlineMonths: 0,
    lateRenewalMonths: 6,
    usageProofYears: 3,
    poaHinweise:
      "Notariell beglaubigte und legalisierte Vollmacht erforderlich, mit konsularischer Beglaubigung durch die libanesische Botschaft.",
    mitgliedschaften: ["WIPO", "Pariser Übereinkunft", "TRIPS", "Madrid-Abkommen"],
    additionalNotes:
      "Markenregistrierungen im Libanon sind für 15 Jahre gültig und können für weitere 15-Jahres-Perioden verlängert werden. Die Registrierung erfolgt beim Intellectual Property Office im Ministry of Economy and Trade. Der Libanon ist Mitglied des Madrid-Abkommens. Alle Dokumente müssen ins Arabische übersetzt werden. Eine Marke kann nach 3 Jahren Nichtbenutzung angefochten werden.",
  }),

  createCategorizedCountry("SY", "Syrien", "Naher Osten", "direct", {
    renewalStartMonths: 6,
    renewalDeadlineMonths: 0,
    lateRenewalMonths: 6,
    usageProofYears: 3,
    poaHinweise:
      "Notariell beglaubigte und legalisierte Vollmacht erforderlich, mit konsularischer Beglaubigung durch die syrische Botschaft.",
    mitgliedschaften: ["WIPO", "Pariser Übereinkunft", "Madrid-Abkommen"],
    additionalNotes:
      "Markenregistrierungen in Syrien sind für 10 Jahre gültig und können für weitere 10-Jahres-Perioden verlängert werden. Die Registrierung erfolgt beim Directorate of Commercial and Industrial Property Protection. Syrien ist Mitglied des Madrid-Abkommens. Alle Dokumente müssen ins Arabische übersetzt werden. Eine Marke kann nach 3 Jahren Nichtbenutzung angefochten werden. Aufgrund der politischen Situation kann es zu erheblichen Verzögerungen bei der Bearbeitung kommen.",
  }),
]
