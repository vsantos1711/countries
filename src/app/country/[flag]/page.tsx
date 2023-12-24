import Link from "next/link";
import CountryCard from "./(components)/CountryCard";

export default function Page({ params }: { params: { flag: string } }) {
  return (
    <div className="min-h-screen dark:bg-gray-800 py-14  ">
      <div className="container flex flex-col gap-4">
        <Link
          href={"/"}
          className="px-8 py-2 border rounded max-w-[200px] text-center"
        >
          BACK
        </Link>
        <CountryCard countryCode={params.flag} />
      </div>
    </div>
  );
}
