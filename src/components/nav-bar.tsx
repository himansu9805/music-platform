import { ModeToggle } from "@/components/mode-toggle";

export function NavBar() {
  return (
    <header className="sticky top-0 flex h-16 items-center gap-4 border-b px-4 md:px-6">
      <div className="flex justify-between items-center w-full">
        <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
          <a
            href="/"
            className="text-lg font-semibold md:text-base"
          >
            Home
          </a>
          <a href="/about" className="text-lg font-semibold md:text-base">
            About
          </a>
          <a href="/contribute" className="text-lg font-semibold md:text-base">
            Contribute
          </a>

        </nav>
      </div>
      <div className="flex items-center gap-6">
        <ModeToggle />
      </div>
      <a href="/login" className="text-lg font-semibold md:text-base">
        Login
      </a>
    </header>
  )
}