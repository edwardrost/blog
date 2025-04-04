import Link from "next/link";
import ThemeToggle from "../theme/ThemeToggle";

export default function Header() {
    return (
      <header className="mb-4 border-b border-primary dark:border-bright">
        <div className="hidden md:flex h-full flex-row px-4 md:px-16">
          <div className="px-0 py-2 flex flex-row items-center justify-between w-full">
            <Link href="/" className="white">Home</Link>
            <ThemeToggle />
          </div>
        </div>
      </header>
    );
  }