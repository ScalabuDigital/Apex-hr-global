import { CountryPage, countryMetadata } from "@/lib/country-route";

// Country hub — see src/lib/country-route.tsx and src/config/locations.ts.
export const metadata = countryMetadata("nl");

export default function Page() {
  return <CountryPage countryCode="nl" />;
}
