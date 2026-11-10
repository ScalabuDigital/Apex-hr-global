import { CityRoutePage, cityRouteMetadata, cityStaticParams } from "@/lib/city-route";

// City sub-location pages — see src/lib/city-route.tsx and src/content/cities/.
const COUNTRY_CODE = "ke";

interface PageProps {
  params: Promise<{ city: string }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return cityStaticParams(COUNTRY_CODE);
}

export async function generateMetadata({ params }: PageProps) {
  const { city } = await params;
  return cityRouteMetadata(COUNTRY_CODE, city);
}

export default async function Page({ params }: PageProps) {
  const { city } = await params;
  return <CityRoutePage countryCode={COUNTRY_CODE} citySlug={city} />;
}
