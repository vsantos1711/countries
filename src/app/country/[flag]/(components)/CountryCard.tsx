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
  const [countryInfo]: any = await getCountryInfo(countryCode);
  const [currencyCode] = countryInfo.currencies
    ? Object.keys(countryInfo.currencies)
    : [""];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
      <div className="relative h-60 md:h-80">
        <Image
          priority
          src={countryInfo.flags.svg}
          alt={countryInfo.name}
          fill
          className="shadow-lg border border-gray-200 dark:border-none rounded "
        />
      </div>
      <div className="flex flex-col w-full gap-2">
        <h1 className="text-4xl font-semibold shadow-white">
          {countryInfo.name.common}
        </h1>
        <p>
          <strong>Native name: </strong>
          {countryInfo.population}
        </p>
        <p>
          <strong>Population: </strong>
          {countryInfo.name.official}
        </p>
        <p>
          <strong>Region: </strong>
          {countryInfo.region}
        </p>
        <p>
          <strong>Sub Region: </strong>
          {countryInfo.subregion ?? "unknown"}
        </p>
        <p>
          <strong>Capital: </strong>
          {countryInfo.capital ?? "unknown"}
        </p>
        <p>
          <strong>Top Level Domain: </strong>
          {countryInfo.tld}
        </p>
        <p>
          <strong>Currencies: </strong>
          {countryInfo.currencies
            ? countryInfo.currencies[currencyCode].name
            : "unknown"}
        </p>
        <p>
          <strong>Languages: </strong>
          {countryInfo.languages
            ? Object.values(countryInfo.languages).join(", ")
            : "unknown"}
        </p>
        <div>
          <strong>Border Countries: </strong>
          <div className="flex flex-wrap gap-3 items-center py-1">
            {countryInfo.borders
              ? countryInfo.borders.map((border: string) => (
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
