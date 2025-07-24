"use client";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { AlignCenter, ShoppingCart } from "lucide-react";
import { navLinks } from "@/constants";
import Link from "next/link";
import LanguageDropdown from "@/components/shared/language-dropdown";
import ModeToggle from "@/components/shared/mode-toggle";
import GlobalSearch from "@/app/[lng]/(root)/_components/global-search";
import { Separator } from "../ui/separator";

export default function MobileSidebar() {
  return (
    <Sheet>
      <SheetTrigger asChild className="md:hidden">
        <Button size="icon" variant="ghost">
          <AlignCenter />
        </Button>
      </SheetTrigger>

      <SheetContent side="top">
        <SheetHeader>
          OnlyCourse
          <Separator />
        </SheetHeader>

        <div className="mt-4 flex flex-col space-y-3">
          {navLinks.map((nav) => (
            <Link
              href={`/${nav.route}`}
              key={nav.route}
              className="flex h-12 cursor-pointer items-center gap-2 rounded-sm px-3 transition-colors hover:bg-blue-400/20"
            >
              <nav.icon className="size-5" />
              <span>{nav.name}</span>
            </Link>
          ))}

          <LanguageDropdown />

          <div className="flex items-center justify-center gap-4">
            <Button size="icon" variant="ghost">
              <ShoppingCart />
            </Button>

            <GlobalSearch />
            <ModeToggle />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
