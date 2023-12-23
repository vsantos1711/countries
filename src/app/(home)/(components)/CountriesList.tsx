"use client";
import Card from "@/components/Card/Card";
import SearchBar from "@/components/UI/Search";
import { useState } from "react";
import { CountryProp } from "../page";

type CountriesListProp = {
  data: CountryProp[];
};

export default function CountriesList({ data }: CountriesListProp) {
  const [filter, setFilterCountry] = useState("");
  return (
    <div className="flex flex-col">
      <div className="flex flex-col justify-between sm:mx-10 mx-9 sm:flex-row gap-4">
        <SearchBar setCountry={setFilterCountry} />
      </div>
      <div className=" justify-center flex flex-wrap gap-5 py-5">
        {!filter &&
          data.map((country: CountryProp) => (
            <Card
              key={country.name.common}
              img={country.flags.svg}
              name={country.name.common}
              population={country.population}
              region={country.region}
              capital={country.capital}
            />
          ))}

        {filter &&
          data
            .filter((country: CountryProp) =>
              country.name.common.toLowerCase().includes(filter.toLowerCase())
            )
            .map((country: CountryProp) => (
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
    </div>
  );
}
