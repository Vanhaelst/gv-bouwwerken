"use client";

import { DialogPanel, Dialog } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";

import { Container } from "@/components/atoms/container";
import { NavLink } from "@/components/organisms/navigation/NavLink";
import { PopoverItem } from "@/components/organisms/navigation/popover";
import clsx from "clsx";

export function Sidebar({ nav, mobileMenuOpen, setMobileMenuOpen }) {
  return (
    <Dialog
      open={mobileMenuOpen}
      onClose={setMobileMenuOpen}
      transition
      className="w-full"
    >
      <DialogPanel
        transition
        className={clsx(
          "fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 md:px-0 md:py-3 sm:ring-1 sm:ring-gray-900/10",
          "duration-300 ease-out data-[closed]:scale-95 data-[closed]:opacity-0",
          "h-full  flex flex-col items-center justify-center",
        )}
      >
        <Container className="absolute w-full top-4">
          <div className="px-5 md:px-7 top-2 right-7 h-10 relative">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700 absolute right-0"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
        </Container>

        <Container className="relative">
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <div className="mt-6 flow-root">
                  <div className="-my-6 divide-y divide-gray-500/10">
                    <div className="flex flex-col items-center space-y-8 py-6">
                      {nav?.map(({ title, href, children }) => {
                        if (children && children.length > 0) {
                          return (
                            <PopoverItem
                              key={title}
                              popover={false}
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
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </DialogPanel>
    </Dialog>
  );
}
