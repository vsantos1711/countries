type SelectPros = {
  setValue: (region: string) => void;
};

export default function Select({ setValue }: SelectPros) {
  return (
    <select
      suppressHydrationWarning
      name="regions"
      id="regions"
      className=" max-w-sm p-2 rounded-md border border-slate-200 dark:bg-gray-900 dark:border-gray-700 dark:text-gray-100 "
      onChange={({ target }) => setValue(target.value)}
    >
      <option value="" className="text-gray-200 dark:text-gray-700">
        Filter by region
      </option>
      <option value="oceania">Oceania</option>
      <option value="africa">Africa</option>
      <option value="europe">Europe</option>
      <option value="asia">Asia</option>
      <option value="americas">Americas</option>
      <option value="antarctic">Antarctic</option>
    </select>
  );
}
