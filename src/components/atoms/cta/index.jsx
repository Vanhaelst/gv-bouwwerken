export const Cta = ({ text, cta, href, variant }) => {
  const getVariant = () => {
    switch (variant) {
      case "primary":
        return {
          textColor: "text-white",
          linkTextColor: "text-white",
          bgColor: "bg-primary-500",
          bgHoverColor: "hover:bg-primary-600",
        };

      default:
        return {
          textColor: "text-gray-500",
          linkTextColor: "text-primary-600",
          bgColor: "bg-white",
          bgHoverColor: "",
        };
    }
  };

  const { textColor, linkTextColor, bgColor, bgHoverColor } = getVariant();

  return (
    <a
      href={href}
      className={`whitespace-nowrap font-semibold ml-2 ${linkTextColor}`}
    >
      <div
        className={`relative rounded-full px-3 py-1 text-sm/6 ${bgColor} ${bgHoverColor} ${textColor} ring-1 ring-gray-900/10 hover:ring-gray-900/20`}
      >
        {text} <span aria-hidden="true" className="absolute inset-0" />
        {cta} <span aria-hidden="true">&rarr;</span>
      </div>
    </a>
  );
};
