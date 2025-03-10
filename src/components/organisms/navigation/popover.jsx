import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import clsx from "clsx";
import { Text } from "@/components/atoms/text/text.component";
import { NavLink } from "@/components/organisms/navigation/NavLink";

export function PopoverItem({
  item,
  color,
  variant,
  classnames,
  level = "sm",
  popover = true,
}) {
  const getVariant = () => {
    switch (variant) {
      case "small":
        return {
          panel: "px-2",
          child: "px-2 py-1",
          rounded: "rounded-lg",
        };
      default:
        return {
          panel: "p-4",
          child: "p-4",
          rounded: "rounded-3xl",
        };
    }
  };

  const { panel, child, rounded } = getVariant();
  const { children, title } = item;
  return (
    <Popover className="relative">
      <PopoverButton
        className={clsx("hover:cursor-pointer flex justify-center w-full")}
      >
        <NavLink
          key={title}
          level={level}
          classnames={clsx(
            "inline-flex items-center gap-x-1 hover:text-primary-500",
            color === "white" ? "text-slate-800" : "text-gray-900",
            classnames,
          )}
        >
          {title} <ChevronDownIcon aria-hidden="true" className="size-5" />
        </NavLink>
      </PopoverButton>

      <PopoverPanel
        transition
        className={clsx(
          popover && panel,
          "relative z-50 mt-4 flex w-screen max-w-max",
          popover &&
            "transition md:absolute left-1/2 -translate-x-1/2 data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in",
        )}
      >
        <div
          className={clsx(
            "w-screen max-w-fit flex-auto",
            popover &&
              "overflow-hidden bg-white shadow-lg ring-1 ring-gray-900/5",
            rounded,
          )}
        >
          <div className={clsx("gap-x-4", popover ? "p-2" : "space-y-4")}>
            {children.map((item, index) => (
              <div
                key={index}
                className={clsx(
                  popover ? child : "flex justify-center",
                  "group relative flex rounded-lg hover:bg-gray-50",
                )}
              >
                <NavLink
                  key={title}
                  classnames={clsx(
                    "inline-flex items-center gap-x-1 hover:text-primary-500",
                    color === "white" ? "text-slate-800" : "text-gray-900",
                    classnames,
                  )}
                >
                  {item.title}
                </NavLink>
              </div>
            ))}
          </div>
        </div>
      </PopoverPanel>
    </Popover>
  );
}
