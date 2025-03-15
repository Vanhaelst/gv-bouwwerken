import { ChevronRightIcon, HomeIcon } from "@heroicons/react/20/solid";

export default function Breadcrumbs({ breadcrumbs, image }) {
  return (
    <nav aria-label="Breadcrumb" className="flex md:px-10 z-10">
      <ol role="list" className="flex items-center space-x-4">
        <li>
          <div>
            <a
              href="/"
              className={
                image ? "text-white" : "text-gray-400 hover:text-gray-500"
              }
            >
              <HomeIcon aria-hidden="true" className="size-5 shrink-0" />
              <span className="sr-only">Home</span>
            </a>
          </div>
        </li>
        {breadcrumbs.map((page) => (
          <li key={page.name}>
            <div className="flex items-center">
              <ChevronRightIcon
                aria-hidden="true"
                className={`size-5 shrink-0 ${image ? "text-white" : "text-gray-400"}`}
              />
              <a
                href={page.href}
                aria-current={page.current ? "page" : undefined}
                className={`ml-4 text-sm font-medium ${image ? "text-white hover:underline" : "text-gray-500 hover:text-gray-700"} `}
              >
                {page.name}
              </a>
            </div>
          </li>
        ))}
      </ol>
    </nav>
  );
}
