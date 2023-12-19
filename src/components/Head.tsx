import Btn from "@/components/Button";
import Link from "next/link";

export default function Head() {
  return (
    <nav className="flex justify-around dark:bg-gray-900 p-3 shadow dark:shadow-none  ">
      <Link href={"/"}>
        <button className="text-2xl drop-shadow-lg">Where in the world?</button>
      </Link>
      <Btn />
    </nav>
  );
}
