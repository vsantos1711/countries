import Btn from "@/components/UI/Button";
import Link from "next/link";

export default function Head() {
  return (
    <nav className="flex justify-around dark:bg-gray-900 shadow dark:shadow-none px-10 py-3">
      <Link href={"/"}>
        <button className="text-2xl drop-shadow-lg">Where in the world?</button>
      </Link>
      <Btn />
    </nav>
  );
}
