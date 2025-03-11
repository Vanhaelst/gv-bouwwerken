"use client";

import { useState } from "react";
import clsx from "clsx";
import Link from "next/link";
import { Bars3Icon } from "@heroicons/react/24/outline";

import Image from "@/utils/Image";
import { Sidebar } from "@/components/organisms/navigation/MobileNavigation";
import { Container } from "@/components/atoms/container";
import { NavLink } from "@/components/organisms/navigation/NavLink";
import { PopoverItem } from "@/components/organisms/navigation/popover";

export function Header({ nav, extraNav, classnames, sticky }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className={`${classnames} bg-white z-40`}>
      <Container className="py-3 relative flex justify-between">
        <div className="flex items-center md:gap-x-12">
          <Link href="/" aria-label="Home">
            <Image
              src="/logo.png"
              alt="BBM"
              width={593}
              height={327}
              classnames={clsx(
                "object-contain max-w-20",
                sticky ? "h-20" : "w-18",
              )}
            />
          </Link>
        </div>
        <div className="flex items-center gap-x-5 md:gap-x-8">
          <div className="hidden lg:flex lg:items-center md:gap-x-10">
            {nav.map(({ title, href, children }) => {
              if (children && children.length > 0) {
                return (
                  <PopoverItem
                    key={title}
                    classnames="font-semibold"
                    item={{ title, children }}
                  />
                );
              }
              return (
                <NavLink key={title} href={href}>
                  {title}
                </NavLink>
              );
            })}
          </div>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>

          {/* Side navigation */}
          <div className="-mr-1">
            <Sidebar
              nav={extraNav}
              mobileMenuOpen={mobileMenuOpen}
              setMobileMenuOpen={setMobileMenuOpen}
            />
          </div>

          {/* Mobile navigation
          <div className="-mr-1">
            <Sidebar
              nav={[...nav, ...topbar]}
              mobileMenuOpen={mobileMenuOpen}
              setMobileMenuOpen={setMobileMenuOpen}
            />
          </div>*/}
        </div>
      </Container>
    </nav>
  );
}
