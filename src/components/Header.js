import Link from "next/link";
import ThemeToggle from "../theme/ThemeToggle";

export default function Header() {
  return (
    <header className="bg-background border-b border-primary dark:border-bright">
      <div className="flex h-full flex-row px-4 md:px-16">
        <div className="py-2 flex flex-row items-center justify-between w-full">
          <div className="flex items-center">
            <Link href="/" className="text-lg font-medium">Home</Link>
          </div>
          
          {/* Desktop navigation */}
          <div className="hidden md:flex items-center">
            <ThemeToggle />
          </div>
          
          {/* Mobile navigation */}
          <div className="md:hidden flex items-center">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
};