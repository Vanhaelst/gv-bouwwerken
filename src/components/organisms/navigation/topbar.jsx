"use client";

import { Container } from "@/components/atoms/container";
import { PopoverItem } from "@/components/organisms/navigation/popover";
import { NavLink } from "@/components/organisms/navigation/NavLink";

export function Topbar({ items }) {
  return (
    <>
      <div className="hidden lg:block relative z-50 bg-white border-b border-slate-200 px-4">
        <Container className="relative z-50 flex justify-end">
          <div className="flex items-center md:gap-x-12">
            <div className="hidden md:flex md:gap-x-6 py-2 items-center">
              {items.map(({ id, title, href, children }) => {
                if (children && children.length > 0) {
                  return (
                    <PopoverItem
                      key={id}
                      level="xs"
                      variant="small"
                      item={{ title, children }}
                    />
                  );
                }
                return (
                  <NavLink
                    key={id}
                    href={href}
                    level="xs"
                    className="text-slate-800 hover:underline"
                  >
                    {title}
                  </NavLink>
                );
              })}
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}
