import Link from "next/link";
import { Search, ShieldCheck, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <header className="sticky top-0 z-10 border-b bg-background/90 backdrop-blur">
      <nav
        className="mx-auto flex min-h-16 w-[min(1120px,calc(100%-2rem))] items-center justify-between gap-3"
        aria-label="Main navigation"
      >
        <Link className="flex items-center gap-2 text-lg font-bold" href="/">
          <span className="grid size-9 place-items-center rounded-lg bg-primary text-primary-foreground">
            <ShieldCheck className="size-5" aria-hidden="true" />
          </span>
          <span>DonutTrades</span>
        </Link>
        <div className="flex items-center gap-2">
          <Button asChild variant="ghost" className="hidden sm:inline-flex">
            <Link href="/">
              <Search data-icon="inline-start" />
              Search
            </Link>
          </Button>
          <Button asChild variant="ghost" className="hidden sm:inline-flex">
            <Link href="/leaderboard">
              <Trophy data-icon="inline-start" />
              Leaderboard
            </Link>
          </Button>
          <Button asChild>
            <Link href="/rate">Rate seller</Link>
          </Button>
        </div>
      </nav>
    </header>
  );
}
