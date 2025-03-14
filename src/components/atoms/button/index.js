import Link from "next/link";
import clsx from "clsx";

const baseStyles = {
  clean:
    "group inline-flex items-center justify-center my-4 text-sm font-semibold",
  solid:
    "group inline-flex items-center justify-center py-4 px-8 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2",
  outline:
    "group inline-flex ring-1 items-center justify-center py-4 px-8 text-sm focus:outline-none",
};

const variantStyles = {
  solid: {
    slate:
      "bg-slate-900 text-white hover:bg-slate-700 hover:text-slate-100 active:bg-slate-800 active:text-slate-300 focus-visible:outline-slate-900",
    primary:
      "bg-primary-500 text-white hover:text-slate-100 hover:bg-primary-700 active:bg-blue-800 active:text-primary-100 focus-visible:outline-primary-600",
    "primary-dark":
      "bg-primary-800 text-white hover:text-slate-100 hover:bg-primary-700 active:bg-blue-800 active:text-primary-100 focus-visible:outline-primary-600",
    white:
      "bg-white text-slate-900 hover:bg-blue-50 active:bg-blue-200 active:text-slate-600 focus-visible:outline-white",
    black:
      "bg-black text-slate-900 hover:bg-blue-50 active:bg-blue-200 active:text-slate-600 focus-visible:outline-white",
  },
  clean: {
    black:
      "text-slate-900 hover:text-primary-600 active:bg-blue-200 active:text-slate-600 focus-visible:outline-white",
    white: "text-gray-200 hover:text-white",
  },
  outline: {
    slate:
      "ring-slate-200 text-slate-700 hover:text-slate-900 hover:ring-slate-300 active:bg-slate-100 active:text-slate-600 focus-visible:outline-blue-600 focus-visible:ring-slate-300",
    white:
      "ring-white text-white hover:bg-white hover:text-primary-800 active:ring-white active:text-slate-400 focus-visible:outline-white focus-visible:outline-blue-800 focus-visible:ring-slate-800",
    primary:
      "ring-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white active:ring-primary-500 focus-visible:outline-blue-800 focus-visible:ring-slate-800",
  },
};

export function Button({
  variant = "outline",
  color = "primary",
  type = "button",
  onClick,
  className,
  disabled,
  href,
  ...props
}) {
  const classNames = clsx(
    baseStyles[variant],
    variantStyles[variant][color],
    className,
  );

  return typeof href === "undefined" ? (
    <button
      disabled={disabled}
      type={type}
      onClick={onClick}
      className={clsx([
        classNames,
        disabled ? "cursor-not-allowed disabled:bg-gray-500" : "cursor-pointer",
      ])}
      {...props}
    />
  ) : (
    <Link
      href={href || ""}
      className={clsx([
        classNames,
        disabled ? "cursor-not-allowed disabled:bg-text-500" : "cursor-pointer",
      ])}
      {...props}
    />
  );
}
