import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getCountryEmoji(countryCode: string): string {
  // Handle special cases first
  const specialCases: Record<string, string> = {
    EU: "🇪🇺",
    WIPO: "🌐",
    EUIPO: "🇪🇺",
    OAPI: "🌍",
    ARIPO: "🌍",
    GCC: "🌙",
    EAPO: "🌐",
    AP: "🌍",
    OA: "🌍",
    EA: "🌐",
    EM: "🇪🇺",
    EP: "🇪🇺",
    WO: "🌐",
    XN: "🌐",
    XU: "🌐",
  }

  // Extract base country code (remove any suffixes like "_1")
  const baseCode = countryCode.split("_")[0].toUpperCase()

  // Return special case if it exists
  if (specialCases[baseCode]) {
    return specialCases[baseCode]
  }

  // For standard country codes, convert to regional indicator symbols
  if (baseCode.length === 2) {
    const codePoints = [...baseCode].map((char) => 127397 + char.charCodeAt(0))
    return String.fromCodePoint(...codePoints)
  }

  // Fallback for unknown codes
  return "🏳️"
}
