"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { adminLinks } from "@/utils/links";

function Sidebar() {
  const pathname = usePathname();

  return (
    <aside>
      {adminLinks.map((link) => {
        const isActivatePage = pathname === link.href;
        const variant = isActivatePage ? "default" : "ghost";

        return (
          <Button
            asChild
            variant={variant}
            className="w-full mb-2 capitalize font-normal justify-start"
          >
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          </Button>
        );
      })}
    </aside>
  );
}

export default Sidebar;
