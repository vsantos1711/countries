"use client";
import Card from "@/components/Card/Card";
import SearchBar from "@/components/UI/Search";
import { useState } from "react";
import { CountryProp } from "../page";
import Select from "@/components/UI/Select";
import SorterSelect from "@/components/UI/SorterSelect";

type CountriesListProp = {
  data: CountryProp[];
};

export default function CountriesList({ data }: CountriesListProp) {
  const [filter, setFilterCountry] = useState("");
  const [region, setRegion] = useState("");
  const [sorter, setSorter] = useState("");

  const filteredCountries = data.filter((country: CountryProp) => {
    const nameFilter = country.name.common
      .toLowerCase()
      .includes(filter.toLowerCase());

    const regionFilter = region.toLowerCase()
      ? country.region.toLowerCase() === region
      : true;

    return nameFilter && regionFilter;
  });

  const sortByAlphabetic = (
    countryOne: CountryProp,
    countryTwo: CountryProp
  ) => {
    const nameA = countryOne.name.common.toUpperCase();
    const nameB = countryTwo.name.common.toUpperCase();

    if (nameA < nameB) return -1;
    if (nameA > nameB) return 1;

    return 0;
  };

  const sortByPopulation = (
    countryOne: CountryProp,
    countryTwo: CountryProp
  ) => {
    if (countryOne.population > countryTwo.population) return -1;
    if (countryOne.population < countryTwo.population) return 1;

    return 0;
  };

  return (
    <div className="flex flex-col container">
      <div className="flex flex-col justify-between sm:flex-row gap-4">
        <SearchBar setCountry={setFilterCountry} />
        <div className="flex flex-col sm:flex-row gap-4">
          <SorterSelect setValue={setSorter} />
          <Select setValue={setRegion} />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 py-5">
        {filteredCountries
          .sort(sorter === "population" ? sortByPopulation : sortByAlphabetic)
          .map((country: CountryProp) => (
            <Card
              key={country.name.common}
              img={country.flags.svg}
              name={country.name.common}
              population={+country.population}
              region={country.region}
              capital={country.capital}
            />
          ))}
      </div>
    </div>
  );
}
