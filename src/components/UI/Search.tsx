"use client";

import { useState } from "react";

export default function SearchBar() {
  const [country, setCountry] = useState("");

  console.log(country);
  return (
    <input
      type="text"
      placeholder="Search for a country..."
      onChange={({ target }) => setCountry(target.value)}
      className="w-[300px] bg-slate-100 h-10 px-5 ml-40 rounded-md border border-slate-200 dark:bg-gray-900 dark:border-gray-700 dark:text-gray-100"
    />
  );
}
