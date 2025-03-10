import clsx from "clsx";

export function Container({ className, size, ...props }) {
  const getSize = () => {
    switch (size) {
      case "small":
        return "max-w-4xl";
      default:
        return "max-w-7xl";
    }
  };

  return (
    <div
      className={clsx("mx-auto px-4 sm:px-6 lg:px-8", getSize(), className)}
      {...props}
    />
  );
}
