import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Returns the emoji flag for a given country code
 * @param countryCode ISO 3166-1 alpha-2 country code
 * @returns Emoji flag for the country
 */
export function getCountryEmoji(countryCode: string): string {
  if (!countryCode) return ""

  // Convert country code to regional indicator symbols
  // Each letter is represented by a regional indicator symbol letter which is
  // 127397 code points after the corresponding ASCII letter
  const codePoints = [...countryCode.toUpperCase()].map((char) => char.charCodeAt(0) + 127397)

  return String.fromCodePoint(...codePoints)
}
