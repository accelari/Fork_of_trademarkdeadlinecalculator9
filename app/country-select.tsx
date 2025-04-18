"use client"

import { Button } from "@/components/ui/button"
import * as React from "react"
import { cn } from "@/lib/utils"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Check, ChevronsUpDown } from "lucide-react"
import { countriesData, getBaseCountryCode } from "./data/countries"

interface CountrySelectProps {
  value: string
  onChange: (value: string) => void
}

export function CountrySelect({ value, onChange }: CountrySelectProps) {
  const [open, setOpen] = React.useState(false)
  const [searchQuery, setSearchQuery] = React.useState("")

  // Group countries by region and sort alphabetically within each group
  const groupedCountries = React.useMemo(() => {
    const groups: Record<string, typeof countriesData> = {}

    countriesData.forEach((country) => {
      if (!groups[country.region]) {
        groups[country.region] = []
      }
      groups[country.region].push(country)
    })

    // Sort countries alphabetically within each group
    Object.keys(groups).forEach((region) => {
      groups[region].sort((a, b) => a.country.localeCompare(b.country, "de"))
    })

    return groups
  }, [])

  // Filter countries based on search query
  const filteredGroups = React.useMemo(() => {
    if (!searchQuery) return groupedCountries

    const filtered: Record<string, typeof countriesData> = {}
    const lowerQuery = searchQuery.toLowerCase()

    Object.entries(groupedCountries).forEach(([region, countries]) => {
      const matchingCountries = countries.filter((country) => {
        const baseCode = getBaseCountryCode(country.code)

        // Suche sowohl im Ländernamen als auch im Ländercode
        return country.country.toLowerCase().includes(lowerQuery) || baseCode.toLowerCase().includes(lowerQuery)
      })

      if (matchingCountries.length > 0) {
        filtered[region] = matchingCountries
      }
    })

    return filtered
  }, [groupedCountries, searchQuery])

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full justify-between h-12 text-lg" /* Größerer Button und Text */
        >
          {value ? countriesData.find((country) => country.code === value)?.country : "Land auswählen..."}
          <ChevronsUpDown className="ml-2 h-5 w-5 shrink-0 opacity-50" /> {/* Größeres Icon */}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[350px] p-0">
        {" "}
        {/* Breiterer Popover */}
        <Command shouldFilter={false}>
          <CommandInput
            placeholder="Land oder Kürzel suchen..."
            value={searchQuery}
            onValueChange={setSearchQuery}
            className="h-12 text-lg" /* Größeres Eingabefeld und Text */
          />
          <CommandList className="max-h-[350px]">
            {" "}
            {/* Höhere Liste */}
            <CommandEmpty className="text-lg py-3">Kein Land gefunden.</CommandEmpty> {/* Größerer Text und Abstand */}
            {Object.entries(filteredGroups).map(([region, countries]) => (
              <CommandGroup key={region} heading={region} className="text-lg">
                {" "}
                {/* Größerer Text */}
                {countries.map((country) => {
                  const baseCode = getBaseCountryCode(country.code)
                  return (
                    <CommandItem
                      key={country.code}
                      value={country.code}
                      onSelect={() => {
                        onChange(country.code === value ? "" : country.code)
                        setOpen(false)
                      }}
                      className="text-lg py-3" /* Größerer Text und Abstand */
                    >
                      <Check className={cn("mr-3 h-5 w-5", value === country.code ? "opacity-100" : "opacity-0")} />{" "}
                      {/* Größeres Icon und Abstand */}
                      {country.country}
                      <span className="ml-3 text-base text-muted-foreground">{baseCode}</span>{" "}
                      {/* Größerer Text und Abstand */}
                    </CommandItem>
                  )
                })}
              </CommandGroup>
            ))}
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
