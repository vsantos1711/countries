type SelectPros = {
  setValue: (region: string) => void;
};

export default function SorterSelect({ setValue }: SelectPros) {
  return (
    <select
      suppressHydrationWarning
      name="regions"
      id="regions"
      className=" max-w-sm p-2 rounded-md border border-slate-200 dark:bg-gray-900 dark:border-gray-700 dark:text-gray-100 "
      onChange={({ target }) => setValue(target.value)}
    >
      <option value="alphabetic">Alphabetic</option>
      <option value="population">Population</option>
    </select>
  );
}
