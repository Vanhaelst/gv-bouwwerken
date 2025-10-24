"use client";

import { Topbar } from "./topbar";
import { Header } from "./header";
import { useEffect, useState } from "react";

export function NavigationClient({ nav, topbar, companyData, extraNav }) {
  const [sticky, setSticky] = useState(false);

  const onScroll = () => {
    const someDiv = document.getElementById("top")?.getBoundingClientRect().top;
    if (someDiv <= -200) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
  }, []);

  return (
    <header>
      <div id="top" />
      {topbar.length ? <Topbar items={topbar} /> : null}
      <Header
        topbar={topbar}
        nav={nav}
        companyData={companyData}
        extraNav={extraNav}
        classnames="relative"
      />

      {/* sticky navigation */}
      <Header
        sticky
        topbar={topbar}
        nav={nav}
        companyData={companyData}
        extraNav={extraNav}
        classnames={`${sticky ? "top-0" : "-top-40"} fixed shadow-xl left-0 w-full transition-all duration-300`}
      />
    </header>
  );
}
