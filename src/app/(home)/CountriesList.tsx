import Card from "@/components/Card/Card";

type CountriesListProps = {
  countries: {
    flags: {
      svg: string;
    };
    name: {
      common: string;
    };
    population: number;
    region: string;
    capital: string;
  }[];
};

export default function CountriesList({ countries }: CountriesListProps) {
  return (
    <div className="flex justify-center items-center flex-wrap gap-4 py-5 px-20">
      {countries.map((country: any) => (
        <Card
          key={country.name.common}
          img={country.flags.svg}
          name={country.name.common}
          population={country.population}
          region={country.region}
          capital={country.capital}
        />
      ))}
    </div>
  );
}
