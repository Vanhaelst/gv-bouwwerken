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

export function Header({
  nav,
  topbar,
  companyData,
  extraNav,
  classnames,
  sticky,
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const logo = companyData?.navigationLogo?.[0];
  return (
    <nav className={clsx(classnames, "bg-white z-40", sticky ? "" : "py-4")}>
      <Container className="py-3 relative flex justify-between">
        <div className="flex items-center md:gap-x-12">
          <Link href="/" aria-label="Home">
            <Image
              src={logo ? logo.url : "/logo.png"}
              alt="BBM"
              width={logo ? logo.width : 593}
              height={logo ? logo.height : 327}
              classnames={clsx(
                "object-contain",
                sticky
                  ? process.env.NEXT_PUBLIC_SITE === "bouwwerkenGv"
                    ? "w-18"
                    : "w-40"
                  : process.env.NEXT_PUBLIC_SITE === "bouwwerkenGv"
                    ? "w-28"
                    : "w-40",
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
            className={clsx(
              extraNav.length === 0 && "lg:hidden",
              "-m-2.5 rounded-md p-2.5 text-gray-700",
            )}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>

          {/* Side navigation */}
          {extraNav.length > 0 ? (
            <div className="-mr-1">
              <Sidebar
                nav={extraNav}
                mobileMenuOpen={mobileMenuOpen}
                setMobileMenuOpen={setMobileMenuOpen}
              />
            </div>
          ) : null}

          {/* Mobile navigation */}
          <div className="-mr-1">
            <Sidebar
              nav={[...extraNav, ...nav, ...topbar]}
              mobileMenuOpen={mobileMenuOpen}
              setMobileMenuOpen={setMobileMenuOpen}
            />
          </div>
        </div>
      </Container>
    </nav>
  );
}
