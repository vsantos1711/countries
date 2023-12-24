import Image from "next/image";
import Link from "next/link";

async function getCountryInfo(countryCode: any) {
  const res = await fetch(
    `https://restcountries.com/v3.1/alpha/${countryCode}`
  );
  return res.json();
}

type CountryCard = {
  countryCode: string;
};

export default async function CountryCard({ countryCode }: CountryCard) {
  const [country] = await getCountryInfo(countryCode);
  const [currencyCode] = country.currencies
    ? Object.keys(country.currencies)
    : [""];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
      <div className="relative h-60 md:h-80">
        <Image
          priority
          src={country.flags.svg}
          alt={country.name}
          fill
          className="shadow-lg border border-gray-200 dark:border-none rounded "
        />
      </div>
      <div className="flex flex-col w-full gap-2">
        <h1 className="text-4xl font-semibold shadow-white">
          {country.name.common}
        </h1>
        <p>
          <strong>Native name: </strong>
          {country.population}
        </p>
        <p>
          <strong>Population: </strong>
          {country.name.official}
        </p>
        <p>
          <strong>Region: </strong>
          {country.region}
        </p>
        <p>
          <strong>Sub Region: </strong>
          {country.subregion ?? "unknown"}
        </p>
        <p>
          <strong>Capital: </strong>
          {country.capital ?? "unknown"}
        </p>
        <p>
          <strong>Top Level Domain: </strong>
          {country.tld}
        </p>
        <p>
          <strong>Currencies: </strong>
          {country.currencies
            ? country.currencies[currencyCode].name
            : "unknown"}
        </p>
        <p>
          <strong>Languages: </strong>
          {country.languages
            ? Object.values(country.languages).join(", ")
            : "unknown"}
        </p>
        <div>
          <strong>Border Countries: </strong>
          <div className="flex flex-wrap gap-3 items-center py-1">
            {country.borders
              ? country.borders.map((border: string) => (
                  <Link href={`${border}`} key={border}>
                    <span className=" border border-gray-400  rounded px-2 py-1">
                      {border}
                    </span>
                  </Link>
                ))
              : "unknown"}
          </div>
        </div>
      </div>
    </div>
  );
}
