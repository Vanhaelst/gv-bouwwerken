import clsx from "clsx";

import { Text } from "@/components/atoms/text/text.component";

export function NavLink({ href, children, level = "sm", classnames = "" }) {
  return (
    <a href={href} className="inline-block">
      <Text
        as="span"
        level={level}
        classnames={clsx(
          "uppercase text-slate-700 hover:text-primary-500",
          classnames,
        )}
      >
        {children}
      </Text>
    </a>
  );
}
