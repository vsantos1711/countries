import SearchBar from "@/components/UI/Search";
import CountriesList from "./CountriesList";

async function getCountries() {
  const res = await fetch("https://restcountries.com/v3.1/all");
  return res.json();
}
export default async function Home() {
  const countries = await getCountries();

  return (
    <main className="min-h-screen dark:bg-gray-800 mx-auto py-10 ">
      <SearchBar />
      <CountriesList countries={countries} />
    </main>
  );
}
