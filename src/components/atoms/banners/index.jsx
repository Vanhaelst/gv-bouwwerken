"use client";

import { XMarkIcon } from "@heroicons/react/20/solid";
import { useEffect, useState } from "react";

export default function Banner({ title, description, cta, href, id }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const showedPopup = localStorage.getItem(`banner-${id}`);
    const today = new Date().toDateString();
    if (today !== showedPopup) {
      setShow(true);
    }
  }, []);

  const closeBanner = () => {
    localStorage.setItem(`banner-${id}`, new Date().toDateString());
    setShow(false);
  };

  return (
    <div
      className={`relative pointer-events-none inset-x-0 transition-all duration-1000 ${show ? "opacity-1 h-[50px]" : "opacity-0 h-0"}`}
    >
      <div className="pointer-events-auto flex items-center justify-between gap-x-6 bg-primary-500 border border-white px-6 py-2.5 sm:rounded-xl sm:py-3 sm:pl-4 sm:pr-3.5">
        <p className="text-sm/6 text-white w-full text-center">
          <a href={href}>
            <strong className="font-semibold">{title}</strong>
            <svg
              viewBox="0 0 2 2"
              aria-hidden="true"
              className="mx-2 inline size-0.5 fill-current"
            >
              <circle r={1} cx={1} cy={1} />
            </svg>
            {description}
            <svg
              viewBox="0 0 2 2"
              aria-hidden="true"
              className="mx-2 inline size-0.5 fill-current"
            >
              <circle r={1} cx={1} cy={1} />
            </svg>
            {cta}&nbsp;
            <span aria-hidden="true">&rarr;</span>
          </a>
        </p>
        <button
          type="button"
          onClick={closeBanner}
          className="-m-3 flex-none p-3 focus-visible:outline-offset-[-4px]"
        >
          <span className="sr-only">Dismiss</span>
          <XMarkIcon aria-hidden="true" className="size-5 text-white" />
        </button>
      </div>
    </div>
  );
}
